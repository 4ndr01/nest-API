import { ApiProperty } from "@nestjs/swagger"

class FacilityDto {
    @ApiProperty()
    id: number
}

class BuildingDto {
    @ApiProperty()
    id: number
}

export class CreateSecureFacilityDto {
    @ApiProperty()
    lastInspection?: Date

    @ApiProperty()
    facility: FacilityDto

    @ApiProperty()
    building: BuildingDto
}
