import { AverageRatingValues } from "@root/domain/common/valueObjects/AverageRating"
import { MenuItemId } from "@root/domain/menu/valueObjects/MenuItemId"
import { MenuSectionId } from "@root/domain/menu/valueObjects/MenuSectionId"


export interface MenuResponseDto{
    id: string,
    name: string,
    description: string,
    averageRating: AverageRatingValues,
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