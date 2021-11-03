import { useRoutes } from 'solid-app-router'
import { Routes } from '@/Routes/Routes'

export default function App () {
  const View = useRoutes(Routes)
  return View
}
