import { getAllBoxUuids, getBoxByUuid } from "../data/boxes";
import { QrCode, Boxes, Award, Shield, TrendingUp, Info } from "lucide-react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const boxUuids = getAllBoxUuids();

  return (
    <div
      className="home-container"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Bouton About en haut à droite */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Link
            to="/about"
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
              border: "2px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s",
            }}
          >
            <Info size={20} />À propos
          </Link>
        </div>

        {/* Hero Section */}
        <div
          className="home-hero-section"
          style={{
            background: "white",
            borderRadius: "25px",
            padding: "50px 40px",
            marginBottom: "40px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h1
            className="home-hero-title"
            style={{
              fontSize: "4rem",
              margin: "0 0 20px 0",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🍷 GUEULETON CHAIN
          </h1>
          <p
            className="home-subtitle"
            style={{
              fontSize: "1.5rem",
              color: "#666",
              marginBottom: "30px",
              fontWeight: "300",
            }}
          >
            La Première Communauté Gastronomique sur Blockchain
          </p>
          <div
            className="home-features-container"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <div
              className="home-feature-card"
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                padding: "20px 30px",
                borderRadius: "15px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <Shield
                size={32}
                style={{ marginBottom: "10px", color: "#667eea" }}
              />
              <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Traçabilité 100%
              </div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                Blockchain infalsifiable
              </div>
            </div>
            <div
              className="home-feature-card"
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                padding: "20px 30px",
                borderRadius: "15px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <Award
                size={32}
                style={{ marginBottom: "10px", color: "#667eea" }}
              />
              <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Producteurs AOP
              </div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                Certifiés Label Rouge
              </div>
            </div>
            <div
              className="home-feature-card"
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                padding: "20px 30px",
                borderRadius: "15px",
                flex: "1",
                minWidth: "200px",
              }}
            >
              <TrendingUp
                size={32}
                style={{ marginBottom: "10px", color: "#667eea" }}
              />
              <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Vote DAO
              </div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                Vous choisissez les produits
              </div>
            </div>
          </div>
        </div>

        {/* Section Comment ça marche */}
        <div
          className="home-hero-section"
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
              textAlign: "center",
              marginBottom: "40px",
              color: "#333",
            }}
          >
            📱 Comment Scanner un QR Code ?
          </h2>
          <div
            className="home-instructions"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                Recevez votre Box
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Chaque mois, votre sélection de produits terroir arrive chez
                vous
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                Scannez le QR Code
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Chaque produit possède un QR Code unique collé sur l'emballage
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                Découvrez l'Histoire
              </h3>
              <p style={{ color: "#666", lineHeight: "1.6" }}>
                Traçabilité complète : du producteur à votre table, certifié
                blockchain
              </p>
            </div>
          </div>
        </div>

        {/* Boxes disponibles */}
        <div>
          <h2
            style={{
              color: "white",
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "30px",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Boxes
              size={40}
              style={{ verticalAlign: "middle", marginRight: "15px" }}
            />
            Boxes Disponibles
          </h2>

          <div
            className="home-boxes-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {boxUuids.map((uuid) => {
              const box = getBoxByUuid(uuid);
              if (!box) return null;

              return (
                <div
                  className="home-box-card"
                  key={uuid}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    padding: "30px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 60px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 40px rgba(0,0,0,0.2)";
                  }}
                  onClick={() => (window.location.href = `/box/${uuid}`)}
                >
                  <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <QrCode
                      size={80}
                      style={{ color: "#667eea", marginBottom: "15px" }}
                    />
                    <h3 style={{ fontSize: "1.8rem", margin: "0 0 10px 0" }}>
                      {box.name}
                    </h3>
                    <p style={{ color: "#666", fontSize: "1.1rem", margin: 0 }}>
                      {box.edition}
                    </p>
                  </div>

                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                      padding: "15px",
                      borderRadius: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.95rem",
                        color: "#666",
                        marginBottom: "10px",
                      }}
                    >
                      <strong>📦 Contenu:</strong> {box.products.length}{" "}
                      produits d'exception
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        color: "#666",
                        marginBottom: "10px",
                      }}
                    >
                      <strong>📅 Livrée le:</strong>{" "}
                      {new Date(box.deliveryDate).toLocaleDateString("fr-FR")}
                    </div>
                    <div style={{ fontSize: "0.95rem", color: "#666" }}>
                      <strong>⭐ Tokens:</strong> {box.tokensEarned} points
                      gagnés
                    </div>
                  </div>

                  <div
                    style={{
                      background: "#f8f8f8",
                      padding: "15px",
                      borderRadius: "10px",
                      marginBottom: "20px",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#333",
                      }}
                    >
                      🎁 Produits inclus:
                    </strong>
                    {box.products.map((product, i) => (
                      <div key={i} style={{ marginBottom: "5px" }}>
                        • {product.name}
                      </div>
                    ))}
                  </div>

                  <button
                    style={{
                      width: "100%",
                      padding: "15px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <QrCode size={24} />
                    Scanner / Voir la Box
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section UUID direct */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "40px",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            textAlign: "center",
          }}
        >
          <h3
            style={{ color: "white", fontSize: "1.5rem", marginBottom: "15px" }}
          >
            💡 Vous avez un UUID ?
          </h3>
          <p style={{ color: "white", opacity: 0.9, marginBottom: "20px" }}>
            Accédez directement à votre box en utilisant l'URL :
          </p>
          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              fontFamily: "monospace",
              fontSize: "1rem",
              color: "#667eea",
              fontWeight: "bold",
              wordBreak: "break-all",
            }}
          >
            {typeof window !== "undefined"
              ? `${window.location.origin}/box/[UUID]`
              : "https://gueuleton-dao.com/box/[UUID]"}
          </div>
          <p
            style={{
              color: "white",
              opacity: 0.7,
              marginTop: "15px",
              fontSize: "0.9rem",
            }}
          >
            Exemples d'UUID : a3f7b2e1-4c9d-4a8b-9e2f-1d6c8a5b3e7f
          </p>
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
          <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
            🔗 Propulsé par la Blockchain Ethereum
          </p>
          <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
            Traçabilité certifiée • Producteurs équitables • Communauté engagée
          </p>
          <p style={{ opacity: 0.7, fontSize: "0.8rem", marginTop: "20px" }}>
            © 2025 GUEULETON CHAIN - Terroir Chain
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
