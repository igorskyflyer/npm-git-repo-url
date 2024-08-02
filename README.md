<h1 align="center">Git Repo URL</h1>

<br>

<div align="center">
  🌐 Gets the origin URL of a local Git repository. 🗺️
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [getRepoUrl()](#getrepourloptions-promisestring)
  - [getRepoUrlSync()](#getrepourlsyncoptions-string)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🔍 gets the URL of a local Git repo
- ⌚ both async and sync methods supported
- 👽 cross-platform
- ⚖️ lightweight

---

## 🕵🏼 Usage

> [!WARNING]
> This module requires that the [`git`](https://git-scm.com) executable is installed and available in the system path.
>
> If not, it needs to be installed first.
>

<br>

Install the module by executing:

```shell
npm i '@igor.dvlpr/git-repo-url'
```

---

## 🤹🏼 API

### `getRepoUrl(options?): Promise<string>`

*Asynchronously gets the URL of a local directory if it is a Git repository.*  

`options` - optional object with options:
  - `directory` - sets the current working directory, otherwise the current directory will be used instead.  
  
<br>

Will throw an error if the passed directory is not valid or does not exist.

Returns the URL if the directory is a Git repository, otherwise an empty string.

---

### `getRepoUrlSync(options?): string`

*Synchronously gets the URL of a local directory if it is a Git repository.*  

`options` - optional object with options:
  - `directory` - sets the current working directory, otherwise the current directory will be used instead.  

<br>

Will throw an error if the passed directory is not valid or does not exist.

Returns the URL if the directory is a Git repository, otherwise an empty string.

---

## ✨ Examples

`example.mts`
```ts
import { getRepoUrlSync } from '@igor.dvlpr/git-repo-url'

console.log(getRepoUrlSync()) // prints e.g. 'https://github.com/igorskyflyer/npm-duoscribi'
```

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-git-repo-url/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-git-repo-url/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/recursive-readdir](https://www.npmjs.com/package/@igor.dvlpr/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igor.dvlpr/is-rootdir](https://www.npmjs.com/package/@igor.dvlpr/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

<br>

[@igor.dvlpr/vscode-folderpicker](https://www.npmjs.com/package/@igor.dvlpr/vscode-folderpicker)

> _✨ Provides a custom Folder Picker API + UI for Visual Studio Code. 🎨_

<br>

[@igor.dvlpr/is-git-repo](https://www.npmjs.com/package/@igor.dvlpr/is-git-repo)

> _🐸 Checks if a directory is a local Git repository. 🕶️_

<br>

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An npm package for fetching Windows registry keys. 🗝_

---

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
