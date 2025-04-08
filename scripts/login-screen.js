// LoginScreen.js
class LoginScreen {
  constructor() {
    this.elements = {};
    this.validators = new FormValidators();
    this.eventHandlers = new EventHandlers(this);
  }

  /**
   * Cria e renderiza o formulário de login
   */
  render() {
    this.createElements();
    this.setupAttributes();
    this.appendElements();
    this.setupEventListeners();
    document.body.prepend(this.elements.fatherContainer);
    return this;
  }

  /**
   * Cria todos os elementos DOM necessários
   */
  createElements() {
    const elements = [
      'fatherContainer', 'containerForm', 'bookIcon', 'titleContainer', 'title', 
      'subtitle', 'formContainer', 'form', 'emailInput', 'passwordInput', 
      'submitButton', 'dividerContainer', 'buttonEmailContainer', 'emailIcon', 
      'emailLoginButton', 'buttonGoogleContainer', 'googleIcon', 'googleLoginButton', 
      'termsContainer', 'termsLink', 'forgotPasswordLink', 'errorContainer', 
      'emailErrorMessage', 'passwordErrorMessage', 'socialButtonsContainer'
    ];

    elements.forEach(element => {
      this.elements[element] = document.createElement(element === 'form' ? 'form' : 'div');
    });

    // Exceções para elementos que não são divs ou form
    this.elements.title = document.createElement('h1');
    this.elements.subtitle = document.createElement('p');
    this.elements.emailInput = document.createElement('input');
    this.elements.passwordInput = document.createElement('input');
    this.elements.submitButton = document.createElement('button');
    this.elements.emailIcon = document.createElement('img');
    this.elements.googleIcon = document.createElement('img');
    this.elements.emailLoginButton = document.createElement('button');
    this.elements.googleLoginButton = document.createElement('button');
    this.elements.termsLink = document.createElement('a');
    this.elements.forgotPasswordLink = document.createElement('a');
    this.elements.emailErrorMessage = document.createElement('p');
    this.elements.passwordErrorMessage = document.createElement('p');
    this.elements.dividerText = document.createElement('span');
  }

  /**
   * Configura atributos e conteúdo dos elementos
   */
  setupAttributes() {
    // Container principal
    this.elements.fatherContainer.id = 'background';
    this.elements.fatherContainer.classList.add('father-container');

    // Container do formulário
    this.elements.containerForm.classList.add('container-form');

    // Ícone de livro
    this.elements.bookIcon.classList.add('book-icon');

    // Título e subtítulo
    this.elements.titleContainer.classList.add('title');
    this.elements.title.id = 'form-title';
    this.elements.title.textContent = 'Cadastre-se para downloads';
    this.elements.subtitle.textContent = 'Acesse nossa biblioteca gratuitamente';

    // Formulário
    this.elements.formContainer.classList.add('form');
    this.elements.form.setAttribute('action', '#');

    // Inputs
    this.setupInput(this.elements.emailInput, {
      type: 'email',
      id: 'input-email',
      placeholder: 'Seu melhor E-mail',
      required: true
    });

    this.setupInput(this.elements.passwordInput, {
      type: 'password',
      id: 'input-password',
      placeholder: 'Escreva uma senha forte',
      required: true
    });

    // Botão de envio
    this.elements.submitButton.textContent = 'Continue';

    // Divisor OR
    this.elements.dividerContainer.classList.add('container-or');
    this.elements.dividerText.textContent = 'OU';
    this.elements.dividerContainer.appendChild(this.elements.dividerText);

    // Container de botões sociais
    this.elements.socialButtonsContainer.classList.add('conteiner-sign-options');

    // Botão de e-mail
    this.elements.buttonEmailContainer.classList.add('button-email');
    this.elements.emailIcon.classList.add('email');
    this.elements.emailIcon.setAttribute('src', '../assets-images/mensagem.png');
    this.elements.emailIcon.setAttribute('alt', 'Ícone mensagem');
    this.elements.emailLoginButton.classList.add('signup-email');
    this.elements.emailLoginButton.id = 'button-email';
    this.elements.emailLoginButton.textContent = 'Entre com um email';

    // Botão do Google
    this.elements.buttonGoogleContainer.classList.add('button-google');
    this.elements.googleIcon.classList.add('google');
    this.elements.googleIcon.setAttribute('src', '../assets-images/google.png');
    this.elements.googleIcon.setAttribute('alt', 'Ícone Google');
    this.elements.googleLoginButton.classList.add('signup-google');
    this.elements.googleLoginButton.id = 'button-google';
    this.elements.googleLoginButton.textContent = 'Entre com o Google';

    // Container de termos
    this.elements.termsContainer.classList.add('terms');
    this.elements.termsLink.setAttribute('href', '#');
    this.elements.termsLink.textContent = 'Ao continuar, você concorda com nossos termos de serviço e política de privacidade';
    this.elements.forgotPasswordLink.setAttribute('href', '#');
    this.elements.forgotPasswordLink.id = 'forgot-password';
    this.elements.forgotPasswordLink.textContent = 'Esqueci minha senha?';

    // Container de mensagens de erro
    this.elements.errorContainer.id = 'box-error-message';
    this.elements.errorContainer.classList.add('container-error-message');
    this.elements.emailErrorMessage.id = 'email';
    this.elements.emailErrorMessage.textContent = 'O E-mail do usuário é obrigatório';
    this.elements.passwordErrorMessage.id = 'password';
    this.elements.passwordErrorMessage.textContent = 'Senha é requerida (mínimo 6 caracteres sem espaços)';
  }

