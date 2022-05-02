const dns = require('dns');
const csv = require('csv-parser');
const fs = require('fs');

const promises = [];

/*
 * Begin streaming the subdomain data from disk (versus
 * pulling it all into memory at once, in case it is a large file).
 *
 * On each line, call `dns.resolve` to query the subdomain and
 * check if it exists. Store these promises in the `promises` array.
 *
 * When all lines have been read, and all promises have been resolved,
 * then log the subdomains found to the console.
 *
 * Performance Upgrade: if the subdomains list is exceptionally large,
 * then a second file should be opened and the results should be
 * streamed to that file whenever a promise resolves.
 * 
 * Subdomain list from dnscan: https://github.com/rbsec/dnscan
 */
fs.createReadStream('subdomains-10000.txt')
    .pipe(csv())
    .on('data', (subdomain) => {
        promises.push(new Promise((resolve, reject) => {
            dns.resolve(`${subdomain}.mega-bank.com`, function (err, ip) {
                return resolve({ subdomain: subdomain, ip: ip });
            });
        }));
    })
    .on('end', () => {

        // after all of the DNS queries have completed, log the results
        Promise.all(promises).then(function (results) {
            results.forEach((result) => {
                if (!!result.ip) {
                    console.log(result);
                }
            });
        });
    });