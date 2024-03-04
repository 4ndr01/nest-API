import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { PersonEntity } from "./personEntity";
import { ApartmentEntity } from "./apartmentEntity";

@Entity()
export class TenantEntity extends PersonEntity{
    @OneToOne(() => ApartmentEntity, apartment => apartment.tenant)
    apartmentMainTenent: ApartmentEntity

    @ManyToOne(() => ApartmentEntity, apartment => apartment.tenants)
    apartment: ApartmentEntity
}