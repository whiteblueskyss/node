const fs = require('fs'); //fs = file system


//Reading fiels
// fs.readFile('./docs/doc1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data.toString());
// });

// console.log('last line'); //this will run first because readFile is async


//writing files

// fs.writeFile('./docs/doc2.txt', 'Hello, World! written by code', () => {
//     console.log('file was written');
// }); // will create a file name doc2.txt and write Hello, World! written by code in it

//directoring files

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     }); // will create a folder named assets

// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     }); // will delete the folder named assets
// } 


// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err) => {
    if(err){
        console.log(err);
    }
    console.log('file deleted');
  });
}
else{
    console.log('file does not exist');
} 
