import '../styles/globals.css';
import { Helmet } from 'react-helmet';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Electrician", 
            "@id": "Electrician",
            "url": "https://mtmelectromecanica.com",
            "telephone": "+54 9 223 582 8183",
            "email": "mtm.solucioneselectromecanicas@gmail.com",
            "logo": "https://mtmelectromecanica.com/logo.webp",
            "paymentAccepted": [
              "Cash",
              "Credit Card",
              "Bank Transfer",
              "Efectivo",
              "Tarjeta de Crédito",
              "Transferencia Bancaria"
            ],
            "address": "Mar del Plata, Buenos Aires, Argentina",
            "description": "Electricidad, mecánica y automatización de procesos productivos. Mantenimiento industrial integral.",
            "name": "MTM Electromecánica",
            "openingHours": "Mo, Tu, We, Th, Fr",
            "areaServed": "Mar del Plata Area",
            "latitude": "-34.931471",
            "longitude": "-57.958678"
          }
        `}
      </script>

      <title>Electricistas en Mar del Plata | MTM Soluciones</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Electricidad, mecánica y automatización de procesos productivos. Mantenimiento industrial integral."
      />
      <meta
        name="keywords"
        content="electricista, electromecanica, mecanica, automatizacion, electronico, industrial, industriales, soluciones electricas, soluciones electromecanicas, servicios electricos, servicios electromecanicos, mantenimiento industrial, mar del plata, instalaciones electricas, sistemas de automatizacion"
      />
      <meta property="og:title" content="MTM Soluciones Electromecánicas" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/logo.png" />
      <meta
        property="og:url"
        content="https://mtmelectromecanica.com/"
      />
      <meta
        property="og:description"
        content="Electricidad, mecánica y automatización de procesos productivos. Mantenimiento industrial integral."
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="MTM Soluciones Electromecánicas" />
      <meta
        name="twitter:description"
        content="Electricidad, mecánica y automatización de procesos productivos. Mantenimiento industrial integral."
      />
      <meta name="twitter:image" content="/logo.png" />

      <link rel="icon" href="/logo.ico" />

      <link rel="canonical" href="https://mtmelectromecanica.com/" />

      <meta name="author" content="Lucía Rodriguez" />

      <meta name="publisher" content="MTM Electromecánica" />
    </Helmet>
    <Component {...pageProps} />
  </>
);

export default MyApp;
