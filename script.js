const STORAGE_PREFIX = 'des-checklists-v3:';
const SHARED_KEY = STORAGE_PREFIX + 'shared-state';

const bossSoulData = [
  { boss:'Phalanx', group:'World 1', soul:'Lead Demon Soul', soulCopies:1, rewards:['Scraping Spear'] },
  { boss:'Tower Knight', group:'World 1', soul:'Iron Demon Soul', soulCopies:1, rewards:['Warding'] },
  { boss:'Penetrator', group:'World 1', soul:'Silver Demon Soul', soulCopies:2, rewards:['Light Weapon','Cursed Weapon'] },
  { boss:'False King', group:'World 1', soul:'False King Demon Soul', soulCopies:1, rewards:['Northern Regalia'] },
  { boss:'Armor Spider', group:'World 2', soul:'Hard Demon Soul', soulCopies:3, rewards:['Fire Spray','Ignite','Lava Bow'] },
  { boss:'Flamelurker', group:'World 2', soul:'Searing Demon Soul', soulCopies:1, rewards:[], specialEffect:'Unlocks Blacksmith Ed advanced upgrades.' },
  { boss:'Dragon God', group:'World 2', soul:'Dragon Demon Soul', soulCopies:3, rewards:['Fireball','Firestorm',"God's Wrath"] },
  { boss:"Fool's Idol", group:'World 3', soul:'Doll Demon Soul', soulCopies:1, rewards:['Soul Ray'] },
  { boss:'Maneater', group:'World 3', soul:'Mixed Demon Soul', soulCopies:1, rewards:['Needle of Eternal Agony'] },
  { boss:'Old Monk', group:'World 3', soul:'Golden Demon Soul', soulCopies:4, rewards:['Homing Soul Arrow','Soul Thirst','Banish','Insane Catalyst'] },
  { boss:'Adjudicator', group:'World 4', soul:'Swollen Demon Soul', soulCopies:2, rewards:['Regeneration','Meat Cleaver'] },
  { boss:'Old Hero', group:'World 4', soul:'Hero Demon Soul', soulCopies:2, rewards:['Second Chance','Large Sword of Searching'] },
  { boss:'Storm King', group:'World 4', soul:'Storm Demon Soul', soulCopies:2, rewards:['Anti-Magic Field','Morion Blade'] },
  { boss:'Leechmonger', group:'World 5', soul:'Wriggling Demon Soul', soulCopies:2, rewards:['Poison Cloud','Cure'] },
  { boss:'Dirty Colossus', group:'World 5', soul:'Eroded Demon Soul', soulCopies:1, rewards:['Acid Cloud'] },
  { boss:'Maiden Astraea', group:'World 5', soul:'Pureblood Demon Soul', soulCopies:4, rewards:['Death Cloud','Relief','Resurrection','Blueblood Sword'] },
  { boss:'Endgame', group:'Endgame', soul:'Maiden in Black Demon Soul', soulCopies:2, rewards:['Soulsucker','Recovery','Upgrades'] },
  { boss:'Vanguard Demon', group:'Other', soul:'Gray Demon Soul', soulCopies:1, rewards:['Dozer Axe'] }
];

const checklists = {
  rings: {
    title: 'Rings', icon: '💍', subtitle: 'King of Ring\'s Trophy • Demon\'s Souls Remake',
    items: [
      'Cat\'s Ring','Clever Rat\'s Ring','Cling Ring','Dull Rat\'s Ring','Eternal Warrior\'s Ring','Foe\'s Ring','Fragrant Ring','Friend\'s Ring','Graverobber\'s Ring','Master\'s Ring','Providential Ring','Regenerator\'s Ring','Ring of Avarice','Ring of Devout Prayer','Ring of Disease Resistance','Ring of Fire Resistance','Ring of Flame Resistance','Ring of Gash Resistance','Ring of Great Strength','Ring of Herculean Strength','Ring of Magical Dullness','Ring of Magical Nature','Ring of Magical Sharpness','Ring of Poison Resistance','Ring of Sincere Prayer','Ring of the Accursed','Ring of the Damned','Ring of Longevity','Ronin\'s Ring','Thief Ring'
    ].sort().map(name => ({ name }))
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
  },
  bossSouls: {
    title: 'Boss Souls', icon: '👹', subtitle: 'Each checkbox uses one soul copy. Duplicate souls are shown as Required ×2, ×3, ×4, etc.',
    bossCards: true,
    items: bossSoulData
  }
};

