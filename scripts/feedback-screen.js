// CSS manipulador das containers de feedback
const stylesFeedbackScreen = {
    divContainerSendBox: `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        visibility: visible;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
    `,
    divSendbox: `
        width: 350px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 1rem;
        border-radius: 10px;
        box-shadow: 2px 1px 18px rgba(0, 0, 0, 0.75);
        background-color: #fff;
        box-sizing: border-box;
    `,
    form: `
        width: 100%;
        display: flex;
        flex-direction: column;
    `,
    divfeedbackTitle: `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.3rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #000;
    `,
    divTextArea: `
        margin-bottom: 1rem;
    `,
    textArea: `
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        outline: none;
        width: 100%;
        resize: none;
        box-sizing: border-box;
        font-family: inherit;
    `,
    containerInput: `
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    `,
    taginputTypeEmail: `
        width: 100%;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #000;
        box-sizing: border-box;
    `,
    tagbutton: `
        width: 100%;
        padding: 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid #000;
        color: #fff;
        background-color: #3498db;
        font-weight: bold;
        transition: background-color 0.3s;
    `,
    tagp: `
        margin-top: 0.4rem;
        font-size: 0.8rem;
        color: #3498db;
        text-align: center;
    `
};

function displayFeedBackBox() {
    const divContainerSendBox = document.createElement("div");
    divContainerSendBox.setAttribute("style", stylesFeedbackScreen.divContainerSendBox);

    const divSendbox = document.createElement("div");
    divSendbox.setAttribute("style", stylesFeedbackScreen.divSendbox);

    const form = document.createElement("form");
    form.setAttribute("style", stylesFeedbackScreen.form);
    form.setAttribute("novalidate", "");

    const divFeedbackTitle = document.createElement("div");
    divFeedbackTitle.setAttribute("style", stylesFeedbackScreen.divfeedbackTitle);

    const h2 = document.createElement("h2");
    h2.textContent = "Feedback";

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("id", "close");
    closeBtn.innerHTML = "&times;";
    closeBtn.setAttribute("aria-label", "Fechar feedback");
    closeBtn.style.background = "none";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "1.5rem";
    closeBtn.style.cursor = "pointer";

    closeBtn.addEventListener("click", () => {
        divContainerSendBox.remove();
    });

    divFeedbackTitle.append(h2, closeBtn);

    const divTextArea = document.createElement("div");
    divTextArea.setAttribute("style", stylesFeedbackScreen.divTextArea);

    const textArea = document.createElement("textarea");
    textArea.setAttribute("style", stylesFeedbackScreen.textArea);
    textArea.setAttribute("id", "feedback-text");
    textArea.setAttribute("name", "feedback");
    textArea.setAttribute("rows", "6");
    textArea.setAttribute("placeholder", "Envie-nos sua sugestão");
    textArea.required = true;

    divTextArea.appendChild(textArea);

    const divContainerInput = document.createElement("div");
    divContainerInput.setAttribute("style", stylesFeedbackScreen.containerInput);

    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("style", stylesFeedbackScreen.taginputTypeEmail);
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("placeholder", "Seu melhor Email");
    inputEmail.required = true;

    const button = document.createElement("button");
    button.setAttribute("style", stylesFeedbackScreen.tagbutton);
    button.setAttribute("type", "submit");
    button.textContent = "Enviar";

    const credit = document.createElement("p");
    credit.setAttribute("style", stylesFeedbackScreen.tagp);
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

export { displayFeedBackBox };
