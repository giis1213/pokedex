import React from "react";

const PokemonCard = ({ pokemon }) => {
  const { name, types, abilities, stats, image } = pokemon;

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p><strong>Tipo(s):</strong> {types.join(", ")}</p>
      <p><strong>Habilidades:</strong> {abilities.join(", ")}</p>
      <div>
        <strong>Stats:</strong>
        <ul>
          {stats.map((stat, index) => (
            <li key={index}>{stat.name}: {stat.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "15px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
  },
  image: {
    width: "100px",
    height: "100px",
  },
  name: {
    fontSize: "1.5rem",
    color: "#333",
  },
};

export default PokemonCard;

