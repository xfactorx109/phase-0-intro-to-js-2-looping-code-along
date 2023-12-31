// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

writeCards(["Charlie", "Samip", "Ali"], "birthday");
function writeCards(names, gift) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${gift} gift!`;
        messages.push(message);
    }
    return messages;
}
function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}