// Write a function that validates an HTTP request object. The object has the properties method, uri, version and message. Your function will receive the object as a parameter and has to verify that each property meets the following requirements:
//  method - can be GET, POST, DELETE or CONNECT
//  uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
//  version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
//  message - may contain any number or non-special characters;special characters are <, >, \, ', ", &;
// If a request is valid, return it unchanged.
// If any part fails the check, throw an Error with message &quot;Invalid request header: Invalid
// {Method/URI/Version/Message}&quot;.
// Replace the part in curly braces with the relevant word. Note that some of the properties may be missing,in which case the request is invalid. Check the properties in the order in which they are listed above. If more than one property is invalid, throw an error for the first encountered.
// Input / Output
// Your function will receive an object as a parameter. Return the same object or throw an Error as
// described above as an output.
// Examples
// Input Output
// {
// method: 'GET',
// uri: 'svn.public.catalog',
// version: 'HTTP/1.1',
// message: '
// }

// {
// method: 'GET',
// uri: 'svn.public.catalog',
// version: 'HTTP/1.1',
// message: '
// }

// {
// method: 'OPTIONS',
// uri: 'git.master',
// version: 'HTTP/1.1',

// Invalid request header: Invalid
// Method

// message: '-recursive'
// }
// {
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//     }
    
//     Invalid request header: Invalid
//     Version
    
//     Hints
//     Since validating some of the fields may require the use of RegExp, you can check your expressions using
//     the following samples:
    
//     URI
    
//     Valid Invalid
    
//     svn.public.catalog
//     git.master
//     version1.0
//     for..of
//     .babelrc
//     c
    
//     %appdata%
//     apt-get
    
//     home$
//     define apps
//     &quot;documents&quot;
    
//      Note that the URI cannot be an empty string.
//     Message    
//      Note that the message may be an empty string, but the property must still be present.

// returns 77%
// function solve(httpObj){

//     validateMethod(httpObj); validateMsg(httpObj); validateV(httpObj); validateUri(httpObj);
//     return httpObj;


//     function validateMethod(httpObj){
//         const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
//         if(httpObj['method'] === undefined || !methods.includes(httpObj['method'])){
//             throw new Error(`Invalid request header: Invalid Method`);
//         } 
//         return httpObj;
//     }

//     function validateV(httpObj){
//         let v = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
//         if(httpObj.version === undefined || !v.includes(httpObj['version'])){
//             throw new Error(`Invalid request header: Invalid Version`);
//         } 
//         return httpObj;
//     }
//     function validateUri(httpObj){
//         // let regexUri = /^\*|[a-zA-Z0-9.]+$/;
//         const regexUri = /^(\.*[a-zA-Z]*[0-9]*\.*\**)+$/;
//         if(httpObj.uri === undefined || httpObj.uri == '' || !regexUri.test(httpObj['uri'])){
//             throw new Error(`Invalid request header: Invalid URI`);
//         }
//         return httpObj;
//     }
//     function validateMsg(httpObj){
//        // may contain any number or non-special characters;special characters are <, >, \, ', ", &
//        let regexMsg = /^[^<>\\&'"]*$/;
//         if(httpObj['message'] === undefined || !regexMsg.test(httpObj['message'])){
//            throw new Error(`Invalid request header: Invalid Message`);   
//        }
//        return httpObj;
//     }

// }

// solution 2: 
function solve(obj){
    const errMsg = (el) => {
        const capitalized = el !== 'uri' ? el.charAt(0).toLocaleUpperCase() + el.slice(1) : el.toLocaleUpperCase();
        return `Invalid request header: Invalid ${capitalized}`;
    }

    function propExist(obj, arr){
        arr.forEach(el => {
            if(!obj.hasOwnProperty(el)){
                throw new Error(errMsg(el));
            }
        });
        return obj;
    }

    function validProps(obj){
        const checks = {
            method: (m) => ['GET', 'POST', 'DELETE', 'CONNECT'].includes(m),
            uri: (u) => /^(\.*[a-zA-Z]*[0-9]*\.*\**)+$/g.test(u) && u !== '',
            // uri: (u) => /^\*|[a-zA-Z0-9.]+$/.test(u) && u !== '', this is error
            version: (v) => ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(v),
            message: (m) => /^[^<>\\&'"]*$/g.test(m)
        }
        Object.entries(obj).forEach(([prop, val]) => {
             if(!checks[prop](val)){
                 throw new Error(errMsg(prop));
             }
        });
        return obj;
    }

    return validProps(propExist(obj, ['method', 'uri', 'version', 'message']));
}

try{
    const httpObj = { method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '' };
    console.log(solve(httpObj));  
}catch(e){
    console.log(e.message);
}
//
try{
    const httpObj = { method: 'OPTIONS', uri: 'git.master',version: 'HTTP/1.1',  message:'-recursive'};
    console.log(solve(httpObj));  
    // Invalid request header: Invalid Method

}catch(e){
    console.log(e.message);
}

try{
    const httpObj = {method: 'POST',uri: 'home.bash', message: 'rm -rf /*' };
    console.log(solve(httpObj));  
    // invalid version
}catch(e){
    console.log(e.message);
}

