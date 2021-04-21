import Head from 'next/head'

export const HeadPage = ({ title = 'Pizzaria Toffanetto' }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <title>{'Pizzaria Toffanetto - ' + title}</title>
    </Head>
  )
}
