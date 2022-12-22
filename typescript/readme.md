TypeScript samples.

TypeScript can be partially used in JS code without installing any typescript dependencies this way

```js
// @ts-check

/** @param {any[]} arr */
function compact(arr) {
	if (orr.length > 10)
		return arr.trim(0, 10)
	return arr
}
```

and it can find two issues undefined `orr` variable and `trim()` member function missing inside the *visual studio code* editor.

See [typescriptlang.org](https://www.typescriptlang.org/) for more info.

> TODO: what brings me to install typescript library?

Run

```bash
npm init --yes
npm install --save typescript
npm install --save-dev nodemon
```

command in order to setup Node.js project and install dependencies.

> **note**: in case of the repository just run `npm install` which use `package.json` and `package-lock.json` files to figure out what needs to be installed.

Create `dev`/`start` targets in `package.json` as

```js
"scripts": {
   "start": "node compact.js",
   "dev": "nodemon compact.js",
   "test": "echo \"Error: no test specified\" && exit 1"
},
```

To run `TARGET` sample execute

```bash
npm run TARGET
```

command, e.g.

```bash
npm run isEqual
```

to run `isEqual.js` sample.
