import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApartmentEntity } from "./apartmentEntity";

@Entity()
export class ApartmentOptionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: number;

    @ManyToMany(() => ApartmentEntity, apartmentEntity => apartmentEntity.options)
    appartements: ApartmentEntity[]
}