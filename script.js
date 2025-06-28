function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.classList.add("hidden"));

  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.classList.remove("hidden");
  }

  // Reset talents view if switching
  if (id !== "talents") {
    backToTalents();
  }
}

function showCongrats() {
  document.getElementById("congratsMsg").classList.remove("hidden");
}

// Show About by default
showSection('about');

// Talent details
const talentInfo = {
  football: {
    title: "⚽ Football",
    description: "Sarthak plays as a powerful striker, known for his agility and quick decision-making. His teamwork and goal-scoring ability make him a valuable player on the field."
  },
  cricket: {
    title: "🏏 Cricket",
    description: "In cricket, Sarthak is both a skilled batsman and a sharp fielder. He can build innings with patience and hit big shots when needed."
  },
  tt: {
    title: "🏓 Table Tennis",
    description: "Sarthak's lightning-fast reflexes give him the edge in table tennis. He uses both spin and speed to outplay his opponents."
  },
  chess: {
    title: "♟️ Chess",
    description: "A thinker at heart, Sarthak excels at chess with a FIDE rating of 1435. He anticipates multiple moves ahead and plays with calm precision."
  },
  academics: {
    title: "📘 Academics",
    description: "Sarthak consistently ranks at the top of his class. His strongest subjects are science and math, where he shows deep understanding and curiosity."
  }
};

function showTalentDetail(key) {
  const detail = talentInfo[key];
  if (detail) {
    document.getElementById("talentCards").classList.add("hidden");
    document.getElementById("talentDetails").classList.remove("hidden");
    document.getElementById("talentTitle").textContent = detail.title;
    document.getElementById("talentDescription").textContent = detail.description;
  }
}

function backToTalents() {
  document.getElementById("talentCards").classList.remove("hidden");
  document.getElementById("talentDetails").classList.add("hidden");
}
