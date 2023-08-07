import ProductCart from "@/components/ProductCart"
import { prisma } from "@/lib/db/prisma"
import { Metadata } from "next"

interface SearchProps{
    searchParams: {query: string}
}


export function generateMetadata({searchParams: {query}}: SearchProps): Metadata{
    return {
        title: `Search ${query} - Nextzone`
    }

}


export default async function SearchPage({ searchParams: {query}}: SearchProps) {

  const products = await prisma.product.findMany({
    where : {
        OR: [
            {
                name : { contains: query, mode: "insensitive"}
            },
            {
                description : { contains: query, mode: "insensitive"}
            }
        ]
    },
    orderBy: {id:"desc"}
  })


  if(products.length === 0 ){
    return <div className="text-center">
        No product found
    </div>
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {
            products.map((product) => (
                <ProductCart product={product} key={product.id} />
            ))
        }
    </div>
  )


}