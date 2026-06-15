const STORAGE_KEY = 'desChecklists.v2.shared';

const bossRewards = [
  { boss:'Phalanx', group:'World 1', soul:'Lead Demon Soul', soulCopies:1, rewards:['Scraping Spear'] },
  { boss:'Tower Knight', group:'World 1', soul:'Iron Demon Soul', soulCopies:1, rewards:['Warding'] },
  { boss:'Penetrator', group:'World 1', soul:'Silver Demon Soul', soulCopies:2, rewards:['Light Weapon','Cursed Weapon'] },
  { boss:'False King', group:'World 1', soul:'False King Demon Soul', soulCopies:1, rewards:['Northern Regalia'] },
  { boss:'Armor Spider', group:'World 2', soul:'Hard Demon Soul', soulCopies:3, rewards:['Fire Spray','Ignite','Lava Bow'] },
  { boss:'Flamelurker', group:'World 2', soul:'Searing Demon Soul', soulCopies:1, rewards:[], specialEffect:'Unlocks Blacksmith Ed advanced upgrades.' },
  { boss:'Dragon God', group:'World 2', soul:'Dragon Demon Soul', soulCopies:3, rewards:['Fireball','Firestorm',"God's Wrath"] },
  { boss:"Fool's Idol", group:'World 3', soul:'Doll Demon Soul', soulCopies:1, rewards:['Soul Ray'] },
  { boss:'Maneater', group:'World 3', soul:'Mixed Demon Soul', soulCopies:1, rewards:['Needle of Eternal Agony'] },
  { boss:'Old Monk', group:'World 3', soul:'Golden Demon Soul', soulCopies:3, rewards:['Homing Soul Arrow','Soul Thirst','Banish','Insane Catalyst'] },
  { boss:'Adjudicator', group:'World 4', soul:'Swollen Demon Soul', soulCopies:1, rewards:['Regeneration','Meat Cleaver'] },
  { boss:'Old Hero', group:'World 4', soul:'Hero Demon Soul', soulCopies:2, rewards:['Second Chance','Large Sword of Searching'] },
  { boss:'Storm King', group:'World 4', soul:'Storm Demon Soul', soulCopies:3, rewards:['Anti-Magic Field','Morion Blade','Recovery'] },
  { boss:'Leechmonger', group:'World 5', soul:'Wriggling Demon Soul', soulCopies:1, rewards:['Poison Cloud','Cure'] },
  { boss:'Dirty Colossus', group:'World 5', soul:'Eroded Demon Soul', soulCopies:1, rewards:['Acid Cloud'] },
  { boss:'Maiden Astraea', group:'World 5', soul:'Pureblood Demon Soul', soulCopies:3, rewards:['Death Cloud','Relief','Resurrection','Blueblood Sword'] },
  { boss:'Endgame', group:'Endgame', soul:'Maiden in Black Demon Soul', soulCopies:2, rewards:['Soulsucker','Recovery'] },
  { boss:'Vanguard Demon', group:'Other', soul:'Gray Demon Soul', soulCopies:1, rewards:['Dozer Axe'] }
];

const teachers = {
  spells: {
    title:'Spells', icon:'✨', subtitle:'Sage Freke and Yuria spell rewards.',
    groups: [
      { title:'Sage Freke', items:['Warding','Light Weapon','Fire Spray','Fireball','Soul Ray','Homing Soul Arrow','Poison Cloud','Acid Cloud','Death Cloud'] },
      { title:'Yuria', items:['Cursed Weapon','Ignite','Firestorm','Soul Thirst','Relief','Soulsucker'] }
    ]
  },
  miracles: {
    title:'Miracles', icon:'🙏', subtitle:'Saint Urbain miracle rewards.',
    groups: [{ title:'Saint Urbain', items:["God's Wrath",'Banish','Regeneration','Second Chance','Anti-Magic Field','Cure','Resurrection','Recovery'] }]
  },
  weapons: {
    title:'Boss Weapons', icon:'⚔️', subtitle:'Special weapons made with boss souls.',
    groups: [{ title:'Blacksmith Ed / Special Weapons', items:['Scraping Spear','Northern Regalia','Lava Bow','Needle of Eternal Agony','Insane Catalyst','Meat Cleaver','Large Sword of Searching','Morion Blade','Blueblood Sword','Dozer Axe'] }]
  }
};

