import {
    GraphQLServer
} from 'graphql-yoga';

// types
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`;

// resolvers
const resolvers = {
    Query: {
        hello() {
            return 'First';
        },
        name() {
            return 'Name';
        },
        location() {
            return 'fasdfa';
        },
        bio() {
            return 'bio';
        }
    }
};

const server = new GraphQLServer({
    typeDefs, resolvers
});

server.start(() => {
    console.log('started');
});
