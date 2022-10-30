import { engToKor } from '../src';

describe('Kor typing to english test', () => {
  test('combination(dpdjvkt) -> 에어팟', () => {
    expect(engToKor('dpdjvkt')).toBe('에어팟');
    expect(engToKor('dpdjvKt')).toBe('에어팟');
    expect(engToKor('dpdjVKt')).toBe('에어팟');
    expect(engToKor('dpdJVKt')).toBe('에어팟');
    expect(engToKor('dpDJVKt')).toBe('에어팟');
    expect(engToKor('DpDJVKt')).toBe('에어팟');
  });

  test('combination(TkdTkdqk) -> 쌍쌍바', () => {
    expect(engToKor('TkdTkdqk')).toBe('쌍쌍바');
    expect(engToKor('TkdTkdqK')).toBe('쌍쌍바');
    expect(engToKor('TkdTkDqK')).toBe('쌍쌍바');
    expect(engToKor('TkdTKDqK')).toBe('쌍쌍바');
    expect(engToKor('TkDTKDqK')).toBe('쌍쌍바');
    expect(engToKor('TKDTKDqK')).toBe('쌍쌍바');
  });

  test('combination(qhkwnj) -> 봐줘', () => {
    expect(engToKor('qhkwnj')).toBe('봐줘');
    expect(engToKor('qhKwnj')).toBe('봐줘');
    expect(engToKor('qHKwnj')).toBe('봐줘');
    expect(engToKor('qHKwNj')).toBe('봐줘');
    expect(engToKor('qHKwNJ')).toBe('봐줘');
  });

  test('combination(do) -> 애', () => {
    expect(engToKor('do')).toBe('애');
    expect(engToKor('Do')).toBe('애');
  });

  test('combination(dO) -> 얘', () => {
    expect(engToKor('dO')).toBe('얘');
    expect(engToKor('DO')).toBe('얘');
  });

  test('combiantion(djaa) -> 엄ㅁ', () => {
    expect(engToKor('djaa')).toBe('엄ㅁ');
    expect(engToKor('djaA')).toBe('엄ㅁ');
    expect(engToKor('djAA')).toBe('엄ㅁ');
    expect(engToKor('dJAA')).toBe('엄ㅁ');
    expect(engToKor('DJAA')).toBe('엄ㅁ');
  });

  test('combination(clzls) -> 치킨', () => {
    expect(engToKor('clzls')).toBe('치킨');
    expect(engToKor('clzlS')).toBe('치킨');
    expect(engToKor('clzLS')).toBe('치킨');
    expect(engToKor('clZLS')).toBe('치킨');
    expect(engToKor('cLZLS')).toBe('치킨');
    expect(engToKor('CLZLS')).toBe('치킨');
  });

  test('combination(Ekdzhd) -> 땅콩', () => {
    expect(engToKor('Ekdzhd')).toBe('땅콩');
    expect(engToKor('EkdzhD')).toBe('땅콩');
    expect(engToKor('EkdzHD')).toBe('땅콩');
    expect(engToKor('EkdZHD')).toBe('땅콩');
    expect(engToKor('EkDZHD')).toBe('땅콩');
    expect(engToKor('EKDZHD')).toBe('땅콩');
  });

  test('rsefaqtdwczxvgRSEFAQTDWCZXVG -> ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄴㄸㄹㅁㅃㅆㅇㅉㅊㅋㅌㅍㅎ', () => {
    expect(engToKor('rsefaqtdwczxvgRSEFAQTDWCZXVG')).toBe('ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄴㄸㄹㅁㅃㅆㅇㅉㅊㅋㅌㅍㅎ');
  });

  test('hkhohlnjnpnlmlkoiOjpuPhynbm l -> ㅘㅙㅚㅝㅞㅟㅢㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡ ㅣ', () => {
    expect(engToKor('hkhohlnjnpnlmlkoiOjpuPhynbm l')).toBe('ㅘㅙㅚㅝㅞㅟㅢㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡ ㅣ');
  });

  test('1234567890-=!@#$%^&*()_+ -> 1234567890-=!@#$%^&*()_+', () => {
    expect(engToKor('1234567890-=!@#$%^&*()_+')).toBe('1234567890-=!@#$%^&*()_+');
  });

  test('llaa -> ㅣㅣㅁㅁ', () => {
    expect(engToKor('llaa')).toBe('ㅣㅣㅁㅁ');
  });

  test('lalaa -> ㅣ밈ㅁ', () => {
    expect(engToKor('lalaa')).toBe('ㅣ밈ㅁ');
  });

  test('combination(dlinslsaf) -> 이ㅑ닌ㅁㄹ', () => {
    expect(engToKor('dlinslsaf')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dlinslsaF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dlinslsAF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dlinslSAF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dlinsLSAF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dlinSLSAF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dliNSLSAF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dlINSLSAF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('dLINSLSAF')).toBe('이ㅑㅜ닌ㅁㄹ');
    expect(engToKor('DLINSLSAF')).toBe('이ㅑㅜ닌ㅁㄹ');
  });
});
