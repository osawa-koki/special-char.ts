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
    title: "Space",
    description: "A space character",
    category: [SpecialCharType.space_like],
  },
];

export { specialCharList, SpecialCharType, specialCharStruct };
