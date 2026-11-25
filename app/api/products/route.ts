export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search") || "";
    const minPrice = Number(searchParams.get("minPrice") || 0);
    const maxPrice = Number(searchParams.get("maxPrice") || Infinity);

    const products = [
        {
            id: 1,
            title: "iphone 16 pro",
            price: 1350
        },
        {
            id: 2,
            title: "iphone 18 pro",
            price: 2300
        },
        {
            id: 3,
            title: "macbook air 13",
            price: 1100
        },
    ]


    const filtered = products.filter((product) => {
        const matchesTitle = product.title.toLowerCase().includes(search.toLowerCase())
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        return matchesTitle && matchesPrice; 
    })


    return Response.json(filtered);

}