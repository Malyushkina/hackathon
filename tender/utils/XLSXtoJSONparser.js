if (typeof require !== 'undefined') xlsx = require('xlsx');
const fs = require('fs');
// import xlsx from '../../node_modules/xlsx';

let workbook = xlsx.readFile('/home/evgeniya/Загрузки/Контракты_Иркутск.xlsx');
let worksheet1 = workbook.Sheets['Запрос1'];


function getDateToJSON(worksheet, from, to) {
  let cellB;
  let cellC;
  for (let i = from; i <= to; i++) {
    //11 130
    cellB = worksheet[`B${i}`].w;
    cellC = worksheet[`C${i}`].w;
    xlsx.utils.sheet_add_aoa(worksheet, [[cellB]], { origin: `B${i}` });
    xlsx.utils.sheet_add_aoa(worksheet, [[cellC]], { origin: `C${i}` });
  }
  return worksheet;
}
worksheet1 = getDateToJSON(worksheet1, 11, 130);
// worksheet2 = getDateToJSON(worksheet2, 14, 134);
const titles = [
  'contractNumber',
  'begDate',
  'endDate',
  'price',
  'castomerInn',
  'castomerKpp',
  'castomerName',
  'supplierInn',
  'supplierKpp',
  'supplierName',
  'data'
  
];

const worksheet_new_JSON = xlsx.utils.sheet_to_json(worksheet1, {
  range: { s: { c: 0, r: 2 }, e: { c: 11, r: 100 } },
  header: titles
});
// const worksheet_po_JSON = xlsx.utils.sheet_to_json(worksheet2, {
//   range: { s: { c: 0, r: 14 }, e: { c: 10, r: 134 } },
//   header: titles
// });
function getFile(worksheet, fileName) {
  const file = `${fileName}`;
  fs.stat(file, function (err, stats) {
    console.log(stats); //here we got all information of file in stats variable

    if (err) {
      return console.error(err);
    }

    fs.unlinkSync(file, function (err) {
      if (err) return console.log(err);
      console.log('file deleted successfully');
    });

    fs.appendFileSync(file, JSON.stringify(worksheet));
  });

  fs.appendFileSync(`${fileName}`, JSON.stringify(worksheet));
}
getFile(worksheet_new_JSON, 'contracts.json');
// getFile(worksheet_po_JSON, 'clouddealer_calc_po.json');
