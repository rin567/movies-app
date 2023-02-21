<template>
  <div class="movie-info-content">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="movie-poster-wrap">
          <div class="movie-poster" :style="posterStyle"></div>
        </div>
      </el-col>
      <el-col :span="16">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <el-rate
          class="movie-rating"
          v-model="rating"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value} / 5"
        />
        <p class="movie-description">{{ movie.Plot }}</p>
        <div>
          <el-button type="success" disabled round>{{ movie.Year }}</el-button>
          <el-button type="success" disabled round>{{
            movie.Runtime
          }}</el-button>
          <el-button type="success" disabled round>{{ movie.Genre }}</el-button>
          <el-button type="success" disabled round>{{
            movie.Language
          }}</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MovieInfoModalContent",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    defaultPosterBg:
      "linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)",
  }),
  computed: {
    rating() {
      return Number(this.movie.imdbRating) / 2;
    },
    posterStyle() {
      return {
        "background-image": this.posterBg,
      };
    },
    posterBg() {
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    },
  },
};
</script>

<style scoped>
.movie-info-content {
  padding: 1rem;
}
.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}
.movie-title {
  font-size: 3rem;
  font-weight: 100;
  line-height: 1.2;
}
.movie-description {
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 10px;
}
</style>
