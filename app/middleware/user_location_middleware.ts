import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { Exception } from '@adonisjs/core/exceptions'

export default class UserLocationMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    // Verificar la ubicación del usuario o realizar alguna lógica relacionada
    console.log('Middleware UserLocation ejecutado');

    
    //throw new Exception('Aborting request')
  //await next();
    // Continuar con el siguiente middleware en la cadena
    await next();
  }
}






