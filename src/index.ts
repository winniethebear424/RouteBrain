//  set up basic server:

import express, {Application} from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/schema';

const app: Application = express();

// set up apolo server with typeDefs and resolvers
async function startServer(){
    const server = new ApolloServer({typeDefs, resolvers});
    await server.start(); // Start the Apollo Server
    // Apply the Apollo GraphQL middleware to the Express app
    server.applyMiddleware({ app });


    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer().catch((error) =>{
    // Handle server start errors
    console.error('Failed to start the server:', error);
})

