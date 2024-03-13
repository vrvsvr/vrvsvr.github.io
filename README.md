<p align="center">Welcome to VR versus VR</p>

## Svelte setup

### Steps to init new project

```
npm install -g pnpm
pnpm create svelte@latest
pnpm install
pnpm add -D @sveltejs/adapter-static
pnpm add -D gh-pages
```

### Steps to configure static pages
* update svelte.config.js to use adapter-static
* Configure paths if repository is different from username.github.io  
Svelte documentation: [GitHub-Pages](https://kit.svelte.dev/docs/adapter-static#github-pages)
* update package.json to have 'deploy' in scripts
* add empty .nojekyll file to /static folder
* add +layout.js file into /src/routes

## Svelte debug commands

```
pnpm dev #start local dev environment
pnpm build #generate static files in .svelte-kit/build directory
pnpm run deploy #commit static files to gh-pages branch
```