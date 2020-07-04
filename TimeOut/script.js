document.getElementById('startBtn').addEventListener('click', function(){
    const wait3seconds = new Promise (
        (resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        }
    );
    wait3seconds.then(() => showMess());
});

function showMess() {
    document.getElementById('messageArea').innerHTML = `
    <p>YOUR TIME IS UP.......</p>
    `
}