// Dohvata listu slika iz Cloudinary foldera
// Poziva se server-side u page.tsx

export interface GalleryImage {
  public_id: string
  secure_url: string
  width: number
  height: number
  context?: { custom?: { caption?: string } }
}

export async function getGalleryImages(folder: string): Promise<GalleryImage[]> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  // Ako env varijable nisu postavljene, vrati prazno (dev mode)
  if (!cloudName || !apiKey || !apiSecret) {
    console.warn('Cloudinary credentials nisu postavljeni. Galerija je prazna.')
    return []
  }

  try {
    const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expression: `folder:${folder}`,
          sort_by: [{ created_at: 'desc' }],
          max_results: 30,
          with_field: 'context',
        }),
        next: { revalidate: 3600 }, // cache 1h, revalidate na svakom deployu
      }
    )

    if (!response.ok) return []
    const data = await response.json()
    return data.resources || []
  } catch {
    return []
  }
}
