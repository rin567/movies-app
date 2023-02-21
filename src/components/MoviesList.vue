<template>
  <el-container>
    <el-aside width="1070px" style="margin: auto">
      <h3 class="list-title">{{ listTitle }}</h3>
    </el-aside>
  </el-container>
  <el-row class="row-container">
    <template v-if="isExist">
      <el-col :span="6" v-for="(movie, key) in list" :key="key">
        <MovieItem
          :movie="movie"
          @mouseover="onMouseOver(movie.Poster)"
          @removeItem="onRemoveItem"
          @showModal="onShowMovieInfo"
        />
      </el-col>
    </template>
    <template v-else>
      <div>Empty list</div>
    </template>
  </el-row>
  <el-dialog v-model="dialogVisible">
    <template #header>
      <div class="movie-info-header">
        <h6 class="movie-header-title">Movie view</h6>
      </div>
    </template>
    <MovieInfoModalContent :movie="selectedMovie" />
  </el-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem";
import { ElMessageBox, ElMessage } from "element-plus";
import MovieInfoModalContent from "./MovieInfoModalContent";

export default {
  name: "MoviesList",
  props: {
    list: Object,
    default: () => ({}),
  },
  components: {
    MovieItem,
    MovieInfoModalContent,
  },
  data: () => ({
    dialogVisible: false,
    selectedMovieID: "",
  }),
  computed: {
    ...mapGetters("movies", ["isSearch"]),
    listTitle() {
      return this.isSearch ? "Search result" : "IMDB Top 250";
    },
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    selectedMovie() {
      return this.selectedMovieID ? this.list[this.selectedMovieID] : null;
    },
  },
  methods: {
    ...mapActions("movies", ["removeMovie"]),
    ...mapActions(["showNotify"]),
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    },
    async onRemoveItem({ id, title }) {
      const isConfirmed = await ElMessageBox.confirm(
        `proxy will permanently delete the ${title}. Continue?`,
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      ).catch(() => {
        ElMessage({
          type: "info",
          message: "Delete canceled",
        });
      });
      if (isConfirmed) {
        this.removeMovie(id);
        this.showNotify({
          msg: "Movie deleted successful",
          variant: "success",
          title: "Success",
        });
      }
    },
    onShowMovieInfo(id) {
      this.selectedMovieID = id;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  color: #fff;
  margin: 85px 20px 0 0;
}
.row-container {
  max-width: 1100px;
  margin: auto;
}
.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #fff;
}
.movie-header-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}
</style>

<style>
header.el-dialog__header {
  padding: 0;
  margin: 0;
}
.el-dialog .el-dialog__body {
  padding: 0;
}
</style>
