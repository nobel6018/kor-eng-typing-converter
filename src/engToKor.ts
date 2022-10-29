import './string.extensions';

export default function engToKor(text: string) {
  return text
    .substituteVowels()
    .substituteFirstConsonants()
    .substituteLastConsonants()
    .normalize('NFKC')
    .substituteTheLeftConsonants();
}
