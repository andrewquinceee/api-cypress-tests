# api-cypress-tests

API-тесты на Cypress для приложения `springmvc-1.0-SNAPSHOT.jar` (управление пользователями).

## Что проверяется

- создание пользователя (`POST /users`)
- изменение пользователя (`PUT /users/{id}?firstName=...&surName=...`)
- удаление пользователя (`DELETE /users/{id}`)

Тесты независимы: каждый сам создаёт пользователя и убирает за собой.
Повторяющиеся запросы вынесены в кастомные команды (`cypress/support/commands.js`),
тестовые данные лежат в `cypress/fixtures/users.json`.

## Предусловия

Нужна установленная Java. Запустить приложение:

    java -jar springmvc-1.0-SNAPSHOT.jar

Приложение доступно на http://localhost:8080 и должно работать во время тестов.

## Установка

    npm install

## Запуск

    npx cypress run --browser chrome

## Dashboard

Результаты прогонов в Cypress Cloud: https://cloud.cypress.io/projects/2a37fk

Запуск с записью результатов (ключ записи хранится только у владельца проекта):

    npx cypress run --browser chrome --record --key <RECORD_KEY>
