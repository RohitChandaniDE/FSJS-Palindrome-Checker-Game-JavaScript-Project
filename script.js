function checkPalindrome() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
    
    const reg = /[\w]_/g;
    const normalString = input.toLowerCase().replace(reg,"");
    
    const reversedString = normalString.split("").reverse().join("");
    
    if (normalString === reversedString) {
      output.innerText = `"${input}" is true`;
    } else {
      output.innerText = `"${input}" is false`;
    }
  }
  