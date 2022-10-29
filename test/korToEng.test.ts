import { korToEng } from '../index';

describe('Kor typing to english test', () => {
  test('ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ -> rsefaqtdwczxvg', () => {
    expect(korToEng('ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ')).toBe('rsefaqtdwczxvg');
  });

  test('ㄲㄴㄸㄹㅁㅃㅆㅇㅉㅊㅋㅌㅍㅎ -> RSEFaQTdWczxvg', () => {
    expect(korToEng('ㄲㄴㄸㄹㅁㅃㅆㅇㅉㅊㅋㅌㅍㅎ')).toBe('RsEfaQTdWczxvg');
  });

  test('1234567890-=!@#$%^&*()_+ -> 1234567890-=!@#$%^&*()_+', () => {
    expect(korToEng('1234567890-=!@#$%^&*()_+')).toBe('1234567890-=!@#$%^&*()_+');
  });

  test('에어팟 -> dpdjvkt', () => {
    expect(korToEng('에어팟')).toBe('dpdjvkt');
  });

  test('깐부 친구 -> Rksqn clsrn', () => {
    expect(korToEng('깐부 친구')).toBe('Rksqn clsrn');
  });

  test('ㅡ묘 ㅑ ㅁ나 ㅛㅐㅕ ㅁ 볃ㄴ샤ㅐㅜ, 솓 략ㄴㅅ ㅐㅜㄷ? -> may i ask you a question, the first one?', () => {
    expect(korToEng('ㅡ묘 ㅑ ㅁ나 ㅛㅐㅕ ㅁ 볃ㄴ샤ㅐㅜ, 솓 략ㄴㅅ ㅐㅜㄷ?')).toBe('may i ask you a question, the first one?');
  });

  test('ㅑ 채ㅕㅣㅇ ㅕㄴㄷ ㅡㅛ ㅑㅡㅁ햐ㅜㅁ샤ㅐㅜ ㅡㅐㄱㄷ. -> i could use my imagination more.', () => {
    expect(korToEng('ㅑ 채ㅕㅣㅇ ㅕㄴㄷ ㅡㅛ ㅑㅡㅁ햐ㅜㅁ샤ㅐㅜ ㅡㅐㄱㄷ.')).toBe('i could use my imagination more.');
  });
});
