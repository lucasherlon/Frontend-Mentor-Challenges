const imagens = [...document.querySelectorAll('.imagem')];
const textos = [...document.querySelectorAll('.answer')];

function showText(classe) {
    textos.map((texto) => {
        if (texto.classList.contains(classe)) {
            texto.style.display = "block";
        }
    });
}

function hideText(classe) {
    textos.map((texto) => {
        if (texto.classList.contains(classe)) {
            texto.style.display = "none";
        }
    });
}


imagens.map((imagem, index) => {
    imagem.addEventListener('click', (evt) => {
        console.log(evt.target.src);
        if (evt.target.src == "http://127.0.0.1:5500/faq-accordion-main/assets/images/icon-minus.svg") {
            evt.target.src = "./assets/images/icon-plus.svg";
            hideText(imagem.classList[1]);
        }
        else {
            evt.target.src = "./assets/images/icon-minus.svg";
            showText(imagem.classList[1]);
        }
})});

