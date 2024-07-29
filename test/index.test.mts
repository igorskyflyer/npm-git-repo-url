// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { getRepoUrl, getRepoUrlSync } from '../src/index.mts'

describe('🧪 Git Repo URL tests 🧪', () => {
  suite('getRepoUrlSync()', () => {
    test('#1 should be true', () => {
      assert.isTrue(getRepoUrlSync().indexOf('npm-git-repo-url') > -1)
    }) // #1

    test('#2 should be empty', () => {
      assert.isEmpty(getRepoUrlSync({ directory: './test/is-git-no-url' }))
    }) // #2

    test('#3 should true', () => {
      assert.isTrue(
        getRepoUrlSync({ directory: './test/is-git-with-url' }).indexOf(
          'duoscribi'
        ) > -1
      )
    }) // #3
  })

  suite('getRepoUrl()', () => {
    test('#4 should be true', async () => {
      const result: string = await getRepoUrl()

      assert.isTrue(result.indexOf('npm-git-repo-url') > -1)
    }) // #4

    test('#5 should be empty', async () => {
      assert.isEmpty(await getRepoUrl({ directory: './test/is-git-no-url' }))
    }) // #5

    test('#6 should true', async () => {
      const result: string = await getRepoUrl({
        directory: './test/is-git-with-url'
      })

      assert.isTrue(result.indexOf('duoscribi') > -1)
    }) // #6
  })
})
