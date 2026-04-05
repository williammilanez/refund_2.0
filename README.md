<p align="center">
  <img alt="Logo Refound" src="./src/assets/logo.svg" width="250px" />
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença-">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8A5CF6&labelColor=131516">
  <img src="https://img.shields.io/badge/status-active-success" alt="Status: active">
  <img src="https://img.shields.io/badge/frontend-react-61DAFB" alt="React">
  <img src="https://img.shields.io/badge/styling-tailwind-38B2AC" alt="Tailwind">
</p>

---

<p align="center">
  <img alt="Projeto Refound" src="./src/assets/project-cover.png" width="75%">
</p>

## 💻 Projeto

O **Refound** é uma aplicação web para **gestão de solicitações de reembolso**, desenvolvida com foco em interfaces modernas, componentização e organização escalável de código front-end.

A aplicação simula um fluxo corporativo real de solicitação, análise e aprovação de reembolsos, com dois perfis de acesso:

- **Employee (Usuário)** → realiza solicitações de reembolso
- **Manager (Administrador)** → visualiza, busca e gerencia solicitações

O projeto foi construído com foco em boas práticas de desenvolvimento front-end, incluindo separação de responsabilidades, reutilização de componentes e estrutura modular.

---

## 🌐 Acesso

🔗 **Aplicação:** https://refound.vercel.app

---

### ⭐ Funcionalidades principais

#### 🔐 Autenticação

- Tela de login
- Criação de conta
- Navegação entre rotas protegidas
- Página de fallback (Not Found)

#### 👤 Employee

- Criação de solicitação de reembolso
- Seleção de categoria dinâmica
- Inserção de valor com formatação
- Upload de comprovante
- Redirecionamento para tela de confirmação

#### 🧑‍💼 Manager

- Dashboard de solicitações
- Busca por nome
- Listagem de dados com componente reutilizável
- Paginação de resultados
- Visualização de detalhes da solicitação
- Acesso ao comprovante enviado

---

## 🚀 Tecnologias

Desenvolvido com:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**

### Recursos aplicados

- Componentização e reutilização de UI
- Tipagem estática com TypeScript
- Gerenciamento de estado com Hooks (`useState`)
- Roteamento com separação por perfil de usuário
- Layouts reutilizáveis com `Outlet`
- Estilização com Tailwind (utility-first)
- Responsividade com breakpoints
- Organização modular de arquivos

---

## 🖼️ Layout

O layout foi construído com base em um design do Figma, com foco em:

- Interface limpa e moderna
- Hierarquia visual clara
- Consistência entre telas (Auth / App)
- Experiência responsiva (Desktop e Tablet)
- Componentes reutilizáveis
- Feedback visual para interações (hover, estados, loading)

---

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/williammilanez/refound.git

# Acesse a pasta
cd refound

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 📚 Aprendizados Aplicados

Durante o desenvolvimento, foram aplicados conceitos essenciais de engenharia front-end:

- Estruturação de aplicações React escaláveis
- Criação de componentes reutilizáveis
- Controle de formulários e eventos
- Upload de arquivos no front-end
- Roteamento com controle por perfil (RBAC)
- Separação entre layout e páginas
- Organização de código orientada a manutenção
- Boas práticas de commits (Conventional Commits)

---

## 👨‍💻 Autor

Projeto desenvolvido durante os estudos na **Rocketseat**  
Implementado por **William Milanez**

📍 Pós-graduação Dev Start – _Refund - Sistema de Reembolso_.

---

## Licença 📄

Este projeto está sob a licença **MIT**.  
Projeto de uso educacional e livre para fins de estudo e prática pessoal.

---
