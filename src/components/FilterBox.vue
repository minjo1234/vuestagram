<template>
<!--  <div class="filter-1 filter-item-item " :style="{ backgroundImage : `url(${upload_image})`}"></div>-->
  <div :class="filter_update" class="filter-1" :style="{ backgroundImage : `url(${upload_image})`}">
    <slot></slot> <br>
    <button @click="fire">필터변경</button>
  </div>
</template>


<script>

export default {
  name : 'filterbox',
  props : {
    upload_image : String,
    filter_update : String
  },
  methods : {
    fire(){
      this.emitter.emit('fire_filter_class' , this.filter_update )
    }
  }
}
</script>


<style>

</style>
<script setup>
</script>