export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "aero-x1",
    name: "Aero X1 Drone",
    description: "Professional grade quadcopter with 4K camera and 30-minute flight time.",
    longDescription: "The Aero X1 represents the pinnacle of aerial imaging technology. Designed for professionals, it features a stabilized 4K 60fps camera, advanced obstacle avoidance, and a robust transmission system ensuring a reliable feed up to 7km away. Perfect for surveying, cinematography, and inspection tasks.",
    image: "https://picsum.photos/seed/drone/800/600",
    features: ["4K 60fps Video", "30 Min Flight Time", "Obstacle Avoidance", "7km Range"],
    category: "Aerospace"
  },
  {
    id: "quantum-node",
    name: "Quantum Compute Node",
    description: "High-performance edge computing node for AI and machine learning workloads.",
    longDescription: "Deploy sophisticated AI models directly at the edge with the Quantum Compute Node. Boasting a custom 64-core processor and integrated TPUs, it delivers unparalleled inference speeds while maintaining a low power footprint. Ideal for smart factories and autonomous systems.",
    image: "https://picsum.photos/seed/compute/800/600",
    features: ["64-core Processor", "128GB RAM", "Dual 10GbE", "TPU Integrated"],
    category: "Computing"
  },
  {
    id: "solar-pro",
    name: "Solar Array Pro",
    description: "High-efficiency monocrystalline solar panels for commercial installations.",
    longDescription: "Maximize your energy yield with our Solar Array Pro series. Utilizing next-generation monocrystalline cells, these panels achieve a 22% efficiency rate. Built to withstand extreme weather conditions, they guarantee long-term reliability for commercial and industrial energy needs.",
    image: "https://picsum.photos/seed/solar/800/600",
    features: ["400W Output", "22% Efficiency", "25-year Warranty", "Weather Resistant"],
    category: "Energy"
  },
  {
    id: "robo-arm",
    name: "Industrial Robot Arm",
    description: "6-axis robotic arm for manufacturing and assembly line automation.",
    longDescription: "Automate precision tasks with the Industrial Robot Arm. Featuring 6 degrees of freedom and sub-millimeter repeatability, it's perfect for welding, assembly, and pick-and-place operations. Fully compatible with ROS for seamless integration into existing pipelines.",
    image: "https://picsum.photos/seed/robot/800/600",
    features: ["5kg Payload", "0.01mm Repeatability", "ROS Support", "Collision Detection"],
    category: "Automation"
  },
  {
    id: "smart-sensor",
    name: "IoT EnvSensor",
    description: "Wireless multi-sensor node for comprehensive environmental monitoring.",
    longDescription: "Monitor temperature, humidity, air quality, and ambient light with a single, battery-operated device. The IoT EnvSensor uses low-power wide-area network (LPWAN) technology to transmit data over long distances, making it ideal for smart agriculture and facility management.",
    image: "https://picsum.photos/seed/sensor/800/600",
    features: ["Temp & Humidity", "Air Quality (VOC)", "5-year Battery", "LoRaWAN"],
    category: "IoT"
  },
  {
    id: "vision-system",
    name: "Machine Vision Camera",
    description: "High-speed industrial camera for automated visual inspection.",
    longDescription: "Ensure product quality with our high-speed Machine Vision Camera. Capturing up to 500 frames per second at 1080p resolution, it's designed to catch the smallest defects on fast-moving production lines. Includes built-in processing for edge-based image analysis.",
    image: "https://picsum.photos/seed/vision/800/600",
    features: ["500fps @ 1080p", "Global Shutter", "GigE Vision", "IP67 Rated"],
    category: "Automation"
  }
];
