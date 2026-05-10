const DATA={
  stats:[
    {label:'Queensland adults sufficiently active',value:55.5,suffix:'%',note:'2024 Queensland adult activity estimate',source:'Queensland Chief Health Officer'},
    {label:'Queensland adults inactive',value:13.4,suffix:'%',note:'Adults reporting no physical activity',source:'Queensland Chief Health Officer'},
    {label:'Australian adults 18–64 missing cardio + strength target',value:78,suffix:'%',note:'Did not meet both physical activity and strength guidelines',source:'AIHW'},
    {label:'Australian adults 18–64 missing strength target',value:73,suffix:'%',note:'Did not do muscle strengthening at least two days per week',source:'AIHW'},
    {label:'Australian adults 65+ missing cardio + strength target',value:89,suffix:'%',note:'Older adults need mobility and strength options too',source:'AIHW'},
    {label:'Australian adults experiencing loneliness',value:15,suffix:'%',note:'Outdoor social spaces can support connection',source:'AIHW'},
    {label:'Queensland children active every day',value:50,suffix:'%',note:'Regular activity needs easy local options',source:'Queensland Chief Health Officer'},
    {label:'Australian adults doing no vigorous activity',value:25,suffix:'%',note:'A simple outdoor circuit can make intensity easier to start',source:'ABS'}
  ],
  tiers:[
    {id:'pilot',name:'Pilot / grant starter',cost:'$12k–$25k',sort:18000,summary:'Use this to prove local support, prepare designs and run early activation.',includes:['Community consultation and one-page concept plan','Site check, service check and supplier quotes','QR workout signs, launch classes and portable stretch gear','Small shade or seating improvements if approvals allow'],bestFor:['Rapid Response','Mayor/Councillors','Community Support'],funding:[['Small Council grants',9000],['Local sponsorship/in-kind',4000],['Community fundraising',3000],['Design support',6000]]},
    {id:'starter',name:'Starter build',cost:'$45k–$75k',sort:60000,summary:'A small but real calisthenics cluster with surfacing, signage and shade basics.',includes:['Pull-up, dip, push-up, step-up and sit-up stations','Compliant softfall or firm accessible surfacing','Plain instruction signage and beginner/intermediate/advanced QR routines','Basic seating, shade planning and maintenance allowance'],bestFor:['Community Support','GCBF','Stronger Communities'],funding:[['GCBF or similar',30000],['Community Support',15000],['SCP / local MP',15000],['In-kind',10000]]},
    {id:'medium',name:'Happy medium',cost:'$120k–$180k',sort:150000,summary:'The best first serious grant target: visible, useful, inclusive and still plain to assess.',includes:['8–12 station full-body bodyweight and mobility circuit','Accessible loop path, surfacing, seating and clear signage','Shade, water refill planning and low-maintenance coastal materials','Mind-body stretch area with simple breath, balance and mobility prompts','Launch programme with local sessions and usage measurement'],bestFor:['Build and Thrive','GCBF','Games On Field of Play','Council/in-kind'],funding:[['Build and Thrive',85500],['GCBF / equipment grant',30000],['Stronger Communities',20000],['Council, sponsor or in-kind',14500]]},
    {id:'stretch',name:'Stretch build',cost:'$250k–$450k',sort:320000,summary:'A stronger precinct with more shade, access, youth challenge and wellbeing features.',includes:['Two connected zones: calisthenics challenge plus accessible mobility circuit','Yoga/Tai chi deck or hardstand, seating circle and quiet wellbeing signs','Public art and place elements co-designed through proper engagement','Better shade, water, lighting review, bike racks and landscaping','Robust maintenance and evaluation programme'],bestFor:['Games On Field of Play','Build and Thrive','Council co-contribution','Corporate sponsorship'],funding:[['Games On Field of Play',250000],['Council / partner co-contribution',45000],['Local grants and sponsors',25000]]},
    {id:'precinct',name:'Big dream precinct',cost:'$700k–$1.2m+',sort:950000,summary:'A whole active recreation upgrade. Powerful, but needs serious design, permissions and co-funding.',includes:['Connected fit trail, accessible loop and larger shade structures','Skate, scooter, youth, strength, balance and wellbeing links','Solar lighting review, counters, water, amenities and landscape upgrades','Formal cultural, environmental and public art process','Detailed designs, approvals, co-contributions and project management'],bestFor:['Games On Partnership','Federal infrastructure programmes','Council capital works'],funding:[['Large state/federal grant',500000],['Council / partner contribution',400000],['Sponsorship and philanthropy',50000]]}
  ],
  equipment:[
    {category:'Strength',icon:'🏋️',name:'Pull-up and chin-up bars',why:'High-value bodyweight strength station with beginner to advanced uses.',spec:'Use marine-grade finishes, simple fixed bars and clear height options.',tags:['Upper body','Low moving parts','All ages']},
    {category:'Strength',icon:'🤸',name:'Parallel bars and dip rails',why:'Supports dips, rows, assisted squats, balance practice and modified exercises.',spec:'Choose different heights, rounded edges and accessible approach space.',tags:['Strength','Balance','Flexible']},
    {category:'Strength',icon:'🧱',name:'Step-up and plyometric blocks',why:'Useful for legs, cardio bursts, youth challenge and older-adult controlled steps.',spec:'Non-slip tops, visible edges and fall-zone planning matter.',tags:['Legs','Cardio','Simple']},
    {category:'Strength',icon:'↗️',name:'Incline sit-up bench and push-up rails',why:'Classic core and pushing options, easy to explain with signage.',spec:'Prefer static stainless or galvanised fixtures with sealed fixings.',tags:['Core','Push','Static']},
    {category:'Mobility',icon:'🧘',name:'Stretch posts and shoulder wheel',why:'Gentle stretching, shoulder mobility and rehab-style movement for many users.',spec:'Select durable components, easy instructions and minimal pinch points.',tags:['Mobility','Older users','Wellbeing']},
    {category:'Mobility',icon:'🚲',name:'Low-impact cycle or hand cycle',why:'Good for people starting again, older adults and users who prefer seated motion.',spec:'Only include if maintenance for bearings and moving parts is funded.',tags:['Accessible','Low impact','Seated']},
    {category:'Mobility',icon:'⚖️',name:'Balance rails and stable pods',why:'Supports falls-prevention style exercises, kids, elders and mindful movement.',spec:'Keep heights low, surfaces non-slip and routes clear.',tags:['Balance','Falls prevention','Beginner']},
    {category:'Youth',icon:'🪜',name:'Low challenge trail',why:'A safe youth-friendly path using agility markings, low rails and stepping elements.',spec:'Avoid risky homemade obstacles; use certified public-space equipment.',tags:['Youth','Agility','Skate link']},
    {category:'Mind-body',icon:'🌿',name:'Yoga / Tai chi hardstand',why:'Creates space for stretching, breathwork, group classes and quiet recovery.',spec:'Use shade, seating, simple prompts and a surface that handles sand and rain.',tags:['Mind-body','Group use','Quiet']},
    {category:'Mind-body',icon:'🌀',name:'Mindful path or small labyrinth',why:'A low-cost mental wellbeing feature that invites slow walking and reflection.',spec:'Use durable ground marking or pavers, with cultural content only by permission.',tags:['Calm','Connection','Low cost']},
    {category:'Access',icon:'♿',name:'Accessible loop and turning spaces',why:'Equipment is only inclusive if users can reach, turn, rest and choose options.',spec:'Plan firm paths, rest points, clear sightlines and wheelchair approach zones.',tags:['Universal design','Access','Safety']},
    {category:'Amenity',icon:'☀️',name:'Shade, seating and water refill',why:'On a hot coastal island, comfort and hydration will affect actual use.',spec:'Shade structures, trees, benches, bins and water need approval and maintenance.',tags:['Comfort','Heat','Practical']},
    {category:'Amenity',icon:'📱',name:'QR workouts and plain signs',why:'Turns basic equipment into beginner, intermediate and advanced programmes.',spec:'Keep signs simple, readable and non-clinical; include safety and maintenance contacts.',tags:['Instruction','Data','Low cost']},
    {category:'Environment',icon:'🪴',name:'Native shade planting and drainage',why:'Improves comfort, looks after the place and reduces hard-surface heat.',spec:'Check tree roots, sightlines, species choice, irrigation and coastal wind exposure.',tags:['Shade','Care for place','Resilience']},
    {category:'Culture',icon:'🎨',name:'Local art and place story elements',why:'Can make the circuit feel like Amity, not a generic gym dropped on sand.',spec:'Only co-design cultural material with appropriate permission and paid engagement.',tags:['Place','Respect','Community']}
  ],
  grants:[
    {name:'Redland City Council Community Support Grant',amount:'Up to $20,000',status:'Quarterly rounds',fit:'Good for community wellbeing, recreation, inclusion and local benefit.',note:'Useful for design, small works, activation or a contribution to a staged build.',level:'Starter / medium'},
    {name:'Redland City Council Build and Thrive Grant',amount:'Up to $85,500 over three years',status:'Future rounds listed',fit:'Strong local fit for community infrastructure, accessibility and resilience.',note:'Best as the anchor grant for the happy medium tier; check equipment caps and capital works rules.',level:'Happy medium'},
    {name:'Redland Rapid Response Grant',amount:'$500–$3,000',status:'Rolling when open',fit:'Good for seed funding, small portable equipment, community engagement or launch activity.',note:'Use before a bigger build, not as the main construction grant.',level:'Pilot'},
    {name:'Mayor and Councillors Community Benefit Fund',amount:'Up to $3,000 for organisations',status:'Local small grant',fit:'Good for small equipment, events, signage or consultation support.',note:'Landowner consent is important for work on public land.',level:'Pilot'},
    {name:'Queensland Gambling Community Benefit Fund',amount:'Round cap to confirm when open',status:'Next round details pending',fit:'Good general-purpose community grant for equipment and facility improvements.',note:'Use for a portion of equipment, shade, signage or amenities if eligible.',level:'Starter / medium'},
    {name:'Queensland Games On! Field of Play',amount:'Often $50,000–$499,999 for urban/regional LGAs',status:'ROI closed for current round',fit:'Strong fit for sport and active recreation infrastructure if a future round opens or a partner has submitted ROI.',note:'Needs designs, approvals, budget, co-contribution and completion planning.',level:'Medium / stretch'},
    {name:'Queensland Games On! Partnership Fund',amount:'Large projects from about $500,000+',status:'ROI closed for current round',fit:'Only for a bigger precinct with major co-contribution and strong regional logic.',note:'Not a first application unless Council leads or co-funding is serious.',level:'Big dream'},
    {name:'Stronger Communities Programme',amount:'Up to $20,000',status:'Invitation through local MP',fit:'Good small federal contribution to community infrastructure if invited.',note:'Use as a gap-filler in the happy medium stack.',level:'Starter / medium'},
    {name:'Play Our Way',amount:'Programme closed; monitor future rounds',status:'Closed',fit:'Could fit if the project strongly improves access for women and girls.',note:'Would need clear evidence of consultation and ongoing benefit.',level:'Medium'},
    {name:'Growing Regions / federal infrastructure programmes',amount:'Large capital works; future rounds unknown',status:'Closed / monitor GrantConnect',fit:'Only relevant for a major precinct-scale project.',note:'Use GrantConnect for current federal opportunities.',level:'Big dream'}
  ]
};

