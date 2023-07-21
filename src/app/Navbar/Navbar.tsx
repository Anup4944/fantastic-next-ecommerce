import { redirect } from "next/navigation"
import Link from "next/link"
import { getCart } from "@/lib/db/cart"
import ShoppingCartBtn from "./ShoppingCartBtn"
// import Image from "next/image"

async function searchProducts(formData:FormData){
    "use server"

    const searchQuery = formData.get("searchQuery")?.toString()
    if(searchQuery){
        redirect("/search?query=" + searchQuery)
    }

}

export default async function Navbar(){

    const cart  = await getCart()
    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2 ">
                <div className="flex-1 ">
                    <Link href="/" className="btn btn-ghost text-xl normal-case">
                        {/* <Image src={"https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"} alt="Logo"
                        height={40} width={40}
                        /> */} Nextzone
                    </Link>

                </div>
                <div className="flex-none gap-2 ">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input placeholder="Search" name="searchQuery" className="input input-bordered w-full min-w-[100px]"/>

                        </div>
                    </form>
                    <ShoppingCartBtn cart={cart}/>

                </div>


            </div>

        </div>
    )
}