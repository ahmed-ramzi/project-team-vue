<template>
  <div class="flex flex-col items-center">
    <strong>
      <label>{{ label }}</label>
    </strong>
    <!-- <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }" class="w-full"> -->
    <input
      type="text"
      :placeholder="placeholder"
      class="border rounded-lg bg-gray-200 text-center ring-inset motion-safe:hover:scale-110"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="text-red-800">{{ errors[0] }}</span>
    <!-- </ValidationProvider> -->
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    placeHolder: String,
    // rules: String,
    // name: String,
  },
}
</script>
