

////// AJAX (Asynchronous JavaScript with XML) is:
////// 1. Programming Exercise for better user experience.
////// 2. Fetches data asynchronously with out interfering with the existing page.
////// 3. No page reload/refresh. Thus saving network bandwidth.
////// 4. Modern websites use JSON instead of XML. Though data can be requested in multiple forms including .txt..
////// 5. AJAX uses XMLHttpRequests(xhr object) to request the server for the data.

console.log('This is the Ajax.js file.');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn button.');
    // Instantiating an xhr object...
    const xhr = new XMLHttpRequest();

    // Open the xhr Object...defining the type of request along with the source from where the data is to be extracted as well as to keep it asynch or not..
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);  // Arguments are: Type of Request(GET/POST etc), Source, if to be set as async or not..


    // Do this for POST requests....
    xhr.open('POST', 'http://localhost:3000/Simple_Json', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // while the request is On Progress...
    xhr.onprogress = function () {
        console.log('Requset On Progress...');
    }

    // When the respones is ready...
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error('Some error occured.');
        }
    }

    // send to the request...
    // params is the JSON data that is to be sent to the dataBase/server...
    params = { id: 'Sumit_02', name: 'sumit kumar', lastName: 'chaudhary' };
    xhr.send(params);
}

