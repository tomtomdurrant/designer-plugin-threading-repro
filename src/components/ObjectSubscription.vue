<template>
  <div class="subscription-box">
    <button class="remove-button" @click="$emit('remove')" aria-label="Remove">
      <img src="../assets/icons/trash.svg" alt="Remove" width="16" height="16" />
    </button>
    <h3>{{ objectName }}</h3>
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <PropertySubscription
          v-for="property in subscriptions"
          :key="property"
          :liveUpdate="liveUpdate"
          :objectName="objectName"
          :property="property"
          @unsubscribe="unsubscribe"
        />
      </tbody>
    </table>
    <div>
      <input
        type="text"
        v-model="property"
        placeholder="Enter property to subscribe"
        @keyup.enter="subscribe"
      />
      <button @click="subscribe" style="margin-left: 10px;">Subscribe</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import PropertySubscription from './PropertySubscription.vue';

export default defineComponent({
  components: { PropertySubscription },
  props: {
    liveUpdate: {
      type: Object,
      required: true
    },
    objectName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const subscriptions = ref<string[]>([]);
    const property = ref('');

    const subscribe = () => {
      const p = property.value.trim();

      if (!subscriptions.value.includes(p)) {
        props.liveUpdate.subscribe(props.objectName, { [p]: p });
        subscriptions.value.push(p);
      }

      property.value = '';
    };

    const unsubscribe = (property: string) => {
      subscriptions.value = subscriptions.value.filter(p => p !== property);
    };

    return { subscriptions, property, subscribe, unsubscribe };
  }
});
</script>

<style scoped>
.subscription-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
}
.remove-button {
  position: absolute;
  top: 5px;
  right: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  border: 1px solid #ccc;
  padding: 5px;
  text-align: left;
}
</style>
