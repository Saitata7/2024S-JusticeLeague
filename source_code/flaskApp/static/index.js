document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    var userInput = document.getElementById('user_input').value;

    fetch('/process', {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: userInput})
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerText = 'Result:' + data;
    })
    .catch(error => {
        console.error(error);
    });

});
