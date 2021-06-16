# Misleading Node error

Try to figure out what causes the error

```
SyntaxError: Named export 'bar' not found. The requested module '../lib/function.js' is a CommonJS module, which may not support all module.exports as named exports.
```

The `lib` folder contains three types of export scenarios I trimmed down from example packages:

## define-property.js

This is based off of https://unpkg.com/dropbox@7.3.0/cjs/index.js and uses the Object.defineProperty to build the exported object

## factory.js

This is based off of https://unpkg.com/tslib@2.3.0/tslib.js and uses some sort of factory builder pattern probably related to UMD

## function

This is based off https://unpkg.com/glob@7.1.7/glob.js which defines a top level function which is exported and then adds functions ontop of that original function

# Running

Just run node and then one of the use-lib files. For example:

- node .\use-lib\use-define-property.js
- node .\use-lib\use-factory.js
- node .\use-lib\use-function.js

This was originally tested with node v14.17.1

# Expectation

All of these import types to work. Imagine we're a consumer building out the use-lib project. We don't have authority or speed to be able to rewrite the output style of all of our dependencies. They are also written in CJS and worked perfectly before we moved our consuming library to be ESM.

Ideally, these libraries would continue to work and not require every producer to update before consumers can migrate to ESM.
