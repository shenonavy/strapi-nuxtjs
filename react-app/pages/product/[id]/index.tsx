export async function getServerSideProps(context: any) {
  const result = await fetch(
    `http://127.0.0.1:1337/api/hardware-flash-deals/${context.params.id}?populate=*`
  );
  const data = await result.json();

  return {
    props: {
      flashDeal: data,
    },
  };
}

export default function ProductDetail({ flashDeal }: { flashDeal: any }) {

  return (
    <div className="p-6">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
        <img
          src={
            "http://127.0.0.1:1337" +
            flashDeal.data.attributes.image.data[0].attributes.url
          }
          alt=""
        />
        <span className="mb-2 mt-6 line-clamp-2 tracking-tight text-gray-900 dark:text-white">
          {flashDeal.data.attributes.description}
        </span>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {flashDeal.data.attributes.price}
        </p>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {flashDeal.data.attributes.offerRate}
        </p>
      </div>
    </div>
  );
}
