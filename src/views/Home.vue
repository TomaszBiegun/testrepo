<template>
  <div class="home">
    <navbar/>

    <div class="pt-130"></div>
    <for-who
            :revert=false
            imageSrc="static/for-employer.svg"
            title="Dla pracodawcy"
            message="Dodaj ofertę pracy nawet w kilku językach jednocześnie i rekrutuj pracowników z kraju lub z całej Europy."
            btnText="Dodaj ofertę pracy"
            btnLink="https://google.pl"
    ></for-who>

    <div class="container py-2">
      <hr>
    </div>

    <for-who
            :revert=true
            imageSrc="static/for-employee.svg"
            title="Dla pracownika"
            message="Przeglądaj oferty z kraju lub z całej Europy i aplikuj za darmo na wybrane stanowiska pracy."
            btnText="Przeglądaj oferty"
            btnLink="https://google.pl"
    ></for-who>

    <div class="py-3"></div>

    <div class="bg-primary text-center py-5 mb-5 h-max-md-383">
      <h3 class="font-weight-lighter text-white">Załóż darmowe <span class="font-weight-bold">konto</span></h3>
      <div class="d-flex justify-content-center pb-4">
        <div class="h-180 px-6 mt-5 d-max-md-none">
          <img src="/static/laptop.svg" class="card-img w-auto h-100" alt="Test">
          <p class="font-size-1 text-white mb-0">Pracodawca</p>
          <p class="text-white mb-0">Dodaj ofertę i rukrutuj</p>
        </div>


        <div class="position-absolute mt-5">
          <register-form/>
        </div>

        <div class="h-180 px-6 mt-5 d-max-md-none">
          <img src="/static/cv.svg" class="card-img w-auto h-100" alt="Test">
          <p class="font-size-1 text-white mb-0">Pracownik</p>
          <p class="text-white mb-0">Stwórz CV i aplikuj</p>
        </div>
      </div>
    </div>

    <div class="pt-130 text-center row justify-content-center pb-5 mb-5">
      <div class="col-lg-3 col-md-4 col-sm-10" >
        <p class="text-muted font-size-0 pt-3">Administratorem Twoich danych osobowych jest Inestio Sp. z o.o. z
          siedzibą w Ka<span
                  v-if="contentHidden">...</span>
          <span class="c-pointer text-black" v-if="contentHidden" v-on:click="hideContent"> Więcej <i
                  class="zmdi zmdi-chevron-down"></i></span>
          <span v-if="!contentHidden">towicach, ul. Porcelanowa 23, 40-246 Katowice; e-mail: helpdesk@inestio.com
        <a class="text-black d-block" href="#">- Dowiedz się więcej</a>
      </span>
        </p>
      </div>
    </div>

    <div class="text-center py-5 mb-3">
      <h2 class="text-secondary font-weight-normal pb-2">Inestio.com</h2>
      <p class="text-muted font-size-1">To nowoczesny serwis z ogłoszeniami pracy łączący pracodawców i pracowników z
        całej Europy.</p>
    </div>

    <zone
            :bgColor=true
            imageSrc="static/employer_zone.svg"
            title="Strefa pracodawcy"
            message="Szukasz pracowników fizycznych, wykwalifikowanych specjalistów z językiem obcym lub specjalistów IT? Jesteś we właściwym miejscu. Sprawdź naszą ofertę."
            btnText="Dowiedz się więcej"
            btnLink="https://google.pl"
    ></zone>

    <zone
            :bgColor=false
            imageSrc="static/employee_zone.svg"
            title="Strefa pracownika"
            message="Szukasz pracy w kraju lub za granicą? Wybierz dowolny kraj w Europie i przeglądaj oferty według języków którymi się posługujesz. To takie proste."
            btnText="Dowiedz się więcej"
            btnLink="https://google.pl"
    ></zone>

    <div class="bg-primary">
      <div class="container">
        <our-offer-row/>
      </div>
    </div>

    <social/>

    <page-footer/>
  </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import ForWho from "../components/ForWho";
    import Zone from "../components/Zone";
    import RegisterForm from "../components/RegisterForm";
    import OurOfferRow from "../components/OurOfferRow";
    import Social from "../components/Social";
    import PageFooter from "../components/PageFooter";

    export default {
        name: 'home',
        data() {
            return {
                contentHidden: true
            }
        },
        components: {
            PageFooter,
            Social,
            OurOfferRow,
            RegisterForm,
            ForWho,
            Navbar,
            Zone
        },
        methods: {
            hideContent() {
                this.contentHidden = !this.contentHidden;
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>