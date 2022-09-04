import b from 'benny'

import { plus100, getObject } from '../index'

function add(a: number) {
  return a + 100
}

const getObjectJs = (): Record<string, any> => {
  const object: Record<string, any> = {}
  object['Adventures of Huckleberry Finn'] = 'My favorite book.'
  object["Grimms' Fairy Tales"] = 'Masterpiece.'
  object['Pride and Prejudice'] = 'Very enjoyable.'
  object['The Adventures of Sherlock Holmes'] = 'Eye lyked it alot.'
  object['Test'] = 10

  return object
}

async function run() {
  await b.suite(
    'Add 100',

    b.add('Native a + 100', () => {
      plus100(10)
    }),

    b.add('JavaScript a + 100', () => {
      add(10)
    }),

    b.add('Native object generation', () => {
      getObject()
    }),

    b.add('JavaScript object generation', () => {
      getObjectJs()
    }),

    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
