import { useEffect, useState } from "react";
import { getProject } from "./project/actions/get-project";
import { ProjectType } from "./project/domain/project";
import { ProjectView } from "./project/project-view";
import { getProjects } from "./project/actions/get-projects";
import { Menu } from "./shared/components/menu";

function App() {
  const [projects, setProjects] = useState<[] | ProjectType[]>([]);
  const [visibleProject, setVisibleProject] = useState<
    undefined | ProjectType
  >();

  useEffect(() => {
    const getProjectsData = async () => {
      const response = await getProjects();
      if (response.data) {
        setProjects(response.data);
        setVisibleProject(response.data[0]);
      }
    };
    getProjectsData();
  }, []);

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <Menu
        projects={projects}
        visibleProject={visibleProject}
        setVisibleProject={setVisibleProject}
      />
      {visibleProject ? (
        <ProjectView project={visibleProject} />
      ) : (
        <p>No project</p>
      )}
    </div>
  );
}

export default App;

// sorting, filtering, search
// reduce, hooks
