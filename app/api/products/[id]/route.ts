export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const {id} = await params;

  const products = [
    {id: 1, title: "Iphone 16 pro", price: 1350,},{id: 2, title: "Iphone 18 pro", price: 2300,},{id: 3, title: "MacBook Air 13", price: 1100,},
  ];

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if(!product) {
    return Response.json({
        message: "Product not found"
    },
    {
        status: 404
    })
  }


  return Response.json(product);
}
