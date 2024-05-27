<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step -= 1 ">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 0"  @click="step += 3 ">팔로워</li>
      <li v-if="step == 1"  @click="step += 1 ">Next</li>
      <li v-if="step == 2 " @click="publish">발행</li>

    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

<!--  <p>{{ // $store.state.more}}</p>-->
<!--  <button @click="$store.dispatch('getData')">더보기</button>-->

<!--  <h4> 안녕 { $store.state.name }}</h4>-->
<!--  <h4>{{ $store.state.age }}</h4>-->
<!--  <h4>{{age}}</h4>-->
<!--  <button @click="plus_age(10)">증가</button>-->
<!--  <button @click="$store.commit('change_name')">버튼</button>-->
  <!--  <button @click="$store.commit('plus_age' , 10)">버튼</button>-->

  <Container :change_filter="change_filter" @input_content="update_input_content" :upload_image="upload_image" :step="step" :blog_post="blog_post"/>


  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/**" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <div class="" style="margin-top: 500px"></div>

</template>

<script>
import Container from './components/Container.vue';
import blog from './assets/data.js';
import axios from "axios";
import {mapMutations, mapState} from "vuex";


var get_Number = 0
export default {
  name: 'App',
  data(){
    return{
      step : 0,
      blog_post : blog ,
      upload_image : '',
      input_content : '',
      change_filter : '',
      counter : 0,
    }
  },
  methods :{

    ...mapMutations(['plus_age']),


    more(){
      axios.get(`https://codingapple1.github.io/vue/more${get_Number}.json`)
          .then(result =>{
            this.blog_post.push(result.data);
            get_Number += 1
          })
    },
    upload(e){
      let a = e.target.files;
      this.upload_image =  URL.createObjectURL(a[0])
      this.step = 1;
      console.log(this.upload_image)

    },
    publish(){
      var add_post = {
          name: "Kim Hyun",
          userImage: "https://picsum.photos/100?random=3",
          postImage : this.upload_image ,
          likes: 36,
          date: "May 15",
          liked: false,
          content: this.input_content,
          filter: this.change_filter
      };
      this.blog_post.unshift(add_post)
      this.step = 0;
    },
    update_input_content(content){
      this.input_content = content
    } ,
    now2(){
      return new Date()
    },
  },
  mounted() {
    this.emitter.on('fire_filter_class' , (a)=> {
      this.change_filter = a
    })
  },
  components: {
    Container : Container
  },


  computed : {
    name(){
      return this.$store.state.name
    },
    age(){
      return this.$store.state.age
    },
    ...mapState(['name', 'age' , 'likes'])
  }
}
</script>

<style>

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
}
.filters{
  overflow-x:scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}

</style>
