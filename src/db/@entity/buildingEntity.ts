import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./addressEntity";
import { ApartmentEntity } from "./apartmentEntity";
import { SecureFacilityEntity } from "./secureFacilityEntity";

@Entity()
export class BuildingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creationDate: Date;

    @OneToOne(() => AddressEntity, address => address.building)
    address: AddressEntity;

    @OneToMany(() => ApartmentEntity, apartement => apartement.building)
    appartements?: ApartmentEntity[];

    @OneToMany(() => SecureFacilityEntity, apartement => apartement.building)
    facilities: SecureFacilityEntity[];
}