const rings = [
 'Cat\'s Ring','Clever Rat\'s Ring','Cling Ring','Dull Rat\'s Ring','Eternal Warrior\'s Ring','Foe\'s Ring','Fragrant Ring','Friend\'s Ring','Graverobber\'s Ring','Master\'s Ring','Providential Ring','Regenerator\'s Ring','Ring of Avarice','Ring of Devout Prayer','Ring of Disease Resistance','Ring of Flame Resistance','Ring of Gash Resistance','Ring of Great Strength','Ring of Herculean Strength','Ring of Longevity','Ring of Magical Dullness','Ring of Magical Nature','Ring of Magical Sharpness','Ring of Poison Resistance','Ring of Prayer','Ring of Sincere Prayer','Ring of the Accursed','Ronin\'s Ring','Thief Ring','Sodden Ring'
].sort();

const rewardToSoul = new Map();
bossRewards.forEach(b => b.rewards.forEach(r => rewardToSoul.set(r, b.soul)));

const checklists = {
  rings: { title:'Rings', icon:'💍', subtitle:"King of Ring's Trophy • Demon's Souls Remake", type:'groups', groups:[{title:'All Rings', items:rings.map(name=>({name, meta:''}))}] },
  spells: { ...teachers.spells, type:'groups' },
  miracles: { ...teachers.miracles, type:'groups' },
  weapons: { ...teachers.weapons, type:'groups' },
  bossSouls: { title:'Boss Souls', icon:'👹', subtitle:'Boss soul rewards. Each checkbox uses one soul copy. Duplicate souls are shown as Required ×2, ×3, etc.', type:'bosses' }
};

const order = ['rings','spells','miracles','weapons','bossSouls'];
let current = 'home';
let state = loadState();
let searchTerm = '';

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function keyFor(name){ return name; }
function isChecked(name){ return !!state[keyFor(name)]; }
function setChecked(name, checked){ state[keyFor(name)] = checked; saveState(); render(); }
function allItems(id){
  if(id === 'bossSouls') return bossRewards.flatMap(b=>b.rewards);
  if(id === 'rings') return rings;
  return checklists[id].groups.flatMap(g=>g.items);
}
function counts(id){
  const items = allItems(id);
  const done = items.filter(isChecked).length;
  return { done, total:items.length, percent: items.length ? Math.round(done/items.length*100) : 0 };
}
function overallCounts(){
  const ids = order;
  const total = ids.reduce((n,id)=>n+counts(id).total,0);
  const done = ids.reduce((n,id)=>n+counts(id).done,0);
  return {done,total,percent:total?Math.round(done/total*100):0};
}
function el(id){return document.getElementById(id)}

