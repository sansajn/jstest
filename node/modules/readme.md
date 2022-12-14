Sharing code via JS modules between Node.js and browser part of the application sample.

The current status is

```bash
(node:135094) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/home/hlavatovic/devel/jstest/node/modules/app.js:4
import * as foo from './public/foo.mjs'
^^^^^^

SyntaxError: Cannot use import statement outside a module
```

which meand the `app.js` needs to be a module to get it working.


Initialize Node.js project and install dependencies with

```bash
npm init --yes
npm install express --save
npm install nodemon --save-dev
``` 

commands. 

> **note**: in case of the repository just run `npm install` which use `package.json` and `package-lock.json` files to figure out what needs to be installed.


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
