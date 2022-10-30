export declare function isKorean(unicode: number): boolean;
export declare function getKoreaAlphabetType(unicode: number): KoreaAlphabetType;
export declare const enum KoreaAlphabetType {
    FIRST_CONSONANT_LETTER = "\uCD08\uC131",
    MIDDLE_VOWEL_LETTER = "\uC911\uC131",
    LAST_CONSONANT_LETTER = "\uC885\uC131",
    COMPATIBLE_CONSONANT_LETTER = "\uD638\uD658\uC790\uC74C",
    COMPATIBLE_VOWEL_LETTER = "\uD638\uD658\uBAA8\uC74C"
}
export declare const enum KoreanUnicode {
    FIRST_CONSONANT_START = 4352,
    FIRST_CONSONANT_END = 4448,
    MIDDLE_VOWEL_START = 4449,
    MIDDLE_VOWEL_END = 4519,
    LAST_CONSONANT_START = 4520,
    LAST_CONSONANT_END = 4546,
    COMPATIBLE_CONSONANT_START = 12593,
    COMPATIBLE_CONSONANT_END = 12622,
    COMPATIBLE_VOWEL_START = 12623,
    COMPATIBLE_VOWEL_END = 12643
}
