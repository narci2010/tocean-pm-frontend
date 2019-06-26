<template>
  <div class="index-wrap">
    {{data.pageName}}, {{author}}
    <br>
    <router-link :to="{name:'login'}">login</router-link>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
@import "./index.scss";
</style>

