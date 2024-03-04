import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { AddressEntity } from './@entity/addressEntity';
import { ApartmentEntity } from './@entity/apartmentEntity';
import { ApartmentOptionEntity } from './@entity/apartmentOptionsEntity';
import { ApartmentTypeEntity } from './@entity/apartmentTypeEntity';
import { BuildingEntity } from './@entity/buildingEntity';
import { OwnerEntity } from './@entity/ownerEntity';
import { PersonEntity } from './@entity/personEntity';
import { TenantEntity } from './@entity/tenantEntity';
import { FacilityEntity } from './@entity/facilityEntity';
import { SecureFacilityEntity } from './@entity/secureFacilityEntity';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'evaAapi',
    entities: [
        AddressEntity,
        ApartmentEntity,
        ApartmentOptionEntity,
        ApartmentTypeEntity,
        BuildingEntity,
        FacilityEntity,
        SecureFacilityEntity,
        TenantEntity,
        OwnerEntity,
        PersonEntity
    ],
    synchronize: true,

    seeds: ['src/db/@seeds/*{.ts,.js}'],
    seedTracking: false,
    factories: ['src/db/@factories/*{.ts,.js}'],
};