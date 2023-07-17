

export const metadata = {
    title: 'Add products - Nextzone',
  }


export default function AddProductPage() {
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Add products</h1>
            <form >
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
                <button type="submit" className="btn btn-primary btn-block">Add Product</button>
            </form>
        </div>
    )
}