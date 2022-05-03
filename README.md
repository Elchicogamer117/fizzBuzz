# Fizz Buzz 
Felicidades explorer, eres parte del equipo de backend de [Visual Partner-Ship](https://twitter.com/visual_partner). 

Actualmente se necesita calcular cierta información de los explorers de LaunchX, de momento se ha desarrollado por una consultoría externa muy mala un script en JS para realizar esto. Sin embargo después de una evaluación interna se ha decidido reconstruir totalmente el proyecto:

## 1 Refactoring
Se necesita una misma validación que apliqué las tres reglas a toda la lista:
- Si el campo score del explorer es divisible entre 3, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZ`.
- Si el campo score del explorer es divisible entre 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `BUZZ`.
- Si el campo score del explorer es divisible entre 3 y 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZBUZZ`.
- Si el campo score no es divisible por ninguna de las reglas anteriores, se agrega un campo nuevo llamado `trick` cuyo valor será el del score.

## 2 API REST

Crea un API para usar la funcionalidad anterior:

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/explorers/:mission` | `localhost:3000/v1/explorers/node` | Lista de explorers en la misión que enviada (node o java) |
| `localhost:3000/v1/explorers/amount/:mission` | `localhost:3000/v1/explorers/amount/node` | Cantidad de explorers según la misión enviada (node o java) |
| `localhost:3000/v1/explorers/usernames/:mission` | `localhost:3000/v1/explorers/usernames/node` | Lista de usernames en la misión enviada (node o java) |

## 3 Feature
Crea un endpoint para recibir un número y aplicar la validación del fizzbuzz.

## Resultado
A continuación se presenta un esquema de como se consivio y armo este proyecto
![Esquema de funcionamiento](https://user-images.githubusercontent.com/89102805/166521689-d986867a-9fe5-4703-8ee5-6551393d0675.png)

En esta practica se logro:
- Realizar lectura de un código legado
- Realizar la lectura de archivos json
- Crear un proyectos de js
- Aplicar técnicas de refactoring y diseño con orientación a objetos
- Modular y separar responsabilidades
- Versionar con git y GitHub
- Usar NPM condiferentes dependencias
- Aplicar TDD y pruebas de unidad
- Usar GitHub Actions para Pruebas Automatizadas
- Usar Linter y guias de estilo para escribir código
- Usar GitHub para hacer forks y pull request
- Crear una API con Express

