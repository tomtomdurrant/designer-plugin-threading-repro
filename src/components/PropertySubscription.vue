<template>
  <tr>
    <td>{{ property }}</td>
    <td>{{ value }}</td>
    <td>
      <button @click="unsubscribe" aria-label="Unsubscribe">
        <img src="../assets/icons/trash.svg" alt="Unsubscribe" width="16" height="16" />
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    liveUpdate: {
      type: Object,
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
  setup(props, { emit }) {
    const unsubscribe = () => {
      emit('unsubscribe', props.property);
    };

    const subscription = props.liveUpdate.subscribe(props.objectName, { [props.property]: props.property });
    return { value: subscription[props.property], unsubscribe };
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
