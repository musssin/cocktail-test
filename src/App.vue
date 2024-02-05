<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
const Layout = DefaultLayout
</script>
