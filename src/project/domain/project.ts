import { SectionType } from "../../section/domain/section";

export type ProjectType = {
  id: number;
  name: string;
  sections: SectionType[];
};
