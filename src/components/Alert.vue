<template>
  <div class="main-alert">
    <b-alert variant="danger" show>
        <div class="alert-bound">
            {{ message }}
        </div>
    </b-alert>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>

<style scoped>
    .main-alert {
        text-align: center;
    }
    .alert-bound {
        padding-left: 20px;
        margin: auto;
    }
    @media screen and (min-width: 1366px) {
        .alert-bound {
            width: 1366px;
        }
    }
</style>
