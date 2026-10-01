const botaoMenu = document.querySelector('.menu-mobile');
const linksMenu = document.querySelector('.links-menu');

botaoMenu.addEventListener('click', () => {
    linksMenu.classList.toggle('ativo');
});

const links = document.querySelectorAll('.links-menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        linksMenu.classList.remove('ativo');
    });
});