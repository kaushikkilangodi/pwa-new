<template>
  <div class="install-container">
    <button v-if="deferredPrompt" @click="installApp" class="install-button">Install App</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useHead } from '#imports';

useHead({
  meta: [
    { name: 'theme-color', content: '#317EFB' }
  ]
});

const deferredPrompt = ref(null);

const installApp = async () => {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt();
    const { outcome } = await deferredPrompt.value.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      deferredPrompt.value = null;
    } else {
      console.log('User dismissed the install prompt');
    }
  }
};

onMounted(() => {
  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();
    deferredPrompt.value = e;
  };

  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

  onBeforeUnmount(() => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  });
});
</script>

<style>
.install-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.install-button {
  padding: 15px 30px;
  background-color: #317EFB;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.install-button:hover {
  background-color: #255a9d;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.install-button:active {
  background-color: #1c3e70;
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
