exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { email, type, bookingData } = JSON.parse(event.body);

    // Validate required fields
    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Resend API configuration
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_API_URL = 'https://api.resend.com/emails';

    let emailData;

    if (type === 'newsletter') {
      // Newsletter welcome email
      emailData = {
        from: 'Heilen Beauty Spa <mail@heilenbeautyspa.com>',
        to: [email],
        subject: '¡Bienvenida! Tu 10% de descuento te espera',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px;">¡Bienvenida a Heilen Beauty Spa!</h1>
              <p style="color: #f0f0f0; margin: 10px 0; font-size: 16px;">Tu 10% de descuento especial te espera</p>
            </div>
            
            <div style="background: white; color: #333; padding: 30px; border-radius: 15px; margin-bottom: 20px; text-align: center;">
              <h2 style="color: #667eea; margin: 0 0 20px 0; font-size: 24px;">🎉 ¡Tu 10% de descuento especial!</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="font-size: 18px; margin: 0; color: #333;"><strong>Código de descuento:</strong></p>
                <p style="font-size: 24px; margin: 10px 0; color: #667eea; font-weight: bold; letter-spacing: 2px;">BIENVENIDA10</p>
              </div>
              <p style="color: #666; margin: 0; font-size: 14px;">Válido por 30 días desde hoy</p>
            </div>

            <div style="background: white; color: #333; padding: 25px; border-radius: 15px; margin-bottom: 20px;">
              <h3 style="color: #667eea; margin: 0 0 15px 0;">✨ Lo que obtienes al suscribirte:</h3>
              <ul style="color: #555; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>Promociones exclusivas solo para suscriptores</li>
                <li>Consejos de expertos en belleza y bienestar</li>
                <li>Noticias sobre nuevos tratamientos</li>
                <li>Ofertas especiales en servicios premium</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://wa.me/529982322090?text=Hola!%20Tengo%20el%20código%20BIENVENIDA10%20para%20mi%20descuento%20del%2010%25%20en%20Heilen%20Beauty%20Spa.%20¿Podrían%20ayudarme%20a%20agendar%20mi%20cita?%20Gracias!" 
                 style="background: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; margin: 10px;">
                📱 Reservar con Descuento
              </a>
            </div>

            <div style="background: white; color: #333; padding: 25px; border-radius: 15px; margin-bottom: 20px;">
              <h3 style="color: #667eea; margin: 0 0 15px 0;">📍 Nuestra Ubicación</h3>
              <p style="margin: 5px 0; color: #555;"><strong>Plaza Aura, Cancún</strong></p>
              <p style="margin: 5px 0; color: #555;">Av. Tulum, Mz. 1, Lt. 1, Local 1</p>
              <p style="margin: 5px 0; color: #555;">Cancún, Quintana Roo, México</p>
              <p style="margin: 5px 0; color: #555;">📞 +52 998 232 2090</p>
              <p style="margin: 5px 0; color: #555;">🕒 Lun - Sáb: 9:00 AM - 8:00 PM</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
              <p style="color: #f0f0f0; margin: 0; font-size: 14px;">Gracias por unirte a nuestra comunidad de belleza y bienestar</p>
              <p style="color: #f0f0f0; margin: 5px 0 0 0; font-size: 12px;">© 2024 Heilen Beauty Spa. Todos los derechos reservados.</p>
              <p style="color: #f0f0f0; margin: 10px 0 0 0; font-size: 12px;">
                <a href="#" style="color: #f0f0f0; text-decoration: underline;">Cancelar suscripción</a>
              </p>
            </div>
          </div>
        `
      };
    } else if (type === 'booking') {
      // Booking confirmation email
      emailData = {
        from: 'Heilen Beauty Spa <mail@heilenbeautyspa.com>',
        to: [email],
        subject: `Confirmación de cita - ${bookingData.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 28px;">¡Cita Confirmada!</h1>
              <p style="color: #f0f0f0; margin: 10px 0; font-size: 16px;">Tu reserva en Heilen Beauty Spa está confirmada</p>
            </div>
            
            <div style="background: white; color: #333; padding: 30px; border-radius: 15px; margin-bottom: 20px;">
              <h2 style="color: #667eea; margin: 0 0 20px 0;">Detalles de tu cita</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                <p style="margin: 10px 0;"><strong>Nombre:</strong> ${bookingData.name}</p>
                <p style="margin: 10px 0;"><strong>Servicio:</strong> ${bookingData.service}</p>
                <p style="margin: 10px 0;"><strong>Fecha:</strong> ${bookingData.date}</p>
                <p style="margin: 10px 0;"><strong>Hora:</strong> ${bookingData.time}</p>
                <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${bookingData.phone}</p>
              </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://wa.me/529982322090?text=Hola!%20Confirmo%20mi%20cita%20para%20${bookingData.service}%20el%20${bookingData.date}%20a%20las%20${bookingData.time}.%20Mi%20nombre%20es%20${bookingData.name}.%20Gracias!" 
                 style="background: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; margin: 10px;">
                📱 Confirmar por WhatsApp
              </a>
            </div>

            <div style="background: white; color: #333; padding: 25px; border-radius: 15px; margin-bottom: 20px;">
              <h3 style="color: #667eea; margin: 0 0 15px 0;">📍 Nuestra Ubicación</h3>
              <p style="margin: 5px 0; color: #555;"><strong>Plaza Aura, Cancún</strong></p>
              <p style="margin: 5px 0; color: #555;">Av. Tulum, Mz. 1, Lt. 1, Local 1</p>
              <p style="margin: 5px 0; color: #555;">Cancún, Quintana Roo, México</p>
              <p style="margin: 5px 0; color: #555;">📞 +52 998 232 2090</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3);">
              <p style="color: #f0f0f0; margin: 0; font-size: 14px;">¡Esperamos verte pronto en Heilen Beauty Spa!</p>
              <p style="color: #f0f0f0; margin: 5px 0 0 0; font-size: 12px;">© 2024 Heilen Beauty Spa. Todos los derechos reservados.</p>
            </div>
          </div>
        `
      };
    } else {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email type' })
      };
    }

    // Send email via Resend API
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to send email', details: errorData })
      };
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: result.id 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error', 
        details: error.message 
      })
    };
  }
};
