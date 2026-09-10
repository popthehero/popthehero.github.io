export let siteData = {
  nav: { logo: "VARUNA 1.0", pill1: "AUTONOMOUS EV", pill2: "MINI ELECTRIC VEHICLE COMPETITION 3.0", about: "ABOUT", components: "COMPONENTS", admin: "ADMIN" },
  hero: { eyebrow: "DOTBYTE SYSTEMS × PVN COMPANY × SACHU PRESENT", line1: "PROJECT", line2: "VARUNA 1.0", subtitle: "MINI ELECTRIC VEHICLE • AUTONOMOUS LINE FOLLOWER", trailerComing: "TRAILER COMING SOON" },
  about: { title: "ABOUT VARUNA", subtitle: "A competition-focused autonomous electric vehicle.", missionTitle: "MISSION", mission: "Build a compact electric vehicle capable of intelligently following a marked racing path and reaching the finish line.", engineeringTitle: "ENGINEERING APPROACH", engineering: "Sensors detect the track while the ESP32 processes the data and controls the motors through high-power motor drivers." },
  missionSection: { title: "MISSION", subtitle: "Designed around the line follower race." },
  components: [
    { name: "ESP32 38-PIN", subtitle: "Main control system", tag: "COMPONENT 01", description: "Main processing board of Varuna.", buttonText: "SPECIFICATIONS", buttonLink: "https://www.espressif.com/", image: "" },
    { name: "8-CHANNEL IR ARRAY", subtitle: "Line detection", tag: "COMPONENT 02", description: "Eight infrared channels detect track position.", buttonText: "VIEW DATASHEET", buttonLink: "https://example.com/ir-sensor", image: "" },
    { name: "BTS7960", subtitle: "Motor driver", tag: "COMPONENT 03", description: "High-power motor driver capable of driving high current motors.", buttonText: "DRIVER SPECS", buttonLink: "https://example.com/bts7960", image: "" },
    { name: "DC GEARED MOTORS", subtitle: "Vehicle drive", tag: "COMPONENT 04", description: "Drive motors convert electrical energy into precise mechanical motion.", buttonText: "MOTOR SPECS", buttonLink: "https://example.com/dc-motors", image: "" },
    { name: "PCF8574", subtitle: "GPIO expansion", tag: "COMPONENT 05", description: "GPIO expansion device providing extra I/O lines over I2C bus.", buttonText: "PINOUT DIAGRAM", buttonLink: "https://example.com/pcf8574", image: "" },
    { name: "LI-ION BATTERY PACK", subtitle: "Power system", tag: "COMPONENT 06", description: "High capacity battery system supplying stable electrical power.", buttonText: "BATTERY DETAILS", buttonLink: "https://example.com/battery", image: "" },
    { name: "BLACK METAL CHASSIS", subtitle: "Vehicle structure", tag: "COMPONENT 07", description: "Sturdy structural chassis serving as the backbone for components.", buttonText: "CHASSIS MODEL", buttonLink: "https://example.com/chassis", image: "" },
    { name: "LM2596 BUCK CONVERTER", subtitle: "Voltage regulation", tag: "COMPONENT 08", description: "Step-down DC-DC voltage regulator module ensuring stable power supply.", buttonText: "REGULATOR SPECS", buttonLink: "https://example.com/lm2596", image: "" }
  ],
  data: { title: "VARUNA / DATA", subtitle: "Core system architecture.", stats: [ {value:"8",label:"IR CHANNELS"}, {value:"9",label:"LI-ION CELLS"}, {value:"1",label:"ESP32"}, {value:"2",label:"BTS7960"} ] },
  team: [ { name: "PARAMESWAR", role: "Project Director", instagram: "" }, { name: "VINAY", role: "Craft Director", instagram: "" }, { name: "ARUSH", role: "Arts Director", instagram: "" }, { name: "DEVAN", role: "Software Director", instagram: "" } ],
  project: { title: "PROJECT", subtitle: "Competition configuration.", heading: "MINI ELECTRIC VEHICLE COMPETITION 3.0", description: "Project Varuna is being developed as an autonomous electric vehicle.", bullets: [ "Autonomous line-following electric vehicle.", "8-channel infrared track detection.", "ESP32-based control system.", "BTS7960 high-power motor control.", "Designed for reliable path tracking." ] },
  credits: { title: "CREDITS", subtitle: "Project organizations.", dotbyte: "DOTBYTE SYSTEMS ↗", pvn: "PVN COMPANY ↗" },
  footer: { admin: "OPEN ADMIN DASHBOARD", text: "PROJECT VARUNA 1.0" },
  background: "", trailer: ""
};

export function updateSiteData(newData) {
  siteData = newData;
}