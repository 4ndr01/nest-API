import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BuildingEntity } from "./buildingEntity";

@Entity()
export class AddressEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    streetNumber: string;

    @Column()
    city: string;

    @Column()
    postalCode: string;

    @OneToOne(() => BuildingEntity, building => building.address)
    building: BuildingEntity;
}