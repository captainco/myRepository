// setTimeout(function() {
//     console.log("Step 1 done after 3 seconds");
//     setTimeout(function() {
//         console.log("Step 2 done after 2 seconds");
//         setTimeout(function() {
//             console.log("Step 3 done after 1 seconds");
//         }, 1000);
//     }, 2000);
// }, 3000);

let wait = function (milisec) {
   return new Promise(resolve => {
       setTimeout(resolve, milisec)
   });
}

wait(3000).then(() => {
   console.log("Step 1 done after 3 seconds");
   return wait(2000);
}).then(() => {
   console.log("Step 2 done after 2 seconds");
   return wait(1000);
}).then(() => {
   console.log("Step 3 done after 1 seconds");
})
