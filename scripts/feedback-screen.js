"use strict";

function displayFeedBackBox() {
    const divContainerSendBox = document.createElement("div");
    divContainerSendBox.classList.add("feedback-container");

    const divSendbox = document.createElement("div");
    divSendbox.classList.add("feedback-box");

    const form = document.createElement("form");
    form.classList.add("feedback-form");
    form.setAttribute("novalidate", "");

    const divFeedbackTitle = document.createElement("div");
    divFeedbackTitle.classList.add("feedback-header");

    const h2 = document.createElement("h2");
    h2.textContent = "Feedback";

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("id", "close");
    closeBtn.innerHTML = "&times;";
    closeBtn.setAttribute("aria-label", "Fechar feedback");
    closeBtn.classList.add("feedback-close-btn");

    closeBtn.addEventListener("click", () => {
        divContainerSendBox.remove();
    });

    divFeedbackTitle.append(h2, closeBtn);

    const divTextArea = document.createElement("div");
    divTextArea.classList.add("feedback-textarea-container");

    const textArea = document.createElement("textarea");
    textArea.classList.add("feedback-textarea");
    textArea.setAttribute("id", "feedback-text");
    textArea.setAttribute("name", "feedback");
    textArea.setAttribute("rows", "6");
    textArea.setAttribute("placeholder", "Envie-nos sua sugestão");
    textArea.required = true;

    divTextArea.appendChild(textArea);

    const divContainerInput = document.createElement("div");
    divContainerInput.classList.add("feedback-input-container");

    const inputEmail = document.createElement("input");
    inputEmail.classList.add("feedback-email");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("placeholder", "Seu melhor Email");
    inputEmail.required = true;

    const button = document.createElement("button");
    button.classList.add("feedback-submit-btn");
    button.setAttribute("type", "submit");
    button.textContent = "Enviar";

    const credit = document.createElement("p");
    credit.classList.add("feedback-credit");
    credit.textContent = "Powered by Wesley Medeiros";

    divContainerInput.append(inputEmail, button, credit);
    form.append(divFeedbackTitle, divTextArea, divContainerInput);
    divSendbox.appendChild(form);
    divContainerSendBox.appendChild(divSendbox);

    // Adiciona à página
    document.body.prepend(divContainerSendBox);

    // Foca no textarea ao abrir
    setTimeout(() => textArea.focus(), 100);
}

export {
    displayFeedBackBox
};