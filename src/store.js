import {createStore}  from "vuex";
import axios from "axios";
const store = createStore({
    state () {
        return {
            name : 'kim',
            age : 20,
            likes : [36,20,49],
            checkNum_list : [],
            more : {},
            get_Number : 0
        }
    },
    mutations : {

        setMore(state, data){
            state.more = data
        },
        change_name(state){
            state.name = 'park';
        },
        plus_age(state, plus_num){
            state.age += plus_num;
        },
        plus_like(state , i){
            // 해당 Index를 새로운 배열에 넣는 방식으로 이로 해결한다.

            if(state.checkNum_list.indexOf(i) != -1) {
                state.likes[i] -= 1;
                state.checkNum_list.splice(state.checkNum_list.indexOf(i),state.checkNum_list.indexOf(i)+1);
            } else {
                state.checkNum_list.push(i);
                state.likes[i] += 1;
            }
        }
    },
    actions : {
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
                .then((a)=>{
                    console.log(a);
                    context.commit('setMore', a.data);
            })
        }
    }

})

export default store;