const code = `  
function add(a, b) {  
return a + b;  
}  
`;  

// console.log(JSON.stringify(code));
  
// console.log(code);
// Expected:  
// "1 function add(a, b) {  
// 2 return a + b;  
// 3 }"

function multiline(string) {
  const devided = string.split('\n');

  let result = '';
  
  for (let i = 0; i < devided.length; i++) {
    if ((devided[i]).trim() !== '') {
      result += `${i} ${devided[i]}\n`;
    } else {
      result += `${devided[i]}\n`;
    }
  }

  return result;
}

multiline(code)
