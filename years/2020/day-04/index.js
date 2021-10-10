const parsePassport = (input) => input.split('\n\n')

const requiredFields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt', 'cid']

const partOne = (input) => {
  let validPassports = 0
  parsePassport(input).forEach(passport => {
    let validFields = 0
    requiredFields.forEach(field => {
      if (passport.includes(field)) {
        validFields = validFields + 1
      }
    })

    if (validFields === 8) {
      validPassports = validPassports + 1
      return
    }

    if (validFields === 7 && !passport.includes('cid')) {
      validPassports = validPassports + 1
    }
  })
  return validPassports
}

const parsePassportFields = passport => {
  const passportObject = {}
  passport.replace(/\n/g, ' ').split(' ').forEach(field => {
    const [key, value] = field.split(':')
    passportObject[key] = value
  })

  return passportObject
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
const byr = value => {
  if (value.length !== 4) return false
  if (parseInt(value, 10) < 1920) return false
  if (parseInt(value, 10) > 2002) return false
  return true
}

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
const iyr = value => {
  if (value.length !== 4) return false
  if (parseInt(value, 10) < 2010) return false
  if (parseInt(value, 10) > 2020) return false
  return true
}

// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
const eyr = value => {
  if (value.length !== 4) return false
  if (parseInt(value, 10) < 2020) return false
  if (parseInt(value, 10) > 2030) return false
  return true
}
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.

const hgt = value => {
  if (value.includes('cm')) {
    const [height] = value.split('cm')
    if (height.length !== 3) return false
    if (parseInt(height, 10) < 150) return false
    if (parseInt(height, 10) > 193) return false
    return true
  }

  if (value.includes('in')) {
    const [height] = value.split('in')
    if (height.length !== 2) return false
    if (parseInt(height, 10) < 59) return false
    if (parseInt(height, 10) > 76) return false
    return true
  }

  return false
}
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.

const hcl = value => {
  return /^#[0-9A-F]{6}$/i.test(value)
}
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
const ecl = value => {
  const validOptions = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

  return validOptions.includes(value)
}
// pid (Passport ID) - a nine-digit number, including leading zeroes.
const pid = value => {
  return /^[0-9]{9}$/i.test(value)
}

const validator = {
  byr: byr,
  iyr: iyr,
  eyr: eyr,
  hgt: hgt,
  hcl: hcl,
  ecl: ecl,
  pid: pid,
  cid: () => true,
}

const partTwo = (input) => {
  let validPassports = 0
  const preparedPassports = parsePassport(input).map(parsePassportFields)

  preparedPassports.map(passport => {
    const keys = Object.keys(passport)

    const invlaidFields = keys.filter(key => !validator[key](passport[key]))

    if (keys.length === 8 && invlaidFields.length === 0) {
      validPassports = validPassports + 1
    }

    if (keys.length === 7 && !keys.includes('cid') && invlaidFields.length === 0) {
      validPassports = validPassports + 1
    }

    return invlaidFields
  })

  return validPassports
}

module.exports = { partOne, partTwo }
