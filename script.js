const STORAGE_PREFIX = 'des-checklists-v1:';

const checklists = {
  rings: {
    title: 'Rings', icon: '💍', subtitle: 'King of Ring\'s Trophy • Demon\'s Souls Remake',
    items: [
      'Cat\'s Ring','Clever Rat\'s Ring','Cling Ring','Dull Rat\'s Ring','Eternal Warrior\'s Ring','Foe\'s Ring','Fragrant Ring','Friend\'s Ring','Graverobber\'s Ring','Master\'s Ring','Providential Ring','Regenerator\'s Ring','Ring of Avarice','Ring of Devout Prayer','Ring of Disease Resistance','Ring of Fire Resistance','Ring of Flame Resistance','Ring of Gash Resistance','Ring of Great Strength','Ring of Herculean Strength','Ring of Magical Dullness','Ring of Magical Nature','Ring of Magical Sharpness','Ring of Poison Resistance','Ring of Sincere Prayer','Ring of the Accursed','Ring of the Damned','Ring of Longevity','Ronin\'s Ring','Thief Ring'
    ].sort().map(name => ({ name }))
  },
  bossSouls: {
    title: 'Boss Souls', icon: '👹', subtitle: 'Every boss soul and what it can become.',
    items: [
      { name:'Phalanx', group:'World 1', soul:'Lead Demon Soul', rewards:['Scraping Spear'] },
      { name:'Tower Knight', group:'World 1', soul:'Iron Demon Soul', rewards:['Warding'] },
      { name:'Penetrator', group:'World 1', soul:'Silver Demon Soul', rewards:['Light Weapon','Cursed Weapon'] },
      { name:'False King', group:'World 1', soul:'False King Demon Soul', rewards:['Northern Regalia'] },
      { name:'Armor Spider', group:'World 2', soul:'Hard Demon Soul', rewards:['Fire Spray','Ignite','Lava Bow'] },
      { name:'Flamelurker', group:'World 2', soul:'Searing Demon Soul', rewards:['Unlocks These Upgrades'] },
      { name:'Dragon God', group:'World 2', soul:'Dragon Demon Soul', rewards:['Fireball','Firestorm',"God's Wrath"] },
      { name:"Fool's Idol", group:'World 3', soul:'Doll Demon Soul', rewards:['Soul Ray'] },
      { name:'Maneater', group:'World 3', soul:'Mixed Demon Soul', rewards:['Needle of Eternal Agony'] },
      { name:'Old Monk', group:'World 3', soul:'Golden Demon Soul', rewards:['Homing Soul Arrow','Soul Thirst','Banish','Insane Catalyst'] },
      { name:'Adjudicator', group:'World 4', soul:'Swollen Demon Soul', rewards:['Regeneration','Meat Cleaver'] },
      { name:'Old Hero', group:'World 4', soul:'Hero Demon Soul', rewards:['Second Chance','Large Sword of Searching'] },
      { name:'Storm King', group:'World 4', soul:'Storm Demon Soul', rewards:['Anti-Magic Field','Morion Blade'] },
      { name:'Leechmonger', group:'World 5', soul:'Wriggling Demon Soul', rewards:['Poison Cloud','Cure'] },
      { name:'Dirty Colossus', group:'World 5', soul:'Eroded Demon Soul', rewards:['Acid Cloud'] },
      { name:'Maiden Astraea', group:'World 5', soul:'Pureblood Demon Soul', rewards:['Death Cloud','Relief','Resurrection','Blueblood Sword'] },
      { name:'Endgame', group:'Endgame', soul:'Maiden in Black Demon Soul', rewards:['Soulsucker','Recovery','Upgrades'] },
      { name:'Vanguard Demon', group:'Other', soul:'Gray Demon Soul', rewards:['Dozer Axe'] }
    ]
  },
  spells: {
    title:'Spells', icon:'✨', subtitle:'Sage Freke and Yuria spell rewards.',
    items:[
      {name:'Warding', group:'Sage Freke', soul:'Iron Demon Soul'}, {name:'Light Weapon', group:'Sage Freke', soul:'Silver Demon Soul'}, {name:'Fire Spray', group:'Sage Freke', soul:'Hard Demon Soul'}, {name:'Fireball', group:'Sage Freke', soul:'Dragon Demon Soul'}, {name:'Soul Ray', group:'Sage Freke', soul:'Doll Demon Soul'}, {name:'Homing Soul Arrow', group:'Sage Freke', soul:'Golden Demon Soul'}, {name:'Poison Cloud', group:'Sage Freke', soul:'Wriggling Demon Soul'}, {name:'Acid Cloud', group:'Sage Freke', soul:'Eroded Demon Soul'}, {name:'Death Cloud', group:'Sage Freke', soul:'Pureblood Demon Soul'},
      {name:'Ignite', group:'Yuria', soul:'Hard Demon Soul'}, {name:'Cursed Weapon', group:'Yuria', soul:'Silver Demon Soul'}, {name:'Firestorm', group:'Yuria', soul:'Dragon Demon Soul'}, {name:'Soul Thirst', group:'Yuria', soul:'Golden Demon Soul'}, {name:'Relief', group:'Yuria', soul:'Pureblood Demon Soul'}, {name:'Soulsucker', group:'Yuria', soul:'Maiden in Black Demon Soul'}
    ]
  },
  miracles: {
    title:'Miracles', icon:'🙏', subtitle:'Saint Urbain miracle rewards.',
    items:[
      {name:"God's Wrath", group:'Saint Urbain', soul:'Dragon Demon Soul'}, {name:'Banish', group:'Saint Urbain', soul:'Golden Demon Soul'}, {name:'Regeneration', group:'Saint Urbain', soul:'Swollen Demon Soul'}, {name:'Second Chance', group:'Saint Urbain', soul:'Hero Demon Soul'}, {name:'Anti-Magic Field', group:'Saint Urbain', soul:'Storm Demon Soul'}, {name:'Cure', group:'Saint Urbain', soul:'Wriggling Demon Soul'}, {name:'Resurrection', group:'Saint Urbain', soul:'Pureblood Demon Soul'}, {name:'Recovery', group:'Saint Urbain', soul:'3 Colorless Demon Souls'}
    ]
  },
  weapons: {
    title:'Boss Weapons', icon:'⚔️', subtitle:'Special weapons made with boss souls.',
    items:[
      {name:'Scraping Spear', group:'Blacksmith Ed', soul:'Lead Demon Soul'}, {name:'Northern Regalia', group:'Blacksmith Ed', soul:'False King Demon Soul'}, {name:'Lava Bow', group:'Blacksmith Ed', soul:'Hard Demon Soul'}, {name:'Needle of Eternal Agony', group:'Blacksmith Ed', soul:'Mixed Demon Soul'}, {name:'Insane Catalyst', group:'Blacksmith Ed', soul:'Golden Demon Soul'}, {name:'Meat Cleaver', group:'Blacksmith Ed', soul:'Swollen Demon Soul'}, {name:'Large Sword of Searching', group:'Blacksmith Ed', soul:'Hero Demon Soul'}, {name:'Morion Blade', group:'Blacksmith Ed', soul:'Storm Demon Soul'}, {name:'Blueblood Sword', group:'Blacksmith Ed', soul:'Pureblood Demon Soul'}, {name:'Dozer Axe', group:'Blacksmith Ed', soul:'Gray Demon Soul'}
    ]
  }
};

