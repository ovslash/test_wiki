// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Mon Aide-Mémoire',
      sidebar: [
        {
          label: 'Bienvenue !',
          slug: 'index',       
        },
		{
			label: 'Base de données',
			items: [
				{label: 'psql', link: 'bdd/psql' },
				{label: 'postgreSQL', link: 'bdd/postgres' },
				
			]
		}
      ],
    }),
  ],
});
