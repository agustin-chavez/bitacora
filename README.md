# bitacora
📓 API REST using NodeJS, Express and Typescript

## Set up

```bash
npm init -y
npm i typescript -D
# Add script "tsc": "tsc" to package.json
npm run tsc -- --init
npm i express -E
npm i @types/express -D
npm run tsc
# The build directored is created
# Add script "start": "node build/index.js" to package.json
npm start
```

```bash
# EADDRINUSE
sudo lsof -i :3000
# Copy PID
kill <PID>
```

```bash
npm i ts-node-dev -D
# Add script "dev": "ts-node-dev src/index.ts" to package.json
npm run dev
```

```bash
npm i ts-standard -D
# Add script "lint": "ts-standard" to package.json
# Add eslintConfig to package.json
#  "eslintConfig": {
#    "parserOptions": {
#      "project": "./tsconfig.json"
#    },
#    "extends": ["./node_modules/ts-standard/eslintrc.json"]
#  }
```

