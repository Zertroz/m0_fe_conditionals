var goodDrivingRecord = true;
var age = 30;

if (goodDrivingRecord === true && age >= 25) {
    console.log("You get a discount!");
} else if (goodDrivingRecord === true || age >= 25) {
    console.log("You pay full price.");
} else {
    console.log("Someone else must sign for the rental.");
}