import { mkdirSync, existsSync, copyFileSync } from 'fs'
import path from 'path'

const __dirname = path.resolve()

const indexTemplate = path.join(__dirname, 'template', 'index.js')
const inputTemplate = path.join(__dirname, 'template', 'input.js')
const testemplate = path.join(__dirname, 'template', 'day-n.test.js')

const generateFolders = (year, day) => {
  const dirBase = path.join(__dirname, 'years', year)
  const date = day < 10 ? `${day}`.padStart(2, '0') : day
  const folderPath = path.join(dirBase, `day-${date}`)
  console.log(folderPath)
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true })
    copyFileSync(indexTemplate, path.join(folderPath, 'index.js'))
    copyFileSync(inputTemplate, path.join(folderPath, 'input.js'))
    copyFileSync(testemplate, path.join(folderPath, `day-${date}.test.js`))
  }
}

const generateYear = (year, day) => {
  generateFolders(year, day)
}

const yearToGenerate = process.argv[2]

if (!yearToGenerate) {
  throw Error('please provide a valid year argument')
}

const dayToGenerate = process.argv[3]

if (!dayToGenerate) {
  throw Error('please provide a valid day argument')
}

generateYear(yearToGenerate, dayToGenerate)
