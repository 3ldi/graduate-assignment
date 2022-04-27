
// the first part of the program is the same until we set up the async function
const item1 = 10000;

function cutPriceByHalf(price) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(price * 0.5);
        }, 1000);
    });
}

// Here we set up the async function which takes one argument: the initial price.
// The function will cut the price for 3 circles and then returns the sum of new prices
// after each function call. This is also the amount of money lost, and is returned in 
// the console after we call the function.
async function lossesAfter3DaysAsync(price) {
    const new_price1 = await cutPriceByHalf(price);
    const new_price2 = await cutPriceByHalf(new_price1);
    const new_price3 = await cutPriceByHalf(new_price2);
    return (new_price1 + new_price2 + new_price3);
}


lossesAfter3DaysAsync(item1).then((sum) => {
    console.log("Total losses after 3 days:", sum);
});