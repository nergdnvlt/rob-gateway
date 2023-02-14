// External Dependencies
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

export async function buildGateway(port) {
    const gateway = new ApolloGateway({});
  
    const server = new ApolloServer({
      gateway,
    });
    const { url } = await server.listen(port);
    console.log(`Gateway running ${url}`);
}

(async () => {
    await buildGateway(8080);
})();