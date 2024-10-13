import Link from "next/link";

import { getAvailableCountries } from "@/services/countries";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
  const data = await getAvailableCountries();

  return (
    <div>
      <main className="w-full min-h-screen flex flex-col gap-6 items-center justify-center">
        <h1 className="text-lg font-bold">Choose a country to discover!</h1>
        <Card className="max-h-96 overflow-y-scroll">
          <CardContent>
            <ul className="w-full">
              {data.map((country) => (
                <li className="py-2 px-1" key={country.countryCode}>
                  <Link
                    href={{
                      pathname: `/country/${country.name}`,
                      query: { code: country.countryCode },
                    }}
                  >
                    {country.countryCode} - {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
