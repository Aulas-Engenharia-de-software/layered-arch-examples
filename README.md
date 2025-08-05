# Exemplos de Projeto de Pedidos com e sem Arquitetura em Camadas

Este repositório contém dois projetos didáticos simples que ilustram a diferença entre uma aplicação com **Arquitetura em Camadas** e uma aplicação sem qualquer separação de responsabilidades. O objetivo é demonstrar, na prática, os benefícios de uma estrutura modular, organizada e manutenível.

---

## Estrutura do Repositório

```
layered/
├── with-layered/                # Projeto com arquitetura em camadas
│   ├── public/                  # Arquivos estáticos (HTML, CSS, JS)
│   ├── src/
│   │   ├── controllers/         # Camada de controle (interface entre rota e serviço)
│   │   ├── models/              # Representações de dados (domínio)
│   │   ├── repositories/        # Acesso a dados
│   │   ├── routes/              # Definição de rotas
│   │   ├── services/            # Regras de negócio
│   │   ├── app.ts              # Configuração da aplicação
│   │   └── server.ts           # Inicialização do servidor
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
│
├── without-layered/            # Projeto sem arquitetura (acoplado)
│   ├── public/                 # Arquivos estáticos (HTML, CSS, JS)
│   ├── src/
│   │   ├── orders.ts           # Lógica misturada e acoplada
│   │   └── server.ts           # Inicialização do servidor
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
│
└── README.md
```

---

## Projeto Sem Arquitetura

**Caminho:** `without-layered/`

Neste projeto, a lógica da aplicação está toda concentrada em poucos arquivos, sem separação entre responsabilidades. O arquivo `orders.ts` contém lógica de negócio, manipulação de dados e controle HTTP em um único lugar, dificultando a escalabilidade e manutenção.

Serve como contraponto direto ao projeto em camadas.

---

## Projeto com Arquitetura em Camadas

**Caminho:** `with-layered/`

Este projeto organiza o código em diferentes camadas com responsabilidades bem definidas:

- `controllers/` — Intermediam entre rotas e serviços.
- `services/` — Contêm a lógica de negócio.
- `repositories/` — Gerenciam o acesso a dados (simulados ou reais).
- `models/` — Representam entidades do domínio.
- `routes/` — Configuram os endpoints da aplicação.

A aplicação é executada a partir de `server.ts`, que instancia e sobe o app configurado em `app.ts`.

---

## Como Executar os Projetos

**Pré-requisitos:**

- Node.js instalado
- TypeScript instalado globalmente (`npm install -g typescript`)

### Executar `with-layered`:

```bash
cd with-layered
npm install
tsc
node dist/src/server.js
```

### Executar `without-layered`:

```bash
cd without-layered
npm install
tsc
node dist/src/server.js
```

> Os projetos escutam em `http://localhost:3000` por padrão. Você pode abrir o arquivo `public/orders-ui.html` diretamente no navegador para testar a interface.

---

## Objetivos Educacionais

- Demonstrar a aplicação da Arquitetura em Camadas em um projeto web.
- Comparar a organização de código modular com código acoplado.
- Refletir sobre boas práticas de design de software.
- Servir como base para discussão em sala de aula e refatoração orientada a padrões arquiteturais.

---

## Autoria / Créditos

- Professor Lucas Martins
- Projeto educacional desenvolvido para a disciplina de Arquitetura de Software

---

## Licença

Uso educacional. Fique à vontade para reutilizar, adaptar e compartilhar com seus alunos ou equipe.

