export interface Product {
    id: number
    title: string
    location: string
    price: number
    images: string[]
    description: string
    year: number
    hours: number
    brand: string
  }
  
  export interface FilterState {
    brand: string[]
    location: string
    price: {
      min: number
      max: number
    }
    showImplements: boolean
  }
  
  export interface SearchState {
    query: string
    results: Product[]
    loading: boolean
  }