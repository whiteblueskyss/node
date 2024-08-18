const fs = require('fs');

const readStream = fs.createReadStream('./docs/doc3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/doc4.txt');

// readStream.on('data', (chunk) => {
//     // console.log('----- NEW CHUNK -----');
//     // console.log(chunk);
//     writeStream.write('\n\n\nNEW CHUNK\n\n\n\n');
//     writeStream.write(chunk);
// });

// use instead of above code
readStream.pipe(writeStream);