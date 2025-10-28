# Guia de Deployment do Portfólio

Este guia descreve como fazer o deploy de seu portfólio em diferentes plataformas.

## Opções de Deployment

### 1. Vercel (Recomendado)

Vercel é a plataforma ideal para projetos Vite + React.

**Passo 1:** Faça push do seu projeto para GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/portfolio.git
git push -u origin main
```

**Passo 2:** Acesse [vercel.com](https://vercel.com) e faça login com GitHub

**Passo 3:** Clique em "New Project" e selecione seu repositório

**Passo 4:** Vercel detectará automaticamente que é um projeto Vite e configurará tudo

**Passo 5:** Clique em "Deploy"

Seu portfólio estará disponível em `seu-projeto.vercel.app`

### 2. Netlify

**Passo 1:** Faça push do seu projeto para GitHub (mesmo processo acima)

**Passo 2:** Acesse [netlify.com](https://netlify.com) e faça login com GitHub

**Passo 3:** Clique em "New site from Git"

**Passo 4:** Configure:
- **Build command:** `pnpm build`
- **Publish directory:** `dist`

**Passo 5:** Clique em "Deploy site"

Seu portfólio estará disponível em `seu-site.netlify.app`

### 3. GitHub Pages

**Passo 1:** Edite `vite.config.ts` e adicione:
```typescript
export default defineConfig({
  base: '/portfolio/', // ou '/' se for seu site principal
  // ... resto da configuração
})
```

**Passo 2:** Faça build:
```bash
pnpm build
```

**Passo 3:** Faça push para GitHub
```bash
git add .
git commit -m "Build for deployment"
git push
```

**Passo 4:** Vá para Settings > Pages do seu repositório

**Passo 5:** Selecione "Deploy from a branch" e escolha `main` branch, pasta `/root`

Seu portfólio estará disponível em `seu-usuario.github.io/portfolio`

### 4. Seu Próprio Servidor (VPS)

**Passo 1:** Faça build do projeto:
```bash
pnpm build
```

**Passo 2:** Copie a pasta `dist` para seu servidor:
```bash
scp -r dist user@seu-servidor.com:/var/www/portfolio
```

**Passo 3:** Configure seu servidor web (Nginx/Apache) para servir os arquivos estáticos

**Exemplo Nginx:**
```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    
    location / {
        root /var/www/portfolio;
        try_files $uri $uri/ /index.html;
    }
}
```

**Passo 4:** Reinicie o Nginx:
```bash
sudo systemctl restart nginx
```

## Domínios Personalizados

### Vercel
1. Vá para Project Settings > Domains
2. Adicione seu domínio
3. Configure os DNS records conforme instruído

### Netlify
1. Vá para Domain Settings
2. Clique em "Add custom domain"
3. Configure os DNS records

### GitHub Pages
1. Vá para Settings > Pages
2. Em "Custom domain", adicione seu domínio
3. Configure os DNS records

## Variáveis de Ambiente

Se você adicionar variáveis de ambiente no futuro:

1. Crie um arquivo `.env.local`:
```
VITE_API_URL=https://api.seu-dominio.com
```

2. Use no código:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Configure as variáveis na plataforma de deployment:
   - **Vercel:** Project Settings > Environment Variables
   - **Netlify:** Site Settings > Build & Deploy > Environment

## Checklist Antes do Deploy

- [ ] Substituiu `seu-username` com seu GitHub username real
- [ ] Atualizou seu email de contato
- [ ] Atualizou links do LinkedIn e GitHub
- [ ] Testou o site localmente (`pnpm dev`)
- [ ] Testou o build (`pnpm build`)
- [ ] Verificou se o site funciona em mobile
- [ ] Atualizou o `PERSONALIZACAO.md` com suas informações

## Monitoramento Pós-Deploy

- Verifique o site em diferentes navegadores
- Teste em mobile
- Verifique se os links do GitHub funcionam
- Monitore o tráfego e performance

## Troubleshooting

### Página em branco após deploy
- Verifique se o `base` em `vite.config.ts` está correto
- Limpe o cache do navegador (Ctrl+Shift+Del)

### Links não funcionam
- Verifique se o servidor está configurado para servir `index.html` em rotas não encontradas

### GitHub API rate limit
- GitHub permite 60 requisições por hora sem autenticação
- Se precisar de mais, crie um token pessoal em Settings > Developer settings > Personal access tokens

## Próximos Passos

1. Escolha uma plataforma de deployment
2. Siga os passos acima
3. Compartilhe seu portfólio!

Boa sorte! 🚀
