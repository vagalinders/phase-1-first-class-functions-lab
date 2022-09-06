function returnFirstTwoDrivers(drivers){
    const first2 = drivers.slice(0, 2);
    return first2;


}


function returnLastTwoDrivers(drivers){
    const last2 = drivers.slice(-2);
    return last2;


}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    
function createFareMultiplier(multiplier){
    //  This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. 
    // For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

    // how do I get it to return the return of fareDoubler/Tripler?
    // if (multiplier === 2){
    //     return fareDoubler;
    // }
    // if (multiplier === 3){
    //     return fareTripler;
    // };

    return (fare) => {
        return fare + multiplier
        
    }

}

function fareDoubler(fare){
    // Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
    // Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
    return fare * 2;
}

function fareTripler(fare){
    // Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
    // Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
    return fare * 3;
}

function selectDifferentDrivers(driverArray, firstOrLastDrivers){
    //  This function takes two arguments, an array of the names of Scuber's drivers and 
    // either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
    // Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
    if (firstOrLastDrivers = returnFirstTwoDrivers) {
        return returnFirstTwoDrivers;
    }
    else if (firstOrLastDrivers = returnLastTwoDrivers){
        return returnLastTwoDrivers;
    }
}


console.log(selectDifferentDrivers([]))