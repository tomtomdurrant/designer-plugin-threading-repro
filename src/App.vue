<template>
  <LiveUpdateOverlay
    :liveUpdate="liveUpdate"
  />
  <div>
    <h1>LiveUpdate Subscriptions</h1>
    <SubscriptionManager :liveUpdate="liveUpdate" />
  </div>
</template>

<script lang="ts">
import { useLiveUpdate, LiveUpdateOverlay } from '@disguise-one/vue-liveupdate';
import SubscriptionManager from './components/SubscriptionManager.vue';

export default {
  setup() {
    const queryParams = new URLSearchParams(window.location.search);
    const director = queryParams.get('director');
    const liveUpdate = useLiveUpdate(director ?? window.location.hostname);

    return { liveUpdate };
  },
  components: {
    SubscriptionManager,
    LiveUpdateOverlay
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
</style>
