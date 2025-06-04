# EDUCASH - Aplicação de Gestão dos Benefícios do Governo e Educação Financeira (Versão Local)

Bem-vindo ao EDUCASH! Esta é uma aplicação web desenvolvida para ajudar estudantes a utilizarem de forma consciente os benefícios públicos e a organizarem as suas finanças pessoais. Esta versão é configurada para execução local, com dados simulados em memória, ideal para visualização e desenvolvimento da interface.

## ✨ Funcionalidades (Versão Local)

* **Dashboard Principal:**
    * Design moderno e responsivo.
    * Gráficos interativos (simulados) para visualização do consumo e gastos mensais.
    * Indicadores de desempenho financeiro pessoal (simulados).
* **Meu Pé-de-Meia:**
    * Espaço para o estudante definir e acompanhar metas financeiras (dados armazenados localmente na sessão do navegador enquanto a aplicação está aberta).
* **Assistente de IA Integrado (Simulado):**
    * Interface de chat para tirar dúvidas.
    * Respostas simuladas para demonstrar a funcionalidade (não conectado a uma API LLM real nesta versão).
* **Quiz de Educação Financeira:**
    * Interface interativa com perguntas e respostas para ensinar conceitos de economia e finanças.
    * Feedback imediato com explicações educativas.
* **Central de Informações sobre Programas do Governo:**
    * Página com textos explicativos sobre programas como Bolsa Família, Pé-de-Meia, etc. (conteúdo estático).
* **Perfil do Utilizador (Simulado):**
    * Permite editar nome e renda mensal (dados armazenados localmente na sessão).

## 🚀 Tecnologias Utilizadas

