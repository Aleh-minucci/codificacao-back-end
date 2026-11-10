import { PartialType } from "@nestjs/swagger";
import { CreateAlunoDto } from "./create-aluno.dto.js";

export class UptadateAlunoDto extends PartialType(CreateAlunoDto) {
    nome: string;
    idade: number;
    matricula: string;
    cursos: string[];
}