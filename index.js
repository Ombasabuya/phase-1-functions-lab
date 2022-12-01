// Code your solution in this file!

const scuberBlock = 42;

function distanceFromHqInBlocks(distancePickupInBlock){
    let distanceInBock;

    if (distancePickupInBlock <= scuberBlock) {

        distanceInBock = scuberBlock - distancePickupInBlock;
    }
    else {
        distanceInBock = distancePickupInBlock - scuberBlock;
    }

    return distanceInBock;
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(distancePickupInBlock){
    const distanceInFeetPerBlock = 264;
    let distanceInFeets;
    distanceInFeets = distanceInFeetPerBlock * distanceFromHqInBlocks(distancePickupInBlock);
    return distanceInFeets;

}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(startInBlock,destinationInBlock){
    let startInFeet, destinationInFeet, distanceInFeets;
    startInFeet = startInBlock * 264;
    destinationInFeet = destinationInBlock * 264;
    if (destinationInFeet <= startInFeet) {
        distanceInFeets = startInFeet - destinationInFeet;
    }
    else{
        distanceInFeets = destinationInFeet - startInFeet;
    }
    return distanceInFeets;
}
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);

function calculatesFarePrice(startInBlock,destinationInBlock){
    let distance;
    distance = distanceTravelledInFeet(startInBlock,destinationInBlock);
    let farePrice;
    if (distance < 400){
        farePrice = 0
    }
    else if(distance > 400 && distance <= 2000){
        farePrice = (distance - 400) * 0.02;
    }
    else if(distance > 2000 && distance < 2500){
        farePrice = 25;
    }else if(distance > 2500){
        farePrice = 'cannot travel that far'
    }

    return farePrice;

}

calculatesFarePrice(43,44);
calculatesFarePrice(34,32);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24);
