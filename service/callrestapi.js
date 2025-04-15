

function callRestApi() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            console.log('Data:', data);
            document.getElementById('demo').innerHTML = data.title;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}