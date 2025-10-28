# Guia de Personalização do Portfólio

Este documento descreve como personalizar seu portfólio com suas informações pessoais.

## 1. Configuração Básica

Edite o arquivo `client/src/config/portfolio.ts` com suas informações:

```typescript
export const portfolioConfig = {
  name: "Seu Nome",
  title: "Desenvolvedor Full Stack",
  description: "Sua descrição profissional",
  
  github: {
    username: "seu-username-github",
    url: "https://github.com/seu-username",
  },
  
  linkedin: {
    url: "https://linkedin.com/in/seu-perfil",
  },
  
  email: "seu-email@example.com",
  
  // ... outras configurações
};
```

## 2. Integração com GitHub

### Passo 1: Substitua seu GitHub Username

No arquivo `client/src/pages/Home.tsx`, procure por:

```typescript
const GITHUB_USERNAME = "seu-username";
```

Substitua `"seu-username"` pelo seu username do GitHub real.

### Exemplo:
```typescript
const GITHUB_USERNAME = "joaosilva";
```

Isso fará com que o componente `GitHubProjects` busque automaticamente seus repositórios via GitHub API.

## 3. Informações de Contato

### Email
Edite o link de email em `client/src/pages/Home.tsx`:

```typescript
<a href="mailto:seu-email@example.com">
```

### Links Sociais
Atualize os links do GitHub e LinkedIn em:
- `client/src/pages/Home.tsx` (seção de contato)
- `client/src/components/Footer.tsx` (footer)

## 4. Seção "Sobre Mim"

Customize o texto da seção "Sobre Mim" em `client/src/pages/Home.tsx`.

## 5. Habilidades e Tecnologias

Edite as habilidades em `client/src/config/portfolio.ts`:

```typescript
skills: [
  {
    category: "Backend",
    description: "Java, Spring Boot, REST APIs",
    technologies: ["Java", "Spring Boot", "Spring Data", "Spring Security"],
  },
  // ... adicione mais habilidades
];
```

## 6. Tema e Cores

O portfólio usa tema dark por padrão. Para mudar:

### Mudar para Light Mode
Em `client/src/App.tsx`:

```typescript
<ThemeProvider defaultTheme="light" switchable>
```

### Personalizar Cores
Edite `client/src/index.css` para ajustar as variáveis CSS:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
    /* ... outras cores */
  }
}
```

## 7. Adicionar Foto/Avatar

1. Coloque sua foto em `client/public/avatar.jpg`
2. Adicione em `client/src/pages/Home.tsx` na seção Hero:

```tsx
<img 
  src="/avatar.jpg" 
  alt="Seu Nome" 
  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
/>
```

## 8. Otimizações de SEO

Edite `client/index.html`:

```html
<title>Seu Nome - Portfólio Profissional</title>
<meta name="description" content="Sua descrição profissional">
<meta name="keywords" content="Java, React, Spring Boot, Docker, PostgreSQL">
```

## 9. Filtrar Projetos por Linguagem

O componente `GitHubProjects` já busca repositórios automaticamente. Para filtrar por linguagem, você pode adicionar um filtro:

```typescript
const filteredRepos = repos.filter(repo => 
  repo.language === "Java" || repo.language === "TypeScript"
);
```

## 10. Adicionar Mais Seções

Para adicionar novas seções:

1. Crie um novo componente em `client/src/components/`
2. Importe em `client/src/pages/Home.tsx`
3. Adicione um `<section id="nome">` com a classe `py-20 md:py-32`

## Dicas Úteis

- **Smooth Scroll**: Já está implementado! Clique em qualquer link de navegação para scroll suave.
- **Tema Alternável**: O usuário pode alternar entre dark/light mode clicando no ícone de sol/lua no header.
- **Responsivo**: O design é totalmente responsivo para mobile, tablet e desktop.
- **Performance**: Imagens são otimizadas automaticamente pelo Vite.

## Próximos Passos

1. Personalize todas as informações acima
2. Teste no navegador
3. Faça o deploy (veja instruções de deployment)

Boa sorte com seu portfólio! 🚀
