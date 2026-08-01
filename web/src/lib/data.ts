export type Doctor = {
  slug: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    slug: "elena-cross",
    name: "Dr. Elena Cross",
    specialty: "General & Family Dentistry",
    bio: "Dedicated to building lasting relationships with families through gentle, preventative oral care.",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "marcus-chen",
    name: "Dr. Marcus Chen",
    specialty: "Cosmetic & Restorative Dentistry",
    bio: "Specializing in advanced smile reconstruction using digital CAD/CAM design and biocompatible materials.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "sofia-alvarez",
    name: "Dr. Sofia Alvarez",
    specialty: "Orthodontics & Pediatric Care",
    bio: "Focusing on developmental alignment and making dental visits an inspiring experience for young patients.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
  },
];

export type ServiceFeature = {
  icon: string;
  title: string;
  description: string;
};

export type ServiceBenefit = {
  label: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  label: string;
  bookingCode: string;
  bookingBlurb: string;
  ghostIcon: string;
  heading: string;
  description: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "general",
    label: "General Dentistry",
    bookingCode: "Cat. A",
    bookingBlurb: "Foundation care, cleanings, and diagnostics.",
    ghostIcon: "lucide:stethoscope",
    heading: "General Oral Health & Prevention",
    description:
      "The foundation of a lifetime of smiles. We focus on non-invasive diagnostics and bio-compatible maintenance to ensure your natural teeth remain healthy and vibrant.",
    features: [
      {
        icon: "lucide:sparkle",
        title: "Cleanings & Prevention",
        description:
          "Guided Biofilm Therapy (GBT) for painless, highly effective professional cleanings.",
      },
      {
        icon: "lucide:search",
        title: "Digital Screenings",
        description:
          "3D intra-oral scanning for early detection of pathologies without traditional radiation levels.",
      },
      {
        icon: "lucide:activity",
        title: "Restorative Care",
        description:
          "Composite bondings and inlay restorations that mimic natural tooth biomechanics.",
      },
      {
        icon: "lucide:shield-plus",
        title: "Root Canal Therapy",
        description:
          "Precision endodontics using microscopic visualization to ensure total canal cleaning.",
      },
    ],
    benefits: [
      {
        label: "Longevity",
        description:
          "Consistent maintenance reduces the need for invasive restorations by up to 75% over a patient's lifetime.",
      },
      {
        label: "Biomechanics",
        description:
          "Our bio-compatible materials expand and contract just like natural enamel, preventing secondary decay.",
      },
      {
        label: "Precision",
        description:
          "Digital planning allows us to identify and address micro-fractures before they become major clinical issues.",
      },
    ],
  },
  {
    slug: "cosmetic",
    label: "Cosmetic Dentistry",
    bookingCode: "Cat. B",
    bookingBlurb: "Veneers, whitening, and aesthetic refinement.",
    ghostIcon: "lucide:sparkles",
    heading: "Aesthetic Smile Design & Refinement",
    description:
      "Where artistry meets precision engineering. We sculpt smiles using minimally invasive techniques that enhance your natural features without compromising long-term oral health.",
    features: [
      {
        icon: "lucide:sparkles",
        title: "Porcelain Veneers",
        description:
          "Ultra-thin ceramic shells custom-milled to correct shape, color, and alignment in a single visit.",
      },
      {
        icon: "lucide:sun",
        title: "Professional Whitening",
        description:
          "Clinically supervised bleaching that lifts years of staining without enamel sensitivity.",
      },
      {
        icon: "lucide:wand-2",
        title: "Composite Bonding",
        description:
          "Sculpted resin restorations that repair chips and gaps in under an hour.",
      },
      {
        icon: "lucide:smile",
        title: "Smile Design Consults",
        description:
          "Digital mock-ups let you preview your final result before any treatment begins.",
      },
    ],
    benefits: [
      {
        label: "Confidence",
        description:
          "Patients report a measurable increase in social confidence within weeks of treatment completion.",
      },
      {
        label: "Durability",
        description:
          "Modern ceramics and resins are engineered to resist staining and wear for over a decade.",
      },
      {
        label: "Natural Result",
        description:
          "Shade-matching technology ensures every restoration blends seamlessly with your existing smile.",
      },
    ],
  },
  {
    slug: "orthodontics",
    label: "Orthodontics",
    bookingCode: "Cat. C",
    bookingBlurb: "Aligners and structural alignment solutions.",
    ghostIcon: "lucide:move-diagonal",
    heading: "Structural Alignment & Bite Correction",
    description:
      "Precision-guided alignment for every age. From discreet clear aligners to traditional braces, we correct bite mechanics for a healthier, straighter smile.",
    features: [
      {
        icon: "lucide:move-diagonal",
        title: "Clear Aligners",
        description:
          "Custom, removable trays that discreetly shift teeth over a series of precise stages.",
      },
      {
        icon: "lucide:git-branch",
        title: "Traditional Braces",
        description:
          "Time-tested bracket systems for complex structural and bite corrections.",
      },
      {
        icon: "lucide:activity",
        title: "Bite Analysis",
        description:
          "3D digital scanning maps your bite mechanics to plan the most efficient path to alignment.",
      },
      {
        icon: "lucide:shield",
        title: "Retention Care",
        description:
          "Custom retainers protect your investment and maintain results for life.",
      },
    ],
    benefits: [
      {
        label: "Precision",
        description:
          "Digital treatment planning predicts tooth movement to within fractions of a millimeter.",
      },
      {
        label: "Comfort",
        description:
          "Low-profile hardware and smooth aligner edges minimize irritation throughout treatment.",
      },
      {
        label: "Longevity",
        description:
          "Proper alignment reduces abnormal wear patterns that shorten the lifespan of natural teeth.",
      },
    ],
  },
  {
    slug: "pediatric",
    label: "Pediatric Dentistry",
    bookingCode: "Cat. D",
    bookingBlurb: "Specialized gentle care for younger smiles.",
    ghostIcon: "lucide:heart",
    heading: "Gentle Care for Growing Smiles",
    description:
      "A calm, encouraging environment designed around younger patients. We focus on early prevention and positive associations with dental care that last a lifetime.",
    features: [
      {
        icon: "lucide:heart",
        title: "Gentle First Visits",
        description:
          "Low-pressure introductory appointments that build trust before any treatment begins.",
      },
      {
        icon: "lucide:shield-check",
        title: "Fluoride & Sealants",
        description:
          "Protective treatments that guard developing enamel against early decay.",
      },
      {
        icon: "lucide:ruler",
        title: "Growth Monitoring",
        description:
          "Ongoing tracking of jaw and tooth development to catch issues early.",
      },
      {
        icon: "lucide:smile-plus",
        title: "Habit Guidance",
        description:
          "Supportive coaching around thumb-sucking, grinding, and other developmental habits.",
      },
    ],
    benefits: [
      {
        label: "Prevention",
        description:
          "Early sealants reduce cavity risk in molars by up to 80% through adolescence.",
      },
      {
        label: "Comfort",
        description:
          "A dedicated pediatric environment measurably reduces dental anxiety in young patients.",
      },
      {
        label: "Foundation",
        description:
          "Positive early experiences correlate strongly with consistent oral care into adulthood.",
      },
    ],
  },
  {
    slug: "emergency",
    label: "Emergency Care",
    bookingCode: "Cat. E",
    bookingBlurb: "Urgent diagnostic and pain management.",
    ghostIcon: "lucide:zap",
    heading: "Urgent Diagnostic & Pain Management",
    description:
      "Same-day relief when it matters most. Our team is equipped to diagnose and stabilize acute dental pain, trauma, and infection with minimal wait.",
    features: [
      {
        icon: "lucide:zap",
        title: "Same-Day Appointments",
        description:
          "Priority scheduling for acute pain, swelling, or trauma cases.",
      },
      {
        icon: "lucide:shield-alert",
        title: "Trauma Stabilization",
        description:
          "Immediate care for chipped, cracked, or knocked-out teeth.",
      },
      {
        icon: "lucide:pill",
        title: "Pain Management",
        description:
          "Fast, targeted relief paired with a clear long-term treatment plan.",
      },
      {
        icon: "lucide:phone-call",
        title: "24/7 Triage Line",
        description:
          "A direct line to guide you through urgent situations before you arrive.",
      },
    ],
    benefits: [
      {
        label: "Speed",
        description:
          "Most urgent cases are seen within hours of first contact, not days.",
      },
      {
        label: "Preservation",
        description:
          "Rapid response significantly improves the odds of saving a traumatized tooth.",
      },
      {
        label: "Continuity",
        description:
          "Every emergency visit is followed by a coordinated long-term recovery plan.",
      },
    ],
  },
];

export const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
];

export const clinic = {
  name: "BOBO Dental",
  addressLines: ["422 Editorial Avenue,", "Studio 4B", "New York, NY 10012"],
  hours: ["Mon – Fri: 08:00 – 18:00", "Sat: 10:00 – 14:00"],
  phone: "+1 (555) 902-1010",
  email: "hello@bobodental.com",
};
