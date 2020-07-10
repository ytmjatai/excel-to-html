const fs = require('fs');
const XLSX = require('xlsx');

fs.readdir('excels', (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  for (const file of files) {
    let title = getTitle(file);
    const workbook = XLSX.readFile(`excels/${file}`);
    for (const sheet of workbook.SheetNames) {
      if (sheet !== 'Sheet1') {
        const title1 = title + `-${sheet}`;
        var worksheet = workbook.Sheets[sheet];
        generateHtml(worksheet, title1)
      } else {
        var worksheet = workbook.Sheets[sheet];
        generateHtml(worksheet, title)
      }
    }
  }
});

function generateHtml(worksheet, title) {
  const str = XLSX.utils.sheet_to_html(worksheet);
  const html = str.replace('<title>SheetJS Table Export</title>', `<title>${title}</title>`)
  fs.writeFile(`htmls/${title}.html`, html, 'utf8', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(`generate ${title}.html success.`);
  })
}

function getTitle(file) {
  const idx = file.lastIndexOf('.');
  const name = file.slice(0, idx);
  return name;
}
