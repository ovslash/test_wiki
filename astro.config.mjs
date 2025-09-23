// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ovslash.github.io/test_wiki',
  base: '/test_wiki/',
  integrations: [
    starlight({
      lastUpdated: true,
      title: 'Mon Aide-Mémoire',
      sidebar: [
        {
          label: 'Bienvenue !',
          slug: 'index',       
        },
        {
          label: 'Base de données',
          items: [
            {label: 'Psql', link: 'bdd/psql' },
            {label: 'PostgreSQL', link: 'bdd/postgres' },
            
          ]
        },
        {
          label: 'Astro - Starlight',
          items: [
            {label: 'Présentation', link: 'astro/presentation' },
            {label: 'Fonctionnalités', link: 'astro/fonctionnalites' },
                                  ]
        },
        {
          label : 'Git',
          items: [
            {label: 'Présentation', link: 'git/presentation'},
          ]
        },
      ],
    }),
  ],
});
