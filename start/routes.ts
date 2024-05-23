/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel';
import UserLocationMiddleware from '#middleware/user_location_middleware';


router.get('hello', async () => {
  return 'Hello, world!';
}).middleware([UserLocationMiddleware]);

export default router;