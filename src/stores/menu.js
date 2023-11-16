import { defineStore } from 'pinia'
import Menu from '../data/menu.json'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    backToggle: null,
    menuToggle: null,
    sidebar: null,
    data: Menu.data
  }),
  actions:{
    setNavActive(item){
      if(!item.active){
        this.data.forEach((obj)=>{
          obj.active = false
        })
        item.active = !item.active
      }
    }
  },
  getters:{
    getMenu(state){
      return state.data
    }
  }
})
