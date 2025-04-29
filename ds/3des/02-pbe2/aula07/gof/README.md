# Exemplo de Design Patterns
- Singleton (Criação)
- Builder (Criação)
- Composite (Estrutural)

## Exemplos Node.js
- O **ORM (Object Relational Mapping) Prisma** já possui implícitamente vários patterns de projeto, como o Repository Pattern e o Data Mapper Pattern, também o Singleton Pattern, que é utilizado para garantir que uma classe tenha apenas uma instância e fornecer um **ponto de acesso global** a ela.

### Um exemplo do pattern Singleton está no arquivo .env
```js
DATABASE_URL="mysql://root@localhost:3306/pedidos"
```