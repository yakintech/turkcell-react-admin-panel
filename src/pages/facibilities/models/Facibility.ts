export interface CreateFacibilityRequest {
    name: string
    description: string
    address: string
    cityId: string
}

export interface CreateFacibilityResponse {
    id: string
}


export interface GetAllFacilitiesResponse {
    _id: string
    name: string
    description: string
    address: string
    city: string
}
