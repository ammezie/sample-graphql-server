'use strict'

const ApolloServer = use('ApolloServer')

const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Query {
        testString: String
    }
`

const resolvers = {
    Query: {
        testString: () => {
            return 'Seems to be working!'
        }
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const options = {
    graphql: {
        schema
    },
    graphiql: {
        endpointURL: '/graphql'
    }
}

class SampleController {
    graphql () {
        return ApolloServer
        ApolloServer.graphql(options.graphql)
    }

    graphiql () {
        console.log(ApolloServer)
        ApolloServer.graphiql(options.graphiql)
    }
}

module.exports = SampleController
