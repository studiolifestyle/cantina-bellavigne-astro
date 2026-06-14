import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'titolo',
      path: 'src/content/blog/*',
      format: { contentField: 'corpo' },
      schema: {
        titolo: fields.slug({ name: { label: 'Titolo' } }),
        data: fields.date({ label: 'Data di pubblicazione' }),
        descrizione: fields.text({ label: 'Descrizione breve', multiline: true }),
        corpo: fields.markdoc({ label: 'Contenuto articolo', extension: 'md' }),
      },
    }),

    vini: collection({
      label: 'Vini',
      slugField: 'nome',
      path: 'src/content/vini/*',
      format: { contentField: 'note' },
      schema: {
        nome: fields.slug({ name: { label: 'Nome vino' } }),
        tipo: fields.text({ label: 'Tipo (es. Rosso DOC)' }),
        categoria: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Rosso', value: 'rosso' },
            { label: 'Bianco', value: 'bianco' },
            { label: 'Rosato', value: 'rosato' },
          ],
          defaultValue: 'rosso',
        }),
        annata: fields.integer({ label: 'Annata' }),
        prezzo: fields.number({ label: 'Prezzo (€)' }),
        immagine: fields.text({ label: 'Percorso immagine (es. /img/nome.jpg)' }),
        altImmagine: fields.text({ label: 'Testo alternativo immagine' }),
        note: fields.markdoc({ label: 'Descrizione breve', extension: 'md' }),
      },
    }),
  },
});
