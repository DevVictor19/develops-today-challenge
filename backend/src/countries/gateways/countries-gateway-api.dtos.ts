// https://date.nager.at/swagger/index.html (nager api doc)

export interface AvailableCountry {
  countryCode: string;
  name: string;
}

export interface CountryInfoBorder {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: CountryInfoBorder[];
}

// https://documenter.getpostman.com/view/1134062/T1LJjU52 (countries api doc)

export interface CountryPopulationCount {
  year: number;
  value: number;
}

export interface CountryPopulation {
  data: {
    populationCounts: CountryPopulationCount[];
  };
}

export interface CountryFlagUrl {
  data: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  };
}
