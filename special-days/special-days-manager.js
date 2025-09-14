// Special Days Email Campaign Manager
// This file manages all special day email campaigns throughout the year

class SpecialDaysManager {
    constructor() {
        this.specialDays = {
            // January
            '01-01': {
                name: 'Año Nuevo',
                template: 'new-years-day.html',
                subject: '🎊 ¡Año Nuevo, Tú Nueva! - 35% de descuento',
                discountCode: 'NUEVO2024',
                discountPercent: 35,
                validUntil: '31-01',
                emoji: '🎊',
                color: '#ffd700'
            },
            
            // February
            '02-14': {
                name: 'San Valentín',
                template: 'valentines-day.html',
                subject: '💕 ¡San Valentín Romántico! - 20% de descuento',
                discountCode: 'AMOR2024',
                discountPercent: 20,
                validUntil: '20-02',
                emoji: '💕',
                color: '#e91e63'
            },
            
            // March
            '03-08': {
                name: 'Día Internacional de la Mujer',
                template: 'womens-day.html',
                subject: '👩 ¡Celebra tu día! - 25% de descuento',
                discountCode: 'MUJER2024',
                discountPercent: 25,
                validUntil: '15-03',
                emoji: '👩',
                color: '#ff6b9d'
            },
            
            '03-20': {
                name: 'Equinoccio de Primavera',
                template: 'spring-equinox.html',
                subject: '🌸 ¡Renovación de Primavera! - 20% de descuento',
                discountCode: 'PRIMAVERA2024',
                discountPercent: 20,
                validUntil: '30-03',
                emoji: '🌸',
                color: '#4caf50'
            },
            
            // April
            '04-22': {
                name: 'Día de la Tierra',
                template: 'earth-day.html',
                subject: '🌍 ¡Belleza Natural! - 15% de descuento',
                discountCode: 'TIERRA2024',
                discountPercent: 15,
                validUntil: '30-04',
                emoji: '🌍',
                color: '#4caf50'
            },
            
            // May
            '05-12': {
                name: 'Día de las Madres',
                template: 'mothers-day.html',
                subject: '👩‍👧‍👦 ¡Feliz Día de las Madres! - 25% de descuento',
                discountCode: 'MAMA2024',
                discountPercent: 25,
                validUntil: '15-05',
                emoji: '👩‍👧‍👦',
                color: '#ff6b9d'
            },
            
            '05-05': {
                name: 'Cinco de Mayo',
                template: 'cinco-de-mayo.html',
                subject: '🇲🇽 ¡Fiesta de Belleza! - 20% de descuento',
                discountCode: 'CINCO2024',
                discountPercent: 20,
                validUntil: '10-05',
                emoji: '🇲🇽',
                color: '#ff9800'
            },
            
            // June
            '06-16': {
                name: 'Día del Padre',
                template: 'fathers-day.html',
                subject: '👨 ¡Día del Padre! - 20% de descuento',
                discountCode: 'PAPA2024',
                discountPercent: 20,
                validUntil: '25-06',
                emoji: '👨',
                color: '#2196f3'
            },
            
            '06-21': {
                name: 'Solsticio de Verano',
                template: 'summer-solstice.html',
                subject: '☀️ ¡Lista para el Verano! - 20% de descuento',
                discountCode: 'VERANO2024',
                discountPercent: 20,
                validUntil: '30-06',
                emoji: '☀️',
                color: '#ff9800'
            },
            
            // July
            '07-04': {
                name: 'Día de la Independencia',
                template: 'independence-day.html',
                subject: '🇺🇸 ¡Red, White & Beautiful! - 20% de descuento',
                discountCode: 'INDEPENDENCIA2024',
                discountPercent: 20,
                validUntil: '10-07',
                emoji: '🇺🇸',
                color: '#f44336'
            },
            
            // August
            '08-15': {
                name: 'Regreso a Clases',
                template: 'back-to-school.html',
                subject: '🎓 ¡Especial Estudiantes! - 30% de descuento',
                discountCode: 'ESTUDIANTE2024',
                discountPercent: 30,
                validUntil: '30-08',
                emoji: '🎓',
                color: '#9c27b0'
            },
            
            // September
            '09-16': {
                name: 'Día de la Independencia de México',
                template: 'mexican-independence.html',
                subject: '🇲🇽 ¡Viva la Belleza! - 25% de descuento',
                discountCode: 'MEXICO2024',
                discountPercent: 25,
                validUntil: '25-09',
                emoji: '🇲🇽',
                color: '#4caf50'
            },
            
            '09-22': {
                name: 'Equinoccio de Otoño',
                template: 'autumn-equinox.html',
                subject: '🍂 ¡Belleza de Otoño! - 20% de descuento',
                discountCode: 'OTONO2024',
                discountPercent: 20,
                validUntil: '30-09',
                emoji: '🍂',
                color: '#ff9800'
            },
            
            // October
            '10-31': {
                name: 'Halloween',
                template: 'halloween.html',
                subject: '🎃 ¡Spooky Beautiful! - 20% de descuento',
                discountCode: 'HALLOWEEN2024',
                discountPercent: 20,
                validUntil: '05-11',
                emoji: '🎃',
                color: '#ff9800'
            },
            
            // November
            '11-24': {
                name: 'Black Friday',
                template: 'black-friday.html',
                subject: '🖤 ¡Black Friday Beauty! - 40% de descuento',
                discountCode: 'BLACKFRIDAY2024',
                discountPercent: 40,
                validUntil: '30-11',
                emoji: '🖤',
                color: '#000000'
            },
            
            '11-27': {
                name: 'Cyber Monday',
                template: 'cyber-monday.html',
                subject: '💻 ¡Cyber Beauty! - 35% de descuento',
                discountCode: 'CYBER2024',
                discountPercent: 35,
                validUntil: '30-11',
                emoji: '💻',
                color: '#2196f3'
            },
            
            // December
            '12-25': {
                name: 'Navidad',
                template: 'christmas.html',
                subject: '🎄 ¡Navidad Mágica! - 30% de descuento',
                discountCode: 'NAVIDAD2024',
                discountPercent: 30,
                validUntil: '31-12',
                emoji: '🎄',
                color: '#c41e3a'
            },
            
            '12-31': {
                name: 'Nochevieja',
                template: 'new-years-eve.html',
                subject: '🎊 ¡Ring in the New Year! - 25% de descuento',
                discountCode: 'NOCHEVIEJA2024',
                discountPercent: 25,
                validUntil: '05-01',
                emoji: '🎊',
                color: '#ffd700'
            }
        };
        
        this.audienceId = '5bdcc1af-98be-4def-bf26-77e3904ebf88';
        this.fromEmail = 'Heilen Beauty Spa <mail@heilenbeautyspa.com>';
    }
    
