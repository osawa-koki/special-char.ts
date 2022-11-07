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
];

export { specialCharList, SpecialCharType, specialCharStruct };
