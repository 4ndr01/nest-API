import { ChildEntity, Column, OneToMany } from "typeorm";
import { PersonEntity } from "./personEntity";
import { ApartmentEntity } from "./apartmentEntity";

@ChildEntity()
export class OwnerEntity extends PersonEntity {
    @Column()
    bankAccount: string;

    @OneToMany(() => ApartmentEntity, apartment => apartment.owner)
    apartments: ApartmentEntity[]
}