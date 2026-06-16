const STORAGE_PREFIX = 'des-checklists-v2:';
const CHECKLIST_ORDER = ['rings', 'spells', 'miracles', 'weapons', 'bossSouls'];

const bossSoulData = [
  { boss:'Phalanx', group:'World 1', soul:'Lead Demon Soul', rewards:['Scraping Spear'] },
  { boss:'Tower Knight', group:'World 1', soul:'Iron Demon Soul', rewards:['Warding'] },
  { boss:'Penetrator', group:'World 1', soul:'Silver Demon Soul', rewards:['Light Weapon','Cursed Weapon'] },
  { boss:'False King', group:'World 1', soul:'False King Demon Soul', rewards:['Northern Regalia'] },
  { boss:'Armor Spider', group:'World 2', soul:'Hard Demon Soul', rewards:['Fire Spray','Ignite','Lava Bow'] },
  { boss:'Flamelurker', group:'World 2', soul:'Searing Demon Soul', soulCopies:1, rewards:[], specialEffect:'Unlocks Blacksmith Ed advanced upgrades.' },
  { boss:'Dragon God', group:'World 2', soul:'Dragon Demon Soul', rewards:['Fireball','Firestorm',"God's Wrath"] },
  { boss:"Fool's Idol", group:'World 3', soul:'Doll Demon Soul', rewards:['Soul Ray'] },
  { boss:'Maneater', group:'World 3', soul:'Mixed Demon Soul', rewards:['Needle of Eternal Agony'] },
  { boss:'Old Monk', group:'World 3', soul:'Golden Demon Soul', rewards:['Homing Soul Arrow','Soul Thirst','Banish','Insane Catalyst'] },
  { boss:'Adjudicator', group:'World 4', soul:'Swollen Demon Soul', rewards:['Regeneration','Meat Cleaver'] },
  { boss:'Old Hero', group:'World 4', soul:'Hero Demon Soul', rewards:['Second Chance','Large Sword of Searching'] },
  { boss:'Storm King', group:'World 4', soul:'Storm Demon Soul', rewards:['Anti-Magic Field','Morion Blade'] },
  { boss:'Leechmonger', group:'World 5', soul:'Wriggling Demon Soul', rewards:['Poison Cloud','Cure'] },
  { boss:'Dirty Colossus', group:'World 5', soul:'Eroded Demon Soul', rewards:['Acid Cloud'] },
  { boss:'Maiden Astraea', group:'World 5', soul:'Pureblood Demon Soul', rewards:['Death Cloud','Relief','Resurrection','Blueblood Sword'] },
  { boss:'Endgame', group:'Endgame', soul:'Maiden in Black Demon Soul', rewards:['Soulsucker'] },
  { boss:'Vanguard Demon', group:'Other', soul:'Gray Demon Soul', rewards:['Dozer Axe'] }
];


