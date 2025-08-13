import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function GET(request: NextRequest) {
  try {
    // Get the path to the image - using the pre-cropped FooterFred.jpg image
    const imagePath = path.join(process.cwd(), 'public', 'FooterFred.jpg');

    // Read the image file
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Process the image for Instagram's preferred dimensions
    const processedImage = await sharp(imageBuffer)
      // Resize to Instagram's preferred dimensions, maintaining aspect ratio
      .resize({
        width: 1080,
        height: 1080,
        fit: 'contain',
        background: { r: 0, g: 0, b: 48 }  // navy background color to match website
      })
      .jpeg({ quality: 95 })
      .toBuffer();

    // Return the processed image with the correct content type
    return new NextResponse(processedImage, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Content-Disposition': 'inline; filename="fred-talisman-instagram.jpg"',
      },
    });
  } catch (error) {
    console.error('Error serving Instagram OG image:', error);
    return NextResponse.json(
      { error: 'Failed to serve image' },
      { status: 500 }
    );
  }
} 