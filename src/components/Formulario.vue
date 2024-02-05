<template>
  <b-container>
    <div>
      <b-form @submit.prevent="checkForm" action="https://vuejs.org/" method="post" novalidate>
        <b-alert variant="danger" dismissible :show="errors.length > 0">
          <b>{{
            errors.length > 1
            ? "Please correct the following errors:"
            : "Please correct the following error:"
          }}</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </b-alert>

        <b-form-group id="name-group" label="Name" label-for="name" :state="name ? null : false">
          <b-form-input id="name" v-model="name" type="text" name="name" required></b-form-input>
        </b-form-group>

        <b-form-group id="lastname-group" label="LastName" label-for="name" :state="lastname ? null : false">
          <b-form-input id="lastname" v-model="lastname" type="lastname" name="lastname" required></b-form-input>
        </b-form-group>

        <b-form-group id="cp-group" label="CP" label-for="cp" :state="cp ? null : false">
          <b-form-input id="cp" v-model="cp" type="name" name="cp" required></b-form-input>
        </b-form-group>

        <b-form-group id="street-group" label="Street" label-for="street" :state="street ? null : false">
          <b-form-input id="street" v-model="street" type="name" name="street" required></b-form-input>
        </b-form-group>

        <b-form-group id="number-group" label="Number" label-for="number" :state="number ? null : false">
          <b-form-input id="number" v-model="number" type="name" name="number" required></b-form-input>
        </b-form-group>

        <b-form-group id="city-group" label="City" label-for="city" :state="city ? null : false">
          <b-form-input id="city" v-model="city" type="name" name="city" required></b-form-input>
        </b-form-group>

        <b-form-group id="date-group" label="Date" label-for="date" :state="date ? null : false">
          <b-form-input id="date" v-model="date" type="date" name="date" required></b-form-input>
        </b-form-group>

        <b-form-group id="email-group" label="Email" label-for="email" :state="validEmail(email) ? null : false">
          <b-form-input id="email" v-model="email" type="email" name="email" required></b-form-input>
        </b-form-group>

        <b-form-group id="cellphone-group" label="Cellphone" label-for="cellphone" :state="cellphone ? null : false">
          <b-form-input id="cellphone" v-model="cellphone" type="number" name="cellphone" required></b-form-input>
        </b-form-group>

        <b-form-group label="Photo">
          <b-form-file id="photo" v-model="photo" :state="photoState" accept=".png" :max-size="3000000"
            placeholder="Selecciona una foto (PNG, max 3MB)"></b-form-file>
          <b-form-invalid-feedback :state="photoState">
            Selecciona una foto en formato PNG y que sea menor a 3MB.
          </b-form-invalid-feedback>
        </b-form-group>


        <b-button class="button" type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      errors: [],
      name: null,
      cp: null,
      street: null,
      number: null,
      city: null,
      date: null,
      cellphone: null,
      file: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.cp && this.street && this.number && this.city && this.date && this.cellphone && this.photo) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }

      if (!this.lastname) {
        this.errors.push("LastName required.");
      }

      if (!this.cp) {
        this.errors.push("Postal Code required.");
      }

      if (!this.street) {
        this.errors.push("Street required.");
      }

      if (!this.number) {
        this.errors.push("Number required.");
      }

      if (!this.city) {
        this.errors.push("City required.");
      }

      if (!this.date) {
        this.errors.push("Date of birth required.");
      }

      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.file) {
        this.errors.push("Photo required.");
      } else if (this.file.size > 3 * 1024 * 1024) {
        this.errors.push("The image is too large. The maximum size allowed is 3 MB.");
      }



      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
});
</script>
<style>
.input,
.select {
  margin-left: 10px;
}

.form {
  padding-left: 600px;
}

.button {
  margin-top: 40px;
}
</style>
