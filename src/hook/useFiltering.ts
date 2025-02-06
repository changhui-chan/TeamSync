import { escapeRegExp } from 'lodash';

interface ConsonantToSyllable {
  [key: string]: number;
}

const useFiltering = (data: string[], value: string) => {
  const hangulFiltering = (ch: string): string => {
    const offset = 44032;
    if (/[가-힣]/.test(ch)) {
      const chCode = ch.charCodeAt(0) - offset;
      if (chCode % 28 > 0) {
        return ch;
      }
      const begin = Math.floor(chCode / 28) * 28 + offset;
      const end = begin + 27;
      return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
    }
    if (/[ㄱ-ㅎ]/.test(ch)) {
      const con2syl: ConsonantToSyllable = {
        ㄱ: '가'.charCodeAt(0),
        ㄲ: '까'.charCodeAt(0),
        ㄴ: '나'.charCodeAt(0),
        ㄷ: '다'.charCodeAt(0),
        ㄸ: '따'.charCodeAt(0),
        ㄹ: '라'.charCodeAt(0),
        ㅁ: '마'.charCodeAt(0),
        ㅂ: '바'.charCodeAt(0),
        ㅃ: '빠'.charCodeAt(0),
        ㅅ: '사'.charCodeAt(0),
      };
      const begin =
        con2syl[ch] || (ch.charCodeAt(0) - 12613) * 588 + con2syl['ㅅ'];
      const end = begin + 587;
      return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
    }
    return escapeRegExp(ch);
  };

  const filterItems = (items: string[], value: string) => {
    const pattern = Array.from(value).map(hangulFiltering).join('');
    const regExp = new RegExp(pattern, 'i');
    return items.filter((item) => regExp.test(item));
  };

  return { filteredData: filterItems(data, value) };
};

export default useFiltering;
