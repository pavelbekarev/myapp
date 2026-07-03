import { dataArr, type Project } from "#entities/Project";

export async function loadProjects(): Promise<Project[]> {
  // TODO: поменять на api.get("/projects"), когда появится endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataArr);
    }, 700);
  });
}
