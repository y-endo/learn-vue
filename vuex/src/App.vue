<template>
  <div id="app">
    {{ count }}
    {{ countPlusOne }}
    <button @click="increment">increment</button>
    <button @click="incrementBy({ amount: 10 })">incrementBy 10</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import * as mutation from './store/mutation-types';

export default {
  name: 'App',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['countPlusOne'])
  },
  methods: {
    ...mapActions({
      increment: mutation.INCREMENT,
      incrementBy: mutation.INCREMENT_BY
    })
  }
};
</script>
