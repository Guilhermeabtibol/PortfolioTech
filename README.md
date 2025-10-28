# Portfólio Profissional - React + Vite

Um portfólio moderno e responsivo construído com **React 19**, **Vite** e **Tailwind CSS**, com integração automática com a API do GitHub para exibir seus repositórios.

## ✨ Características

- **⚡ Vite**: Build rápido e desenvolvimento ágil
- **🎨 Design Moderno**: Tema dark/light alternável com gradientes
- **📱 Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **🔗 Integração GitHub**: Exibe automaticamente seus repositórios
- **🎯 Seções Completas**: Hero, Sobre, Habilidades, Projetos, Contato
- **🌊 Smooth Scroll**: Navegação suave entre seções
- **⚙️ Fácil Personalização**: Arquivo de configuração centralizado
- **🚀 Pronto para Deploy**: Instruções para Vercel, Netlify, GitHub Pages

## 🛠️ Stack Tecnológico

| Tecnologia | Propósito |
|---|---|
| **React 19** | Framework UI |
| **Vite** | Build tool e dev server |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Styling |
| **shadcn/ui** | Componentes UI |
| **Wouter** | Roteamento |
| **Lucide React** | Ícones |

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ ou pnpm 8+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📝 Personalização

### 1. Informações Básicas

Edite `client/src/config/portfolio.ts`:

```typescript
export const portfolioConfig = {
  name: "Seu Nome",
  title: "Desenvolvedor Full Stack",
  github: {
    username: "seu-username-github",
  },
  email: "seu-email@example.com",
  // ... mais configurações
};
```

### 2. GitHub Username

Em `client/src/pages/Home.tsx`:

```typescript
const GITHUB_USERNAME = "seu-username"; // Substitua aqui
```

### 3. Informações de Contato

Atualize os links em:
- `client/src/pages/Home.tsx` (seção de contato)
- `client/src/components/Footer.tsx` (footer)

### 4. Habilidades

Customize em `client/src/config/portfolio.ts`:

```typescript
skills: [
  {
    category: "Backend",
    description: "Java, Spring Boot, REST APIs",
    technologies: ["Java", "Spring Boot", "Spring Data"],
  },
  // ... adicione mais
];
```

**Para mais detalhes, veja [PERSONALIZACAO.md](./PERSONALIZACAO.md)**

## 🎨 Tema e Cores

O portfólio usa **tema dark** por padrão. Para mudar:

### Light Mode
Em `client/src/App.tsx`:

```typescript
<ThemeProvider defaultTheme="light" switchable>
```

### Cores Personalizadas
Edite `client/src/index.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
    --primary: 0 0% 9%;
    /* ... mais cores */
  }
}
```

## 📦 Build e Deploy

### Build para Produção

```bash
pnpm build
```

Gera a pasta `dist` pronta para deploy.

### Deploy Rápido

**Vercel (Recomendado):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Para mais opções, veja [DEPLOYMENT.md](./DEPLOYMENT.md)**

## 📂 Estrutura do Projeto

```
portfolio-dev/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── GitHubProjects.tsx
│   │   │   └── ScrollToSection.tsx
│   │   ├── config/          # Configurações
│   │   │   └── portfolio.ts
│   │   ├── pages/           # Páginas
│   │   │   └── Home.tsx
│   │   ├── App.tsx          # App principal
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html
├── PERSONALIZACAO.md        # Guia de personalização
├── DEPLOYMENT.md            # Guia de deployment
└── README.md               # Este arquivo
```

## 🔧 Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev              # Inicia servidor de desenvolvimento
pnpm build            # Build para produção
pnpm preview          # Preview do build
pnpm type-check       # Verifica tipos TypeScript
pnpm lint             # Lint do código (se configurado)
```

## 🌐 Integração GitHub API

O componente `GitHubProjects` busca automaticamente seus repositórios via GitHub API:

```typescript
const response = await fetch(
  `https://api.github.com/users/${username}/repos?sort=stars&per_page=12`
);
```

**Limitações:**
- 60 requisições por hora sem autenticação
- Para mais requisições, use um token pessoal do GitHub

**Adicionar Token (Opcional):**
```typescript
const headers = {
  'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
};
```

## 📱 Responsividade

O projeto é totalmente responsivo:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Todos os componentes usam Tailwind CSS com breakpoints apropriados.

## ♿ Acessibilidade

- Navegação com teclado suportada
- Contraste de cores adequado
- Semântica HTML correta
- ARIA labels onde necessário

## 🚀 Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Vite otimiza automaticamente
- **CSS Purging**: Tailwind remove CSS não utilizado
- **Minificação**: Assets minificados em produção

## 🤝 Contribuindo

Se encontrar bugs ou tiver sugestões, abra uma issue!

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

## 📞 Suporte

Para dúvidas sobre personalização, veja [PERSONALIZACAO.md](./PERSONALIZACAO.md)

Para dúvidas sobre deployment, veja [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Desenvolvido com ❤️ usando React + Vite**

Boa sorte com seu portfólio! 🚀
