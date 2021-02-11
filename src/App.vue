<template>
  <v-app>
    <v-card
      color="grey lighten-4"
      flat
      tile
    >
      <v-toolbar dense  color="light-blue lighten-6" dark>
        <v-toolbar-title style="color: white;">Ortográfia y gramatíca</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card>
    
    <v-main>
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: 'App',

  components: {
    Main
  },

  data: () => ({
    //
  }),
};
</script>