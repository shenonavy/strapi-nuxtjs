import Offer from "../components/home/offer";
import FlashDeal from "../components/home/flash-deal";

export default function Main() {
  return (
    <div className="grid gap-4">
      <Offer />
      <FlashDeal />
    </div>
  );
}
