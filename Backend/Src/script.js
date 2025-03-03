    // Aguarda o DOM ser completamente carregado
    document.addEventListener('DOMContentLoaded', () => {
        // Seleciona o botão de menu e a lista de navegação
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
    
        // Ao clicar no botão, alterna a classe "active" na nav-menu
        menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        });
    });
    

    