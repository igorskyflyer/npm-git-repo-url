// Author: Igor Dimitrijević (@igorskyflyer)

import { type ExecResult, executeSync } from '@igor.dvlpr/simple-exec'
import { existsSync } from 'node:fs'

interface IOptions {
  directory?: string
}

/**
 * Asynchronously gets the URL of a local directory if it is a Git repository.
 * @param options Optional object with options:
 *
 * - `directory` - Sets the current working directory, otherwise the current directory will be used instead.
 *
 * @throws Will throw an error if the passed directory is not valid or does not exist.
 * @returns The URL if the directory is a Git repository, otherwise an empty string.
 * @since v1.0.0
 */
export async function getRepoUrl(options?: IOptions): Promise<string> {
  return Promise.resolve(getRepoUrlSync(options))
}

/**
 * Synchronously gets the URL of a local directory if it is a Git repository.
 * @param options Optional object with options:
 *
 * - `directory` - sets the current working directory, otherwise the current directory will be used instead.
 *
 * @throws Will throw an error if the passed directory is not valid or does not exist.
 * @returns The URL if the directory is a Git repository, otherwise an empty string.
 * @since v1.0.0
 */
export function getRepoUrlSync(options?: IOptions): string {
  const directory: string = options?.directory ?? '.'

  if (typeof directory !== 'string' || directory.length === 0) {
    throw new Error('No valid directory path passed.')
  }

  if (directory.length > 1 && !existsSync(directory)) {
    throw new Error('The passed directory does not exist.')
  }

  try {
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
