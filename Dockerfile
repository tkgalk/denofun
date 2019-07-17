FROM hayd/deno:alpine-0.11.0

WORKDIR /app

ADD . /app

ENTRYPOINT ["deno", "--importmap=import_map.json", "test.ts"]
