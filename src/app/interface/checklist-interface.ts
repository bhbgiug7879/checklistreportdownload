export interface IWORK {
  workName: string;
  projectId: number;
  projectName: string;
  frontendDeveloperName: string;
  backentDeveloperName: string;
  managerName: string;
  testedBy: string;
  workLists: IWORKLIST[];
  additionalDetails: string;
  date: number;
  id: number
}

export interface IWORKLIST {
  taskName: string;
  verified: boolean;
  tested: boolean;
}