const wait3seconds = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    }
);
document.getElementById('messDiv').innerHTML = `
<h1>LOADING...</h1>
`;
wait3seconds.then(() => timeIsUp());

function timeIsUp() {
    document.getElementById('messDiv').innerHTML = `
    <h1>HELLO WORLD!</h1>
    `;  
}