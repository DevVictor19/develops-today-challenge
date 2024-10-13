export interface Country {
  countryCode: string;
  name: string;
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export interface PopulationData {
  year: number;
  value: number;
}

export abstract class CountriesGateway {
  public abstract getAvailableCountries(): Promise<Country[]>;
  public abstract getCountryBorders(
    countryCode: string,
  ): Promise<BorderCountry[]>;
  public abstract getCountryPopulations(
    country: string,
  ): Promise<PopulationData[]>;
  public abstract getCountryFlagImgUrl(countryCode: string): Promise<string>;
}
