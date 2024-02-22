<template>
  <div :class="{navigation__drawer: true, open: open}">
    <div class="navigation__icon" @click="changeDrawerStatus">
      <svg v-if="!open" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <svg v-else width="19" height="19" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z" fill="black"/>
      </svg>
    </div>

    <div class="navigation__inner"></div>

    <div class="navigation__bg" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",

  data() {
    return {
      open: false
    }
  },

  methods: {
    changeDrawerStatus() {
      this.open = !this.open;

      if (this.open) {
        document.querySelector('html').setAttribute('style', 'overflow: hidden');
      } else {
        document.querySelector('html').removeAttribute('style');
      }
    },

    close() {
      this.open = false;
      document.querySelector('html').removeAttribute('style');
    }
  }
}
</script>

<style scoped>
.navigation__icon {
  cursor: pointer;
}

.navigation__bg {
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  height: calc(100% - 29px);
  width: 100%;
  left: 0;
  top: 29px;
  opacity: 0;
  z-index: -1;
  transition: opacity .3s, z-index .3s;
}

.open .navigation__bg {
  opacity: 1;
  z-index: 10;
}

.navigation__inner {
  position: fixed;
  height: calc(100svh - 29px);
  left: 0;
  top: 29px;
  width: 200px;
  background: white;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform .3s;
}

.open .navigation__inner {
  transform: translateX(0);
}
</style>
