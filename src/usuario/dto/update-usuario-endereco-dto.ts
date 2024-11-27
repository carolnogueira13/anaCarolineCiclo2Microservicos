import { IsString, IsOptional, IsInt, MaxLength, IsDateString } from "class-validator";

export class UpdateUsuarioEnderecoDto {

    id: number;
    
    @IsString()
    @MaxLength(300)
    usuario_endereco: string;

}