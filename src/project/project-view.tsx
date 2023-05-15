import { SectionItemType } from "../section-item/domain/section-item";
import { Section } from "../section/components/section";
import { getProject } from "./actions/get-project";
import { ProjectType } from "./domain/project";

export const ProjectView = ({ project }: { project: ProjectType }) => {
  const { name, sections } = project;

  const handleAddItem = ({
    sectionId,
    item,
  }: {
    sectionId: number;
    item: string;
  }) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      section.items.push({ id: section.items.length + 1, label: item });
    }
  };

  return !name ? (
    <p>No project found</p>
  ) : (
    <div style={{ padding: 20 }}>
      <h1>{name}</h1>

      {sections.map((section) => (
        <Section section={section} addItem={handleAddItem} />
      ))}
    </div>
  );
};
