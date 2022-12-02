This directory contains GPX file processing sample with [Turf](https://turfjs.org) library.

Can read GPX sample file (`sample.gpx`), reduce the amount of details (points) to specific value and update reaching time for each point and save it back as `simplified.gpx`.

So run

```bash
npm install --save xml2js @turf/turf
```

in order to setup Node.js project and install dependencies.

> **note**: in case of the repository just run `npm install` which use `package.json` and `package-lock.json` files to figure out what needs to be installed.

To run the sample execute

```bash
npm run start
```

command.
