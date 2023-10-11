import Offer from "../components/home/offer";
import FlashDeal from "../components/home/flash-deal";

export async function getServerSideProps() {
  const result = await fetch(
    `http://127.0.0.1:1337/api/hardware-flash-deals?populate=*`
  );
  const data = await result.json();

  return {
    props: {
      flashDeal: data,
    },
  };
}

export default function Main({ flashDeal }: { flashDeal: any }) {
  return (
    <div className="grid gap-4">
      <Offer />
      <FlashDeal flashDeal={flashDeal} />
    </div>
  );
}
