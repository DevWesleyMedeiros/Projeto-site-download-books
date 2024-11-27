function creatElementsHtml(){

    let divFatherContainer = document.createElement("div")
    divFatherContainer.setAttribute("id", "background")
    divFatherContainer.classList.add("father-container");

    let divContainerForm = document.createElement("div");
    divContainerForm.classList.add("container-form");

    let divBookIcon = document.createElement("div");
    divBookIcon.classList.add("book-icon");

    let h1 = document.createElement("h1");
    h1.setAttribute("id", "form-title");
    let p = document.createElement("p");

    h1.innerHTML = "Cadastre-se para downloads";
    p.innerHTML = "Acesse nossa biblioteca gratuitamente";

    let divTitle = document.createElement("div");
    divTitle.classList.add("title");
    let arrayChildren = [h1, p];
    for (let c = 0; c < arrayChildren.length; c++) {
        divTitle.appendChild(arrayChildren[c]);
    }
    let divForm = document.createElement("div");
    divForm.classList.add("form");

    let form = document.createElement("form");

    let inputEmail = document.createElement("input");

    const attributesArrayInputEmail = [
        {
            placeholder: "Seu melhor E-mail",
            required: "",
            id: "input-email",
            type: "email"
        }
    ]
    for (let att = 0; att < attributesArrayInputEmail.length; att++) {

        inputEmail.setAttribute("placeholder", attributesArrayInputEmail[0].placeholder);
        inputEmail.setAttribute("id", attributesArrayInputEmail[0].id);
        inputEmail.setAttribute("requerid", attributesArrayInputEmail[0].required);
        inputEmail.setAttribute("type", attributesArrayInputEmail[0].type);
    }
    let inputPassword = document.createElement("input");

    const attributesArrayInputPassword = [
        {
            placeholder: "Escreva uma senha forte",
            required: "",
            id: "input-password",
            type: "password"
        }
    ]
    for (let att = 0; att < attributesArrayInputPassword.length; att++) {

        inputPassword.setAttribute("placeholder", attributesArrayInputPassword[0].placeholder);
        inputPassword.setAttribute("id", attributesArrayInputPassword[0].id);
        inputPassword.setAttribute("requerid", attributesArrayInputPassword[0].required);
        inputPassword.setAttribute("type", attributesArrayInputPassword[0].type);
    }
    let button = document.createElement("button");
    button.innerHTML = "Continue";

    button.addEventListener("click", (evt) => {
        if (!inputEmail.value) {
            formEmailValidations(inputEmail.value);
        }
    
         if (inputPassword.value) {
            formPassWordValidation(inputPassword.value);
        }
    });
    let divContainerOr = document.createElement("div");
    divContainerOr.classList.add("container-or");
    divContainerOr.innerHTML = "OR";

    form.setAttribute("action", "#");

    let divConteinerSignOptions = document.createElement("div");
    divConteinerSignOptions.classList.add("conteiner-sign-options");

    let divButtonEmail = document.createElement("div");

    let imgMessage = document.createElement("img");
    imgMessage.classList.add("email");
    imgMessage.setAttribute("src", "../assets-images/mensagem.png");
    imgMessage.setAttribute("alt", "Icone mensagem");

    let buttonSignupEmail = document.createElement("button");
    buttonSignupEmail.classList.add("signup-email");
    buttonSignupEmail.setAttribute("id", "button-email");
    buttonSignupEmail.innerHTML = "Entre com um email";

    divButtonEmail.classList.add("button-email");

    let divButtonGoogle = document.createElement("div");
    divButtonGoogle.classList.add("button-google");

    let imgGoogle = document.createElement("img");
    imgGoogle.classList.add("google");
    imgGoogle.setAttribute("src", "../assets-images/google.png");
    imgGoogle.setAttribute("alt", "Icone google");

    let buttonSignupGoogle = document.createElement("button")
    buttonSignupGoogle.setAttribute("id", "button-google");
    buttonSignupGoogle.classList.add("signup-google");
    buttonSignupGoogle.innerHTML = "Entre com o google";

    let divTerms = document.createElement("div");
    divTerms.classList.add("terms");

    let linkTerms = document.createElement("a");
    linkTerms.setAttribute("href", "#");
    linkTerms.innerHTML = "Ao continuar, você concorda com nossos termos de serviço e politica de privacidade";

    let linkPassword = document.createElement("a");
    linkPassword.setAttribute("href", "#");
    linkPassword.setAttribute("id", "forgot-password");
    linkPassword.innerHTML = "Esqueci minha senha?";

    let divContainerErrorMessage = document.createElement("div");
    divContainerErrorMessage.setAttribute("id", "box-error-message")
    divContainerErrorMessage.classList.add("container-error-message");

    let pEmail = document.createElement("p");
    pEmail.setAttribute("id", "email");
    pEmail.innerHTML = "O E-mail do usuário é obrigatório";

    let pPassword = document.createElement("p");
    pPassword.setAttribute("id", "password");
    pPassword.innerHTML = "Senha é requerida";

    const containerErrorMessageChildren = [pEmail, pPassword];
    containerErrorMessageChildren.forEach((child)=>{
        divContainerErrorMessage.appendChild(child);
    })
    const divTermsChildren = [linkTerms, linkPassword, divContainerErrorMessage];
    divTermsChildren.forEach((child)=>{
        divTerms.appendChild(child);
    })
    const divButtonGoogleChildren = [imgGoogle, buttonSignupGoogle];
    divButtonGoogleChildren.forEach((child)=>{
        divButtonGoogle.appendChild(child);
    })
    const divButtonEmailChildren = [imgMessage, buttonSignupEmail];
    divButtonEmailChildren.forEach((child)=>{
        divButtonEmail.appendChild(child);
    })
    const divContainerSignOptionsChildren = [divButtonEmail, divButtonGoogle];
    divContainerSignOptionsChildren.forEach((child)=>{
        divConteinerSignOptions.appendChild(child);
    })
    const formChildren = [inputEmail, inputPassword, button, divContainerOr];
    formChildren.forEach((child)=>{
        form.appendChild(child);
    })
    const divFormChildren = [form, divConteinerSignOptions, divTerms];
    divFormChildren.forEach((child)=>{
        divForm.appendChild(child);
    })
    const divContainerFormChildren = [divBookIcon, divTitle, divForm];
    divContainerFormChildren.forEach((child)=>{
        divContainerForm.appendChild(child);
    })
    divFatherContainer.appendChild(divContainerForm);

    divFatherContainer.addEventListener("click", function (evt) {
        let buttonLogin = document.querySelector('.sign-in-button > button');
        if (!evt.target.closest('.container-form')) {
            let divBackGround = document.getElementById("background");
            divBackGround.style.visibility = "hidden";
            buttonLogin.style.display = "block";
        }
    });
    function formEmailValidations(stringEmail) {
        if (/\s/g.test(stringEmail) || !/^[^\s@%]+@[^\s@%]+\.[^\s@%]+$/ig.test(stringEmail)) {
            let containerErrorMessage = document.querySelector("#box-error-message");
            containerErrorMessage.style.display = "block";
        }
        return stringEmail;
    }
    function formPassWordValidation(stringPassword) {
        if(/\s/g.test(stringPassword) || !/^.{6,}$/g.test(stringPassword)){
            let pEmail = document.getElementById("email");
            let containerErrorMessage = document.querySelector("#box-error-message");
            containerErrorMessage.style.display = "block";
            containerErrorMessage.removeChild(pEmail);
        }
        return stringPassword; 
    }
    document.body.prepend(divFatherContainer);
}
export { creatElementsHtml };