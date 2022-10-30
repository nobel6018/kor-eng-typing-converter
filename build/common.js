"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKoreaAlphabetType = exports.isKorean = void 0;
function isKorean(unicode) {
    return ((unicode >= 4352 /* KoreanUnicode.FIRST_CONSONANT_START */ && unicode <= 4546 /* KoreanUnicode.LAST_CONSONANT_END */) ||
        (unicode >= 12593 /* KoreanUnicode.COMPATIBLE_CONSONANT_START */ && unicode <= 12643 /* KoreanUnicode.COMPATIBLE_VOWEL_END */));
}
exports.isKorean = isKorean;
function getKoreaAlphabetType(unicode) {
    if (unicode >= 4352 /* KoreanUnicode.FIRST_CONSONANT_START */ && unicode <= 4448 /* KoreanUnicode.FIRST_CONSONANT_END */) {
        return "\uCD08\uC131" /* KoreaAlphabetType.FIRST_CONSONANT_LETTER */;
    }
    else if (unicode >= 4449 /* KoreanUnicode.MIDDLE_VOWEL_START */ && unicode <= 4519 /* KoreanUnicode.MIDDLE_VOWEL_END */) {
        return "\uC911\uC131" /* KoreaAlphabetType.MIDDLE_VOWEL_LETTER */;
    }
    else if (unicode >= 4520 /* KoreanUnicode.LAST_CONSONANT_START */ && unicode <= 4546 /* KoreanUnicode.LAST_CONSONANT_END */) {
        return "\uC885\uC131" /* KoreaAlphabetType.LAST_CONSONANT_LETTER */;
    }
    else if (unicode >= 12593 /* KoreanUnicode.COMPATIBLE_CONSONANT_START */ && unicode <= 12622 /* KoreanUnicode.COMPATIBLE_CONSONANT_END */) {
        return "\uD638\uD658\uC790\uC74C" /* KoreaAlphabetType.COMPATIBLE_CONSONANT_LETTER */;
    }
    else if (unicode >= 12623 /* KoreanUnicode.COMPATIBLE_VOWEL_START */ && unicode <= 12643 /* KoreanUnicode.COMPATIBLE_VOWEL_END */) {
        return "\uD638\uD658\uBAA8\uC74C" /* KoreaAlphabetType.COMPATIBLE_VOWEL_LETTER */;
    }
    else {
        throw Error('It is not korea alphabet. Korean alphabet unicode is between 0x1100 and 0x11c2');
    }
}
exports.getKoreaAlphabetType = getKoreaAlphabetType;
