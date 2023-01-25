const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = '';
  let morse = '';
  const obj = MORSE_TABLE;
  const space = "**********";

  let arr = expr.match(/.{1,10}/g);

  arr.forEach(i => {
    let q = i.match(/.{1,2}/g);
    for(let i = 0; i < q.length; i++) {
      if(q[i] === '10') {
        morse += '.'; 
      } else if (q[i] === '11') {
        morse += '-';
      } else if(q[i] === '**') {
        morse += '*';
      } else if(q[i] === '00') {
        morse += ' ';
      }
    }
    
  });
  let arrMorse = morse.match(/.{1,5}/g);
  arrMorse.forEach((item) => {
    item = item.trim();
    Object.keys(obj).forEach((key) => {
      if(key === item) {
        result += obj[key];
      }
    });
    if (item === '*****'){
      result += ' ';
    }
  });
  return result ;
}

module.exports = {
  decode,
};
