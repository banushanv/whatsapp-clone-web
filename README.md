# Whatsapp-clone

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Backend Project Setup

```sh
cd backend
```

```sh
npm install
```

### Start the server
```sh
npm run watch
```

## Frontend Project Setup

```sh
npm install
```

## Code setup
    Now go to https://console.cloud.google.com/

    Generate an API KEY.

    Add your new API KEY to the frontend .env file (VITE_APP_WHATS_APP_CLIENT_ID = your api key)

    ![Screenshot 2022-12-19 at 14 33 10](https://user-images.githubusercontent.com/108229029/208371968-8a66bbed-d157-4ab3-927f-cc573e6f9aaf.png)

    Add your already generated same API KEY to the backend .env file (CLIENT_ID = your api key)

    ![Alt text](/image-1.png)

 ## Firebase setup
     Now go to https://firebase.google.com/

     Create web app's Firebase configuration 

     Link- https://firebase.google.com/docs/web/setup

     Add your generated firebase config  code inside config/FirebaseConfig.ts file.

     

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
