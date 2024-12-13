//* Getting elements from html
const fetchData = document.getElementById('fetch');
const xhrData = document.getElementById('xhr');
const postDat = document.getElementById('post');
const putData = document.getElementById('put');

const titleDisplay = document.getElementById('postTitle');
const bodyDisplay = document.getElementById('postBody');
const form = document.getElementById('dataForm');


//* Fetch  API Section
fetchData.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('...There was an Error in Loading. Check Your NetWork...');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
});

//* XHR API section
xhrData.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { 
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                displayData(data);
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        }
    };

    xhr.send();
});




//* Display Function
function displayData(data) {
    titleDisplay.textContent = `Title: ${data.title}`;
    bodyDisplay.textContent = `Body: ${data.body}`;


}