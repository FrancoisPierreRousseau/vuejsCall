const client = {
    namespaced: true,

    state: {
        all: [Object],
    },

    mutations: {
        setState(state, {collectionClient}) {
            state.all = collectionClient;
        }
    },

    actions: {
        initAll(context, {api}) {
            context.commit('setState', {collectionClient: api.client.all()})
        }
    }
}

export default client
