File upload sample based on `express-filupload` package and package [example](https://github.com/richardgirges/express-fileupload/tree/master/example).

Initialize Node.js project and install dependencies with

```bash
npm init --yes
npm install express express-fileupload --save
npm install nodemon --save-dev
``` 

create `start` command in `package.json` as

```js
"scripts": {
   "start": "nodemon app.js",
   "test": "echo \"Error: no test specified\" && exit 1"
},
```
