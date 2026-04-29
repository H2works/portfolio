const ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:8788',
  'http://localhost:8788',
  'https://portfolio.h2works.xyz',
  'https://www.h2works.xyz',
];

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function onRequestOptions({ request }) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();

    const microCMSResponse = await fetch(
      `${env.MICROCMS_BASE_URL}/api/v1/contact`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MICROCMS-API-KEY': env.MICROCMS_TOKEN,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await microCMSResponse.json();

    return new Response(JSON.stringify(data), {
      status: microCMSResponse.status,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders(request),
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders(request),
      },
    });
  }
}