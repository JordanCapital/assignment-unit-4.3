console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// empty array basket
var basket = [];
const maxItems = 5;

// function addItem
function addItem(item){
    basket.push(item);
    return true;
}

// testing the addItem function by using arguments
console.log(`Adding coffee  ${addItem("coffee")}`);
console.log(`Adding milk ${addItem("milk")}`);
console.log(`Adding chocolate ${addItem("chocolate")}`);

// printing on console
console.log('Added list array is',basket);

// function listItems
function listItems(){
    for (let i = 0; i < basket.length; i++){
        console.log(basket[i]);
    }
}
// listing the looped items
console.log('The list is:');
listItems();

// new function empty
function empty (){
    basket =[];
}
