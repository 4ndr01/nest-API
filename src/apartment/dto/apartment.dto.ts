import { ApiProperty } from "@nestjs/swagger"
import { ApartmentOptionDto } from "src/apartment-option/dto/apartment-option.dto";
import { ApartmentTypeDto } from "src/apartment-type/dto/apartment-type.dto";
import { BuildingDto } from "src/building/dto/building.dto"
import { OwnerDto } from "src/owner/dto/owner.dto";
import { TenantDto } from "src/tenant/dto/tenant.dto";

export class ApartmentDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    loan: number;

    @ApiProperty()
    floor: number;

    @ApiProperty()
    appartementNumber: string;

    @ApiProperty()
    owner: OwnerDto;

    @ApiProperty()
    tenant: TenantDto;

    @ApiProperty()
    tenants: TenantDto[];

    @ApiProperty()
    type: ApartmentTypeDto;

    @ApiProperty()
    options: ApartmentOptionDto[];

    @ApiProperty()
    building: BuildingDto
}