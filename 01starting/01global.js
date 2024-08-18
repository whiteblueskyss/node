// window is not in nodejs but global is. window is in browser. many fucntions are in global object of window.
// like setTimeout, setInterval, clearInterval etc.

// console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);


// console.log(document.querySelector); // this will give error because document is not in nodejs. it is in browser.
