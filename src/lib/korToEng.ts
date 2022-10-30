import { getKoreaAlphabetType, isKorean, KoreaAlphabetType, KoreanUnicode } from '../common';
import {
  compatibleConsonantKeyMap,
  compatibleVowelKeyMap,
  firstConsonantKeyMap,
  lastConsonantKeyMap,
  middleVowelKeyMap,
} from '../keyMaps';

export default function korToEng(text: string) {
  let result = '';

  const normalized = text.normalize('NFD');
  for (const char of normalized) {
    const unicode = char.charCodeAt(0);

    if (isKorean(unicode)) {
      result += convertKoreaAlphabetToEnglishAlphabet(unicode);
    } else {
      result += char;
    }
  }

  return result;
}

function convertKoreaAlphabetToEnglishAlphabet(unicode: number) {
  const koreaAlphabetType = getKoreaAlphabetType(unicode);
  switch (koreaAlphabetType) {
    case KoreaAlphabetType.FIRST_CONSONANT_LETTER:
      return firstConsonantKeyMap.eng[unicode - KoreanUnicode.FIRST_CONSONANT_START];
    case KoreaAlphabetType.MIDDLE_VOWEL_LETTER:
      return middleVowelKeyMap.eng[unicode - KoreanUnicode.MIDDLE_VOWEL_START];
    case KoreaAlphabetType.LAST_CONSONANT_LETTER:
      return lastConsonantKeyMap.eng[unicode - KoreanUnicode.LAST_CONSONANT_START];
    case KoreaAlphabetType.COMPATIBLE_CONSONANT_LETTER:
      return compatibleConsonantKeyMap.eng[unicode - KoreanUnicode.COMPATIBLE_CONSONANT_START];
    case KoreaAlphabetType.COMPATIBLE_VOWEL_LETTER:
      return compatibleVowelKeyMap.eng[unicode - KoreanUnicode.COMPATIBLE_VOWEL_START];
  }
}
