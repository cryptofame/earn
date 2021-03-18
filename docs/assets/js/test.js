function helloWorld(_email, _code, _date) {
    var url = 'https://cripto-6368.restdb.io/rest/cusers';
    var data = { email: _email, code: _code, date: _date };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json',
            "x-apikey": "604e4b4df8097a7d7a024723",
            "cache-control": "no-cache"
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}