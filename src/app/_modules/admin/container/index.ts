import { IMENU } from "src/app/interface/sidenav-interface";

export const MENU: IMENU[] = [
    {
        screen_name: 'Dashboard',
        path: '/admin/dashboard',
        icon: 'assets/icons/dashboard.png',
        isShow: true
    },

    {
        screen_name: 'User',
        path: '',
        icon: 'assets/icons/user.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'User Create',
                path: '/admin/user_create/create',
                icon: 'assets/icons/add-user.png',
                isShow: true,
            },
            {
                screen_name: 'User List',
                path: '/admin/user_create/list',
                icon: 'assets/icons/user-list.png',
                isShow: true
            }
        ]
    },
    {
        screen_name: 'Project',
        path: '',
        icon: 'assets/icons/project.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Project Create',
                path: '/admin/project_create/create',
                icon: 'assets/icons/projectcreate.png',
                isShow: true,
            },
            {
                screen_name: 'Project List',
                path: '/admin/project_create/list',
                icon: 'assets/icons/projectlist.png',
                isShow: true
            }
        ]
    },
    {
        screen_name: 'Checklist',
        path: '',
        icon: 'assets/icons/checked.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Checklist Create',
                path: '/admin/checklist_create/create',
                icon: 'assets/icons/checklit-create.png',
                isShow: true,
            },
            {
                screen_name: 'Checklist List',
                path: '/admin/checklist_create/list',
                icon: 'assets/icons/list.png',
                isShow: true
            }
        ]
    },
    {
        screen_name: 'Role Mapping',
        path: '',
        icon: 'assets/icons/project.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Role Mapping Create',
                path: '/admin/rolemapping_create/create',
                icon: 'assets/icons/projectcreate.png',
                isShow: true,
            },
        ]
    },
    {
        screen_name: 'User Role Mapping',
        path: '',
        icon: 'assets/icons/project.png',
        isShow: true,
        subMenu: [
            {
                screen_name: 'Role Mapping Create',
                path: '/admin/userrolemapping/create',
                icon: 'assets/icons/projectcreate.png',
                isShow: true,
            },
            {
                screen_name: 'Role Mapping List',
                path: '/admin/userrolemapping/list',
                icon: 'assets/icons/projectlist.png',
                isShow: true
            }
        ]
    },
]