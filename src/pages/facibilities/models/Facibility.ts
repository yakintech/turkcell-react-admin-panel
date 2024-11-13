export interface CreateFacibilityRequest {
    name: string
    description: string
    address: string
    city: string
}

export interface CreateFacibilityResponse {
    id: string
}


export interface GetAllFacibilitiesResponse {
    _id: string
    name: string
    description: string
    address: string
    city: City
}

export interface City{
    _id: string
    name: string
}
