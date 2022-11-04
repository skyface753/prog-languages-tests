```
npm init -y
npm install --save-dev typescript
nano tsconfig.json
```

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

```bash
npm install --save express@4.17.1
npm install -save-dev @types/express@4.17.1
npm install --save-dev eslint
npx eslint --initnpm install --save-dev eslint
npx eslint --init
npm install --save-dev ts-node
npm i ts-proto
```

package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon -e js,ts,tsx src/app.ts",
    "start": "tsc && node dist/app.js"
  },
```
