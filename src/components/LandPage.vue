<template>
  <div>
    <header class="bg-dark text-light text-center py-5">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand">Your Company</router-link>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/inicio" class="nav-link">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/features" class="nav-link">Extras</router-link>
              </li>
              <!-- Add more navigation links as needed -->
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>