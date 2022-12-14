import { encode, decode } from 'js-base64';
export function Encode(text) {
    if (text) {
        //let bufferObj = Buffer.from(text, 'utf8')
        // Encoding into base64
        let base64String = encode(text,true)
            //bufferObj.toString('base64')
        return base64String
    } else {
        return null
    }
}

export function Decode(text) {
    if (typeof text !== 'string') {
        return null
    } else {
        //let bufferObj = Buffer.from(text, 'base64')
        // Decoding base64 into String
        let string = decode(text);
            //bufferObj.toString('utf8')
        return string
    }
}
