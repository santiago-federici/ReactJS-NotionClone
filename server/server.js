import { createApp } from './app.js'

import { AuthModel } from './models/SQLite/auth.js'
import { UserModel } from './models/MySQL/users.js'
import { TableModel } from './models/MySQL/tables.js'
import { RowModel } from './models/MySQL/rows.js'

createApp({ userModel: UserModel, tableModel: TableModel, rowModel: RowModel, authModel: AuthModel })
