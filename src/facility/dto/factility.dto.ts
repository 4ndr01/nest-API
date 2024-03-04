import { ApiProperty } from "@nestjs/swagger";
import { SecureFacilityDto } from "src/secure-facility/dto/secure-facility.dto";

export class FacilityDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    isSecure: boolean;

    @ApiProperty()
    secureFacilities: SecureFacilityDto[];
}