"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function korToEng(text) {
    var korToEngConverter = new KorToEngConverter();
    return korToEngConverter.convertKorStringToEng(text);
}
exports.default = korToEng;
var KorToEngConverter = /** @class */ (function () {
    function KorToEngConverter() {
    }
    KorToEngConverter.prototype.convertKorStringToEng = function (text) {
        var _this = this;
        return text.normalize('NFD').replaceAll(/[ᄀ-ᇂㄱ-ㅣ]/g, function (s) { return _this.convertKorCharToEng(s); });
    };
    KorToEngConverter.prototype.convertKorCharToEng = function (char) {
        var unicode = char.charCodeAt(0);
        var koreaAlphabetType = this.getKoreaAlphabetType(unicode);
        switch (koreaAlphabetType) {
            case "\uCD08\uC131" /* KoreaAlphabetType.FIRST_CONSONANT_LETTER */:
                return firstConsonantKeyMap.eng[unicode - 4352 /* KoreanUnicode.FIRST_CONSONANT_START */];
            case "\uC911\uC131" /* KoreaAlphabetType.MIDDLE_VOWEL_LETTER */:
                return middleVowelKeyMap.eng[unicode - 4449 /* KoreanUnicode.MIDDLE_VOWEL_START */];
            case "\uC885\uC131" /* KoreaAlphabetType.LAST_CONSONANT_LETTER */:
                return lastConsonantKeyMap.eng[unicode - 4520 /* KoreanUnicode.LAST_CONSONANT_START */];
            case "\uD638\uD658\uC790\uC74C" /* KoreaAlphabetType.COMPATIBLE_CONSONANT_LETTER */:
                return compatibleConsonantKeyMap.eng[unicode - 12593 /* KoreanUnicode.COMPATIBLE_CONSONANT_START */];
            case "\uD638\uD658\uBAA8\uC74C" /* KoreaAlphabetType.COMPATIBLE_VOWEL_LETTER */:
                return compatibleVowelKeyMap.eng[unicode - 12623 /* KoreanUnicode.COMPATIBLE_VOWEL_START */];
        }
    };
    KorToEngConverter.prototype.getKoreaAlphabetType = function (unicode) {
        if (unicode >= 4352 /* KoreanUnicode.FIRST_CONSONANT_START */ && unicode <= 4448 /* KoreanUnicode.FIRST_CONSONANT_END */) {
            return "\uCD08\uC131" /* KoreaAlphabetType.FIRST_CONSONANT_LETTER */;
        }
        else if (unicode >= 4449 /* KoreanUnicode.MIDDLE_VOWEL_START */ && unicode <= 4519 /* KoreanUnicode.MIDDLE_VOWEL_END */) {
            return "\uC911\uC131" /* KoreaAlphabetType.MIDDLE_VOWEL_LETTER */;
        }
        else if (unicode >= 4520 /* KoreanUnicode.LAST_CONSONANT_START */ && unicode <= 4546 /* KoreanUnicode.LAST_CONSONANT_END */) {
            return "\uC885\uC131" /* KoreaAlphabetType.LAST_CONSONANT_LETTER */;
        }
        else if (unicode >= 12593 /* KoreanUnicode.COMPATIBLE_CONSONANT_START */ &&
            unicode <= 12622 /* KoreanUnicode.COMPATIBLE_CONSONANT_END */) {
            return "\uD638\uD658\uC790\uC74C" /* KoreaAlphabetType.COMPATIBLE_CONSONANT_LETTER */;
        }
        else if (unicode >= 12623 /* KoreanUnicode.COMPATIBLE_VOWEL_START */ && unicode <= 12643 /* KoreanUnicode.COMPATIBLE_VOWEL_END */) {
            return "\uD638\uD658\uBAA8\uC74C" /* KoreaAlphabetType.COMPATIBLE_VOWEL_LETTER */;
        }
        else {
            throw Error('It is not korea alphabet. Korean alphabet unicode is between 0x1100 and 0x11c2');
        }
    };
    return KorToEngConverter;
}());
// prettier-ignore
var firstConsonantKeyMap = {
    kor: ['ᄀ', 'ᄁ', 'ᄂ', 'ᄃ', 'ᄄ', 'ᄅ', 'ᄆ', 'ᄇ', 'ᄈ', 'ᄉ', 'ᄊ', 'ᄋ', 'ᄌ', 'ᄍ', 'ᄎ', 'ᄏ', 'ᄐ', 'ᄑ', 'ᄒ'],
    eng: ['r', 'R', 's', 'e', 'E', 'f', 'a', 'q', 'Q', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'],
};
// prettier-ignore
var middleVowelKeyMap = {
    kor: ['ᅡ', 'ᅢ', 'ᅣ', 'ᅤ', 'ᅥ', 'ᅦ', 'ᅧ', 'ᅨ', 'ᅩ', 'ᅪ', 'ᅫ', 'ᅬ', 'ᅭ', 'ᅮ', 'ᅯ', 'ᅰ', 'ᅱ', 'ᅲ', 'ᅳ', 'ᅴ', 'ᅵ'],
    eng: ['k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'],
};
// prettier-ignore
var lastConsonantKeyMap = {
    kor: ['ᆨ', 'ᆩ', 'ᆪ', 'ᆫ', 'ᆬ', 'ᆭ', 'ᆮ', 'ᆯ', 'ᆰ', 'ᆱ', 'ᆲ', 'ᆳ', 'ᆴ', 'ᆵ', 'ᆶ', 'ᆷ', 'ᆸ', 'ᆹ', 'ᆺ', 'ᆻ', 'ᆼ', 'ᆽ', 'ᆾ', 'ᆿ', 'ᇀ', 'ᇁ', 'ᇂ'],
    eng: ['r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'qt', 't', 'T', 'd', 'w', 'c', 'z', 'x', 'v', 'g'],
};
// prettier-ignore
var compatibleConsonantKeyMap = {
    kor: ['ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
    eng: ['r', 'R', 'rt', 's', 'sw', 'sg', 'e', 'E', 'f', 'fr', 'fa', 'fq', 'ft', 'fx', 'fv', 'fg', 'a', 'q', 'Q', 'qt', 't', 'T', 'd', 'w', 'W', 'c', 'z', 'x', 'v', 'g'],
};
// prettier-ignore
var compatibleVowelKeyMap = {
    kor: ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
    eng: ['k', 'o', 'i', 'O', 'j', 'p', 'u', 'P', 'h', 'hk', 'ho', 'hl', 'y', 'n', 'nj', 'np', 'nl', 'b', 'm', 'ml', 'l'],
};
