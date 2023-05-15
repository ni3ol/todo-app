import { ProjectType } from "../domain/project";

export const mockProjectData = {
  name: "Very real project",
  sections: [
    {
      name: "Section 1",
      items: [
        { id: 1, label: "My item" },
        { id: 2, label: "My 2nd Item" },
      ],
    },
    {
      name: "Section 2",
      items: [
        { id: 3, label: "My 3rd item" },
        {
          id: 4,
          label: "My children Item",
          children: [{ id: 5, label: "Child 1" }],
        },
      ],
    },
  ],
} as ProjectType;

export const mockProjectsData = [
  mockProjectData,
  {
    name: "Very real project 2",
    sections: [
      {
        name: "Section 21",
        items: [
          { id: 5, label: "My kjitem" },
          { id: 6, label: "My kj2nd Item" },
        ],
      },
      {
        name: "Section kj2",
        items: [
          { id: 7, label: "My kj3rd item" },
          {
            id: 8,
            label: "My childrkjen Item",
            children: [{ id: 9, label: "Chilkjd 1" }],
          },
        ],
      },
    ],
  },
] as ProjectType[];
