// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
//   return(`Wrapped ${gift} and added a bow!`);
// }

// ** individually takes items in an array based on the array value im calling
// console.log(wrapGift(gifts[0]))
// console.log(wrapGift(gifts[1]))
// console.log(wrapGift(gifts[2]))

//for each item in array[gifts] loop until done


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     debugger
//     }
//     return gifts
// }
// wrapGifts(gifts)

// const arrOfStrNames = ["a", "b", "c"]
// const eventName = "shudda"

function writeCards(arrOfStrNames, eventName){
    let thankYouCards = []
    for(let i = 0; i < arrOfStrNames.length; i++) {
        thankYouCards.push(`Thank you, ${arrOfStrNames[i]}, for the wonderful ${eventName} gift!`);
    
    }
    return thankYouCards
}

function countDown(countDown){
    while(countDown >= 0){
        console.log(countDown)
        countDown -= 1
    
    }
}
console.log(countDown)