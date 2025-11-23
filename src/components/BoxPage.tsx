import { useParams } from "react-router-dom";
import { getBoxByUuid, type Product } from "../data/boxes";
import {
  Wine,
  Beef,
  CheckCircle2,
  MapPin,
  Calendar,
  Thermometer,
  Award,
  ExternalLink,
  TrendingUp,
  Users,
  Shield,
  Package,
  Hash,
} from "lucide-react";
import { useState } from "react";

const BoxPage = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const box = uuid ? getBoxByUuid(uuid) : undefined;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (!box) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            ❌ Box non trouvée
          </h1>
          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            UUID invalide : <code>{uuid}</code>
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "15px 30px",
              background: "white",
              color: "#667eea",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  const getProductIcon = (type: string) => {
    switch (type) {
      case "vin":
        return <Wine size={24} />;
      case "fromage":
        return <Package size={24} />;
      case "charcuterie":
        return <Beef size={24} />;
      default:
        return <Package size={24} />;
    }
  };

  const getProductColor = (type: string) => {
    switch (type) {
      case "vin":
        return "#8B0000";
      case "fromage":
        return "#F4A460";
      case "charcuterie":
        return "#A0522D";
      default:
        return "#666";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* En-tête */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 30px",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                margin: "0 0 10px 0",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🍷 {box.name}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#666", margin: 0 }}>
              Édition {box.edition} • Livrée le{" "}
              {new Date(box.deliveryDate).toLocaleDateString("fr-FR")}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
                padding: "15px 25px",
                borderRadius: "15px",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              ⭐ {box.tokensEarned} Tokens Gagnés
            </div>
            <p style={{ fontSize: "0.9rem", color: "#999", marginTop: "5px" }}>
              NFT: {box.memberNFT}
            </p>
          </div>
        </div>
      </div>

      {/* Produits */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            color: "white",
            fontSize: "2rem",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          🎁 Vos Produits Certifiés Blockchain
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {box.products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              style={{
                background: "white",
                borderRadius: "15px",
                padding: "20px",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow:
                  selectedProduct?.id === product.id
                    ? "0 10px 40px rgba(102, 126, 234, 0.5)"
                    : "0 5px 20px rgba(0,0,0,0.2)",
                transform:
                  selectedProduct?.id === product.id
                    ? "scale(1.02)"
                    : "scale(1)",
                border:
                  selectedProduct?.id === product.id
                    ? "3px solid #667eea"
                    : "3px solid transparent",
              }}
            >
              {/* Image du produit */}
              <div
                style={{
                  width: "100%",
                  minHeight: "200px",
                  maxHeight: "300px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "15px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: getProductColor(product.type),
                    color: "white",
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  {getProductIcon(product.type)}
                </div>
              </div>

              <div
                style={{
                  marginBottom: "15px",
                }}
              >
                <h3 style={{ margin: "0 0 5px 0", fontSize: "1.2rem" }}>
                  {product.name}
                </h3>
                <p
                  style={{
                    margin: "0",
                    color: "#666",
                    fontSize: "0.9rem",
                  }}
                >
                  {product.producer.name}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginBottom: "15px",
                }}
              >
                {product.certifications.map((cert, i) => (
                  <span
                    key={i}
                    style={{
                      background: "#f0f0f0",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      color: "#333",
                      fontWeight: "500",
                    }}
                  >
                    <Award
                      size={14}
                      style={{ verticalAlign: "middle", marginRight: "5px" }}
                    />
                    {cert}
                  </span>
                ))}
              </div>

              <div
                style={{
                  background: "#f8f8f8",
                  padding: "10px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                <div style={{ marginBottom: "5px" }}>
                  <MapPin
                    size={14}
                    style={{ verticalAlign: "middle", marginRight: "5px" }}
                  />
                  {product.producer.location}
                </div>
                <div style={{ marginBottom: "5px" }}>
                  <Calendar
                    size={14}
                    style={{ verticalAlign: "middle", marginRight: "5px" }}
                  />
                  Production:{" "}
                  {new Date(product.productionDate).toLocaleDateString("fr-FR")}
                </div>
                <div>
                  <Thermometer
                    size={14}
                    style={{ verticalAlign: "middle", marginRight: "5px" }}
                  />
                  Conservation: {product.temperature}
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  marginTop: "15px",
                  padding: "12px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Voir la Traçabilité Complète 🔍
              </button>
            </div>
          ))}
        </div>

        {/* Détails du produit sélectionné */}
        {selectedProduct && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "20px",
                borderBottom: "3px solid #667eea",
                paddingBottom: "15px",
              }}
            >
              🔒 Traçabilité Blockchain - {selectedProduct.name}
            </h2>

            {/* Infos producteur */}
            <div
              style={{
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                borderRadius: "15px",
                padding: "25px",
                marginBottom: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Users size={24} />
                Producteur
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "20px",
                  alignItems: "start",
                }}
              >
                <img
                  src={selectedProduct.producer.image}
                  alt={selectedProduct.producer.name}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  }}
                />
                <div>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                    {selectedProduct.producer.name}
                  </h4>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "15px",
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedProduct.producer.story}
                  </p>
                  <div style={{ marginBottom: "10px" }}>
                    <MapPin
                      size={16}
                      style={{ verticalAlign: "middle", marginRight: "8px" }}
                    />
                    <strong>Localisation:</strong>{" "}
                    {selectedProduct.producer.location}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <Shield
                      size={16}
                      style={{ verticalAlign: "middle", marginRight: "8px" }}
                    />
                    <strong>Certifications:</strong>{" "}
                    {selectedProduct.producer.certifications.join(", ")}
                  </div>
                  <div
                    style={{
                      background: "white",
                      padding: "10px",
                      borderRadius: "8px",
                      marginTop: "15px",
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                    }}
                  >
                    <strong>💰 Wallet (Pourboire Direct):</strong>
                    <br />
                    {selectedProduct.producer.walletAddress}
                  </div>
                  <button
                    style={{
                      marginTop: "15px",
                      padding: "12px 25px",
                      background: "#10B981",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    💸 Envoyer un Pourboire (2€)
                  </button>
                </div>
              </div>
            </div>

            {/* Composition */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
                📋 Composition & Allergènes
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    background: "#f8f8f8",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <strong>Ingrédients:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                    {selectedProduct.ingredients.map((ing, i) => (
                      <li key={i} style={{ marginBottom: "5px" }}>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    background: "#f8f8f8",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <strong>Allergènes:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                    {selectedProduct.allergens.length > 0 ? (
                      selectedProduct.allergens.map((all, i) => (
                        <li
                          key={i}
                          style={{ marginBottom: "5px", color: "#DC2626" }}
                        >
                          ⚠️ {all}
                        </li>
                      ))
                    ) : (
                      <li style={{ color: "#10B981" }}>✅ Aucun allergène</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* NFT Info */}
            <div
              style={{
                background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              <Hash size={32} style={{ marginBottom: "10px" }} />
              <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                🎫 NFT Produit
              </h3>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                {selectedProduct.nftId}
              </p>
              <p
                style={{ fontSize: "0.9rem", marginTop: "10px", opacity: 0.8 }}
              >
                Ce NFT garantit l'authenticité et la traçabilité de ce produit
                sur la blockchain
              </p>
            </div>

            {/* Timeline de traçabilité */}
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <TrendingUp size={24} />
                Historique Complet (Blockchain)
              </h3>
              <div style={{ position: "relative" }}>
                {/* Ligne verticale */}
                <div
                  style={{
                    position: "absolute",
                    left: "24px",
                    top: "0",
                    bottom: "0",
                    width: "3px",
                    background:
                      "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
                  }}
                />

                {selectedProduct.trackingEvents.map((event, index) => (
                  <div
                    key={event.id}
                    style={{
                      position: "relative",
                      paddingLeft: "60px",
                      paddingBottom: "30px",
                    }}
                  >
                    {/* Point sur la timeline */}
                    <div
                      style={{
                        position: "absolute",
                        left: "12px",
                        top: "0",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        background:
                          index === selectedProduct.trackingEvents.length - 1
                            ? "#10B981"
                            : "#667eea",
                        border: "3px solid white",
                        boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: "bold",
                      }}
                    >
                      {index === selectedProduct.trackingEvents.length - 1
                        ? "✓"
                        : index + 1}
                    </div>

                    {/* Contenu de l'événement */}
                    <div
                      style={{
                        background:
                          index === selectedProduct.trackingEvents.length - 1
                            ? "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)"
                            : "#f8f8f8",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                          marginBottom: "10px",
                        }}
                      >
                        <div>
                          <h4
                            style={{ fontSize: "1.2rem", marginBottom: "5px" }}
                          >
                            {index ===
                              selectedProduct.trackingEvents.length - 1 &&
                              "✅ "}
                            {event.status}
                          </h4>
                          <p
                            style={{
                              color: "#666",
                              fontSize: "0.9rem",
                              margin: 0,
                            }}
                          >
                            👤 {event.actor}
                          </p>
                        </div>
                        <div
                          style={{
                            textAlign: "right",
                            fontSize: "0.85rem",
                            color: "#999",
                          }}
                        >
                          {new Date(event.timestamp).toLocaleDateString(
                            "fr-FR"
                          )}
                          <br />
                          {new Date(event.timestamp).toLocaleTimeString(
                            "fr-FR"
                          )}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: "0.9rem",
                          color: "#666",
                          marginBottom: "10px",
                        }}
                      >
                        <MapPin
                          size={14}
                          style={{
                            verticalAlign: "middle",
                            marginRight: "5px",
                          }}
                        />
                        {event.location}
                        {event.temperature && (
                          <>
                            <br />
                            <Thermometer
                              size={14}
                              style={{
                                verticalAlign: "middle",
                                marginRight: "5px",
                                marginTop: "5px",
                              }}
                            />
                            Température: <strong>{event.temperature}</strong>
                          </>
                        )}
                      </div>

                      <div
                        style={{
                          background: "white",
                          padding: "10px",
                          borderRadius: "6px",
                          fontFamily: "monospace",
                          fontSize: "0.8rem",
                          color: "#667eea",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <CheckCircle2 size={16} />
                        <span
                          style={{
                            flex: 1,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          Hash: {event.blockchainHash}
                        </span>
                        <ExternalLink size={14} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Vote communautaire */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "30px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            🗳️ Vote de la Communauté (DAO)
          </h2>
          <p
            style={{ fontSize: "1.2rem", marginBottom: "20px", color: "#666" }}
          >
            {box.communityVote.question}
          </p>
          <div style={{ display: "grid", gap: "15px", marginBottom: "20px" }}>
            {box.communityVote.options.map((option, i) => (
              <button
                key={i}
                style={{
                  padding: "20px",
                  background:
                    i === 1
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "#f0f0f0",
                  color: i === 1 ? "white" : "#333",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{option}</span>
                {i === 1 && <span>👑 En tête</span>}
              </button>
            ))}
          </div>
          <p style={{ fontSize: "0.9rem", color: "#999", textAlign: "center" }}>
            Résultat actuel: {box.communityVote.currentWinner}
          </p>
        </div>

        {/* Bouton retour */}
        <div style={{ textAlign: "center" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "15px 40px",
              background: "white",
              color: "#667eea",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
              transition: "all 0.3s",
            }}
          >
            ← Retour aux Boxes
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxPage;