    // Get today's date in MM-DD format
    getTodayDate() {
        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${month}-${day}`;
    }
    
    // Check if today is a special day
    isSpecialDay() {
        const today = this.getTodayDate();
        return this.specialDays[today] || null;
    }
    
    // Get special day by date
    getSpecialDay(date) {
        return this.specialDays[date] || null;
    }
    
    // Get all special days
    getAllSpecialDays() {
        return this.specialDays;
    }
    
    // Send special day email
    async sendSpecialDayEmail(email, specialDay) {
        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: email,
                    subject: specialDay.subject,
                    from: this.fromEmail,
                    addToAudience: true,
                    html: await this.loadEmailTemplate(specialDay.template)
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Special day email sent successfully:', result);
            return result;
        } catch (error) {
            console.error('Error sending special day email:', error);
            throw error;
        }
    }
    
    // Load email template
    async loadEmailTemplate(templateName) {
        try {
            const response = await fetch(`/special-days/templates/${templateName}`);
            if (!response.ok) {
                throw new Error(`Template not found: ${templateName}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Error loading email template:', error);
            // Return a fallback template
            return this.getFallbackTemplate();
        }
    }
    
    // Fallback template if specific template is not found
    getFallbackTemplate() {
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
    
    // Schedule special day emails (for future implementation)
    scheduleSpecialDayEmails() {
        // This would integrate with a scheduling service like Netlify Functions
        // or a third-party service like Zapier or Make.com
        console.log('Special day email scheduling would be implemented here');
    }
    
    // Get upcoming special days
    getUpcomingSpecialDays(days = 30) {
        const upcoming = [];
        const today = new Date();
        
        for (let i = 0; i < days; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const dateKey = `${month}-${day}`;
            
            if (this.specialDays[dateKey]) {
                upcoming.push({
                    date: dateKey,
                    ...this.specialDays[dateKey]
                });
            }
        }
        
        return upcoming;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpecialDaysManager;
} else {
    window.SpecialDaysManager = SpecialDaysManager;
}
