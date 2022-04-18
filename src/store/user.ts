import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
    state: () => {
        return {
          username: '',
        }
    },
    persist: {
      key: 'user',
      storage: window.localStorage,
      // paths: ['nested.data'],
      beforeRestore: context => {
        console.log('Before hydration...')
      },
      afterRestore: context => {
        console.log('After hydration...')
      },
    },
    getters: {
      
    },
    actions: {
      
    }
})