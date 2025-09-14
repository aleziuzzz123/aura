const { Resend } = require('resend');

// Debug environment variable
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0);

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Handle CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ 
          error: 'Server configuration error', 
          details: 'API key not configured' 
        }),
      };
    }

    const { to, subject, html, from } = JSON.parse(event.body);

    if (!to || !subject || !html) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const { data, error } = await resend.emails.send({
      from: from || 'Heilen Beauty Spa <mail@heilenbeautyspa.com>',
      to: [to],
      subject: subject,
      html: html,
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ 
          error: 'Failed to send email', 
          details: JSON.stringify(error) 
        }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        success: true, 
        messageId: data.id 
      }),
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ 
        error: 'Internal server error', 
        details: error.message 
      }),
    };
  }
};
