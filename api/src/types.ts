
export interface UserType {
    username : string,
    createdAt : number,
    password : string,
    accessToken : string,
    packages : PackageType[]
}

export type stringMap<extraTypes> = {[key : string]: string | extraTypes}

export interface PackageType {
    name : string,
    description : string,
    version: string,
    author: string,
    source: stringMap<string | string[]>
}
