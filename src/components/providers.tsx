"use client"
import { store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  )
}
