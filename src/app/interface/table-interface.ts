export interface ITABLE_MODAL {
    title: string,
    value: string,
    propertyPath?: string,
    type?: 'date' | 'dateTime' | 'boolean' | 'percentage' | 'discount' | 'enum' | 'image' | 'Description' | 'userType',
    modal?: string[],
}

export interface ITABLE_CONFIG {
    isEdit?: boolean, // default false - Make this true to get edit event button 
    isDelete?: boolean, // default false - Make this true to get Delete event button 
    isView?: boolean, // default false - Make this true to get more event button 
    isPrint?: boolean, // default false - Make this true to get print event button 
    isDetails?: boolean, // default false - Make this true to get details event button 
    isAccept?: boolean, // default false - Make this true to get Accept event button 
    isReject?: boolean, // default false - Make this true to get reject event button 
    isDefault?: boolean, // default false - Make this true to get Default badge in status section 
    routeLink?: string,
    keyWithImg?: string,
    isToogle?: boolean
}