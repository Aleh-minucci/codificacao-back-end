import { IsString, IsInt, IsNotEmpty, IsArray, Min, ArrayMinSize } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {
 
    //! NOME DO ALUNO
    @ApiProperty({
        example: 'João da Silva',
        description: 'Nome completo do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message: 'O nome é Obrigatório e não pode ser vazio.'
    })
    nome: string;



    //! IDADE DO ALUNO
    @ApiProperty({
        example: '21',
        description: 'idade do aluno',
    })
    @IsInt({
        message: 'A idade deve ser um número inteiro.' 
    })
    @Min(0,{
        message: 'A idade não pode ser negativa.'
    })
    idade: number;



    //! MATRÍCULA DO ALUNO
    @ApiProperty({
        example: '1234',
        description: 'Matrícula do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message: 'A matrícula é obrigatória e não pode ser vazia.'
    })
    matricula: string;


    //! CURSOS DO ALUNO
    @ApiProperty({
        example: ['Ciências da Computação', 'Recursos Humanos'],
        description: 'Cursos em que o aluno está matricuilado',
    })
    @IsArray()
    @IsString({
        each:true, 
        message: 'Cada curso deve ser uma texto.'
    })
    @ArrayMinSize(1,{
        message:'O aluno deve estar matrículado em pelo menos um curso.'
    })
    cursos: string[];
}