import { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'

import { useIframeWalletHandler } from '@/hooks/useIframeWalletHandler'
import routes from '~react-pages'

function Redirect({ to }: { to: string }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [navigate, to])
  return null
}

export default function App() {
  useIframeWalletHandler()
  return useRoutes([...routes, { path: '*', element: <Redirect to="/" /> }])
}
