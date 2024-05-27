<template>
  <div v-for="(a, i) in blog_post" :key="i">
    <div class="post">
      <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
      <div @click="$store.commit('plus_like' , i)" :class="change_filter" class="post-body" :style="{ backgroundImage : `url(${a.postImage})` }"></div>
      <div class="post-content">
        <p>{{ $store.state.likes[i] }} Likes</p>
        <p><strong>{{ a.name }}</strong>{{ a.content }}</p>
        <p class="date">{{ a.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'Post',
  props : {
    blog_post : Array,
    change_filter : String
  },
  data(){
    return{

    }
  },
  components: {},
})
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>