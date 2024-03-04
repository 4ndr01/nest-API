import { ApiProperty } from "@nestjs/swagger";
import { ApartmentDto } from "src/apartment/dto/apartment.dto";
import { PersonDto } from "src/person/dto/person.dto";

export class OwnerDto extends PersonDto {
    @ApiProperty()
    bankAccount: string;

    @ApiProperty()
    apartments: ApartmentDto[];
}