<template>
  <div class="home">
    <v-container fill-height style="height: 500px">
      <v-layout align-center>
        <v-flex>
          <h2 class="display-3">Welcome to the compSoft</h2>
          <span class="subheading" v-text="msg"></span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <v-btn large color="primary" class="mx-0">See more</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card>

    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Project example - compSoft(comparaSoftware)'
      }
    }
  }
</script>

<style>

</style>
