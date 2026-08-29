<!--
## DESENVOLVIDO POR INOVA X:
Integrantes:
Bruno Araujo Castro (RM: 572723)
João Pedro De Souza (RM: 571437)
Arthur Germano Pinheiro (RM: 574042)
Artur Novazzi (RM: 572624)
Arthur Nepomuceno (RM: 572626)
-->

# 📸 Jovi Vision Core

> Uma experiência inteligente pensada para transformar a forma como estudantes registram, organizam e utilizam informações visuais.

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Responsive Design](https://img.shields.io/badge/Responsive-Mobile%20First-brightgreen?style=flat)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

## 🎯 Visão Geral

O **Jovi Vision Core** é um projeto acadêmico desenvolvido com o objetivo de apresentar uma solução de câmera inteligente voltada especialmente para estudantes.

A proposta é explorar uma experiência que facilite o registro de conteúdos acadêmicos, documentos, apresentações e outros elementos visuais presentes na rotina estudantil.

Durante a **Sprint 3**, o projeto passou por uma importante evolução técnica: a aplicação foi **reestruturada utilizando React**, substituindo parte da estrutura anteriormente desenvolvida apenas com HTML, CSS e JavaScript.

Essa reformulação permitiu tornar o código mais **modular, organizado, reutilizável e escalável**, utilizando uma arquitetura baseada em componentes.

---

# 🚀 Evolução na Sprint 2

Na primeira versão do projeto, a aplicação utilizava uma estrutura tradicional de desenvolvimento frontend baseada principalmente em:

- HTML
- CSS
- JavaScript Vanilla

Na **Sprint 3**, iniciamos a migração e reorganização da aplicação utilizando **React**, buscando melhorar principalmente:

- ♻️ Reutilização de componentes
- 🧩 Separação de responsabilidades
- 📁 Organização da estrutura do projeto
- 🛠️ Manutenção do código
- 📈 Escalabilidade da aplicação
- ⚡ Desenvolvimento de novas funcionalidades

A utilização de componentes permite que partes da interface, como **Header, seções, cards, botões e Footer**, possam ser desenvolvidas separadamente e reutilizadas sempre que necessário.

---

# ✨ Funcionalidades

- 📸 **Apresentação do conceito Jovi Vision**
- 🔐 **Interface de autenticação**
- 📋 **Formulário de avaliação**
- 📱 **Layout responsivo**
- 🎨 **Interface moderna e intuitiva**
- 🚀 **Protótipo visual da câmera inteligente**
- 🔍 **Apresentação dos casos de uso**
- 📊 **Cards com informações e estatísticas**
- 🧩 **Interface estruturada através de componentes React**

---

# ⚛️ Arquitetura em React

Com a reformulação da Sprint 3, a interface passou a ser dividida em componentes independentes.

Exemplo de organização:

```text
Jovi-Vision-Core/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Problems/
│   │   ├── Features/
│   │   ├── Statistics/
│   │   ├── UseCases/
│   │   └── Footer/
│   │
│   ├── pages/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md