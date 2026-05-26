FROM oven/bun:alpine AS build
COPY . /home/
WORKDIR /home
RUN bun i -p --frozen-lockfile --omit=dev \
  && bun build --compile --outfile=exchange-messenger --no-compile-autoload-dotenv --target=bun-linux-x64-modern-musl --minify --sourcemap src/index.ts src/shared/assets/templates/*.eta

FROM alpine:latest
ENV TZ=Europe/Moscow
COPY --from=build /home/exchange-messenger /
RUN chmod u+x /exchange-messenger && apk add --no-cache libgcc libstdc++
CMD ["/exchange-messenger"]
