<template>
  <div class="login-wrap">
    {{data.pageName}} <br>
    <el-input v-model="data.username"
              placeholder="请输入内容"></el-input>
    <el-input placeholder="请输入密码"
              v-model="data.password"
              show-password></el-input>
    <el-row>
      <el-button type="success"
                 icon="el-icon-check"
                 circle
                 @click="testClick"></el-button>
      <el-button type="success"
                 icon="el-icon-check"
                 circle
                 @click="testClick2"></el-button>
    </el-row>
    <div>
      <Test></Test>
    </div>
    <div>
      <svg-icon icon-class="add" />
      <svg-icon icon-class="drag" />
      <svg-icon icon-class="safe_line" />
    </div>
  </div>
</template>
<script lang="ts" src="./login.ts"></script>
<style lang="scss">
@import "./login.scss";
</style>
