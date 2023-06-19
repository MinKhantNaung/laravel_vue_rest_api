<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>

        <div class="wrapper">
          <nav class="d-flex justify-content-center my-5">
            <RouterLink class="btn btn-sm btn-primary mx-1" to="/">Home</RouterLink>
            <RouterLink class="btn btn-sm btn-primary mx-1" to="/skills">Skills</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />
  </div>
</template>
