import Main from "./home";

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

export default function Home({ flashDeal }: { flashDeal: any }) {
  return <Main flashDeal={flashDeal} />;
}
