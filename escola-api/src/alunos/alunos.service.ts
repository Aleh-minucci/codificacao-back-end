import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UptadateAlunoDto } from "./dto/uptade-alunos.dto.js";
import { Aluno, AlunoDocument } from "./schemas/aluno.shema.js";

@Injectable()
export class AlunoService{
    constructor(@InjectModel(Aluno.name) private alunomodel : Model<AlunoDocument>){}

    async create(createAlunoDto:CreateAlunoDto):Promise<Aluno | null>{
        const createdAluno = new this.alunomodel(createAlunoDto);
        return createdAluno.save();
    }

    async findAll(): Promise<Aluno[]>{
        return this.alunomodel.find().exec();
    } //!GET

    async findOne(id:string): Promise<Aluno | null>{
        return this.alunomodel.findById(id).exec();
    } //!GET

    async Update(id: string, uptadateAlunoDto: UptadateAlunoDto): Promise<Aluno | null >{
        return this.alunomodel.findByIdAndUpdate(id, uptadateAlunoDto, {
            new: true
        }).exec();
    } //!PATCH

    async remove(id: string): Promise<Aluno | null>{
        return this.alunomodel.findByIdAndDelete(id).exec();
    } //!DELETE
}