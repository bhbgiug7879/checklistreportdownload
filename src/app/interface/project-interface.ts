export interface IPROJECT {
  projectsName: string;
  projectId: number;
  projectHolders: ProjectHolders;
}

export interface ProjectHolders {
  frontendDevloper: string;
  backendDeveloper: string;
  manager: string;
}
