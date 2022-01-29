export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f58dbb59dcbfc5b575f407',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k8sifppd',
                  apiId: 'dee24224-bc04-40e9-9825-76456548b2b0'
                },
                {
                  buildHookId: '61f58dbbe3210990231bbecd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sjkm6ymg',
                  apiId: '49ca3fcd-6b83-42ae-b206-f328e51cfe4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JetmirAhmati/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sjkm6ymg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
