const fs = require('fs');
const csv = require('csv-parser');

// Paths for the input and output files
const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Delete existing files if they exist
if (fs.existsSync(canadaFile)) {
    fs.unlinkSync(canadaFile);
    console.log(`${canadaFile} has been deleted.`);
}

if (fs.existsSync(usaFile)) {
    fs.unlinkSync(usaFile);
    console.log(`${usaFile} has been deleted.`);
}

// Read and process the CSV file
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        const { country } = row;

        if (country.toLowerCase() === 'canada') {
            fs.appendFileSync(canadaFile, `${row.country},${row.year},${row.population}\n`);
        } else if (country.toLowerCase() === 'united states') {
            fs.appendFileSync(usaFile, `${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed.');

        // Read and print canada.txt
        if (fs.existsSync(canadaFile)) {
            console.log('\nContents of canada.txt:');
            const canadaData = fs.readFileSync(canadaFile, 'utf-8');
            console.log(canadaData);
        }

        // Read and print usa.txt
        if (fs.existsSync(usaFile)) {
            console.log('\nContents of usa.txt:');
            const usaData = fs.readFileSync(usaFile, 'utf-8');
            console.log(usaData);
        }
    });
