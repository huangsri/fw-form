import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

import { PageBottom, Navbar } from '@/features/layout/components'
import { FormContainer } from '@/features/assistant-form/containers'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Personal Assistant Service | Fastwork.co</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Navbar />

      <FormContainer />

      <PageBottom />
    </Fragment>
  )
}

export default Home
