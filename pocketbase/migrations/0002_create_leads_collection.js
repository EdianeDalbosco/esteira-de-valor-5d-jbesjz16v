migrate(
  (app) => {
    const collection = new Collection({
      name: 'leads',
      type: 'base',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'name', type: 'text', required: true, min: 2, max: 200 },
        { name: 'email', type: 'email', required: true },
        { name: 'whatsapp', type: 'text', required: true, min: 8, max: 30 },
        { name: 'message', type: 'text', required: false, max: 2000 },
        { name: 'interest', type: 'text', required: false, max: 200 },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_leads_email ON leads (email)',
        'CREATE INDEX idx_leads_created ON leads (created DESC)',
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('leads')
    app.delete(collection)
  },
)
