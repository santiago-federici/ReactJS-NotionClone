import { createApp } from './app.js'

import { PageModel, UserModel } from './database/models.js'

createApp({ userModel: UserModel, pageModel: PageModel })
