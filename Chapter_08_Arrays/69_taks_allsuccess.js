let responses = [200, 201, 404, 500, 404, 200, 503];

let allSuccess = responses.every(code => code >= 200 && code <= 299);
console.log(allSuccess);