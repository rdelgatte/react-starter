```bash
nix-shell
npm init -y

npm i webpack webpack-cli webpack-dev-server --save-dev
# Configure package.json to add a `webpack --mode development` as `dev` script
npm run dev
# Fail because no src directory
mkdir src
# Init index.js entrypoint
echo 'console.log("Hello world!")' > src/index.js
npm run dev

# Configure webpack (entrypoint and output directory)
touch webpack.config.js

# Working with HTML files
npm i html-webpack-plugin --save-dev

# Configure webpack-dev-server

# Working with webpack's loaders (css-loader for loading CSS files with import | style-loader for loading the stylesheet in the DOM)
npm i css-loader style-loader --save-dev

# Working with SASS
npm i sass-loader sass --save-dev

# Working with modern javascript Babel (ES5-6 transpilation)
npm i @babel/core babel-loader @babel/preset-env --save-dev

# Working with ReactJS (babel preset to configure in babel.config.json)
npm i @babel/preset-react --save-dev

# Install react and react-dom 
npm i react react-dom

# Working with Typescript (config babel=https://babeljs.io/docs/en/babel-preset-typescript)
npm i @types/react @types/react-dom --save-dev
npm i @babel/preset-typescript --save-dev
npm i typescript ts-loader source-map-loader --save-dev 

# Working with Redux (https://redux.js.org/introduction/getting-started)
npm i @types/react-redux @types/reduxjs --save-dev
npm i redux react-redux @reduxjs/toolkit  --save-dev

# Working with SCSS files in TS files (+ global.d.ts configuration)
npm i typescript-plugin-css-modules --save-dev
./node_modules/.bin/eslint --init


## Linters (https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
## Configure with AirBnb code style
./node_modules/.bin/eslint --init 

## Prettier
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
## Eslint plugin support for typescript: https://www.npmjs.com/package/eslint-import-resolver-typescript#installation
npm i eslint-plugin-import eslint-import-resolver-typescript --save-dev

```
