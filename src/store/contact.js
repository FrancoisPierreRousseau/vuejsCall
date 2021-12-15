const contact = {
    namespaced: true,

    state: {
        all: [Object],
    },

    mutations: {
        setState(state, {collectionContact}) {
            state.all = collectionContact;
        }
    },

    actions: {
        init(context, {api}) {
            context.commit('setState', {collectionContact: api.contact.all()})
        }
    }
}

export default contact
