import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCartPlus } from "react-icons/fa6";

type ProductPageProps = { params: { slug: string[] } };

async function getData() {
  // const res = await fetch(
  //   "https://fakestoreapi.com/products/category/electronics"
  // );
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "force-cache",
    next: {
      tags: ["products"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;

  const products = await getData();

  return (
    <>
      <div className=" p-4">
        <div className="p-4">
          <h1 className="ml-36 text-3xl font-bold tracking-widest">
            {params.slug ? "Detail Product Page" : "Our Product"}
          </h1>
          {params.slug && (
            <>
              <p>
                <span className="font-semibold">Category : </span>{" "}
                {params.slug[0]}
              </p>
              <p>
                <span className="font-semibold">Gender : </span>{" "}
                {params.slug[1]}
              </p>
              <p>
                <span className="font-semibold">Id : </span> {params.slug[2]}
              </p>
            </>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {products.data.map((product: any) => (
            <Card
              key={product.id}
              className="w-[330px] h-[330px] flex flex-col shadow-2xl"
            >
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-36" // Set fixed height and width
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <p className="font-bold text-lg">${product.price}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className="hover:bg-slate-950 hover:text-white"
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className="hover:bg-red-600 hover:text-white"
                  >
                    <FaCartPlus />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
