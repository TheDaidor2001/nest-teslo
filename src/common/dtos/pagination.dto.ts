import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";


export class PaginatioDto {

    @IsOptional()
    @IsPositive()
    @Type(() => Number) //Convertir a numero
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type(() => Number) //Convertir a numero
    offset?: number;

}