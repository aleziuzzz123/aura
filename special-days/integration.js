// Special Days Integration Script
// This script integrates the special days system with the main website

class SpecialDaysIntegration {
    constructor() {
        this.manager = new SpecialDaysManager();
        this.isInitialized = false;
    }

    // Initialize the special days system
    async init() {
        if (this.isInitialized) return;

        try {
            // Check if today is a special day
            const todaySpecial = this.manager.isSpecialDay();
            if (todaySpecial) {
                console.log('🎉 Today is a special day:', todaySpecial.name);
                this.showSpecialDayNotification(todaySpecial);
            }

            // Check for upcoming special days
            this.checkUpcomingSpecialDays();

            this.isInitialized = true;
        } catch (error) {
            console.error('Error initializing special days system:', error);
        }
    }

    // Show special day notification
    showSpecialDayNotification(specialDay) {
        // Create notification banner
        const banner = document.createElement('div');
        banner.id = 'special-day-banner';
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, ${specialDay.color} 0%, ${specialDay.color}dd 100%);
            color: white;
            padding: 15px 20px;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            animation: slideDown 0.5s ease-out;
        `;

        banner.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                <span style="font-size: 24px;">${specialDay.emoji}</span>
                <div>
                    <strong style="font-size: 18px;">${specialDay.name} - ${specialDay.discountPercent}% de descuento</strong>
                    <br>
                    <span style="font-size: 14px; opacity: 0.9;">Código: ${specialDay.discountCode}</span>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 12px; border-radius: 20px; cursor: pointer; font-size: 12px;">
                    ✕
                </button>
            </div>
        `;

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);

        // Add banner to page
        document.body.insertBefore(banner, document.body.firstChild);

        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (banner.parentNode) {
                banner.remove();
            }
        }, 10000);
    }

    // Check for upcoming special days
    checkUpcomingSpecialDays() {
        const upcoming = this.manager.getUpcomingSpecialDays(7); // Next 7 days
        
        if (upcoming.length > 0) {
            console.log('📅 Upcoming special days:', upcoming);
            this.showUpcomingNotification(upcoming[0]);
        }
    }

    // Show upcoming special day notification
    showUpcomingNotification(specialDay) {
        // Only show if user hasn't seen it today
        const lastShown = localStorage.getItem('upcoming-special-day');
        const today = new Date().toDateString();
        
        if (lastShown === today) return;

        // Create upcoming notification
        const notification = document.createElement('div');
        notification.id = 'upcoming-special-day';
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            border: 2px solid ${specialDay.color};
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 9999;
            max-width: 300px;
            animation: slideUp 0.5s ease-out;
        `;

        notification.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 32px; margin-bottom: 10px;">${specialDay.emoji}</div>
                <h4 style="color: #a0816e; margin: 0 0 10px 0; font-size: 16px;">${specialDay.name} se acerca</h4>
                <p style="color: #666; margin: 0 0 15px 0; font-size: 14px;">${specialDay.discountPercent}% de descuento</p>
                <button onclick="this.parentElement.parentElement.remove(); localStorage.setItem('upcoming-special-day', new Date().toDateString());" 
                        style="background: ${specialDay.color}; color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-size: 12px;">
                    Ver Oferta
                </button>
            </div>
        `;

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Add notification to page
        document.body.appendChild(notification);

        // Auto-remove after 15 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 15000);
    }

    // Send special day email
    async sendSpecialDayEmail(email, specialDay) {
        try {
            const result = await this.manager.sendSpecialDayEmail(email, specialDay);
            console.log('Special day email sent:', result);
            return result;
        } catch (error) {
            console.error('Error sending special day email:', error);
            throw error;
        }
    }

    // Get special day by date
    getSpecialDay(date) {
        return this.manager.getSpecialDay(date);
    }

    // Get all special days
    getAllSpecialDays() {
        return this.manager.getAllSpecialDays();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load the special days manager
    const script = document.createElement('script');
    script.src = '/special-days/special-days-manager.js';
    script.onload = function() {
        // Initialize the integration
        window.specialDaysIntegration = new SpecialDaysIntegration();
        window.specialDaysIntegration.init();
    };
    document.head.appendChild(script);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpecialDaysIntegration;
} else {
    window.SpecialDaysIntegration = SpecialDaysIntegration;
}
