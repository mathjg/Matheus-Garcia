document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const btnFecharMobile = document.querySelector('.btn-fechar-mobile');
    const linksMobile = document.querySelectorAll('.grid-pirulas-mobile a');
    
    // Seleciona o HTML e o BODY
    const html = document.documentElement;
    const body = document.body;

    function alternarMenu(abrir) {
        // Verifica se a tela é menor que 768px (Mobile)
        const isMobile = window.innerWidth < 768;

        if (abrir) {
            menuOverlay.classList.add('aberto');
            
            // Só trava a rolagem se for dispositivo mobile
            if (isMobile) {
                html.classList.add('travar-rolagem');
                body.classList.add('travar-rolagem');
            }
            
            if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
        } else {
            menuOverlay.classList.remove('aberto');
            
            // Remove a trava em qualquer situação ao fechar
            html.classList.remove('travar-rolagem');
            body.classList.remove('travar-rolagem');
            
            if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
        }
    }

    if (menuBtn && menuOverlay && btnFecharMobile) {
        menuBtn.addEventListener('click', () => alternarMenu(true));
        btnFecharMobile.addEventListener('click', () => alternarMenu(false));
    }

    if (linksMobile) {
        linksMobile.forEach(link => {
            link.addEventListener('click', () => alternarMenu(false));
        });
    }
});