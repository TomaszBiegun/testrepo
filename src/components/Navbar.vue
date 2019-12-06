<template>
  <div>
    <div class="jumbotron background-primary">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light pt-1 pb-1" :class="{'navbar-white':scrolled}">
        <div class="container-lg">
          <a class="navbar-brand" href="#">
            <img v-if="!scrolled" src="static/logo.svg">
            <img v-else src="static/logo2.svg">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Oferty pracy <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Strefa pracodawcy</a>
              </li>
              <li class="nav-item nav-btn ml-1 mr-1">
                <a class="nav-link" href="#">Dodaj ofertę pracy</a>
              </li>
            </ul>

            <ul class="navbar-nav navbar-nav-separated">
              <li class="nav-item">
                <a class="nav-link" href="#">Załóż konto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Logowanie</a>
              </li>
            </ul>

            <ul class="navbar-nav ml-2">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  PL
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>


          </div>
        </div>
      </nav>

      <h1 class="text-white text-center mt-5">Oferty pracy z kraju i
        <span class="text-primary font-weight-bold">Europy</span>
      </h1>

      <offer-search-bar/>
    </div>
  </div>
</template>

<script>
    import OfferSearchBar from "./OfferSearchBar";

    export default {
        name: "Navbar",
        data() {
            return {
                scrolled: false
            }
        },
        components: {OfferSearchBar},
        methods: {
            handleScroll() {
                this.scrolled = window.scrollY > 0;
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/app';

  .jumbotron {
    border-radius: 0;
    min-height: 300px;

    h1 {
      font-size: 2rem;
      font-weight: 300;
    }

    &.background-primary {
      background: url('../../public/static/bg-primary.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .navbar {
    background-color: transparent;

    .navbar-nav {
      &.navbar-nav-separated {
        .nav-item:not(:last-of-type) {
          position: relative;
        }

        .nav-item:not(:last-of-type):after {
          content: " ";
          position: absolute;
          top: 10px;
          right: 0;
          display: block;
          width: 1px;
          height: 15px;
          background-color: #fff;
        }
      }

      .nav-item {
        &.dropdown {

          & > a {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: $border-radius;
            padding: 7px 12px;

            &::after {
              margin-left: 0.055em;
              vertical-align: 0.2em;
            }
          }
        }


        .nav-link {
          color: $white;
          font-weight: 500;
          padding: 7px 16px;
        }

        &.active, &:hover {
          & > .nav-link {
            color: $primary;
          }
        }

        &.nav-btn > .nav-link {
          color: $primary;
          border: 1px solid $primary;
          border-radius: $border-radius;

          &:hover {
            background-color: $primary;
            color: $white;
          }
        }
      }
    }

    .navbar-brand {
      img {
        height: 35px;
      }
    }

    &.navbar-white {
      background-color: $white;

      .nav-item {
        .nav-link {
          color: $gray-dark;
        }

        &.nav-btn > .nav-link {
          background-color: $primary;
          color: $white;
          box-shadow: $box-shadow-yellow;

          &:hover {

          }
        }

        &:not(:last-of-type):after {
          background-color: $gray-dark !important;
        }
      }
    }
  }
</style>