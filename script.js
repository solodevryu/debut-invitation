document.addEventListener("DOMContentLoaded", () => {

    // Sparkles
    const sparklesContainer = document.getElementById("sparkles");

    if (sparklesContainer) {
        for (let i = 0; i < 30; i++) {

            const sparkle = document.createElement("div");

            sparkle.classList.add("sparkle");

            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDelay = `${Math.random() * 4}s`;

            sparklesContainer.appendChild(sparkle);
        }
    }
});


/* PROGRAM DATA */

const programData = {

    roses: [
        "NATHANEL JAY DE LINO FLORES",
        "RICHDEN PIERRE DE LINO",
        "DWAYNE CHARDIE DE LINO SAMSON",
        "DENIEL DE LINO",
        "KIAN SHANNE STAVE PRADO",
        "PAUL AXL JOSEPH DE LINO SIMON",
        "EARL VINCENT MANALANSANG",
        "DARWIN PASCUAL",
        "JANROME DELA ROSA",
        "RALPH GARCIA",
        "JOHN CARLO ASIS",
        "TITO CHARLES ANTHONY SAMSON",
        "TITO JORLAN ROMERO",
        "TITO ERNESTO OLAZO",
        "TITO RICHARD DE LINO",
        "TITO RICHMOND DE LINO",
        "ERVIN NATHAN DE GUZMAN",
        "KUYA RENCE MATTHEW DE LINO PRADO"
    ],

    candles: [
        "PRINCESS JOY PALOMARES",
        "ELEY QUINILITAN",
        "JENAHMAE MORELOS",
        "JHARED JANE CARREON",
        "MICAELLA SERRANO",
        "PRINCESS SHANE MAGBITANG",
        "CHAELYSA CLAUDINE TUNDAG",
        "KYLE SHELWYN CRUZ",
        "KRISTINE JHOY DELA CRUZ",
        "SANA NAOMI CARREON",
        "ALTHEA TRIXIE BIJER",
        "ZOE JEWEL LETIGIO",
        "TOMOMI EGUCHI",
        "KEISHA NOELLE OLIVERA",
        "RAYAHNA DELA CRUZ",
        "PAULEEN PRADO"
    ],

    bills: [
        "TITA BELINDA CASTRO",
        "TITA MARIAN PASCUAL",
        "TITA ROSALIA VILLAFIERTE",
        "ATE MADONNA DOMINGO",
        "TITA MARIA FE GONZALES",
        "TITA JANET MATEO",
        "TITA AGNES GONZALES",
        "TITA JOSIE MARMOL VALLE",
        "TITA LHEAH RODRIGUEZ",
        "TITA ARAIZA ROMERO",
        "TITA JENNY ROSE SIMON",
        "TITO ANGELO FLORES",
        "KUYA MON DE LEON",
        "LOLA FLORDELIZA BONDOC",
        "TITA CRISTINA JIMENEZ MARALIT",
        "MEME REMEDIOS DIONISIO",
        "LOLA PERLITA PRADO",
        "LOLA NANAY ROSALINDA DE LINO"
    ],

    gifts18: [
        "ATE ROSEMARIE DE LINO",
        "ATE JESS PIMENTEL",
        "ATE RUFFA MAE BERNARDINO",
        "ATE ROSEMAY VILLAFUERTE",
        "JANE JIMENEZ",
        "NEIZEL NEPOMUCENO",
        "MARK JOVEN MARQUEZ",
        "MARK DARREN CALIXTERIO",
        "EJAY MAGDANGAL",
        "LOLA ESTELLA JIMENEZ",
        "TITA ELVIE TIERRA",
        "NINANG TERESITA DULOS",
        "NINANG LORETA MANGANA",
        "NINANG EHDZ OLAZO",
        "TITA RAQUEL DE LINO",
        "TITA DIANE CRUZ DE LINO",
        "TITA DIVINA DE LINO SAMSON",
        "TITA/NINANG DIANNE DE LINO"
    ]
};


/* TITLES */

const titles = {
    roses: "18 Roses",
    candles: " 18 Candles",
    bills: " 18 Bills",
    gifts18: " 18 Gifts"
};


/* IMAGES */

const modalImages = {
    roses: "roses.jpg",
    candles: "candles.jpg",
    bills: "bills.jpg",
    gifts18: "gifts.jpg"
};


/* ELEMENTS */

const modal = document.getElementById("programModal");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const modalPhoto = document.getElementById("modalPhoto");


/* OPEN MODAL */

function openModal(category) {

    modalList.innerHTML = "";

    modalTitle.textContent = titles[category];

    if (modalPhoto) {
        modalPhoto.src = modalImages[category];
        modalPhoto.alt = titles[category];
    }

    programData[category].forEach(name => {

        const li = document.createElement("li");

        li.textContent = name;

        modalList.appendChild(li);
    });

    modal.style.display = "flex";
}


/* CLOSE MODAL */

function closeModal() {
    modal.style.display = "none";
}


/* CLICK OUTSIDE */

window.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeModal();
    }
});


/* ESC KEY */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeModal();
    }
});
