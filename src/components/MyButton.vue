<template>
  <div>
    <button @click="handleClick">{{ message }}</button>
  </div>
</template>

<script>
    export default {
        name: "MyButton",
        props: {
            message: {
                type: String,
                default: 'pusty'
            }
        },
        methods: {
            handleClick(e) {
                this.$emit('myEmittedEvent', e)
            }
        }
    }
</script>

<style scoped>

</style>