import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FacilityEntity } from "./facilityEntity";
import { BuildingEntity } from "./buildingEntity";

@Entity()
export class SecureFacilityEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    lastInspection?: Date

    @ManyToOne(() => FacilityEntity, facilityEntity => facilityEntity.secureFacilities)
    facility: FacilityEntity

    @ManyToOne(() => BuildingEntity, buildingEntity => buildingEntity.facilities)
    building: BuildingEntity
}