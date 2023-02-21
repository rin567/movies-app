<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";
// import { ElNotification } from "element-plus";

export default {
  name: "MyNotification",
  computed: {
    ...mapGetters(["messagePool"]),
  },
  watch: {
    messagePool: "showNotification",
  },
  methods: {
    showNotification({ variant, msg, title }) {
      this.$notify({
        title: title,
        message: msg,
        type: variant,
      });
    },
  },
};
</script>
