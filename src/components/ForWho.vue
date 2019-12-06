<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="col-sm-6 order-max-sm-1" :class="{ 'order-2' : revert }">
        <div class="d-flex h-300">
          <img :src="this.imageSrc" class="card-img" alt="Test">
        </div>
      </div>
      <div class="col-sm-6 d-flex align-items-center text-max-sm-center order-max-sm-2" :class="{ 'order-1 text-right' : revert }">
        <div class="card-body">
          <h2 class="card-title font-weight-normal">{{ title }}</h2>
          <p class="card-text font-size-1 text-muted my-4">{{ message }}</p>
          <a :href="btnLink" class="btn btn-danger btn-md font-weight-bold">{{ btnText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            revert: Boolean,
            imageSrc: String,
            title: String,
            message: String,
            btnText: String,
            btnLink: String
        },
        name: "ForWho",
    }
</script>

<style scoped>

</style>