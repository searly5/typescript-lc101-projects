// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type

//let spacecraftName: string = "Determination";
//let speedMPH: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
//let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars:  number = hoursToMars / 24;



// Code an output statement here (use a template literal):
// console.log(`It will take ${spacecraftName} ${daysToMars} days to reach Mars.`);


// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation (kilometersAway: number): number {
//     let milesAway: number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number  = milesAway / speedMPH;
//     return hoursToLocation / 24;

// }


// Move your output statement from part 2 here. Update the template literal to call
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to reach Mars.`);
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class
class Spacecraft {
    name: string;
    speedMph: number;
    milesPerKilometer:  number;
    constructor(name: string, speedMph: number) {
    this.name = name
    this.speedMph = speedMph;
    this.milesPerKilometer = 0.621;
}
     getDaysToLocation (kilometersAway: number) {
        let milesAway = kilometersAway * this.milesPerKilometer;
        let hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
     }
     printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
    
}



// Create an instance of the class here:
let spaceShuttle =  new Spacecraft("Determination", 17500);


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`It will take ${spaceShuttle.name} ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to reach Mars.`);


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));