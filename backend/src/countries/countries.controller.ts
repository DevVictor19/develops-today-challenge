import { Controller, Get, Param } from '@nestjs/common';
import { CountriesGateway } from './gateways/countries.gateway.interface';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesGateway: CountriesGateway) {}

  @Get()
  getAvailableCountries() {
    return this.countriesGateway.getAvailableCountries();
  }

  @Get('/borders/:countryCode')
  getCountryInfo(@Param('countryCode') countryCode: string) {
    return this.countriesGateway.getCountryBorders(countryCode);
  }

  @Get('/populations/:country')
  getCountryPopulations(@Param('country') country: string) {
    return this.countriesGateway.getCountryPopulations(country);
  }

  @Get('/flag/:countryCode')
  getCountryFlagUrl(@Param('countryCode') countryCode: string) {
    return this.countriesGateway.getCountryFlagImgUrl(countryCode);
  }
}
