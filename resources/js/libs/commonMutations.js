import * as mutations from "../store/mutation-types";
import * as getters from "../store/getter-types";
export default {
    [mutations.M_SET](state, payload) {
        console.log('M', payload)
        state[getters.G_LIST] = payload
    },
    [mutations.M_ADD](state, payload) {
        console.log('M ADD', payload)
        state[getters.G_LIST].push(payload)
    },
    [mutations.M_DELETE](state, payload) {
        let index = state[getters.G_LIST].findIndex(elem => elem.id == payload.id)
        state[getters.G_LIST].splice(index, 1);
    },
}
