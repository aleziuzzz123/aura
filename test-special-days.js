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
