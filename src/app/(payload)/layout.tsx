import type { ServerFunctionClient } from 'payload'
import React from 'react'

import '@payloadcms/next/css'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'

  const { handleServerFunctions } = await import('@payloadcms/next/layouts')
  const config = await import('@payload-config')
  const { importMap } = await import('./admin/importMap.js')

  return handleServerFunctions({
    ...args,
    config: config.default,
    importMap,
  })
}

const Layout = async ({ children }: Args) => {
  const { RootLayout } = await import('@payloadcms/next/layouts')
  const config = await import('@payload-config')
  const { importMap } = await import('./admin/importMap.js')

  return RootLayout({
    children,
    config: config.default,
    importMap,
    serverFunction,
  })
}

export default Layout