import { createApp } from './app.js'

import { UserModel, TableModel, AuthenticationModel } from './database/models.js'

createApp({ userModel: UserModel, tableModel: TableModel, authenticationModel: AuthenticationModel })
