import * as mutation from './mutation-types';

const mutations = {
  [mutation.INCREMENT](state) {
    state.count++;
  },
  [mutation.INCREMENT_BY](state, payload) {
    state.count += payload.amount;
  }
};

export default mutations;
