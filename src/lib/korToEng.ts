export default function korToEng(text: string) {
  const korToEngConverter = new KorToEngConverter();

  return korToEngConverter.convertKorStringToEng(text);
}

class KorToEngConverter {
  convertKorStringToEng(text: string) {
    return text.normalize('NFD').replaceAll(/[ᄀ-ᇂㄱ-ㅣ]/g, (s) => this.convertKorCharToEng(s));
  }

  private convertKorCharToEng(char: string) {
    const unicode = char.charCodeAt(0);

    const koreaAlphabetType = this.getKoreaAlphabetType(unicode);
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

  private getKoreaAlphabetType(unicode: number): KoreaAlphabetType {
    if (unicode >= KoreanUnicode.FIRST_CONSONANT_START && unicode <= KoreanUnicode.FIRST_CONSONANT_END) {
      return KoreaAlphabetType.FIRST_CONSONANT_LETTER;
    } else if (unicode >= KoreanUnicode.MIDDLE_VOWEL_START && unicode <= KoreanUnicode.MIDDLE_VOWEL_END) {
      return KoreaAlphabetType.MIDDLE_VOWEL_LETTER;
    } else if (unicode >= KoreanUnicode.LAST_CONSONANT_START && unicode <= KoreanUnicode.LAST_CONSONANT_END) {
      return KoreaAlphabetType.LAST_CONSONANT_LETTER;
    } else if (
      unicode >= KoreanUnicode.COMPATIBLE_CONSONANT_START &&
      unicode <= KoreanUnicode.COMPATIBLE_CONSONANT_END
    ) {
      return KoreaAlphabetType.COMPATIBLE_CONSONANT_LETTER;
    } else if (unicode >= KoreanUnicode.COMPATIBLE_VOWEL_START && unicode <= KoreanUnicode.COMPATIBLE_VOWEL_END) {
      return KoreaAlphabetType.COMPATIBLE_VOWEL_LETTER;
    } else {
      throw Error('It is not korea alphabet. Korean alphabet unicode is between 0x1100 and 0x11c2');
    }
  }
}

const enum KoreaAlphabetType {
  FIRST_CONSONANT_LETTER = '초성',
  MIDDLE_VOWEL_LETTER = '중성',
  LAST_CONSONANT_LETTER = '종성',
  COMPATIBLE_CONSONANT_LETTER = '호환자음',
  COMPATIBLE_VOWEL_LETTER = '호환모음',
}

const enum KoreanUnicode {
  FIRST_CONSONANT_START = 4352,
  FIRST_CONSONANT_END = 4448,
  MIDDLE_VOWEL_START = 4449,
  MIDDLE_VOWEL_END = 4519,
  LAST_CONSONANT_START = 4520,
  LAST_CONSONANT_END = 4546,

  COMPATIBLE_CONSONANT_START = 12593,
  COMPATIBLE_CONSONANT_END = 12622,
  COMPATIBLE_VOWEL_START = 12623,
  COMPATIBLE_VOWEL_END = 12643,
}

// prettier-ignore
const firstConsonantKeyMap = {
  kor: ['ᄀ', 'ᄁ', 'ᄂ', 'ᄃ', 'ᄄ', 'ᄅ', 'ᄆ', 'ᄇ', 'ᄈ', 'ᄉ', 'ᄊ', 'ᄋ', 'ᄌ', 'ᄍ', 'ᄎ', 'ᄏ', 'ᄐ', 'ᄑ', 'ᄒ'],
  eng: ['r', 'R', 's', 'e', 'E', 'f', 'a', 'q', 'Q', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'],
};

// prettier-ignore
const middleVowelKeyMap = {
  kor: ['ᅡ', 'ᅢ', 'ᅣ', 'ᅤ', 'ᅥ', 'ᅦ', 'ᅧ', 'ᅨ', 'ᅩ', 'ᅪ', 'ᅫ', 'ᅬ', 'ᅭ', 'ᅮ', 'ᅯ', 'ᅰ', 'ᅱ', 'ᅲ', 'ᅳ', 'ᅴ', 'ᅵ'],
  eng: ['k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'],
};

// prettier-ignore
const lastConsonantKeyMap = {
  kor: ['ᆨ', 'ᆩ', 'ᆪ', 'ᆫ', 'ᆬ', 'ᆭ', 'ᆮ', 'ᆯ', 'ᆰ', 'ᆱ', 'ᆲ', 'ᆳ', 'ᆴ', 'ᆵ', 'ᆶ', 'ᆷ', 'ᆸ', 'ᆹ', 'ᆺ', 'ᆻ', 'ᆼ', 'ᆽ', 'ᆾ', 'ᆿ', 'ᇀ', 'ᇁ', 'ᇂ'],
  eng: ['r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'qt', 't', 'T', 'd', 'w', 'c', 'z', 'x', 'v', 'g'],
};

// prettier-ignore
const compatibleConsonantKeyMap = {
  kor: ['ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
  eng: ['r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'E', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'Q', 'qt', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'],
};

// prettier-ignore
const compatibleVowelKeyMap = {
  kor: ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
  eng: ['k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'],
};
