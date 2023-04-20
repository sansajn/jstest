Bare interaction with ClamAV daemon via TCP port sample.

Run with

```bash
npm run start
```

command. Sample expect ClamAV docker container running with

```bash
docker run \
    -it \
    --rm \
    --mount type=bind,source=${HOME}/temp,target=/scandir \
    --publish 3310:3310 \
    clamav/clamav
```

command.
