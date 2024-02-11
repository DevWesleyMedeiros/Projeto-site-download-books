const stylesFeedbackScreen = {
    divContainerSendBox: `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        opacity: .9;
        z-index: 10;
        position: fixed;
        visibility: visible;
    `,
    divSendbox: `
        max-width: auto;
        min-width: 350px;
        width: auto;
        min-height: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 1.5rem 1rem;
        border-radius: 10px;
        -webkit-box-shadow: 2px 1px 18px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 2px 1px 18px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 2px 1px 18px 0px rgba(0, 0, 0, 0.75);
    `,
    form: `
        min-width: 350px;
        max-width: auto;
        width: 100%;
    `,
    divfeedbackTitle: `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: -0.5rem 0.3rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid black;
    `,
    divTextArea: `
        width: 100%;
    `,
    textArea: `
        width: inherit;
        padding: 0.5rem 1rem;
        border: 0.5px solid #000;
        border-radius: 5px;
    `,
    containerInput: `
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 5rem;
    `,
    taginputTypeEmail: `
        width: 100%;
        height: 5rem;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        border-radius: 5px;
        border: 0.5px solid #000;
    `,
    tagbutton: `
        width: 100%;
        height: 5rem;
        padding: 0.5rem;
        border-radius: 5px;
        cursor: pointer;
        border: 0.5px solid #000;
        color: #000;
        background-color: #3498db;
    `,
    tagp: `
        margin-top: 0.4rem;
        font-size: 0.8rem;
        color: #3498db;
    `
};


function displayFeedBackBox() {
    let divContainerSendBox = document.createElement("div");
    divContainerSendBox.setAttribute("style", stylesFeedbackScreen.divContainerSendBox);

    let divSendbox = document.createElement("div");
    divSendbox.setAttribute("style", stylesFeedbackScreen.divSendbox);

    let form = document.createElement("form");
    form.setAttribute("style", stylesFeedbackScreen.form);

    let divFeedbackTitle = document.createElement("div");
    divFeedbackTitle.setAttribute("style", stylesFeedbackScreen.divfeedbackTitle);

    let h2 = document.createElement("h2");
    h2.innerHTML = `Feedback`;

    let divIcon = document.createElement("div");
    divIcon.setAttribute("class", "fa-solid fa-circle-xmark");
    divIcon.setAttribute("id", "close");

    divFeedbackTitle.appendChild(h2);
    divFeedbackTitle.appendChild(divIcon);

    let divTextArea = document.createElement("div");
    divTextArea.setAttribute("style", stylesFeedbackScreen.textArea);

    let textArea = document.createElement("textarea");
    textArea.setAttribute("type", "text");
    textArea.setAttribute("id", "text");
    textArea.setAttribute("name", "text-area");
    textArea.setAttribute("cols", "15");
    textArea.setAttribute("rows", "10");
    textArea.setAttribute("required", "");
    textArea.setAttribute("placeholder", "Envie-nos sua sugestão");

    divTextArea.appendChild(textArea);

    let divContainerInput = document.createElement("div");
    divContainerInput.setAttribute("style", stylesFeedbackScreen.containerInput);

    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("style", stylesFeedbackScreen.taginputTypeEmail);
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("class", "input-email");
    inputEmail.setAttribute("required", "");
    inputEmail.setAttribute("placeholder", "Seu melhor Email");

    let button = document.createElement("button");
    button.setAttribute("style", stylesFeedbackScreen.tagbutton);
    button.innerHTML = `Enviar`;

    let p = document.createElement("p");
    p.setAttribute("style", stylesFeedbackScreen.tagp);
    p.innerHTML = `Powered by Wesley Medeiros`;

    divContainerInput.appendChild(inputEmail);
    divContainerInput.appendChild(button);
    divContainerInput.appendChild(p);

    form.appendChild(divFeedbackTitle);
    form.appendChild(divTextArea);
    form.appendChild(divContainerInput);

    divSendbox.appendChild(form);
    divContainerSendBox.appendChild(divSendbox);

    document.body.prepend(divContainerSendBox);
}

export { displayFeedBackBox };

