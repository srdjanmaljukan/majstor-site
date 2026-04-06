export const siteConfig = {
  // Osnovne informacije
  name: 'Predrag Lazović',
  title: 'Majstor Peđa',
  tagline: 'Kućne popravke koje traju',
  subtitle: 'Brzo, uredno i po dogovoru. Više od 10 godina iskustva u sitnim i krupnijim kućnim popravkama u Beogradu i okolini.',
  location: 'Beograd i okolina',
  phone: '+381 60 123 4567',
  email: 'marko@primer.com',
  experience: '10+ godina iskustva',

  // O meni sekcija
  about: `Zanatlija sam sa više od 10 godina iskustva u kućnim popravkama. 
Radim brzo, čisto i uz dogovorenu cijenu — bez iznenađenja na kraju. 
Dostupan sam na području Beograda i okoline, od ponedeljka do subote. 
Svaki posao završim kako bih i za svoju kuću uradio.`,

  // Usluge (možete dodati ili ukloniti)
  services: [
    {
      icon: '🔧',
      name: 'Vodoinstalacije',
      description: 'Zamjena cijevi, popravka slavina, čišćenje odvoda, novi sanitarni čvorovi.',
    },
    {
      icon: '⚡',
      name: 'Elektrika',
      description: 'Montaža utičnica i prekidača, nova rasvjeta, osigurači.',
    },
    {
      icon: '🪚',
      name: 'Stolarija',
      description: 'Popravka i montaža vrata i prozora, police, namještaj po mjeri.',
    },
    {
      icon: '🖌️',
      name: 'Farbanje',
      description: 'Bojenje zidova i plafona, gletovanje, priprema površina.',
    },
    {
      icon: '🏠',
      name: 'Keramika i pločice',
      description: 'Postavljanje podnih i zidnih pločica, fugovanje, silikoni.',
    },
    {
      icon: '🔨',
      name: 'Sitni radovi',
      description: 'Montaža namještaja, zavjesa, roletni, kačenje slika i TV-a.',
    },
  ],

  // Recenzije
  reviews: [
    {
      name: 'Ana P.',
      location: 'Zemun',
      text: 'Odličan posao, sve gotovo za jedan dan. Uredno i tačno kako smo dogovorili. Preporučujem svima!',
      rating: 5,
    },
    {
      name: 'Dragan M.',
      location: 'Novi Beograd',
      text: 'Profesionalac od prvog poziva do završetka. Cijena poštena, rad bez zamjerke.',
      rating: 5,
    },
    {
      name: 'Milica T.',
      location: 'Voždovac',
      text: 'Zvala sam zbog curenja vode — stigao je isti dan i riješio problem za sat vremena.',
      rating: 5,
    },
    {
      name: 'Igor S.',
      location: 'Čukarica',
      text: 'Postavio je pločice u kupatilu, rezultat je fantastičan. Pedantan i tačan.',
      rating: 5,
    },
  ],

  // Cloudinary folder gdje se nalaze slike (podesite u Cloudinary dashboardu)
  cloudinaryFolder: 'majstor-radovi',
}
