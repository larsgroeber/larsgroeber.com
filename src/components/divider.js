import React from 'react'
import { Config } from '../config'

const Divider = () => (
  <div
    style={{
      borderBottom: `solid 5px ${Config.theme.primary}`,
      margin: '5rem 0 1rem 0',
    }}
  />
)

export default Divider
