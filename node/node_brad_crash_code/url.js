require("url");

const myUrl = new URL("https://nilesh.com?id=300&value=qwerty");

// Return host mane
console.log(myUrl.host);

// return href
console.log(myUrl.href);

// return same as href but in string
console.log(myUrl.toString());

// Return host name
console.log(myUrl.hostname);

// Return search
console.log(myUrl.search);

// Return parameters in Object
console.log(myUrl.searchParams);

// Append additional parameters
myUrl.searchParams.append("abc", "xyz");
console.log(myUrl.searchParams);
