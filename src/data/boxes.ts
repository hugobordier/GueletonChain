export interface TrackingEvent {
  id: string;
  timestamp: string;
  location: string;
  status: string;
  temperature?: string;
  actor: string;
  blockchainHash: string;
}

export interface Producer {
  name: string;
  location: string;
  certifications: string[];
  walletAddress: string;
  story: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  type: "vin" | "fromage" | "charcuterie";
  image: string;
  producer: Producer;
  productionDate: string;
  expirationDate: string;
  weight?: string;
  volume?: string;
  temperature: string;
  trackingEvents: TrackingEvent[];
  nftId: string;
  certifications: string[];
  ingredients: string[];
  allergens: string[];
}

export interface Box {
  uuid: string;
  name: string;
  edition: string;
  deliveryDate: string;
  memberNFT: string;
  products: Product[];
  tokensEarned: number;
  communityVote: {
    question: string;
    options: string[];
    currentWinner: string;
  };
}

// Données hardcodées pour la démo
export const boxes: Record<string, Box> = {
  "a3f7b2e1-4c9d-4a8b-9e2f-1d6c8a5b3e7f": {
    uuid: "a3f7b2e1-4c9d-4a8b-9e2f-1d6c8a5b3e7f",
    name: "Box Terroir d'Automne",
    edition: "Novembre 2025",
    deliveryDate: "2025-11-15",
    memberNFT: "0xABCD1234...5678",
    tokensEarned: 150,
    communityVote: {
      question: "Quel fromage voulez-vous pour décembre ?",
      options: ["Tomme de Savoie", "Comté du Jura", "Reblochon AOP"],
      currentWinner: "Comté du Jura (45%)",
    },
    products: [
      {
        id: "prod-vin-001",
        name: 'Côtes du Rhône "Réserve du Vigneron"',
        type: "vin",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
        producer: {
          name: "Domaine Pierre Lefèvre",
          location: "Châteauneuf-du-Pape, Vaucluse (84)",
          certifications: [
            "AOP Côtes du Rhône",
            "Agriculture Biologique",
            "HVE Niveau 3",
          ],
          walletAddress: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1",
          story:
            "Vigneron depuis 3 générations, notre famille cultive 12 hectares de vignes en coteaux. Conversion bio terminée en 2020.",
          image:
            "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400",
        },
        productionDate: "2023-09-15",
        expirationDate: "2030-09-15",
        volume: "75cl",
        temperature: "16-18°C",
        nftId: "NFT-VIN-2023-001",
        certifications: ["AOP", "Bio AB", "HVE"],
        ingredients: [
          "Grenache 60%",
          "Syrah 30%",
          "Mourvèdre 10%",
          "Sulfites < 50mg/L",
        ],
        allergens: ["Sulfites"],
        trackingEvents: [
          {
            id: "evt-001",
            timestamp: "2023-09-15T10:30:00Z",
            location: "Domaine Lefèvre - Châteauneuf-du-Pape",
            status: "Vendanges manuelles",
            actor: "Pierre Lefèvre (Vigneron)",
            blockchainHash: "0x8f3e...a2b1",
          },
          {
            id: "evt-002",
            timestamp: "2023-09-16T08:00:00Z",
            location: "Chai du Domaine",
            status: "Mise en cuve - Fermentation naturelle",
            temperature: "22°C",
            actor: "Œnologue certifié",
            blockchainHash: "0x7c2d...f9e3",
          },
          {
            id: "evt-003",
            timestamp: "2024-03-20T14:00:00Z",
            location: "Chai du Domaine",
            status: "Mise en bouteille",
            actor: "Embouteillage mobile certifié",
            blockchainHash: "0x4a8c...d3f7",
          },
          {
            id: "evt-004",
            timestamp: "2025-11-10T09:15:00Z",
            location: "Entrepôt GUEULETON CHAIN - Lyon",
            status: "Réception et contrôle qualité",
            temperature: "14°C",
            actor: "Service Logistique",
            blockchainHash: "0x9b1e...c6a4",
          },
          {
            id: "evt-005",
            timestamp: "2025-11-12T16:30:00Z",
            location: "Camion frigorifique - Route Lyon-Paris",
            status: "Transport vers membre",
            temperature: "12°C ✓",
            actor: "Transporteur Eco-Responsable",
            blockchainHash: "0x3f7a...e2d9",
          },
          {
            id: "evt-006",
            timestamp: "2025-11-15T11:00:00Z",
            location: "Livraison au membre",
            status: "Livrée - Chaîne du froid respectée",
            temperature: "13°C ✓",
            actor: "Livreur certifié",
            blockchainHash: "0x6d4b...a8f1",
          },
        ],
      },
      {
        id: "prod-fromage-001",
        name: "Comté AOP 18 mois d'affinage",
        type: "fromage",
        image:
          "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80",
        producer: {
          name: "Fromagerie Coopérative du Mont d'Or",
          location: "Métabief, Doubs (25)",
          certifications: ["AOP Comté", "Label Rouge", "Lait Cru"],
          walletAddress: "0x8b3c42Fa5634D8732846B3e924CbF8c0A1e9D2f3",
          story:
            "Coopérative de 45 producteurs locaux. Chaque vache est nourrie exclusivement à l'herbe et au foin (pas d'ensilage). Affinage en cave à 8-12°C.",
          image:
            "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400",
        },
        productionDate: "2024-04-10",
        expirationDate: "2026-02-10",
        weight: "400g",
        temperature: "4-8°C",
        nftId: "NFT-FROMAGE-2024-042",
        certifications: ["AOP Comté", "Label Rouge"],
        ingredients: [
          "Lait cru de vache",
          "Sel",
          "Ferments lactiques",
          "Présure naturelle",
        ],
        allergens: ["Lait"],
        trackingEvents: [
          {
            id: "evt-101",
            timestamp: "2024-04-10T06:00:00Z",
            location: "Ferme du Haut-Doubs",
            status: "Traite matinale - 45 vaches Montbéliardes",
            temperature: "35°C (lait frais)",
            actor: "Éleveur coopérateur",
            blockchainHash: "0xa7e3...b9c2",
          },
          {
            id: "evt-102",
            timestamp: "2024-04-10T08:30:00Z",
            location: "Fromagerie Coopérative",
            status: "Fabrication en cuve cuivre",
            temperature: "54°C",
            actor: "Maître fromager",
            blockchainHash: "0xc4f8...d1a6",
          },
          {
            id: "evt-103",
            timestamp: "2024-04-11T10:00:00Z",
            location: "Cave d'affinage - Fort Saint-Antoine",
            status: "Début affinage sur planches épicéa",
            temperature: "10°C - Hygrométrie 92%",
            actor: "Affineur MOF",
            blockchainHash: "0x5d9a...e7f3",
          },
          {
            id: "evt-104",
            timestamp: "2025-10-10T14:00:00Z",
            location: "Cave d'affinage",
            status: "Affinage terminé - 18 mois",
            temperature: "11°C",
            actor: "Affineur MOF",
            blockchainHash: "0x2b6c...f4a9",
          },
          {
            id: "evt-105",
            timestamp: "2025-11-08T09:00:00Z",
            location: "Atelier de découpe",
            status: "Découpe et emballage sous vide",
            actor: "Service qualité",
            blockchainHash: "0x8e1f...c3b7",
          },
          {
            id: "evt-106",
            timestamp: "2025-11-12T16:30:00Z",
            location: "Transport frigorifique",
            status: "Transport vers membre",
            temperature: "4°C ✓",
            actor: "Transporteur certifié",
            blockchainHash: "0x7a4d...e6f2",
          },
          {
            id: "evt-107",
            timestamp: "2025-11-15T11:00:00Z",
            location: "Livraison au membre",
            status: "Livrée - Chaîne du froid respectée",
            temperature: "5°C ✓",
            actor: "Livreur certifié",
            blockchainHash: "0x9c2b...a1d8",
          },
        ],
      },
      {
        id: "prod-saucisson-001",
        name: "Saucisson Sec d'Ardèche IGP",
        type: "charcuterie",
        image:
          "https://rappel.conso.gouv.fr/image/3fd37383-2d0d-4a6c-8149-f75dd78aa93e.jpg",
        producer: {
          name: "Charcuterie Artisanale Dubois",
          location: "Lamastre, Ardèche (07)",
          certifications: ["IGP Ardèche", "Label Rouge", "Porc Français"],
          walletAddress: "0x4e8a91Bc7832F4b56A3d8e72C1f9B0d3E5a6c7D2",
          story:
            "Artisan charcutier depuis 1952. Nos porcs sont élevés en plein air dans les Cévennes. Séchage naturel 6 semaines minimum.",
          image:
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
        },
        productionDate: "2025-08-20",
        expirationDate: "2026-02-20",
        weight: "250g",
        temperature: "12-18°C",
        nftId: "NFT-CHARCUTERIE-2025-168",
        certifications: ["IGP Ardèche", "Label Rouge", "Porc Français"],
        ingredients: [
          "Viande de porc française 97%",
          "Sel",
          "Poivre",
          "Ail",
          "Ferments naturels",
          "Boyau naturel",
        ],
        allergens: [],
        trackingEvents: [
          {
            id: "evt-201",
            timestamp: "2025-07-15T08:00:00Z",
            location: "Élevage du Cros - Vallée du Doux",
            status: "Sélection des porcs (race Duroc)",
            actor: "Éleveur certifié Label Rouge",
            blockchainHash: "0xb3e7...f2c9",
          },
          {
            id: "evt-202",
            timestamp: "2025-08-18T06:30:00Z",
            location: "Abattoir local - Lamastre",
            status: "Abattage certifié bien-être animal",
            temperature: "3°C",
            actor: "Abattoir agréé CE",
            blockchainHash: "0xd1a8...e4b6",
          },
          {
            id: "evt-203",
            timestamp: "2025-08-20T10:00:00Z",
            location: "Atelier Charcuterie Dubois",
            status: "Fabrication artisanale - Hachage et assaisonnement",
            temperature: "8°C",
            actor: "Maître artisan charcutier",
            blockchainHash: "0xa9c2...f7d3",
          },
          {
            id: "evt-204",
            timestamp: "2025-08-21T14:00:00Z",
            location: "Séchoir naturel",
            status: "Début du séchage (6 semaines)",
            temperature: "15°C - Hygrométrie 75%",
            actor: "Artisan charcutier",
            blockchainHash: "0x6f4e...c8a1",
          },
          {
            id: "evt-205",
            timestamp: "2025-10-02T11:00:00Z",
            location: "Séchoir naturel",
            status: "Séchage terminé - Contrôle qualité",
            temperature: "16°C",
            actor: "Service qualité",
            blockchainHash: "0x3d7b...e9f4",
          },
          {
            id: "evt-206",
            timestamp: "2025-11-10T15:00:00Z",
            location: "Entrepôt GUEULETON CHAIN",
            status: "Réception et stockage",
            temperature: "14°C",
            actor: "Service Logistique",
            blockchainHash: "0xe2a9...b6c7",
          },
          {
            id: "evt-207",
            timestamp: "2025-11-12T16:30:00Z",
            location: "Transport vers membre",
            status: "Préparation et expédition",
            temperature: "15°C ✓",
            actor: "Transporteur",
            blockchainHash: "0x8c5f...d1a3",
          },
          {
            id: "evt-208",
            timestamp: "2025-11-15T11:00:00Z",
            location: "Livraison au membre",
            status: "Livrée - Conditions optimales",
            temperature: "16°C ✓",
            actor: "Livreur certifié",
            blockchainHash: "0x4b9e...f2c6",
          },
        ],
      },
    ],
  },
  "b8e4d6c2-7a3f-4b1e-8d9c-2f5a7b4e6d8c": {
    uuid: "b8e4d6c2-7a3f-4b1e-8d9c-2f5a7b4e6d8c",
    name: "Box Terroir d'Hiver",
    edition: "Décembre 2025",
    deliveryDate: "2025-12-15",
    memberNFT: "0xDEF9876...4321",
    tokensEarned: 200,
    communityVote: {
      question: "Quel producteur soutenir en janvier ?",
      options: [
        "Ferme du Limousin",
        "Vignoble Alsacien",
        "Fromagerie Savoyarde",
      ],
      currentWinner: "Fromagerie Savoyarde (52%)",
    },
    products: [
      {
        id: "prod-vin-002",
        name: "Châteauneuf-du-Pape Grand Cru",
        type: "vin",
        image:
          "https://www.devinis.fr/img/vins/photo/1954-rhone-chateauneuf-du-pape-chateauneuf-du-pape-grand-cru-berard-rouge.jpg",
        producer: {
          name: "Château des Papes",
          location: "Châteauneuf-du-Pape, Vaucluse (84)",
          certifications: ["AOP Châteauneuf-du-Pape", "Biodynamie Demeter"],
          walletAddress: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
          story:
            "Domaine familial créé en 1880. 20 hectares de vieilles vignes. Culture en biodynamie depuis 2015.",
          image:
            "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400",
        },
        productionDate: "2022-10-01",
        expirationDate: "2035-10-01",
        volume: "75cl",
        temperature: "17-19°C",
        nftId: "NFT-VIN-2022-045",
        certifications: ["AOP", "Biodynamie Demeter"],
        ingredients: [
          "Grenache 70%",
          "Syrah 20%",
          "Mourvèdre 10%",
          "Sulfites < 30mg/L",
        ],
        allergens: ["Sulfites"],
        trackingEvents: [
          {
            id: "evt-301",
            timestamp: "2022-10-01T09:00:00Z",
            location: "Vignoble Château des Papes",
            status: "Vendanges manuelles - Tri à la vigne",
            actor: "Équipe de vendangeurs",
            blockchainHash: "0xf3a7...d2e8",
          },
          {
            id: "evt-302",
            timestamp: "2022-10-02T07:00:00Z",
            location: "Chai du Château",
            status: "Vinification en fûts de chêne",
            temperature: "20°C",
            actor: "Maître de chai",
            blockchainHash: "0xa8c4...f9b1",
          },
          {
            id: "evt-303",
            timestamp: "2023-09-15T15:00:00Z",
            location: "Cave du Château",
            status: "Mise en bouteille - 12 mois d'élevage",
            actor: "Œnologue",
            blockchainHash: "0x7e9b...c3a5",
          },
        ],
      },
    ],
  },
  "b8e9c3f2-7d4a-4b9e-8f3a-2e7d9c6a4b8e": {
    uuid: "b8e9c3f2-7d4a-4b9e-8f3a-2e7d9c6a4b8e",
    name: "Box Présentation Blockchain",
    edition: "Édition Spéciale Technologie - Novembre 2025",
    deliveryDate: "2025-11-20",
    memberNFT: "0xBLOCK2025...CHAIN",
    tokensEarned: 250,
    communityVote: {
      question:
        "Quelle innovation blockchain voulez-vous voir dans la prochaine box ?",
      options: [
        "Smart Contracts automatisés",
        "NFTs interactifs",
        "Traçabilité quantique",
      ],
      currentWinner: "Smart Contracts automatisés (52%)",
    },
    products: [
      {
        id: "prod-charcuterie-001",
        name: "Saucisson Sec Tradition",
        type: "charcuterie",
        image: "/src/assets/saucisson.jpeg",
        producer: {
          name: "Maison Blockchain & Fils",
          location: "Satoshi Valley, Silicon Alps (73)",
          certifications: [
            "IGP Saucisson de Montagne",
            "Label Rouge",
            "Blockchain Verified™",
            "Crypto-Artisan Certifié",
          ],
          walletAddress: "0xSAUC1SS0N...D3C3NTR4L1S3",
          story:
            "Charcuterie familiale depuis 1847, pionnière de l'adoption blockchain en 2016. Chaque saucisson est tokenisé dès sa fabrication. Notre processus d'affinage est enregistré sur la blockchain toutes les 6 heures.",
          image: "/src/assets/saucisson.jpeg",
        },
        productionDate: "2025-08-15",
        expirationDate: "2026-02-15",
        weight: "350g",
        temperature: "12-16°C",
        nftId: "NFT-SAUCISSON-BLOCK-001",
        certifications: ["IGP", "Label Rouge", "Blockchain Verified™"],
        ingredients: [
          "Viande de porc français",
          "Sel de Guérande",
          "Poivre de Sarawak",
          "Ail des ours bio",
        ],
        allergens: [],
        trackingEvents: [
          {
            id: "evt-401",
            timestamp: "2025-08-15T07:00:00Z",
            location: "Ferme Blockchain - Élevage connecté",
            status: "Sélection des porcs - Race Duroc Premium",
            temperature: "18°C",
            actor: "Éleveur certifié Smart Contract",
            blockchainHash: "0x1a2b3c4d...SAUC1SS0N",
          },
          {
            id: "evt-402",
            timestamp: "2025-08-15T10:30:00Z",
            location: "Atelier de transformation - Lab Crypto-Charcuterie",
            status: "Hachage et embossage - Smart Manufacturing",
            temperature: "4°C",
            actor: "Maître charcutier MOF & Developer Solidity",
            blockchainHash: "0xH4CH4G3...S3CUR1S3",
          },
          {
            id: "evt-403",
            timestamp: "2025-08-16T09:00:00Z",
            location: "Cave d'affinage climatisée - Node Principal",
            status: "Début affinage - Monitoring IoT activé",
            temperature: "14°C - Hygrométrie 75%",
            actor: "Affineur & Smart Contract Monitor",
            blockchainHash: "0x4FF1N4G3...D3CENTR",
          },
          {
            id: "evt-404",
            timestamp: "2025-11-10T15:00:00Z",
            location: "Cave d'affinage - Validation finale",
            status: "Affinage optimal atteint - 85 jours",
            temperature: "14°C",
            actor: "IA Quality Control + Affineur",
            blockchainHash: "0xV4L1D4T3...QUAL1TY",
          },
          {
            id: "evt-405",
            timestamp: "2025-11-18T11:00:00Z",
            location: "Station de packaging - Smart Factory",
            status: "Emballage sous vide avec QR Code NFT",
            actor: "Robot d'emballage certifié",
            blockchainHash: "0xP4CK4G3...NFT1234",
          },
          {
            id: "evt-406",
            timestamp: "2025-11-20T08:30:00Z",
            location: "Drone de livraison autonome",
            status: "Livraison express - GPS tracké en temps réel",
            temperature: "15°C ✓",
            actor: "Drone certifié DGAC",
            blockchainHash: "0xD3L1V3R...DR0N3",
          },
        ],
      },
      {
        id: "prod-charcuterie-002",
        name: "Chorizo Ibérique Premium",
        type: "charcuterie",
        image: "/src/assets/chorizo.png",
        producer: {
          name: "Tokenized Tapas - Casa del Blockchain",
          location: "Crypto Valley, Digital Pyrenees (64)",
          certifications: [
            "DOP Chorizo Ibérico",
            "Bellota Premium",
            "Blockchain Heritage Certified",
            "Web3 Artisan Excellence",
          ],
          walletAddress: "0xCH0R1Z0...1B3R1C0",
          story:
            "Maison fondée en 1923, digitalisée en 2018. Nos porcs ibériques sont élevés en liberté dans des dehesas connectées. Chaque animal dispose d'un wallet NFT unique. Le fumage au paprika est surveillé par capteurs IoT blockchain.",
          image: "/src/assets/chorizo.png",
        },
        productionDate: "2025-09-01",
        expirationDate: "2026-03-01",
        weight: "280g",
        temperature: "14-18°C",
        nftId: "NFT-CHORIZO-WEB3-042",
        certifications: ["DOP", "Bellota Premium", "Web3 Certified"],
        ingredients: [
          "Viande de porc ibérique",
          "Paprika fumé de La Vera",
          "Ail confit",
          "Sel marin de l'Atlantique",
        ],
        allergens: [],
        trackingEvents: [
          {
            id: "evt-501",
            timestamp: "2025-09-01T06:30:00Z",
            location: "Dehesa Digital - Élevage libre connecté",
            status: "Sélection porc ibérique - Pedigree NFT vérifié",
            temperature: "22°C",
            actor: "Éleveur certifié & Blockchain Validator",
            blockchainHash: "0x1B3R1C0...P0RC",
          },
          {
            id: "evt-502",
            timestamp: "2025-09-01T11:00:00Z",
            location: "Atelier Crypto-Salaison",
            status: "Préparation et assaisonnement paprika AOP",
            temperature: "8°C",
            actor: "Maître salaisonnier & Smart Contract Dev",
            blockchainHash: "0xS4L41S0N...P4PR1K4",
          },
          {
            id: "evt-503",
            timestamp: "2025-09-02T14:00:00Z",
            location: "Fumoir connecté - Smart Smokehouse",
            status: "Fumage traditionnel au chêne - IoT monitored",
            temperature: "24°C - Fumée: 180°C",
            actor: "Maître fumeur & DevOps Specialist",
            blockchainHash: "0xFUM4G3...CH3N3",
          },
          {
            id: "evt-504",
            timestamp: "2025-11-12T16:00:00Z",
            location: "Cave de maturation - Climate Control Node",
            status: "Maturation terminée - 70 jours optimal",
            temperature: "15°C - Hygrométrie 72%",
            actor: "IA Maturation Control",
            blockchainHash: "0xM4TUR3...0PT1M4L",
          },
          {
            id: "evt-505",
            timestamp: "2025-11-19T10:00:00Z",
            location: "Centre logistique - Smart Warehouse",
            status: "Préparation expédition - QR NFT généré",
            temperature: "16°C",
            actor: "Système automatisé",
            blockchainHash: "0xPR3P4R3...3XP3D",
          },
          {
            id: "evt-506",
            timestamp: "2025-11-20T08:30:00Z",
            location: "Véhicule autonome - Route traçée GPS",
            status: "Livraison en cours - Blockchain live tracking",
            temperature: "16°C ✓",
            actor: "Véhicule autonome certifié",
            blockchainHash: "0xD3L1V3R...4UT0",
          },
        ],
      },
      {
        id: "prod-pain-001",
        name: "Baguette Tradition au Levain",
        type: "charcuterie",
        image: "/src/assets/baguette.jpeg",
        producer: {
          name: "Boulangerie Satoshi Nakamoto",
          location: "Bitcoin Boulevard, Blockchain City (75)",
          certifications: [
            "Label Baguette Tradition Française",
            "Meilleur Ouvrier de France 2024",
            "Blockchain Artisan Premium",
            "Carbon Neutral Bakery",
          ],
          walletAddress: "0xB4GU3TT3...L3V41N",
          story:
            "Boulangerie artisanale depuis 2009 (année de naissance du Bitcoin !). Notre four à bois est connecté à la blockchain pour tracer chaque cuisson. Farine bio issue d'agriculteurs tokenisés. Levain naturel de 150 ans conservé en cold wallet biologique.",
          image: "/src/assets/baguette.jpeg",
        },
        productionDate: "2025-11-20",
        expirationDate: "2025-11-22",
        weight: "250g",
        temperature: "18-22°C",
        nftId: "NFT-BAGUETTE-SATOSHI-777",
        certifications: ["Label Tradition", "MOF", "Blockchain Verified"],
        ingredients: [
          "Farine T65 bio française",
          "Levain naturel 150 ans",
          "Sel de Guérande",
          "Eau de source filtrée",
        ],
        allergens: ["Gluten"],
        trackingEvents: [
          {
            id: "evt-601",
            timestamp: "2025-11-19T18:00:00Z",
            location: "Moulin connecté - Smart Mill",
            status: "Mouture farine fraîche - Grain to Flour",
            temperature: "20°C",
            actor: "Meunier certifié & Blockchain Operator",
            blockchainHash: "0xM0UTUR3...FR41CH3",
          },
          {
            id: "evt-602",
            timestamp: "2025-11-19T22:00:00Z",
            location: "Fournil crypto-artisanal",
            status: "Pétrissage et pointage - 1ère fermentation",
            temperature: "24°C",
            actor: "Boulanger MOF & Smart Contract Baker",
            blockchainHash: "0xP3TR1SS4G3...L3V41N",
          },
          {
            id: "evt-603",
            timestamp: "2025-11-20T02:00:00Z",
            location: "Chambre de pousse climatisée",
            status: "2ème fermentation - Monitoring IoT actif",
            temperature: "26°C - Hygrométrie 85%",
            actor: "Système automatisé intelligent",
            blockchainHash: "0xF3RM3NT4T...P0USS3",
          },
          {
            id: "evt-604",
            timestamp: "2025-11-20T05:30:00Z",
            location: "Four à bois connecté - 250°C",
            status: "Cuisson artisanale - Blockchain timestamped",
            temperature: "250°C → 230°C",
            actor: "Boulanger MOF + IA Temperature Control",
            blockchainHash: "0xCU1SS0N...CR0UST1",
          },
          {
            id: "evt-605",
            timestamp: "2025-11-20T06:00:00Z",
            location: "Fournil - Zone de refroidissement",
            status: "Refroidissement optimal - Croûte parfaite",
            temperature: "22°C",
            actor: "Contrôle qualité blockchain",
            blockchainHash: "0xR3FR01D...QU4L1T3",
          },
          {
            id: "evt-606",
            timestamp: "2025-11-20T07:00:00Z",
            location: "Packaging biodégradable - NFC Tag",
            status: "Emballage éco-responsable avec puce NFC",
            temperature: "20°C",
            actor: "Robot packaging certifié",
            blockchainHash: "0xP4CK4G3...3C0",
          },
          {
            id: "evt-607",
            timestamp: "2025-11-20T08:30:00Z",
            location: "Livraison express - Vélo cargo électrique",
            status: "Livraison fraîcheur garantie - Carbon Free",
            temperature: "19°C ✓",
            actor: "Livreur certifié blockchain",
            blockchainHash: "0xL1VR3...V3L0",
          },
        ],
      },
      {
        id: "prod-fromage-002",
        name: "Emmental Français Grand Cru",
        type: "fromage",
        image: "/src/assets/emmental.jpeg",
        producer: {
          name: "Fromagerie Ethereum Alps",
          location: "Crypto Mountain, Smart Contract Valley (74)",
          certifications: [
            "IGP Emmental Français Est-Central",
            "Label Rouge Premium",
            "Lait Cru de Montagne",
            "Blockchain Heritage Gold",
          ],
          walletAddress: "0x3MM3NT4L...GR4NDcru",
          story:
            "Fromagerie coopérative fondée en 1892, révolutionnée par la blockchain en 2017. 67 producteurs laitiers connectés. Chaque meule de 80kg est tracée par RFID blockchain. Cave d'affinage à 15°C avec monitoring en temps réel sur smart contracts. Les trous (yeux) sont même comptés par IA !",
          image: "/src/assets/emmental.jpeg",
        },
        productionDate: "2025-05-10",
        expirationDate: "2026-08-10",
        weight: "450g",
        temperature: "4-8°C",
        nftId: "NFT-EMMENTAL-ETH-888",
        certifications: ["IGP", "Label Rouge", "Lait Cru"],
        ingredients: [
          "Lait cru de vache Montbéliarde",
          "Ferments propioniques",
          "Présure naturelle",
          "Sel",
        ],
        allergens: ["Lait"],
        trackingEvents: [
          {
            id: "evt-701",
            timestamp: "2025-05-10T05:00:00Z",
            location: "Ferme Alpine Connectée - 1800m altitude",
            status: "Traite matinale - 52 vaches Montbéliardes ID blockchain",
            temperature: "36°C (lait frais)",
            actor: "Éleveur & Blockchain Farmer",
            blockchainHash: "0xTR41T3...M0NT4GN3",
          },
          {
            id: "evt-702",
            timestamp: "2025-05-10T08:00:00Z",
            location: "Fromagerie Smart Factory",
            status: "Emprésurage en cuve cuivre - 1200L",
            temperature: "32°C",
            actor: "Maître fromager & Crypto Operator",
            blockchainHash: "0x3MPR3S...CU1VR3",
          },
          {
            id: "evt-703",
            timestamp: "2025-05-10T12:00:00Z",
            location: "Atelier de moulage",
            status: "Moulage meule 80kg - RFID Blockchain activé",
            temperature: "28°C",
            actor: "Fromager + IoT System",
            blockchainHash: "0xM0UL4G3...M3UL3",
          },
          {
            id: "evt-704",
            timestamp: "2025-05-11T09:00:00Z",
            location: "Cave chaude - Formation des yeux",
            status: "Fermentation propionique - Génération CO2",
            temperature: "22°C → 24°C",
            actor: "Maître de cave & IA Monitor",
            blockchainHash: "0xF3RM3NT...Y3UX",
          },
          {
            id: "evt-705",
            timestamp: "2025-05-20T14:00:00Z",
            location: "Cave d'affinage - Nœud principal",
            status: "Transfert cave froide - Début affinage 6 mois",
            temperature: "15°C - Hygrométrie 90%",
            actor: "Affineur MOF & Smart Contract",
            blockchainHash: "0x4FF1N4G3...D3BUT",
          },
          {
            id: "evt-706",
            timestamp: "2025-11-10T16:00:00Z",
            location: "Cave d'affinage - Contrôle final",
            status: "Affinage optimal - 6 mois accomplis",
            temperature: "15°C",
            actor: "IA Quality + Affineur MOF",
            blockchainHash: "0x6M01S...P3RF3CT",
          },
          {
            id: "evt-707",
            timestamp: "2025-11-18T10:00:00Z",
            location: "Atelier découpe sous vide",
            status: "Découpe portion 450g - Emballage smart",
            temperature: "6°C",
            actor: "Robot de découpe certifié",
            blockchainHash: "0xD3C0UP3...V1D3",
          },
          {
            id: "evt-708",
            timestamp: "2025-11-20T08:30:00Z",
            location: "Camion frigorifique autonome",
            status: "Transport chaîne du froid - GPS blockchain",
            temperature: "5°C ✓",
            actor: "Véhicule autonome certifié",
            blockchainHash: "0xTR4NSP0RT...FR01D",
          },
        ],
      },
    ],
  },
};

// Fonction helper pour récupérer une box par UUID
export const getBoxByUuid = (uuid: string): Box | undefined => {
  return boxes[uuid];
};

// Liste de tous les UUIDs disponibles (pour la page d'accueil)
export const getAllBoxUuids = (): string[] => {
  return Object.keys(boxes);
};
