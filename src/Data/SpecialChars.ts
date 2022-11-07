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
    id: 100,
    content: "🥺",
    title: "ぴえん",
    description: "JK大好き、ぴえんの絵文字です。",
    category: [SpecialCharType.emoji],
  },
];

export { specialCharList, SpecialCharType, specialCharStruct };