const RING_DETAILS = {
  "Cat's Ring": [
    "Can be bought from Patches in the Nexus for 40,000 souls.",
    "Can be found in 5-2 (Swamp of Sorrow), near the Meat Cleaver-wielding black phantom to the left of the first fog gate."
  ],
  "Clever Rat's Ring": ["In the middle of the ballista platform in 3-1 (Prison of Hope)."],
  "Cling Ring": ["In 1-1 (Gates of Boletaria) by the first tower shortcut."],
  "Dull Rat's Ring": ["Can be acquired by rescuing Rydell in 3-1 (Prison of Hope). [Pure White World Tendency]"],
  "Eternal Warrior's Ring": ["Dropped by defeating Old King Doran in 1-1 (Gates of Boletaria)."],
  "Foe's Ring": ["Given by Mephistopheles after killing Yuria, the Witch (Nexus). [Pure Black Character Tendency]"],
  "Fragrant Ring": [
    "In the 3-2 (Upper Latria) swamp next to the Primeval Demon.",
    "Trade a Brass Telescope with Sparkly the Crow.",
    "Can be bought from Patches for 60,000 souls.",
    "The Royalty class starts with this item."
  ],
  "Friend's Ring": ["Can be obtained by talking to the Monumental in the Nexus. [Pure White Character Tendency]"],
  "Graverobber's Ring": [
    "Dropped by Graverobber Blige.",
    "In 4-1 (Island's Edge), before the boss gate on an elevated ledge."
  ],
  "Master's Ring": [
    "At a dead end of a hallway on a lootable corpse by the second ballista in Dragon God's arena.",
    "Dropped from Executioner Miralda in 1-1 (Gates of Boletaria). [Pure White World Tendency]"
  ],
  "Providential Ring": [
    "Can be chosen as a starting gift.",
    "Trade a Large Sword of Searching with Sparkly the Crow."
  ],
  "Regenerator's Ring": [
    "Trade the Jade Hair Ornament with Sparkly the Crow.",
    "By the crystal lizard before the boss in 4-1 (Island's Edge).",
    "On a corpse near the Mirdan Hammer in 5-2 (Swamp of Sorrow)."
  ],
  "Ring of Avarice": [
    "Found where the Heart drops in 3-2 (Upper Latria).",
    "Bought from the Former Noble's Wife in Prison of Hope for 50,000 souls."
  ],
  "Ring of Devout Prayer": [
    "Dropped by Saint Urbain.",
    "Trade Large Sword of Moonlight with Sparkly the Crow.",
    "Trade Crest of Vinland with Selen Vinland in 5-2 (Swamp of Sorrow). [Pure White World Tendency]"
  ],
  "Ring of Disease Resistance": [
    "On a scaffolding across from the cave with two crystal lizards in 2-2 (Tunnel City).",
    "In 3-2 (Upper Latria) swamp, near the Primeval Demon."
  ],
  "Ring of Fire Resistance": [
    "By the dragon's rest in 1-1 (Gates of Boletaria).",
    "Gift from Patches after escaping his trap in 2-2 (Tunnel City)."
  ],
  "Ring of Flame Resistance": [
    "By the dragon's rest in 1-1 (Gates of Boletaria).",
    "Gift from Patches after escaping his trap in 2-2 (Tunnel City)."
  ],
  "Ring of Gash Resistance": [
    "On a corpse in the tunnel under the bridge in 1-2 (Lord's Path).",
    "Speak with Patches after rescuing St. Urbain in 4-2 (Ritual Path)."
  ],
  "Ring of Great Strength": [
    "By the dragon's rest in 1-1 (Gates of Boletaria).",
    "Dropped by Biorr, of the Twin Fangs."
  ],
  "Ring of Herculean Strength": [
    "Dropped by killing Stockpile Thomas (Nexus).",
    "Give Thomas the Jade Hair Ornament."
  ],
  "Ring of Longevity": ["Trade Pure Bladestone with Sparkly the Crow."],
  "Ring of Magical Dullness": [
    "Trade Phosphorescent Pole with Sparkly the Crow.",
    "On a rooftop near the end of the shortcut in 5-1 (Depraved Chasm)."
  ],
  "Ring of Magical Nature": ["In the tower where Yuria, the Witch is held in 1-3 (Inner Ward)."],
  "Ring of Magical Sharpness": [
    "Dropped by Sage Freke.",
    "In an iron maiden on the 4th floor of 3-1 (Prison of Hope)."
  ],
  "Ring of Poison Resistance": [
    "Corner in the cooled-off lava pit in 2-1 (Smithing Grounds).",
    "On the stairs near Executioner Miralda in 1-1 (Gates of Boletaria). [Pure White World Tendency / Pure Black World Tendency]"
  ],
  "Ring of Sincere Prayer": ["Obtained from killing Maiden Astraea."],
  "Ring of the Accursed": [
    "In the tower where Yuria, the Witch is held in 1-3 (Inner Ward).",
    "Dropped by Mephistopheles (Nexus). [Pure Black Character Tendency]"
  ],
  "Ring of the Damned": ["Trade a Gold Coin with Sparkly the Crow."],
  "Ronin's Ring": [
    "Dropped by Scirvir, the Wanderer in 2-2 (Tunnel City). [Pure White World Tendency]",
    "In the slug cave area in 4-2 (Ritual Path)."
  ],
  "Thief Ring": [
    "On a vaulted platform with Ostrava in 1-1 (Gates of Boletaria).",
    "Near where Selen Vinland spawns on a small island in 5-2 (Swamp of Sorrow).",
    "Dropped after killing Patches (Nexus)."
  ]
};

