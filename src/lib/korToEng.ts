import {
  compatibleConsonantKeyMap,
  compatibleVowelKeyMap,
  firstConsonantKeyMap,
  lastConsonantKeyMap,
  middleVowelKeyMap,
} from '../keyMaps';

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
