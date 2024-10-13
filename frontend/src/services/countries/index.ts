import { api } from "@/lib/axios";
import { CountryBorderDto } from "./dtos/country-border.dto";
import { CountryPopulationDto } from "./dtos/country-population.dto";
import { CountryDto } from "./dtos/country.dto";

export async function getAvailableCountries(): Promise<CountryDto[]> {
  const { data } = await api.get("/countries");
  return data;
}

export async function getCountryBorders(
  countryCode: string
): Promise<CountryBorderDto[]> {
  try {
    const { data } = await api.get(`/countries/borders/${countryCode}`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCountryPopulations(
  country: string
): Promise<CountryPopulationDto[]> {
  try {
    const { data } = await api.get(`/countries/populations/${country}`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCountryFlagImgUrl(
  countryCode: string
): Promise<string> {
  try {
    const { data } = await api.get(`/countries/flag/${countryCode}`);
    return data;
  } catch (error) {
    console.error(error);
    return "";
  }
}
