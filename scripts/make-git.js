import { writeFileSync, mkdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const PATH_NO_URL='is-git-no-url'
const PATH_URL='is-git-with-url'

function setUpGit(name, withUrl=false) {
  const workTree=resolve('test', name)
  const gitDir=resolve('test', `${name}__git`)

  mkdirSync(workTree, { recursive: true })
  mkdirSync(join(gitDir, 'refs', 'heads'), { recursive: true })
  mkdirSync(join(gitDir, 'objects'), { recursive: true })

  writeFileSync(join(workTree, '.git'), `gitdir: ${gitDir}\n`)
  writeFileSync(join(gitDir, 'HEAD'), 'ref: refs/heads/main\n')

  const baseConfig=`[core]
repositoryformatversion = 0
filemode = false
bare = false
logallrefupdates = true
symlinks = false
ignorecase = true
`
  const config=withUrl
    ? `${baseConfig}
[remote "origin"]
url = https://github.com/igorskyflyer/npm-duoscribi
fetch = +refs/heads/*:refs/remotes/origin/*
` :baseConfig

  writeFileSync(join(gitDir, 'config'), config, 'utf8')

  // biome-ignore lint/suspicious/noConsole: needed for CI
  console.info(`Successfully created the mock folder! 🚀`)
}

try {
  setUpGit(PATH_NO_URL)
  setUpGit(PATH_URL, true)
} catch (e) {
  // biome-ignore lint/suspicious/noConsole: needed for CI
  console.error(e)
}
