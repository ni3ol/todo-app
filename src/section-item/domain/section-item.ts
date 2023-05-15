export type Item = {
  label: string;
  id: number;
};

export type SectionItemType = {
  label: string;
  id: number;
  children?: Item[];
};
