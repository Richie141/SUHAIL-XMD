const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348036007823";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_53_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTExLFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2RCtzbmdnN2V1eWlaczdhVWVDeWZDelpNbUE4Y1BYc3k1VTY2VXl4Ni8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzYwMDc4MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY1QUU5OUE1QTBDMEE3MTlENDNFNTdCQjY2NTk3MjIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg4MjAyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMzYwMDc4MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY2QThEOUJDRDBCNEI3MkFEMEUwM0NDODYwRUM1MjA3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg4MjAyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjdUtfUlVSaFF3S1NWV2JWTWhnM3RRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhOTI4NjBjLTZmYWItNDc4YS1iYzg3LWZmMWU4NjBjYWQ0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAxMzQsXG4gICAgICAyMzQsXG4gICAgICA2OSxcbiAgICAgIDE1NCxcbiAgICAgIDE0MixcbiAgICAgIDEyLFxuICAgICAgMjIyLFxuICAgICAgOTQsXG4gICAgICAxODEsXG4gICAgICAyMDIsXG4gICAgICAzOCxcbiAgICAgIDI0NCxcbiAgICAgIDI0NixcbiAgICAgIDE4NCxcbiAgICAgIDkxLFxuICAgICAgMTk3LFxuICAgICAgOCxcbiAgICAgIDExOSxcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxMTgsXG4gICAgICAyMzcsXG4gICAgICA1LFxuICAgICAgMjM0LFxuICAgICAgMTY1LFxuICAgICAgNzIsXG4gICAgICAxNDUsXG4gICAgICAxMTMsXG4gICAgICAxMzIsXG4gICAgICAxODcsXG4gICAgICAyNDQsXG4gICAgICAxMDUsXG4gICAgICAxMjgsXG4gICAgICAxMzYsXG4gICAgICAxMjAsXG4gICAgICAxNzgsXG4gICAgICAxNjUsXG4gICAgICAxNTIsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUM5WEdERUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzYwMDc4MjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDk4NzA3NzgyMDY1OTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k2SmhZY0ZFS1RoNDdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR2xqQU5hei9LWlUrMzJmZzNQZEhRT1RzUFZaQ0gyY28xQ2Q0TWlOc05uUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxWlNzNVRkdTgwVEdSTHpoZUJLMElPc295V2huZm1xRHNqbkxrcEFVbDBWdG9tSDMyclVCNi9ocUJqTnRLMXI1TXhQdnJIa2UvdjBDNytqQnhROGZDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvekxGT3AxamdpTjZETzQ3YTEzY1Q0b3BLbXNKK3drT3BPRGJDMERxR2ZIaEU0K3J1aXZLR3JPNEZhV3diRTZjM0lLVmNCc2gyVURPeGszc0ViTS9DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM2MDA3ODIzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzg4MjAyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0rblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTStuLmpzb24iOiAie1wia2V5RGF0YVwiOlwickdtYTh6V3k3aE91RVc5OHFTQm1TdmlyRkpYMmdMTTNRMDg5SmpCcGQvZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU2OTQwNDMwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM4ODIwMzAxNDFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
