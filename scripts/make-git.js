import { writeFileSync, mkdirSync } from "node:fs"
import { join } from 'node:path'

const PATH_TEST='./test'
const PATH_GIT='.git'
const PATH_NO_URL='is-git-no-url'
const PATH_URL='is-git-with-url'
const PATH_CONFIG='config'

const gitConfig=`
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
`

const gitConfigUrl=`
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://github.com/igorskyflyer/npm-duoscribi
	fetch = +refs/heads/*:refs/remotes/origin/*
`

function setUpGit(path) {
  const gitPath=join(PATH_TEST, path, PATH_GIT)
  const configPath=join(gitPath, PATH_CONFIG)
  const withUrl=path.includes('with')

  mkdirSync(gitPath, { recursive: true })

  writeFileSync(
    configPath,
    withUrl? gitConfigUrl:gitConfig,
    'utf8'
  )


  // biome-ignore lint/suspicious/noConsole: needed for CI
  console.info(`Successfully created: ${configPath} 🚀`)
}

try {
  setUpGit(PATH_NO_URL)
  setUpGit(PATH_URL)

}
catch { }
