import { createApp } from './app.js'

import { PageModel, UserModel } from './database/users.js'

createApp({ userModel: UserModel, pageModel: PageModel })
