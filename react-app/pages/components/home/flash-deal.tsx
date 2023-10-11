import { useRouter } from "next/router";

export default function FlashDeal({ flashDeal }: { flashDeal: any }) {
  const router = useRouter();

  const generateImageUrl = (item: any) => {
    if (item.data.length > 0) {
      return (
        "http://127.0.0.1:1337" + item.data[0].attributes.formats.thumbnail.url
      );
    }
    return "";
  };

  const productOnClick = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <span>Flash deals</span>
      <div className="grid grid-cols-5 gap-4 pt-2">
        {flashDeal.data?.map((item: any, index: number) => (
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
            key={index}
            onClick={() => productOnClick(item.id)}
          >
            <img
              src={generateImageUrl(item.attributes.image)}
              alt={item.attributes.description}
            />
            <span className="mb-2 line-clamp-2 tracking-tight text-gray-900 dark:text-white">
              {item.attributes.description}
            </span>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              RS: {item.attributes.price}
            </p>
            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              {item.attributes.offerRate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
