const vegPromise = new Promise((resolve,reject)=> {
    let vegArr = ['🥒','🥕','🧅','🍅','🥔', '🍆', '🧄', '🍄'];
setTimeout(() => {
    resolve(vegArr);
}, 3000);
});

let container = document.createElement('container');
document.body.appendChild(container);

async function printVeg (){
    console.log('Upload in progress');
    let vegetables = await vegPromise;
    console.log('Fulfilled');
    container.innerHTML+=(`Here are your vegetables`);
    vegetables.forEach((vegetable) => {
        console.log(vegetable);
        container.innerText += `   ${vegetable}`;
    });
}
printVeg();