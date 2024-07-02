document.getElementById('fraud-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value.trim();
    });

    // Send data to the server
    fetch('/submit-fraud-report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log response from server
        alert('Report submitted successfully!');
        document.getElementById('fraud-form').reset(); // Optionally reset the form
    })
    .catch(error => console.error('Error:', error));
});
