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
open another terminal
```sh
cd whatsapp-clone
```

```sh
npm install
```

## Code setup
    Now go to https://console.cloud.google.com/

    Generate an API KEY.

    Add your new API KEY to the frontend .env file (VITE_APP_WHATS_APP_CLIENT_ID = your api key)
   
   ![Screenshot 2023-10-22 131233](https://github.com/banushanv/whatsapp-clone-web/assets/35912208/8d90b6bc-ad57-4d3e-a583-0374a0c3734f)
  
    Add your already generated same API KEY to the backend .env file (CLIENT_ID = your api key)

   ![Screenshot 2023-10-22 131440](https://github.com/banushanv/whatsapp-clone-web/assets/35912208/1f9bb000-c3b9-40a6-8282-69a687cfc7c0)


 ## Firebase setup
     Now go to https://firebase.google.com/

     Create a project and add web app's Firebase configuration 

     Link- https://firebase.google.com/docs/web/setup

     Add your generated firebaseConfig  code inside config/FirebaseConfig.ts file.
     

![final](https://github.com/banushanv/whatsapp-clone-web/assets/35912208/178f61be-552e-47d0-b481-4e3ab505342d)


     

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

### Running Project
    Please Login with mulitple gmail accounts and do the chat functionality.

    Users will be added in the database after login from gmail.

    If you want to see the existing users click whatsApp  search bar.
    
    You can logout by clicking the triple dot menu icon from the top menu sections side.

    ###Project Images
  
![Login](https://github.com/banushanv/whatsapp-clone-web/assets/35912208/2b4861ea-94ac-4631-a213-a48d09652541)

![whatsapp](https://github.com/banushanv/whatsapp-clone-web/assets/35912208/2ce75311-ee99-4174-bc7d-856bf40dd08e)

