import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>MTM | Soluciones Electromecánicas</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Electricidad, mecánica y automatización de procesos productivos - Mantenimiento industrial integral - Soluciones eléctricas para tu negocio o industria."
      />
      <meta
        name="keywords"
        content="electricista, electromecanica, mecanica, automatizacion, electronico, industrial, industriales, soluciones electricas, soluciones electromecanicas, servicios electricos, servicios electromecanicos, mantenimiento industrial, mar del plata, instalaciones electricas, sistemas de automatizacion"
      />
      <meta property="og:title" content="MTM Soluciones Electromecánicas" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://mtm-electromecanica.vercel.app/" />
      <meta
        property="og:description"
        content="Electricidad, mecánica y automatización de procesos productivos - Mantenimiento industrial integral"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="MTM Soluciones Electromecánicas" />
      <meta
        name="twitter:description"
        content="Electricidad, mecánica y automatización de procesos productivos - Mantenimiento industrial integral"
      />
      <meta name="twitter:image" content="/logo.png" />

      <link rel="icon" href="/logo.ico" />

      <link rel="canonical" href="https://mtm-electromecanica.vercel.app/#home" />

      <meta name="author" content="Lucía Rodriguez" />

      <meta name="publisher" content="MTM Electromecánica" />
    </Head>
    <Component {...pageProps} />
  </>

);

export default MyApp;
