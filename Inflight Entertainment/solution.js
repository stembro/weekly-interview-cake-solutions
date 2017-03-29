// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Inflight Entertainment
// https://www.interviewcake.com/question/javascript/inflight-entertainment

'use strict';

let result = (function(flightLength, movieDurations) {
    
    let movieTimesNeededToMatchFlightLength = Object.create(null);
    
    for (let movieDuration of movieDurations) {
        if (movieDuration in movieTimesNeededToMatchFlightLength) {
            return true;
        }
        
        Object.defineProperty(movieTimesNeededToMatchFlightLength, flightLength - movieDuration, {});
    }
    
    return false;

})(120, [110, 45, 11, 85, 10]);

console.log(result);
