import { mockProjectData } from "./mock";

export const getProject = async (id: number) => {
  const response = await Promise.resolve({ data: mockProjectData });

  // use something like Zod to check schema
  return response;
};
