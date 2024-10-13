import { Injectable } from '@nestjs/common';
import {
  BorderCountry,
  CountriesGateway,
  Country,
  PopulationData,
} from './countries.gateway.interface';
import axios, { AxiosInstance } from 'axios';
import {
  AvailableCountry,
  CountryFlagUrl,
  CountryInfo,
  CountryInfoBorder,
  CountryPopulation,
  CountryPopulationCount,
} from './countries-gateway-api.dtos';

@Injectable()
export class CountriesGatewayImpl implements CountriesGateway {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  public async getAvailableCountries(): Promise<Country[]> {
    const { data } = await this.api.get<AvailableCountry[]>(
      'https://date.nager.at/api/v3/AvailableCountries',
    );

    return data.map(this.toCountry);
  }

  public async getCountryBorders(
    countryCode: string,
  ): Promise<BorderCountry[]> {
    const { data } = await this.api.get<CountryInfo>(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
    );
    return data.borders.map(this.toBorderCountry);
  }

  public async getCountryPopulations(
    country: string,
  ): Promise<PopulationData[]> {
    const { data } = await this.api.post<CountryPopulation>(
      'https://countriesnow.space/api/v0.1/countries/population',
      {
        country,
      },
    );

    return data.data.populationCounts.map(this.toPopulationData);
  }

  public async getCountryFlagImgUrl(countryCode: string): Promise<string> {
    const { data } = await this.api.post<CountryFlagUrl>(
      'https://countriesnow.space/api/v0.1/countries/flag/images',
      {
        iso2: countryCode,
      },
    );

    return data.data.flag;
  }

  private toCountry(data: AvailableCountry): Country {
    return {
      countryCode: data.countryCode,
      name: data.name,
    };
  }

  private toBorderCountry(data: CountryInfoBorder): BorderCountry {
    return {
      commonName: data.commonName,
      countryCode: data.countryCode,
      officialName: data.officialName,
      region: data.region,
    };
  }

  private toPopulationData(data: CountryPopulationCount): PopulationData {
    return {
      value: data.value,
      year: data.year,
    };
  }
}
