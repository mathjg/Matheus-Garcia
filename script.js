document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. CONTROLE DO MENU HAMBÚRGUER (MOBILE)
    // ==========================================
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const btnFecharMobile = document.querySelector('.btn-fechar-mobile');
    const linksMobile = document.querySelectorAll('.grid-pirulas-mobile a');

    function alternarMenu(abrir) {
        if (abrir) {
            menuOverlay.classList.add('aberto');
            if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
        } else {
            menuOverlay.classList.remove('aberto');
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


    // ==========================================
    // 2. CONTROLE DO MENU DE ACESSIBILIDADE (Pop-up/Overlay)
    // ==========================================
    const acessibilidadeBtn = document.getElementById('acessibilidadeBtn');
    const acessibilidadeOverlay = document.getElementById('acessibilidadeOverlay');
    const btnFecharAcessibilidade = document.querySelector('.btn-fechar-acessibilidade');

    // AQUI ENTRA O BLOCO NOVO INTELIGENTE PARA DESKTOP E MOBILE:
    if (acessibilidadeBtn && acessibilidadeOverlay) {
        acessibilidadeBtn.addEventListener('click', () => {
            // Verifica se o pop-up já está aberto (devolve true ou false)
            const estaAberto = acessibilidadeOverlay.classList.contains('aberto');
            
            if (estaAberto) {
                acessibilidadeOverlay.classList.remove('aberto');
                acessibilidadeBtn.setAttribute('aria-expanded', 'false');
            } else {
                acessibilidadeOverlay.classList.add('aberto');
                acessibilidadeBtn.setAttribute('aria-expanded', 'true');
            }
        });

        // Clique no "X" para fechar (específico do mobile)
        if (btnFecharAcessibilidade) {
            btnFecharAcessibilidade.addEventListener('click', () => {
                acessibilidadeOverlay.classList.remove('aberto');
                acessibilidadeBtn.setAttribute('aria-expanded', 'false');
            });
        }
    }
});