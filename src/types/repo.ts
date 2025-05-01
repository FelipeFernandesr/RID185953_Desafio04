//Tipagem para repos
export interface Repo {
  id: number
  name: string
  description: string | null
  stargazers_count: number
  html_url: string
  imageUrl: string
}
