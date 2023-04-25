# About
ClamAV daemon communication with [clamdjs](https://www.npmjs.com/package/clamdjs) library samples.

# Setup

## Run ClamAV container

Run ClamAV container with

```bash
docker run \
    -it \
    --rm \
    --name "clamav_container" \
    --publish 3310:3310 \
    clamav/clamav
```

command.

> **tip**: for detached mode remove `--rm` and add `--detach` options

We can log into running `clamav_container` with

```bash
docker exec -it clamav_container /bin/sh
```

command which is usefull during ClamAV investigation.


## Install dependencies
Install dependencies *clamdjs*, *ramda* with

```
npm install
```

command.

> TODO: describe how to setup ClamAV docker container ...

# Run

```bash
npm run directory
npm run file
```