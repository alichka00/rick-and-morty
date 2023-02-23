export interface I_RootObject {
  info: I_Info
  results: I_Character[]
}

export interface I_Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: I_Origin
  location: I_Origin
  image: string
  episode: string[]
  url: string
  created: string
}

export interface I_Origin {
  name: string
  url: string
}

export interface I_Info {
  count: number
  pages: number
  next: string
  prev: string
}
