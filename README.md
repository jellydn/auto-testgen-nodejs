<h1 align="center">Welcome to auto-testgen-nodejs 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Usage

```sh
pnpm install
```

### Setup

1. First, add the Pythagora API key to your environment using the command:

```sh
npx pythagora --config --pythagora-api-key YOUR_API_KEY
```

This command will store your Pythagora API key in a config file which will be used for generating your tests.

### Generating Unit Tests

2. To generate unit tests for a specific function in your Node.js application, use the following command:

```sh
npx pythagora --unit-tests --func sum --path dist/index.js
```

In the above command, replace `divide` with the name of the function you want to test and `dist/index.js` with the path to the file that contains the function. The tool will automatically create a unit test for the specified function.

## Show your support

Give a ⭐️ if this project helped you!
