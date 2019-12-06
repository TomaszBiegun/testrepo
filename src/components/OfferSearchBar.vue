<template>
  <div class="container-lg position-relative">
    <div class="search-job-box">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active font-size-1 font-weight-bold" id="home-tab" data-toggle="tab" href="#home"
             role="tab"
             aria-controls="home"
             aria-selected="true">Oferty</a>
        </li>

      </ul>
      <div class="tab-content shadow" id="myTabContent">
        <div class="tab-pane fade show active bg-white py-4" id="home" role="tabpanel"
             aria-labelledby="home-tab">

          <offer-search-form/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import OfferSearchForm from "./OfferSearchForm";

    export default {
        name: "OfferSearchBar",
        components: {OfferSearchForm},
        methods: {}
    }


</script>

<style lang="scss" scoped>
  @import '../assets/scss/app';

  .nav-tabs {
    .nav-link {
      padding: 6px 30px;

      &.active {
        background-color: $yellow;
        border-color: $yellow;
        color: $white;
      }
    }

    border: none;
  }

  .search-job-box {
    position: absolute;
    margin-top: 50px;
    left: 0;
    right: 0;
  }

  .tab-content {
    border-radius: 0 $border-radius $border-radius $border-radius;
    border-top: 4px solid $yellow;

    .tab-pane {
      border-radius: 0 0 $border-radius $border-radius;
    }
  }


</style>