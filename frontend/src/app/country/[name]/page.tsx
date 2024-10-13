import Link from "next/link";
import Image from "next/image";

import {
  getCountryBorders,
  getCountryFlagImgUrl,
  getCountryPopulations,
} from "@/services/countries";
import PopulationChart from "@/components/ui/population-chart";

interface CountryInfoPageProps {
  params: { name: string };
  searchParams: { code: string };
}

export default async function CountryInfoPage(props: CountryInfoPageProps) {
  const [imgUrl, populations, borders] = await Promise.all([
    getCountryFlagImgUrl(props.searchParams.code),
    getCountryPopulations(props.params.name),
    getCountryBorders(props.searchParams.code),
  ]);

  return (
    <div className="px-4 pt-8">
      <Link className="text-2xl mb-3" href="/">
        Back to home
      </Link>
      <section className="w-full min-h-screen flex items-center justify-center gap-20">
        <div>
          <h1 className="text-4xl mb-3">{props.params.name}</h1>
          <div>
            <Image
              src={imgUrl}
              alt={`${props.params.name} country flag`}
              width={400}
              height={400}
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl mb-3">Border countries</h2>
          <ul className="max-h-96 overflow-y-scroll">
            {borders.map(({ commonName, countryCode }) => (
              <li className="py-2 px-1" key={countryCode}>
                <Link
                  href={{
                    pathname: `/country/${commonName}`,
                    query: { code: countryCode },
                  }}
                >
                  {countryCode} - {commonName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-16 mb-12">
        <h1 className="text-4xl mb-6">Country’s population over time</h1>
        <PopulationChart data={populations} />
      </section>
    </div>
  );
}
