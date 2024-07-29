<h1 align="center">Git Repo URL</h1>

<br>

<div align="center">
  🌐 Gets the origin URL of the current, local Git repository. 🗺️
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

- [Usage](#-usage)
- [API](#-api)
  - [getRepoUrl()](#getrepourl)
  - [getRepoUrlSync()](#getrepourlsync)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i '@igor.dvlpr/git-repo-url'
```

<br>

## 🤹🏼 API

### `getRepoUrl()`

*Asynchronously gets the URL of a local directory if it is a Git repository.*  

`options` - optional object with options:
  - `directory` - sets the current working directory, otherwise the current directory will be used instead.  
  
<br>

Will throw an error if the passed directory is not valid or does not exist.

Returns the URL if the directory is a Git repository, otherwise an empty string.

---

### `getRepoUrlSync()`

*Synchronously gets the URL of a local directory if it is a Git repository.*  

`options` - optional object with options:
  - `directory` - sets the current working directory, otherwise the current directory will be used instead.  

<br>

Will throw an error if the passed directory is not valid or does not exist.

Returns the URL if the directory is a Git repository, otherwise an empty string.

---

## ✨ Examples

`example.ts`
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

[@igor.dvlpr/strip-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-headings)

> _⛸ Strips Markdown headings!🏹_

<br>

[@igor.dvlpr/duoscribi](https://www.npmjs.com/package/@igor.dvlpr/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_
---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
