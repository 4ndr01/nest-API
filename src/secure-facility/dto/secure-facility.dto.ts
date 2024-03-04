import { ApiProperty } from "@nestjs/swagger"
import { FacilityDto } from "src/facility/dto/factility.dto"

export class SecureFacilityDto {
    @ApiProperty()
    lastInspection?: Date

    @ApiProperty()
    facility: FacilityDto
}