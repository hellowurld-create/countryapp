import BackButton from "@/components/atoms/BackButton";
import { fetchCountryByCode } from "@/utils/api";
import { Country } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    code: string;
  };
}



const CountryDetails = async ({ params }: Props) => {
  const { code } = await params; // Await params to destructure `code`

  const country: Country | null = await fetchCountryByCode(code);

  if (!country) {
    return <p>Country not found!</p>;
  }

  return (
    <main className="md:p-24 max-md:p-10 md:pb-44 bg-white dark:bg-gray-900 text-black dark:text-white">
      <BackButton />
      <div className="mt-16 md:grid md:grid-cols-2 md:items-center md:gap-16">
        <Image
          height={400}
          width={500}
          src={country.flags.svg || country.flags.png}
          alt={`${country.name.common} Flag`}
          className="object-contain rounded-sm"
        />
        <div>
          <h1 className="text-2xl max-sm:mt-10 font-bold">{country.name.common}</h1>
          <div className="md:grid md:grid-cols-2 md:items-start md:mt-12 md:justify-between">
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <div>
                <strong>Native name: </strong>
                <span>{country.name.official}</span>
              </div>
              {country.population && (
                <div>
                  <strong>Population: </strong>
                  <span>{country.population.toLocaleString()}</span>
                </div>
              )}
              <div>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </div>
              {country.subregion && (
                <div>
                  <strong>Sub Region: </strong>
                  <span>{country.subregion}</span>
                </div>
              )}
              {country.capital && (
                <div>
                  <strong>Capital: </strong>
                  <span>{country.capital}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 mt-16 md:mt-0">
              {country.tld && (
                <div>
                  <strong>Top level Domain: </strong>
                  <span>{country.tld[0]}</span>
                </div>
              )}
              {country.currencies && (
                <div>
                  <strong>Currencies: </strong>
                  <span>
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              {country.languages && (
                <div>
                  <strong>Languages: </strong>
                  <span>
                    {Object.values(country.languages)
                      .map((language) => language)
                      .join(", ")}
                  </span>
                </div>
              )}
            </div>
          </div>
          {country.borders && (
            <div className="flex justify-left items-center">
              <h3 className="mt-4 mr-3 text-lg font-semibold">Border Countries:</h3>
              <div className="flex items-center gap-4 flex-wrap mt-4 max-w-full">
                {country.borders.map((border) => (
                  <Link
                    key={border}
                    href={`/countries/${border}`}
                    className="bg-secondary px-4 py-1 text-center text-xs rounded-md border border-neutral-800 hover:bg-slate-300 gap-4 hover:opacity-80"
                  >
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
