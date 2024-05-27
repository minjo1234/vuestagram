<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="아이디를 입력해주세요" @input="doThis"/>
<!-- fM == follwerMember -->

    <div v-if="step == 0">
    <div class="post-header"  v-for="fM in follower" :key="fM">
      <div class="profile" :style="{ backgroundImage : `url(${fM.image})` }"></div>
      <span class="profile-name">{{fM.name}}</span>
    </div>
    </div>

    <div v-if="step == 1 ">
    <div class="post-header"  v-for="fM in search_follower" :key="fM">
      <div class="profile" :style="{ backgroundImage : `url(${fM.image})` }"></div>
      <span class="profile-name">{{fM.name}}</span>
    </div>
    </div>
  </div>
</template>

<script >
import {computed, onMounted, reactive, ref, toRefs, watch} from "vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
  name : 'mypage',
  props : {
    one : Number
  },

  computed: {
  },

  setup(props) {
    let follower = ref([]);
    let test = reactive({name: 'kim'})

    let search_follower = ref([]);
    let step = ref(0)
    let {one} = toRefs(props);
    console.log(step.value)

    function doThis(event) {
      search_follower.value = []
      step.value = 1
      for (var i = 0; i < follower.value.length; i++) {
        // 5개씩 출력되는거 확인하였음
        if (follower.value[i].name.includes(event.target.value) == true){
              search_follower.value.push(follower.value[i])
              console.log(step.value)
        }
        // if (follower.value[i].name.contains(event.target.value)){
        //   console.log(event.target.value)
      }

    }

    watch(one, () => {
      if (one.value != 1) {
        console.log('아 시발 1이 아니네 ㅋㅋ')
      }
    })

    let result = computed(() => {
      return follower.value.length
    })
    console.log(result.value)
    result;
    one;
    test;
      let store = useStore()
    console.log(store.state.name)


    onMounted(() => {
      axios.get('/follower.json').then((a) => {
        follower.value = a.data
      })
    })
    return {follower, doThis , search_follower , step}

  },
  data() {
    return {

    }
  },
}
</script>


<style scoped>

</style>