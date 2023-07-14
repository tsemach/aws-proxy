FROM node:18-alpine

WORKDIR /app

# RUN apt-get update -y && apt-get install -y sudo
# RUN useradd -m -s /bin/bash -u 9030 nodeuser; passswd nodeuser -l;
# RUN adduser nodeuser sudo
# RUN chown -R nodeuser:nodeuser /app;
# USER nodeuser

COPY package.json package.json
COPY tsconfig.json tsconfig.json
RUN npm install

COPY src src
COPY tests/dummy.ts tests/dummy.ts
RUN npm run compile

EXPOSE 5000

CMD ["node", "dist/src/index.js"]