// Author: Igor Dimitrijević (@igorskyflyer)

import { execute, executeSync } from '@igor.dvlpr/simple-exec'
import type { ExecResult } from '@igor.dvlpr/simple-exec/dist/ExecResult.mjs'
import { existsSync } from 'node:fs'

interface IOptions {
  directory?: string
}

export async function getRepoUrl(options?: IOptions): Promise<string> {
  try {
    const directory: string = options?.directory ?? '.'

    if (typeof directory !== 'string' || directory.length === 0) {
      throw new Error('No valid directory path passed.')
    }

    if (directory.length > 1 && !existsSync(directory)) {
      throw new Error('The passed directory does not exist.')
    }

    const url: string = await execute(
      `git -C ${directory} remote get-url origin`
    )

    return url.trim()
  } catch {
    return ''
  }
}

export function getRepoUrlSync(options?: IOptions): string {
  try {
    const directory: string = options?.directory ?? '.'

    if (typeof directory !== 'string' || directory.length === 0) {
      throw new Error('No valid directory path passed.')
    }

    if (directory.length > 1 && !existsSync(directory)) {
      throw new Error('The passed directory does not exist.')
    }

    const command: ExecResult = executeSync(
      `git -C ${directory} remote get-url origin`
    )

    if (command.error) {
      return ''
    }

    const result: string = command.output.trim()

    return result
  } catch {
    return ''
  }
}
