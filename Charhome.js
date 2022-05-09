class Character {
    constructor(name, element, tier) {
        this.name = name;
        this.element = element;
        this.tier = tier;
    }
}

let characterList = [
    new Character("Albedo", "Geo", "S"),
    new Character("Aloy", "Cryo", "B"),
    new Character("Amber", "Pyro", "C"),
    new Character("Arataki Itto", "Geo", "SS"),
    new Character("Barbara", "Hydro", "B"),
    new Character("Beidou", "Electro", "S"),
    new Character("Bennett", "Pyro", "SS"),
    new Character("Chongyun", "Cryo", "B"),
    new Character("Diluc", "Pyro", "S"),
    new Character("Diona", "Cryo", "S"),
    new Character("Eula", "Cryo", "SS"),
    new Character("Fischl", "Electro", "S"),
    new Character("Ganyu", "Cryo", "SS"),
    new Character("Gorou", "Geo", "A"),
    new Character("Hu Tao", "Pyro", "SS"),
    new Character("Jean", "Anemo", "S"),
    new Character("Kaedehara Kazuha", "Anemo", "SS"),
    new Character("Kaeya", "Cryo", "A"),
    new Character("Kamisato Ayaka", "Cryo", "SS"),
    new Character("Keqing", "Electro", "A"),
    new Character("Klee", "Pyro", "A"),
    new Character("Kujou Sara", "Electro", "A"),
    new Character("Lisa", "Electro", "C"),
    new Character("Mona", "Hydro", "S"),
    new Character("Ningguang", "Geo", "A"),
    new Character("Noelle", "Geo", "A"),
    new Character("Qiqi", "Cryo", "B"),
    new Character("Raiden Shogun", "Electro", "SS"),
    new Character("Razor", "Electro", "A"),
    new Character("Rosaria", "Cryo", "A"),
    new Character("Sangonomiya Kokomi", "Hydro", "S"),
    new Character("Sayu", "Anemo", "A"),
    new Character("Shenhe", "Cryo", "S"),
    new Character("Sucrose", "Anemo", "S"),
    new Character("Tartaglia", "Hydro", "S"),
    new Character("Thoma", "Pyro", "A"),
    new Character("Venti", "Anemo", "SS"),
    new Character("Xiangling", "Pyro", "S"),
    new Character("Xiao", "Anemo", "SS"),
    new Character("Xingqiu", "Hydro", "SS"),
    new Character("Xinyan", "Pyro", "C"),
    new Character("Yanfei", "Pyro", "A"),
    new Character("Yoimiya", "Pyro", "S"),
    new Character("Yun Jin", "Geo", "A"),
    new Character("Zhongli", "Geo", "SS")
];

function filterCharacter(element) {
    var charIcon = document.getElementsByClassName("charicon");
    console.log(charIcon);
        
    for (var i = 0; i < charIcon.length; ++i) {
        if (charIcon[i].firstElementChild.className.includes(element) === false) {
            console.log(charIcon[i].firstElementChild.alt)
            charIcon[i].style.display = "none";
        } else {
            charIcon[i].style.display = "flex";
        }
    }
};

function loadPage() {
    characterList.forEach(c => {
        var charTierDiv = document.getElementById(c.tier);
        charTierDiv.innerHTML +=
        `
        <a class="charicon" href="Characters/${c.name}.html">
            <img class="charimg ${c.element}" src="Characters/${c.name}.png" alt="${c.name}">
            <h3 class="center-align">${c.name}</h3>
        </a>
        `        
    })
};

