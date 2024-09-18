
const express = require('express')
const path = require('path')
const XLSX = require('xlsx')

const app = express()
const port = 3000

// 静的ファイルを提供 (index.htmlを提供する)
app.use(express.static(path.join(__dirname)))

// APIエンドポイントを作成してExcelデータを提供
app.get('/api/accidents', (req, res) => {
  const source = path.join(__dirname, 'r5.1.xlsx')
  const workbook = XLSX.readFile(source)
  const sheet = workbook.Sheets['Sheet1']
  const rows = XLSX.utils.sheet_to_json(sheet)

  res.json(rows) // 交通事故データをJSON形式で返す
})

// サーバーを起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
