import * as mutation from './mutation-types';

const actions = {
  [mutation.INCREMENT]({ commit }) {
    commit(mutation.INCREMENT);
  },
  [mutation.INCREMENT_BY]({ commit }, payload) {
    commit(mutation.INCREMENT_BY, payload);
  }
};

export default actions;
