/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF primer: ~30 % més lleuger que WebP en fotografia. Next negocia
    // el format per Accept i cau a WebP/JPEG als navegadors que no el suporten.
    formats: ['image/avif', 'image/webp'],
    // Amples que realment fem servir: microsite mòbil amb pàgina de 1200 px màx.
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    // Next 16 retorna 400 per a qualsevol `q` no declarat aquí. 70 és per als
    // pòsters de vídeo, que només es veuen un instant.
    qualities: [70, 75],
  },
};

export default nextConfig;
