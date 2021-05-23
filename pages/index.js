import Head from "next/head";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout"
import {useState} from 'react'
import Footer from "../components/Footer";

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('');
  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleChange = (e) =>{
      e.preventDefault();

      setSearch(e.target.value.toLowerCase())

    }
  return (
    <Layout>
      <Head>
        <title>Crypto-info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar type="text" placeholder="Search" onChange={handleChange} />
      <p style={{marginTop: '0',textAlign: 'center' ,fontSize: '1.5rem', color : 'magenta' }}>Top 10 Cryptocurrency in the Market</p>
      <CoinList filteredCoins={allCoins} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const filteredCoins = await res.json();
  return {
    props: {
      filteredCoins,
    },
  };
};
