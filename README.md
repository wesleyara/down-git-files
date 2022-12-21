<h1 align="center" title="Vite Helper">
  downgit
</h1>

<h2 align="center">downgit provides methods for download files in public github repositories</h2>

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://img.shields.io/npm/v/downgit.svg?style=flat-square)](https://www.npmjs.com/package/downgit)
[![npm downloads](https://img.shields.io/npm/dm/downgit.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->

<h4 align="center">
 <a href="#-how-use">:rocket: How use</a> •
 <a href="#️-tools">🛠️ Tools</a> •
 <a href="#-contributing">:pencil: Contributing</a> •
 <a href="#-thanks">:adult: Thanks</a> •
 <a href="#-license">:page_facing_up: License</a>
</h4>

<br>

# :rocket: How use

Instalation:

```bash
npm install downgit
#or
yarn add downgit
```

Answer the questions (When choosing the tool, use the arrows keys to navigate, the spacebar to select and enter to finish)

# 🛠️ Tools

Example:

## fileRequest

Get file content from github.

```js
import { fileRequest } from "downgit";

const main = async () => {
  const response = await fileRequest({
    user: "wesleyara",
    repo: "downgit",
    path: "commitlint.config.js",
    branch: "main",
  });

  console.log(response);
};

main();
```

and create a file with the content

```js
import { fileRequest } from "downgit";

const main = async () => {
  const response = await fileRequest({
    user: "wesleyara",
    repo: "downgit",
    path: "commitlint.config.js",
    branch: "main",
    file: "commitlint.config.js",
  });

  console.log(response);
};

main();
```

for more information, see the docs, [Vanilla](/docs/vanilla.md) and [React](/docs/react.md)

# :pencil: Contributing

Your contribution to the `downgit` is essential for the evolution of the project, you can do it as follows:

- Open an [issue](https://github.com/wesleyara/downgit/issues) to clear doubts, report bugs or give ideas
- Open a [pull request](https://github.com/wesleyara/downgit/pulls) to give ideas for code improvement, implementation of new features and bug fixes

These are just some of the ways you can contribute to the project read the [CONTRIBUTING](https://github.com/wesleyara/downgit/blob/main/.github/CONTRIBUTING.md) for more information

# :adult: Authors

<table>
  <tr>
    <td align="center"><a href="https://wesleyaraujo.dev/"><img src="https://avatars.githubusercontent.com/u/89321125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Araújo</b></sub></a><br /></td>
  </tr>
</table>

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# :page_facing_up: License

downgit is a open source project licensed as [MIT](LICENSE).
