<h1 align="center">Welcome to auto-testgen-nodejs 👋</h1>
<p>
  How to use AI to generate unit tests

  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

[![IT Man - AI-Powered Unit Testing in 2023 [Vietnamese]](https://i.ytimg.com/vi/1YvrwOeZk5w/hqdefault.jpg)](https://www.youtube.com/watch?v=1YvrwOeZk5w)

## Demo

![https://gyazo.com/5563528f5b41d126257a573f84631097.gif](https://gyazo.com/5563528f5b41d126257a573f84631097.gif)

## Usage

```sh
pnpm install
```

### Setup

1. First, add the [Pythagora](https://github.com/Pythagora-io/pythagora) API key to your environment using the command:

```sh
npx pythagora --config --pythagora-api-key YOUR_API_KEY
```

This command will store your Pythagora API key in a config file which will be used for generating your tests.

### Generating Unit Tests

2. To generate unit tests for a specific function in your Node.js application, use the following command:

```sh
npx pythagora --unit-tests --func divide --path dist/index.js
```

[![Image from Gyazo](https://i.gyazo.com/69471b22021906b35afc8afc9c2c8c6a.png)](https://gyazo.com/69471b22021906b35afc8afc9c2c8c6a)

In the above command, replace `divide` with the name of the function you want to test and `dist/index.js` with the path to the file that contains the function. The tool will automatically create a unit test for the specified function.

## Plan/Todo

- [ ] Add example/guide with [integration test](https://github.com/Pythagora-io/pythagora/blob/main/src/docs/integration/README.md)
- [ ] Add example with GraphQL ([Grafbase - Instant GraphQL APIs for your data](https://grafbase.com/))
- [ ] Add example with DB ([DrizzleORM - next gen TypeScript ORM](https://orm.drizzle.team/))

## Author

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

Give a ⭐️ if this project helped you!
