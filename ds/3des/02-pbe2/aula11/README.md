# Aula11 - Next.JS

## O que é Next.JS
Next.js é um framework React que fornece ferramentas e recursos para construir aplicações web rápidas e otimizadas, adicionando funcionalidades como Server-Side Rendering (SSR), roteamento automático (file-system routing), otimização de imagens e API Routes, resolvendo limitações do React tradicional para projetos prontos para produção e melhorando performance e SEO

## Iniciando um novo projeto com Next.JS
- 1 Execute o comando:
```bash
npx create-next-app@latest
```
- 2  O npx: Executa o pacote create-next-app, garantindo a versão mais recente.
- 3 Responda às Perguntas: O terminal fará algumas perguntas de configuração:
    - Nome do Projeto: Digite o nome desejado (ex: meu-app-next).
    - TypeScript: Yes (recomendado para segurança e organização).
    - ESLint: Yes (para organização de código).
    - Tailwind CSS: Yes (ferramenta de estilização popular).
    - src/ directory: Yes (para melhor organização).
    - App Router: Yes (o novo padrão de roteamento, mais simples e poderoso).
    - Import Alias (@): Yes (para facilitar importações).
- 4 Acesse o Projeto: Após a instalação, navegue para a pasta do projeto:
```bash
cd nome-do-seu-projeto
```
- 5 Inicie o Servidor de Desenvolvimento:
```bash
npm run dev
```
- Seu projeto Next.js estará rodando em http://localhost:3000. 
- 6 Próximos Passos:
    - Roteamento: Crie pastas dentro de app/, e dentro delas, um arquivo page.js para criar novas rotas automaticamente (ex: app/sobre/page.js para a rota /sobre).
    - Componentes: Crie componentes em React dentro da pasta src/components ou na própria app/. 