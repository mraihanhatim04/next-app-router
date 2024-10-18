import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Front-end developer",
    stack: "VueJS, React, Next.js, Shadcn, TailwindCSS",
    budget: 15000000,
  },
  {
    id: 2,
    name: "Back-end developer",
    stack: "Laravel, ExpressJs, NodeJs, MongoDB, Aws",
    budget: 15000000,
  },
  {
    id: 3,
    name: "UI/UX Designer",
    stack:
      "Figma, AdobeXD, Sketch, Adobe Photoshop, Blender, Adobe Illustrator",
    budget: 8000000,
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
