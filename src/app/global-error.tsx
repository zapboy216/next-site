'use client';

import Error from 'next/error';
import { useEffect } from 'react';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  useEffect(() => {
    // Log the error to the console or handle it in another way if needed
    console.error(props.error);
  }, [props.error]);

  return (
    <html lang={props.params.locale}>
      <body>
        {/* This is the default Next.js error component but it doesn't allow omitting the statusCode property yet. */}
        <Error statusCode={500} title="An unexpected error occurred" />
      </body>
    </html>
  );
}
