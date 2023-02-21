<template>
  <div class="movies-pagination">
    <el-pagination
      layout="prev, pager, next"
      v-model:current-page="currentPageModel"
      :total="total"
      :page-size="perPage"
    />
  </div>
</template>

<script>
export default {
  name: "MoviesPagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        this.$emit("pageChanged", value);
      },
    },
  },
};
</script>

<style scoped>
.movies-pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.movies-pagination >>> .el-pagination .el-pager .number {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}
.movies-pagination >>> .el-pagination .el-pager .number.is-active {
  background-color: #fff;
  font-size: 12px;
  color: #000;
  box-shadow: none;
}
.movies-pagination >>> .el-pagination .btn-next {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}
.movies-pagination >>> .el-pagination .btn-prev {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}

.movies-pagination >>> .el-pagination .more {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}
</style>
