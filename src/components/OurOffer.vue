<template>
  <div class="card h-max"
       v-on:mouseover="hoverState=false"
       v-on:mouseleave="hoverState=true"
       :class="{ 'hover': !hoverState }"
  >
    <img v-if="hoverState" :src="imageSrc" class="card-img-top mx-auto mw-150" alt="...">
    <img v-else :src="hiddenImageSrc" class="card-img-top mx-auto mw-150" alt="...">

    <div class="card-body text-center px-3 pb-4 pt-2">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text text-muted pb-1">{{ text }}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OurOffer",
        data() {
            return {
                hoverState: true
            }
        },
        props: {
            imageSrc: String,
            hiddenImageSrc: String,
            title: String,
            text: String,
        },
        methods: {}
    }
</script>

<style scoped>
  .hover{
    transform: translate3d(0px, -5px, 0px);
    box-shadow: 0px 25px 30px -7px rgba(0, 0, 0, 0.15);
  }
</style>