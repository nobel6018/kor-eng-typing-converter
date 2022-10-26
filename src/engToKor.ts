export default function engToKor(text: string) {
  return text
    .substituteVowels()
    .substituteFirstConsonants()
    .substituteLastConsonants()
    .substituteTheLeftConsonants()
    .normalize('NFKC');
}
