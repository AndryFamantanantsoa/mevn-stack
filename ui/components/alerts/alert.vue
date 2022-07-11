<template>
  <div>
    <b-alert v-model="showDismissibleAlert" :variant="variant" dismissible>
      {{ alertText }}
    </b-alert>
  </div>
</template>

<script>
    export default {
        props: ["variant", "alertText", "showDismissibleAlert"]
    }
</script>
