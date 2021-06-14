// When the [Encode and send it] button is clicked, you should get the given message from the first textarea.
// When you get the current message, you should encode it as follows:
//  Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII
// NUMBER, that represent the current character in that message
//  Clear the sender textarea and added the encoded message to the receiver textarea

// After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the
// receiver textarea and do the opposite logic from encoding:
//  Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
//  Replace the encoded message with the already decoded message in the receiver textrea, to make it
// readable

function encodeAndDecodeMessages() {
    const btns = document.querySelectorAll('button');
    let encodedMsg = '';
    let decodedMsg = '';
    let textareas = document.querySelectorAll('textarea');

    //encode and send m
    btns[0].addEventListener('click', (e)=>{
        encodeText = textareas[0].value;
        for(let i=0; i<encodeText.length; i++){
            let temp = String.fromCharCode(encodeText[i].charCodeAt(0)+1);
            encodedMsg += temp;
        }
        textareas[0].value = '';
        textareas[1].value = encodedMsg;
    });

    btns[1].addEventListener('click', (e)=>{
        let decode = textareas[1].value;
       
        for(let i=0; i<decode.length; i++){
            let temp = String.fromCharCode(decode[i].charCodeAt(0)-1);
            decodedMsg += temp;
        }
        textareas[1].value = decodedMsg;
    });
}