//cek palindrome

let text = (word) => {
  let result = "";
  for (i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  if (result == word) {
    console.log("Kata adalah palindrom");
  } else {
    console.log("Kata bukanlah palindrom");
  }
};

text("malam");

//reverse kalimat
let reversed = (words) => {
  let name = words.split(" ").reverse("").join(" ");
  console.log(name);
};

reversed("saya belajar javascript");
