const keywords = ["JavaScript", "template", "tagged"];  
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";  
  
const highlighted = highlightKeywords(template, keywords);  
  
console.log(highlighted);  
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."

function highlightKeywords(string, keywords) {

  let result = string;
  const splitted = string.split(' ');

  result = splitted.map((word) => {
    if (word.includes('${')) {
      const wordIndex = word.slice(2, 3);
      return `<span class='highlight'>${keywords[wordIndex]}</span>`;
    } else {
      return word;
    }
  });

  return result.join(' ');
}
