<template>
  <tr ref="row">
    <td>{{ property }}</td>
    <td>{{ value }}</td>
    <td>
      <button @click="$emit('unsubscribe', property)" aria-label="Unsubscribe">
        <img src="../assets/icons/trash.svg" alt="Unsubscribe" width="16" height="16" />
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, useTemplateRef } from 'vue';
import { useSubscriptionVisibility } from '@disguise-one/vue-liveupdate';
import type { UseLiveUpdateReturn } from '@disguise-one/vue-liveupdate';

export default defineComponent({
  props: {
    liveUpdate: {
      type: Object as () => UseLiveUpdateReturn,
      required: true
    },
    objectName: {
      type: String,
      required: true
    },
    property: {
      type: String,
      required: true
    },
  },
  emits: ['unsubscribe'],
  setup(props) {
    const row = useTemplateRef<HTMLElement>('row');

    const subscription = props.liveUpdate.subscribe(props.objectName, { [props.property]: props.property });
    useSubscriptionVisibility(row, subscription);

    return { value: subscription[props.property] };
  }
});
</script>

<style scoped>
td {
  border: 1px solid #ccc;
  padding: 5px;
  text-align: left;
}
td:first-child, td:last-child {
  width: 1%;
  white-space: nowrap;
}
td:last-child {
  text-align: center;
}
</style>
