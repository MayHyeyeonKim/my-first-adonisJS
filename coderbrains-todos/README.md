# Learn to build a Full Stack AdonisJS and React Electron Application in No Time - Codebrains.io

1. `node -v`
2. `npm -v`
3. `npm init adonis-ts-app@latest coderbrains-todos`

4. During the setup process:
   - Starter Kit: Choose from `web`, `api`, `slim`. </br>
     I chose: `api`</br>

After completing these steps, the project directory structure is scaffolded, providing the foundational setup for the AdonisJS-TS application.

5. `node ace serve --watch` - start the AdonisJS development server
6. `npm install @adonisjs/core@latest` @adonisjs/lucid는 @adonisjs/core@6.10.1 이상을 요구해서 기존 adonis지우고 reinstall함
7. `npm uninstall @japa/preset-adonis`
8. `npm install @adonisjs/lucid`
9. node upgrade `nvm install 20`
10. node -v
11. `npm uninstall @adonisjs/core @adonisjs/lucid`
12. `npm install @adonisjs/core@latest @adonisjs/lucid@latest`
13. package-lock과 node_modeles한번 삭제하고 `node ace configure @adonisjs/lucid`
14. `node ace configure @adonisjs/lucid`
15. `node ace make:model Todo -m`
