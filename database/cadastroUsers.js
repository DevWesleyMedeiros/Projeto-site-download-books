"use strict";

// Firebase
import {
    initializeApp
} from "firebase/app";
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";

// LoginScreen (use caminho relativo se necessário)
import {
    creatElementsHtml
} from "@scripts/login-screen.js"; // Altere para o caminho correto do seu projeto

const firebaseConfig = {
    apiKey: "AIzaSyCbksuZIkuIYqzhaWBqXuu394wCCUNFyqo",
    authDomain: "cadastro-usuarios-9c21e.firebaseapp.com",
    projectId: "cadastro-usuarios-9c21e",
    storageBucket: "cadastro-usuarios-9c21e.appspot.com",
    messagingSenderId: "594339524632",
    appId: "1:594339524632:web:629193861b36d79a15d36d"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    // Renderiza o formulário e injeta o auth no EventHandlers
    setTimeout(() => {
        const loginScreenInstance = creatElementsHtml(auth);
    }, 5000);

    // Monitorar mudanças de autenticação
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Usuário logado: ", user);
        } else {
            console.log("Usuário não logado");
        }
    });
});

//detectando estados do auth
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log("Usuário logado: ", user);
//     } else {
//         console.log("Usuário não logado");
//     }
// });