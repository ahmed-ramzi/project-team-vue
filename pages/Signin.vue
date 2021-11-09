<template>
  <div class="border-2 border-red-900">
    <div
      class="
        flex flex-col
        items-center
        border-2
        rounded-2xl
        mx-24
        mt-64
        mb-96
        bg-gray-200
        space-y-6
        motion-safe:hover:scale-110
        scale-50
      "
    >
      <div class="labelFixer pt-8">
        <label>Email</label>
        <input
          type="text"
          placeholder="Your email"
          class="border-2 border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div class="labelFixer">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password1"
          class="border-2 border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div class="pb-8">
        <button class="border bg-blue-500 text-white px-6 rounded-lg active:bg-blue-700">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.labelFixer {
  @apply flex flex-col items-center;
}
</style>
