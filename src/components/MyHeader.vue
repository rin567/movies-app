<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">
        <span>MovieDB</span>
      </div>
      <div class="search-input">
        <el-input placeholder="Search" v-model="searchValue" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MyHeader",
  data: () => ({
    searchValue: "",
  }),
  watch: {
    searchValue: "onSearchValueChanged",
  },
  methods: {
    ...mapActions("movies", [
      "searchMovies",
      "fetchMovies",
      "toggleSearchState",
    ]),
    onSearchValueChanged(val) {
      if (val) {
        this.searchMovies(val);
        this.toggleSearchState(true);
      } else {
        this.fetchMovies();
        this.toggleSearchState(false);
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 0;
  position: fixed;
  width: 100%;
  z-index: 900;
}
.logo {
  color: #fff;
}

.container {
  max-width: 1080px;
  margin: auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-input >>> .el-input .el-input__wrapper {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}
</style>
