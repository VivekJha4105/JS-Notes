
/// AJAX object is good and all but below is a better way to fetch data...

///// ##### --------- BELOW WE ENCOUNTER PROBLEM THAT- 'fetch is not defined' ------- ###### ////////

const fetch = require('node-fetch');

function getData(){
    console.log('Inside getData()');
    url = "vivek.txt";
    // fetch(url); is an asynchronous method in JS...
    
    fetch(url).then((response) => {
        console.log('Inside first promise.');
        return response.text();
    }).then((data) => {
        console.log('Inside second promise.');
        console.log(data);
    });
}

console.log('Before running getData()');
// getData();
console.log('After running getData()');

function postData() {
    url = 'https://api.instantwebtools.net/v1/airlines'
    data = {
        "id": 12,
        "name": "Sri Lankan Airways",
        "country": "Sri Lanka",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
        "slogan": "From Sri Lanka",
        "head_quaters": "Katunayake, Sri Lanka",
        "website": "www.srilankaairways.com",
        "established": "1990"
        }
    params = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, params).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
}

postData();