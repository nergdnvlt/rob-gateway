// External Dependencies
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
const { ApolloServerPluginInlineTraceDisabled } = require("apollo-server-core");

export async function buildGateway(port) {
    const gateway = new ApolloGateway({});
  
    const server = new ApolloServer({
      gateway,
      plugins: [
        ApolloServerPluginInlineTraceDisabled(),
      ],
    });
    const { url } = await server.listen(port);
    console.log(`Gateway running ${url}`);
}

(async () => {
    await buildGateway(8080);
})();