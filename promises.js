// every day, for the items that are not sold, we decrease their value by half.
// for simplicity, we will do so every second
const item1 = 10000;

// function accepts one argumment, the price of an item 
// and returns the new value after 2 seconds
function cutPriceByHalf(price) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(price * 0.5);
        }, 1000);
    });
}

// Here we set up the function which takes one argument: the initial price.
// The function will cut the price for 3 circles and then returns the sum of new prices
// after each function call. This is also the amount of money lost, and is returned in 
// the console after we call the function. 
function lossesAfter3DaysPromise(price) {
    return new Promise(resolve => {
        cutPriceByHalf(price).then((new_price1) => {
            cutPriceByHalf(new_price1).then((new_price2) => {
                cutPriceByHalf(new_price2).then((new_price3) => {
                    resolve(new_price1 + new_price2 + new_price3);
                });
            });
        });
    });
}

lossesAfter3DaysPromise(item1).then((sum) => {
    console.log("Total losses after 3 days:", sum);
});