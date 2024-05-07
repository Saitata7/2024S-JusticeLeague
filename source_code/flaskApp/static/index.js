document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('user_input').value;
    var resultElement = document.getElementById('result');
  
    // Show loading message
    resultElement.innerText = 'Loading...';
  
    fetch('/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: userInput })
    })
      .then(response => response.json())
      .then(data => {
        // Hide loading message and display the result
        resultElement.innerText = 'Result: ' + data.Summary;
      })
      .catch(error => {
        console.error(error);
        // Hide loading message and display an error message
        resultElement.innerText = 'An error occurred.';
      });
  });