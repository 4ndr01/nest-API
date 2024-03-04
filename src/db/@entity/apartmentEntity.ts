import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApartmentTypeEntity } from "./apartmentTypeEntity";
import { ApartmentOptionEntity } from "./apartmentOptionsEntity";
import { BuildingEntity } from "./buildingEntity";
import { OwnerEntity } from "./ownerEntity";
import { TenantEntity } from "./tenantEntity";

@Entity()
export class ApartmentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    loan: number;

    @Column()
    floor: number;

    @Column()
    appartementNumber: string;

    @ManyToOne(() => OwnerEntity, ownerEntity => ownerEntity.apartments)
    owner: OwnerEntity;

    @OneToOne(() => TenantEntity, tenantEntity => tenantEntity.apartmentMainTenent)
    @JoinColumn()
    tenant?: TenantEntity;

    @OneToMany(() => TenantEntity, tenantEntity => tenantEntity.apartment)
    tenants?: TenantEntity[];

    @ManyToOne(() => ApartmentTypeEntity, apartementTypeEntity => apartementTypeEntity.appartements)
    type: ApartmentTypeEntity

    @ManyToMany(() => ApartmentOptionEntity, appartementOptionEntity => appartementOptionEntity.appartements)
    options: ApartmentOptionEntity[]

    @ManyToOne(() => BuildingEntity, buildingEntity => buildingEntity.appartements)
    building: BuildingEntity
}