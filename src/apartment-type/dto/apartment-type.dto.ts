import { ApiProperty } from "@nestjs/swagger";

export class ApartmentTypeDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    maxOccupants: number;
}