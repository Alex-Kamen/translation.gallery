<template>
  <div :class="{language__select: true, open: open}">
    <div class="language__selected" @click="open = !open">
      <span class="flag" :style="`background-position: 0 ${currentLanguage.position};`"></span>
      <span>{{currentLanguage.name}}</span>
    </div>

    <div class="language__options">
      <div
          v-for="(language) in languageList"
          :key="language.value"
          class="language__option"
          @click="chooseLanguage(language)"
      >
        <span class="flag" :style="`background-position: 0 ${language.position};`"></span>
        <span>{{language.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {languageList} from "@/constants/language";

export default {
  name: "LanguageSelect",

  data() {
    return {
      languageList: languageList,
      open: false,
      value: 'ru'
    }
  },

  computed: {
    currentLanguage() {
      return this.languageList.find(language => language.value === this.value)
    }
  },

  methods: {
    chooseLanguage(language) {
      this.value = language.value;
      this.open = false;
    }
  }
}
</script>

<style scoped>
.language__select {
  position: relative;
}

.flag {
  background: url('/public/images/flags.png') no-repeat top left;
  width: 16px;
  height: 16px;
  display: inline-block;
}

.flag ~ span {
  color: #2e2e2e;
  font-size: 12px;
}

.language__options {
  overflow: auto;
  height: 300px;
  background: white;
  position: absolute;
  right: 0;
  top: 20px;
  width: 100px;
  z-index: -1;
  opacity: 0;
  transition: z-index .3s, opacity .3s;
}

.open .language__options {
  z-index: 2;
  opacity: 1;
}

.language__option {
  display: flex;
  align-items: center;
  padding: 7px 5px;
  border-bottom: 1px solid #979797;
  gap: 10px;
  cursor: pointer;
}

.language__option:last-of-type {
  border-bottom: none;
}
</style>
