import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { ApartmentTypeEntity } from "../@entity/apartmentTypeEntity";
import { DataSource } from "typeorm";

export class CreateApartmentType implements Seeder{
    track = false;
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any>{
        await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

        const repository = dataSource.getRepository(ApartmentTypeEntity);
        await repository
        .insert([
            {
            type: 'Studio',
            maxOccupants: 1
            },
            {
            type: 'T1',
            maxOccupants: 1
            },
            {
            type: 'T2',
            maxOccupants: 2
            },
            {
            type: 'T3',
            maxOccupants: 3
            },
            {
            type: 'T4',
            maxOccupants: 4
            },

        ])
    }
}