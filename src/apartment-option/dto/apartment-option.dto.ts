import { ApiProperty } from "@nestjs/swagger";
import { ApartmentDto } from "src/apartment/dto/apartment.dto";

export class ApartmentOptionDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    number: number;

    @ApiProperty()
    appartement: ApartmentDto;
}