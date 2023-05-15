import { mockProjectsData } from "./mock";

export const getProjects = async () => {
  const response = await Promise.resolve({ data: mockProjectsData });

  // use something like Zod to check schema
  return response;
};
