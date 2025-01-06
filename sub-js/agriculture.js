// Data for each agricultural era
const agriculturalEras = [
  {
    title: "Ancient Era: Domestication of Crops and Livestock",
    imageSrc: "../assets/primary-sector/agri-01.png",
    rawMaterials: ["Wild plants (e.g., wheat, barley)", "Wild animals (e.g., sheep, goats, cattle)"],
    processes: [
      "Domestication of plants through selective breeding",
      "Rearing of animals for meat, milk, and labor",
      "Development of basic tools for farming"
    ],
    outcomes: [
      "Transition from hunter-gatherer societies to agrarian civilizations",
      "Establishment of permanent settlements",
      "Basis for future agricultural advancements"
    ]
  },
  {
    title: "18th Century: Agricultural Revolution in Europe",
    imageSrc: "../assets/primary-sector/agri-02.png",
    rawMaterials: ["Land", "Seeds (wheat, rye, oats)", "Draft animals", "Basic tools"],
    processes: [
      "Introduction of crop rotation to maintain soil fertility",
      "Mechanization with tools like the seed drill (invented by Jethro Tull)",
      "Use of manure and natural fertilizers"
    ],
    outcomes: [
      "Significant increase in food production",
      "Surplus food enabled population growth and urbanization",
      "Shift from subsistence farming to commercial farming"
    ]
  },
  // Other historical agricultural eras...
];

// Future agricultural advancements
const agriFuture = [
  {
    title: "Nanotechnology in Agriculture",
    rawMaterials: ["Nano-sensors", "Nano-fertilizers", "Nano-pesticides"],
    processes: [
      "Nano-sensors for real-time monitoring of soil health, water levels, and crop growth",
      "Nano-pesticides for targeted pest control, reducing environmental impact",
      "Nano-coatings on seeds for enhanced germination and growth"
    ],
    outcomes: [
      "Improved crop yields with minimal resource usage",
      "Reduced chemical runoff and environmental damage",
      "Precise, efficient farming practices"
    ]
  },
  {
    title: "AI-Powered Farming",
    rawMaterials: ["AI algorithms", "Big data platforms", "Edge computing devices"],
    processes: [
      "AI-driven analysis of satellite and drone data for predicting weather patterns and crop health",
      "Smart irrigation systems that optimize water usage based on AI predictions",
      "Autonomous AI-controlled tractors and harvesters for efficient field management"
    ],
    outcomes: [
      "Enhanced decision-making through predictive analytics",
      "Reduced waste and maximized productivity",
      "Cost savings from automation and precise farming techniques"
    ]
  },
  {
    title: "Cellular Agriculture",
    rawMaterials: ["Animal cells", "Bioreactors", "Growth mediums"],
    processes: [
      "Cultivation of lab-grown meat, dairy, and eggs using cellular agriculture techniques",
      "Use of bioreactors to replicate the environment needed for cell growth",
      "Elimination of traditional livestock farming for animal-based food production"
    ],
    outcomes: [
      "Reduction in greenhouse gas emissions and deforestation",
      "Ethical and sustainable meat and dairy alternatives",
      "Scalable food solutions to meet global demand"
    ]
  },
  {
    title: "Blockchain for Transparent Supply Chains",
    rawMaterials: ["Blockchain platforms", "IoT devices", "QR code systems"],
    processes: [
      "Tracking food products from farm to fork using blockchain",
      "Integrating IoT sensors to monitor transportation conditions and ensure freshness",
      "Enabling consumers to verify product origins and sustainability credentials"
    ],
    outcomes: [
      "Greater trust in food supply chains",
      "Reduction in food fraud and waste",
      "Empowerment of small farmers by providing market transparency"
    ]
  },
  {
    title: "Vertical Ocean Farming",
    rawMaterials: ["Seaweed", "Shellfish", "Renewable energy platforms"],
    processes: [
      "Farming seaweed and shellfish on vertically stacked platforms in oceans",
      "Using renewable energy to power aquafarming operations",
      "Integrating ocean farming with carbon capture technologies to combat climate change"
    ],
    outcomes: [
      "Sustainable food sources with minimal land and freshwater usage",
      "Enhanced ocean biodiversity and carbon sequestration",
      "Scalable solutions for feeding a growing population"
    ]
  },
  {
    title: "Synthetic Biology for Customized Crops",
    rawMaterials: ["CRISPR-Cas9 technology", "DNA sequences", "Lab-grown enzymes"],
    processes: [
      "Engineering crops to withstand extreme weather, pests, and diseases",
      "Modifying plants to produce higher nutritional content or pharmaceuticals",
      "Creating synthetic pathways for natural flavors and fragrances"
    ],
    outcomes: [
      "Climate-resilient crops with enhanced productivity",
      "Reduction in agricultural dependency on external inputs like pesticides",
      "New revenue streams for farmers from high-value crops"
    ]
  }
];

// Function to render the agricultural era data
function renderAgriculturalEras() {
  const container = document.getElementById('agri-container'); // The parent container for the content
  
  // Render Historical Agricultural Eras
  agriculturalEras.forEach(era => {
    const eraDiv = document.createElement('div');
    eraDiv.classList.add('agri-01');
    
    const title = document.createElement('h2');
    title.textContent = era.title;
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const image = document.createElement('img');
    image.src = era.imageSrc;
    image.alt = "Agriculture Image";
    imageContainer.appendChild(image);
    
    const rawMaterials = createSection('Raw Materials', era.rawMaterials);
    const processes = createSection('Processes', era.processes);
    const outcomes = createSection('Outcomes', era.outcomes);
    
    eraDiv.appendChild(title);
    eraDiv.appendChild(imageContainer);
    eraDiv.appendChild(rawMaterials);
    eraDiv.appendChild(processes);
    eraDiv.appendChild(outcomes);
    
    container.appendChild(eraDiv);
  });

  // Render Future Agricultural Advancements
  const futureContainer = document.getElementById('agri-future');

  agriFuture.forEach(era => {
    const eraDiv = document.createElement('div');
    eraDiv.classList.add('agri-01');
    
    const title = document.createElement('h2');
    title.textContent = era.title;
    
    const rawMaterials = createSection('Raw Materials', era.rawMaterials);
    const processes = createSection('Processes', era.processes);
    const outcomes = createSection('Outcomes', era.outcomes);
    
    eraDiv.appendChild(title);
    eraDiv.appendChild(rawMaterials);
    eraDiv.appendChild(processes);
    eraDiv.appendChild(outcomes);
    
    futureContainer.appendChild(eraDiv);
  });
}

// Helper function to create sections (Raw Materials, Processes, Outcomes)
function createSection(title, items) {
  const section = document.createElement('div');
  section.classList.add(title.toLowerCase().replace(' ', '-'));
  
  const sectionTitle = document.createElement('h3');
  sectionTitle.textContent = title;
  section.appendChild(sectionTitle);
  
  const list = document.createElement('ul');
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  section.appendChild(list);
  
  return section;
}

// Call the render function
renderAgriculturalEras();
