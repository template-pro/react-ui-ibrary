import React from 'react'
import { Icon } from '@template-pro/rc-ui'

const IconNode = () => (
  <svg viewBox="64 64 896 896" focusable="false"><defs><style /></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" /><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" /></svg>
)

const App = () => {
  return (
    <>
      <Icon component={IconNode} />

      <Icon spin viewBox="0 0 1024 1024">
        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
      </Icon>
    </>
  )
}

export default App