let currentKey = 'home';
const nav = document.getElementById('nav');
const dashboard = document.getElementById('dashboard');
const list = document.getElementById('list');
const title = document.getElementById('pageTitle');
const subtitle = document.getElementById('pageSubtitle');
const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetBtn');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

function idFor(key, item) { return `${key}:${item.group || 'all'}:${item.name}`; }
function getChecked(key) { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key) || '{}'); }
function setChecked(key, data) { localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data)); }
function countFor(key) {
  const items = checklists[key].items;
  const checked = getChecked(key);
  const done = items.filter(item => checked[idFor(key, item)]).length;
  return { done, total: items.length, percent: items.length ? Math.round(done / items.length * 100) : 0 };
}
function updateOverall() {
  let done = 0, total = 0;
  Object.keys(checklists).forEach(key => { const c = countFor(key); done += c.done; total += c.total; });
  const percent = total ? Math.round(done / total * 100) : 0;
  document.getElementById('overallPercent').textContent = `${percent}%`;
  document.getElementById('overallCount').textContent = `${done} / ${total}`;
  document.getElementById('overallFill').style.width = `${percent}%`;
}
function renderNav() {
  nav.innerHTML = '';
  const home = document.createElement('button');
  home.textContent = '🏠 Home';
  home.className = currentKey === 'home' ? 'active' : '';
  home.onclick = () => renderHome();
  nav.appendChild(home);
  Object.entries(checklists).forEach(([key, data]) => {
    const c = countFor(key);
    const btn = document.createElement('button');
    btn.className = currentKey === key ? 'active' : '';
    btn.textContent = `${data.icon} ${data.title}  ${c.done}/${c.total}`;
    btn.onclick = () => renderChecklist(key);
    nav.appendChild(btn);
  });
}
function renderHome() {
  currentKey = 'home'; searchInput.value = ''; searchInput.classList.add('hidden'); resetBtn.classList.add('hidden');
  title.textContent = "Demon's Souls Checklists";
  subtitle.textContent = 'Track rings, boss souls, spells, miracles and boss weapons.';
  list.innerHTML = '';
  dashboard.innerHTML = '';
  Object.entries(checklists).forEach(([key, data]) => {
    const c = countFor(key);
    const card = document.createElement('article');
    card.className = 'dash-card';
    card.innerHTML = `<h3>${data.icon} ${data.title}</h3><p>${data.subtitle}</p><div class="bar"><div style="width:${c.percent}%"></div></div><p>${c.done} / ${c.total} • ${c.percent}%</p>`;
    card.onclick = () => renderChecklist(key);
    dashboard.appendChild(card);
  });
  renderNav(); updateOverall(); closeMenu();
}
function itemMatches(item, q) {
  const haystack = [item.name, item.group, item.soul, ...(item.rewards || [])].filter(Boolean).join(' ').toLowerCase();
  return haystack.includes(q.toLowerCase());
}
function renderChecklist(key) {
  currentKey = key; const data = checklists[key];
  searchInput.classList.remove('hidden'); resetBtn.classList.remove('hidden');
  title.textContent = `${data.icon} ${data.title}`; subtitle.textContent = data.subtitle;
  dashboard.innerHTML = ''; list.innerHTML = '';
  const q = searchInput.value.trim();
  const checked = getChecked(key);
  const groups = {};
  data.items.filter(item => !q || itemMatches(item, q)).forEach(item => {
    const group = item.group || data.title;
    groups[group] ||= [];
    groups[group].push(item);
  });
  Object.entries(groups).forEach(([groupName, items]) => {
    const group = document.createElement('section'); group.className = 'group';
    group.innerHTML = `<div class="group-title">${groupName}</div><div class="group-body"></div>`;
    const body = group.querySelector('.group-body');
    items.forEach(item => {
      const id = idFor(key, item); const isChecked = !!checked[id];
      const el = document.createElement('label'); el.className = `item ${isChecked ? 'checked' : ''}`;
      const tags = (item.rewards || []).map(r => `<span class="tag">${r}</span>`).join('');
      el.innerHTML = `<input type="checkbox" ${isChecked ? 'checked' : ''}><div><h3>${item.name}</h3><div class="meta">${item.soul ? `Soul: ${item.soul}` : ''}</div>${tags ? `<div class="tags">${tags}</div>` : ''}</div>`;
      el.querySelector('input').onchange = (e) => {
        const saved = getChecked(key); saved[id] = e.target.checked; setChecked(key, saved);
        el.classList.toggle('checked', e.target.checked); renderNav(); updateOverall();
      };
      body.appendChild(el);
    });
    list.appendChild(group);
  });
  renderNav(); updateOverall(); closeMenu();
}
function closeMenu(){ sidebar.classList.remove('open'); }
searchInput.addEventListener('input', () => currentKey !== 'home' && renderChecklist(currentKey));
resetBtn.addEventListener('click', () => { if (currentKey !== 'home' && confirm('Reset this checklist?')) { localStorage.removeItem(STORAGE_PREFIX + currentKey); renderChecklist(currentKey); } });
menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
renderHome();
