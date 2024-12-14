//* Getting elements from html
const fetchData = document.getElementById('fetch');
const xhrData = document.getElementById('xhr');
const postData = document.getElementById('post');
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
    .catch(error => {
        console.error('Error fetching data:', error);
        alert('Failed to create a post.');
    });
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
                alert('Failed to create a post.');
            }
        }
    };

    xhr.send();
});

//* Post request, sending a new post
postData.addEventListener('click', () => {
    const formData = new FormData(form);
    const data = {
        title: formData.get('title'),
        body: formData.get('body')
    };

     //* Fetch POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('...There was an Error in Sending Data. Check Your NetWork...');
        }
        return response.json();
    })
    .then(data => {
        console.log('Post Created:', data);
    })
    .catch(error => {
        console.error('Error creating post:', error);
    });
});

//* fetch Put request
putData.addEventListener('click', () => {
    // Get form data
    const formData = new FormData(form);
    const postId = formData.get('id'); // Post ID to update
    const data = {
        title: formData.get('title'),
        body: formData.get('body'),
    };

    //* Fetch PUT request
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('...There was an Error in Updating Data. Check Your NetWork...');
        }
        return response.json();
    })
    .then(data => {
        console.log('Post Updated:', data);
        displayData(data);
    })
    .catch(error => {
        console.error('Error updating post:', error);
    });
});



//* Display Function
function displayData(data) {
    titleDisplay.textContent = `Title: ${data.title}`;
    bodyDisplay.textContent = `Body: ${data.body}`;
}