<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { texts } from './constants/tests';

</script>

<template>
  <div class="layout grid grid-cols-6 h-screen">
    <div class="col-span-1 ">
      <nav className="bg-gray-800 !w-full text-white h-screen !mt-0">
        <div className="p-4">
          <ul className="space-y-4">
            <li class="w-full">
              <RouterLink to="/home">
                {{ texts.navbar.home }}
              </RouterLink>
            </li>
            <li class="w-full">
              <RouterLink to="/products">
                {{ texts.navbar.listProduct }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="content col-span-5">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-RouterLink-exact-active {
  color: var(--color-text);
}

nav a.router-RouterLink-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
