import type { Project } from "#entities/Project";
import { useEffect, useState } from "react";
import { loadProjects } from "../api/loadProjects";

export function useProjects() {
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProjects() {
      setLoading(true);

      try {
        const data = await loadProjects();
        setProjects(data);
      } catch {
        setError("Не удалось загрузить проекты");
        alert(error);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  return {
    projects,
    loading,
    error,
  };
}
