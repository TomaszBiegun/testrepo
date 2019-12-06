<template>
  <div class="row pb-5 pt-4">
    <div class="col-lg-3 col-md-6 d-flex justify-content-center pt-4">
      <div class="mw-255 h-max">
        <our-offer
                image-src="static/europe.svg"
                hidden-image-src="static/europe_hover.svg"
                title="Cała Europa"
                text="Jedna strona łącząca pracodawców i pracowników z całej Europy"
        ></our-offer>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 d-flex justify-content-center pt-4">
      <div class="mw-255 h-max">
        <our-offer
                image-src="static/physic_emploee_hover.svg"
                hidden-image-src="static/physic_employee_hover.svg"
                title="Pracownicy fizyczni"
                text="Praca w Europie dla pracowników fizycznych z każdej branży"
        ></our-offer>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 d-flex justify-content-center pt-4">
      <div class="mw-255 h-max">
        <our-offer
                image-src="static/u3561_a.svg"
                hidden-image-src="static/u3563_a.svg"
                title="Specjaliści językowi"
                text="Praca dla specjalistów ze znajomością dowolnego języka obcego"
        ></our-offer>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex justify-content-center pt-4">
      <div class="mw-255 h-max">
        <our-offer
                image-src="static/u3570_a.svg"
                hidden-image-src="static/u3572_a.svg"
                title="Specjaliści IT"
                text="Praca zdalna lub stacjonarna dla specjalistów IT z Europy"
        ></our-offer>
      </div>
    </div>
  </div>
</template>

<script>
    import OurOffer from "../components/OurOffer";

    export default {
        name: "OurOfferRow",
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
        components: {
            OurOffer
        },
    }
</script>

<style scoped>
  .hover {
    transform: translate3d(0px, -5px, 0px);
    box-shadow: 0px 25px 30px -7px rgba(0, 0, 0, 0.15);
  }
</style>
<script>
    import OurOffer from "./OurOffer";

    export default {
        components: {OurOffer}
    }
</script>
<script>
    import OurOffer from "./OurOffer";

    export default {
        components: {OurOffer}
    }
</script>