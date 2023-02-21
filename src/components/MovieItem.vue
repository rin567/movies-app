<template>
  <div class="movie-item">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-item-info-wrap">
      <div class="movie-item-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-button type="info" class="none-bg" @click="showInfoModalEvent">
            Info
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="info" class="none-bg" @click="emitRemoveEvent">
            Remove
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      requred: true,
    },
  },
  computed: {
    posterBg() {
      return {
        "background-image": `url(${this.movie.Poster})`,
      };
    },
  },
  methods: {
    emitRemoveEvent() {
      this.$emit("removeItem", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    showInfoModalEvent() {
      this.$emit("showModal", this.movie.imdbID);
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-in;
  height: 400px;
  margin: 15px;
}
.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}
.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.none-bg {
  background-color: rgba(28, 28, 28, 0);
  width: 100%;
}

.movie-item-info-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.2s ease;
  padding: 20px 10px;
  box-sizing: border-box;
}
.movie-item:hover .movie-item-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}
.movie-title {
  font-style: 20px;
  color: #fff;
  margin-bottom: 10px;
}
.movie-year {
  font-style: 14px;
  color: #fff;
}
</style>
