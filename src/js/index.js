// efeito nav scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active')
    return navbar.classList.remove('active');
});

// menu mobile
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navbar__links");
hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// efeito digitação
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
};
const titulo = document.querySelector("h1");
typeWrite(titulo);

// ver mais projetos
const btnVerMais = document.getElementById('btn-see-more');
btnVerMais.addEventListener("click", () => {
    const maisProjetos = document.getElementById('projects-more');
    maisProjetos.classList.toggle("hide");

    if (maisProjetos.classList.contains('hide')) {
        return btnVerMais.textContent = 'Ver mais';
    }
    btnVerMais.textContent = 'Ver menos';
});