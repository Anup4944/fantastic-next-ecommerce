import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title: 'Add products - Nextzone',
  }

  async function addProduct(formData: FormData){
    "use server";

    const session = await getServerSession(authOptions)
    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product")
    }

    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const imageUrl = formData.get("imageUrl")?.toString()
    const price = Number(formData.get("price") || 0 )


    if(!name || !description || !imageUrl || !price){
        throw new Error("Missing required fields")
    }

    await prisma.product.create({
        data: {name, description, imageUrl, price}
    })

    redirect("/")

  }


export default async function AddProductPage() {

    const session = await getServerSession(authOptions)

    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product")
    }
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Add products</h1>
            <form action={addProduct}>
                <input 
                className="mb-3 w-full input input-bordered"
                placeholder="Name your product"
                name="name"
                required
                />
                <textarea name="description" placeholder="Description" className="textarea textarea-bordered mb-3 w-full"></textarea>
                <input 
                className="mb-3 w-full input input-bordered"
                placeholder="Image"
                name="imageUrl"
                type="url"
                required
                />
                <input 
                className="mb-3 w-full input input-bordered"
                placeholder="Price"
                type="number"
                name="price"
                required
                />
                <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
            </form>
        </div>
    )
}