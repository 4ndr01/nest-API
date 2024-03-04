import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApartmentEntity } from "./apartmentEntity";

@Entity()
export class ApartmentTypeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    maxOccupants: number;

    @OneToMany(() => ApartmentEntity, apartement => apartement.type)
    appartements: ApartmentEntity[];
}