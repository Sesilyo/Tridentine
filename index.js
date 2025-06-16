fetch('pages/mass_externals/1_catechumens/1_prayers-at-the-foot-of-the-altar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching external HTML:', error);
    });

/*
fetch('pages/mass_externals/1_catechumens/credo.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('content').innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching external HTML:', error);
    });

*/