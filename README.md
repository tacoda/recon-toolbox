# Recon Toolbox

[TOC]

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

Search archives with [Archive.org](www.archive.org)

Search social media with APIs (e.g., Twitter API). Popular posts are better searched through engine since they will be indexed.

### Zone-Transfer Attacks