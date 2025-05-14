# Aula08 - Fluter

- Projeto: App Login
- Ambiente Local - Android Studio
- Ambiente Web - [IDX](https://idx.google.com)

## Exemplo de um app de tela de login
Esta primeira versão faremos o login com os dados:
```
email: aluno@email.com
senha: senha123
```
- main.dart
```dart
import 'package:flutter/material.dart';
import 'package:telalogin/screens/login.dart';

void main() {
  runApp(const MaterialApp(title:'Login', home:Login(title:'Tela de Login')));
}
```
|![Pastas](./arvore.png)|![Login01](./login01.png)|![Login02](./login02.png)|
|-|-|-|
|Estrutura|Tela de login|Tela Home|

## [Link do projeto feito em aula](https://github.com/wellifabio/flutter-loginbasico-2025.git)
- main.dart
```dart
import 'package:applogin/ui/login_screen.dart';
import 'package:flutter/material.dart';

void main(){
  runApp(const MaterialApp(title:'Login App',home: LoginScreen()));
}
```
- login.dart
```dart
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text('Tela de Login'),backgroundColor: Colors.blueGrey),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text(
              'Email',
              style: TextStyle(fontSize: 18, color: Colors.blueGrey),
            ),
            TextField(
              decoration: InputDecoration(border:OutlineInputBorder(), labelText: 'Digite seu e-mail'),
            ),
            Text(
              'Senha',
              style: TextStyle(fontSize: 18, color: Colors.blueGrey),
            ),
            TextField(
              obscureText: true,
              decoration: InputDecoration(border:OutlineInputBorder(), labelText: 'Digite sua senha'),
            ),
            ElevatedButton(onPressed: (){}, child: Text('Entrar'))
          ],
        ),
      ),
    );
  }
}

```
- home.dart
```dart
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text('Tela Principal'),backgroundColor: Colors.blueGrey),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text(
              'Tela Principal',
              style: TextStyle(fontSize: 22, color: Colors.blueGrey),
            ),
            ElevatedButton(onPressed: (){}, child: Text('Sair'))
          ],
        ),
      ),
    );
  }
}

```

## Desafio
- 1 Autenticar o login com os dados contidos em um arquivo JSON na pasta ./assets do projeto.
- assets/dados.json
```json
[
  {
    "id": 1,
    "nome": "Ana Silva",
    "email": "ana@email.com",
    "senha": "senai123"
  },
  {
    "id": 2,
    "nome": "Marcelo Silva",
    "email": "marcelo@email.com",
    "senha": "senai123"
  },
  {
    "id": 3,
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "senha": "senai123"
  }
]
```
- 2 Altere o campo de senha para que fique mais completa com o ícone do olho para ocultar e mostrar