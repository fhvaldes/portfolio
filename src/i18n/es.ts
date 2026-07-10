import { Translations } from "./types";

export const es: Translations = {
  nav: {
    projects: "Proyectos",
    experience: "Experiencia",
    techStack: "Tecnologías",
    terminal: "Consola Unix",
    linkedin: "LinkedIn",
    hire: "Contratar",
  },
  hero: {
    available: "Disponible para Proyectos / Contrataciones Estables",
    name: "Fredy Hernández",
    subtitle: "Backend Developer · Python · Django · FastAPI",
    description:
      'Backend engineer specialising in <strong class="text-white">Python</strong> and <strong class="text-white">Django</strong>, with hands-on experience building production-grade APIs with <strong class="text-white">Django REST Framework</strong> and <strong class="text-white">FastAPI</strong>. Currently expanding into <strong class="text-white">AI/LLM integration</strong> for applied products.',
    experience: "EXPERIENCIA",
    experienceValue: "3+ Años",
    specialty: "ESPECIALIDAD",
    specialtyValue: "Django & REST APIs",
    location: "UBICACIÓN / REMOTO",
    locationValue: "España / 100% Remoto",
    viewStack: "Ver Stack & Tecnologías",
    github: "GitHub",
    contactTitle: "Información de Contacto",
    email: "EMAIL",
    phone: "TELÉFONO",
    locationLabel: "UBICACIÓN",
    workStatus: "ESTATUS UE",
    workStatusValue: "Permiso de trabajo activo en UE",
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle:
      "Casos prácticos e implementaciones reales en Django, DRF, IA y automatización. Todos los repositorios son públicos en GitHub.",
    filterAll: "Todos los proyectos",
    filterBackend: "Backend & Full-Stack",
    filterAI: "AI & Robotics",
    learnMore: "Saber más ▼",
    hideDetails: "Ocultar detalles ▲",
    details: "Información Detallada:",
    repository: "Repositorio:",
    cinematch: {
      category: "Backend & AI",
      description:
        "Django movie-recommendation platform with TMDB ingestion, user profiles, genre-based recommendations, and a DRF API. Backend split into services layer and selectors for clean separation of concerns.",
      longDescription:
        "CineMatch es un sistema de recomendación de películas desarrollado en Django con DRF. Incluye ingesta de datos de TMDB, perfiles de usuario, recomendaciones basadas en géneros y una API REST completa. El backend está dividido en una capa de servicios (lógica de negocio + llamadas a terceros) y selectores para una separación limpia de responsabilidades. CI en Python 3.12/3.13 con coverage.",
    },
    tfm: {
      category: "MSc Thesis · AI & Robotics",
      description:
        "MSc thesis at Universidade da Coruña: vision-language control of a Robobo robot using GPT-4. The model interprets the robot's camera feed and decides the next action in real time.",
      longDescription:
        "Proyecto de Máster en la Universidad de A Coruña: control visión-lenguaje de un robot Robobo utilizando GPT-4. El modelo interpreta la cámara del robot y decide la siguiente acción (mover, girar, hablar) en tiempo real, con despacho estructurado en JSON. Integración con OpenAI API, pipelines de imágenes en base64, configuración por variables de entorno.",
    },
    fittracker: {
      category: "Full-Stack · AI & LLM Integration",
      description:
        "Full-stack platform for generating personalized workout routines and nutrition plans using LLM integration, with JWT authentication, progress tracking, and a modern React interface.",
      longDescription:
        "Plataforma full-stack para generar rutinas de entrenamiento y planes de alimentación personalizados utilizando integración con LLMs. Incluye autenticación JWT, seguimiento de progreso físico, generación de rutinas adaptadas al objetivo del usuario, planes nutricionales y panel frontend con Material UI. Backend en Django 6 con DRF, preparado para PostgreSQL en producción.",
    },
    receipt: {
      category: "Backend · Django & OCR",
      description:
        "Django web app for tracking and splitting receipt expenses between friends, with OCR support for automatic receipt scanning and product categorization.",
      longDescription:
        "Aplicación web Django para rastrear y dividir gastos de recibos entre amigos. Incluye gestión de recibos y productos, división proporcional de gastos, categorización de productos, visualización de totales por usuario, soporte para múltiples tiendas, OCR con Tesseract para escaneo automático de recibos, y despliegue con Docker y Gunicorn.",
    },
  },
  techStack: {
    title: "Tecnologías y Stack Técnico",
    subtitle:
      "Especializado en el ecosistema de Python de alto rendimiento y soluciones de Inteligencia Artificial aplicada. Filtra las habilidades para explorar detalles.",
    filterAll: "Todos",
    filterAI: "IA, LLMs & RAG",
    filterLanguages: "Lenguajes",
    filterFrameworks: "Web Frameworks",
    filterDatabases: "Bases de Datos",
    filterInfra: "Infra & Unix",
    clickForMore: "Haga clic para ver más",
    candidateLevel: "Nivel del Candidato:",
    ecosystem: "Ecosistema Fredy Hernández",
    pythonStack: "#PythonStack",
    techs: {
      python: {
        name: "Python",
        details:
          "Lenguaje principal utilizado durante más de 3 años para APIs (Django, FastAPI), microcontroladores, scripts de automatización industrial y arquitectura LLM.",
      },
      bash: {
        name: "Bash & Shell Scripting",
        details:
          "Creación de 6+ complejas herramientas de automatización de operaciones críticas para mas de 200 servidores Unix en SERESCO.",
      },
      sql: {
        name: "SQL",
        details:
          "Optimización de consultas relacionales complejas, reducción de tiempos de respuesta del 30% al 50% en bases de datos productivas.",
      },
      perl: {
        name: "Perl",
        details:
          "Mantenimiento y desarrollo de scripts legados para automatización en servidores Unix.",
      },
      javascript: {
        name: "JavaScript",
        details:
          "Uso en scripts de automatización, integración con APIs REST y build tools. Familiaridad con React en proyectos propios.",
      },
      html5: {
        name: "HTML5",
        details:
          "Estructuración semántica de interfaces web, formularios accesibles y integración con frameworks CSS.",
      },
      css3: {
        name: "CSS3",
        details:
          "Diseño responsive, Flexbox, Grid, animaciones y frameworks como Tailwind CSS y Bootstrap.",
      },
      langchain: {
        name: "LangChain",
        details:
          "Desarrollo de flujos de Agentes Inteligentes, encadenamiento de prompts complejos y almacenamiento de contexto con bases vectoriales.",
      },
      rag: {
        name: "Sistemas RAG",
        details:
          "Arquitectura completa de Retrieval-Augmented Generation conectando documentos corporativos con bases vectoriales con mínima alucinación.",
      },
      openai: {
        name: "OpenAI API",
        details:
          "Integración de modelos GPT-4 y GPT-3.5 para clasificación, resúmenes automáticos de datos estructurados y llamadas a funciones (tools).",
      },
      huggingface: {
        name: "Hugging Face",
        details:
          "Inferencia local de modelos de código abierto y fine-tuning básico para tareas de clasificación semántica.",
      },
      llamaindex: {
        name: "LlamaIndex",
        details:
          "Indexación e ingesta eficiente de datos empresariales multi-formato para alimentar motores semánticos rápidos.",
      },
      django: {
        name: "Django / DRF",
        details:
          "Desarrollo completo de aplicaciones backend multi-capa robustas, incluyendo integración de 4+ APIs REST con distribuidores externos en Westcon-Comstor.",
      },
      fastapi: {
        name: "FastAPI",
        details:
          "Creación de microservicios asíncronos rápidos auto-documentados con Swagger/OpenAPI.",
      },
      postgresql: {
        name: "PostgreSQL",
        details:
          "Administración, indexación y optimización de base de datos relacionales en entornos industriales de alta disponibilidad.",
      },
      mysql: {
        name: "MySQL",
        details:
          "Administración y estructuración de bases de datos para sistemas de adquisición con más de 30 sensores en tiempo real.",
      },
      sqlite: {
        name: "SQLite",
        details:
          "Base de datos ligera para desarrollo local y prototipado rápido en proyectos Django y aplicaciones embebidas.",
      },
      redis: {
        name: "Redis",
        details:
          "Caché en memoria, colas de mensajes y almacenamiento de sesiones para aplicaciones de alto rendimiento.",
      },
      docker: {
        name: "Docker",
        details:
          "Contenerización de microservicios Python/Django para estandarizar entornos de desarrollo, testing y producción.",
      },
      aws: {
        name: "AWS (Fundamentos)",
        details:
          "Despliegue de instancias EC2, almacenamiento S3 e inicio en administración fundamental cloud.",
      },
      linux: {
        name: "Entornos Linux/Unix",
        details:
          "Especialista en servidores SuSE, Solaris, AIX. Gestión de infraestructuras críticas y mantenimiento bajo SLA del 99.9%.",
      },
      ubuntu: {
        name: "Ubuntu",
        details:
          "Administración de servidores Ubuntu/Debian, despliegue de aplicaciones, configuración de servicios y seguridad del sistema.",
      },
      git: {
        name: "Git",
        details:
          "Control de versiones, flujos de GitFlow colaborativos con múltiples equipos de desarrollo.",
      },
    },
  },
  timeline: {
    title: "Experiencia Profesional de Fredy",
    subtitle:
      "Tres años enfocados en resolver problemas complejos de backend, APIs REST y automatización a nivel de sistemas y bases de datos relacionales.",
    performanceMetrics: "Métricas de Rendimiento Destacadas:",
    savedPerWeek: "Ahorradas/semana",
    manualSteps: "Pasos manuales",
    westcon: {
      role: "Backend Python Developer",
      company: "Westcon-Comstor España",
      location: "España (Remoto / Presencial)",
      period: "Marzo 2025 – Octubre 2025",
      achievements: [
        "Diseñé e integré 4 APIs REST en Python/Django para conectar sistemas internos con plataformas externas de distribución, suprimiendo procesos manuales de sincronización que consumían ~8 horas semanales.",
        "Automaticé 3 flujos críticos de ingesta y transformación de datos aplicando patrones de código reutilizables en Python, recortando la intervención manual en un 60%.",
        "Optimicé 12 consultas complejas en PostgreSQL y MySQL, mejorando los tiempos de respuesta de procesos de negocio neurálgicos entre un 30% y un 50%.",
      ],
      tags: ["Django REST APIs", "Automatización (60%)", "Tuning Query SQL"],
    },
    seresco: {
      role: "Desarrollador Software",
      company: "SERESCO, S.A.",
      location: "España",
      period: "Febrero 2024 – Marzo 2025",
      achievements: [
        "Diseñé y programé 6 utilidades internas en Python, Bash y Perl destinadas a la automatización de operaciones rutinarias en infraestructuras empresariales sobre Unix (sistemas SuSE, Solaris y AIX) de más de 200 servidores administrados.",
        "Aseguré el soporte avanzado constante sobre infraestructuras de misión crítica redundantes de alta disponibilidad, manteniendo un estricto acuerdo de nivel de servicio (SLA) del 99.9% durante 13 meses consecutivos.",
        "Coordiné exitósamente despliegues de infraestructura y correcciones de incidencias críticas colaborando con 3 equipos multidisciplinares integrando metodologías Jira.",
      ],
      tags: ["+200 Servidores Unix", "SLA 99.9%", "Colaboración Jira"],
    },
    cuba: {
      role: "Especialista en Automatización",
      company: "Empresa TI Cuba",
      location: "La Habana, Cuba",
      period: "2022 – 2023",
      achievements: [
        "Lideré el diseño y la implementación de 2 plataformas web desarrolladas en Django orientadas a la visualización y control de métricas industriales en vivo para más de 15 operadores de planta simultáneos.",
        "Conecté scripts de Python con sistemas embebidos de microcontroladores integrando protocolos robustos como Modbus y MQTT para consolidar datos en producción de más de 30 sensores.",
        "Asumí la completa administración y mantenimiento de bases de datos relacionales MySQL y PostgreSQL en producción para dar soporte a 5 flujos ininterrumpidos de monitorización activa.",
      ],
      tags: ["Sistemas de Control Web", "Modbus/MQTT PLC", "Sensores e IoT"],
    },
  },
  terminal: {
    title: "Consola de Ejecución en Vivo - Automatizaciones de Fredy",
    subtitle:
      "Prueba de forma interactiva algunas de las herramientas y scripts automatizados en Python y Shell que Fredy ha implementado. Haz clic en los botones de acceso rápido o interactúa en la línea de comandos.",
    sandbox: "Sandbox de Automatizaciones",
    welcome: "Fredy GNU/Linux Terminal v3.1.2 (tty1)",
    welcomeHelp:
      "Escribe un comando o selecciona una de las automatizaciones rápidas a continuación.",
    helpTitle: "Comandos disponibles:",
    helpWhoami:
      "  whoami               Muestra la identidad técnica rápida del desarrollador.",
    helpSysMonitor:
      "  run sys_monitor      Simula automatización de servidores Unix empresariales.",
    helpRagPipeline:
      "  run rag_pipeline     Simula proceso de carga semántica RAG con LangChain.",
    helpApiTest:
      "  run api_test         Valida el estado de APIs Django & DRF.",
    helpContact: "  contact              Detalles de contacto de Fredy.",
    helpClear:
      "  clear                Limpia toda la pantalla de la consola.",
    whoamiUser: "Usuario: Fredy Hernández",
    whoamiRole: "Rol: Python Backend Developer / AI Applications Creator",
    whoamiSpecialty:
      "Especialidad: Django, Automatizaciones Unix, RAG pipelines, LangChain",
    whoamiLocation:
      "Ubicación: España | Remoto 100% | Con permiso de trabajo UE",
    contactTitle2: "Información de Contacto:",
    contactEmail: "  Email:    fredyhdezv31@gmail.com",
    contactPhone: "  Teléfono: +34 674 867 848",
    contactSLA: "  SLA:      Respuesta inmediata < 12 horas.",
    sysMonitorStart: "Iniciando script: sys_monitor.py ...",
    sysMonitorConnecting:
      "[INFO] Conectando a infraestructuras Unix de SERESCO ...",
    sysMonitorAnalyzing:
      "[OK] Analizando 214 servidores en producción ...",
    sysMonitorSystems:
      "[OK] Sistemas SuSE, Solaris, AIX escaneados de forma automatizada.",
    sysMonitorMetric:
      "[METRIC] SLA corporativo mantenido al 99.9% de alta disponibilidad.",
    sysMonitorSuccess:
      "[SUCCESS] Monitoreo Unix finalizado con 0 alertas prioritarias activas.",
    ragStart:
      "Ejecutando pipeline_rag.py con LangChain & OpenAI API ...",
    ragStep1:
      "[STEP 1/3] Cargando PDFs corporativos y segmentando párrafos ...",
    ragStep2:
      "[STEP 2/3] Generando vectores semánticos en db vectorial (Hugging Face / OpenAI Embeddings) ...",
    ragStep3:
      "[STEP 3/3] Recuperando contexto para prompt con RAG (LangChain) ...",
    ragResponse:
      "[IA RESPONSE] 'La inteligencia artificial ha sido integrada con éxito minimizando alucinaciones.'",
    ragSuccess:
      "[SUCCESS] Pipeline completado. Búsqueda semántica activa. Precisión: 98.4%",
    apiTestStart:
      "Iniciando suite de tests para APIs en Django & FastAPI ...",
    apiTestDrf:
      "[DRF] Testeando endpoints de integración con Westcon-Comstor España ...",
    apiTestGet: "[OK] GET /api/v1/distribution-sync/ -> HTTP 200 OK (0.32s)",
    apiTestPost:
      "[OK] POST /api/v1/orders-push/ -> HTTP 201 Created (0.45s)",
    apiTestMetrics:
      "[METRICS] Sincronización automática de inventario ejecutandose con regularidad.",
    apiTestSavings:
      "[AHORRO] Evitando llamadas manuales: Sincronización ahorra ~8 horas/semana.",
    apiTestSuccess:
      "[SUCCESS] 4 APIs robustas testeadas en producción. Cobertura: 100%",
    unknownCommand: "Comando no reconocido: {cmd}. Escribe 'help' para ver opciones.",
    quickDemos: "Demostraciones Automáticas en Un-Clic:",
    runSysMonitor: "Monitoreo Unix",
    runRagPipeline: "Pipeline RAG (IA)",
    runApiTest: "Test APIs Django",
    runContact: "Contacto",
    inputPlaceholder:
      "Escribe 'run sys_monitor', 'whoami', 'help'...",
    execute: "Ejecutar",
    reset: "Reset",
    running: "Ejecutando...",
  },
  footer: {
    copyright: "© {year} Fredy Hernández · Backend Developer & Automation Engineer",
    designed:
      "Diseñado bajo la directriz Sleek Interface | Servidor Cloud Run",
  },
};
