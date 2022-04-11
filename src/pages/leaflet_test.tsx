import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'

const LeafletTest: NextPage = () => {
  const Leaflet = useMemo(
    () =>
      dynamic(() => import('../components/leaflet'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )
  return <Leaflet />
}

export default LeafletTest
