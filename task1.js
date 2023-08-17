const translations = {
  en: {
  greet: "Hello",
  intro: "Welcome to our website"
},
  fr: {
  greet: "Bonjour",
  intro: "Bienvenue sur notre site web"
}
};

const language = "en"; // Change to "fr" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

function localize(strings, ...keys) {
  let result = '';

  for (let i = 0; i < strings.length; i++) {
    result += strings[i];

    if (keys[i]) {
      result += translations[language][keys[i]];
    }
  }
  return result;
}

console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")