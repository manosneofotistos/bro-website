export const site = {
  name: "Rigas Neofotistos",
  nav: [
    { label: "Work", href: "#work" },
    { label: "Highlights", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    headline:
      "I help students discover science, robotics, and the confidence to build.",
    intro:
      "Primary school teacher, STEM and robotics educator, and science education researcher based in Athens. I design hands-on learning experiences that guide students from curiosity to experimentation, teamwork, and achievement.",
    location: "Athens, Greece",
    primaryCta: { label: "View work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "mailto:rigas.neofotistos@gmail.com" },
    image: {
      src: "/profile.jpg",
      alt: "A bright desk with a laptop, notebooks, and learning materials.",
      caption: "Somewhere between the classroom, the lab, and a student's next question."
    }
  },
  experience: [
    {
      period: "2025 to now",
      role: "Primary School Teacher",
      organization: "2nd Primary School of Moschato - Athens",
      description:
        "Providing special education support for 5th grade students, helping learners build confidence, structure, and steady progress inside the primary classroom."
    },
    {
      period: "2024 to 2025",
      role: "Primary School Teacher",
      organization: "6th Primary School of Kallithea - Athens",
      description:
        "Supported 6th grade students in a special education context, adapting classroom practice around student needs, inclusion, and meaningful participation."
    },
    {
      period: "2021 to 2024",
      role: "Primary School Teacher, STEM & Robotics Educator",
      organization: "I. M. Panagiotopoulos School - Athens",
      description:
        "Taught 4th to 6th grade classes and led STEM and robotics education for 2nd to 6th grade students, combining core learning with project-based exploration."
    },
    {
      period: "2017 to now",
      role: "STEM Educator & Robotics Coach",
      organization: "Ampersand Learning & Technology",
      description:
        "Coaches robotics teams from preschool through high school, develops astronomy curriculum, and creates educational videos and tutorials across web tools, agriculture, geology, and classroom technology."
    }
  ],
  projects: [
    {
      category: "Robotics coaching / 2024-2026",
      title: "National and International Robotics Competitions",
      description:
        "Coached students in WRO Hellas, AegeanRobotics, Unknown Mission League, and MRC Global Olympiad challenges, including a 3rd place Unknown Mission Challenge result at the 12th World Robotics Championship in Oradea and a 6th national award in Unknown Mission League.",
      tags: ["Robotics", "Coaching", "Student Teams"]
    },
    {
      category: "STEM learning / 2019-2025",
      title: "Science Festival and Classroom STEM Projects",
      description:
        "Designed and presented hands-on STEM experiences including Smart Cities projects, a themed escape room called Save the planet!, robotics showcases, and physics competition preparation for primary school students.",
      tags: ["STEM", "Physics", "Project-Based Learning"]
    },
    {
      category: "Science education research / 2024",
      title: "Moon Luminosity Research Publication",
      description:
        "Published research in the International Journal of Science and Mathematics Education on primary students' ideas about whether the Moon is self- or hetero-luminous, connecting astronomy understanding with science education practice.",
      tags: ["Research", "Astronomy", "Science Education"]
    }
  ],
  education: [
    {
      period: "2017 to 2020",
      role: "M.Sc. Physics in Education",
      organization: "National and Kapodistrian University of Athens",
      description:
        "Graduated with GPA 9.29. Thesis: Investigation of 5th and 6th grade primary school students' ideas on the self- or hetero-luminosity of the Moon."
    },
    {
      period: "2013 to 2017",
      role: "B.Ed. Primary School Education",
      organization: "University of Crete",
      description:
        "Graduated with GPA 8.35. Thesis: Motives in Education."
    }
  ],
  skills: [
    {
      category: "Teaching practice",
      title: "Primary, STEM, Robotics, and Special Education",
      description:
        "Experienced across primary classroom teaching, special education support, STEM workshops, robotics coaching, astronomy curriculum, and student preparation for physics and robotics competitions.",
      tags: ["Primary Education", "Special Education", "Curriculum"]
    },
    {
      category: "Tools and platforms",
      title: "Educational Technology Stack",
      description:
        "Works with Lego Education WeDo 2.0, Lego Mindstorms EV3, Scratch, ScratchJr, Microsoft MakeCode, Minecraft Education Edition, TinkerCad, Arduino, Active Inspire, SPSS, Microsoft Office, Canva, Camtasia, and Articulate Storyline.",
      tags: ["Lego Robotics", "Scratch", "Arduino"]
    },
    {
      category: "Languages and digital growth",
      title: "Communication and Technical Foundations",
      description:
        "Native Greek speaker with C2 English proficiency from the University of Michigan, plus basic Python and SQL knowledge through ongoing classes with MIT BWSI, Workearly, and Kriton AI.",
      tags: ["Greek", "English C2", "Python & SQL"]
    }
  ],
  about: {
    paragraphs: [
      "I work where teaching, science, and hands-on making meet. My path has moved through primary education, physics education research, special education support, STEM workshops, robotics coaching, swimming instruction, and even escape-room facilitation, all with the same instinct: help people learn by doing.",
      "Space and science education are a constant thread in my work. My master's research explored how 5th and 6th grade students understand the Moon's luminosity, and that curiosity now shows up in astronomy curriculum, robotics challenges, science festival projects, and classroom experiments.",
      "What matters most to me is guiding students to explore, innovate, and excel. A strong lesson should feel alive: clear enough to support every learner, practical enough to build something real, and open enough for students to ask the next question themselves."
    ]
  },
  contact: {
    lines: [
      "Let's build learning experiences that students remember.",
      "For STEM programs, robotics coaching, science education, or classroom collaboration, get in touch."
    ],
    links: [
      { label: "Email me", href: "mailto:rigas.neofotistos@gmail.com" },
      { label: "Phone", href: "tel:+306972439088" },
      { label: "LinkedIn", href: "https://gr.linkedin.com/in/rigas-neofotistos-295a87363" }
    ]
  }
} as const;
