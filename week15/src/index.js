import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Root from './routes/Root'
import ErrorPages from './ErrorPages'
import Contact from './routes/Contact'
import {loader as rootLoader, action as rootAction} from './routes/Root'
import {loader as contactLoader} from './routes/Contact'
import EditContact, {action as editAction} from './routes/Edit'
import { action as destroyAction } from "./routes/Destroy";
import Index from './routes/Index'
import Hakkinda from './routes/Hakkinda'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPages />,
    loader:rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
      {
        path: "/hakkinda",
        element: <Hakkinda />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
