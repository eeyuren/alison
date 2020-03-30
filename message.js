var fs = require('fs');
fs.writeFile('message.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log(message);
});