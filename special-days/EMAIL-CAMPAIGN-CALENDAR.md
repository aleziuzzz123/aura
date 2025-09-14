# 📅 Email Campaign Calendar - Heilen Beauty Spa

## Overview
This document outlines the complete email marketing strategy for special days throughout the year. Each special day has a unique email template, discount code, and targeted messaging.

## 🎯 Campaign Strategy

### Goals
- Increase customer engagement during special occasions
- Drive bookings with targeted discounts
- Build brand loyalty through personalized messaging
- Maximize revenue during peak seasons

### Target Audience
- Existing customers (newsletter subscribers)
- Potential customers interested in beauty treatments
- Special occasion gift buyers

## 📊 Special Days Calendar

### January
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Jan 1 | Año Nuevo | 35% | NUEVO2024 | new-years-day.html | ✅ Ready |

### February
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Feb 14 | San Valentín | 20% | AMOR2024 | valentines-day.html | ✅ Ready |

### March
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Mar 8 | Día Internacional de la Mujer | 25% | MUJER2024 | womens-day.html | ⏳ Pending |
| Mar 20 | Equinoccio de Primavera | 20% | PRIMAVERA2024 | spring-equinox.html | ⏳ Pending |

### April
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Apr 22 | Día de la Tierra | 15% | TIERRA2024 | earth-day.html | ⏳ Pending |

### May
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| May 5 | Cinco de Mayo | 20% | CINCO2024 | cinco-de-mayo.html | ⏳ Pending |
| May 12 | Día de las Madres | 25% | MAMA2024 | mothers-day.html | ✅ Ready |

### June
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Jun 16 | Día del Padre | 20% | PAPA2024 | fathers-day.html | ⏳ Pending |
| Jun 21 | Solsticio de Verano | 20% | VERANO2024 | summer-solstice.html | ⏳ Pending |

### July
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Jul 4 | Día de la Independencia | 20% | INDEPENDENCIA2024 | independence-day.html | ⏳ Pending |

### August
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Aug 15 | Regreso a Clases | 30% | ESTUDIANTE2024 | back-to-school.html | ⏳ Pending |

### September
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Sep 16 | Día de la Independencia de México | 25% | MEXICO2024 | mexican-independence.html | ⏳ Pending |
| Sep 22 | Equinoccio de Otoño | 20% | OTONO2024 | autumn-equinox.html | ⏳ Pending |

### October
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Oct 31 | Halloween | 20% | HALLOWEEN2024 | halloween.html | ⏳ Pending |

### November
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Nov 24 | Black Friday | 40% | BLACKFRIDAY2024 | black-friday.html | ⏳ Pending |
| Nov 27 | Cyber Monday | 35% | CYBER2024 | cyber-monday.html | ⏳ Pending |

### December
| Date | Event | Discount | Code | Template | Status |
|------|-------|----------|------|----------|--------|
| Dec 25 | Navidad | 30% | NAVIDAD2024 | christmas.html | ✅ Ready |
| Dec 31 | Nochevieja | 25% | NOCHEVIEJA2024 | new-years-eve.html | ⏳ Pending |

## 🎨 Email Template Design

### Design Principles
- **Consistent Branding**: All emails follow the Heilen Beauty Spa color scheme
- **Mobile-First**: Responsive design for all devices
- **Clear CTAs**: Prominent call-to-action buttons
- **Personal Touch**: Personalized messaging for each occasion

### Color Scheme
- **Primary**: #a0816e (Heilen Brown)
- **Secondary**: #d4af8c (Light Brown)
- **Accent**: Varies by special day
- **Background**: #f8f6f3 (Light Cream)

### Template Structure
1. **Header**: Logo, special day title, and emoji
2. **Main Message**: Personalized greeting and offer details
3. **Discount Section**: Prominent discount code and percentage
4. **Service Packages**: 3 featured treatments with prices
5. **CTA Buttons**: WhatsApp booking and website links
6. **Special Message**: Themed message for the occasion
7. **Footer**: Contact information and unsubscribe link

## 📧 Email Content Strategy

### Subject Lines
- Use emojis to grab attention
- Include discount percentage
- Keep under 50 characters
- Create urgency when appropriate

### Email Body
- **Greeting**: Personalized and warm
- **Offer**: Clear discount and validity period
- **Services**: 3 featured treatments with descriptions
- **CTA**: Multiple booking options
- **Message**: Themed and inspirational

### Call-to-Actions
- **Primary**: WhatsApp booking with pre-filled message
- **Secondary**: Website link to view all services
- **Tertiary**: Social media links (if applicable)

## 🚀 Implementation

### Technical Setup
1. **Email Templates**: Stored in `/special-days/templates/`
2. **Scheduling**: Managed by `special-days-manager.js`
3. **Sending**: Handled by Netlify Functions
4. **Audience**: Managed through Resend API

### Automation
- **Trigger**: Date-based scheduling
- **Audience**: Newsletter subscribers
- **Frequency**: Once per special day
- **Timing**: Morning (9:00 AM local time)

### Testing
- **Preview**: Test all templates before sending
- **Mobile**: Verify mobile responsiveness
- **Links**: Check all links and CTAs
- **Content**: Proofread all text and offers

## 📈 Performance Tracking

### Metrics to Monitor
- **Open Rate**: Target 25%+
- **Click Rate**: Target 5%+
- **Conversion Rate**: Target 2%+
- **Revenue**: Track bookings from each campaign

### A/B Testing
- **Subject Lines**: Test different approaches
- **Discounts**: Test different percentages
- **Timing**: Test different send times
- **Content**: Test different messaging

## 🔧 Maintenance

### Monthly Tasks
- Review and update templates
- Check discount code validity
- Update pricing if needed
- Analyze performance metrics

### Quarterly Tasks
- Review overall strategy
- Update audience segmentation
- Refresh template designs
- Plan new special days

### Annual Tasks
- Complete calendar review
- Update all discount codes
- Refresh all templates
- Plan next year's strategy

## 📞 Support

### Technical Issues
- Check Netlify Functions logs
- Verify Resend API status
- Test email delivery
- Debug template issues

### Content Updates
- Update pricing information
- Modify discount percentages
- Change service descriptions
- Update contact information

---

**Last Updated**: January 2024  
**Next Review**: February 2024  
**Maintained By**: Heilen Beauty Spa Team
