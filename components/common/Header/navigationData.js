import {
  FaNodeJs,
  FaAngular,
  FaMagento,
  FaShopify,
  FaSalesforce,
  FaBus,
  FaHotel,
  FaAndroid,
  FaAppStoreIos,
  FaMobileAlt,
  FaLaravel,
  FaSymfony,
  FaOpencart,
  FaSchool,
  FaRegHeart,
  FaCloudDownloadAlt,
  FaExchangeAlt,
  FaArrowCircleRight,
  FaCogs,
  FaShieldAlt,
  FaWrench,
  FaDesktop,
  FaServer,
  FaHeadset,
  FaNetworkWired,
  FaLock,
  FaCloud,
  FaLinux,
  FaWindows,
  FaDatabase,
  FaHdd,
  FaEnvelope,
  FaBuilding,
  FaDharmachakra,
  FaFlag,
} from "react-icons/fa";

import { FaReact, FaEarthAmericas } from "react-icons/fa6";
import { RiNextjsFill, RiUserLocationLine } from "react-icons/ri";
import { TbBusinessplan } from "react-icons/tb";
import { RiRestaurant2Fill } from "react-icons/ri";
import {
  IoLayersOutline,
  IoReceiptOutline,
  IoFastFoodOutline,
} from "react-icons/io5";
import {
  BiTransfer,
  BiBuildingHouse,
  BiCartDownload,
  BiCog,
  BiGrid,
  BiLeaf,
  BiPackage,
  BiStar,
} from "react-icons/bi";
import {
  MdOutlineReportProblem,
  MdGpsFixed,
  MdOutlineOndemandVideo,
  MdDevicesOther,
  MdOutlineStar,
  MdOutlineLightbulb,
  MdOutlineLock,
  MdOutlineDevices,
  MdOutlineHomeWork,
  MdOutlineAlarm,
  MdOutlineSmokeFree,
  MdOutlineWbSunny,
  MdSchool,
  MdBusiness,
  MdLocationCity,
  MdLocalHospital,
  MdAccountBalance,
  MdShoppingCart,
  MdFlight,
  MdFactory,
} from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import {
  MdOutlineFeaturedPlayList,
  MdOutlineSecurity,
  MdOutlineAutorenew,
  MdSecurity,
} from "react-icons/md";

import { GrVmMaintenance } from "react-icons/gr";