* **Linguagem Principal:** JavaScript (com JSX). O projeto está configurado para suportar TypeScript.
* **Framework Frontend:** [React](https://react.dev/) (v19+)
* **Ferramenta de Build e Servidor de Desenvolvimento:** [Vite](https://vitejs.dev/)
* **Estilização:**
    * [Tailwind CSS](https://tailwindcss.com/): Framework CSS utility-first para design rápido e responsivo.
    * [PostCSS](https://postcss.org/): Ferramenta para transformar CSS com plugins JavaScript.
    * [Autoprefixer](https://github.com/postcss/autoprefixer): Plugin PostCSS para adicionar prefixos de fornecedores ao CSS.
* **Bibliotecas React Adicionais:**
    * `recharts`: Para criação de gráficos interativos.
    * `lucide-react`: Para ícones SVG.
* **Linting:**
    * [ESLint](https://eslint.org/): Para análise estática de código, ajudando a encontrar e corrigir problemas.
* **Gestor de Pacotes:** [npm](https://www.npmjs.com/) (ou Yarn)

## 📂 Estrutura do Projeto
´´´
educash/                     # Pasta raiz do projeto
├── public/                  # Ficheiros estáticos servidos diretamente
│   └── index.html           # Template HTML principal para a SPA (Single Page Application) antes do Vite processar
│   └── (outros como favicon.ico, etc.)
├── src/                     # Código fonte da aplicação
│   ├── assets/              # (Opcional) Para imagens, SVGs, fontes, etc.
│   ├── components/          # (Opcional) Para componentes React reutilizáveis menores
│   ├── App.jsx              # Componente React principal que define a estrutura e navegação
│   ├── main.jsx             # Ponto de entrada da aplicação React (renderiza o App.jsx no DOM)
│   └── index.css            # Ficheiro CSS global, onde as diretivas do Tailwind são importadas
├── .eslintrc.cjs            # Ficheiro de configuração do ESLint
├── .gitignore               # Especifica ficheiros e pastas a serem ignorados pelo Git
├── index.html               # Ponto de entrada HTML principal processado pelo Vite
├── package.json             # Define metadados do projeto, dependências e scripts
├── package-lock.json        # Regista as versões exatas das dependências instaladas
├── postcss.config.cjs       # Ficheiro de configuração do PostCSS (usado pelo Tailwind)
├── tailwind.config.js       # Ficheiro de configuração do Tailwind CSS
├── tsconfig.json            # (Se usar TypeScript) Configuração do compilador TypeScript para o projeto
├── tsconfig.node.json       # (Se usar TypeScript) Configuração específica do TypeScript para o ambiente Node.js (ex: ficheiros de config)
└── vite.config.ts           # Ficheiro de configuração do Vite
´´´
### Detalhamento de Ficheiros e Pastas Chave:

* **`educash/`**: A pasta que contém todo o seu projeto.
* **`public/`**: Contém recursos estáticos que não são processados pelo sistema de build do Vite da mesma forma que o código em `src/`. O `index.html` aqui serve como um template se necessário, mas o `index.html` na raiz é o principal para o Vite.
* **`src/`**: O coração da sua aplicação.
    * **`App.jsx` (ou `.tsx`)**: É o componente React de mais alto nível abaixo do `main.jsx`. Ele geralmente contém a lógica de roteamento (se houver), layout principal e onde os diferentes "ecrãs" ou "páginas" da sua aplicação são renderizados. No EDUCASH, ele gere a visualização atual (Dashboard, Pé-de-Meia, etc.) e passa os dados locais para os subcomponentes.
    * **`main.jsx` (ou `.tsx`)**: Este é o ficheiro JavaScript/TypeScript que o Vite procura primeiro. A sua principal responsabilidade é importar o componente `App` e usar `ReactDOM.createRoot().render()` para o injetar no DOM (geralmente num elemento com `id="root"` no `index.html`). Também é aqui que se importa o `index.css` principal.
    * **`index.css`**: Contém as diretivas `@tailwind base;`, `@tailwind components;`, `@tailwind utilities;` necessárias para o Tailwind CSS funcionar. Pode também adicionar estilos globais personalizados aqui.
* **`.eslintrc.cjs`**: Configura o ESLint, uma ferramenta que ajuda a manter a qualidade e consistência do código, identificando erros de sintaxe, problemas de estilo e potenciais bugs.
* **`.gitignore`**: Lista os ficheiros e pastas que não devem ser enviados para o seu repositório Git (ex: `node_modules/`, ficheiros de build, ficheiros `.env` com segredos).
* **`index.html` (na raiz)**: Este é o ficheiro HTML principal que o Vite serve. Durante o desenvolvimento, o Vite injeta as referências aos seus scripts JavaScript e CSS aqui. Na build de produção, ele gera um `index.html` otimizado na pasta `dist/`.
* **`package.json`**: Um ficheiro fundamental em qualquer projeto Node.js/npm. Ele lista:
    * Informações sobre o projeto (nome, versão, etc.).
    * **`dependencies`**: Pacotes necessários para a aplicação funcionar em produção (ex: `react`, `recharts`).
    * **`devDependencies`**: Pacotes necessários apenas durante o desenvolvimento e build (ex: `vite`, `tailwindcss`, `eslint`).
    * **`scripts`**: Comandos que podem ser executados com `npm run <nome_do_script>` (ex: `npm run dev` para iniciar o servidor de desenvolvimento).
* **`package-lock.json`**: Gerado automaticamente pelo npm, garante que todos os programadores na equipa (ou o ambiente de build) usem exatamente as mesmas versões de todas as dependências, evitando o problema de "funciona na minha máquina".
* **`postcss.config.cjs`**: Configura o PostCSS. O Tailwind CSS é um plugin do PostCSS, então este ficheiro diz ao PostCSS como processar o seu CSS usando o Tailwind e outros plugins como o Autoprefixer.
* **`tailwind.config.js`**: Permite personalizar a sua instalação do Tailwind CSS. Pode definir a sua paleta de cores, fontes, breakpoints, estender classes utilitárias e, crucialmente, especificar no array `content` quais ficheiros o Tailwind deve analisar para gerar apenas o CSS necessário.
* **`tsconfig.json` / `tsconfig.node.json`**: Se estiver a usar TypeScript, estes ficheiros configuram como o compilador TypeScript (tsc) deve transpilar o seu código TypeScript para JavaScript, definindo opções como o target do JavaScript, regras de módulos, verificações de tipo, etc.
* **`vite.config.ts`**: Configura o Vite. Aqui pode adicionar plugins (como `@vitejs/plugin-react` para suporte a React), definir aliases de caminho, configurar o servidor de desenvolvimento, otimizações de build, e outras opções específicas do Vite.

## 🏁 Como Começar (Executar Localmente)

1.  **Clone o Repositório (se estiver no Git):**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd educash
    ```
    Se não estiver a usar Git, simplesmente certifique-se de que tem a estrutura de pastas e ficheiros conforme descrito acima.

2.  **Instale as Dependências:**
    Navegue até à pasta raiz do projeto (`educash/`) no seu terminal e execute:
    ```bash
    npm install
    ```
    Este comando irá ler o `package.json` e descarregar todas as dependências listadas para uma pasta `node_modules/`.

3.  **Execute o Servidor de Desenvolvimento:**
    Após a instalação das dependências, execute:
    ```bash
    npm run dev
    ```
    Este comando (definido na secção `scripts` do `package.json`) iniciará o servidor de desenvolvimento do Vite. Normalmente, ele abrirá automaticamente a aplicação no seu navegador padrão no endereço `http://localhost:5173` (ou outra porta se a 5173 estiver ocupada).

4.  **Visualize e Edite:**
    Agora pode ver a aplicação EDUCASH a funcionar no seu navegador. Qualquer alteração que fizer nos ficheiros dentro da pasta `src/` (especialmente `.jsx`, `.tsx`, `.css`) fará com que o Vite atualize automaticamente a aplicação no navegador (Hot Module Replacement - HMR).

## 📜 Scripts Disponíveis

No ficheiro `package.json`, a secção `scripts` define comandos que pode executar:

* **`npm run dev`**: Inicia o servidor de desenvolvimento do Vite com HMR. Ideal para desenvolvimento.
* **`npm run build`**: Compila e otimiza a aplicação para produção. Os ficheiros resultantes são geralmente colocados numa pasta `dist/`. (O script `tsc -b && vite build` primeiro executa a verificação de tipos do TypeScript e depois o build do Vite).
* **`npm run lint`**: Executa o ESLint para verificar o código em busca de erros e problemas de estilo.
* **`npm run preview`**: Serve localmente o conteúdo da pasta `dist/` (após executar `npm run build`). Útil para testar a versão de produção antes de a implementar.

## 🔮 Próximos Passos e Melhorias (Ideias Originais)

Esta versão local é excelente para desenvolver a interface e a lógica de frontend. Para uma aplicação completa, as seguintes funcionalidades (que requerem um backend e base de dados) poderiam ser reintegradas:

* **Persistência de Dados com Firebase:**
    * Guardar perfis de utilizador, metas financeiras e histórico de chat no Firestore.
    * Autenticação de utilizadores com Firebase Authentication.
* **Integração Real com API de IA (ex: Gemini):**
    * Conectar o Assistente de IA a um modelo de linguagem grande para respostas personalizadas e dinâmicas.

---

Divirta-se a explorar e desenvolver o EDUCASH!
