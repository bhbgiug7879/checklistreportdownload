export interface IMENU {
    screen_name: string,
    path: string,
    isShow: boolean
    icon?: string,
    subMenu?: ISUB_MENU[]
}

export interface ISUB_MENU {
    screen_name: string,
    path: string,
    isShow: boolean
    icon?: string,
}