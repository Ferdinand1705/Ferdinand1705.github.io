class Weapons {
    constructor(name, type, tier, rating) {
        this.name = name;
        this.type = type;
        this.tier = tier;
        this.rating = rating;
    }
}

let weaponList = [
    new Weapons("Akoumaru", "Claymore", "S", "fourstar"),
    new Weapons("Alley Hunter", "Bow", "S", "fourstar"),
    new Weapons("Amenoma Kageuchi", "Sword", "A", "fourstar"),
    new Weapons("Amos' Bow", "Bow", "SS", "fivestar"),
    new Weapons("Aquila Favonia", "Sword", "S", "fivestar"),
    new Weapons("Blackcliff Agate", "Catalyst", "A", "fourstar"),
    new Weapons("Blackcliff Longsword", "Sword", "A", "fourstar"),
    new Weapons("Blackcliff Pole", "Polearm", "A", "fourstar"),
    new Weapons("Blackcliff Slasher", "Claymore", "A", "fourstar"),
    new Weapons("Blackcliff Warbow", "Bow", "S", "fourstar"),
    new Weapons("Calamity Queller", "Polearm", "S", "fivestar"),
    new Weapons("Cinnabar Spindle", "Sword", "B", "fourstar"),
    new Weapons("Compound Bow", "Bow", "A", "fourstar"),
    new Weapons("Crescent Pike", "Polearm", "B", "fourstar"),
    new Weapons("Deathmatch", "Polearm", "S", "fourstar"),
    new Weapons("Dodoco Tales", "Catalyst", "S", "fourstar"),
    new Weapons("Dragon's Bane", "Polearm", "A", "fourstar"),
    new Weapons("Dragonspine Spear", "Polearm", "B", "fourstar"),
    new Weapons("Elegy for the End", "Bow", "SS", "fivestar"),
    new Weapons("Engulfing Lightning", "Polearm", "SS", "fivestar"),
    new Weapons("Everlasting Moonglow", "Catalyst", "S", "fivestar"),
    new Weapons("Eye of Perception", "Catalyst", "B", "fourstar"),
    new Weapons("Favonius Codex", "Catalyst", "S", "fourstar"),
    new Weapons("Favonius Greatsword", "Claymore", "SS", "fourstar"),
    new Weapons("Favonius Lance", "Polearm", "SS", "fourstar"),
    new Weapons("Favonius Sword", "Sword", "SS", "fourstar"),
    new Weapons("Favonius Warbow", "Bow", "S", "fourstar"),
    new Weapons("Festering Desire", "Sword", "A", "fourstar"),
    new Weapons("Freedom-Sworn", "Sword", "SS", "fivestar"),
    new Weapons("Frostbearer", "Catalyst", "B", "fourstar"),
    new Weapons("Hakushin Ring", "Catalyst", "A", "fourstar"),
    new Weapons("Hamayumi", "Bow", "S", "fourstar"),
    new Weapons("Iron Sting", "Sword", "A", "fourstar"),
    new Weapons("Katsuragikiri Nagamasa", "Claymore", "S", "fourstar"),
    new Weapons("Kitain Cross Spear", "Polearm", "A", "fourstar"),
    new Weapons("Lion's Roar", "Sword", "A", "fourstar"),
    new Weapons("Lithic Blade", "Claymore", "A", "fourstar"),
    new Weapons("Lithic Spear", "Polearm", "A", "fourstar"),
    new Weapons("Lost Prayer to the Sacred Winds", "Catalyst", "SS", "fivestar"),
    new Weapons("Luxurious Sea-Lord", "Claymore", "S", "fourstar"),
    new Weapons("Mappa Mare", "Catalyst", "A", "fourstar"),
    new Weapons("Memory of Dust", "Catalyst", "A", "fivestar"),
    new Weapons("Mistsplitter Reforged", "Sword", "SS", "fivestar"),
    new Weapons("Mitternachts Waltz", "Bow", "A", "fourstar"),
    new Weapons("Mouun's Moon", "Bow", "S", "fourstar"),
    new Weapons("Polar Star", "Bow", "SS", "fivestar"),
    new Weapons("Predator", "Bow", "B", "fourstar"),
    new Weapons("Primordial Jade Cutter", "Sword", "SS", "fivestar"),
    new Weapons("Primordial Jade Winged-Spear", "Polearm", "SS", "fivestar"),
    new Weapons("Prototype Amber", "Catalyst", "S", "fourstar"),
    new Weapons("Prototype Archaic", "Claymore", "S", "fourstar"),
    new Weapons("Prototype Crescent", "Bow", "B", "fourstar"),
    new Weapons("Prototype Rancour", "Sword", "A", "fourstar"),
    new Weapons("Prototype Starglitter", "Polearm", "B", "fourstar"),
    new Weapons("Rainslasher", "Claymore", "A", "fourstar"),
    new Weapons("Redhorn Stonethresher", "Claymore", "SS", "fivestar"),
    new Weapons("Royal Bow", "Bow", "B", "fourstar"),
    new Weapons("Royal Greatsword", "Claymore", "B", "fourstar"),
    new Weapons("Royal Grimoire", "Catalyst", "B", "fourstar"),
    new Weapons("Royal Longsword", "Sword", "B", "fourstar"),
    new Weapons("Royal Spear", "Polearm", "B", "fourstar"),
    new Weapons("Rust", "Bow", "SS", "fourstar"),
    new Weapons("Sacrificial Bow", "Bow", "S", "fourstar"),
    new Weapons("Sacrificial Fragments", "Catalyst", "S", "fourstar"),
    new Weapons("Sacrificial Greatsword", "Claymore", "SS", "fourstar"),
    new Weapons("Sacrificial Sword", "Sword", "S", "fourstar"),
    new Weapons("Serpent Spine", "Claymore", "SS", "fourstar"),
    new Weapons("Skyward Atlas", "Catalyst", "SS", "fivestar"),
    new Weapons("Skyward Blade", "Sword", "S", "fivestar"),
    new Weapons("Skyward Harp", "Bow", "SS", "fivestar"),
    new Weapons("Skyward Pride", "Claymore", "SS", "fivestar"),
    new Weapons("Skyward Spine", "Polearm", "SS", "fivestar"),
    new Weapons("Snow-Tombed Starsilver", "Claymore", "S", "fourstar"),
    new Weapons("Solar Pearl", "Catalyst", "S", "fourstar"),
    new Weapons("Song of Broken Pines", "Claymore", "SS", "fivestar"),
    new Weapons("Staff of Homa", "Polearm", "SS", "fivestar"),
    new Weapons("Summit Shaper", "Sword", "S", "fivestar"),
    new Weapons("Sword of Descension", "Sword", "C", "fourstar"),
    new Weapons("The Alley Flash", "Sword", "A", "fourstar"),
    new Weapons("The Bell", "Claymore", "A", "fourstar"),
    new Weapons("The Black Sword", "Sword", "S", "fourstar"),
    new Weapons("The Catch", "Polearm", "SS", "fourstar"),
    new Weapons("The Flute", "Sword", "B", "fourstar"),
    new Weapons("The Stringless", "Bow", "S", "fourstar"),
    new Weapons("The Unforged", "Claymore", "S", "fivestar"),
    new Weapons("The Viridescent Hunt", "Bow", "A", "fourstar"),
    new Weapons("The Widsith", "Catalyst", "SS", "fourstar"),
    new Weapons("Thundering Pulse", "Bow", "SS", "fivestar"),
    new Weapons("Vortex Vanquisher", "Polearm", "S", "fivestar"),
    new Weapons("Wavebreaker's Fin", "Polearm", "S", "fourstar"),
    new Weapons("Whiteblind", "Claymore", "S", "fourstar"),
    new Weapons("Windblume Ode", "Bow", "A", "fourstar"),
    new Weapons("Wine and Song", "Catalyst", "A", "fourstar"),
    new Weapons("Wolf's Gravestone", "Claymore", "SS", "fivestar")
];

function filterWeapons(type) {
    var weaponIcon = document.getElementsByClassName("weaponicon");
    console.log(weaponIcon);
        
    for (var i = 0; i < weaponIcon.length; ++i) {
        if (weaponIcon[i].firstElementChild.className.includes(type) === false) {
            console.log(weaponIcon[i].firstElementChild.alt)
            weaponIcon[i].style.display = "none";
        } else {
            weaponIcon[i].style.display = "flex";
        }
    }
};

function loadPage() {
    weaponList.forEach(w => {
        var weaponTierDiv = document.getElementById(w.tier);
        weaponTierDiv.innerHTML +=
        `
        <a class="weaponicon" href="Weapons/${w.name}.html">
            <img class="weaponimg ${w.type} ${w.rating}" src="Weapons/${w.name}.png" alt="${w.name}">
            <h3 class="center-align">${w.name}</h3>
        </a>
        `        
    })
};