  /**
   * Helper para configurar um elemento input
   */
  setupInput(inputElement, options) {
    for (const [key, value] of Object.entries(options)) {
      if (value === true) {
        inputElement.setAttribute(key, '');
      } else if (value !== false) {
        inputElement.setAttribute(key, value);
      }
    }
  }

  /**
   * Monta a estrutura de elementos DOM
   */
  appendElements() {
    // Montar title container
    this.elements.titleContainer.append(this.elements.title, this.elements.subtitle);

    // Montar error container
    this.elements.errorContainer.append(this.elements.emailErrorMessage, this.elements.passwordErrorMessage);

    // Montar botão de e-mail
    this.elements.buttonEmailContainer.append(this.elements.emailIcon, this.elements.emailLoginButton);

    // Montar botão do Google
    this.elements.buttonGoogleContainer.append(this.elements.googleIcon, this.elements.googleLoginButton);

    // Montar container de botões sociais
    this.elements.socialButtonsContainer.append(this.elements.buttonEmailContainer, this.elements.buttonGoogleContainer);

    // Montar container de termos
    this.elements.termsContainer.append(this.elements.termsLink, this.elements.forgotPasswordLink, this.elements.errorContainer);

    // Montar formulário
    this.elements.form.append(
      this.elements.emailInput,
      this.elements.passwordInput,
      this.elements.submitButton,
      this.elements.dividerContainer
    );

    // Montar container de formulário
    this.elements.formContainer.append(
      this.elements.form,
      this.elements.socialButtonsContainer,
      this.elements.termsContainer
    );

    // Montar container principal
    this.elements.containerForm.append(
      this.elements.bookIcon,
      this.elements.titleContainer,
      this.elements.formContainer
    );

    // Adicionar ao container pai
    this.elements.fatherContainer.appendChild(this.elements.containerForm);
  }

  /**
   * Configura todos os event listeners
   */
  setupEventListeners() {
    // Evento de clique fora do formulário para fechar
    this.elements.fatherContainer.addEventListener('click', this.eventHandlers.handleOutsideClick);

    // Evento de envio do formulário
    this.elements.submitButton.addEventListener('click', this.eventHandlers.handleSubmit);

    // Eventos de validação em tempo real
    this.elements.emailInput.addEventListener('blur', e => {
      if (e.target.value) {
        this.validateEmail(e.target.value);
      }
    });

    this.elements.passwordInput.addEventListener('blur', e => {
      if (e.target.value) {
        this.validatePassword(e.target.value);
      }
    });
  }

  /**
   * Validação de email
   */
  validateEmail(email) {
    if (!this.validators.isValidEmail(email)) {
      this.showError('email');
      return false;
    }
    this.hideError('email');
    return true;
  }

