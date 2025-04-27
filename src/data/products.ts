
import { Product, ProductCategory } from "@/utils/types";

export const products: Product[] = [
  {
    id: "1",
    name: "SolarLink Premium 400W Panel",
    slug: "solarlink-premium-400w-panel",
    category: "Solar Panels",
    price: 349.99,
    description: "High-efficiency monocrystalline solar panel with advanced cell technology for maximum power output. Perfect for residential installations seeking reliable performance and durability.",
    features: [
      "400W power output",
      "22% efficiency rating",
      "Anti-reflective glass coating",
      "25-year warranty",
      "Weather-resistant aluminum frame"
    ],
    specifications: {
      "Dimensions": "1765 x 1048 x 35mm",
      "Weight": "20kg",
      "Cell Type": "Monocrystalline",
      "Operating Temperature": "-40°C to 85°C",
      "Maximum System Voltage": "1000V DC"
    },
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.8,
    inStock: true
  },
  {
    id: "2",
    name: "SolarLink PowerBank 5000mAh",
    slug: "solarlink-powerbank-5000mah",
    category: "Solar Chargers",
    price: 59.99,
    description: "Compact solar power bank with high-capacity battery for charging smartphones and small devices on the go. Integrated solar panel for emergency charging when away from power outlets.",
    features: [
      "5000mAh capacity",
      "Dual USB outputs",
      "LED flashlight",
      "Water-resistant design",
      "Carabiner included"
    ],
    specifications: {
      "Dimensions": "145 x 75 x 15mm",
      "Weight": "150g",
      "Input": "5V/2A (USB-C)",
      "Output": "5V/2.1A (USB-A)",
      "Battery Type": "Li-Polymer"
    },
    imageUrl: "https://images.unsplash.com/photo-1620410856747-5fcbd34aaf02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.5,
    inStock: true
  },
  {
    id: "3",
    name: "SolarLink Home Inverter 5kW",
    slug: "solarlink-home-inverter-5kw",
    category: "Solar Inverters",
    price: 1299.99,
    description: "Powerful 5kW hybrid inverter compatible with both on-grid and off-grid systems. Advanced MPPT technology maximizes energy harvest while ensuring system stability.",
    features: [
      "5000W continuous output",
      "Hybrid on/off-grid capability",
      "Wi-Fi monitoring",
      "Battery management system",
      "Expandable capacity"
    ],
    specifications: {
      "Dimensions": "650 x 400 x 185mm",
      "Weight": "42kg",
      "Efficiency": ">97%",
      "AC Output": "230V, 50/60Hz",
      "IP Rating": "IP65"
    },
    imageUrl: "https://images.unsplash.com/photo-1591373058292-a0d49817d3bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.9,
    inStock: true
  },
  {
    id: "4",
    name: "SolarLink LiFePO4 Battery 5kWh",
    slug: "solarlink-lifepo4-battery-5kwh",
    category: "Solar Batteries",
    price: 2499.99,
    description: "High-performance lithium iron phosphate battery designed for daily cycling and long-term energy storage. Integrates seamlessly with solar systems for reliable backup power.",
    features: [
      "5kWh capacity",
      "10-year warranty",
      "6000+ cycle life",
      "Built-in BMS",
      "Stackable design"
    ],
    specifications: {
      "Dimensions": "584 x 168 x 215mm",
      "Weight": "55kg",
      "Nominal Voltage": "51.2V",
      "Operating Temperature": "0°C to 45°C",
      "Depth of Discharge": "95%"
    },
    imageUrl: "https://images.unsplash.com/photo-1568907701740-3c1f2a5730d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.7,
    inStock: true
  },
  {
    id: "5",
    name: "SolarLink Garden Lights (4-Pack)",
    slug: "solarlink-garden-lights-4-pack",
    category: "Solar Lighting",
    price: 49.99,
    description: "Elegant solar-powered garden lights with automatic dusk-to-dawn operation. Enhances outdoor ambiance while providing practical illumination for pathways and garden features.",
    features: [
      "8-10 hours runtime",
      "Stainless steel construction",
      "Warm white LEDs",
      "Waterproof design",
      "Easy installation"
    ],
    specifications: {
      "Dimensions": "38 x 38 x 450mm",
      "Weight": "180g each",
      "Battery": "AA Ni-MH 600mAh",
      "Light Color": "3000K warm white",
      "IP Rating": "IP65"
    },
    imageUrl: "https://images.unsplash.com/photo-1623241889594-d3eda86a0e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.3,
    inStock: true
  },
  {
    id: "6",
    name: "SolarLink Mounting Kit",
    slug: "solarlink-mounting-kit",
    category: "Accessories",
    price: 89.99,
    description: "Complete roof mounting system for residential solar panel installation. Includes all necessary hardware with adjustable racking for optimal solar panel positioning.",
    features: [
      "Compatible with all standard panels",
      "Anodized aluminum construction",
      "Adjustable tilt angle",
      "Wind and snow load tested",
      "10-year warranty"
    ],
    specifications: {
      "Material": "6005-T5 Aluminum",
      "Load Capacity": "60 kg/m²",
      "Wind Resistance": "Up to 160 km/h",
      "Fits Panel Width": "950-1100mm",
      "Installation Type": "Roof mount"
    },
    imageUrl: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.6,
    inStock: true
  },
  {
    id: "7",
    name: "SolarLink Commercial 600W Panel",
    slug: "solarlink-commercial-600w-panel",
    category: "Solar Panels",
    price: 549.99,
    description: "Heavy-duty solar panel designed for commercial installations requiring maximum power density. Superior performance even in low-light and high-temperature environments.",
    features: [
      "600W power output",
      "23.5% efficiency rating",
      "Half-cell technology",
      "PID resistant",
      "30-year performance warranty"
    ],
    specifications: {
      "Dimensions": "2278 x 1134 x 35mm",
      "Weight": "29kg",
      "Cell Type": "Monocrystalline PERC",
      "Operating Temperature": "-40°C to 85°C", 
      "Maximum System Voltage": "1500V DC"
    },
    imageUrl: "https://images.unsplash.com/photo-1545406225-6edab6df4cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.9,
    inStock: true
  },
  {
    id: "8",
    name: "SolarLink Portable 100W Kit",
    slug: "solarlink-portable-100w-kit",
    category: "Solar Panels",
    price: 249.99,
    description: "Complete portable solar kit for camping, RVs, and off-grid adventures. Foldable design with integrated kickstand for optimal sun positioning and convenient carrying case.",
    features: [
      "100W foldable panel",
      "10A charge controller included",
      "USB and DC outputs",
      "Built-in kickstand",
      "Weatherproof construction"
    ],
    specifications: {
      "Dimensions (Folded)": "540 x 410 x 50mm",
      "Weight": "5.5kg",
      "Cell Type": "Monocrystalline",
      "Outputs": "USB-A, USB-C, DC 12V",
      "Included": "10 adapters for various devices"
    },
    imageUrl: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
    rating: 4.7,
    inStock: false
  }
];

export const getProductCategories = (): string[] => {
  const categories = new Set<string>();
  products.forEach(product => categories.add(product.category));
  return Array.from(categories);
};

export const getProductsByCategory = (category?: ProductCategory): Product[] => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = (count: number = 4): Product[] => {
  return products.slice(0, count);
};

export const getRelatedProducts = (productId: string, count: number = 3): Product[] => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, count);
};
