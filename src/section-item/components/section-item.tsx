import { SectionItemType } from "../domain/section-item";

export const SectionItem = (props: SectionItemType) => {
  const { label } = props;
  return <li>{label}</li>;
};
