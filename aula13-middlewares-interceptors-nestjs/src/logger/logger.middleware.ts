import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const rota =req.originalUrl || req.url;
    console.log(`[LOG] Método: ${req.method} | Rota: ${rota}`);

    if(rota.startsWith('admin')){
      const role = req.headers['api-key-admin'];
      
      if(role !== 'administrator'){
        return res.status(403).json({
          statusCode: 403,
          message: 'Acesso Negado: Privilégio de Supervisor Necessário!',
          log: new Date()
        });
      }
    }
    next();
  }
}
