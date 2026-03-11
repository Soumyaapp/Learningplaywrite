let responses = [200, 201, 404, 500, 404, 200, 503];

let uniqueErrors = [...new Set(responses.filter(code => code >= 400))];

console.log(uniqueErrors);