const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

function slugify(value) {
  return String(value || "amity-note")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70) || "amity-note";
}

function fieldText(field) {
  const label = field.closest("label");
  return field.dataset.label || (label ? label.childNodes[0].textContent.trim() : field.name);
}

function buildNoteMarkdown(form) {
  const title = form.dataset.noteTitle || "Amity outdoor fitness note";
  const lines = [`# ${title}`, "", `- Date: ${new Date().toISOString().slice(0, 10)}`, ""];
  const handledCheckboxGroups = new Set();

  form.querySelectorAll("input, textarea, select, fieldset").forEach((field) => {
    if (field.tagName === "FIELDSET") {
      const checked = Array.from(field.querySelectorAll("input[type='checkbox']:checked")).map((input) => input.value);
      lines.push(`## ${field.dataset.label || field.querySelector("legend")?.textContent || "Choices"}`, "");
      lines.push(checked.length ? checked.map((value) => `- ${value}`).join("\n") : "To be confirmed");
      lines.push("");
      field.querySelectorAll("input[type='checkbox']").forEach((input) => handledCheckboxGroups.add(input.name));
      return;
    }

    if (field.type === "checkbox") {
      if (!handledCheckboxGroups.has(field.name)) {
        lines.push(`## ${fieldText(field)}`, "");
        lines.push(field.checked ? field.value : "To be confirmed", "");
      }
      return;
    }

    if (field.closest("fieldset")) return;

    const value = String(field.value || "").trim();
    lines.push(`## ${fieldText(field)}`, "");
    lines.push(value || "To be confirmed", "");
  });

  return `${lines.join("\n").trim()}\n`;
}

function storedNotes() {
  try {
    return JSON.parse(localStorage.getItem("amityGrantNotes") || "[]");
  } catch {
    return [];
  }
}

function saveStoredNote(form, markdown) {
  const notes = storedNotes();
  const key = form.dataset.filePrefix || slugify(form.dataset.noteTitle);
  const item = {
    key,
    title: form.dataset.noteTitle || "Amity outdoor fitness note",
    markdown,
    savedAt: new Date().toISOString()
  };
  const next = notes.filter((note) => note.key !== key);
  next.push(item);
  localStorage.setItem("amityGrantNotes", JSON.stringify(next));
}

document.querySelectorAll(".note-form").forEach((form) => {
  const save = () => saveStoredNote(form, buildNoteMarkdown(form));
  form.addEventListener("input", save);
  form.addEventListener("change", save);
  save();
});

function buildFullResponseMarkdown() {
  const supportLevel = document.querySelector("#supportLevel")?.value || "To be confirmed";
  const moreOf = document.querySelector("#moreOf")?.value.trim() || "To be confirmed";
  const lessOf = document.querySelector("#lessOf")?.value.trim() || "To be confirmed";
  const condition = document.querySelector("#supportCondition")?.value.trim() || "To be confirmed";
  const notes = storedNotes();
  const lines = [
    "# Amity outdoor fitness proposal response",
    "",
    `- Date: ${new Date().toISOString().slice(0, 10)}`,
    `- Support position: ${supportLevel}`,
    "",
    "## Before I give full support",
    "",
    condition,
    "",
    "## The proposal needs more of",
    "",
    moreOf,
    "",
    "## The proposal needs less of",
    "",
    lessOf,
    "",
    "## Saved page notes",
    ""
  ];

  if (notes.length) {
    notes.forEach((note) => {
      lines.push(`---`, "", note.markdown.trim(), "");
    });
  } else {
    lines.push("No saved page notes yet. Add quick notes as you move through the proposal pages.");
  }

  return `${lines.join("\n").trim()}\n`;
}

function refreshResponseAssembler() {
  const preview = document.querySelector("#assembledResponse");
  if (!preview) return;
  preview.textContent = buildFullResponseMarkdown();
}

document.querySelectorAll("#supportLevel, #moreOf, #lessOf, #supportCondition").forEach((field) => {
  field.addEventListener("input", refreshResponseAssembler);
  field.addEventListener("change", refreshResponseAssembler);
});

const downloadResponse = document.querySelector("#downloadResponse");
if (downloadResponse) {
  downloadResponse.addEventListener("click", () => {
    const markdown = buildFullResponseMarkdown();
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const today = new Date().toISOString().slice(0, 10);
    const link = document.createElement("a");
    link.href = url;
    link.download = `amity-proposal-response-${today}.md`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });
}

if (document.querySelector("#assembledResponse")) {
  refreshResponseAssembler();
}

if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) {
    setTimeout(() => target.scrollIntoView({ block: "start" }), 80);
  }
}

const topButton = document.createElement("button");
topButton.type = "button";
topButton.className = "top-button";
topButton.textContent = "Top";
topButton.setAttribute("aria-label", "Back to top");
document.body.appendChild(topButton);

function toggleTopButton() {
  topButton.classList.toggle("visible", window.scrollY > 420);
}

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", toggleTopButton, { passive: true });
toggleTopButton();