const $=sel=>document.querySelector(sel), $$=sel=>Array.from(document.querySelectorAll(sel));
const money=n=>n.toLocaleString('en-AU',{style:'currency',currency:'AUD',maximumFractionDigits:0});

function renderStats(){
  const grid=$('#stat-grid');
  grid.innerHTML=DATA.stats.slice(0,4).map(s=>`<article class="stat-card"><div class="stat-value">${s.value}${s.suffix}</div><p>${s.label}</p><span class="stat-source">${s.source}</span></article>`).join('');
  const chart=$('#evidence-chart');
  chart.innerHTML=DATA.stats.map(s=>`<div class="bar-row"><div class="bar-label">${s.label}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.min(s.value,100)}%"></div></div><div class="bar-num">${s.value}${s.suffix}</div></div>`).join('');
}

function renderTiers(){
  const list=$('#tier-list'), detail=$('#tier-detail');
  list.innerHTML=DATA.tiers.map((t,i)=>`<button class="tier-button ${i===2?'active':''}" data-tier="${t.id}"><strong>${t.name}</strong><span>${t.cost}</span></button>`).join('');
  function show(id){
    $$('.tier-button').forEach(b=>b.classList.toggle('active',b.dataset.tier===id));
    const t=DATA.tiers.find(x=>x.id===id);
    const total=t.funding.reduce((a,b)=>a+b[1],0);
    detail.innerHTML=`<h3>${t.name}</h3><div class="tier-cost">${t.cost}</div><p>${t.summary}</p><div class="pill-row">${t.bestFor.map(x=>`<span class="pill">${x}</span>`).join('')}</div><h4>What it includes</h4><ul class="tick-list">${t.includes.map(x=>`<li>${x}</li>`).join('')}</ul><h4>Example funding stack</h4><div class="funding-stack">${t.funding.map(([name,val])=>`<div class="stack-row"><strong>${name}</strong><div class="bar-track"><div class="stack-fill" style="width:${Math.max(8,val/total*100)}%"></div></div><span>${money(val)}</span></div>`).join('')}</div>`;
  }
  list.addEventListener('click',e=>{const b=e.target.closest('.tier-button');if(b)show(b.dataset.tier)});
  show('medium');
}

