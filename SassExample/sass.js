// not used but an example of how to use sass with node
var sass = require('node-sass');
var fs = require('fs');

const input_scss = './index.scss';
const output_scss = './dist.css';

sass.render({
    file: input_scss,
    outFile: output_scss,
    outputStyle: 'compressed'
}, function (err, result) {
    if (!err) {
        // No errors during the compilation, write this result on the disk
        fs.writeFile(output_scss, result.css, function (err) {
            if (err) {
                console.log('There was an error writing file to ' + output_scss);
                console.log(err);
            } else {
                console.log(output_scss + ' was successfully saved');
            }
        });
    }
});

