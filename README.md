# Imediata Embalagem — site para Cloudflare Pages

Site estático, responsivo e sem dependências de build. Foi estruturado para ser enviado diretamente a um repositório GitHub e publicado no Cloudflare Pages.

## 1. Antes de publicar

Edite `assets/js/config.js` e preencha:

- `whatsapp`: DDI + DDD + número, somente números (ex.: `5521999999999`)
- `email`: e-mail comercial
- `instagram`: URL do perfil
- `siteUrl`: domínio final

O formulário de orçamento funciona mesmo sem WhatsApp configurado: ele monta e permite copiar a mensagem. Depois de preencher o número, oferece envio direto pelo WhatsApp.

## 2. GitHub

Crie um repositório novo e envie **o conteúdo desta pasta** para a raiz do repositório.

## 3. Cloudflare Pages

No Cloudflare Dashboard:

1. Workers & Pages → Create → Pages → Connect to Git.
2. Selecione seu repositório GitHub.
3. Framework preset: **None**.
4. Build command: deixe em branco (ou use `exit 0`).
5. Build output directory: `.`
6. Root directory: deixe em branco se o site estiver na raiz do repositório.
7. Deploy.

O projeto inclui `_headers` e `_redirects`, lidos nativamente pelo Cloudflare Pages.

## 4. Domínio e SEO

Depois de conectar o domínio definitivo:

1. Abra `sitemap-template.xml`.
2. Substitua `https://SEU-DOMINIO.com.br` pelo domínio real.
3. Renomeie para `sitemap.xml`.
4. Adicione ao `robots.txt`: `Sitemap: https://seu-dominio.com.br/sitemap.xml`
5. Se desejar, adicione tags `canonical` às páginas após confirmar o domínio.

## 5. Estrutura

- `/` — home
- `/embalagens/` — catálogo digital filtrável
- `/produtos/.../` — páginas individuais de produto
- `/sobre/` — institucional
- `/orcamento/` — gerador de pedido de orçamento
- `/politica-de-privacidade/` — modelo inicial para revisão
- `/catalogo/` — PDF original
- `/assets/` — estilos, scripts e ilustrações

## 6. Observações

As ilustrações atuais são vetoriais autorais e leves, criadas como base visual para o lançamento. Elas podem ser substituídas por fotografias reais dos produtos sem alterar a estrutura do site.

A página de privacidade é um **modelo inicial** e deve receber os dados legais reais da empresa antes da publicação definitiva.
