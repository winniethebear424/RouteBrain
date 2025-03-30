import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String
    }

    type Route {
        from: String!
        to: String!
        message: String!
    }

    type Mutation {
        createRoute ( from: String!, to: String!): Route
    }
    `;

    const resolvers = {
        Query: {
            hello:() => " hello world",
        },
        Mutation: {
            createRoute: (_: unknown, { from, to }: { from: string, to: string }): { from: string, to: string, message: string } => {
              if (!from || !to) {
                throw new Error('Both "from" and "to" fields are required.');
              }
              return {
                from,
                to,
                message: `Route from ${from} to ${to} has been created.`,
              };
            },
        },
    };




export { typeDefs, resolvers };