import { Controller, Post, Body, UsePipes } from "@nestjs/common";
import type { Colaborador } from "./colaborador.schema.js";
import { colaboradorSchema} from "./colaborador.schema.js";
import { ZodValidationPipe } from "./zod-validation.pipe.js";

@Controller('colaboradores')
export class ColaboradorController{
    @Post()
    @UsePipes(new ZodValidationPipe(colaboradorSchema))
    async create(@Body() body: Colaborador){
        return {
            message: 'Colaborador criado como sucesso!',
            colaborador: body, 
        }
    }
}