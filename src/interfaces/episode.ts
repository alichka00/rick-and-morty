export interface I_RootObject {
  info: I_Info
  results: I_Episode[]
}

export interface I_Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export interface I_Info {
  count: number
  pages: number
  next: string
  prev: string
}
