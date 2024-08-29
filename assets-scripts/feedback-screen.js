// CSS Manipula as container de feedback
const stylesFeedbackScreen = {
    divContainerSendBox: `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: #ccc;
        z-index: 10;
        position: fixed;
        visibility: visible;
    `,
    divSendbox: `
        min-width: 430px;
        max-width: 350px;
        min-height: 400px;
        max-height: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 1rem;
        border-radius: 10px;
        -webkit-box-shadow: 2px 1px 18px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 2px 1px 18px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 2px 1px 18px 0px rgba(0, 0, 0, 0.75);
        background-color: #fff;
    `,
    form: `
        width: 100%;
    `,
    divfeedbackTitle: `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.3rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid black;
    `,
    divTextArea: `
        width: 100%;
    `,
    textArea: `
        width: 100%;
        padding: 0.5rem 1rem;
        border: 0.5px solid #000;
        border-radius: 5px;
    `,
    containerInput: `
        display: flex;
        flex-direction: column;
        height: 5rem;
    `,
    taginputTypeEmail: `
        width: 100%;
        height: 5rem;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
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
    h2.textContent = `Feedback`;

    let divIcon = document.createElement("div");
    divIcon.setAttribute("class", "fa-solid fa-circle-xmark");
    divIcon.setAttribute("id", "close");

    divIcon.addEventListener('click', (evt) => {
        if (!evt.target.closest(`#close`)) {
            divContainerSendBox.style.visibility = "hidden";
        }
    });

    divFeedbackTitle.appendChild(h2);
    divFeedbackTitle.appendChild(divIcon);

    let divTextArea = document.createElement("div");
    divTextArea.setAttribute("style", stylesFeedbackScreen.divTextArea);

    // criar um objeto para inserção das propriedades da tag textarea
    const textareaProperty = {
        type: "text",
        id: "text",
        name: "text-area",
        cols: 15,
        rows: 10,
        required: "",
        placeholder: "Envie-nos sua sugestão"
    };
    let textArea = document.createElement("textarea");
    for (const [key, value] of Object.entries(textareaProperty)) {
        textArea.setAttribute(key, value);
    }
    divTextArea.appendChild(textArea);

    let divContainerInput = document.createElement("div");
    divContainerInput.setAttribute("style", stylesFeedbackScreen.containerInput);

    // criar um objeto para inserção das propriedades da inputEmail
    const inputEmailProperty = {
        style: stylesFeedbackScreen.taginputTypeEmail,
        type: "email",
        id: "email",
        name: "email",
        class: "input-email",
        required: "",
        placeholder: "Seu melhor Email"
    };
    let inputEmail = document.createElement("input");
    for (const [key, value] of Object.entries(inputEmailProperty)) {
        if (key === 'style') {
            inputEmail.setAttribute('style', value);
        } else {
            inputEmail.setAttribute(key, value);
        }
    }

    let button = document.createElement("button");
    button.setAttribute("style", stylesFeedbackScreen.tagbutton);
    button.textContent = `Enviar`;

    let p = document.createElement("p");
    p.setAttribute("style", stylesFeedbackScreen.tagp);
    p.textContent = `Powered by Wesley Medeiros`;

    let arrayChildrenContainerInput = [inputEmail, button, p];
    arrayChildrenContainerInput.forEach((child) => {
        divContainerInput.appendChild(child);
    });
    let arrayChildrenForm = [divFeedbackTitle, divTextArea, divContainerInput];
    arrayChildrenForm.forEach((child) => {
        form.appendChild(child);
    });

    divSendbox.appendChild(form);
    divContainerSendBox.appendChild(divSendbox);
    document.body.prepend(divContainerSendBox);
}

export { displayFeedBackBox };
