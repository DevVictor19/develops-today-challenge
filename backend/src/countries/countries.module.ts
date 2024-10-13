import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesGatewayImpl } from './gateways/countries.gateway';
import { CountriesGateway } from './gateways/countries.gateway.interface';

@Module({
  controllers: [CountriesController],
  providers: [{ provide: CountriesGateway, useClass: CountriesGatewayImpl }],
})
export class CountriesModule {}
