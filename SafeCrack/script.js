const wait20seconds = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 20000);
    }
);
document.getElementById('resultDiv').innerHTML = `
<img src="5HQSYn.jpg">
`;
wait20seconds.then(() => timeIsUp());

function timeIsUp() {
    if (!codeCheck) {
        document.getElementById('formGuess').innerHTML = ``;
        document.getElementById('resultDiv').innerHTML = `
        <h2>Your time is up!</h2>
        `
    }
}

const codesArr = [];
var codeCheck = false;
document.getElementById('guessBtn').addEventListener('click', function () {
    code = document.getElementById('inputCode').value;
    if (code.toString().length == 4) {
        if (code == 1234) {
            document.getElementById('formGuess').innerHTML = ``;
            document.getElementById('resultDiv').innerHTML = `
            <p>You cracked the safe! well done!!</p>
            <img src="93127b8.jpg">
            `;
            codeCheck = true;
        }
        else {
            codesArr.push(code);
            document.getElementById('resultDiv').innerHTML = `
            <p>Your guess is incorrect. try again!</p>
            <img src="5HQSYn.jpg">
            `;
        }
    }
    else {
        alert('The code you entered is illegal. Please enter only 4 digits.');
    }
});

document.getElementById('showBtn').addEventListener('click', function () {
    if (codesArr.length == 0) {
        document.getElementById('resultDiv').innerHTML = `
        <p>There are no failed guesses yet.</p>
        `;
    }
    else {
        document.getElementById('resultDiv').innerHTML = ``;
        codesArr.forEach(element => {
            document.getElementById('resultDiv').innerHTML += `
            <p>${element}</p>
            `
        });
    }
});