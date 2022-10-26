interface String {
  substituteVowels(): string;

  substituteFirstConsonants(): string;

  substituteLastConsonants(): string;

  substituteTheLeftConsonants(): string;
}

String.prototype.substituteVowels = function (this: string) {
  return this.replaceAll(/hk|ho|hl|nj|np|nl|ml/gi, (s) => vowelDict[s.toLowerCase()])
    .replaceAll(/[OP]/g, (s) => vowelDict[s])
    .replaceAll(/[a-zA-Z]/g, (s) => (vowelDict[s.toLowerCase()] ? vowelDict[s.toLowerCase()] : s));
};

String.prototype.substituteFirstConsonants = function (this: string) {
  return this.replaceAll(/[REQTW]/g, (s) => firstConsonantDict[s]).replaceAll(/([a-zA-Z])([ㅏ-ㅣ])/gi, (s, g1, g2) => {
    if (g1) {
      return firstConsonantDict[g1.toLowerCase()] + g2;
    } else {
      return s;
    }
  });
};

String.prototype.substituteLastConsonants = function (this: string) {
  return this.replaceAll(/([ㅏ-ㅣ])([RT])([^ㅏ-ㅣ]|$)/g, (s, g1, g2, g3) => {
    if (g2) {
      return g1 + lastConsonantDict[g2] + g3;
    } else {
      return s;
    }
  })
    .replaceAll(/([ㅏ-ㅣ])(rt|sw|sg|fr|fa|fq|ft|fx|fv|fg|qt)([^ㅏ-ㅣ]|$)/gi, (s, g1, g2, g3) => {
      if (g2) {
        return g1 + lastConsonantDict[g2.toLowerCase()] + g3;
      } else {
        return s;
      }
    })
    .replaceAll(/([ㅏ-ㅣ])([a-zA-Z])([^ㅏ-ㅣ]|$)/gi, (s, g1, g2, g3) => {
      if (g2) {
        return g1 + lastConsonantDict[g2.toLowerCase()] + g3;
      } else {
        return s;
      }
    });
};

String.prototype.substituteTheLeftConsonants = function (this: string) {
  return this.replaceAll(/[REQTW]/g, (s) => firstConsonantDict[s]).replaceAll(/([a-zA-Z])/gi, (s, g1) => {
    if (g1) {
      return firstConsonantDict[g1.toLowerCase()];
    } else {
      return s;
    }
  });
};

// prettier-ignore
const vowelDict = {
  hk: 'ㅘ', ho: 'ㅙ', hl: 'ㅚ', nj: 'ㅝ', np: 'ㅞ', nl: 'ㅟ', ml: 'ㅢ', k: 'ㅏ', o: 'ㅐ', i: 'ㅑ', O: 'ㅒ', j: 'ㅓ', p: 'ㅔ', u: 'ㅕ', P: 'ㅖ', h: 'ㅗ', y: 'ㅛ', n: 'ㅜ', b: 'ㅠ', m: 'ㅡ', l: 'ㅣ'
};

// prettier-ignore
const firstConsonantDict = {
  r: 'ㄱ', R: 'ㄲ', s: 'ㄴ', e: 'ㄷ', E: 'ㄸ', f: 'ㄹ', a: 'ㅁ', q: 'ㅂ', Q: 'ㅃ', t: 'ㅅ', T: 'ㅆ', d: 'ㅇ', w: 'ㅈ', W: 'ㅉ', c: 'ㅊ', z: 'ㅋ', x: 'ㅌ', v: 'ㅍ', g: 'ㅎ'
};

// prettier-ignore
const lastConsonantDict = {
  R: 'ᆩ', T: 'ᆻ', rt: 'ᆪ', sw: 'ᆬ', sg: 'ᆭ', fr: 'ᆰ', fa: 'ᆱ', fq: 'ᆲ', ft: 'ᆳ', fx: 'ᆴ', fv: 'ᆵ', fg: 'ᆶ', qt: 'ᆹ', r: 'ᆨ', s: 'ᆫ', e: 'ᆮ', f: 'ᆯ', a: 'ᆷ', q: 'ᆸ', t: 'ᆺ', d: 'ᆼ', w: 'ᆽ', c: 'ᆾ', z: 'ᆿ', x: 'ᇀ', v: 'ᇁ', g: 'ᇂ'
};
