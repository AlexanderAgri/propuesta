<template>
  <article class="container">
    <div class="title">
      <span>{{ pageNotFound }}</span>
    </div>
    <div class="img">
      <img src="@/static/error.png" width="540" height="447" alt="404" />
    </div>
    <div class="description">
      <h1>I have bad news for you</h1>
      <p>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <router-link to="/">
        <button>Back to homepage</button>
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      pageNotFound: "404 NOT FOUND",
    };
  },
};
</script>

<style src="@/scss/pages/_error.scss" lang="scss" scoped></style>
