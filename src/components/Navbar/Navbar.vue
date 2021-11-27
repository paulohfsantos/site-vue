<template>
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <router-link to="/">
            <img src="" alt="logos-site" />
          </router-link>
        </div>

        <div class="links">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/projects">Projects</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script></script>

<style lang="scss">
@import "@/sass/globalColors.scss";
@import "./style.scss";
</style>