function renderNav(){
  el('nav').innerHTML = `<button class="${current==='home'?'active':''}" onclick="showHome()">🏠 Home</button>` +
    order.map(id=>`<button class="${current===id?'active':''}" onclick="showChecklist('${id}')">${checklists[id].icon} ${checklists[id].title}</button>`).join('');
}
function renderDashboard(){
  const cards = order.map(id=>{
    const c = counts(id), list = checklists[id];
    return `<article class="card" onclick="showChecklist('${id}')">
      <h3>${list.icon} ${list.title}</h3>
      <p>${list.subtitle}</p>
      <div class="bar"><div style="width:${c.percent}%"></div></div>
      <div class="count"><span>${c.done} / ${c.total}</span><span>${c.percent}%</span></div>
    </article>`;
  }).join('');
  el('dashboard').innerHTML = cards;
}
function renderOverall(){
  const c = overallCounts();
  el('overallSmall').textContent = `${c.percent}%`;
  el('overallSmallFill').style.width = `${c.percent}%`;
}
function renderChecklist(){
  if(current === 'home') return;
  const list = checklists[current];
  const c = counts(current);
  el('viewTitle').textContent = `${list.icon} ${list.title}`;
  el('viewSubtitle').textContent = list.subtitle;
  el('viewCount').textContent = `${c.done} / ${c.total}`;
  el('viewPercent').textContent = `${c.percent}%`;
  el('viewFill').style.width = `${c.percent}%`;
  el('items').innerHTML = current === 'bossSouls' ? renderBossSouls() : renderGroups(current);
}
function itemRow(name, meta=''){
  const checked = isChecked(name);
  const lower = `${name} ${meta}`.toLowerCase();
  if(searchTerm && !lower.includes(searchTerm)) return '';
  return `<div class="row ${checked?'done':''}">
    <input type="checkbox" ${checked?'checked':''} onchange="setChecked('${escapeJs(name)}', this.checked)">
    <label onclick="setChecked('${escapeJs(name)}', ${!checked})"><div class="name">${name}</div>${meta?`<div class="meta">${meta}</div>`:''}</label>
  </div>`;
}
function renderGroups(id){
  const groups = checklists[id].groups.map(g=>{
    const rows = g.items.map(item=>{
      const name = typeof item === 'string' ? item : item.name;
      let meta = typeof item === 'string' ? (rewardToSoul.get(item) ? `Soul: ${rewardToSoul.get(item)}` : '') : item.meta;
      return itemRow(name, meta);
    }).join('');
    if(!rows.trim()) return '';
    return `<section class="group"><div class="group-title">${g.title}</div><div class="list">${rows}</div></section>`;
  }).join('');
  return groups || `<p class="subtitle">No results found.</p>`;
}
function renderBossSouls(){
  const cards = bossRewards.map(b=>{
    const hay = `${b.boss} ${b.soul} ${b.group} ${b.rewards.join(' ')} ${b.specialEffect||''}`.toLowerCase();
    if(searchTerm && !hay.includes(searchTerm)) return '';
    const done = b.rewards.filter(isChecked).length;
    const rows = b.rewards.map(r=>itemRow(r,'')).join('');
    return `<article class="boss-card">
      <span class="badge">Required ×${b.soulCopies}</span>
      <h3>${b.boss}</h3>
      <div class="soul">${b.soul}</div>
      <div class="boss-count">${done} / ${b.rewards.length} rewards checked</div>
      ${rows ? `<div class="list">${rows}</div>` : ''}
      ${b.specialEffect ? `<div class="special-effect">🔓 <strong>Special Effect</strong><br>${b.specialEffect}</div>` : ''}
    </article>`;
  }).join('');
  return cards || `<p class="subtitle">No results found.</p>`;
}
function escapeJs(s){ return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

function showHome(){ current='home'; searchTerm=''; el('search').value=''; el('hero').classList.remove('hidden'); el('dashboard').classList.remove('hidden'); el('checklistView').classList.add('hidden'); render(); closeMenu(); window.scrollTo(0,0); }
function showChecklist(id){ current=id; searchTerm=''; el('search').value=''; el('hero').classList.add('hidden'); el('dashboard').classList.add('hidden'); el('checklistView').classList.remove('hidden'); render(); closeMenu(); window.scrollTo(0,0); }
function render(){ renderNav(); renderOverall(); if(current==='home') renderDashboard(); else renderChecklist(); }
function closeMenu(){ el('sidebar').classList.remove('open'); }

el('menuToggle').addEventListener('click',()=>el('sidebar').classList.toggle('open'));
el('backBtn').addEventListener('click', showHome);
el('search').addEventListener('input', e=>{ searchTerm = e.target.value.trim().toLowerCase(); renderChecklist(); });
el('resetCurrent').addEventListener('click',()=>{
  if(current==='home') return;
  if(!confirm(`Reset ${checklists[current].title}?`)) return;
  allItems(current).forEach(name=>delete state[keyFor(name)]);
  saveState(); render();
});

render();