const checklistOrder = ['rings', 'spells', 'miracles', 'weapons', 'bossSouls'];
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

function loadState() {
  try { return JSON.parse(localStorage.getItem(SHARED_KEY) || '{}'); }
  catch { return {}; }
}
function saveState(state) { localStorage.setItem(SHARED_KEY, JSON.stringify(state)); }
function stateIdFor(key, item) {
  if (key === 'rings') return `ring:${item.name}`;
  return `reward:${item.name}`;
}
function rewardId(reward) { return `reward:${reward}`; }
function isCheckedId(id) { return !!loadState()[id]; }
function setCheckedId(id, checked) {
  const state = loadState();
  if (checked) state[id] = true;
  else delete state[id];
  saveState(state);
}
function isItemChecked(key, item) { return isCheckedId(stateIdFor(key, item)); }
function isRewardChecked(reward) { return isCheckedId(rewardId(reward)); }
function setRewardChecked(reward, checked) { setCheckedId(rewardId(reward), checked); }

function getChecklistTotal(key) {
  if (key === 'bossSouls') return bossSoulData.reduce((sum, boss) => sum + boss.rewards.length, 0);
  return checklists[key].items.length;
}

function countFor(key) {
  const total = getChecklistTotal(key);
  let done = 0;

  if (key === 'bossSouls') {
    bossSoulData.forEach(boss => boss.rewards.forEach(reward => {
      if (isRewardChecked(reward)) done += 1;
    }));
  } else {
    done = checklists[key].items.filter(item => isItemChecked(key, item)).length;
  }

  return { done, total, percent: total ? Math.round(done / total * 100) : 0 };
}

function updateOverall() {
  let done = 0, total = 0;
  checklistOrder.forEach(key => { const c = countFor(key); done += c.done; total += c.total; });
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

  checklistOrder.forEach(key => {
    const data = checklists[key];
    const c = countFor(key);
    const btn = document.createElement('button');
    btn.className = currentKey === key ? 'active' : '';
    btn.textContent = `${data.icon} ${data.title}  ${c.done}/${c.total}`;
    btn.onclick = () => renderChecklist(key);
    nav.appendChild(btn);
  });
}