const checklists = {
  rings: {
    title: 'Rings', icon: '💍', subtitle: 'King of Ring\'s Trophy • Demon\'s Souls Remake',
    items: [
      'Cat\'s Ring','Clever Rat\'s Ring','Cling Ring','Dull Rat\'s Ring','Eternal Warrior\'s Ring','Foe\'s Ring','Fragrant Ring','Friend\'s Ring','Graverobber\'s Ring','Master\'s Ring','Providential Ring','Regenerator\'s Ring','Ring of Avarice','Ring of Devout Prayer','Ring of Disease Resistance','Ring of Fire Resistance','Ring of Flame Resistance','Ring of Gash Resistance','Ring of Great Strength','Ring of Herculean Strength','Ring of Magical Dullness','Ring of Magical Nature','Ring of Magical Sharpness','Ring of Poison Resistance','Ring of Sincere Prayer','Ring of the Accursed','Ring of the Damned','Ring of Longevity','Ronin\'s Ring','Thief Ring'
    ].sort().map(name => ({ name, details: RING_DETAILS[name] || [] }))
  },
  bossSouls: {
    title: 'Boss Souls', icon: '👹', subtitle: 'Each checkbox uses one soul copy. Duplicate souls are shown as Required ×2, ×3, ×4, etc.',
    bossCards: true,
    items: bossSoulData
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

const rewardOwner = {};
bossSoulData.forEach(boss => {
  boss.rewards.forEach(reward => {
    rewardOwner[reward] = boss;
  });
});

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
function bossRewardId(item, reward) { return `bossSouls:${item.boss}:${reward}`; }
function getChecked(key) { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key) || '{}'); }
function setChecked(key, data) { localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data)); }

function isSharedReward(key, item) {
  return key !== 'rings' && key !== 'bossSouls' && item && rewardOwner[item.name];
}

function itemStorageRef(key, item) {
  if (isSharedReward(key, item)) {
    const boss = rewardOwner[item.name];
    return { key: 'bossSouls', id: bossRewardId(boss, item.name) };
  }

  return { key, id: idFor(key, item) };
}

function isItemChecked(key, item) {
  const ref = itemStorageRef(key, item);
  return !!getChecked(ref.key)[ref.id];
}

function setItemChecked(key, item, checked) {
  const ref = itemStorageRef(key, item);
  const saved = getChecked(ref.key);
  saved[ref.id] = checked;
  setChecked(ref.key, saved);
}

function getChecklistTotal(key) {
  if (key === 'bossSouls') return bossSoulData.reduce((sum, boss) => sum + boss.rewards.length, 0);
  return checklists[key].items.length;
}

function countFor(key) {
  const total = getChecklistTotal(key);
  let done = 0;

  if (key === 'bossSouls') {
    const checked = getChecked('bossSouls');
    bossSoulData.forEach(boss => boss.rewards.forEach(reward => {
      if (checked[bossRewardId(boss, reward)]) done += 1;
    }));
  } else {
    done = checklists[key].items.filter(item => isItemChecked(key, item)).length;
  }

  return { done, total, percent: total ? Math.round(done / total * 100) : 0 };
}

