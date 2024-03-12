/*

The dns.lookup() method in Node.js is used to resolve IP addresses of a specified hostname. It takes the following parameters:
The dns.lookup() method is an inbuilt application programming interface of the dns module
Syntax:
                                dns.lookup( hostname, options, callback )

hostname: The hostname to resolve.
options: An optional object that can contain the following properties:
            family: The IP address family (4 for IPv4, 6 for IPv6). Default is null, which means both IPv4 and IPv6 addresses are allowed.
            hints: An integer that specifies the resolution options.
            This is a bitmask composed of one or more of the following constants: dns.ADDRCONFIG, dns.V4MAPPED, and dns.ALL. Default is 0.
callback: A callback function that is called with the resolved IP address.

*/

let dns=require('dns');

dns.lookup('localhost',(err,address,family)=>{
    if(err) console.log(err)
    console.log('IP Address:', address);
    console.log('IP Version:', family);
})