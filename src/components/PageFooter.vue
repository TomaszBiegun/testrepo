<template>
  <div class="bg-black pt-1">
    <div class="container pt-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <p class="col-title pt-3 text-white font-weight-bold">INESTIO.COM</p>
          <ul class="list-unstyled">
            <li><a href="https://google.pl" class="text-white">Strefa pracownika</a></li>
            <li><a href="https://google.pl" class="text-white">Strefa pracodawcy</a></li>
            <li><a href="https://google.pl" class="text-white">Cennik dla pracodawców</a></li>
            <li><a href="https://google.pl" class="text-white">Reklama</a></li>
            <li><a href="https://google.pl" class="text-white">Oferty pracy</a></li>
            <li><a href="https://google.pl" class="text-white">Kontakt</a></li>
            <li class="text-black">a</li>
            <li><a href="https://google.pl" class="text-white">Regulamin serwisu</a></li>
            <li><a href="https://google.pl" class="text-white">Polityka prywatności</a></li>
            <li><a href="https://google.pl" class="text-white">Polityka cookies</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <p class="col-title pt-3 text-white font-weight-bold">POPULARNE BRANŻE</p>
          <ul class="list-unstyled">
            <li><a href="https://google.pl" class="text-white">Budowlana<span
                    class="text-muted float-right">12</span></a></li>
            <li><a href="https://google.pl" class="text-white">Gastronomiczna<span
                    class="text-muted float-right">4</span></a></li>
            <li><a href="https://google.pl" class="text-white">Metalurgia<span
                    class="text-muted float-right">4</span></a></li>
            <li><a href="https://google.pl" class="text-white">Rzemieślnicza<span
                    class="text-muted float-right">3</span></a></li>
            <li><a href="https://google.pl" class="text-white">Elektryczna<span
                    class="text-muted float-right">3</span></a></li>
            <li><a href="https://google.pl" class="text-white">Spożywcza<span
                    class="text-muted float-right">3</span></a></li>
            <li><a href="https://google.pl" class="text-white">Produkcyjna<span
                    class="text-muted float-right">3</span></a></li>
            <li><a href="https://google.pl" class="text-white">Motoryzacyjna<span
                    class="text-muted float-right">2</span></a></li>
            <li><a href="https://google.pl" class="text-white">Stolarska<span
                    class="text-muted float-right">2</span></a></li>
            <li><a href="https://google.pl" class="text-white">Odzieżowa<span
                    class="text-muted float-right">2</span></a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <p class="col-title pt-3 text-white font-weight-bold">POPULARNE MIASTA</p>
          <ul class="list-unstyled">
            <li><a href="https://google.pl" class="text-white">Berlin<span
                    class="text-muted float-right">495</span></a></li>
            <li><a href="https://google.pl" class="text-white">Stuttgarr<span
                    class="text-muted float-right">300</span></a></li>
            <li><a href="https://google.pl" class="text-white">Monachium<span
                    class="text-muted float-right">287</span></a></li>
            <li><a href="https://google.pl" class="text-white">Timmendorfer Strand<span
                    class="text-muted float-right">264</span></a></li>
            <li><a href="https://google.pl" class="text-white">Kolonia<span
                    class="text-muted float-right">209</span></a></li>
            <li><a href="https://google.pl" class="text-white">Kraków<span
                    class="text-muted float-right">150</span></a></li>
            <li><a href="https://google.pl" class="text-white">Wrocław<span
                    class="text-muted float-right">112</span></a></li>
            <li><a href="https://google.pl" class="text-white">Hamburg<span
                    class="text-muted float-right">106</span></a></li>
            <li><a href="https://google.pl" class="text-white">Wiedeń<span
                    class="text-muted float-right">104</span></a></li>
            <li><a href="https://google.pl" class="text-white">Bruksela<span
                    class="text-muted float-right">103</span></a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="text-center pt-5">
            <p class="text-white pt-3">Polecany pracodawca</p>
            <img src="static/neptika.svg">
          </div>
        </div>
      </div>

      <p class="rights mb-0 pb-3">2019 © Inestio.com | Wszelkie prawa zastrzeżone.</p>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/app';

  .bg-black {
    background-color: $black;
  }

  .col-title {
    border-top: 3px solid $primary;
  }

  ul li a:hover {
    color: $primary !important;
    text-decoration: none;
  }

  .rights{
    color: #6c757d!important;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 15px;
    margin-top: 15px;
    margin-bottom: 0;
    font-size: 11px;
  }

</style>