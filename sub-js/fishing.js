const fishingHistory = [
    {
      title: "Prehistoric Times: Early Fishing Practices",
      imageSrc: "../assets/primary-sector/fishing-01.png",
      rawMaterials: ["Natural fibers", "Wooden spears"],
      processes: [
        "Use of rudimentary tools to catch fish in rivers, lakes, and coastal areas",
        "Basic net weaving using natural fibers",
      ],
      outcomes: [
        "Development of subsistence fishing",
        "Early human reliance on aquatic resources for survival",
      ],
    },
    {
      title: "2000 BCE: Ancient Egyptian and Chinese Fishing",
      imageSrc: "../assets/primary-sector/fishing-02.png",
      rawMaterials: ["Wooden tools", "Fish ponds"],
      processes: [
        "Depiction of fishing in Egyptian art",
        "Early aquaculture methods developed by the Chinese (fish ponds)",
      ],
      outcomes: [
        "Advancement of traditional fishing methods",
        "Pioneering practices in fish farming",
      ],
    },
    {
      title: "Middle Ages: Emergence of Coastal Fisheries",
      imageSrc: "../assets/primary-sector/fishing-03.png",
      rawMaterials: ["Wooden boats", "Salt for preservation"],
      processes: [
        "Large-scale fishing by coastal communities",
        "Use of salt for preserving fish, enhancing trade",
      ],
      outcomes: [
        "Commercial coastal fishing gained importance",
        "Fish became a key trade commodity",
      ],
    },
    {
      title: "15th–17th Century: Global Expansion of Fishing",
      imageSrc: "../assets/primary-sector/fishing-04.png",
      rawMaterials: ["Large ships", "Ropes", "Wooden barrels"],
      processes: [
        "European explorers expanded fishing into the Atlantic, Pacific, and Arctic oceans",
        "Cod, herring, and whale fishing became dominant activities",
      ],
      outcomes: [
        "Development of ocean fishing industries",
        "Expansion of fish trade across continents",
      ],
    },
    {
      title: "19th Century: Industrialization of Fishing",
      imageSrc: "../assets/primary-sector/fishing-05.png",
      rawMaterials: ["Mechanized boats", "Refrigeration"],
      processes: [
        "Steam engines enabled deeper-sea fishing",
        "Introduction of refrigeration extended fish freshness and markets"
      ],
      outcomes: [
        "Mechanized trawling became widespread",
        "Facilitated long-distance fish transportation"
      ]
    },
    {
      title: "20th Century: Rise of Industrial Fishing and Aquaculture",
      imageSrc: "../assets/primary-sector/fishing-06.png",
      rawMaterials: ["Nylon nets", "Large trawlers", "Fish farms"],
      processes: [
        "Development of large-scale fishing fleets",
        "Emergence of aquaculture as a sustainable seafood source"
      ],
      outcomes: [
        "Growth of commercial fishing fleets",
        "Innovation in fish farming and processing"
      ]
    },
    {
      title: "1970s–1980s: Overfishing Concerns and Environmental Impact",
      imageSrc: "../assets/primary-sector/fishing-07.png",
      rawMaterials: ["Fishing gear", "Trawlers"],
      processes: [
        "Awareness of overfishing led to global discussions on sustainability",
        "Implementation of fishing quotas and regulations"
      ],
      outcomes: [
        "Shift to sustainable fishing practices",
        "Foundation for modern environmental regulations"
      ]
    },
    {
      title: "2000s–2010s: Sustainable Aquaculture Growth",
      imageSrc: "../assets/primary-sector/fishing-08.png",
      rawMaterials: ["Fish feed", "Advanced fish farms"],
      processes: [
        "Aquaculture surpassed wild fishing as a major source of seafood",
        "Technology-driven solutions improved sustainability"
      ],
      outcomes: [
        "Large-scale aquaculture operations flourished",
        "Improved environmental and resource sustainability"
      ]
    }
];
  
  function renderFishingHistory() {
    const container = document.getElementById("fishing-container");
  
    fishingHistory.forEach((era) => {
      const card = document.createElement("div");
      card.classList.add("fishing-card");
  
      const title = document.createElement("h2");
      title.textContent = era.title;
      card.appendChild(title);
  
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const image = document.createElement("img");
      image.src = era.imageSrc;
      image.alt = era.title;
      imageContainer.appendChild(image);
      card.appendChild(imageContainer);
  
      card.appendChild(createListSection("Raw Materials", era.rawMaterials));
      card.appendChild(createListSection("Processes", era.processes));
      card.appendChild(createListSection("Outcomes", era.outcomes));
  
      container.appendChild(card);
    });
  }
  
  function createListSection(title, items) {
    const section = document.createElement("div");
    section.classList.add(title.toLowerCase().replace(/\s/g, "-"));
    const heading = document.createElement("h3");
    heading.textContent = title;
    section.appendChild(heading);
  
    const list = document.createElement("ul");
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  
    section.appendChild(list);
    return section;
  }
  
  // Render the fishing history when the page loads
  document.addEventListener("DOMContentLoaded", renderFishingHistory);
  