// https://www.geeksforgeeks.org/event-delegation-in-javascript/
document.querySelector('#list').addEventListener('click', (e) => {
    if(e.target.nodeName == 'LI') {
        console.log(e.target.nodeName)
    }
});
