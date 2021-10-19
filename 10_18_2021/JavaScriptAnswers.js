// 1) This robot roams around a 2D grid. It starts at (0, 0) facing North. 
//      After each time it moves, the robot rotates 90 degrees clockwise. 
//      Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

// Examples:
// trackRobot(20, 30, 10, 40) --> [-10, 10]

// trackRobot() --> [0, 0]
// // No movement means the robot stays at (0, 0).

// trackRobot(-10, 20, 10) --> [20, -20]
// // The amount to move can be negative.

// Notes:
// Each movement is an integer (whole number).

function trackRobot(...move){
    let i = 0;
    let coordinates = [0,0]
    for(let m of move){
        if(i%4 === 0){
            coordinates[1] += m;
        } else if (i%4 === 1){
            coordinates[0] += m;
        } else if(i%4 === 2){
            coordinates[1] -= m;
        } else if(i%4 === 3){
            coordinates[0] -= m;
        }
        i++;
    }

    return coordinates;
}

// 2) Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

// Examples:
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

// Notes:
// Triangle fits if it has the same or smaller size as the hole.
// The function should return false if the triangle with that dimensions is not possible.

function doesTriangleFit(triA, triB){

    if((triA[0]+triA[1] <= triA[2]) || (triA[1]+triA[2] <= triA[0]) || (triA[0]+triA[2] <= triA[1])){
        return false;
    }
    if((triB[0]+triB[1] <= triB[2]) || (triB[1]+triB[2] <= triB[0]) || (triB[0]+triB[2] <= triB[1])){
        return false;
    }

    for(let i = 0; i < 3; i++){
        if((triA[i%3] <= triB[0]) && (triA[(i+1)%3] <= triB[1]) && (triA[(i+2)%3] <= triB[2])){
            return true
        }
    }

    return false
}
