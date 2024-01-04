import { createApp } from './app.js'

import { UserModel, TableModel } from './database/models.js'

createApp({ userModel: UserModel, tableModel: TableModel })
