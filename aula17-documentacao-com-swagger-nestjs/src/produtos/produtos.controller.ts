import { Controller, Post, Body } from "@nestjs/common";    
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CriarProdutoDto } from "./dto/criar-produtos.dto.js";

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
    @Post()
    @ApiOperation({ summary: 'Cadastrar um novo produto np catálogo' })
    @ApiResponse({ status:201, description: 'Produto cadastrado com sucesso' })
    @ApiResponse({ status:400, description: 'Playload enviado com dados inválidos'})
    async criar(@Body() criarProdutoDto: CriarProdutoDto){
        return{
            id: 150, 
            ...CriarProdutoDto,
            criadoEm: new Date().toLocaleDateString(),
        };
    }
}