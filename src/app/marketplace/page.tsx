import { SearchBar } from '@/components/layout/SearchBar'
import { ProductGrid } from '@/components/layout/ProductGrid'
import { FilterBar } from '@/components/features/FilterBar'
import { MOCK_PRODUCTS } from '@/utils/constants'

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        Find Your Perfect Tractor
      </h1>
      <SearchBar />
      <FilterBar />
      <ProductGrid products={MOCK_PRODUCTS} />
    </>
  )
}