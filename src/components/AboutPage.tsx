import { Link } from "react-router-dom";
import {
  Shield,
  Award,
  Blocks,
  Wallet,
  Vote,
  Package,
  ArrowLeft,
  Globe,
  Heart,
  Zap,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Bouton retour */}
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 24px",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            color: "white",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: "bold",
            marginBottom: "30px",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            transition: "all 0.3s",
          }}
        >
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        {/* Hero Section */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "60px 40px",
            marginBottom: "40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              margin: "0 0 20px 0",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🍷 GUEULETON DAO
          </h1>
          <p
            style={{
              fontSize: "1.8rem",
              color: "#666",
              marginBottom: "10px",
              fontWeight: "300",
            }}
          >
            Terroir Chain
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#999",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            La première communauté gastronomique où la blockchain garantit
            l'origine des produits et où les consommateurs votent pour financer
            les petits producteurs.
          </p>
        </div>

        {/* Le Problème */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "30px",
              color: "#DC2626",
              textAlign: "center",
            }}
          >
            ⚠️ Le Problème
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
                borderRadius: "15px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>🚫</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Arnaques sur l'origine
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Le "Saucisson d'Ardèche" qui vient en fait de Pologne, ou le
                faux vin "Grand Cru" ré-étiqueté. On ne sait plus ce qu'on
                mange.
              </p>
            </div>
            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
                borderRadius: "15px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>💸</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Producteurs exploités
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Les supermarchés margent comme des fous, le petit producteur
                touche des miettes. Pas de contact direct avec les
                consommateurs.
              </p>
            </div>
            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",
                borderRadius: "15px",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>😶</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Perte de lien
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                On achète, on mange, on oublie. Pas de communauté, pas
                d'histoire derrière les produits.
              </p>
            </div>
          </div>
        </div>

        {/* La Solution */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "30px",
              color: "#10B981",
              textAlign: "center",
            }}
          >
            ✅ La Solution
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#666",
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "800px",
              margin: "0 auto 40px",
            }}
          >
            Une application qui mixe <strong>Box mensuelle</strong> +{" "}
            <strong>Blockchain</strong> + <strong>Club VIP</strong>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <Package
                size={48}
                style={{ color: "#667eea", marginBottom: "15px" }}
              />
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Passeport Terroir (NFT)
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Chaque mois, tu reçois une box (Vin + Fromage + Charcuterie).
                Chaque produit a un QR Code unique sécurisé par la blockchain.
              </p>
            </div>

            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <Shield
                size={48}
                style={{ color: "#667eea", marginBottom: "15px" }}
              />
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Traçabilité totale
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Tu scannes le saucisson ➡️ Tu vois la date de fabrication, la
                ferme exacte, et même la température du camion de transport.
              </p>
            </div>

            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <Zap
                size={48}
                style={{ color: "#667eea", marginBottom: "15px" }}
              />
              <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Gamification
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                À chaque fois que tu scannes et "valides" une dégustation, tu
                gagnes des tokens (points de fidélité crypto).
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "30px",
              color: "#667eea",
              textAlign: "center",
            }}
          >
            🔧 Les Technologies
          </h2>

          <div
            style={{
              display: "grid",
              gap: "30px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "20px",
                padding: "30px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: "15px",
              }}
            >
              <Blocks size={48} style={{ color: "#667eea", flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                  Supply Chain Tracking
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  On utilise la blockchain pour enregistrer chaque étape
                  (Producteur → Transporteur → Mangeur). C'est{" "}
                  <strong>infalsifiable</strong>. Chaque événement est
                  enregistré avec un hash cryptographique unique sur la
                  blockchain Ethereum.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "20px",
                padding: "30px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: "15px",
              }}
            >
              <Vote size={48} style={{ color: "#667eea", flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                  DAO (Organisation Autonome Décentralisée)
                </h3>
                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "15px",
                  }}
                >
                  C'est le point fort. Les membres qui ont des tokens peuvent{" "}
                  <strong>VOTER</strong>.
                </p>
                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    borderLeft: "4px solid #667eea",
                  }}
                >
                  <strong>Exemple :</strong>
                  <br />
                  "Le mois prochain, on veut soutenir quel producteur ? La Tomme
                  de Savoie ou le Comté du Jura ?"
                  <br />
                  La communauté décide où va l'argent.
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "20px",
                padding: "30px",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: "15px",
              }}
            >
              <Wallet size={48} style={{ color: "#667eea", flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                  Pourboire Direct
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  Via l'appli, tu peux envoyer 2€ en crypto directement dans le
                  wallet du fermier si tu as kiffé son fromage (sans passer par
                  intermédiaires). <strong>100% pour le producteur</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modèle de Financement */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "30px",
              color: "#667eea",
              textAlign: "center",
            }}
          >
            💰 Modèle de Financement
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                padding: "25px",
                background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                🎫 NFT "Membre Fondateur"
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                Carte de membre numérique qui donne accès aux box exclusives
                (droit d'entrée au club)
              </p>
            </div>

            <div
              style={{
                padding: "25px",
                background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                📦 Marge sur les Box
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                Modèle classique de box mensuelle avec abonnement récurrent
              </p>
            </div>

            <div
              style={{
                padding: "25px",
                background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                💸 Commission Pourboires
              </h3>
              <p
                style={{
                  color: "#666",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                Frais minimes (5%) sur les dons directs aux producteurs
              </p>
            </div>
          </div>
        </div>

        {/* Exemples Réels */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              color: "#667eea",
              textAlign: "center",
            }}
          >
            🏆 Pourquoi c'est crédible ?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              textAlign: "center",
              marginBottom: "40px",
              fontStyle: "italic",
            }}
          >
            Des grandes entreprises l'ont déjà fait !
          </p>

          <div
            style={{
              display: "grid",
              gap: "25px",
            }}
          >
            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
                borderRadius: "15px",
                borderLeft: "6px solid #0284c7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "15px",
                }}
              >
                <Globe size={32} style={{ color: "#0284c7" }} />
                <h3 style={{ fontSize: "1.5rem", margin: 0 }}>
                  Carrefour × IBM Food Trust
                </h3>
              </div>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Ils ont utilisé la blockchain pour tracer leur{" "}
                <strong>Poulet d'Auvergne</strong> et leur purée mousseline. Tu
                scannes le poulet, tu vois l'éleveur. Nous faisons pareil mais
                pour le luxe/terroir artisanal.
              </p>
            </div>

            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
                borderRadius: "15px",
                borderLeft: "6px solid #6366f1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "15px",
                }}
              >
                <Award size={32} style={{ color: "#6366f1" }} />
                <h3 style={{ fontSize: "1.5rem", margin: 0 }}>
                  WineDex (iDealwine)
                </h3>
              </div>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Ils collent des puces RFID sur les bouteilles de vin à{" "}
                <strong>5000€</strong> pour prouver sur la blockchain qu'elles
                ne sont pas fausses. La technologie existe déjà !
              </p>
            </div>

            <div
              style={{
                padding: "30px",
                background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
                borderRadius: "15px",
                borderLeft: "6px solid #ec4899",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "15px",
                }}
              >
                <Shield size={32} style={{ color: "#ec4899" }} />
                <h3 style={{ fontSize: "1.5rem", margin: 0 }}>
                  L'AOP du futur
                </h3>
              </div>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Notre projet, c'est l'
                <strong>AOP (Appellation d'Origine Protégée)</strong> du futur.
                Une certification numérique impossible à copier, vérifiable
                instantanément par n'importe qui.
              </p>
            </div>
          </div>
        </div>

        {/* Notre Vision */}
        <div
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            marginBottom: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            textAlign: "center",
          }}
        >
          <Heart size={64} style={{ color: "#ef4444", marginBottom: "20px" }} />
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Notre Vision
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#666",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto 30px",
              fontStyle: "italic",
            }}
          >
            "Gueuleton DAO est la première communauté gastronomique où la
            blockchain garantit l'origine des produits et où les consommateurs
            votent pour financer les petits producteurs."
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                100%
              </div>
              <div style={{ color: "#666" }}>Traçable</div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                0
              </div>
              <div style={{ color: "#666" }}>Intermédiaire</div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#667eea",
                }}
              >
                ∞
              </div>
              <div style={{ color: "#666" }}>Transparence</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "25px",
            padding: "50px 40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Rejoignez la Révolution Gastronomique ! 🚀
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.9 }}>
            Scannez votre premier produit et découvrez son histoire
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "white",
              color: "#667eea",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "all 0.3s",
            }}
          >
            Découvrir les Boxes 🍷
          </Link>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            paddingTop: "30px",
            borderTop: "2px solid rgba(255, 255, 255, 0.2)",
            color: "white",
          }}
        >
          <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
            🔗 Propulsé par la Blockchain Ethereum
          </p>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
            Traçabilité certifiée • Producteurs équitables • Communauté engagée
          </p>
          <p style={{ opacity: 0.7, fontSize: "0.8rem", marginTop: "20px" }}>
            © 2025 Gueuleton DAO - Terroir Chain
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
