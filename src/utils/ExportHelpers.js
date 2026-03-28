const downloadBlob = (content, type, filename) => {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export const exportCSV = (rows, filename = 'report.csv') => {
  const headers = Object.keys(rows[0] || {})
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => `"${String(row[header] ?? '').replaceAll('"', '""')}"`).join(',')),
  ].join('\n')
  downloadBlob(csv, 'text/csv;charset=utf-8;', filename)
}

export const exportPDFMock = (title, lines, filename = 'report.pdf') => {
  const content = `${title}\n\n${lines.join('\n')}\n\nGenerated from PulseStack dashboard UI.`
  downloadBlob(content, 'application/pdf', filename)
}
