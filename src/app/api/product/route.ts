import { NextRequest, NextResponse } from "next/server";
import apple from "images/apple.png";
import asus from "images/asus.png";
import lg from "images/lg.png";

const data = [
  {
    id: 1,
    title:
      "Apple iMac (24 inci, M3, 2023) 8C CPU, 8C GPU, 8GB RAM, 256GB, 2 Port, Silver",
    image: apple,
    price: 150,
  },
  {
    id: 2,
    title: "LG LED Monitor 24MR400-B 24 FHD IPS 100Hz - FreeSync",
    image: asus,
    price: 298,
  },
  {
    id: 3,
    title:
      "ASUS ProArt Display PA278QV Professional Monitor - 27-inch, IPS, WQHD (2560 x 1440), 100% sRGB",
    image: lg,
    price: 327,
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: detailProduct,
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Ok",
    data: data,
  });
}
