/*
used to name resolution facility.
which is provided by the operating system as well as used to do an actual DNS lookup.

The DNS in Node.js provides functions to perform DNS lookups and resolve domain names. 

In networking, the Domain Name System (DNS)
is a system used to translate human-readable domain names (like "example.com") into IP addresses (like "192.0.2.1") 
that computers use to communicate with each other over the internet.
DNS lookups and name resolution are --->fundamental aspects of how the internet works.

--->DNS Lookup: When you type a domain name into your web browser (e.g., "example.com") and press Enter, 
your computer needs to know the IP address of the server hosting that website. It does this by performing a DNS lookup.
The computer sends a request to a DNS server, asking it to translate the domain name into an IP address. 
The DNS server responds with the IP address, allowing your computer to connect to the server.



--->Name Resolution: Name resolution is the process of translating a domain name into an IP address.



In the context of the DNS module in Node.js, functions like dns.resolve() and dns.reverse() are used to perform 
these DNS operations programmatically.
For example, ---->dns.resolve('www.example.com') would return the IP addresses associated with the domain name "www.example.com". 
Similarly,------> dns.reverse('192.0.2.1') would return the domain names associated with the IP address "192.0.2.1".
*/


let dns=require('dns')
const { hostname } = require('os')
dns.resolve('localhost',(err,res)=>{
    if(err) console.log(err)
    else console.log( "localhost IP address is :",res)
})

dns.reverse('8.8.8.8',(err,hostnameis)=>{
    if(err) console.log(err)
    else console.log(" yes this IP address have hostname name as : ",hostnameis)
})