import { createStore } from 'vuex'
const store = createStore({
  state () {
    return {
      inputValue: '123'
    }
  },
  mutations: {
    changeInputValue (state, payload) {
      state.inputValue = payload
    },
    clearInput (state) {
      state.inputValue = ''
    }
  }
})

export default store
