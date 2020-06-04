import * as getterType from '../store/getter-types'
export default {
    [getterType.G_LIST]: state => {
        return state[getterType.G_LIST]
    },
    [getterType.G_ONE]: state => id => {
        console.log('g id', id)
        return  state[getterType.G_LIST].find(el => el.id == id)
    },
}
