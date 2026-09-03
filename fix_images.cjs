const fs = require('fs');
const path = require('path');

const replacements = {
  "/images/programmes/vaccination-camp.webp": "/images/real/cms-health-camp.webp",
  "/images/real/drug-awareness-community.webp": "/images/real/drug-awareness-classroom.webp",
  "/images/real/drug-awareness-students.webp": "/images/real/drug-awareness-school.webp",
  "/images/real/tirhayi-umar-group.webp": "/images/real/tirhayi-umar-launch.webp",
  "/images/real/women-education-group.webp": "/images/real/women-community-group.webp",
  "/images/real/khooh-stage-05.webp": "/images/real/khooh-stage-04.webp",
  "/images/focus-areas.webp": "/images/focus-community.webp",
  "/images/generated/awareness-focus.webp": "/images/focus-substance.webp",
  "/images/generated/mental-health-focus.webp": "/images/focus-mental.webp",
  "/images/skills-livelihoods/sunita-masala.webp": "/images/skills-livelihoods/spice-quality-session.webp",
  "/images/skills-livelihoods/jasveer-masala.webp": "/images/skills-livelihoods/spice-quality-session-upright.webp",
  "/images/skills-livelihoods/restored/ajay.webp": "/images/skills-livelihoods/restored/anita-livelihood.webp"
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(tsx|ts|css)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [oldPath, newPath] of Object.entries(replacements)) {
        if (content.includes(oldPath)) {
          content = content.split(oldPath).join(newPath);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
