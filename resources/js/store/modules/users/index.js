import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import * as getterTypes from '../../getter-types'

/** Храним список users под ключом getterTypes.G_LIST */
const state = {}
state[getterTypes.G_LIST] = []

export default {
    namespaced: true,
    state, /** Храним состояние */

    getters, /** Только получаем состоние, через ...mapGetters()*/

    actions, /** Это точка входа, типа Controller*/

    mutations /** Controller через коммит дает команду что мутировать */
    /** В Мутациях мы производим изменения Состояния  */
    /** Вся эта сложность связана с реактивностью   */
    /** Ну и с распределением ответственности  */
}
