# [Beecrowd](https://judge.beecrowd.com/)
Uma comunidade para aprender a programar e muito mais

## Problemas
- Linguagem: Dart
- Iniciante 1001
```dart
void main() {
  int a, b, x;
  String? leia;
  leia = stdin.readLineSync()!;
  a = int.parse(leia);
  leia = stdin.readLineSync()!;
  b = int.parse(leia);
  x = a + b;
  print('X = $x');
}
```