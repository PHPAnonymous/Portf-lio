//puxando os links das redes sociais
document.addEventListener("DOMContentLoaded", function () {
    const instagramLink = document.getElementById("instagram-link");
    const githubLink = document.getElementById("github-link");
    const linkedinLink = document.getElementById("linkedin-link");

    instagramLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "https://www.instagram.com/lucas_martini.09/"; 
    });

    githubLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "https://github.com/PHPAnonymous"; 
    });

    linkedinLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "https://www.linkedin.com/in/lucas-martini-50951b256/"; 
    });
});
//copia o email com botao
document.addEventListener("DOMContentLoaded", function () {
    const emailElement = document.getElementById("email");
    const copyEmailButton = document.getElementById("copy-email-button");

    copyEmailButton.addEventListener("click", function () {
        // Seleciona o texto do e-mail
        const emailText = emailElement.textContent;

        // Cria um elemento de área de transferência temporário
        const tempInput = document.createElement("input");
        tempInput.value = emailText;
        document.body.appendChild(tempInput);

        // Seleciona e copia o texto
        tempInput.select();
        document.execCommand("copy");

        // Remove o elemento de área de transferência temporário
        document.body.removeChild(tempInput);

        // Atualiza o texto do botão após a cópia
        copyEmailButton.innerHTML = '<i class="fas fa-check"></i> Copiado';
    });
});
