import fs from 'fs-extra'
import path from 'path'

const ENCODING = 'utf-8'

const getArrayInput = name => {
  const file = getStringInput(name)
  return file.split('\n')
}

const getStringInput = name => {
  const pathname = path.resolve(__dirname, '../assets', name)
  const file = fs.readFileSync(pathname, ENCODING)
  return file
}

export {
  getArrayInput,
  getStringInput,
}
