<template>
  <div :class="{ 'bg-light': bgColor }">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-6">
          <div class="d-flex h-350">
            <img :src="this.imageSrc" class="card-img" alt="Test">
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center text-max-md-center pb-max-md-5">
          <div class="card-body px-0">
            <h2 class="card-title font-weight-normal">{{ title }}</h2>
            <p class="card-text font-size-1 text-muted my-4">{{ message }}</p>
            <a :href="btnLink" class="btn btn-danger btn-md font-weight-bold">{{ btnText }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            bgColor: Boolean,
            imageSrc: String,
            title: String,
            message: String,
            btnText: String,
            btnLink: String
        },
        name: "Zone"
    }
</script>

<style scoped>

</style>