const stylesFeedbackScreen = {
    divContainerSendBox: `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: #fff0;
        z-index: 7;
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
    `,
};

function displayFeedBackBox(createElementForm) {
    let divContainerSendBox = document.createElement("div");
    divContainerSendBox.setAttribute("style", stylesFeedbackScreen.divContainerSendBox);
    divContainerSendBox.appendChild(createElementForm);
    return divContainerSendBox;
}

function createElementsHtml(createElementForm) {
    let divSendbox = document.createElement("div");
    divSendbox.setAttribute("style", stylesFeedbackScreen.divSendbox);
    divSendbox.appendChild(createElementForm);
    return divSendbox;
}

function createElementForm(createFeedbackTitle, createDivTextAreaContainer, createDivContainerInput) {
    let form = document.createElement("form");
    form.setAttribute("style", stylesFeedbackScreen.form);

    let arrayFormChildren = [createFeedbackTitle, createDivTextAreaContainer, createDivContainerInput];

    arrayFormChildren.forEach((element) => {
        form.appendChild(element);
    });
    return form;
}

function createFeedbackTitle() {

    let divFeedbackTitle = document.createElement("div");
    let h2 = document.createElement("h2");
    let divIcon = document.createElement("div");

    divIcon.setAttribute("class", "fa-solid fa-circle-xmark"); 
    divIcon.setAttribute("id", "close");

    h2.innerHTML = `Feedback`;
    divFeedbackTitle.setAttribute("style", stylesFeedbackScreen.divfeedbackTitle);

    let arrayChaild = [h2, divIcon];
    arrayChaild.forEach((element) => {
        divFeedbackTitle.appendChild(element);
    });
    return divFeedbackTitle;
}

function createDivTextAreaContainer() {
    let divTextArea = document.createElement("div");
    divTextArea.setAttribute("style", stylesFeedbackScreen.textArea);

    let textArea = document.createElement("textarea");
    const objectAttributeForTextarea = {
        type: "text",
        id: "text",
        name: "text-area",
        cols: 15,
        rows: 10,
        required: "",
        placeholder: "Envie-nos sua sugestão",
    };
    for (const attr in objectAttributeForTextarea) {
        textArea.setAttribute(attr, objectAttributeForTextarea[attr]);
    }
    divTextArea.appendChild(textArea);
    return divTextArea;
}

function createDivContainerInput() {
    let divContainerInput = document.createElement("div");
    divContainerInput.setAttribute("style", stylesFeedbackScreen.containerInput);

    let inputEmail = document.createElement("input");
    inputEmail.setAttribute("style", stylesFeedbackScreen.taginputTypeEmail);
    const objectAttributeForInput = {
        type: "email",
        id: "email",
        name: "email",
        class: "input-email",
        required: "",
        placeholder: "Seu melhor Email",
    };
    for (const attr in objectAttributeForInput) {
        inputEmail.setAttribute(attr, objectAttributeForInput[attr]);
    }

    let button = document.createElement("button");
    button.setAttribute("style", stylesFeedbackScreen.tagbutton);
    button.innerHTML = `Enviar`;

    let p = document.createElement("p");
    p.setAttribute("style", stylesFeedbackScreen.tagp);
    p.innerHTML = `Powered by Wesley Medeiros`;

    let arrayChildren = [inputEmail, button, p];

    arrayChildren.forEach((element) => {
        divContainerInput.appendChild(element);
    });
    return divContainerInput;
}
document.body.append(displayFeedBackBox);

export { displayFeedBackBox };

