import { SectionItemType } from "../../section-item/domain/section-item";

export type SectionType = {
  id: number;
  name: string;
  items: SectionItemType[];
};
