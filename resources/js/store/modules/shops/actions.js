import api from '../../api/app'
import * as actionTypes from '../../action-types'
import * as mutationTypes from '../../mutation-types'
/** Чтобы код был наглядным, я задублировал код с users/actions */
/** А вообще лучше вынести этот код в отдельный класс и повторно заюзать */
/** Пример можно посмотреть в getters и в mutations */
export default {
    [actionTypes.A_GET_LIST]: (context, payload) => {
        api.post('/api/shops/all').then(res => {
            /** Добавляем через mutations результат в state */
            context.commit(mutationTypes.M_SET, res.data)
        });
    },
    [actionTypes.A_ADD]: (context, payload) => {
        console.log('save', payload)
        api.post('/api/shops/save', payload).then(res => {
            if (res.status === 200) {
                console.log('axios', res.data)
                /** Добавляем через mutations новый элемент в state */
                context.commit(mutationTypes.M_ADD, res.data);
            }
        }).catch(e => {
            alert('Ошибка. Все поля должны быть заполнены')
        });
    },
    [actionTypes.A_UPDATE]: (context, payload) => {
        console.log(actionTypes.A_UPDATE, payload)
        /** Представим, что сохранили*/
        alert('Успешно обновилось')
        // api.post('/api/shops/save', payload).then(res => {
        //     if (res.status === 200) {
        //         console.log('axios', res.data)
        //         alert('Update - Success')
        //     }
        // }).catch(e => {
        //     alert('Update - Error')
        // });
    },
    [actionTypes.A_DELETE]: (context, payload) => {
        // api.post('/api/shops/delete', {id:payload.id}).then(res => {
        //     if (res.status === 200) {
        //         console.log('axios delete', res.data)
        //         /** Удаляем через mutations элемент в state */
        //         context.commit(mutationTypes.M_DELETE, payload)
        //         alert('Delete - Success')
        //     }
        // }).catch(e => {
        //     alert('Delete - Error')
        // });
        /** Представим, что сервер успешно удалил запись, теперь удаляем из state */
        context.commit(mutationTypes.M_DELETE, payload)
    },
}
