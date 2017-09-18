'use strict'

const Route = use('Route')

// Route.get('/', ({ response }) => {
//     return response.json('Something')
// })

Route.route('/graphql', 'SampleController.graphql', ['GET', 'POST'])
Route.get('/graphiql', 'SampleController.graphiql')