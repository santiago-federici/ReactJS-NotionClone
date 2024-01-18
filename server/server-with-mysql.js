import { createApp } from './app.js'

import { AuthModel } from './models/auth.js'
import { UserModel } from './models/users.js'
import { TableModel } from './models/tables.js'

createApp({ userModel: UserModel, tableModel: TableModel, authModel: AuthModel })
