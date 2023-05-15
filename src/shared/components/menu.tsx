import { ProjectType } from "../../project/domain/project";

export const Menu = ({
  projects,
  visibleProject,
  setVisibleProject,
}: {
  projects: ProjectType[] | [];
  visibleProject: undefined | ProjectType;
  setVisibleProject: (project: ProjectType) => void;
}) => (
  <div style={{ backgroundColor: "grey", maxWidth: 400, padding: 20 }}>
    <h2>Projects</h2>
    {projects && (
      <ul>
        {projects.map((project) => (
          <li
            style={{
              cursor: "pointer",
              textDecoration: visibleProject === project ? "underline" : "none",
            }}
            onClick={() => setVisibleProject(project)}
            key={project.id}
          >
            {project.name}
          </li>
        ))}
      </ul>
    )}
  </div>
);
