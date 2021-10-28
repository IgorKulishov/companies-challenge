export interface Company {
    "id": number;
    "name": string;
    "location_city": string;
    "location_state": string;
    "founded_date": string;
    "founder_full_name": string;
    "founder_position": string;
    "description": string;
    "created": string;
    "updated": string;
}

export interface NewCompany {
    name: string;
    locationCity: string;
    locationState: string;
    foundedDate: string;
    founderFullName: string;
    founderPosition: string;
    description: string;
}
