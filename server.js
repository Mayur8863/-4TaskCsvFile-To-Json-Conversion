const fs = require("fs");

let data = fs.readFileSync('./randomData.csv','utf-8');

// console.log(data + "\n");
// data = data.split("\r\n")
// let heading = data[0];
// heading = heading.split(",");
// console.log(data.length);
// let object = {
//     do : ii,
//     ds : dd,
//     ws : dds,
//     sa : dsd,
//      : j,
// };
// for(let i=1;i<2;i++){
//     let rows = data[i];
//     rows= rows.split(",");
//     console.log(rows);
    
//     for(let j = 0;j<heading.length;j++){
//         object.add(`${heading[j]} : ${rows[j]}`);
//     }
//     console.log(object);
// }
// for (let i of data) { data[i] = i.split(",") }

const Csvtojson = require("csvtojson");
Csvtojson().fromFile('./randomData.csv')
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})