migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    const seeds = [
      {
        name: 'Mariana Costa',
        email: 'mariana.costa@email.com',
        whatsapp: '(11) 98765-4321',
        message:
          'Tenho mais de 10 anos de experiência em marketing e quero transformar isso em uma mentoria estruturada.',
        interest: 'Mentoria 5D',
      },
      {
        name: 'Rafael Mendes',
        email: 'rafael.mendes@email.com',
        whatsapp: '(21) 99876-5432',
        message:
          'Sou consultor financeiro e quero escalar meu atendimento para além do modelo de horas.',
        interest: 'Escalonamento de negócio',
      },
    ]

    for (const seed of seeds) {
      try {
        app.findFirstRecordByData('leads', 'email', seed.email)
      } catch (_) {
        const record = new Record(col)
        record.set('name', seed.name)
        record.set('email', seed.email)
        record.set('whatsapp', seed.whatsapp)
        record.set('message', seed.message)
        record.set('interest', seed.interest)
        app.save(record)
      }
    }
  },
  (app) => {
    const emails = ['mariana.costa@email.com', 'rafael.mendes@email.com']
    for (const email of emails) {
      try {
        const record = app.findFirstRecordByData('leads', 'email', email)
        app.delete(record)
      } catch (_) {}
    }
  },
)
