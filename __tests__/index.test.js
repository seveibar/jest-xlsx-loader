const xlsx = require('xlsx')
const spreadsheet = require('./spreadsheet.xlsx')

test('basic spreadsheet loading', () => {
  expect(spreadsheet.SheetNames).toEqual(['Sheet1'])

  const csvString = xlsx.utils.sheet_to_csv(spreadsheet.Sheets['Sheet1'])
})
