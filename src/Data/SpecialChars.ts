type specialCharStruct = {
  id: number;
  content: string;
  title: string;
  description: string;
  category: SpecialCharType[];
};

enum SpecialCharType {
  space_like,
  emoji,
  symbol,
}

const specialCharList: specialCharStruct[] = [
  {
    id: 0,
    content: " ",
    title: "半角スペース",
    description: "The スペースです。",
    category: [SpecialCharType.space_like],
  },
  {
    id: 1,
    content: "　",
    title: "全角スペース",
    description: "日本語文字と同じサイズのスペースです。",
    category: [SpecialCharType.space_like],
  },
  {
    id: 2,
    content: "	",
    title: "水平タブ",
    description: "カーソル位置や文字位置を制御するための文字です。",
    category: [SpecialCharType.space_like],
  },
  {
    id: 3,
    content: "\r",
    title: "改行文字 (CR)",
    description: "主にMacOSで用いられる改行文字です。",
    category: [SpecialCharType.space_like],
  },
  {
    id: 4,
    content: "\n",
    title: "改行文字 (LF)",
    description: "主にLinux系OSで用いられる改行文字です。",
    category: [SpecialCharType.space_like],
  },
  {
    id: 5,
    content: "\r\n",
    title: "改行文字 (CRLF)",
    description: "主にWindowsで用いられる改行文字です。",
    category: [SpecialCharType.space_like],
  },
  {
    id: 100,
    content: "🥺",
    title: "ぴえん",
    description: "JK大好き、ぴえんの絵文字です。",
    category: [SpecialCharType.emoji],
  },
  {
    id: 101,
    content: "🤥",
    title: "ぱおん",
    description: "JK大好き、ぱおんの絵文字です。",
    category: [SpecialCharType.emoji],
  },
  {
    id: 102,
    content: "😭",
    title: "びえん",
    description: "JK大好き、びえんの絵文字です。",
    category: [SpecialCharType.emoji],
  },
  {
    id: 103,
    content: "😢",
    title: "泣き",
    description: "泣きの絵文字です。",
    category: [SpecialCharType.emoji],
  },
  {
    id: 104,
    content: "💦",
    title: "汗、やべっ",
    description: "やべっの絵文字です。",
    category: [SpecialCharType.emoji],
  },
  {
    id: 105,
    content: "🙏",
    title: "お願い",
    description: "お願いの絵文字です。",
    category: [SpecialCharType.emoji],
  },
  {
    id: 200,
    content: "α",
    title: "アルファ",
    description: "アルファ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 201,
    content: "β",
    title: "ベータ",
    description: "ベータ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 202,
    content: "γ",
    title: "ガンマ",
    description: "ガンマ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 203,
    content: "δ",
    title: "デルタ",
    description: "デルタ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 204,
    content: "ε",
    title: "イプシロン",
    description: "イプシロン (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 205,
    content: "λ",
    title: "ラムダ",
    description: "ラムダ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 206,
    content: "π",
    title: "パイ",
    description: "パイ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 207,
    content: "σ",
    title: "シグマ",
    description: "シグマ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
  {
    id: 208,
    content: "ω",
    title: "オメガ",
    description: "オメガ (ギリシア文字)",
    category: [SpecialCharType.symbol],
  },
];

export { specialCharList, SpecialCharType, specialCharStruct };
