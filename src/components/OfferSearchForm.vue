<template>
  <div>
    <form>
      <div class="container">
        <div class="form-row">

          <div class="input-group col-md-5 px-3 my-1">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="zmdi zmdi-search search-form-icon text-danger font-size-1"></i>
              </span>
            </div>
            <input class="form-control form-control-lg" placeholder="Branża lub stanowisko">
          </div>

          <div class="input-group col-md-5 px-3 my-1">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="zmdi zmdi-pin search-form-icon text-danger font-size-1"></i>
              </span>
            </div>
            <input class="form-control form-control-lg" placeholder="Kraj, region lub miasto w Europie">
          </div>

          <div class="form-group col-md-2 px-3 my-1">
            <button class="btn btn-lg btn-block btn-danger font-size-1 font-weight-bold" type="submit">Szukaj</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "OfferSearchForm"
    }
</script>

<style lang="scss" scoped>

</style>