  /**
   * Validação de senha
   */
  validatePassword(password) {
    if (!this.validators.isValidPassword(password)) {
      this.showError('password');
      return false;
    }
    this.hideError('password');
    return true;
  }

  /**
   * Mostra mensagem de erro específica
   */
  showError(type) {
    this.elements.errorContainer.style.display = 'block';
    if (type === 'email') {
      this.elements.emailErrorMessage.style.display = 'block';
    } else if (type === 'password') {
      this.elements.passwordErrorMessage.style.display = 'block';
    }
  }

  /**
   * Esconde mensagem de erro específica
   */
  hideError(type) {
    if (type === 'email') {
      this.elements.emailErrorMessage.style.display = 'none';
    } else if (type === 'password') {
      this.elements.passwordErrorMessage.style.display = 'none';
    }

    // Se ambos estão ocultos, oculta o container também
    if (
      this.elements.emailErrorMessage.style.display === 'none' &&
      this.elements.passwordErrorMessage.style.display === 'none'
    ) {
      this.elements.errorContainer.style.display = 'none';
    }
  }

  /**
   * Fecha o modal de login
   */
  close() {
    this.elements.fatherContainer.style.visibility = 'hidden';
    const buttonLogin = document.querySelector('.sign-in-button > button');
    if (buttonLogin) {
      buttonLogin.style.display = 'block';
    }
  }
}

/**
 * Classe para validação de formulários
 */
class FormValidators {
  /**
   * Valida o formato de email
   * Regras:
   * - Sem espaços em branco
   * - Deve conter um @ seguido por um domínio
   * - Deve ter pelo menos um ponto após o domínio
   * - Não deve conter caracteres especiais além de @ e . em posições válidas
   */
  isValidEmail(email) {
    // Regex melhorada para email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !(/\s/.test(email)) && emailRegex.test(email);
  }

  /**
   * Valida o formato de senha
   * Regras:
   * - Sem espaços em branco
   * - Mínimo de 6 caracteres
   * - Deve conter pelo menos um número
   * - Deve conter pelo menos uma letra maiúscula
   */
  isValidPassword(password) {
    // Verifica se não tem espaços
    if (/\s/.test(password)) {
      return false;
    }
    
    // Verifica o comprimento mínimo
    if (password.length < 6) {
      return false;
    }
    
    // Verifica se tem pelo menos um número e uma letra maiúscula
    // Esta validação é opcional, pode ser ativada conforme necessidade
    // const hasNumber = /\d/.test(password);
    // const hasUpperCase = /[A-Z]/.test(password);
    // return hasNumber && hasUpperCase;
    
    return true;
  }
}

/**
 * Classe para gerenciar eventos
 */
class EventHandlers {
  constructor(loginScreen) {
    this.loginScreen = loginScreen;
    
    // Binding dos métodos para manter o contexto correto
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Manipula clique fora do formulário
   */
  handleOutsideClick(event) {
    if (!event.target.closest('.container-form')) {
      this.loginScreen.close();
    }
  }

  /**
   * Manipula envio do formulário
   */
  handleSubmit(event) {
    event.preventDefault();
    
    const emailValue = this.loginScreen.elements.emailInput.value;
    const passwordValue = this.loginScreen.elements.passwordInput.value;
    
    let isValid = true;
    
    // Valida email se preenchido
    if (!emailValue) {
      this.loginScreen.showError('email');
      isValid = false;
    } else if (!this.loginScreen.validateEmail(emailValue)) {
      isValid = false;
    }
    
    // Valida senha se preenchida
    if (!passwordValue) {
      this.loginScreen.showError('password');
      isValid = false;
    } else if (!this.loginScreen.validatePassword(passwordValue)) {
      isValid = false;
    }
    
    // Se tudo estiver válido, envie o formulário
    if (isValid) {
      console.log('Formulário enviado com sucesso!');
      // Aqui você pode adicionar a lógica para autenticar o usuário
      // Por exemplo: chamar uma API, verificar credenciais, etc.
    }
  }
}

/**
 * Função de exportação para compatibilidade com o código existente
 */
function creatElementsHtml() {
  return new LoginScreen().render();
}

// Exportações
export { creatElementsHtml, LoginScreen, FormValidators, EventHandlers };