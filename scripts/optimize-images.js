import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public/images');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const ext = path.extname(file);
      const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        // Resize if it's too large (max width 1920px) to save space, but keep aspect ratio
        if (metadata.width > 1920) {
          await image.resize(1920, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(webpPath);
        } else {
          await image.webp({ quality: 80 }).toFile(webpPath);
        }

        console.log(`Converted: ${fullPath} -> ${webpPath}`);
        // Optionally delete the original file to save space and ensure we use the webp
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

processDirectory(directoryPath).then(() => console.log('Image optimization complete.'));
