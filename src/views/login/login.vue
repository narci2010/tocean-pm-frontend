<template>
  <div class="login-wrap">
    {{data.pageName}} <br>
    <el-input v-model="data.username"
              placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入密码"
              v-model="data.password"
              show-password></el-input>
    <el-button type="success"
               icon="el-icon-check"
               circle
               @click="testClick"></el-button>
  </div>
</template>
<script lang="ts" src="./login.ts"></script>
<style lang="scss">
@import "./login.scss";
</style>
