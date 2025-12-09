# Aula11 - Next.JS

## O que é Next.JS
Next.js é um framework React que fornece ferramentas e recursos para construir aplicações web rápidas e otimizadas, adicionando funcionalidades como Server-Side Rendering (SSR), roteamento automático (file-system routing), otimização de imagens e API Routes, resolvendo limitações do React tradicional para projetos prontos para produção e melhorando performance e SEO

## Iniciando um novo projeto com Next.JS e Prisma
- 1 Abra o git bash e execute o seguinte comando:
```bash
npx create-next-app@latest nome-do-seu-projeto
```
- 2  O npx: Executa o pacote create-next-app, garantindo a versão mais recente.
- 3 Responda às Perguntas: O terminal fará algumas perguntas de configuração:
    - Usar as configurações mais atuais, TypeScript...: `y` **Yes** 
- 4 Acesse o Projeto: Após a instalação, navegue para a pasta do projeto e abra com o VsCode:
```bash
cd nome-do-seu-projeto
code .
```
- 5 Instale o Prisma, modele o schema.prisma, .env e seed.
```bash
npx prisma init --datasource-provider mysql
npm i @prisma/client 
```
- 6 Próximos Passos:
    - Roteamento: Crie pastas dentro de `app/` para criar novas rotas automaticamente (ex: app/sobre/page.js para a rota /sobre).
    - edite o arquivo `page.tsx`
```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <header>
        <Image
          className="dark:invert m-5"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
      </header>
      <main>
        Alô mundo!
      </main>
      <footer></footer>
    </div>
  );
}
```

- 7 Inicie o Servidor de Desenvolvimento:
```bash
npm run dev
```
- Seu projeto Next.js estará rodando em http://localhost:3000.
