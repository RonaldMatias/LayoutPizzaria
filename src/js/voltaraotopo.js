 const btnScrollTop = document.querySelector(".btn-scroll-top");
    window.addEventListener("scroll", () => {
        // Altura total da página
        const scrollHeight = document.documentElement.scrollHeight;
        // Altura da janela visível
        const windowHeight = window.innerHeight;
        // Quantidade já rolada
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Verifica se o usuário chegou ao final
        if (scrollTop + windowHeight >= scrollHeight - 50) {
            btnScrollTop.classList.remove("hidden");
        } else {
            btnScrollTop.classList.add("hidden");
        }
    });

    btnScrollTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });