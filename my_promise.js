let a = 20;
let b = 0;



var waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 2000)
})


waitingData.then((value) => {
    console.log(a + value);
});



