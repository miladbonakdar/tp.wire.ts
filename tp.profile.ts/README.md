## @

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
yarn install
yarn build
```

For having a new version : 
first create the package from swagger

```shell
java -jar swagger-codegen-cli-3.0.35.jar generate -i http://localhost:4001/swagger/v1/swagger.json  -l typescript-axios -o /home/milad/RiderProjects/tp.wire.ts/TEMP
```


```bash
yarn version
npm publish
```