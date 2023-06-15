

export interface MenuResponseDto{
    id: string,
    name: string,
    description: string,
    averageRating: number,
    hostId: string,
    dinerId: string[],
    menuReviewId: string[],
    createdDateTime: Date,
    updatedDateTime: Date,
    section: MenuSectionResponseDto[]
}

export interface MenuSectionResponseDto{
    id: string,
    name: string,
    description: string,
    items: MenuItemsResponseDto[]
}

export interface MenuItemsResponseDto{
    id: string,
    name: string,
    description: string,
    
}