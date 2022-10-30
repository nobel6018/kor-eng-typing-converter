"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var keyMaps_1 = require("../keyMaps");
function korToEng(text) {
    var result = '';
    var normalized = text.normalize('NFD');
    for (var _i = 0, normalized_1 = normalized; _i < normalized_1.length; _i++) {
        var char = normalized_1[_i];
        var unicode = char.charCodeAt(0);
        if ((0, common_1.isKorean)(unicode)) {
            result += convertKoreaAlphabetToEnglishAlphabet(unicode);
        }
        else {
            result += char;
        }
    }
    return result;
}
exports.default = korToEng;
function convertKoreaAlphabetToEnglishAlphabet(unicode) {
    var koreaAlphabetType = (0, common_1.getKoreaAlphabetType)(unicode);
    switch (koreaAlphabetType) {
        case "\uCD08\uC131" /* KoreaAlphabetType.FIRST_CONSONANT_LETTER */:
            return keyMaps_1.firstConsonantKeyMap.eng[unicode - 4352 /* KoreanUnicode.FIRST_CONSONANT_START */];
        case "\uC911\uC131" /* KoreaAlphabetType.MIDDLE_VOWEL_LETTER */:
            return keyMaps_1.middleVowelKeyMap.eng[unicode - 4449 /* KoreanUnicode.MIDDLE_VOWEL_START */];
        case "\uC885\uC131" /* KoreaAlphabetType.LAST_CONSONANT_LETTER */:
            return keyMaps_1.lastConsonantKeyMap.eng[unicode - 4520 /* KoreanUnicode.LAST_CONSONANT_START */];
        case "\uD638\uD658\uC790\uC74C" /* KoreaAlphabetType.COMPATIBLE_CONSONANT_LETTER */:
            return keyMaps_1.compatibleConsonantKeyMap.eng[unicode - 12593 /* KoreanUnicode.COMPATIBLE_CONSONANT_START */];
        case "\uD638\uD658\uBAA8\uC74C" /* KoreaAlphabetType.COMPATIBLE_VOWEL_LETTER */:
            return keyMaps_1.compatibleVowelKeyMap.eng[unicode - 12623 /* KoreanUnicode.COMPATIBLE_VOWEL_START */];
    }
}
