import { ApiProperty } from "@nestjs/swagger";

export class CreateApartmentTypeDto {
    @ApiProperty()
    type: string;

    @ApiProperty()
    maxOccupants: number;
}