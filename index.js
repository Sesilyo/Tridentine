fetch('pages/external_pages/introduction.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching external HTML:', error);
    });