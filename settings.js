require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAK0cLVuckJBBVgQAAG8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGBDkGtERg4iCqEArtLoxDwUUlxGhuigQnPDfN7Cnp+dhd7aXpyKrIvPkOSfzByirvEY26oH6A2CSt5Ci4Uh7jIAKZk2SIALGIIYUAhVoW9Po3cTmJCfM5QXWYy0hSylp8ox5GUmOfubjSj8n60v0BO5jgJuwyKM*JIy2frw0FjiEuePYifRcufHimpmt0PH9+cpZsZ729rXf3bwncB8ywpzkZWrgDF0QgYWNehfm5HPwRZdZyZuJ7rPX8MpUYY*I6ZKl7BHD42xTMscTvF6MpcL56efgX29ZyM8SPiXOnHw*nqQgOK9fX4PpUbTx0irEbHeo2uasHdI3+HWelii2YlTSnPaf5l22LEerls+pdyiMfaeRyaxbcY2w3u23cSg8m4zwfRmc+iKoPgd8xpjmZndpFyI6UC+xWYXoct30*TEqKhubtSNEvbu22rnxO3CXvHvl*H94h1ro74xWGGUREc565Wtsdok7JXWcVF+NiCfz3I3fCl5Qfw5+yaTH9QjnwUVpGLEOmFuX9ttUmbMhf*CiY2aHG81D*dSoPuBD2pA*oTQCXIq7bR0YEoxf5ua64MMJCm*+9ra*pt93oibsWZ3ZSVI3E1t6tEshnK3a*DDlD*4y5LvTydyvzrEjtbaJNuxF5xzt+vTo6Ix6Kwbq5D4GBKV5TQmkeVU+Yqw0BjBudygiiD7oBVNrcdOTlY0ToeLOmcdtXkMjbqKQWl3hLldUuXXcTdO62noCY4BJFaG6RrGZ17Qi*QbVNUxRDdS*vo1BiTr6JtxQjp+MQZKTmvplg4sKxu+qvl*CKKqaku76MtKHAyJAZT*CiNK8TOuBx6aEJMryFukZpDVQE1jU6FeHiKAYqJQ06NfU6lU8EB9wz4rkmhwYg8tDkDwGKuCEqSRIgiTLvKROvtZfrkNWiPGXElEwBsXj1YSbCBOZm0rKdMrLojr5OsTvv*AN6WJEYV7UQAW6Y8MKW6bhMNuzfFwuNSPV9FQDH*28G+ONeJlZBYyNJUYvl0vFFwtZ9pcKnbFyIpxIe+Ak0V3cauGYnp*+IQlQwUXu8*nqyCmyKfmG1rKF0We+bAjyPvJ3F9jGe9M*LlwiknzeY+aYcga*L7vDq3dzG8YTs*kCLdbaRs9XCuZSbgQ3uvc0VItRm0fo92KZ1vj+9NVNZ+zrwWHIQnne0pOH2XNnumyS7tIUl7ZTdZndsFEZFLw5D7HloWCvvQirrHl+mYmX9bpKXvqrQ+rRRJnO0zfLPkam+Lmq8oeZBqWG3yRHj8kv4aDffyr3hnvwF3sf*5bi5yr5txWVuH2Q9K+IueIuawMHJ+5i1oZe7JqjFyhNlGb0vYsk58Vagfv92xjgAtKkIpdh45QxqfIYjAGpmsGwVplUfyimzyxr5r01XsCaah9DsM8vqKbwgoE6kQRJ4qfilH975ZIKm7DOgAr4Z+XEK4Ojew3jHYX0faaA9vhOM3D*G1BLAQIUAxQAAAgIAK0cLVuckJBBVgQAAG8HAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254757578837',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'kissinger254ke',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 2484,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 2484,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
