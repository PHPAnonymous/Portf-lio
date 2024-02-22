const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const signupForm = document.querySelector("form.signup");

signupBtn.onclick = () => {
  if (loginForm) {
    loginForm.style.marginLeft = "-50%";
  }
  if (loginText) {
    loginText.style.marginLeft = "-50%";
  }
  // Limpar campos de login
  clearLoginForm();
};

loginBtn.onclick = () => {
  if (loginForm) {
    loginForm.style.marginLeft = "0%";
  }
  if (loginText) {
    loginText.style.marginLeft = "0%";
  }
  // Limpar campos de signup
  clearSignupForm();
};

signupLink.onclick = () => {
  if (signupBtn) {
    signupBtn.click();
  }
  return false;
};

const signupFormSubmit = document.querySelector("form.signup");

if (signupFormSubmit) {
  signupFormSubmit.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos de email e senha
    const emailInput = document.querySelector("form.signup input[type='text']");
    const passwordInput = document.querySelector("form.signup input[type='password']");
    const confirmPasswordInput = document.querySelector("form.signup input[type='password'][placeholder='Confirm password']");
    const emailValue = emailInput ? emailInput.value.trim() : '';
    const passwordValue = passwordInput ? passwordInput.value.trim() : '';
    const confirmPasswordValue = confirmPasswordInput ? confirmPasswordInput.value.trim() : '';

    // Função para exibir mensagens de erro apenas no formulário de cadastro
    function showError(message) {
      const errorElement = document.querySelector(".signup .error-message");
      if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
      }
    }

    // Verifica se os campos estão vazios
    if (emailValue === "" || passwordValue === "" || confirmPasswordValue === "") {
      // Se algum campo estiver vazio, mostra uma mensagem de erro
      showError("Por favor, preencha todos os campos.");
    } else if (!isValidEmail(emailValue)) {
      // Verifica se o email é válido
      showError("Por favor, insira um email válido.");
    } else if (passwordValue.length < 6) {
      // Verifica se a senha tem pelo menos 6 caracteres
      showError("A senha deve ter no mínimo 6 caracteres.");
    } else if (confirmPasswordValue !== passwordValue) {
      // Verifica se a confirmação de senha corresponde à senha
      showError("As senhas não coincidem.");
    } else {
      // Se os campos estiverem preenchidos e válidos, você pode prosseguir com o cadastro
      console.log("Email:", emailValue);
      console.log("Password:", passwordValue);
      console.log("Confirm Password:", confirmPasswordValue);
      // Você pode substituir os console.log com sua lógica de cadastro
      // Limpar campos de signup após o envio do formulário
      clearSignupForm();
    }
  });
}

// Função para limpar campos do formulário de login
function clearLoginForm() {
  const emailInput = document.querySelector("form.login input[type='text']");
  const passwordInput = document.querySelector("form.login input[type='password']");
  if (emailInput) {
    emailInput.value = "";
  }
  if (passwordInput) {
    passwordInput.value = "";
  }
}

// Função para limpar campos do formulário de signup
function clearSignupForm() {
  const emailInput = document.querySelector("form.signup input[type='text']");
  const passwordInput = document.querySelector("form.signup input[type='password']");
  const confirmPasswordInput = document.querySelector("form.signup input[type='password'][placeholder='Confirm password']");
  if (emailInput) {
    emailInput.value = "";
  }
  if (passwordInput) {
    passwordInput.value = "";
  }
  if (confirmPasswordInput) {
    confirmPasswordInput.value = "";
  }
}

// Função para validar o formato do email
function isValidEmail(email) {
  // Utilize uma expressão regular para validar o email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
