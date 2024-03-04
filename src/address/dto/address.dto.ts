import { ApiProperty } from "@nestjs/swagger";
import { PrimaryGeneratedColumn } from "typeorm";

export class AddressDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    street: string;

    @ApiProperty()
    streetNumber: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    postalCode: string;
}