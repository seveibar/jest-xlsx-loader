const XLSX = require('xlsx')

module.exports = {
  process: (src, filename) => {
    const content = XLSX.readFile(filename)

    return {
      code: `module.exports = ${JSON.stringify(content)}`,
    }
  }
}
