function ageCal (personObj) {
    if (!personObj.yearOfDeath){
        const deathYear = new Date().getFullYear();
    }
    else {
        deathYear = personObj.yearOfDeath;
    }
   return deathYear - personObj.yearOfBirth;
}

const findTheOldest = function(personArr) {
   const sorted = personArr.toSorted(function(a,b) {
    return ageCal(b)-ageCal(a);
    })
    console.log(sorted[0]);
    console.log(sorted[0].name);
    return(sorted[0]);
    }


// Do not edit below this line
module.exports = findTheOldest;
