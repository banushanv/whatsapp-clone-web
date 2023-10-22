<template>
  <div class="flex items-center justify-center h-screen">
    <!-- Dialog component -->
    <dialog class="fixed inset-0 z-10 overflow-y-auto" :open="true">
      <!-- Backdrop -->
      <!-- Dialog box -->
      <div
        class="inline-block w-full max-w-md p-12 my-0 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-lg"
        @click.stop
      >
        <!-- Header -->
        <h2 class="text-lg font-medium leading-6 text-gray-900">{{ headerText }}</h2>
        <!-- Body -->
        <p class="mt-2 text-sm text-gray-500">
          {{ content }}
        </p>
        <!-- Footer -->
        <div class="mt-6 flex justify-end gap-12">
          <!-- Cancel button -->
          <button class="px-6 bg-gray-100 py-2 font-medium rounded-lg" @click="onCancelHandler">
            Cancel
          </button>
          <!-- Confirm button -->
          <button
            class="bg-[#008069] px-4 py-1 text-gray-200 font-medium rounded-lg"
            @click="onOkHandler"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-confirm-handler', 'on-cancel-handler']);

defineProps({
  headerText: String,
  content: String,
  buttonText: String
});

const onOkHandler = () => {
  emit('on-confirm-handler');
};

const onCancelHandler = () => {
  emit('on-cancel-handler');
};
</script>
