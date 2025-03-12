var printCount = 5;

// The index parameter is the current loop iteration number passed from the for loop
function printMessage(index) {
    const msg = `Hello Falcon Punch ${index}!`;
    console.log(msg);
}

// for loop, i starts at 0, loops as long as i is less than printCount var which is 5, each loop i increments up by 1
//prints message each loop
for(let i = 0; i < printCount; i++) {
    printMessage(i);
}

//Test pushing code
// add also this line