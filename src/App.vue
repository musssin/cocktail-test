<template>
  <Layout>
    <RouterView :key="route.fullPath" />
  </Layout>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
const Layout = DefaultLayout
const route = useRoute()
</script>
