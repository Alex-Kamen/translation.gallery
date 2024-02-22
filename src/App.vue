<template>
  <div class="container">
    <header>
      <div>
        <NavigationDrawer/>
        <div class="header__home">
          <router-link to="/"><img src="/images/home.gif" alt="home"></router-link>
        </div>
      </div>

      <div>
        <LanguageSelect/>
      </div>
    </header>
    <section class="header__logo"><router-link to="/"><img src="/images/logo.png" alt="logo"></router-link></section>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="link__list">
        <div>
          <span v-for="(footerLink, index) in footerLinks" :key="index">
            <router-link :to="footerLink.href">{{footerLink.name}}</router-link>
            <span v-if="index + 1 !== footerLinks.length"> | </span>
          </span>
        </div>
      </div>
      <div class="copyright">
        <span>© 2018 Translation.Gallery</span>
        <span class="copyright__images">
          <img src="/images/mastercard3ds.png" alt="mastercard3ds">
          <img src="/images/visa3ds.png" alt="visa3ds">
          <img src="/images/pcicompliant.png" alt="pcicompliant">
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer";
import LanguageSelect from "@/components/inputs/LanguageSelect";
import {footerLinks} from "@/constants/footerLinks";

export default {
  name: 'App',
  components: {LanguageSelect, NavigationDrawer},

  data() {
    return {
      footerLinks: footerLinks
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Tahoma, Verdana, Arial, sans-serif;
  font-weight: 400;
}

#app {
  display: flex;
  justify-content: center;
}

.container {
  max-width: 350px;
  margin: 0 15px;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
}

.bold {
  font-weight: bold;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
}

header div:first-of-type {
  display: flex;
  gap: 10px;
  align-items: center;
}

.header__home a {
  display: flex;
}

.header__logo {
  margin-bottom: 15px;
  border: 1px solid #c8c8c8;
  background-color: #f1f1f1;
  padding: 7px;
}

.header__logo img {
  width: 100%;
}

footer {
  margin-top: 15px;
  border-top: 1px solid gray;
  color: #a8a4a1;
  font-size: 11px;
  padding: 5px;
}

footer a {
  color: #a8a4a1;
  text-decoration: none;
}

footer a:hover {
  border-bottom: 1px solid #a8a4a1;
}

.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
}

.copyright span:first-of-type {
  color: black;
}

.copyright__images {
  display: flex;
  gap: 4px;
}

.copyright img {
  height: 20px;
}
</style>
