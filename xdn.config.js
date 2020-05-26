module.exports = {
  routes: './src/routes.ts',
  backends: {
    origin: {
      domainOrIp: 'moovdemo.myshopify.com',
      hostHeader: 'moovdemo.myshopify.com',
    },
    // origin: {
    //   domainOrIp: 'mgusmano.myshopify.com',
    //   hostHeader: 'mgusmano.myshopify.com',
    // },
  },
}
