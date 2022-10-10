
console.log('Hello World');

function sendTestRequest() {
    var request = new XMLHttpRequest();
    // Get request from this address: https://jidelna.gymzl.cz:8443/faces/login.jsp
    request.open('GET', 'https://jidelna.gymzl.cz:8443/faces/login.jsp', true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var resp = request.responseText;
            console.log(resp);
        } else {
            // We reached our target server, but it returned an error
            console.log('Error');
        }
    }
}