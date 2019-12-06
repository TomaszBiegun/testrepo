<template>
  <div class="card shadow w-350 p-1">
    <div class="card-body px-4">
      <form>
        <div class="form-group">
          <input class="form-control form-control-md" placeholder="Typ konta">
        </div>

        <div class="form-group">
          <input class="form-control form-control-md" placeholder="E-mail">
        </div>

        <div class="form-group">
          <input class="form-control form-control-md" placeholder="Hasło">
        </div>

        <div class="form-group">
          <input class="form-control form-control-md" placeholder="Powtórz hasło">
        </div>

        <div class="form-group form-check text-left mb-0">
          <input type="checkbox" class="form-check-input" id="rules">
          <label class="form-check-label font-size-0 text-muted" for="rules">Zapoznałem się z treścią
            <span class="btn-link">
              regulaminu</span>
            <span class="text-danger">
                *
              </span>

          </label>
        </div>

        <div class="form-group form-check text-left mb-4">
          <input type="checkbox" class="form-check-input" id="agree">
          <label class="form-check-label font-size-0 text-muted" for="agree">

            Chcę otrzymywać informa<span
                  :class="{ 'd-none': agreeTextHidden}">... <span class="c-pointer" :class="{ 'd-none': agreeTextHidden}"
                                                                  v-on:click.prevent="setAgreeTextHidden()">Więcej</span>
            </span>

            <span :class="{ 'd-none': !agreeTextHidden}">cje marketingowe dostarczane przez inestio.com</span>

            <span class="text-primary c-pointer" :class="{ 'd-none': !agreeTextHidden}" v-on:click.prevent="setAgreeTextHidden()">
              Mniej
            </span>
          </label>
        </div>

        <div class="form-group d-flex justify-content-center mb-2 ">
          <button class="btn btn-lg btn-block btn-danger font-weight-bold font-size-normal col-6" type="submit">Załóż konto</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RegisterForm",
        data() {
            return {
                agreeTextHidden: false,
            }
        },
        methods: {
            setAgreeTextHidden() {
                this.agreeTextHidden = !this.agreeTextHidden;
            },
            agreeClick: function (event) {
                console.log('test', event.target);
            }
        }
    }
</script>

<style scoped>

</style>