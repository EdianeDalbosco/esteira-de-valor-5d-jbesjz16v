migrate(
  (app) => {
    var users = app.findCollectionByNameOrId('_pb_users_auth_')

    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'edianedalbosco@gmail.com')
    } catch (_) {
      var record = new Record(users)
      record.setEmail('edianedalbosco@gmail.com')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Admin')
      app.save(record)
    }

    var leadsCol = app.findCollectionByNameOrId('leads')
    leadsCol.listRule = "@request.auth.id != ''"
    leadsCol.viewRule = "@request.auth.id != ''"
    leadsCol.updateRule = "@request.auth.id != ''"
    leadsCol.deleteRule = "@request.auth.id != ''"
    app.save(leadsCol)
  },
  (app) => {
    var leadsCol = app.findCollectionByNameOrId('leads')
    leadsCol.listRule = null
    leadsCol.viewRule = null
    leadsCol.updateRule = null
    leadsCol.deleteRule = null
    app.save(leadsCol)

    try {
      var record = app.findAuthRecordByEmail('_pb_users_auth_', 'edianedalbosco@gmail.com')
      app.delete(record)
    } catch (_) {}
  },
)
