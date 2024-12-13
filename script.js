//* Getting elements from html
const fetchData = document.getElementById('fetch');
const xhrData = document.getElementById('xhr');
const postDat = document.getElementById('post');
const putData = document.getElementById('put');
const dataDisplay = document.getElementById('display');
const form = document.getElementById('data-form');


//* Fetch  API Section
fetchData.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('...There was an Error in Loading, Check Your NetWork...');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
});