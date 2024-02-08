import { describe, beforeEach, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useDrawerStore } from './drawer'

describe('Drawer Store', () => {
  beforeEach(() => {
    
    setActivePinia(createPinia())
  })

  it('drawer toggled', () => {
    const drawer = useDrawerStore()
    expect(drawer.isOpen).toBe(false)
    drawer.toggleDrawer()
    expect(drawer.isOpen).toBe(true)
  })

})