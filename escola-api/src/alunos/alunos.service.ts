
import { Injectable, NotAcceptableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UptadateAlunoDto } from "./dto/uptade-alunos.dto.js";
import { Aluno, AlunoDocument } from "./schemas/aluno.shema.js";

@Injectable()
export class AlunoService {
    constructor(
        @InjectModel(Aluno.name)
        private alunoModel: Model<AlunoDocument>
    ) {}

    // POST - Criar aluno
    async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
        const createdAluno = new this.alunoModel(createAlunoDto);
        return createdAluno.save();
    }

    // GET - Consultar todos os alunos
    async findAll(): Promise<Aluno[]> {
        return this.alunoModel.find().exec();
    }

    // GET - Consultar aluno pelo ID
    async findOne(id: string): Promise<Aluno> {
        const aluno = await this.alunoModel.findById(id).exec();

        if (!aluno) {
            throw new NotAcceptableException(
                `Aluno com id ${id} não encontrado.`
            );
        }

        return aluno;
    }

    // PATCH - Atualizar aluno
    async update(
        id: string,
        uptadateAlunoDto: UptadateAlunoDto
    ): Promise<Aluno> {
        const alunoAtualizado = await this.alunoModel
            .findByIdAndUpdate(id, uptadateAlunoDto, {
                new: true,
                runValidators: true
            })
            .exec();

        if (!alunoAtualizado) {
            throw new NotAcceptableException(
                `Aluno com id ${id} não encontrado.`
            );
        }

        return alunoAtualizado;
    }

    // DELETE - Remover aluno
    async remove(id: string): Promise<Aluno> {
        const alunoDeletado = await this.alunoModel
            .findByIdAndDelete(id)
            .exec();

        if (!alunoDeletado) {
            throw new NotAcceptableException(
                `Aluno com id ${id} não encontrado.`
            );
        }

        return alunoDeletado;
    }
}
