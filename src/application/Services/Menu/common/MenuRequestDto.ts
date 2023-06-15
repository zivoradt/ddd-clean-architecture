

export interface MenuRequestDto{
    name: string,
    description: string,
    section: MenuSectionRequestDto[]
}

export interface MenuSectionRequestDto{
    name: string,
    description: string,
    items: MenuItemsRequestDto[]
}

export interface MenuItemsRequestDto{
    name: string,
    description: string,
    
}