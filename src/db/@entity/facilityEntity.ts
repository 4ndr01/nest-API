import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SecureFacilityEntity } from "./secureFacilityEntity";

@Entity()
export class FacilityEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    isSecure: boolean

    @OneToMany(() => SecureFacilityEntity, secureFacilityEntity => secureFacilityEntity.facility)
    secureFacilities: SecureFacilityEntity[]


}