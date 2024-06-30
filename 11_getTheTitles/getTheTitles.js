const getTheTitles = function(booksArg) {
let titleArr = [];

for (let i=0; i<booksArg.length; i++) {
    titleArr[i] = booksArg[i].title;
}

console.log(titleArr);
return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
