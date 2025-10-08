import { environment } from "src/environments/environment"

const assetUrl: string = 'assets/json'

export const URLS = Object({
    // login
    login: `${environment.apiUrl}/UserLogin/Login/UserLogin`,
    createproject: `${environment.apiUrl}/Project/Create/ProjectChecklist`,
    projectList: `${environment.apiUrl}/Project/Get/ProjectList`,
    checklist: `${environment.apiUrl}/Project/Get/GetAllProjects`,
    createuser: `${environment.apiUrl}/UserLogin/Create/User`,
    userlist: `${environment.apiUrl}/UserLogin/Get/Alluser`,
    DeleteUser: `${environment.apiUrl}/UserLogin/Delete/User`,
    projectcreate: `${environment.apiUrl}/UserLogin/Create/Project`,
    updateuser: `${environment.apiUrl}/UserLogin/Update/User`,
    Updatecheck: `${environment.apiUrl}/Project/Update/ProjectChecklist`,
    Updateproject: `${environment.apiUrl}/UserLogin/Update/Project`,
    Deleteproject: `${environment.apiUrl}/UserLogin/Delete/Project`,
    getRolls: `${environment.apiUrl}/Role/GetAllRoles`,
    saveRole: `${environment.apiUrl}/Role/Create`,
    UserRoleassign: `${environment.apiUrl}/Role/UserRoleMaping/Create`,
    GetuserRole: `${environment.apiUrl}/Role/GetAllUserRoles`,
})