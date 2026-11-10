
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe} from "@nestjs/common";
import { AlunoService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UptadateAlunoDto } from "./dto/uptade-alunos.dto.js";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";

@ApiTags('alunos')
@Controller('alunos')
export class AlunosController {

    constructor(private readonly alunoService: AlunoService) {}

    //! Criar aluno
    @Post()
    @ApiOperation({
        summary: 'Cria a matrícula do aluno',
    })
    @ApiResponse({
        status: 201,
        description: 'A matrícula do aluno foi criada com sucesso.',
    })
    @ApiResponse({
        status:400,
        description: 'Dados inválidos fornecidos ou mal formatados.',
    })
    
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor, matrícula duplicada ou serviço indisponível'
    })

    create(@Body() createAlunoDto: CreateAlunoDto) {
        return this.alunoService.create(createAlunoDto);
    }

    //! Consultar todos os alunos
    @Get()
     @ApiOperation({
        summary: 'Retorna a lista de alunos cadastrados.'
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de alunos retornada com sucesso.'
    })
    @ApiResponse({
        status: 404,
        description: 'Nenhum aluno encontrado',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ou serviço indisponível.',
    })
   // findAll() {
      //  return this.alunoService.findAll();
   // }
  
    @Get()
    @ApiOperation({
        summary: 'Retorna a lista de alunos cadastrados com paginação',
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de alunos retornada com sucesso.'
    })
    @ApiResponse({
        status: 404,
        description: 'Nenhum aluno encontrado',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno so servidor ou serviço indisponível.'
    })
    @ApiQuery({
        name: 'page',
        required: false,
        type: Number,
        description: 'Número da página (padrão: 1)'
    })
    @ApiQuery({
        name: 'limit',
        required: false,
        type: Number,
        description: ' Itens por página(padrão: 10)'
    })

    //! Consultar aluno pelo ID
    findAllPage(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number){
     return this.alunoService.findAllPage(page, limit);
    }
    @Get(':id')
    @ApiOperation({
        summary: 'Retorna os detalhes de um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Detalhes do aluno retornado com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo id',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ao buscar detalhes do aluno'
    })
    findOne(@Param('id') id: string) {
        return this.alunoService.findOne(id);
    }

    //! Atualizar aluno
    @Patch(':id')
     @ApiOperation({
        summary: 'Atualiza dados de um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'dados do aluno atualizado com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo id',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ao buscar detalhes do aluno'
    })
    update(
        @Param('id') id: string,
        @Body() uptadateAlunoDto: UptadateAlunoDto
    ) {
        return this.alunoService.update(id, uptadateAlunoDto);
    }

    //! Remover aluno
    @Delete(':id')
     @ApiOperation({
        summary: 'Remova um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Aluno removido com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado pelo id',
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do servidor ao remover aluno'
    })
    remove(@Param('id') id: string) {
        return this.alunoService.remove(id);
    }
}
