import { getKoreaAlphabetType, isKorean, KoreaAlphabetType, KoreanUnicode } from './common';

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

// prettier-ignore
const firstConsonantKeyMap = {
  kor: ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
  eng: ['r', 'R', 's', 'e', 'E', 'f', 'a', 'q', 'Q', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'],
};

// prettier-ignore
const middleVowelKeyMap = {
  kor: ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
  eng: ['k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'],
};

// prettier-ignore
const lastConsonantKeyMap = {
  kor: ['ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
  eng: ['r', 'rr', 'rt', 's', 'sw', 'sg', 'e', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'qt', 't', 'T', 'd', 'w', 'c', 'z', 'x', 'v', 'g'],
};

// prettier-ignore
const compatibleConsonantKeyMap = {
  kor: ['ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
  eng: ['r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'E', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'Q', 'qt', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'],
};

const compatibleVowelKeyMap = middleVowelKeyMap;
