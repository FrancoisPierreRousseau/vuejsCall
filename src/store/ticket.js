const ticket = {
    namespaced: true,

    state: {
        all: [Object],
    },

    mutations: {
        setState(state, {collectionTicket}) {
            state.all = collectionTicket;
        }
    },

    actions: {
        initAll(context, {api}) {
            context.commit('setState', {collectionTicket: api.ticket.all()})
        }
    },

    getters: {
        distinctStates: state => new Set([...state.all.map(ticket => ticket.Etat)])
    },
}

export default ticket
