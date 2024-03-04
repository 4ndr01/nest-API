import { ApiProperty } from "@nestjs/swagger"
import { AddressDto } from "src/address/dto/address.dto"
import { ApartmentDto } from "src/apartment/dto/apartment.dto"
import { SecureFacilityDto } from "src/secure-facility/dto/secure-facility.dto"

export class BuildingDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    creationDate: Date;

    @ApiProperty()
    address: AddressDto

    @ApiProperty()
    apartments: ApartmentDto[]

    @ApiProperty()
    facilities: SecureFacilityDto[]
}