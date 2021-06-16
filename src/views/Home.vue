<template>
  <div class="home">
    <EditorPage />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EditorPage from "@/components/EditorPage.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    EditorPage,
  },
});
</script>
