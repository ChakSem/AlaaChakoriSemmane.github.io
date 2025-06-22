const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            education: "Formation",
            experience: "Expérience",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact"
        },
        hero: {
            title: "Alaa Chakori Semmane",
            subtitle: "Étudiant Ingénieur Intelligence Artificielle & Développeur | L'IA au service du sport",
            description: "Étudiant en 5ème année d'ingénierie informatique (Polytech Tours) avec double diplôme en Maîtrise Informatique spécialisée IA (UQAC, Canada). Passionné par l'intersection entre intelligence artificielle et sport, expertise en machine learning, computer vision et optimisation.",
            viewWork: "Mes Projets",
            getInTouch: "Me Contacter"
        },
        about: {
            title: "À Propos",
            objective: {
                title: "Objectif Professionnel",
                highlight: "Recherche de stage en optimisation de la performance sportive",
                description: "Passionné par l'intersection entre Intelligence Artificielle et sport, je souhaite rejoindre une équipe d'optimisation de la performance disposant d'une infrastructure IT établie. Mon objectif : contribuer en tant que stagiaire au développement de solutions data-driven pour l'analyse performance, la prédiction de résultats et l'aide à la décision stratégique.",
                details: "Stage de 675h minimum (20-24 semaines) - Disponible dès juillet 2025"
            },
            journey: "Mon Parcours",
            description1: "Actuellement en double cursus avec une Maîtrise en Informatique spécialisée IA à l'UQAC (Canada) et une 5ème année d'ingénierie informatique à Polytech Tours (France). Mon expertise se concentre sur le machine learning, la computer vision et l'optimisation.",
            description2: "Pratiquant passionné de football avec un intérêt marqué pour l'analyse de performances sportives, je développe activement des projets combinant IA et sport, notamment des modèles prédictifs Expected Goals (xG) avec computer vision en temps réel.",
            description3: "Je crois en l'apprentissage continu et l'adaptabilité. Ce que je ne connais pas aujourd'hui, je peux l'apprendre demain. Ma force réside dans ma détermination, intégrité et persévérance à livrer des résultats de qualité."
        },
        education: {
            title: "Formation",
            master: {
                title: "Maîtrise en Informatique - 2ème Cycle",
                institution: "UQAC, Chicoutimi, Canada",
                specialization: "Spécialisation en Intelligence Artificielle et optimisation avancée",
                period: "Août 2024 - Présent"
            },
            engineering: {
                title: "Cycle Ingénieur en Informatique",
                institution: "Polytech Tours, Tours, France",
                specialization: "Orientation 4ème année : Intelligence Artificielle et optimisation avancée",
                period: "Sept. 2022 - 2025"
            }
        },
        experience: {
            title: "Expérience Professionnelle",
            lifat: {
                title: "Stage - Recherche en Mobilité Urbaine & Analytics",
                company: "Laboratoire d'Informatique Fondamentale et Appliquée (LIFAT), Tours",
                period: "Juin - Août 2024",
                mission: "Mission : Conception d'indicateurs d'accessibilité et d'équité pour les réseaux cyclables de Tours dans le cadre d'une preuve de concept recherche.",
                achievements: {
                    title: "Réalisations techniques :",
                    1: "Adaptation de la méthode d'évaluation de Kent & Karner (2018) au contexte français",
                    2: "Développement d'algorithmes d'analyse spatiale et de métriques de performance avancées",
                    3: "Traitement et structuration de datasets complexes (OpenStreetMap, INSEE Filosofi)",
                    4: "Création d'outils de visualisation cartographique et d'aide à la décision",
                    5: "Implémentation de systèmes de transformation de coordonnées géographiques (CRS)"
                },
                impact: "Impact : Conception d'un outil d'évaluation réplicable des réseaux cyclables",
                presentation: "Voir le post Linkedin"
            },
            sncf: {
                title: "Technicien en Électronique",
                company: "SNCF Voyageurs - Technicentre de Saint-Pierre-des-Corps",
                period: "Avril - Août 2022",
                description: "Maintenance préventive et corrective des panneaux de contrôle des portes du TER2N ng. Diagnostic électronique et réparation de systèmes embarqués.",
                impact: "Impact : Renforcement de la disponibilité opérationnelle des platines grâce à 43 interventions réussies (dont 15 réparations), contribuant à fluidifier le cycle de maintenance et à limiter les retards d'exploitation.",
                presentation: "Voir lettre de recommandation"
            }
        },
        projects: {
            title: "Projets Techniques",
            football: {
                title: "Système Prédictif Football - Expected Goals Avancés",
                period: "2024-2025 • Projet de Recherche UQAC",
                badge: "Projet Phare",
                description: "Développement d'un modèle ML avancé intégrant computer vision en temps réel pour le calcul des xG. Le système analyse automatiquement le positionnement des joueurs, la géométrie du terrain et les actions de jeu pour prédire les scores avec une précision supérieure aux modèles traditionnels.",
                impact: "Impact : Précision de prédiction améliorée de 15% vs modèles standards"
            },
            hackathon: {
                title: "Intelligence Énergétique - RAG System",
                period: "Janvier 2025 • Hackathon Inter-Universitaire 48h",
                badge: "2ème Place",
                description: "Développement d'un système RAG pour l'optimisation énergétique multi-sources. Pipeline automatique de traitement de données hétérogènes. Interface IA avec génération de code Python automatique et recommandations d'optimisation.",
                impact: "Impact : 2ème place sur 29 équipes, preuve de concept validée",
                link: "Voir détails"
            },
            supply: {
                title: "Optimisation Supply Chain - Modélisation Stochastique",
                period: "2025 • Projet Académique UQAC",
                description: "Développement d'un framework d'optimisation stochastique pour chaîne d'approvisionnement multi-nœuds (Fabricant-Grossiste-Détaillant) utilisant simulation événementielle discrete (SimPy) et politique de stock (S,s). Implémentation et comparaison de 5 algorithmes d'optimisation black-box : Monte Carlo, Grid Search, métamodèles GPR Bayésiens, Évolution Différentielle et approche hybride. Gestion de l'incertitude via processus de Poisson pour la demande client et validation par réplications multiples. Analyse multi-objectifs avec front de Pareto (profit vs service client).",
                impact: "Impact : Amélioration des profits nets en conditions d'incertitude"
            },
            tourism: {
                title: "Optimisation d'Itinéraires Touristiques",
                period: "2023-2024 • Projet Académique Polytech Tours",
                description: "Développement d'une heuristique et méta-heuristique pour résoudre un problème complexe de conception d'itinéraires. Approche innovante combinant algorithmes génétiques et optimisation locale.",
                impact: "Impact : Déploiement d'une approche hybride efficace pour améliorer la qualité des itinéraires générés",
                link: "Voir présentation"
            },
            snapsort: {
                title: "SnapSort - Classification Intelligente d'Images",
                period: "2024-2025 • Projet Académique UQAC",
                description: "Écosystème complet de tri automatique utilisant deep learning pour la reconnaissance d'activités. Interface web moderne en React avec prévisualisation et organisation thématique intelligente. Application mobile compagnon en Kotlin permettant la capture et l'envoi d'images vers l'ordinateur via connexion WiFi.",
                impact: "Impact : Interopérabilité mobile-desktop avec synchronisation automatique et classification temps réel"
            },
            navigation: {
                title: "Chemins Optimaux - Navigation Urbaine",
                period: "2023-2024 • Projet Académique Polytech Tours",
                description: "Création d'une application Java pour visualiser des itinéraires vélo optimisés utilisant algorithmes de Dijkstra et approche multicritères. Tests sur Paris, San Francisco et Berlin.",
                impact: "Impact : Validation sur 3 métropoles internationales avec critères multiples",
                link: "Voir présentation"
            }
        },
        skills: {
            title: "Expertise Technique",
            disclaimer: "Note : Les compétences énumérées ci-dessous ne sont pas exhaustives et reflètent mes domaines d'expertise principaux. Je suis toujours ouvert à l'apprentissage de nouvelles technologies et méthodologies pour m'adapter aux besoins spécifiques des projets.",
            ai_sport: {
                title: "Intelligence Artificielle & Sport",
                computer_vision: {
                    name: "Computer Vision",
                    description: "Détection d'objets en temps réel, tracking de joueurs, analyse spatiale"
                },
                ml_dl: {
                    name: "ML/DL",
                    description: "Modèles prédictifs, réseaux de neurones, optimisation hyperparamètres"
                },
                analytics: {
                    name: "Analytics Sportives",
                    description: "Expected Goals (xG), métriques de performance, analyse prédictive"
                }
            },
            development: {
                title: "Développement & Data Engineering",
                backend: {
                    name: "Backend",
                    description: "Développement backend robuste, APIs REST, microservices"
                },
                frontend: {
                    name: "Frontend",
                    description: "Applications web modernes, interfaces réactives"
                },
                mobile: {
                    name: "Mobile",
                    description: "Applications multiplateformes, synchronisation temps réel"
                },
                databases: {
                    name: "Bases de données",
                    description: "Conception, optimisation, requêtes complexes"
                },
                apis: {
                    name: "APIs",
                    description: "REST, FastAPI, intégration de services"
                },
                tools: {
                    name: "Outils",
                    description: "DevOps, versioning, conteneurisation"
                }
            },
            operations_research: {
                title: "Recherche Opérationnelle & GIS",
                optimization: {
                    name: "Optimisation",
                    description: "Programmation linéaire, algorithmes génétiques, méta-heuristiques"
                },
                graphs: {
                    name: "Graphes",
                    description: "Plus courts chemins, optimisation de réseaux"
                },
                simulation: {
                    name: "Simulation",
                    description: "Modélisation stochastique, méta-modèles"
                },
                geospatial: {
                    name: "Géospatial",
                    description: "Transformation de coordonnées, analyse spatiale"
                },
                solvers: {
                    name: "Solveurs",
                    description: "Optimisation avec contraintes, problèmes complexes"
                },
                analytics: {
                    name: "Analytics",
                    description: "Visualisation, analyse statistique"
                }
            },
            project_management: {
                title: "Gestion de Projet & Méthodologies",
                agile: {
                    name: "Agile",
                    description: "Méthodologies agiles, gestion d'équipe"
                },
                documentation: {
                    name: "Documentation",
                    description: "Modélisation UML, architecture logicielle"
                },
                tests: {
                    name: "Tests",
                    description: "Tests unitaires, validation croisée"
                },
                research: {
                    name: "Recherche",
                    description: "Veille technologique, littérature scientifique"
                },
                communication: {
                    name: "Communication",
                    description: "Présentations techniques, vulgarisation"
                },
                international: {
                    name: "International",
                    description: "Collaboration multiculturelle, adaptation"
                }
            }
        },
        languages_interests: {
            title: "Langues & Centres d'Intérêt"
        },
        languages: {
            title: "Langues",
            spanish: {
                name: "Espagnol",
                level: "Natif",
                note: "Langue maternelle"
            },
            french: {
                name: "Français",
                level: "C2",
                note: "Maîtrise parfaite"
            },
            english: {
                name: "Anglais",
                level: "B2",
                note: "Professionnel"
            },
            catalan: {
                name: "Catalan",
                level: "A2",
                note: "Conversationnel"
            },
            arabic: {
                name: "Arabe",
                level: "A1",
                note: "Notions - C.O"
            }
        },
        interests: {
            title: "Centres d'Intérêt",
            football: {
                name: "Football",
                description: "Pratique régulière (Ligue soccer UQAC), Analyse de statistiques et performances"
            },
            tech: {
                name: "Tech & Innovation",
                description: "Bénévole Touraine Tech (2023-2024), Conférences en recherche opérationnelle"
            },
            environment: {
                name: "Engagement Social",
                description: "Animateur fresque du climat, Projets de sensibilisation environnementale"
            },
            personal: {
                name: "Développement Personnel",
                description: "Musculation, Nutrition, Méditation, Apprentissage des langues"
            }
        },
        soft_skills: {
            title: "Aptitudes Clés",
            problem_solving: "Résolution de problèmes complexes",
            analytical_thinking: "Pensée analytique et critique",
            adaptability: "Adaptabilité technologique",
            communication: "Communication des résultats",
            rigor: "Rigueur scientifique",
            initiative: "Initiative et autonomie"
        },
        cv: {
            title: "Télécharger mon CV",
            description: "Disponible en plusieurs langues pour votre commodité",
            french: "CV Français",
            english: "English CV",
            spanish: "CV Español"
        },
        contact: {
            title: "Contact",
            info: "Informations de Contact",
            email_label: "Email",
            email: "alaa.chakori.semmane@gmail.com",
            phone_label: "Téléphone",
            phone: "+33 6 25 79 48 48",
            location_label: "Localisation",
            location: "Tours, France ",
            linkedin_label: "LinkedIn",
            linkedin: "LinkedIn Profile",
            availability_label: "Disponibilité",
            availability: "Stage 675h+ à partir de juillet 2025",
            form: {
                name: "Nom",
                email: "Email",
                company: "Entreprise / Organisation",
                subject: "Sujet",
                message: "Message",
                placeholder: "Décrivez votre projet, vos besoins ou toute question...",
                send: "Envoyer le Message"
            }
        },
        footer: {
            copyright: "© 2025 Alaa Chakori Semmane. Tous droits réservés."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            title: "Alaa Chakori Semmane",
            subtitle: "Engineering Student in AI & Developer | AI for Sports",
            description: "5th-year Computer Engineering student (Polytech Tours) with dual degree in Computer Science Master's specialized in AI (UQAC, Canada). Passionate about the intersection between artificial intelligence and sports, expertise in machine learning, computer vision and optimization.",
            viewWork: "View My Work",
            getInTouch: "Get In Touch"
        },
        about: {
            title: "About Me",
            objective: {
                title: "Professional Objective",
                highlight: "Seeking internship in sports performance optimization",
                description: "Passionate about the intersection between Artificial Intelligence and sports, I want to join a performance optimization team with established IT infrastructure. My goal: contribute as an intern to developing data-driven solutions for performance analysis, results prediction and strategic decision support.",
                details: "675+ hour internship (20-24 weeks) - Available from July 2025"
            },
            journey: "My Journey",
            description1: "Currently pursuing a dual degree with a Master's in Computer Science specialized in AI at UQAC (Canada) and 5th year of computer engineering at Polytech Tours (France). My expertise focuses on machine learning, computer vision and optimization.",
            description2: "Passionate football player with a keen interest in sports performance analysis, I actively develop projects combining AI and sports, particularly predictive Expected Goals (xG) models with real-time computer vision.",
            description3: "I believe in continuous learning and adaptability. What I don't know today, I can learn tomorrow. My strength lies in my determination, integrity and perseverance to deliver quality results."
        },
        education: {
            title: "Education",
            master: {
                title: "Master's in Computer Science - 2nd Cycle",
                institution: "UQAC, Chicoutimi, Canada",
                specialization: "Specialization in Artificial Intelligence and advanced optimization",
                period: "August 2024 - Present"
            },
            engineering: {
                title: "Computer Engineering Cycle",
                institution: "Polytech Tours, Tours, France",
                specialization: "4th year orientation: Artificial Intelligence and advanced optimization",
                period: "Sept. 2022 - 2025"
            }
        },
        experience: {
            title: "Professional Experience",
            lifat: {
                title: "Internship - Urban Mobility & Analytics Research",
                company: "Laboratory of Fundamental and Applied Computer Science (LIFAT), Tours",
                period: "June - August 2024",
                mission: "Mission: Design of accessibility and equity indicators for Tours cycling networks as part of a research proof of concept.",
                achievements: {
                    title: "Technical achievements:",
                    1: "Adaptation of Kent & Karner (2018) evaluation method to French context",
                    2: "Development of spatial analysis algorithms and advanced performance metrics",
                    3: "Processing and structuring of complex datasets (OpenStreetMap, INSEE Filosofi)",
                    4: "Creation of cartographic visualization and decision support tools",
                    5: "Implementation of geographic coordinate transformation systems (CRS)"
                },
                impact: "Impact: Design of a replicable evaluation tool for cycling networks",
                presentation: "View LinkedIn post"
            },
            sncf: {
                title: "Electronics Technician",
                company: "SNCF Voyageurs - Technicentre de Saint-Pierre-des-Corps",
                period: "April - August 2022",
                description: "Preventive and corrective maintenance of TER2N ng door control panels. Electronic diagnosis and repair of embedded systems.",
                impact: "Impact: Strengthened operational availability of control boards through 43 successful interventions (including 15 repairs), contributing to smoother maintenance cycles and reduced operational delays.",
                presentation: "View recommendation letter"
            }
        },
        projects: {
            title: "Technical Projects",
            football: {
                title: "Football Prediction System - Advanced Expected Goals",
                period: "2024-2025 • UQAC Research Project",
                badge: "Featured Project",
                description: "Development of an advanced ML model integrating real-time computer vision for xG calculation. The system automatically analyzes player positioning, field geometry and game actions to predict scores with superior accuracy compared to traditional models.",
                impact: "Impact: 15% improved prediction accuracy vs standard models"
            },
            hackathon: {
                title: "Energy Intelligence - RAG System",
                period: "January 2025 • Inter-University Hackathon 48h",
                badge: "2nd Place",
                description: "Development of a RAG system for multi-source energy optimization. Automatic pipeline for heterogeneous data processing. AI interface with automatic Python code generation and optimization recommendations.",
                impact: "Impact: 2nd place out of 29 teams, validated proof of concept",
                link: "View details"
            },
            supply: {
                title: "Supply Chain Optimization - Stochastic Modeling",
                period: "2025 • UQAC Academic Project",
                description: "Development of an advanced stochastic optimization framework for multi-node supply chain (Manufacturer-Wholesaler-Retailer) using discrete event simulation (SimPy) and stock policy (S,s). Implementation and comparison of 5 black-box optimization algorithms: Monte Carlo, Grid Search, Bayesian GPR meta-models, Differential Evolution and hybrid approach. Uncertainty management via Poisson processes for customer demand and validation through multiple replications. Multi-objective analysis with Pareto front (profit vs customer service).",
                impact: "Impact: Improvement in net profits under uncertainty conditions"
            },
            tourism: {
                title: "Tourist Route Optimization",
                period: "2023-2024 • Polytech Tours Academic Project",
                description: "Development of heuristics and meta-heuristics to solve a complex route design problem. Innovative approach combining genetic algorithms and local optimization.",
                impact: "Impact: Deployment of an efficient hybrid approach to improve generated route quality",
                link: "View presentation"
            },
            snapsort: {
                title: "SnapSort - Intelligent Image Classification",
                period: "2024-2025 • UQAC Academic Project",
                description: "Complete automatic sorting ecosystem using deep learning for activity recognition. Modern React web interface with preview and intelligent thematic organization. Kotlin companion mobile app allowing image capture and sending to computer via WiFi connection.",
                impact: "Impact: Mobile-desktop interoperability with automatic synchronization and real-time classification"
            },
            navigation: {
                title: "Optimal Paths - Urban Navigation",
                period: "2023-2024 • Polytech Tours Academic Project",
                description: "Creation of a Java application to visualize optimized bike routes using Dijkstra algorithms and multi-criteria approach. Tests on Paris, San Francisco and Berlin.",
                impact: "Impact: Validation on 3 international metropolises with multiple criteria",
                link: "View presentation"
            }
        },
        skills: {
            title: "Technical Expertise",
            disclaimer: "Note: The skills listed below are not exhaustive and reflect my main areas of expertise. I am always open to learning new technologies and methodologies to adapt to specific project needs.",
            ai_sport: {
                title: "Artificial Intelligence & Sports",
                computer_vision: {
                    name: "Computer Vision",
                    description: "Real-time object detection, player tracking, spatial analysis"
                },
                ml_dl: {
                    name: "ML/DL",
                    description: "Predictive models, neural networks, hyperparameter optimization"
                },
                analytics: {
                    name: "Sports Analytics",
                    description: "Expected Goals (xG), performance metrics, predictive analysis"
                }
            },
            development: {
                title: "Development & Data Engineering",
                backend: {
                    name: "Backend",
                    description: "Robust backend development, REST APIs, microservices"
                },
                frontend: {
                    name: "Frontend",
                    description: "Modern web applications, reactive interfaces"
                },
                mobile: {
                    name: "Mobile",
                    description: "Cross-platform applications, real-time synchronization"
                },
                databases: {
                    name: "Databases",
                    description: "Design, optimization, complex queries"
                },
                apis: {
                    name: "APIs",
                    description: "REST, FastAPI, service integration"
                },
                tools: {
                    name: "Tools",
                    description: "DevOps, versioning, containerization"
                }
            },
            operations_research: {
                title: "Operations Research & GIS",
                optimization: {
                    name: "Optimization",
                    description: "Linear programming, genetic algorithms, meta-heuristics"
                },
                graphs: {
                    name: "Graphs",
                    description: "Shortest paths, network optimization"
                },
                simulation: {
                    name: "Simulation",
                    description: "Stochastic modeling, meta-models"
                },
                geospatial: {
                    name: "Geospatial",
                    description: "Coordinate transformation, spatial analysis"
                },
                solvers: {
                    name: "Solvers",
                    description: "Constrained optimization, complex problems"
                },
                analytics: {
                    name: "Analytics",
                    description: "Visualization, statistical analysis"
                }
            },
            project_management: {
                title: "Project Management & Methodologies",
                agile: {
                    name: "Agile",
                    description: "Agile methodologies, team management"
                },
                documentation: {
                    name: "Documentation",
                    description: "UML modeling, software architecture"
                },
                tests: {
                    name: "Testing",
                    description: "Unit testing, cross-validation"
                },
                research: {
                    name: "Research",
                    description: "Technology watch, scientific literature"
                },
                communication: {
                    name: "Communication",
                    description: "Technical presentations, popularization"
                },
                international: {
                    name: "International",
                    description: "Multicultural collaboration, adaptation"
                }
            }
        },
        languages_interests: {
            title: "Languages & Interests"
        },
        languages: {
            title: "Languages",
            spanish: {
                name: "Spanish",
                level: "Native",
                note: "Mother tongue"
            },
            french: {
                name: "French",
                level: "C2",
                note: "Perfect mastery"
            },
            english: {
                name: "English",
                level: "B2",
                note: "Professional"
            },
            catalan: {
                name: "Catalan",
                level: "A2",
                note: "Conversational"
            },
            arabic: {
                name: "Arabic",
                level: "A1",
                note: "Notions - L.C"
            }
        },
        interests: {
            title: "Interests",
            football: {
                name: "Football",
                description: "Regular practice (UQAC soccer league), Statistics and performance analysis"
            },
            tech: {
                name: "Tech & Innovation",
                description: "Touraine Tech volunteer (2023 and 2024), Operations research conferences"
            },
            environment: {
                name: "Social Engagement",
                description: "Climate fresco facilitator, Environmental awareness projects"
            },
            personal: {
                name: "Personal Development",
                description: "Weight training, Nutrition, Meditation, Language learning"
            }
        },
        soft_skills: {
            title: "Key Skills",
            problem_solving: "Complex problem solving",
            analytical_thinking: "Analytical and critical thinking",
            adaptability: "Technological adaptability",
            communication: "Results communication",
            rigor: "Scientific rigor",
            initiative: "Initiative and autonomy"
        },
        cv: {
            title: "Download my Resume",
            description: "Available in multiple languages for your convenience",
            french: "French CV",
            english: "English CV",
            spanish: "Spanish CV"
        },
        contact: {
            title: "Contact",
            info: "Contact Information",
            email_label: "Email",
            email: "alaa.chakori.semmane@gmail.com",
            phone_label: "Phone",
            phone: "+33 6 25 79 48 48",
            location_label: "Location",
            location: "Tours, France ",
            linkedin_label: "LinkedIn",
            linkedin: "LinkedIn Profile",
            availability_label: "Availability",
            availability: "675+ hour internship from July 2025",
            form: {
                name: "Name",
                email: "Email",
                company: "Company / Organization",
                subject: "Subject",
                message: "Message",
                placeholder: "Describe your project, needs or any questions...",
                send: "Send Message"
            }
        },
        footer: {
            copyright: "© 2025 Alaa Chakori Semmane. All rights reserved."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Acerca de",
            education: "Formación",
            experience: "Experiencia",
            projects: "Proyectos",
            skills: "Habilidades",
            contact: "Contacto"
        },
        hero: {
            title: "Alaa Chakori Semmane",
            subtitle: "Estudiante de Ingeniería en IA & Desarrollador | IA para el Deporte",
            description: "Estudiante de 5º año de Ingeniería Informática (Polytech Tours) con doble titulación en Máster en Informática especializado en IA (UQAC, Canadá). Apasionado por la intersección entre inteligencia artificial y deporte, experiencia en machine learning, computer vision y optimización.",
            viewWork: "Ver mi Trabajo",
            getInTouch: "Contactar"
        },
        about: {
            title: "Acerca de Mí",
            objective: {
                title: "Objetivo Profesional",
                highlight: "Búsqueda de prácticas en optimización del rendimiento deportivo",
                description: "Apasionado por la intersección entre Inteligencia Artificial y deporte, quiero unirme a un equipo de optimización del rendimiento con infraestructura IT establecida. Mi objetivo: contribuir como becario al desarrollo de soluciones basadas en datos para análisis de rendimiento, predicción de resultados y apoyo a la decisión estratégica.",
                details: "Prácticas de 675+ horas (20-24 semanas) - Disponible desde julio 2025"
            },
            journey: "Mi Trayectoria",
            description1: "Actualmente cursando una doble titulación con Máster en Informática especializado en IA en UQAC (Canadá) y 5º año de ingeniería informática en Polytech Tours (Francia). Mi experiencia se centra en machine learning, computer vision y optimización.",
            description2: "Jugador de fútbol apasionado con gran interés en el análisis del rendimiento deportivo, desarrollo activamente proyectos que combinan IA y deporte, particularmente modelos predictivos Expected Goals (xG) con computer vision en tiempo real.",
            description3: "Creo en el aprendizaje continuo y la adaptabilidad. Lo que no sé hoy, puedo aprenderlo mañana. Mi fortaleza radica en mi determinación, integridad y perseverancia para entregar resultados de calidad."
        },
        education: {
            title: "Formación",
            master: {
                title: "Máster en Informática - 2º Ciclo",
                institution: "UQAC, Chicoutimi, Canadá",
                specialization: "Especialización en Inteligencia Artificial y optimización avanzada",
                period: "Agosto 2024 - Presente"
            },
            engineering: {
                title: "Ciclo de Ingeniería Informática",
                institution: "Polytech Tours, Tours, Francia",
                specialization: "Orientación 4º año: Inteligencia Artificial y optimización avanzada",
                period: "Sept. 2022 - 2025"
            }
        },
        experience: {
            title: "Experiencia Profesional",
            lifat: {
                title: "Prácticas - Investigación en Movilidad Urbana & Analytics",
                company: "Laboratorio de Informática Fundamental y Aplicada (LIFAT), Tours",
                period: "Junio - Agosto 2024",
                mission: "Misión: Diseño de indicadores de accesibilidad y equidad para redes ciclistas de Tours como parte de una prueba de concepto de investigación.",
                achievements: {
                    title: "Logros técnicos:",
                    1: "Adaptación del método de evaluación de Kent & Karner (2018) al contexto francés",
                    2: "Desarrollo de algoritmos de análisis espacial y métricas de rendimiento avanzadas",
                    3: "Procesamiento y estructuración de datasets complejos (OpenStreetMap, INSEE Filosofi)",
                    4: "Creación de herramientas de visualización cartográfica y apoyo a la decisión",
                    5: "Implementación de sistemas de transformación de coordenadas geográficas (CRS)"
                },
                impact: "Impacto: Diseño de herramienta de evaluación replicable para redes ciclistas",
                presentation: "Ver publicación en LinkedIn"
            },
            sncf: {
                title: "Técnico en Electrónica",
                company: "SNCF Voyageurs - Technicentre de Saint-Pierre-des-Corps",
                period: "Abril - Agosto 2022",
                description: "Mantenimiento preventivo y correctivo de paneles de control de puertas TER2N ng. Diagnóstico electrónico y reparación de sistemas embebidos.",
                impact: "Impacto: Fortalecimiento de la disponibilidad operativa de los paneles de control a través de 43 intervenciones exitosas (incluidas 15 reparaciones), contribuyendo a ciclos de mantenimiento más fluidos y reducción de retrasos operativos.",
                presentation: "Ver carta de recomendación"
            }
        },
        projects: {
            title: "Proyectos Técnicos",
            football: {
                title: "Sistema Predictivo Fútbol - Expected Goals Avanzados",
                period: "2024-2025 • Proyecto de Investigación UQAC",
                badge: "Proyecto Destacado",
                description: "Desarrollo de un modelo ML avanzado integrando computer vision en tiempo real para cálculo de xG. El sistema analiza automáticamente el posicionamiento de jugadores, geometría del campo y acciones de juego para predecir puntuaciones con precisión superior a modelos tradicionales.",
                impact: "Impacto: 15% de mejora en precisión de predicción vs modelos estándar"
            },
            hackathon: {
                title: "Inteligencia Energética - Sistema RAG",
                period: "Enero 2025 • Hackathon Inter-Universitario 48h",
                badge: "2º Lugar",
                description: "Desarrollo de un framework de optimización estocástica para una cadena de suministro multinodo (Fabricante–Mayorista–Minorista), utilizando simulación de eventos discretos (SimPy) y políticas de inventario (S,s). Implementación y comparación de cinco algoritmos de optimización de tipo “caja negra”: Monte Carlo, búsqueda en malla, metamodelos bayesianos GPR, evolución diferencial y enfoque híbrido. Gestión de la incertidumbre mediante procesos de Poisson para la demanda del cliente y validación por múltiples réplicas. Análisis multiobjetivo con frente de Pareto (beneficio vs nivel de servicio al cliente).",
                impact: "Impacto: 2º lugar de 29 equipos, prueba de concepto validada",
                link: "Ver detalles"
            },
            supply: {
                title: "Optimización Cadena de Suministro - Modelado Estocástico",
                period: "2025 • Proyecto Académico UQAC",
                description: "Desarrollo de un sistema de optimización avanzado usando meta-modelos GPR y simulación Monte Carlo. Gestión de incertidumbre de demanda en redes logísticas multi-nodo.",
                impact: "Impacto: Mejora en beneficios netos bajo condiciones de incertidumbre"
            },
            tourism: {
                title: "Optimización de Rutas Turísticas",
                period: "2023-2024 • Proyecto Académico Polytech Tours",
                description: "Desarrollo de heurísticas y meta-heurísticas para resolver un problema complejo de diseño de rutas. Enfoque innovador combinando algoritmos genéticos y optimización local.",
                impact: "Impacto: Despliegue de enfoque híbrido eficiente para mejorar calidad de rutas generadas",
                link: "Ver presentación"
            },
            snapsort: {
                title: "SnapSort - Clasificación Inteligente de Imágenes",
                period: "2024-2025 • Proyecto Académico UQAC",
                description: "Ecosistema completo de clasificación automática usando deep learning para reconocimiento de actividades. Interfaz web moderna en React con previsualización y organización temática inteligente. App móvil compañera en Kotlin permitiendo captura y envío de imágenes a ordenador vía conexión WiFi.",
                impact: "Impacto: Interoperabilidad móvil-escritorio con sincronización automática y clasificación tiempo real"
            },
            navigation: {
                title: "Caminos Óptimos - Navegación Urbana",
                period: "2023-2024 • Proyecto Académico Polytech Tours",
                description: "Creación de aplicación Java para visualizar rutas de bicicleta optimizadas usando algoritmos de Dijkstra y enfoque multi-criterio. Pruebas en París, San Francisco y Berlín.",
                impact: "Impacto: Validación en 3 metrópolis internacionales con criterios múltiples",
                link: "Ver presentación"
            }
        },
        skills: {
            title: "Experiencia Técnica",
            disclaimer: "Nota: Las habilidades listadas abajo no son exhaustivas y reflejan mis principales áreas de experiencia. Siempre estoy abierto a aprender nuevas tecnologías y metodologías para adaptarme a necesidades específicas de proyectos.",
            ai_sport: {
                title: "Inteligencia Artificial & Deporte",
                computer_vision: {
                    name: "Computer Vision",
                    description: "Detección de objetos en tiempo real, seguimiento de jugadores, análisis espacial"
                },
                ml_dl: {
                    name: "ML/DL",
                    description: "Modelos predictivos, redes neuronales, optimización de hiperparámetros"
                },
                analytics: {
                    name: "Analytics Deportivos",
                    description: "Expected Goals (xG), métricas de rendimiento, análisis predictivo"
                }
            },
            development: {
                title: "Desarrollo & Data Engineering",
                backend: {
                    name: "Backend",
                    description: "Desarrollo backend robusto, APIs REST, microservicios"
                },
                frontend: {
                    name: "Frontend",
                    description: "Aplicaciones web modernas, interfaces reactivas"
                },
                mobile: {
                    name: "Móvil",
                    description: "Aplicaciones multiplataforma, sincronización tiempo real"
                },
                databases: {
                    name: "Bases de datos",
                    description: "Diseño, optimización, consultas complejas"
                },
                apis: {
                    name: "APIs",
                    description: "REST, FastAPI, integración de servicios"
                },
                tools: {
                    name: "Herramientas",
                    description: "DevOps, versionado, conteneurización"
                }
            },
            operations_research: {
                title: "Investigación Operativa & GIS",
                optimization: {
                    name: "Optimización",
                    description: "Programación lineal, algoritmos genéticos, meta-heurísticas"
                },
                graphs: {
                    name: "Grafos",
                    description: "Caminos más cortos, optimización de redes"
                },
                simulation: {
                    name: "Simulación",
                    description: "Modelado estocástico, meta-modelos"
                },
                geospatial: {
                    name: "Geoespacial",
                    description: "Transformación de coordenadas, análisis espacial"
                },
                solvers: {
                    name: "Solvers",
                    description: "Optimización con restricciones, problemas complejos"
                },
                analytics: {
                    name: "Analytics",
                    description: "Visualización, análisis estadístico"
                }
            },
            project_management: {
                title: "Gestión de Proyectos & Metodologías",
                agile: {
                    name: "Ágil",
                    description: "Metodologías ágiles, gestión de equipos"
                },
                documentation: {
                    name: "Documentación",
                    description: "Modelado UML, arquitectura de software"
                },
                tests: {
                    name: "Pruebas",
                    description: "Pruebas unitarias, validación cruzada"
                },
                research: {
                    name: "Investigación",
                    description: "Vigilancia tecnológica, literatura científica"
                },
                communication: {
                    name: "Comunicación",
                    description: "Presentaciones técnicas, divulgación"
                },
                international: {
                    name: "Internacional",
                    description: "Colaboración multicultural, adaptación"
                }
            }
        },
        languages_interests: {
            title: "Idiomas e Intereses"
        },
        languages: {
            title: "Idiomas",
            spanish: {
                name: "Español",
                level: "Nativo",
                note: "Lengua materna"
            },
            french: {
                name: "Francés",
                level: "C2",
                note: "Dominio perfecto"
            },
            english: {
                name: "Inglés",
                level: "B2",
                note: "Profesional"
            },
            catalan: {
                name: "Catalán",
                level: "A2",
                note: "Conversacional"
            },
            arabic: {
                name: "Árabe",
                level: "A1",
                note: "Nociones - C.O"
            }
        },
        interests: {
            title: "Intereses",
            football: {
                name: "Fútbol",
                description: "Práctica regular (Liga de fútbol UQAC), Análisis de estadísticas y rendimiento"
            },
            tech: {
                name: "Tech & Innovación",
                description: "Voluntario Touraine Tech (2023 y 2024), Conferencias en investigación operativa"
            },
            environment: {
                name: "Compromiso Social",
                description: "Facilitador fresco climático, Proyectos de sensibilización ambiental"
            },
            personal: {
                name: "Desarrollo Personal",
                description: "Musculación, Nutrición, Meditación, Aprendizaje de idiomas"
            }
        },
        soft_skills: {
            title: "Habilidades Clave",
            problem_solving: "Resolución de problemas complejos",
            analytical_thinking: "Pensamiento analítico y crítico",
            adaptability: "Adaptabilidad tecnológica",
            communication: "Comunicación de resultados",
            rigor: "Rigor científico",
            initiative: "Iniciativa y autonomía"
        },
        cv: {
            title: "Descargar mi CV",
            description: "Disponible en múltiples idiomas para su conveniencia",
            french: "CV Francés",
            english: "CV Inglés",
            spanish: "CV Español"
        },
        contact: {
            title: "Contacto",
            info: "Información de Contacto",
            email_label: "Email",
            email: "alaa.chakori.semmane@gmail.com",
            phone_label: "Teléfono",
            phone: "+33 6 25 79 48 48",
            location_label: "Ubicación",
            location: "Tours, Francia",
            linkedin_label: "LinkedIn",
            linkedin: "Perfil LinkedIn",
            availability_label: "Disponibilidad",
            availability: "Prácticas 675+ horas desde julio 2025",
            form: {
                name: "Nombre",
                email: "Email",
                company: "Empresa / Organización",
                subject: "Asunto",
                message: "Mensaje",
                placeholder: "Describe tu proyecto, necesidades o cualquier pregunta...",
                send: "Enviar Mensaje"
            }
        },
        footer: {
            copyright: "© 2025 Alaa Chakori Semmane. Todos los derechos reservados."
        }
    }
};

// Translation utility functions
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[lang], key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.value = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Language detection and initialization
function initializeLanguage() {
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['fr', 'en', 'es'];
    
    let defaultLang = 'fr';
    if (savedLang && supportedLangs.includes(savedLang)) {
        defaultLang = savedLang;
    } else if (supportedLangs.includes(browserLang)) {
        defaultLang = browserLang;
    }
    
    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === defaultLang) {
            btn.classList.add('active');
        }
    });
    
    // Apply translations
    translatePage(defaultLang);
    
    return defaultLang;
}

// Export for use in main.js
window.translations = translations;
window.translatePage = translatePage;
window.initializeLanguage = initializeLanguage;