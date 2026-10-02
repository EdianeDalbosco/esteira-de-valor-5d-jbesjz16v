onRecordAfterCreateSuccess((e) => {
  try {
    const record = e.record

    const name = record.getString('name')
    const email = record.getString('email')
    const whatsapp = record.getString('whatsapp')
    const message = record.getString('message')
    const interest = record.getString('interest')

    var htmlBody =
      '<!DOCTYPE html><html><body>' +
      "<h2 style='color:#0F172A;'>Novo Lead Cadastrado!</h2>" +
      "<table style='border-collapse:collapse;width:100%;max-width:500px;'>" +
      "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Nome</td><td style='padding:8px;border:1px solid #ddd;'>" +
      name +
      '</td></tr>' +
      "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Email</td><td style='padding:8px;border:1px solid #ddd;'>" +
      email +
      '</td></tr>' +
      "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>WhatsApp</td><td style='padding:8px;border:1px solid #ddd;'>" +
      whatsapp +
      '</td></tr>' +
      "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Interesse</td><td style='padding:8px;border:1px solid #ddd;'>" +
      interest +
      '</td></tr>' +
      "<tr><td style='padding:8px;border:1px solid #ddd;font-weight:bold;'>Mensagem</td><td style='padding:8px;border:1px solid #ddd;'>" +
      message +
      '</td></tr>' +
      '</table>' +
      "<p style='color:#666;font-size:12px;margin-top:16px;'>Este e um email automatico. Nao responda.</p>" +
      '</body></html>'

    var textBody =
      'Novo Lead Cadastrado!\n\n' +
      'Nome: ' +
      name +
      '\n' +
      'Email: ' +
      email +
      '\n' +
      'WhatsApp: ' +
      whatsapp +
      '\n' +
      'Interesse: ' +
      interest +
      '\n' +
      'Mensagem: ' +
      message

    try {
      var mailClient = $app.newMailClient()
      mailClient.send({
        from: { address: 'noreply@esteiradevalor.com', name: 'Esteira de Valor 5D' },
        to: [{ address: 'edianedalbosco@gmail.com', name: 'Ediane Dalbosco' }],
        subject: 'Novo Lead Recebido: ' + name,
        html: htmlBody,
        text: textBody,
      })
    } catch (mailErr) {
      try {
        $app
          .logger()
          .error(
            'Failed to send lead notification email',
            'error',
            mailErr.message || String(mailErr),
            'lead',
            name,
            'email',
            email,
          )
      } catch (_) {}
    }

    try {
      $app
        .logger()
        .info(
          'New lead registered',
          'name',
          name,
          'email',
          email,
          'whatsapp',
          whatsapp,
          'interest',
          interest,
        )
    } catch (_) {}
  } catch (outerErr) {
    try {
      $app
        .logger()
        .error(
          'Unexpected error in notify_lead hook',
          'error',
          outerErr.message || String(outerErr),
        )
    } catch (_) {}
  }

  return e.next()
}, 'leads')
