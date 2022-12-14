<h1 align="center">
   <b>
        <a href="https://github.com/nobel6018/kor-eng-typing-converter">Kor Eng Typing Converter</a><br>
    </b>
</h1>

![npm](https://img.shields.io/npm/v/kor-eng-typing-converter)
![npm](https://img.shields.io/npm/dt/kor-eng-typing-converter)
![GitHub Repo stars](https://img.shields.io/github/stars/nobel6018/kor-eng-typing-converter)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=kor-eng-typing-converter&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=axios)
![npm bundle size](https://img.shields.io/bundlephobia/min/kor-eng-typing-converter)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/kor-eng-typing-converter)

## Features

- Convert Korean Typing to English Typing
- Convert English Typing to Korean Typing
- Supports modern browsers

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ❌ |

## Installation

Using npm:
```bash
$ npm install kor-eng-typing-converter
```

Using yarn:
```bash
$ yarn add kor-eng-typing-converter
```

## Example
```ts
import { engToKor, korToEng } from 'kor-eng-typing-converter';

engToKor('dkssudgktpdy'); // 안녕하세요
engToKor('skan: smxlskan, wnahrskan, ahrhkskan'); // 나무: 느티나무, 주목나무, 모과나무

korToEng('해ㅐㅇ 새 ㅎㄱㄷㅁㅅㄷ'); // good to greate
korToEng('솓 ㄴ디랴노 ㅎ둗'); // the selfish gene
```
