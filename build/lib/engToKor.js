"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../string.extensions");
function engToKor(text) {
    return text
        .substituteVowels()
        .substituteFirstConsonants()
        .substituteLastConsonants()
        .normalize('NFKC')
        .substituteTheLeftConsonants();
}
exports.default = engToKor;
