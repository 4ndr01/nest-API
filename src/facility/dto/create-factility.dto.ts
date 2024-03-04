import { ApiProperty } from "@nestjs/swagger";

export class CreateFacilityDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;
}