function updateOverall() {
  let done = 0, total = 0;
  CHECKLIST_ORDER.forEach(key => { const c = countFor(key); done += c.done; total += c.total; });

  const percent = total ? Math.round(done / total * 100) : 0;

  const rings = countFor('rings');
  const spells = countFor('spells');
  const miracles = countFor('miracles');
  const weapons = countFor('weapons');
  const bossSouls = countFor('bossSouls');

  const sideProgress = document.querySelector('.side-progress');

sideProgress.innerHTML = `
  <div class="progress-label">
    <span>Progress</span>
    <span>${percent}%</span>
  </div>

  <small>Rings ${rings.done}/${rings.total}</small>
  <small>Spells ${spells.done}/${spells.total}</small>
  <small>Miracles ${miracles.done}/${miracles.total}</small>
  <small>Boss Weapons ${weapons.done}/${weapons.total}</small>
  <small>Boss Souls ${bossSouls.done}/${bossSouls.total}</small>

  <small id="overallCount" style="margin-top:10px;">
    <strong>Overall ${done} / ${total}</strong>
  </small>

  <div class="bar" style="margin-top:6px;">
    <div id="overallFill" style="width:${percent}%"></div>
  </div>
`;
}

function renderNav() {
  nav.innerHTML = '';
  const home = document.createElement('button');
  home.textContent = '🏠 Home';
  home.className = currentKey === 'home' ? 'active' : '';
  home.onclick = () => renderHome();
  nav.appendChild(home);

  CHECKLIST_ORDER.forEach(key => {
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
  subtitle.textContent = 'Track rings, boss souls, spells, miracles and boss weapons.';
  list.innerHTML = '';
  dashboard.innerHTML = '';

  CHECKLIST_ORDER.forEach(key => {
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
  const checked = getChecked('bossSouls');
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
      const done = boss.rewards.filter(reward => checked[bossRewardId(boss, reward)]).length;
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
        const id = bossRewardId(boss, reward);
        const isChecked = !!checked[id];
        const label = document.createElement('label');
        label.className = `reward-item ${isChecked ? 'checked' : ''}`;
        label.innerHTML = `<input type="checkbox" ${isChecked ? 'checked' : ''}><span>${reward}</span>`;
        label.querySelector('input').onchange = (e) => {
          const saved = getChecked('bossSouls');
          saved[id] = e.target.checked;
          setChecked('bossSouls', saved);
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
      const isChecked = isItemChecked(key, item);
      const el = document.createElement('label');
      el.className = `item ${isChecked ? 'checked' : ''}`;
      const tags = (item.rewards || []).map(r => `<span class="tag">${r}</span>`).join('');
      const ringDetails = key === 'rings' && item.details && item.details.length
        ? `<div class="meta">${item.details.map(detail => `• ${detail}`).join('<br>')}</div>`
        : '';

      el.innerHTML = `<input type="checkbox" ${isChecked ? 'checked' : ''}><div><h3>${item.name}</h3>${ringDetails || `<div class="meta">${item.soul ? `Soul: ${item.soul}` : ''}</div>`}${tags ? `<div class="tags">${tags}</div>` : ''}</div>`;
      el.querySelector('input').onchange = (e) => {
        setItemChecked(key, item, e.target.checked);
        el.classList.toggle('checked', e.target.checked);
        renderNav(); updateOverall();
      };
      body.appendChild(el);
    });
    list.appendChild(group);
  });

  renderNav(); updateOverall(); closeMenu();
}

function resetCurrentChecklist() {
  if (currentKey === 'home') return;

  if (currentKey === 'bossSouls') {
    localStorage.removeItem(STORAGE_PREFIX + 'bossSouls');
    renderChecklist(currentKey);
    return;
  }

  const ownSaved = getChecked(currentKey);
  const bossSaved = getChecked('bossSouls');

  checklists[currentKey].items.forEach(item => {
    const ref = itemStorageRef(currentKey, item);

    if (ref.key === 'bossSouls') {
      delete bossSaved[ref.id];
    } else {
      delete ownSaved[ref.id];
    }
  });

  setChecked(currentKey, ownSaved);
  setChecked('bossSouls', bossSaved);
  renderChecklist(currentKey);
}

function closeMenu(){ sidebar.classList.remove('open'); }
searchInput.addEventListener('input', () => currentKey !== 'home' && renderChecklist(currentKey));
resetBtn.addEventListener('click', () => {
  if (currentKey !== 'home' && confirm('Reset this checklist?')) {
    resetCurrentChecklist();
  }
});
menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
renderHome();
