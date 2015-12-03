import React from 'react'
import { Router } from 'react-router'
import { render } from 'react-dom'
import { createHistory } from 'history'
import routes from './routes/RootRoute'

render(
  <Router routes={routes} history={createHistory()} />,
  document.getElementById('app')
)
