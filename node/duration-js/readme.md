[Duration-js](https://github.com/icholy/Duration.js) library samples. Duration-js is a library for working with time durations.

Watch out, the implementation doesn't seems to working following code returns `false` (instead of `true`)

```js
// working with Dates
const d4 = Duration.parse('5h')
const now = new Date()
const later = new Date(now + d4)
console.assert(now.getTime() < later.getTime())  //= false
```

also following code not working

```js
const d1 = new Duration('6d')
const d3 = d1 + Duration.day
console.assert(d3.days() === 7)  // d3.days is not a function
```

Initialize Node.js project and install dependencies with

```bash
npm init --yes
npm install @icholy/duration --save
npm install nodemon --save-dev
``` 

create `dev`/`start` targets in `package.json` as

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
