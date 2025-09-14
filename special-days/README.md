# 🎉 Special Days Email Campaign System

## Overview
This system manages automated email campaigns for special days throughout the year. It includes email templates, scheduling, and management tools for Heilen Beauty Spa.

## 📁 File Structure
```
special-days/
├── templates/                 # Email templates
│   ├── mothers-day.html      # Mother's Day template
│   ├── christmas.html        # Christmas template
│   ├── valentines-day.html   # Valentine's Day template
│   ├── new-years-day.html    # New Year's Day template
│   └── black-friday.html     # Black Friday template
├── schedules/                 # Scheduling configurations
├── special-days-manager.js   # Main management script
├── admin-interface.html      # Admin dashboard
├── EMAIL-CAMPAIGN-CALENDAR.md # Campaign documentation
└── README.md                 # This file
```

## 🚀 Quick Start

### 1. Setup
The system is already integrated with your existing email infrastructure:
- Uses Resend API for sending emails
- Netlify Functions for serverless processing
- Existing audience management

### 2. Access Admin Interface
Visit: `https://heilenbeautyspa.com/special-days/admin-interface.html`

### 3. Send Test Emails
Use the admin interface to send test emails for any special day campaign.

## 📧 Email Templates

### Available Templates
- ✅ **Mother's Day** - 18% discount, code: MAMA2024
- ✅ **Christmas** - 16% discount, code: NAVIDAD2024
- ✅ **Valentine's Day** - 12% discount, code: AMOR2024
- ✅ **New Year's Day** - 15% discount, code: NUEVO2024
- ✅ **Black Friday** - 20% discount, code: BLACKFRIDAY2024

### Template Features
- **Responsive Design**: Works on all devices
- **Brand Consistent**: Uses Heilen Beauty Spa colors and styling
- **Clear CTAs**: Prominent booking buttons
- **Discount Codes**: Unique codes for each special day
- **WhatsApp Integration**: Direct booking links

## 🎯 Special Days Calendar

### January
- **New Year's Day** (Jan 1) - 15% off

### February
- **Valentine's Day** (Feb 14) - 12% off

### March
- **International Women's Day** (Mar 8) - 16% off
- **Spring Equinox** (Mar 20) - 10% off

### April
- **Earth Day** (Apr 22) - 8% off

### May
- **Cinco de Mayo** (May 5) - 12% off
- **Mother's Day** (May 12) - 18% off

### June
- **Father's Day** (Jun 16) - 12% off
- **Summer Solstice** (Jun 21) - 10% off

### July
- **Independence Day** (Jul 4) - 12% off

### August
- **Back to School** (Aug 15) - 15% off

### September
- **Mexican Independence** (Sep 16) - 16% off
- **Autumn Equinox** (Sep 22) - 10% off

### October
- **Halloween** (Oct 31) - 12% off

### November
- **Black Friday** (Nov 24) - 20% off
- **Cyber Monday** (Nov 27) - 18% off

### December
- **Christmas** (Dec 25) - 16% off
- **New Year's Eve** (Dec 31) - 14% off

## 🔧 Technical Implementation

### Email Sending
```javascript
// Send special day email
const specialDaysManager = new SpecialDaysManager();
await specialDaysManager.sendSpecialDayEmail('customer@email.com', specialDay);
```

### Template Loading
```javascript
// Load email template
const template = await specialDaysManager.loadEmailTemplate('mothers-day');
```

### Check Special Days
```javascript
// Check if today is a special day
const todaySpecial = specialDaysManager.isSpecialDay();
if (todaySpecial) {
    // Send special day email
}
```

## 📊 Management Features

### Admin Dashboard
- View all special day campaigns
- Send test emails
- Preview email templates
- Track upcoming campaigns
- Monitor campaign status

### Campaign Status
- ✅ **Ready**: Template complete, ready to send
- ⏳ **Pending**: Template needs to be created
- 🔄 **Scheduled**: Campaign scheduled for future date
- 📧 **Sent**: Campaign has been sent

## 🎨 Customization

### Adding New Special Days
1. Create new template in `templates/` folder
2. Add special day to `special-days-manager.js`
3. Update admin interface if needed
4. Test the new campaign

### Modifying Templates
1. Edit HTML template file
2. Test in admin interface
3. Deploy changes
4. Send test email

### Changing Discounts
1. Update discount percentage in manager
2. Update template if needed
3. Test new discount
4. Deploy changes

## 📈 Performance Tracking

### Metrics to Monitor
- **Open Rate**: Target 25%+
- **Click Rate**: Target 5%+
- **Conversion Rate**: Target 2%+
- **Revenue**: Track bookings from campaigns

### A/B Testing
- Test different subject lines
- Test different discount percentages
- Test different send times
- Test different messaging

## 🚨 Troubleshooting

### Common Issues
1. **Email not sending**: Check Resend API key
2. **Template not loading**: Check file path
3. **Discount code not working**: Verify code in template
4. **Mobile not responsive**: Check CSS media queries

### Debug Steps
1. Check browser console for errors
2. Verify Netlify Functions logs
3. Test email delivery
4. Check template rendering

## 🔒 Security

### API Keys
- Store in Netlify environment variables
- Never commit to repository
- Rotate regularly

### Email Validation
- Validate email addresses before sending
- Check for spam triggers
- Monitor bounce rates

## 📞 Support

### Technical Support
- Check Netlify Functions logs
- Verify Resend API status
- Test email delivery
- Debug template issues

### Content Updates
- Update pricing information
- Modify discount percentages
- Change service descriptions
- Update contact information

## 🎯 Future Enhancements

### Planned Features
- [ ] Automated scheduling
- [ ] A/B testing interface
- [ ] Performance analytics
- [ ] Customer segmentation
- [ ] Social media integration
- [ ] SMS campaigns
- [ ] Push notifications

### Integration Ideas
- [ ] Calendar integration
- [ ] CRM integration
- [ ] Social media posting
- [ ] Inventory management
- [ ] Customer feedback

---

**Last Updated**: January 2024  
**Version**: 1.0.0  
**Maintained By**: Heilen Beauty Spa Team
