// Callback


// // calculateSquare(5, displayResult);


// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 done");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 done");
//         callback();
//     }, 3000);
// }

// function step3() {
//     setTimeout(() => {
//         console.log("Step 3 done");
//     }, 2000);
// }

// step1(() => {
//     step2(() => {
//         step3();
//     });
// });

// step1();
// step2();
// step3();


// Promises
console.log('before');

fetch("https://digimon-api.vercel.app/api/digimon")
    .then((result) => {
        //  console.log(result.json());
        return result.json();
    }).then((result2) => {
        // console.log(result2);
        // Extract only the names into a new array
        const names = result2.map(digimon => digimon.name);
        return names;
    }).then((digomonNames)=>{
        console.log(digomonNames);
        
    }).catch(error=>{
        console.error('Error:', error);
    })

console.log('after');
