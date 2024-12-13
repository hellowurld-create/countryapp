import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { fetchCountryByCode } from '../utils/api';
import { Country } from '../utils/types';

interface Props {
  country: Country;
}

export default function Details({ country }: Props) {
  const router = useRouter();

  const handleBorderClick = (code: string) => {
    router.push(`/${code}`);
  };

  return (
    <div>
      <button onClick={() => router.back()}>Back</button>
      <h1>{country.name.common}</h1>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital?.[0]}</p>
      <h2>Border Countries:</h2>
      <div>
        {country.borders?.map((border) => (
          <button key={border} onClick={() => handleBorderClick(border)}>
            {border}
          </button>
        )) || <p>No bordering countries.</p>}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { country } = context.params!;
  const data = await fetchCountryByCode(country as string);
  return { props: { country: data } };
};
