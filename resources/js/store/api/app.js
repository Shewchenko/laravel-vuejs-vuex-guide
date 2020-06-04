import axios from "axios";

export default {

    async post(url, params){
        // axios.post(url, this.getFormData(params)).then((response) => {
        console.log('post')
        return await axios.post(url, params);
    },
    getFormData(params){
        let form = new FormData(), i;
        for(i in params){
            form.append(i, params[i]);
        }
        return form;
    },

}
