export default function engToKor(text: string) {
  const engToKorConverter = new EngToKorConverter();

  return text.replaceAll(/\w+/gi, (s) => engToKorConverter.convertEngStringToKor(s));
}

class EngToKorConverter {
  text: string;

  constructor() {
    this.text = '';
  }

  convertEngStringToKor(text: string) {
    this.text = text;

    this.substituteVowels();
    this.substituteFirstConsonants();
    this.substituteLastConsonants();
    this.text = this.text.normalize('NFKC');
    this.substituteTheLeftVowels();
    this.substituteTheLeftConsonants();

    return this.text;
  }

  private substituteVowels() {
    this.text = this.text
      .replaceAll(
        /([rsefaqtdwczxvg])(hk|ho|hl|nj|np|nl|ml)/gi,
        (s, g1, g2) => g1.toLowerCase() + vowelDict[g2.toLowerCase()],
      )
      .replaceAll(/([rsefaqtdwczxvg])([OP])/gi, (s, g1, g2) => {
        if (g2 === 'O' || g2 === 'P') {
          return g1.toLowerCase() + vowelDict[g2];
        } else {
          return s;
        }
      })
      .replaceAll(/([rsefaqtdwczxvg])([koijpuhynbml])/gi, (s, g1, g2) => g1 + vowelDict[g2.toLowerCase()]);
  }

  private substituteFirstConsonants() {
    this.text = this.text
      .replaceAll(/([REQTW])([ㅏ-ㅣ])/g, (s, g1, g2) => firstConsonantDict[g1] + g2)
      .replaceAll(/([a-zA-Z])([ㅏ-ㅣ])/gi, (s, g1, g2) => firstConsonantDict[g1.toLowerCase()] + g2);
  }

  private substituteLastConsonants() {
    this.text = this.text
      .replaceAll(/([ㅏ-ㅣ])([RT])([^ㅏ-ㅣ]|$)/g, (s, g1, g2, g3) => g1 + lastConsonantDict[g2] + g3)
      .replaceAll(
        /([ㅏ-ㅣ])(rt|sw|sg|fr|fa|fq|ft|fx|fv|fg|qt)([^ㅏ-ㅣ]|$)/gi,
        (s, g1, g2, g3) => g1 + lastConsonantDict[g2.toLowerCase()] + g3,
      )
      .replaceAll(
        /([ㅏ-ㅣ])([rsefaqtdwczxvg])([^ㅏ-ㅣ]|$)/gi,
        (s, g1, g2, g3) => g1 + lastConsonantDict[g2.toLowerCase()] + g3,
      );
  }

  private substituteTheLeftConsonants() {
    this.text = this.text
      .replaceAll(/[REQTW]/g, (s) => compatibleConsonantDict[s])
      .replaceAll(/([a-zA-Z])/g, (s) =>
        compatibleConsonantDict[s.toLowerCase()] ? compatibleConsonantDict[s.toLowerCase()] : s,
      );
  }

  private substituteTheLeftVowels() {
    this.text = this.text
      .replaceAll(/hk|ho|hl|nj|np|nl|ml/gi, (s) => vowelDict[s.toLowerCase()])
      .replaceAll(/[OP]/g, (s) => vowelDict[s])
      .replaceAll(/[a-zA-Z]/g, (s) => (vowelDict[s.toLowerCase()] ? vowelDict[s.toLowerCase()] : s));
  }
}

interface Dictionary {
  [key: string]: string;
}

// prettier-ignore
const vowelDict: Dictionary = {
  hk: 'ㅘ', ho: 'ㅙ', hl: 'ㅚ', nj: 'ㅝ', np: 'ㅞ', nl: 'ㅟ', ml: 'ㅢ', k: 'ㅏ', o: 'ㅐ', i: 'ㅑ', O: 'ㅒ', j: 'ㅓ', p: 'ㅔ', u: 'ㅕ', P: 'ㅖ', h: 'ㅗ', y: 'ㅛ', n: 'ㅜ', b: 'ㅠ', m: 'ㅡ', l: 'ㅣ'
};

// prettier-ignore
const firstConsonantDict: Dictionary = {
  r: 'ㄱ', R: 'ㄲ', s: 'ㄴ', e: 'ㄷ', E: 'ㄸ', f: 'ㄹ', a: 'ㅁ', q: 'ㅂ', Q: 'ㅃ', t: 'ㅅ', T: 'ㅆ', d: 'ㅇ', w: 'ㅈ', W: 'ㅉ', c: 'ㅊ', z: 'ㅋ', x: 'ㅌ', v: 'ㅍ', g: 'ㅎ'
};

// prettier-ignore
const lastConsonantDict: Dictionary = {
  R: 'ᆩ', T: 'ᆻ', rt: 'ᆪ', sw: 'ᆬ', sg: 'ᆭ', fr: 'ᆰ', fa: 'ᆱ', fq: 'ᆲ', ft: 'ᆳ', fx: 'ᆴ', fv: 'ᆵ', fg: 'ᆶ', qt: 'ᆹ', r: 'ᆨ', s: 'ᆫ', e: 'ᆮ', f: 'ᆯ', a: 'ᆷ', q: 'ᆸ', t: 'ᆺ', d: 'ᆼ', w: 'ᆽ', c: 'ᆾ', z: 'ᆿ', x: 'ᇀ', v: 'ᇁ', g: 'ᇂ'
};

// prettier-ignore
const compatibleConsonantDict: Dictionary = {
  r: 'ㄱ',  R: 'ㄲ',  rt: 'ㄳ',  s: 'ㄴ',  sw: 'ㄵ',  sg: 'ㄶ',  e: 'ㄷ',  E: 'ㄸ',  f: 'ㄹ',  fr: 'ㄺ',  fa: 'ㄻ',  fq: 'ㄼ',  ft: 'ㄽ',  fx: 'ㄾ',  fv: 'ㄿ',  fg: 'ㅀ',  a: 'ㅁ',  q: 'ㅂ',  Q: 'ㅃ',  qt: 'ㅄ',  t: 'ㅅ',  T: 'ㅆ',  d: 'ㅇ',  w: 'ㅈ',  W: 'ㅉ',  c: 'ㅊ',  z: 'ㅋ',  x: 'ㅌ',  v: 'ㅍ',  g: 'ㅎ'
};
