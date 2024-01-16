import { User } from './users.js'
import { Table } from './tables.js'
import { Row } from './rows.js'

User.hasMany(Table, { foreignKey: 'userId' })
Table.belongsTo(User, { foreignKey: 'userId' })

Table.hasMany(Row, { foreignKey: 'tableId' })
Row.belongsTo(Table, { foreignKey: 'tableId' })

export { User, Table, Row }
