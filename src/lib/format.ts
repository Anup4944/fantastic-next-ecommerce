export function formatPrice(price:Number){
return ( price /100).toLocaleString("en-US", {
    style:"currency",
    currency:"USD"
})
}