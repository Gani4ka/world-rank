import {useState} from 'react';
import { Layout } from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import CountriesTable from '../components/CountryTable/CountryTable';

export default function Home(props) {
  const [keyword, setKeyword] = useState("");

  const filteredCountries = props.countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
   <Layout>
     <div>Found {props.countries.length} countries</div>
     <SearchInput onInputChange={onInputChange} placeholder='search by name, region'></SearchInput>
     <CountriesTable countries={filteredCountries}/>
   </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries
    }
  }
}
