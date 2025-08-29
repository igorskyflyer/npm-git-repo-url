<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-git-repo-url/main/media/git-repo-url.png" alt="Icon of Git Repo URL" width="256" height="256">
  <h1>Git Repo URL</h1>
</div>

<br>

<h4 align="center">
  🌐 Gets the origin URL a local Git repository. 🗺️
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [getRepoUrl()](#getrepourloptions-promisestring)
  - [getRepoUrlSync()](#getrepourlsyncoptions-string)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- ⚡ Async & sync modes - fetch the Git remote URL your way
- 📂 Custom directory - point to any folder, not just the current one
- 🛡 Input validation - blocks invalid or empty paths early
- 🚫 Existence check - errors if the folder doesn't exist
- 🖥 Direct Git command - uses `git remote get-url origin` for accuracy
- ✅ Clean return - URL string if found, empty string if not
- 🧩 Error‑safe - gracefully handles Git errors without crashing
- 🪶 Lightweight dependency - minimal overhead, fast execution

<br>
<br>

> ⚠️ **WARNING**
>
> This module requires that the [`git`](https://git-scm.com) executable is installed and available in the system path.
>
> If not, it needs to be installed first.
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/git-repo-url
```

```bash
yarn add @igorskyflyer/git-repo-url
```

```bash
npm i @igorskyflyer/git-repo-url
```

<br>
<br>

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


<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { getRepoUrlSync } from '@igorskyflyer/git-repo-url'

console.log(getRepoUrlSync()) // prints e.g. 'https://github.com/igorskyflyer/npm-duoscribi'
```


<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-git-repo-url/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-git-repo-url/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/recursive-readdir](https://www.npmjs.com/package/@igorskyflyer/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igorskyflyer/is-rootdir](https://www.npmjs.com/package/@igorskyflyer/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

<br>

[@igorskyflyer/vscode-folderpicker](https://www.npmjs.com/package/@igorskyflyer/vscode-folderpicker)

> _✨ Provides a custom Folder Picker API + UI for Visual Studio Code. 🎨_

<br>

[@igorskyflyer/is-git-repo](https://www.npmjs.com/package/@igorskyflyer/is-git-repo)

> _🐸 Checks if a directory is a local Git repository. 🕶️_

<br>

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An npm package for fetching Windows registry keys. 🗝_


<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
