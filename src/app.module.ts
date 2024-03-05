import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { BuildingModule } from './building/building.module';
import { ApartmentModule } from './apartment/apartment.module';
import { ApartmentOptionModule } from './apartment-option/apartment-option.module';
import { ApartmentTypeModule } from './apartment-type/apartment-type.module';
import { FacilityModule } from './facility/facility.module';
import { OwnerModule } from './owner/owner.module';
import { SecureFacilityModule } from './secure-facility/secure-facility.module';
import { TenantModule } from './tenant/tenant.module';
import { PersonModule } from './person/person.module';
import { DbModule } from './db/db.module';

@Module({

  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'evaAapi',
      synchronize: false,
      entities: [],
    }),
        DbModule,
        AddressModule,
        BuildingModule,
        ApartmentModule,
        ApartmentOptionModule,
        ApartmentTypeModule,
        FacilityModule,
        OwnerModule,
        SecureFacilityModule,
        TenantModule,
        PersonModule,
      ],

  controllers: [],
  providers: [],
})
export class AppModule { }
