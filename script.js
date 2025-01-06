const header = document.getElementById("head-title");

const selfTarget = () => {
    window.location.href = "../index.html" ;
}

header.addEventListener("click" , selfTarget);

document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        { 
            title: "Primary Sectors", 
            items: [
                { name: "Agriculture", link: "/sub/agriculture.html" },
                { name: "Fishing", link: "/sub/fishing.html" },
                { name: "Forestry", link: "/sub/forestry.html" },
                { name: "Mining", link: "/sub/mining.html" },
                { name: "Energy Production", link: "/sub/energy.html" }
            ]
        },

        { 
            title: "Secondary Sectors", 
            items: [
                { name: "Automobile", link: "/sub/automobile.html" },
                { name: "Aerospace", link: "/sub/aerospace.html" },
                { name: "Construction", link: "/sub/construction.html" },
                { name: "Steel and Metalworks", link: "/sub/steel.html" },
                { name: "Electronics", link: "/sub/electronics.html" }
            ]
        },

        {
            title: "Tertiary Sectors",
            items: [
                { name: "Retail", link: "/sub/retail.html" },
                { name: "Hospitality", link: "/sub/hospitality.html" },
                { name: "Food and Beverage", link: "/sub/food-beverage.html" },
                { name: "Healthcare", link: "/sub/healthcare.html" },
                { name: "Banking", link: "/sub/banking.html" }
            ]
        },

        {
            title: "Quaternary Sectors",
            items: [
                { name: "IT", link: "/sub/it.html" },
                { name: "AI & ML", link: "/sub/ai-ml.html" },
                { name: "R&D", link: "/sub/rnd.html" },
                { name: "Data Analytics", link: "/sub/data-analytics.html" },
                { name: "Consulting", link: "/sub/consulting.html" }
            ]
        },

        {
            title: "Quinary Sectors",
            items: [
                { name: "Government", link: "/sub/government.html" },
                { name: "Non-Profit", link: "/sub/non-profit.html" },
                { name: "Think Tanks", link: "/sub/think-tanks.html" }
            ]
        },

        {
            title: "Emerging Sectors",
            items: [
                { name: "Renewable Energy", link: "/sub/renewable-energy.html" },
                { name: "EV", link: "/sub/ev.html" },
                { name: "Blockchain", link: "/sub/blockchain.html" },
                { name: "Space Tech", link: "/sub/space-tech.html" },
                { name: "Environmental Conservation", link: "/sub/environmental-conservation.html" }
            ]
        }
    ];

 
    const nav = document.querySelector('nav ul');

    categories.forEach(category => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        const dropdown = document.createElement('ul');

        button.textContent = category.title;
        button.classList.add('dropdown');
        dropdown.classList.add('dropdown-content');

        category.items.forEach(item => {
            const subItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = item.name;
            link.href = item.link;
            subItem.appendChild(link);
            dropdown.appendChild(subItem);
        });

        listItem.appendChild(button);
        listItem.appendChild(dropdown);
        nav.appendChild(listItem);

        // Add hover effect for main category
        button.addEventListener('mouseover', () => {
            dropdown.classList.add('show');
        });

        listItem.addEventListener('mouseover', () => {
            dropdown.classList.add('show');
        });

        listItem.addEventListener('mouseout', () => {
            dropdown.classList.remove('show');
        });
    });
});