const ourservices = [
  {
    title: "Service",
    href: "/services",
    icon: FaCogs, // Changed to non-solid FaCog
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    title: "Maintenance Support",
    icon: GrVmMaintenance, // Solid FaWrench to non-solid FaWrench
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    submenu: [
      {
        title: "Application Support",
        href: "/services/application-support",
        icon: FaDesktop, // Solid FaDesktop to non-solid FaDesktop
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        title: "Infrastructure Support",
        href: "/services/infrastructure-support",
        icon: FaServer, // Solid FaServer to non-solid FaServer
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        title: "Customer Support",
        href: "/services/customer-support",
        icon: FaHeadset, // Solid FaHeadset to non-solid FaHeadset
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
      },
    ],
  },
  {
    title: "Security Compliance",
    href: "#",
    icon: MdSecurity, // Solid FaShieldAlt to non-solid FaShieldAlt
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
    submenu: [
      {
        title: "Network Security",
        href: "/services/network-security",
        icon: FaNetworkWired, // Solid FaNetworkWired to non-solid FaNetworkWired
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "Infrastructure Security",
        href: "/services/infrastructure-security",
        icon: FaLock, // Solid FaLock to non-solid FaLock
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        title: "Application Security",
        href: "/services/application-security",
        icon: FaShieldAlt, // Solid FaShieldAlt to non-solid FaShieldAlt
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
    ],
  },
  {
    title: "Infrastructure",
    icon: FaCloud, // Solid FaCloud to non-solid FaCloud
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
    submenu: [
      {
        title: "Cloud Infrastructure",
        href: "/services/cloud-infrastructure",
        icon: FaCloudDownloadAlt, // Solid FaCloudDownloadAlt to non-solid FaCloudDownloadAlt
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        title: "Integration",
        href: "/services/integration",
        icon: FaExchangeAlt, // Solid FaExchangeAlt to non-solid FaExchangeAlt
        bgColor: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        title: "Migration",
        href: "/services/migration",
        icon: FaArrowCircleRight, // Solid FaArrowCircleRight to non-solid FaArrowCircleRight
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
    ],
  },
  {
    title: "Abaris Zimbra Software",
    icon: FaEnvelope,
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    submenu: [
      {
        title: "Hosting Service",
        href: "/services/hosting-service",
        icon: FaServer,
        bgColor: "bg-blue-100",
        textColor: "text-blue-700",
      },
      {
        title: "NVMe",
        href: "/services/nvme",
        icon: FaHdd,
        bgColor: "bg-slate-100",
        textColor: "text-slate-700",
      },
      {
        title: "Data Leak Prevention",
        href: "/services/data-leak-prevention",
        icon: FaShieldAlt,
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-700",
      },
      {
        title: "Bare Metal Server",
        href: "/services/bare-metal-server",
        icon: FaDatabase,
        bgColor: "bg-gray-100",
        textColor: "text-gray-700",
      },
      {
        title: "Windows Dedicated Server",
        href: "/services/windows-dedicated-server",
        icon: FaWindows,
        bgColor: "bg-blue-200",
        textColor: "text-blue-800",
      },
      {
        title: "Linux Dedicated Server",
        href: "/services/linux-dedicated-server",
        icon: FaLinux,
        bgColor: "bg-green-100",
        textColor: "text-green-700",
      },
    ],
  },
  {
    title: "Data Center Services",
    href: "/services/data-center-services",
    icon: FaBuilding,
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700",
  },
  {
    title: "Colocation",
    href: "/services/colocation",
    icon: FaNetworkWired,
    bgColor: "bg-teal-100",
    textColor: "text-teal-700",
  },
];

const technologiesMenu = [
  {
    name: "Angular",
    url: "/technology/angularjs",
    icon: FaAngular, // Angular Red
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    name: "Node Js",
    url: "/technology/nodejs",
    icon: FaNodeJs, // Node Green
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    name: "React Js",
    url: "/technology/reactjs",
    icon: FaReact, // React Blue
    bgColor: "bg-cyan-100",
    textColor: "text-cyan-500",
  },
  {
    name: "Next Js",
    url: "/technology/nextjs",
    icon: RiNextjsFill, // Next.js Black
    bgColor: "bg-gray-100",
    textColor: "text-gray-900",
  },
  {
    name: "Magento",
    url: "/technology/magento",
    icon: FaMagento, // Magento Pink
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    name: "Shopify",
    url: "/technology/shopify",
    icon: FaShopify, // Shopify Green
    bgColor: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    name: "Laravel",
    url: "/technology/laravel",
    icon: FaLaravel, // Laravel Red
    bgColor: "bg-red-100",
    textColor: "text-red-500",
  },
  {
    name: "Symfony",
    url: "/technology/symfony",
    icon: FaSymfony, // Symfony Black
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    name: "Salesforce",
    url: "/technology/salesforce",
    icon: FaSalesforce, // Salesforce Blue
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    name: "OpenCart",
    url: "/technology/opencart",
    icon: FaOpencart, // OpenCart Light Blue
    bgColor: "bg-blue-100",
    textColor: "text-blue-400",
  },
  {
    name: "iOS",
    url: "/technology/ios",
    icon: FaAppStoreIos, // iOS Black
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    name: "Android",
    url: "/technology/android",
    icon: FaAndroid, // Android Green
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
];

const fintech = [
  {
    title: "Domestic Money Transfer",
    icon: BiTransfer,
    href: "/fintech/domestic-money-transfer",
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    title: "Adhar Enable Payment",
    icon: FaDharmachakra,
    href: "/fintech/adhar-enable-payment",
    bgColor: "bg-teal-100",
    textColor: "text-teal-600",
  },
  {
    title: "Bharat Bill Payment",
    icon: FaFlag,
    href: "/fintech/bharat-bill-payment",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
  {
    title: "Pancard Service",
    icon: FaFlag,
    href: "/pancard-service",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    title: "Travel Booking Software",
    href: "/travel-booking-software",
    icon: MdAccountBalance,

    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    title: "Mobile Recharge Software",
    href: "/mobile-recharge-software",
    icon: IoLayersOutline,
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
  },
  {
    title: "Pan card verification",
    href: "/fintech/pan-card-verification",
    icon: IoLayersOutline,
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
  },

  {
    title: "Adhar Verification",
    icon: BiTransfer,
    href: "/fintech/adhar-verification",
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    title: "Vehicle Verification",
    icon: FaDharmachakra,
    href: "/fintech/vehicle-verification",
    bgColor: "bg-teal-100",
    textColor: "text-teal-600",
  },
  {
    title: "Cibil Score",
    icon: FaFlag,
    href: "/fintech/cibil-score",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
  {
    title: "UTI (PANCARD)",
    icon: FaFlag,
    href: "/fintech/uti",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    title: "Recharge",
    href: "/fintech/recharge",
    icon: MdAccountBalance,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },

  {
    title: "Bus Booking",
    icon: FaBus,
    href: "/fintech/bus-booking",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
  {
    title: "Hotel Booking",
    icon: FaHotel,
    href: "/fintech/hotel-booking",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    title: "Flight Booking",
    href: "/fintech/flight-booking",
    icon: MdFlight,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
];

const mlm = [
  {
    title: "Bot Based MLM",
    icon: BiTransfer,
    href: "/mlm/bot-based-mlm",
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    title: "Binary MLM",
    icon: FaDharmachakra,
    href: "/mlm/binary-mlm",
    bgColor: "bg-teal-100",
    textColor: "text-teal-600",
  },
  {
    title: "Level MLM",
    icon: FaFlag,
    href: "/mlm/level-mlm",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
  },
  {
    title: "Australian Binary MLM Software",
    icon: FaFlag,
    href: "/mlm/australian-binary-mlm-software",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
];
const productsMenu = [
  {
    title: "Restaurant Business",
    icon: RiRestaurant2Fill,
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    submenu: [
      {
        title: "Billing Management",
        href: "/restaurent-business/billing-software",
        icon: IoReceiptOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        title: "Online Ordering ",
        href: "/restaurent-business/online-ordering-software",
        icon: BiCartDownload,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "Reporting Management",
        href: "/restaurent-business/reporting-management-software",
        icon: MdOutlineReportProblem,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        title: "Menu Management",
        href: "/restaurent-business/menu-management-software",
        icon: IoLayersOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        title: "Food Management",
        href: "/restaurent-business/food-management-software",
        icon: IoFastFoodOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-teal-100",
        textColor: "text-teal-600",
      },
      {
        title: "HRM ",
        href: "/restaurent-business/hrm",
        icon: IoLayersOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
    ],
  },
  {
    title: "Abaris Employee Tracker",
    icon: RiUserLocationLine,
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    submenu: [
      {
        title: "Mobile GPS Tracking",
        href: "/employee-tracking/mobile-gps-tracking",
        icon: MdGpsFixed,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        title: "HRMS / Payroll / expense",
        href: "/employee-tracking/hrms-payroll-tracking",
        icon: IoLayersOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        title: "Order Tracker ",
        href: "/employee-tracking/order-tracking",
        icon: BiCartDownload,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "Lead Generation ",
        href: "/employee-tracking/lead-generation",
        icon: FiUserPlus,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        title: "Business Planning",
        href: "/employee-tracking/business-planing",
        icon: TbBusinessplan,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-pink-100",
        textColor: "text-pink-600",
      },
      {
        title: "CRM",
        href: "/employee-tracking/crm",
        icon: IoLayersOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-teal-100",
        textColor: "text-teal-600",
      },
      {
        title: "Demo",
        href: "/employee-tracking/demo",
        icon: MdOutlineOndemandVideo,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
    ],
  },
  {
    title: "Abaris Multi Vendor Portal",
    icon: IoLayersOutline,
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
    submenu: [
      {
        title: "Multi Vendor Feature",
        href: "/multi-vendor-portal/features",
        icon: MdOutlineFeaturedPlayList,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        title: "Security",
        href: "/multi-vendor-portal/security",
        icon: MdOutlineSecurity,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
    ],
  },
  {
    title: "Abaris ERP",
    icon: IoLayersOutline,
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
    submenu: [
      {
        title: "ERP",
        href: "/abaris-erp/erp",
        icon: IoLayersOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-teal-100",
        textColor: "text-teal-600",
      },
      {
        title: "Discrete Manufacturing",
        href: "/abaris-erp/discrete-manufacturing",
        icon: BiCog,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "Geo-textile Manufacturing",
        href: "/abaris-erp/geo-textile-manufacturing",
        icon: BiGrid,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        title: "Spices Manufacturing",
        href: "/abaris-erp/spices-manufacturing",
        icon: BiLeaf,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-pink-100",
        textColor: "text-pink-600",
      },
      {
        title: "Ceramics Manufacturing",
        href: "/abaris-erp/ceramics-manufacturing",
        icon: BiBuildingHouse,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
      },
      {
        title: "WMS",
        href: "/abaris-erp/wms",
        icon: BiPackage,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },

      {
        title: "Inventory Software",
        href: "/inventory-software",
        icon: IoLayersOutline,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-teal-100",
        textColor: "text-teal-600",
      },
      {
        title: "ERP for Trading",
        href: "/erp-trading",
        icon: BiCog,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "ERP for Production Planning",
        href: "/production-planning",
        // href: "/",
        icon: BiGrid,
        description:
          "For sighted users to preview content available behind a link.",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
    ],
  },
  {
    title: "Abaris IOT",
    icon: MdDevicesOther,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
    submenu: [
      {
        title: "Abaris IOT",
        href: "/iot",
        icon: MdDevicesOther,
        description:
          "Discover the key features of our IoT platform and its capabilities.",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        title: "IoT Integration",
        href: "/iot/integration-solutions",
        icon: MdOutlineDevices,
        description:
          "Explore our IoT solutions for seamless integration of various systems.",
        bgColor: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        title: "Home Automation",
        href: "/iot/home-automation",
        icon: MdOutlineLock,
        description:
          "Ensure your home is secure and automated with our advanced solutions.",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        title: "Lighting Management",
        href: "/iot/lighting-management",
        icon: MdOutlineLightbulb,
        description:
          "Control and manage lighting systems efficiently with our integrated IoT solutions.",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        title: "Solar Street Lighting System",
        href: "/iot/solar-street-lighting",
        icon: MdOutlineWbSunny,
        description:
          "Leverage solar-powered IoT solutions for sustainable street lighting.",
        bgColor: "bg-neutral-100",
        textColor: "text-neutral-600",
      },
      {
        title: "Fire Fighting System",
        href: "/iot/fire-fighting",
        icon: MdOutlineSmokeFree,
        description:
          "Innovative fire-fighting systems using IoT for enhanced safety and monitoring.",
        bgColor: "bg-red-200",
        textColor: "text-red-800",
      },
      {
        title: "Alarm System",
        href: "/iot/alarm-system",
        icon: MdOutlineAlarm,
        description:
          "Protect your premises with advanced IoT-based alarm systems.",
        bgColor: "bg-yellow-200",
        textColor: "text-yellow-800",
      },
      {
        title: "Building Management System (BMS)",
        href: "/iot/bms",
        icon: MdOutlineHomeWork,
        description:
          "Integrate building systems into a unified IoT-based management platform.",
        bgColor: "bg-blue-200",
        textColor: "text-blue-800",
      },
    ],
  },
  {
    title: "CRM",
    icon: MdBusiness,
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
    submenu: [
      {
        title: "Education CRM",
        href: "/crm/education",
        icon: MdSchool,
        description:
          "Manage student interactions, enrollment processes, and communication effectively.",
        bgColor: "bg-green-100",
        textColor: "text-green-600",
      },
      {
        title: "Real Estate CRM",
        href: "/crm/real-estate",
        icon: MdLocationCity,
        description:
          "Optimize real estate sales, customer interactions, and property management.",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
      {
        title: "Healthcare CRM",
        href: "/crm/healthcare",
        icon: MdLocalHospital,
        description:
          "Enhance patient engagement, appointment scheduling, and healthcare operations.",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        title: "Finance CRM",
        href: "/crm/finance",
        icon: MdAccountBalance,
        description:
          "Manage financial client relationships, transactions, and workflow automation.",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      // {
      //   title: "Retail CRM",
      //   href: "/crm/retail",
      //   icon: MdShoppingCart,
      //   description:
      //     "Streamline retail operations, customer engagement, and sales tracking.",
      //   bgColor: "bg-purple-100",
      //   textColor: "text-purple-600",
      // },
      {
        title: "Manufacturing CRM",
        href: "/crm/manufacturing",
        icon: MdFactory, // 🏭 Factory icon for manufacturing
        description:
          "Optimize production workflows, supply chain management, and customer relationships.",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "Travel CRM",
        href: "/crm/travel",
        icon: MdFlight,
        description:
          "Enhance travel bookings, customer experience, and itinerary management.",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
    ],
  },

  // Fintech
  {
    title: "Fintech",
    icon: MdBusiness,
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
    submenu: [
      {
        title: "Domestic Money Transfer",
        icon: BiTransfer,
        href: "/fintech/domestic-money-transfer",
        bgColor: "bg-pink-100",
        textColor: "text-pink-600",
      },
      {
        title: "Adhar Enable Payment",
        icon: FaDharmachakra,
        href: "/fintech/adhar-enable-payment",
        bgColor: "bg-teal-100",
        textColor: "text-teal-600",
      },
      {
        title: "Bharat Bill Payment",
        icon: FaFlag,
        href: "/fintech/bharat-bill-payment",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "Pancard Service",
        icon: FaFlag,
        href: "/pancard-service",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        title: "Travel Booking Software",
        href: "/travel-booking-software",
        icon: MdAccountBalance,
        description:
          "Discover the best travel booking software designed to streamline and simplify your travel planning process. Easily book flights, hotels, rental cars, and more with our user-friendly platform. Experience seamless travel booking today!",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
      {
        title: "Mobile Recharge Software",
        href: "/mobile-recharge-software",
        icon: IoLayersOutline,
        description:
          "Experience the convenience of our Mobile Recharge Software, designed to provide fast, reliable, and secure mobile recharges. Manage recharges for all networks effortlessly and enhance customer satisfaction with our easy-to-use platform.",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
      {
        title: "Pan card verification",
        href: "/pan-card-verification",
        icon: IoLayersOutline,
        description:
          "Experience the convenience of our Mobile Recharge Software, designed to provide fast, reliable, and secure mobile recharges. Manage recharges for all networks effortlessly and enhance customer satisfaction with our easy-to-use platform.",
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-600",
      },
    ],
  },

  // {
  //   title: "Abaris IOT",
  //   icon: MdDevicesOther,
  //   bgColor: "bg-yellow-100",
  //   textColor: "text-yellow-600",
  //   submenu: [
  //     {
  //       title: "Abaris IOT",
  //       href: "/iot",
  //       icon: MdDevicesOther,
  //       description:
  //         "Discover the key features of our IoT platform and its capabilities.",
  //       bgColor: "bg-red-100",
  //       textColor: "text-red-600",
  //     },
  //     {
  //       title: "IoT Integration",
  //       href: "/iot/integration-solutions",
  //       icon: MdOutlineDevices,
  //       description:
  //         "Explore our IoT solutions for seamless integration of various systems.",
  //       bgColor: "bg-green-100",
  //       textColor: "text-green-600",
  //     },
  //     {
  //       title: "Home Automation",
  //       href: "/iot/home-automation",
  //       icon: MdOutlineLock,
  //       description:
  //         "Ensure your home is secure and automated with our advanced solutions.",
  //       bgColor: "bg-blue-100",
  //       textColor: "text-blue-600",
  //     },
  //     {
  //       title: "Lighting Management",
  //       href: "/iot/lighting-management",
  //       icon: MdOutlineLightbulb,
  //       description:
  //         "Control and manage lighting systems efficiently with our integrated IoT solutions.",
  //       bgColor: "bg-yellow-100",
  //       textColor: "text-yellow-600",
  //     },
  //   ],
  // },
  {
    title: "Abaris School ERP",
    icon: FaSchool,
    href: "/school-erp",
    bgColor: "bg-teal-100",
    textColor: "text-teal-600",
  },
  {
    title: "Abaris Matrimonial Portal",
    icon: FaRegHeart,
    href: "/matrimonial-portal",
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    title: "Travel Business",
    icon: FaEarthAmericas,
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    submenu: [
      {
        title: "Travel Supplier",
        icon: BiTransfer,
        href: "/travel-supplier",
        bgColor: "bg-pink-100",
        textColor: "text-pink-600",
      },
      {
        title: "Travel Pricing",
        icon: FaDharmachakra,
        href: "/travel-pricing",
        bgColor: "bg-teal-100",
        textColor: "text-teal-600",
      },
      {
        title: "Travel CRM",
        icon: FaFlag,
        href: "/travel-crm",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "B2B Solution",
        icon: FaFlag,
        href: "/b2b-solution",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        title: "B2C Solution",
        href: "/b2c-solution",
        icon: MdAccountBalance,
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
    ],
  },
  {
    title: "Health Care",
    icon: MdBusiness,
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    submenu: [
      {
        title: "Abaris HIS",
        icon: BiTransfer,
        href: "/health/abaris-his",
        bgColor: "bg-pink-100",
        textColor: "text-pink-600",
      },
      {
        title: "Abaris EMR",
        icon: FaDharmachakra,
        href: "/health/abaris-emr",
        bgColor: "bg-teal-100",
        textColor: "text-teal-600",
      },
      {
        title: "Abaris LIS",
        icon: FaFlag,
        href: "/health/abaris-lis",
        bgColor: "bg-slate-100",
        textColor: "text-slate-600",
      },
      {
        title: "Abaris RIS",
        icon: FaFlag,
        href: "/health/abaris-ris",
        bgColor: "bg-red-100",
        textColor: "text-red-600",
      },
      {
        title: "Abaris PIS ",
        href: "/health/abaris-pis",
        icon: MdAccountBalance,
        description:
          "Discover the best travel booking software designed to streamline and simplify your travel planning process. Easily book flights, hotels, rental cars, and more with our user-friendly platform. Experience seamless travel booking today!",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
      },
    ],
  },
  {
    title: "HR Software",
    icon: RiUserLocationLine,
    bgColor: "bg-green-100",
    href: "/hr-software",
    textColor: "text-green-600",
  },
];

const whatWeDoMenu = [
  {
    title: "Job-Portal, Inernships Development",
    image: "/assets/smartphone.png",
    href: "/what-we-do/mobile-app",
  },
  {
    title: "CMS Web Development",
    image: "/assets/cms.png",
    href: "/what-we-do/cms",
  },
  {
    title: "Web Development",
    image: "/assets/web-dev.png",
    href: "/what-we-do/web-development",
  },
  {
    title: "API Development",
    image: "/assets/api.png",
    href: "/what-we-do/api",
  },
  {
    title: "Web Design",
    image: "/assets/web-design-2.png",
    href: "/what-we-do/web-design",
  },
  {
    title: "Logo Design",
    image: "/assets/web-logo.png",
    href: "/what-we-do/logo",
  },
  {
    title: "PWA and AMP Development",
    image: "/assets/company.png",
    href: "/what-we-do/pwa-amp",
  },
  {
    title: "CRM Web Development",
    image: "/assets/crm.png",
    href: "/what-we-do/crm",
  },
  {
    title: "Graphics Design",
    image: "/assets/graphic.png",
    href: "/what-we-do/graphic",
  },
  {
    title: "Digital Marketing",
    image: "/assets/digital-2.png",
    href: "/what-we-do/digital-marketing",
  },
  {
    title: "Brochure Design",
    image: "/assets/web-logo.png",
    href: "/what-we-do/broucher-design",
  },
  {
    title: "Figma Scratch Design",
    image: "/assets/figma.png",
    href: "/what-we-do/figma-scratch-design",
  },
  {
    title: "PIM Development",
    image: "/assets/graphic.png",
    href: "/what-we-do/pim-development",
  },
  {
    title: "Android Apps Development",
    image: "/assets/mobile.png",
    href: "/what-we-do/android",
  },
  {
    title: "iOS Apps Development",
    image: "/assets/5.png",
    href: "/technology/ios",
  },
  {
    title: "Analytical Analysis",
    image: "/assets/1.png",
    href: "/what-we-do/analytical-analysis",
  },
  {
    title: "WordPress Development",
    image: "/assets/4.png",
    href: "/what-we-do/wordpress-development",
  },
  {
    title: "E-commerce Development",
    image: "/assets/eccomerce-2.png",
    href: "/what-we-do/eccomerce-development",
  },
];

export {
  ourservices,
  productsMenu,
  technologiesMenu,
  whatWeDoMenu,
  fintech,
  mlm,
};
