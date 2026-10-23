import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AlunoService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UptadateAlunoDto } from "./dto/uptade-alunos.dto.js";

@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunoService : AlunoService) {}
    @Post()
    create(@Body() createAlunoDto: CreateAlunoDto){
        return this.alunoService.create(createAlunoDto);
    }

    @Get()
    findAll(){
        return this.alunoService.findAll();
    }

    @Get(':id')
    findone(@Param('id') id: string){
        return this.alunoService.findOne(id);
    }

    @Patch('id')
    update(@Param ('id') id: string, @Body() uptadateAlunoDto: UptadateAlunoDto){
        return this.alunoService.Update(id, uptadateAlunoDto);
    }

    @Delete('id')
    remove(@Param('id') id: string) {
        return this.alunoService.remove(id);
    }
}