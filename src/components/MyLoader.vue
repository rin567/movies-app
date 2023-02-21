<template>
  <div class="loader-wrap" v-if="isShowLoader">
    <el-container v-loading.fullscreen.lock="fullscreenLoading"></el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyLoader",
  data: () => ({
    fullscreenLoading: true,
  }),
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