function renderEquipment(){
  const categories=['All',...new Set(DATA.equipment.map(e=>e.category))], filters=$('#equipment-filters'), grid=$('#equipment-grid');
  filters.innerHTML=categories.map((c,i)=>`<button class="filter-chip ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
  function draw(cat='All'){
    $$('.filter-chip').forEach(c=>c.classList.toggle('active',c.dataset.cat===cat));
    const items=cat==='All'?DATA.equipment:DATA.equipment.filter(e=>e.category===cat);
    grid.innerHTML=items.map(e=>`<article class="equipment-card"><div class="equipment-icon">${e.icon}</div><h3>${e.name}</h3><p><strong>Why:</strong> ${e.why}</p><p><strong>Coastal spec:</strong> ${e.spec}</p><div class="tags">${e.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></article>`).join('');
  }
  filters.addEventListener('click',e=>{const b=e.target.closest('.filter-chip');if(b)draw(b.dataset.cat)});
  draw();
}

function renderGrants(){
  $('#grant-grid').innerHTML=DATA.grants.map(g=>`<article class="grant-card"><div class="grant-meta"><span>${g.amount}</span><span>${g.status}</span><span>${g.level}</span></div><h3>${g.name}</h3><p>${g.fit}</p><p>${g.note}</p><div class="fit">Best use: ${g.level}</div></article>`).join('');
}

function renderImpact(){
  const input=$('#visits'), label=$('#visit-count'), grid=$('#impact-grid');
  function draw(){
    const visits=Number(input.value), annual=visits*52, minutes=annual*22, sessions=Math.round(visits/14), qr=Math.round(visits*.34*52);
    label.textContent=visits.toLocaleString('en-AU');
    grid.innerHTML=`<div class="impact-metric"><strong>${annual.toLocaleString('en-AU')}</strong><span>estimated uses per year</span></div><div class="impact-metric"><strong>${Math.round(minutes/60).toLocaleString('en-AU')}</strong><span>active hours enabled</span></div><div class="impact-metric"><strong>${sessions}</strong><span>possible small group sessions/month</span></div><div class="impact-metric"><strong>${qr.toLocaleString('en-AU')}</strong><span>possible QR routine opens/year</span></div>`;
  }
  input.addEventListener('input',draw);draw();
}

function nav(){
  const btn=$('.menu-button'), links=$('#nav-links');
  btn.addEventListener('click',()=>{const open=links.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))});
  links.addEventListener('click',()=>{links.classList.remove('open');btn.setAttribute('aria-expanded','false')});
}

renderStats();renderTiers();renderImpact();renderEquipment();renderGrants();nav();