function renderHome() {
  currentKey = 'home';
  searchInput.value = '';
  searchInput.classList.add('hidden');
  resetBtn.classList.add('hidden');
  title.textContent = "Demon's Souls Checklists";
  subtitle.textContent = 'Track rings, spells, miracles, boss weapons and boss souls.';
  list.innerHTML = '';
  dashboard.innerHTML = '';

  checklistOrder.forEach(key => {
    const data = checklists[key];
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
  const haystack = [item.name, item.boss, item.group, item.soul, item.specialEffect, ...(item.rewards || [])].filter(Boolean).join(' ').toLowerCase();
  return haystack.includes(q.toLowerCase());
}

function renderBossSouls() {
  const q = searchInput.value.trim();
  const groups = {};

  bossSoulData.filter(item => !q || itemMatches(item, q)).forEach(item => {
    groups[item.group] ||= [];
    groups[item.group].push(item);
  });

  Object.entries(groups).forEach(([groupName, bosses]) => {
    const group = document.createElement('section');
    group.className = 'group';
    group.innerHTML = `<div class="group-title">${groupName}</div><div class="group-body"></div>`;
    const body = group.querySelector('.group-body');

    bosses.forEach(boss => {
      const rewardCount = boss.rewards.length;
      const required = boss.soulCopies || rewardCount;
      const done = boss.rewards.filter(reward => isRewardChecked(reward)).length;
      const card = document.createElement('article');
      card.className = `boss-card ${rewardCount > 0 && done === rewardCount ? 'checked' : ''}`;
      card.innerHTML = `
        <div class="boss-head">
          <div>
            <h3>${boss.boss}</h3>
            <div class="meta">${boss.soul}</div>
          </div>
          <span class="soul-count">Required ×${required}</span>
        </div>
        <div class="boss-progress">${rewardCount ? `${done} / ${rewardCount} rewards checked` : 'No checklist reward — informational only'}</div>
        <div class="reward-list"></div>
        ${boss.specialEffect ? `<div class="special-effect"><strong>🔓 Special Effect</strong><span>${boss.specialEffect}</span></div>` : ''}
      `;

      const rewardList = card.querySelector('.reward-list');
      boss.rewards.forEach(reward => {
        const isChecked = isRewardChecked(reward);
        const label = document.createElement('label');
        label.className = `reward-item ${isChecked ? 'checked' : ''}`;
        label.innerHTML = `<input type="checkbox" ${isChecked ? 'checked' : ''}><span>${reward}</span>`;
        label.querySelector('input').onchange = (e) => {
          setRewardChecked(reward, e.target.checked);
          renderChecklist('bossSouls');
        };
        rewardList.appendChild(label);
      });

      body.appendChild(card);
    });

    list.appendChild(group);
  });
}

function renderChecklist(key) {
  currentKey = key;
  const data = checklists[key];
  searchInput.classList.remove('hidden');
  resetBtn.classList.remove('hidden');
  title.textContent = `${data.icon} ${data.title}`;
  subtitle.textContent = data.subtitle;
  dashboard.innerHTML = '';
  list.innerHTML = '';

  if (key === 'bossSouls') {
    renderBossSouls();
    renderNav(); updateOverall(); closeMenu();
    return;
  }

  const q = searchInput.value.trim();
  const groups = {};

  data.items.filter(item => !q || itemMatches(item, q)).forEach(item => {
    const group = item.group || data.title;
    groups[group] ||= [];
    groups[group].push(item);
  });

  Object.entries(groups).forEach(([groupName, items]) => {
    const group = document.createElement('section');
    group.className = 'group';
    group.innerHTML = `<div class="group-title">${groupName}</div><div class="group-body"></div>`;
    const body = group.querySelector('.group-body');

    items.forEach(item => {
      const checked = isItemChecked(key, item);
      const el = document.createElement('label');
      el.className = `item ${checked ? 'checked' : ''}`;
      const tags = (item.rewards || []).map(r => `<span class="tag">${r}</span>`).join('');
      el.innerHTML = `<input type="checkbox" ${checked ? 'checked' : ''}><div><h3>${item.name}</h3><div class="meta">${item.soul ? `Soul: ${item.soul}` : ''}</div>${tags ? `<div class="tags">${tags}</div>` : ''}</div>`;
      el.querySelector('input').onchange = (e) => {
        setCheckedId(stateIdFor(key, item), e.target.checked);
        renderChecklist(key);
      };
      body.appendChild(el);
    });
    list.appendChild(group);
  });

  renderNav(); updateOverall(); closeMenu();
}

function closeMenu(){ sidebar.classList.remove('open'); }
searchInput.addEventListener('input', () => currentKey !== 'home' && renderChecklist(currentKey));
resetBtn.addEventListener('click', () => {
  if (currentKey !== 'home' && confirm('Reset this checklist?')) {
    const state = loadState();
    if (currentKey === 'bossSouls') {
      bossSoulData.forEach(boss => boss.rewards.forEach(reward => delete state[rewardId(reward)]));
    } else {
      checklists[currentKey].items.forEach(item => delete state[stateIdFor(currentKey, item)]);
    }
    saveState(state);
    renderChecklist(currentKey);
  }
});
menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
renderHome();
