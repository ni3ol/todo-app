import { useState } from "react";
import { SectionItem } from "../../section-item/components/section-item";
import { SectionItemType } from "../../section-item/domain/section-item";
import { SectionType } from "../domain/section";

export const Section = ({
  section,
  addItem,
}: {
  section: SectionType;
  addItem: ({ sectionId, item }: { sectionId: number; item: string }) => void;
}) => {
  const { name, items, id } = section;
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState<string | undefined>();
  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
        {name}
        {items.length}
      </div>

      {items ? (
        <>
          <ul>
            {items.map((item, index) => (
              <SectionItem label={item.label} id={item.id} />
            ))}
            {isEditing && (
              <div>
                <input
                  type="text"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value as string)}
                />
                <button
                  disabled={newItem === undefined}
                  onClick={() => {
                    if (!newItem) return;
                    addItem({ sectionId: id, item: newItem });
                    setIsEditing(false);
                    setNewItem(undefined);
                  }}
                >
                  Save
                </button>
              </div>
            )}
          </ul>
          <button onClick={() => setIsEditing(true)}>+ Add task</button>
        </>
      ) : (
        <p>No items</p>
      )}
    </div>
  );
};
