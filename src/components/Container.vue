<template>
    <div v-if="step==0" >
      <Post :change_filter="change_filter"  :blog_post="blog_post"/>
    </div>

  <div v-if="step==1">
  <!-- 필터선택페이지 -->
  <div :class="change_filter" class="upload-image" :style="{ backgroundImage : `url(${upload_image})` }"></div>
  <div class="filters" >
    <Filterbox v-for="Filter in Filter_list" :key="Filter" :upload_image="upload_image" :filter_update="Filter">
      <span>{{Filter}}</span>
    </Filterbox>

  </div>
  </div>

  <div  v-if="step==2">
  <!-- 글작성페이지 -->
  <div :class="change_filter" class="upload-image" :style="{ backgroundImage : `url(${upload_image})` }"></div>
  <div class="write">
    <textarea @input="onChange($event)" class="write-box">write!</textarea>
  </div>
  </div>

  <div v-if="step == 3">
    <MyPage :one="1"/>
  </div>
</template>

<script>

import Post from "./Post.vue";
import Filterbox from "./FilterBox.vue";
import MyPage from "./MyPage.vue";

export default {
  name : "Cotainer",
  props : {
    blog_post : Array,
    step : Number,
    upload_image : String,
    change_filter : String
  },
  data(){
    return {
      Filter_list : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]

    }
  },
  methods : {
    onChange(event){
      this.$emit('input_content' , event.target.value)
    }
  },
  components: {Post, Filterbox, MyPage},

}
</script>


<style>

</style>