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
};

// Fonction helper pour récupérer une box par UUID
export const getBoxByUuid = (uuid: string): Box | undefined => {
  return boxes[uuid];
};

// Liste de tous les UUIDs disponibles (pour la page d'accueil)
export const getAllBoxUuids = (): string[] => {
  return Object.keys(boxes);
};
