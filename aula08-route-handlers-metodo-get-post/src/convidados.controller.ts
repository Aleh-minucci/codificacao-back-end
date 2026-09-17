import { Controller, Get, Post, Body } from "@nestjs/common";
import { CriarConvidadoDto } from "./dto/criar-convidado.dto.js";

@Controller('convidados')
export class ConviddadosController{

    @Get()
    listarConvidados(){
        return['Amanda','Davi', 'Adam', 'Gabrielly', 'Yuri'];
    }

    @Post()
    criar(@Body() CriarConvidadoDto: CriarConvidadoDto){
        console.log(`[PORTEIRO DIGITAL] Novo convidado recebido: ${CriarConvidadoDto.nome}`);

        return {
            mensagem: `Convidado ${CriarConvidadoDto.nome} Adicionado com sucesso!`, 
            dados: CriarConvidadoDto,
        };
    }
}