const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = expr.split('**********'), word = [], result = [];
    for (let i = 0; i < array.length; i ++) {
        for (let k = 0; k < array[i].length; k+= 10) {
        let letter = array[i].slice(k, k + 10)
        letter = String(+letter).replace(/10/ig, '.').replace(/11/ig, '-')
        for (key in MORSE_TABLE) {
            if (letter === key) {
                letter = MORSE_TABLE[key];
            }
        }
        word.push(letter);
        word
        }
        word = word.join('')
        result.push(word, ' ')
        word = []
  
    };
    result = result.join('');
    return result.slice(0, result.length - 1)
}

module.exports = {
    decode
}