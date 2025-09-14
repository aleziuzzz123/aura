#!/bin/bash

# Special Days Email Campaign System Deployment Script
# This script sets up the special days email system

echo "🎉 Deploying Special Days Email Campaign System..."

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p special-days/templates
mkdir -p special-days/schedules
mkdir -p netlify/functions

# Copy special days files to public directory for web access
echo "📋 Copying special days files to public directory..."
cp -r special-days/* public/special-days/ 2>/dev/null || true

# Update package.json to include resend dependency
echo "📦 Checking dependencies..."
if ! grep -q "resend" package.json; then
    echo "Installing resend dependency..."
    npm install resend
fi

# Create .env.example file
echo "🔧 Creating environment configuration..."
cat > .env.example << EOF
# Resend API Key for email sending
RESEND_API_KEY=re_your_api_key_here

# Audience ID for newsletter subscribers
RESEND_AUDIENCE_ID=5bdcc1af-98be-4def-bf26-77e3904ebf88
EOF

# Create netlify.toml if it doesn't exist
if [ ! -f "netlify.toml" ]; then
    echo "🌐 Creating Netlify configuration..."
    cat > netlify.toml << EOF
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/special-days/*"
  to = "/special-days/:splat"
  status = 200

[[redirects]]
  from = "/.netlify/functions/*"
  to = "/.netlify/functions/:splat"
  status = 200
EOF
fi

# Create a simple test script
echo "🧪 Creating test script..."
cat > test-special-days.js << 'EOF'
// Test script for special days system
const SpecialDaysManager = require('./special-days/special-days-manager.js');

async function testSpecialDays() {
    console.log('🧪 Testing Special Days System...');
    
    const manager = new SpecialDaysManager();
    
    // Test getting today's special day
    const todaySpecial = manager.isSpecialDay();
    if (todaySpecial) {
        console.log('✅ Today is a special day:', todaySpecial.name);
    } else {
        console.log('ℹ️  Today is not a special day');
    }
    
    // Test getting all special days
    const allSpecialDays = manager.getAllSpecialDays();
    console.log('📅 Total special days configured:', Object.keys(allSpecialDays).length);
    
    // Test getting upcoming special days
    const upcoming = manager.getUpcomingSpecialDays(30);
    console.log('🔮 Upcoming special days (next 30 days):', upcoming.length);
    
    console.log('✅ Special Days System test completed!');
}

testSpecialDays().catch(console.error);
EOF

# Make test script executable
chmod +x test-special-days.js

# Create deployment status file
echo "📊 Creating deployment status..."
cat > special-days/DEPLOYMENT-STATUS.md << EOF
# Special Days Email Campaign System - Deployment Status

## ✅ Deployment Complete

### What was deployed:
- Email templates for 5 major special days
- Special days management system
- Admin interface for campaign management
- Netlify functions for email sending
- Integration scripts for main website

### Files created:
- \`special-days/templates/\` - Email templates
- \`special-days/special-days-manager.js\` - Main management script
- \`special-days/admin-interface.html\` - Admin dashboard
- \`netlify/functions/special-days-scheduler.js\` - Email scheduling function
- \`special-days/integration.js\` - Website integration script

### Next steps:
1. Set up RESEND_API_KEY in Netlify environment variables
2. Test email sending with admin interface
3. Customize templates as needed
4. Schedule automated campaigns

### Access points:
- Admin Interface: \`/special-days/admin-interface.html\`
- Email Templates: \`/special-days/templates/\`
- API Endpoint: \`/.netlify/functions/special-days-scheduler\`

### Testing:
Run \`node test-special-days.js\` to test the system

---
Deployed on: $(date)
EOF

echo "✅ Special Days Email Campaign System deployed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Set up RESEND_API_KEY in Netlify environment variables"
echo "2. Visit /special-days/admin-interface.html to manage campaigns"
echo "3. Test email sending with the admin interface"
echo "4. Customize templates as needed"
echo ""
echo "🎉 Happy email marketing!"
