document.getElementById('throwBtn').addEventListener('click', function(){
    const wait3seconds = new Promise (
        (resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        }
    );
    document.getElementById('scoreArea').innerHTML = `
    <p>please wait...........</p>
    `
    wait3seconds.then(() => randomNumbers());
});

function randomNumbers() {
    num1 = Math.floor(Math.random() * 6) + 1;
    num2 = Math.floor(Math.random() * 6) + 1;

    if (num1 == num2) {
        document.getElementById('scoreArea').innerHTML = `
        <p>your score is...........</p>
        <b>${num1}</b>
        <p>You are so lucky!</p>
        `
    }
    else {
        document.getElementById('scoreArea').innerHTML = `
        <p>your score is...........</p>
        <b>${num1},</b>
        <b>${num2}</b>
        <p>Try Again!</p>
        `
    }
}
