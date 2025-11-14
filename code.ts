// Шифр
// Используя эти данные, расшифруйте фразу ниже.

const text: string = 'the quick brown fox jumps over the lazy dog';
const textCode: string = 'oak lgypb wited zts qgfch tuki oak mjrn xtv';
const decodingText: string = 'ntg ajuk fjbydv vikjo citvikhh yd mkjidydv qjujhpiyco. ptdvijoh!';

const decoding = (str): string => {
  let newText: string = '';
  for (let i = 0; i < str.length; i++) {
    if (textCode.includes(str[i])) {
      newText += text[textCode.indexOf(str[i])];
    }
  }
  return newText;
};

console.log(decoding(decodingText));
