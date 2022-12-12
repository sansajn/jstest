Contains sample for Moment.js library. Moment.js implements mutating API which feel unnatural with modern JS.

Initialize Node.js project and install dependencies with

```bash
npm init --yes
npm install moment --save
npm install nodemon --save-dev
``` 

commands. 

Create `dev`/`start` targets in `package.json` as

```js
"scripts": {
   "start": "node app.js",
   "dev": "nodemon app.js",
   "test": "echo \"Error: no test specified\" && exit 1"
},
```

and run sample with

```bash
npm run dev
```

> or `npm run start` in case of production/release mode.

command.
