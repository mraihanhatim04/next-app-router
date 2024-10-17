type DetailProductPageProps = {
  params: {
    slug: string[];
  };
};
export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  return (
    <div className="container mx-auto px-20 py-8">
      <h1 className="tracking-wider text-lg font-semibold mb-2">
        {params.slug ? "Detail Product Page" : "Product Page"}
      </h1>
      {params.slug && (
        <>
          <p>
            <span className="font-semibold">Category : </span> {params.slug[0]}
          </p>
          <p>
            <span className="font-semibold">Brand : </span> {params.slug[1]}
          </p>
          <p>
            <span className="font-semibold">Seri : </span> {params.slug[2]}
          </p>
        </>
      )}
    </div>
  );
}
