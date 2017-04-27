// Stephen Brown
// ontheheap@gmail.com
// Interview Cake - Reverse A Linked List
// https://www.interviewcake.com/question/javascript/rectangular-script

'use strict'

let result = (function(testInput) {

/*
                ________________
  LM.y+LM.h     |              |
    ____________|_________     |
    |           |////////|_____| 
    | Left-Most (LM)     |    
    | Bottom-Most (BM)   |
    |____________________|
    LM.x,LM.y           LM.x+LM.w
    
    
    Observations:
    ------------
    
    - There is an overlap on the x-axis if the left-most rectangles (x + w) is greater than the other rectangles x.
    - There is an overlap on the y-axis if the bottom-most rectangle (y + h) is greater than the other rectangles y.
    
    - There is only an overlap if there is both an x-overlap and a y-overlap
    
    - The amount of x-overlap can be found by min(lm.x+lm.w, rm.x+rm.w) - rm.x, since the overlap starts from the right-most x and goes until the right side of the least-wide rect
    - The amount of y-overlap can be found in a similar manner
    
    - other.x defines the x of the overlap-rect
    - other.y defines the y of the overlap-rect
    - The x-overlap amount defines the width of the overlap-rect
    - The y-overlap amount defines the height of the overlap-rect

*/

    function getOrderedRectangles(rect1, rect2) {
        let orderedX = rect1.leftX < rect2.leftX ?  [rect1, rect2] : [rect2, rect1]
        let orderedY = rect1.bottomY < rect2.bottomY ? [rect1, rect2] : [rect2, rect1]
        return {leftMost: orderedX[0], rightMost: orderedX[1], bottomMost: orderedY[0], topMost: orderedY[1]}
    }
    
    function hasOverlapOnX(leftRect, rightRect) {
        return (leftRect.leftX + leftRect.width) > rightRect.leftX
    }
    
    function hasOverlapOnY(bottomRect, topRect) {
        return (bottomRect.bottomY + bottomRect.height) > topRect.bottomY
    }
    
    function getOverlapX(leftRect, rightRect) {
        let overlapX = rightRect.leftX
        let overlapWidth = Math.min(rightRect.leftX+rightRect.width, leftRect.leftX+leftRect.width) - rightRect.leftX
        return {leftX: overlapX, width: overlapWidth}
    }
    
    function getOverlapY(bottomRect, topRect) {
        let overlapY = topRect.bottomY
        let overlapHeight = Math.min(topRect.bottomY+topRect.height, bottomRect.bottomY+bottomRect.height) - topRect.bottomY
        return {bottomY: overlapY, height: overlapHeight}
    }
    
    function findRectangularLove(rects) {
        let orderedRects = getOrderedRectangles(testInput[0], testInput[1])
        
        if ( hasOverlapOnX(orderedRects.leftMost, orderedRects.rightMost) && hasOverlapOnY(orderedRects.bottomMost, orderedRects.topMost) ) {
            return Object.assign(getOverlapX(orderedRects.leftMost, orderedRects.rightMost), getOverlapY(orderedRects.bottomMost, orderedRects.topMost))
        }
    }

    return findRectangularLove(testInput);
    
})([
    {
        leftX: 1,
        bottomY: 5,
        width: 10,
        height: 4,
    },
    {
        leftX: 3,
        bottomY: 7,
        width: 10,
        height: 4,
    }
])

console.log(result);
