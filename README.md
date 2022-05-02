# Recon Toolbox

## Web Application Reconnaissance

### Mapping Notes

[JSON](mapping-notes.json) is useful for keeping this data structured and organized.

## Modern Web Application Structure

### REST APIs

### JSON

### JavaScript

Minimal background:

* Variables and scope
* Functions
* Context
* Prototypal Inheritance
* Asynchrony
* Browser DOM

### SPA Frameworks

* Angular
* Ember
* React
* Vue

### Authentication and Authorization

### Web Servers

* Apache
* Nginx

### Server-Side Databases

* Microsoft SQL Server
* MySQL
* PostgreSQL
* SQLite

### Client-Side Data Stores

* Local Storage
* Session Storage
* IndexedDB

```js
localStorage.setItem('vehicle', {make: 'Honda', model: 'Civic', year: '2003'});
localStorage.getItem('vehicle');

if (window.indexedDB) { console.log('true'); }
```

## Finding Subdomains

### Network Analysis Tools

* Browser Network Tools
* Burp
* ZAP

### Using Public Records

Search engine caches with Google search operators:

```
site:mega-bank.com log in
site:mega-bank.com -inurl:www
site:mega-bank.com -inurl:www -inurl:mobile
site:reddit.com -inurl:www
site:wikipedia.org puppies -inurl:dog
```

Large search engines support search operators.

Search archives with [Archive.org](https://www.archive.org)

Search social media with APIs (e.g., Twitter API). Popular posts are better searched through engine since they will be indexed.

### Zone-Transfer Attacks

```sh
host -t mega-bank.com
# mega-bank.com name server ns1.bankhost.com
# mega-bank.com name server ns2.bankhost.com

host -l mega-bank.com ns1.bankhost.com
# Using domain server:
# Name: ns1.bankhost.com
# Address: 195.11.100.25
# Aliases:
#
# mega-bank.com has address 195.250.100.195
# mega-bank.com name server ns1.bankhost.com
# mega-bank.com name server ns2.bankhost.com
# mail.mega-bank.com has address 82.31.105.140
# admin.mega-bank.com has address 32.45.105.144
# internal.mega-bank.com has address 25.44.105.144
```

### Brute-Forcing Subdomains

[Script](brute-force-subdomain.js)


> :warning: **Use with caution!** Brute force attacks are very easy to detect and could result in your IP addresses being logged or banned by the server or its admin.

```sh
node brute-force-subdomain.js
```

### Dictionary Attacks

[Script](dictionary-subdomain.js)

> :warning: **Use with caution!** Brute force attacks are very easy to detect and could result in your IP addresses being logged or banned by the server or its admin.

```sh
node dictionary-subdomain.js
```

## API Analysis

### Endpoint Discovery