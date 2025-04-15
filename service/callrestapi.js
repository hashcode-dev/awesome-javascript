

function callRestApi() {
    spinner.style.display = 'block'; // Show spinner
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            spinner.style.display = 'none'; // Hide spinner
            console.log('Data:', data);
            document.getElementById('demo').innerHTML = data.title;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}