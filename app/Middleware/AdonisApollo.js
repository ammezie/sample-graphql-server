'use strict'

class AdonisApollo {
  async handle ({ request, response }, next) {
    // call next to advance the request
    return response.json('Something')
    await next()
  }
}

module.exports = AdonisApollo
