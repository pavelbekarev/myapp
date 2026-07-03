import "../style.scss"
import ProjectCard from "#features/ProjectCard";
import { useProjects } from "../model/useProjects";
import Spinner from "#shared/ui/Spinner";

export function ProjectFactory() {
    const { projects, loading } = useProjects();

    return (
        <div className="projectFactory" id="projectFactory">
            {
                loading ? 
                <Spinner /> :
                projects.map((item) => (
                    <ProjectCard key={item.id} data={item} />
                ))
            }
        </div>
    )
}
