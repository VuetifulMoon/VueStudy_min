<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CosyComponent>
      <template #header="{ kossie }">
        <p>headerheader {{ kossie }}</p>
      </template>
      <template #default>
        <p>hello1</p>
      </template>
    </CosyComponent>
  </div>
</template>

<script>
import CosyComponent from '@/components/CosyComponent.vue';
export default {
  components: {
    CosyComponent,
  }
}
</script>