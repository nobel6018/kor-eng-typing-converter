"use strict";
String.prototype.substituteVowels = function () {
    return this.replaceAll(/hk|ho|hl|nj|np|nl|ml/gi, function (s) { return vowelDict[s.toLowerCase()]; })
        .replaceAll(/[OP]/g, function (s) { return vowelDict[s]; })
        .replaceAll(/[a-zA-Z]/g, function (s) { return (vowelDict[s.toLowerCase()] ? vowelDict[s.toLowerCase()] : s); });
};
String.prototype.substituteFirstConsonants = function () {
    return this.replaceAll(/([REQTW])([ㅏ-ㅣ])/g, function (s, g1, g2) {
        return firstConsonantDict[g1] + g2;
    }).replaceAll(/([a-zA-Z])([ㅏ-ㅣ])/gi, function (s, g1, g2) {
        return firstConsonantDict[g1.toLowerCase()] + g2;
    });
};
String.prototype.substituteLastConsonants = function () {
    return this.replaceAll(/([ㅏ-ㅣ])([RT])([^ㅏ-ㅣ]|$)/g, function (s, g1, g2, g3) {
        return g1 + lastConsonantDict[g2] + g3;
    })
        .replaceAll(/([ㅏ-ㅣ])(rt|sw|sg|fr|fa|fq|ft|fx|fv|fg|qt)([^ㅏ-ㅣ]|$)/gi, function (s, g1, g2, g3) {
        return g1 + lastConsonantDict[g2.toLowerCase()] + g3;
    })
        .replaceAll(/([ㅏ-ㅣ])([a-zA-Z])([^ㅏ-ㅣ]|$)/gi, function (s, g1, g2, g3) {
        return g1 + lastConsonantDict[g2.toLowerCase()] + g3;
    });
};
String.prototype.substituteTheLeftConsonants = function () {
    return this.replaceAll(/[REQTW]/g, function (s) { return compatibleConsonantDict[s]; }).replaceAll(/([a-zA-Z])/gi, function (s, g1) {
        return firstConsonantDict[g1.toLowerCase()];
    });
};
function substituteVowels(text) {
    return text
        .replaceAll(/hk|ho|hl|nj|np|nl|ml/gi, function (s) { return vowelDict[s.toLowerCase()]; })
        .replaceAll(/[OP]/g, function (s) { return vowelDict[s]; })
        .replaceAll(/[a-zA-Z]/g, function (s) { return (vowelDict[s.toLowerCase()] ? vowelDict[s.toLowerCase()] : s); });
}
function substituteFirstConsonants(text) {
    return text
        .replaceAll(/([REQTW])([ㅏ-ㅣ])/g, function (s, g1, g2) {
        return firstConsonantDict[g1] + g2;
    })
        .replaceAll(/([a-zA-Z])([ㅏ-ㅣ])/gi, function (s, g1, g2) {
        return firstConsonantDict[g1.toLowerCase()] + g2;
    });
}
function substituteLastConsonants(text) {
    return text
        .replaceAll(/([ㅏ-ㅣ])([RT])([^ㅏ-ㅣ]|$)/g, function (s, g1, g2, g3) {
        return g1 + lastConsonantDict[g2] + g3;
    })
        .replaceAll(/([ㅏ-ㅣ])(rt|sw|sg|fr|fa|fq|ft|fx|fv|fg|qt)([^ㅏ-ㅣ]|$)/gi, function (s, g1, g2, g3) {
        return g1 + lastConsonantDict[g2.toLowerCase()] + g3;
    })
        .replaceAll(/([ㅏ-ㅣ])([a-zA-Z])([^ㅏ-ㅣ]|$)/gi, function (s, g1, g2, g3) {
        return g1 + lastConsonantDict[g2.toLowerCase()] + g3;
    });
}
function substituteTheLeftConsonants(text) {
    return text
        .replaceAll(/[REQTW]/g, function (s) { return compatibleConsonantDict[s]; })
        .replaceAll(/([a-zA-Z])/gi, function (s, g1) {
        return firstConsonantDict[g1.toLowerCase()];
    });
}
// prettier-ignore
var vowelDict = {
    hk: 'ㅘ', ho: 'ㅙ', hl: 'ㅚ', nj: 'ㅝ', np: 'ㅞ', nl: 'ㅟ', ml: 'ㅢ', k: 'ㅏ', o: 'ㅐ', i: 'ㅑ', O: 'ㅒ', j: 'ㅓ', p: 'ㅔ', u: 'ㅕ', P: 'ㅖ', h: 'ㅗ', y: 'ㅛ', n: 'ㅜ', b: 'ㅠ', m: 'ㅡ', l: 'ㅣ'
};
// prettier-ignore
var firstConsonantDict = {
    r: 'ㄱ', R: 'ㄲ', s: 'ㄴ', e: 'ㄷ', E: 'ㄸ', f: 'ㄹ', a: 'ㅁ', q: 'ㅂ', Q: 'ㅃ', t: 'ㅅ', T: 'ㅆ', d: 'ㅇ', w: 'ㅈ', W: 'ㅉ', c: 'ㅊ', z: 'ㅋ', x: 'ㅌ', v: 'ㅍ', g: 'ㅎ'
};
// prettier-ignore
var lastConsonantDict = {
    R: 'ᆩ', T: 'ᆻ', rt: 'ᆪ', sw: 'ᆬ', sg: 'ᆭ', fr: 'ᆰ', fa: 'ᆱ', fq: 'ᆲ', ft: 'ᆳ', fx: 'ᆴ', fv: 'ᆵ', fg: 'ᆶ', qt: 'ᆹ', r: 'ᆨ', s: 'ᆫ', e: 'ᆮ', f: 'ᆯ', a: 'ᆷ', q: 'ᆸ', t: 'ᆺ', d: 'ᆼ', w: 'ᆽ', c: 'ᆾ', z: 'ᆿ', x: 'ᇀ', v: 'ᇁ', g: 'ᇂ'
};
// prettier-ignore
var compatibleConsonantDict = {
    r: 'ㄱ', R: 'ㄲ', rt: 'ㄳ', s: 'ㄴ', sw: 'ㄵ', sg: 'ㄶ', e: 'ㄷ', E: 'ㄸ', f: 'ㄹ', fr: 'ㄺ', fa: 'ㄻ', fq: 'ㄼ', ft: 'ㄽ', fx: 'ㄾ', fv: 'ㄿ', fg: 'ㅀ', a: 'ㅁ', q: 'ㅂ', Q: 'ㅃ', qt: 'ㅄ', t: 'ㅅ', T: 'ㅆ', d: 'ㅇ', w: 'ㅈ', W: 'ㅉ', c: 'ㅊ', z: 'ㅋ', x: 'ㅌ', v: 'ㅍ', g: 'ㅎ'
};
