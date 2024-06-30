async function permittedCharacters(){

    let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerAlphanet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*-_"

    let permitted = [];

    if(process.env.UPPERCASE_LETTERS === "true"){
        permitted.push(...upperAlphabet);
    }

    if(process.env.LOWERCASE_LETTERS == "true"){
        permitted.push(...lowerAlphanet);
    }

    if(process.env.NUMBERS === "true"){
        permitted.push(...numbers);
    }

    if(process.env.SPECIAL_CHARACTERS === "true"){
        permitted.push(...specialCharacters);
    }

    return permitted;

}

export default permittedCharacters;