export async function GET() {
    return Response.json([
        {
            id: 1,
            title: "Iphone 16 pro",
            price: 1350
        },
        {
            id: 2,
            title: "Iphone 18 pro",
            price: 2300
        },
        {
            id: 3,
            title: "MacBook Air 13",
            price: 1100
        },
    ])
}