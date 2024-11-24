import { SearchBar } from '@/components/layout/SearchBar'
import { ProductGrid } from '@/components/layout/ProductGrid'
import { FilterBar } from '@/components/features/FilterBar'
import { MOCK_PRODUCTS } from '@/utils/constants'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const filteredProducts = MOCK_PRODUCTS.filter(product =>
    product.title.toLowerCase().includes((searchParams.q || '').toLowerCase())
  )

  return (
    <>
      <SearchBar initialQuery={searchParams.q} />
      <FilterBar />
      <div className="mt-4">
        <p className="text-gray-600 mb-4">
          {filteredProducts.length} results found
        </p>
        <ProductGrid products={filteredProducts} />
      </div>
    </>
  )
}