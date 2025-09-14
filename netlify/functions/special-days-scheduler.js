const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    try {
        // Only allow POST requests
        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                headers,
                body: JSON.stringify({ error: 'Method not allowed' }),
            };
        }

        const { action, date, email } = JSON.parse(event.body);

        // Special days configuration
        const specialDays = {
            '01-01': {
                name: 'Año Nuevo',
                subject: '🎊 ¡Año Nuevo, Tú Nueva! - 35% de descuento',
                discountCode: 'NUEVO2024',
                discountPercent: 35,
                validUntil: '31-01',
                emoji: '🎊',
                color: '#ffd700'
            },
            '02-14': {
                name: 'San Valentín',
                subject: '💕 ¡San Valentín Romántico! - 20% de descuento',
                discountCode: 'AMOR2024',
                discountPercent: 20,
                validUntil: '20-02',
                emoji: '💕',
                color: '#e91e63'
            },
            '05-12': {
                name: 'Día de las Madres',
                subject: '👩‍👧‍👦 ¡Feliz Día de las Madres! - 25% de descuento',
                discountCode: 'MAMA2024',
                discountPercent: 25,
                validUntil: '15-05',
                emoji: '👩‍👧‍👦',
                color: '#ff6b9d'
            },
            '12-25': {
                name: 'Navidad',
                subject: '🎄 ¡Navidad Mágica! - 30% de descuento',
                discountCode: 'NAVIDAD2024',
                discountPercent: 30,
                validUntil: '31-12',
                emoji: '🎄',
                color: '#c41e3a'
            }
        };

        if (action === 'send-special-day-email') {
            const specialDay = specialDays[date];
            if (!specialDay) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: 'Special day not found' }),
                };
            }

            // Load email template
            const emailTemplate = await loadEmailTemplate(specialDay.name.toLowerCase().replace(/\s+/g, '-'));
            
            // Send email
            const { data, error } = await resend.emails.send({
                from: 'Heilen Beauty Spa <mail@heilenbeautyspa.com>',
                to: [email],
                subject: specialDay.subject,
                html: emailTemplate,
            });

            if (error) {
                console.error('Error sending special day email:', error);
                return {
                    statusCode: 500,
                    headers,
                    body: JSON.stringify({ error: 'Failed to send email', details: error }),
                };
            }

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ 
                    success: true, 
                    message: 'Special day email sent successfully',
                    data 
                }),
            };
        }

        if (action === 'get-special-days') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ specialDays }),
            };
        }

        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ error: 'Invalid action' }),
        };

    } catch (error) {
        console.error('Error in special days scheduler:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error', details: error.message }),
        };
    }
};

// Load email template function
async function loadEmailTemplate(templateName) {
    // This would load the actual template from the file system
    // For now, return a basic template
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Oferta Especial - Heilen Beauty Spa</title>
        </head>
        <body style="margin: 0; padding: 20px; background: #f8f6f3; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                <h1 style="color: #a0816e; text-align: center;">¡Oferta Especial!</h1>
                <p style="color: #666; text-align: center;">No te pierdas nuestra oferta especial de hoy.</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://wa.me/529982322090" style="background: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                        Reservar Ahora
                    </a>
                </div>
            </div>
        </body>
        </html>
    `;
}
