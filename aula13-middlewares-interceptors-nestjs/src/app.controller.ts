import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get ()
  getPulbic(){
    return{
      mensagem: 'Rota Publica acessada com sucesso!',
      data: new Date(),
      
    }
  }

  @Get('admin')
  getAdmin(){
    return{
      mensagem: 'Bem-vindo ao Painel administrativo!',
      data: new Date(),
    }
  }
}
