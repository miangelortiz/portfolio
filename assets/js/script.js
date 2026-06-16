/* ----------------------------------------------------
   Controlador JS para CV Online - Miguel Angel Ortiz
   ---------------------------------------------------- */

// --- Diccionario de Traducciones ---
const translations = {
    es: {
        doc_title: "CV Miguel Angel Ortiz Olid | Backend Software Developer",
        btn_theme: "Alternar Tema",
        btn_terminal: "Terminal CLI",
        btn_lang: "Idioma (ES/EN)",
        btn_print: "Imprimir / PDF",
        role_title: "Desarrollador Backend Sénior",
        about_title: "Sobre mí",
        about_desc: "Ingeniero de Software Backend Sénior especializado en la arquitectura de adquisición de datos en tiempo real y el monitoreo de sistemas críticos para el sector energético e IoT. Con más de 6 años de trayectoria, diseño soluciones de alto rendimiento implementando mensajería distribuida (MQTT/AMQP), microservicios contenerizados y bases de datos optimizadas. Enfocado en la alta disponibilidad, la escalabilidad de APIs y la calidad del código, combino mi experiencia técnica con la adopción de flujos de trabajo de desarrollo asistido por IA (Claude Code, Gemini CLI) para maximizar la velocidad de desarrollo y la automatización de pruebas.",
        exp_title: "Experiencia Profesional",
        job1_role: "Desarrollador Backend Sénior | Especialista en IoT",
        job1_date: "2020 - Act.",
        job1_desc: "Liderazgo técnico en la arquitectura de backend e IoT para la monitorización energética. Adquisición y procesamiento de flujos masivos de datos IoT en tiempo real mediante MQTT/AMQP. Desarrollo y optimización de APIs críticas y microservicios en Node.js/TypeScript con Redis y colas RabbitMQ. Adopción activa de herramientas de IA agéntica (Claude Code, Gemini CLI) en terminal para acelerar el prototipado y la refactorización segura de código.",
        job2_role: "Docente de Node.js + Express",
        job2_date: "2022 - 2024",
        job2_desc: "Formación técnica y mentoría en arquitectura de software para el bootcamp de desarrollo. Instrucción especializada en el stack de backend (Node.js, Express, diseño de APIs REST, modelado de bases de datos relacionales y no relacionales, y patrones de diseño).",
        job3_role: "Coordinador Emergencias e Informático",
        job3_date: "2013 - 2019",
        job3_desc: "Coordinador en el centro de control y responsable de soporte técnico e informático. Mantenimiento y resolución de incidencias en sistemas microinformáticos locales, redes de comunicación interna y de voz, e infraestructura tecnológica de coordinación sanitaria.",
        job4_role: "Técnico en Sistemas y Redes (Adif)",
        job4_date: "2008 - 2013",
        job4_desc: "Operaciones y administración técnica de sistemas microinformáticos y redes corporativas prestando servicio para Adif. Aseguramiento de la conectividad, soporte microinformático a usuarios y resolución de incidencias de infraestructura.",
        job5_role: "Técnico de Sistemas y Redes",
        job5_date: "2004 - 2007",
        job5_desc: "Labores de soporte microinformático en campo, diagnóstico y reparación de hardware, configuración de software corporativo e instalación de redes locales para medianas y grandes empresas.",
        job6_role: "Técnico en Sistemas y Redes",
        job6_date: "2001 - 2003",
        job6_desc: "Coordinador e informático encargado del mantenimiento preventivo y correctivo de los servidores de tienda, sistemas TPV, equipamiento microinformático e infraestructura de comunicaciones del hipermercado.",
        tech_title: "Tecnologías",
        tech_cat1: "Backend & Lenguajes",
        tech_cat2: "Bases de Datos & Caché",
        tech_cat3: "Mensajería & IoT",
        tech_cat4: "Infraestructura & Otros",
        edu_title: "Formación Académica",
        edu1_role: "Bootcamp de Desarrollo Web Full Stack",
        edu1_date: "2019",
        edu1_desc: "Especialización en desarrollo web Full-Stack. Formación integral orientada tanto al Front-End (HTML5, CSS3, JavaScript responsivo) como al Backend (Node.js, Express, diseño de APIs y gestión de bases de datos).",
        edu2_role: "Título Especialista Informática de Gestión",
        edu2_date: "1999",
        edu2_company: "F.P. II Informática de Gestión",
        edu2_desc: "Estudios reglados en sistemas informáticos corporativos, lógica de programación, bases de datos y gestión de sistemas de información administrativa de empresas.",
        extra_title: "Formación Complementaria",
        extra1_role: "Administrador de Redes",
        extra1_date: "2012",
        extra1_desc: "Curso especializado de administración de redes cableadas e inalámbricas. Configuración de routers, seguridad informática, switches, y topología de red local (400 horas).",
        extra2_role: "Técnico de Sistemas Microinformáticos",
        extra2_date: "2007",
        extra2_desc: "Formación profesional ocupacional orientada al ensamblaje, mantenimiento preventivo de hardware y soporte microinformático integral (600 horas).",
        extra3_role: "Administrador de Servidores y Páginas Web",
        extra3_date: "2006",
        extra3_desc: "Estudios en administración y configuración de servidores web (Apache/IIS), publicación de contenido web y administración de hosting (400 horas).",
        extra4_role: "Técnico Auxiliar en Diseño Gráfico",
        extra4_date: "2004",
        extra4_desc: "Formación complementaria en herramientas de edición de imágenes vectoriales y de mapa de bits aplicadas a entornos gráficos y layouts (640 horas).",
        skills_title: "Habilidades & Competencias",
        skill1: "Autonomía",
        skill2: "Adaptabilidad tecnológica",
        skill3: "Colaboración eficiente",
        skill4: "Capacidad autodidacta",
        skill5: "Inglés técnico",
        skill6: "Resolución de problemas",
        skill7: "Pensamiento analítico",
        skill8: "Atención al detalle",
        footer_ai: "Acelerado con agentes de IA"
    },
    en: {
        doc_title: "CV Miguel Angel Ortiz Olid | Backend Software Developer",
        btn_theme: "Toggle Theme",
        btn_terminal: "CLI Terminal",
        btn_lang: "Language (ES/EN)",
        btn_print: "Print / PDF",
        role_title: "Senior Backend Developer",
        about_title: "About me",
        about_desc: "Senior Backend Software Developer & IoT Engineer specializing in real-time data acquisition architecture and critical systems monitoring for the energy and IoT sectors. With over 6 years of experience, I design high-performance solutions implementing distributed messaging (MQTT/AMQP), containerized microservices, and optimized databases. Focused on high availability, API scalability, and code quality, I combine my technical expertise with AI-assisted development workflows (Claude Code, Gemini CLI) to maximize developer velocity and test automation.",
        exp_title: "Professional Experience",
        job1_role: "Senior Backend Developer | IoT Specialist",
        job1_date: "2020 - Present",
        job1_desc: "Technical leadership in backend & IoT architecture for energy monitoring. Acquisition and processing of massive real-time IoT data streams using MQTT/AMQP. Development and optimization of critical APIs and microservices in Node.js/TypeScript with Redis and RabbitMQ. Active adoption of terminal-based Agentic AI tools (Claude Code, Gemini CLI) to accelerate service prototyping and secure code refactoring.",
        job2_role: "Node.js + Express Instructor",
        job2_date: "2022 - 2024",
        job2_desc: "Technical training and mentorship in software architecture for the development bootcamp. Specialized instruction in the backend stack (Node.js, Express, REST API design, relational and non-relational database modeling, and design patterns).",
        job3_role: "Emergency Coordinator & IT Support",
        job3_date: "2013 - 2019",
        job3_desc: "Coordinator in the control center and responsible for technical and computer support. Maintenance and troubleshooting of local computer systems, internal voice and communication networks, and health coordination technology infrastructure.",
        job4_role: "Systems & Networks Technician (Adif)",
        job4_date: "2008 - 2013",
        job4_desc: "Technical operations and administration of computer systems and corporate networks providing service for Adif. Ensuring connectivity, computer support to users, and resolution of infrastructure incidents.",
        job5_role: "Systems & Networks Technician",
        job5_date: "2004 - 2007",
        job5_desc: "Field computer support work, hardware diagnostics and repair, corporate software configuration, and local network installation for medium and large companies.",
        job6_role: "Systems & Networks Technician",
        job6_date: "2001 - 2003",
        job6_desc: "Coordinator and computer technician in charge of preventive and corrective maintenance of store servers, POS systems, computer equipment, and hypermarket communication infrastructure.",
        tech_title: "Technologies",
        tech_cat1: "Backend & Languages",
        tech_cat2: "Databases & Cache",
        tech_cat3: "Messaging & IoT",
        tech_cat4: "Infrastructure & Others",
        edu_title: "Academic Education",
        edu1_role: "Full Stack Web Development Bootcamp",
        edu1_date: "2019",
        edu1_desc: "Specialization in Full-Stack web development. Comprehensive training oriented to both Front-End (HTML5, CSS3, responsive JavaScript) and Backend (Node.js, Express, API design, and database management).",
        edu2_role: "Management IT Specialist Degree",
        edu2_date: "1999",
        edu2_company: "Vocational Training II - Management IT",
        edu2_desc: "Regulated studies in corporate computer systems, programming logic, databases, and administrative information systems management for companies.",
        extra_title: "Additional Training",
        extra1_role: "Network Administrator",
        extra1_date: "2012",
        extra1_desc: "Specialized course in wired and wireless network administration. Router configuration, IT security, switches, and local network topology (400 hours).",
        extra2_role: "Microcomputer Systems Technician",
        extra2_date: "2007",
        extra2_desc: "Occupational vocational training oriented to assembly, preventive hardware maintenance, and comprehensive computer support (600 hours).",
        extra3_role: "Web Server & Web Page Administrator",
        extra3_date: "2006",
        extra3_desc: "Studies in web server administration and configuration (Apache/IIS), web content publishing, and hosting management (400 hours).",
        extra4_role: "Graphic Design Assistant Technician",
        extra4_date: "2004",
        extra4_desc: "Complementary training in vector and bitmap image editing tools applied to graphic environments and layouts (640 hours).",
        skills_title: "Skills & Competences",
        skill1: "Autonomy",
        skill2: "Technological Adaptability",
        skill3: "Effective Collaboration",
        skill4: "Self-Directed Learning",
        skill5: "Technical English",
        skill6: "Problem Solving",
        skill7: "Analytical Thinking",
        skill8: "Attention to Detail",
        footer_ai: "Accelerated with AI agents"
    }
};

// --- Datos del CV en JSON para Consola y API ---
window.cvData = {
    personalInfo: {
        name: "Miguel Angel Ortiz Olid",
        role: "Desarrollador Backend Sénior",
        email: "maortizolid@gmail.com",
        phone: "+34 651 159 054",
        linkedin: "https://linkedin.com/in/maortizolid",
        github: "https://github.com/miangelortiz"
    },
    profile: "Ingeniero de Software Backend Sénior especializado en la arquitectura de adquisición de datos en tiempo real y el monitoreo de sistemas críticos para el sector energético e IoT.",
    experience: [
        { period: "2020-act.", role: "Desarrollador Backend Sénior | Especialista en IoT", company: "Enerclic Innovatio S.L.", details: "Liderazgo técnico, IoT, MQTT/AMQP, APIs NodeJs/TypeScript, Redis caching, RabbitMQ, Docker, Claude Code / Gemini CLI" },
        { period: "2022-2024", role: "Docente de Node.js + Express", company: "Releevant", details: "Formación y mentoría en arquitectura Backend en bootcamp Releevant" },
        { period: "2013-2019", role: "Coordinador emergencias / Informático", company: "Ambulancias Andalucía", details: "Soporte técnico, redes y sistemas de comunicación crítica" },
        { period: "2008-2013", role: "Técnico en sistemas microinformáticos (Adif)", company: "K-Infotec Sistemas", details: "Sistemas y redes corporativas" },
        { period: "2004-2007", role: "Técnico en sistemas microinformáticos", company: "Sermicro", details: "Soporte microinformático de campo y redes locales" },
        { period: "2001-2003", role: "Coordinador informático", company: "Carrefour España", details: "Mantenimiento de servidores, red local e infraestructura" }
    ],
    technologies: {
        backend: ["NodeJs", "Express", "TypeScript", "JavaScript"],
        databases: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
        iot_messaging: ["RabbitMQ", "VerneMQ", "Eclipse Mosquitto", "WebSockets"],
        devops_tools: ["HAProxy", "Docker", "Git", "Linux", "Scrum", "Claude Code / Gemini CLI"]
    },
    softSkills: ["Autonomía", "Adaptabilidad tecnológica", "Colaboración eficiente", "Capacidad autodidacta", "Inglés técnico", "Resolución de problemas", "Pensamiento analítico", "Atención al detalle"]
};

// Objeto de traducciones para la API CLI simulada
const cvDataEN = {
    personalInfo: {
        name: "Miguel Angel Ortiz Olid",
        role: "Senior Backend Developer",
        email: "maortizolid@gmail.com",
        phone: "+34 651 159 054",
        linkedin: "https://linkedin.com/in/maortizolid",
        github: "https://github.com/miangelortiz"
    },
    profile: "Senior Backend Software Developer & IoT Engineer specializing in real-time data acquisition architecture and critical systems monitoring for the energy and IoT sectors.",
    experience: [
        { period: "2020-present", role: "Senior Backend Developer | IoT Specialist", company: "Enerclic Innovatio S.L.", details: "Technical leadership, IoT, MQTT/AMQP, NodeJs/TypeScript APIs, Redis caching, RabbitMQ, Docker, Claude Code / Gemini CLI" },
        { period: "2022-2024", role: "Node.js + Express Instructor", company: "Releevant", details: "Training and technical mentorship in Backend architecture at Releevant bootcamp" },
        { period: "2013-2019", role: "Emergency Coordinator / IT Support", company: "Ambulancias Andalucía", details: "IT support, networks and critical communication systems" },
        { period: "2008-2013", role: "Microcomputer Systems Technician (Adif)", company: "K-Infotec Sistemas", details: "Corporate networks and systems administration" },
        { period: "2004-2007", role: "Microcomputer Systems Technician", company: "Sermicro", details: "Field IT support and local network installation" },
        { period: "2001-2003", role: "IT Coordinator", company: "Carrefour España", details: "Server maintenance, LAN and IT infrastructure" }
    ],
    technologies: {
        backend: ["NodeJs", "Express", "TypeScript", "JavaScript"],
        databases: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
        iot_messaging: ["RabbitMQ", "VerneMQ", "Eclipse Mosquitto", "WebSockets"],
        devops_tools: ["HAProxy", "Docker", "Git", "Linux", "Scrum", "Claude Code / Gemini CLI"]
    },
    softSkills: ["Autonomy", "Technological Adaptability", "Effective Collaboration", "Self-Directed Learning", "Technical English", "Problem Solving", "Analytical Thinking", "Attention to Detail"]
};

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');
    const printBtn = document.getElementById('print-cv');
    const htmlElement = document.documentElement;

    // --- Referencias de la Terminal (Definidas arriba para evitar TDZ en applyLanguage) ---
    const terminalToggleBtn = document.getElementById('terminal-toggle-btn');
    const terminalModal = document.getElementById('terminal-modal');
    const terminalCloseBtn = document.getElementById('terminal-close-btn');
    const terminalCloseDot = document.getElementById('terminal-close-dot');
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalBody = document.getElementById('terminal-body');

    let currentLang = 'es';

    // --- 💻 Dev Console Easter Egg ---
    console.log(
        "%c👋 ¡Hola! %c¿Buscando en las tripas de mi web? 😉", 
        "color: #38bdf8; font-size: 16px; font-weight: bold; font-family: sans-serif;", 
        "color: inherit; font-size: 14px; font-family: sans-serif;"
    );
    console.log(
        "%cComo especialista en Backend, he dejado mi currículum estructurado en formato JSON listo para consumir.", 
        "color: #34d399; font-size: 12px; font-style: italic; font-family: sans-serif;"
    );
    console.log(
        "%cPrueba a ejecutar: %cconsole.table(window.cvData.experience)%c o %cconsole.log(window.cvData)",
        "color: #9ca3af; font-family: sans-serif;",
        "color: #f472b6; font-family: monospace; font-weight: bold; background: #27272a; padding: 2px 4px; border-radius: 4px;",
        "color: #9ca3af; font-family: sans-serif;",
        "color: #f472b6; font-family: monospace; font-weight: bold; background: #27272a; padding: 2px 4px; border-radius: 4px;"
    );

    // --- 🌓 Gestión de Tema Claro/Oscuro ---
    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('theme');
    } catch (e) {
        console.warn("Storage access restricted. Standing back to default system theme preferences.");
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else {
        const defaultTheme = systemPrefersDark ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', defaultTheme);
        updateThemeIcon(defaultTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            try {
                localStorage.setItem('theme', newTheme);
            } catch (e) {
                // Silencio ante restricción de seguridad
            }
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // --- 🌐 Gestión de Traducción (ES / EN) ---
    let savedLang = null;
    try {
        savedLang = localStorage.getItem('lang');
    } catch (e) {
        // Silencio en modo file://
    }

    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        currentLang = savedLang;
    } else {
        const userLanguage = navigator.language || navigator.userLanguage;
        currentLang = userLanguage.startsWith('es') ? 'es' : 'en';
    }
    
    // Aplicar traducción inicial
    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            applyLanguage(currentLang);
            try {
                localStorage.setItem('lang', currentLang);
            } catch (e) {
                // Silencio
            }
        });
    }

    function applyLanguage(lang) {
        // Cambiar idioma del tag html
        htmlElement.setAttribute('lang', lang);

        // Traducir todos los elementos marcados con data-translate
        document.querySelectorAll('[data-translate]').forEach(elem => {
            const key = elem.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                elem.innerHTML = translations[lang][key];
            }
        });

        // Traducir atributos 'data-tooltip' de botones marcados con data-translate-tooltip
        document.querySelectorAll('[data-translate-tooltip]').forEach(elem => {
            const key = elem.getAttribute('data-translate-tooltip');
            if (translations[lang] && translations[lang][key]) {
                elem.setAttribute('data-tooltip', translations[lang][key]);
            }
        });

        // Traducir el título de la página
        if (translations[lang] && translations[lang].doc_title) {
            document.title = translations[lang].doc_title;
        }

        // Actualizar valores iniciales del terminal en base al idioma
        resetTerminalOutput();
    }

    // --- 🖨️ Impresión (PDF) ---
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // --- 🖥️ Terminal Interactiva (CLI) ---

    let commandHistory = [];
    let historyIndex = -1;

    // Resetear/inicializar el mensaje de bienvenida de la consola en base al idioma
    function resetTerminalOutput() {
        if (!terminalOutput) return;
        
        const welcomeText = {
            es: [
                '<div class="terminal-line system-line">> Miguel Angel Ortiz Olid [Backend Developer OS v1.0.0]</div>',
                '<div class="terminal-line system-line">> Sesión de invitado establecida correctamente.</div>',
                '<div class="terminal-line system-line">> Escribe <span class="highlight">help</span> para listar los comandos disponibles o prueba <span class="highlight">neofetch</span>.</div>',
                '<br>'
            ],
            en: [
                '<div class="terminal-line system-line">> Miguel Angel Ortiz Olid [Backend Developer OS v1.0.0]</div>',
                '<div class="terminal-line system-line">> Guest session successfully established.</div>',
                '<div class="terminal-line system-line">> Type <span class="highlight">help</span> to list available commands or try <span class="highlight">neofetch</span>.</div>',
                '<br>'
            ]
        };
        
        terminalOutput.innerHTML = welcomeText[currentLang].join('');
    }

    // Abrir consola
    if (terminalToggleBtn) {
        terminalToggleBtn.addEventListener('click', () => {
            terminalModal.classList.add('active');
            setTimeout(() => {
                terminalInput.focus();
            }, 100);
        });
    }

    // Cerrar consola
    const closeTerminal = () => {
        terminalModal.classList.remove('active');
    };

    if (terminalCloseBtn) terminalCloseBtn.addEventListener('click', closeTerminal);
    if (terminalCloseDot) terminalCloseDot.addEventListener('click', closeTerminal);
    
    // Cerrar haciendo clic fuera de la consola
    terminalModal.addEventListener('click', (e) => {
        if (e.target === terminalModal) {
            closeTerminal();
        }
    });

    // Asegurar foco en el input al pulsar en cualquier parte del cuerpo de la consola
    terminalBody.addEventListener('click', () => {
        terminalInput.focus();
    });

    // Procesar Comandos
    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const commandText = terminalInput.value.trim();
                terminalInput.value = '';
                
                if (commandText) {
                    processCommand(commandText);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = commandHistory[commandHistory.length - 1 - historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalInput.value = commandHistory[commandHistory.length - 1 - historyIndex];
                } else if (historyIndex === 0) {
                    historyIndex = -1;
                    terminalInput.value = '';
                }
            }
        });
    }

    function processCommand(rawCmd) {
        const cmd = rawCmd.toLowerCase();
        commandHistory.push(rawCmd);
        historyIndex = -1;

        // Mostrar el comando ejecutado en la salida
        writeToTerminal(`guest@maortiz-cv:~$ ${rawCmd}`, 'prompt-echo');

        // Textos del terminal traducidos dinámicamente
        const cliTexts = {
            es: {
                unknown: `Comando no reconocido: '${rawCmd}'. Escribe <span class="highlight">help</span> para ver los comandos.`,
                help: [
                    'Comandos disponibles:',
                    '  <span class="highlight">help</span>        - Muestra esta lista de comandos.',
                    '  <span class="highlight">cv</span>          - Imprime el perfil profesional resumido.',
                    '  <span class="highlight">skills</span>      - Árbol de tecnologías y habilidades.',
                    '  <span class="highlight">experience</span>  - Historial laboral cronológico.',
                    '  <span class="highlight">contact</span>     - Datos de contacto.',
                    '  <span class="highlight">api</span>         - Simula un endpoint REST que sirve el CV en JSON.',
                    '  <span class="highlight">neofetch</span>    - Muestra información del sistema y resumen del CV.',
                    '  <span class="highlight">theme</span>       - Alterna el tema visual (claro / oscuro).',
                    '  <span class="highlight">lang</span>        - Cambia el idioma del CV (español / inglés).',
                    '  <span class="highlight">clear</span>       - Limpia la pantalla de la consola.',
                    '  <span class="highlight">exit</span>        - Cierra la consola interactiva.'
                ],
                cv: [
                    `<strong>${window.cvData.personalInfo.name}</strong>`,
                    `Rol: ${translations.es.role_title}`,
                    '',
                    translations.es.about_desc
                ],
                skills: [
                    '🌳 <strong>Árbol de Habilidades Tecnológicas</strong>',
                    '├─ <strong>Backend & Lenguajes</strong>',
                    '│  ├─ Node.js & Express',
                    '│  └─ TypeScript & JavaScript',
                    '├─ <strong>Bases de Datos & Caché</strong>',
                    '│  ├─ PostgreSQL & MySQL',
                    '│  └─ Redis (Caché) & MongoDB',
                    '├─ <strong>Mensajería & IoT (Core)</strong>',
                    '│  ├─ RabbitMQ (AMQP) & WebSockets',
                    '│  └─ Eclipse Mosquitto & VerneMQ (MQTT)',
                    '└─ <strong>Infraestructura & Herramientas</strong>',
                    '   ├─ HAProxy, Docker & Git',
                    '   └─ Linux, Scrum & Claude Code / Gemini CLI'
                ],
                contact: [
                    '📞 <strong>Información de Contacto</strong>',
                    `  Email:    <a href="mailto:${window.cvData.personalInfo.email}" class="highlight">${window.cvData.personalInfo.email}</a>`,
                    `  Teléfono: ${window.cvData.personalInfo.phone}`,
                    `  LinkedIn: <a href="${window.cvData.personalInfo.linkedin}" target="_blank">${window.cvData.personalInfo.linkedin}</a>`,
                    `  GitHub:   <a href="${window.cvData.personalInfo.github}" target="_blank">${window.cvData.personalInfo.github}</a>`
                ],
                neofetch: [
                    '  <span class="json-string">__  __   _    ___  </span>  <span class="highlight">maortizolid@gmail.com</span>',
                    '  <span class="json-string">|  \\/  | / \\  / _ \\ </span>  ---------------------',
                    '  <span class="json-string">| |\\/| |/ _ \\| | | |</span>  <strong style="color:#58a6ff">S.O.:</strong> MiguelOS v2.6 (Sénior Backend)',
                    '  <span class="json-string">| |  | / ___ \\ |_| |</span>  <strong style="color:#58a6ff">Kernel:</strong> Node.js & TypeScript',
                    '  <span class="json-string">|_|  |_/_/   \\_\\___/</span>  <strong style="color:#58a6ff">Experiencia:</strong> +6 Años (Sénior/IoT)',
                    '                       <strong style="color:#58a6ff">Shell:</strong> bash + Claude Code & Gemini CLI',
                    '                       <strong style="color:#58a6ff">Disponibilidad:</strong> 100% HA (High Availability)',
                    '                       <strong style="color:#58a6ff">CPU:</strong> Clean Architecture & SOLID',
                    '                       <strong style="color:#58a6ff">Memoria:</strong> Redis (Caché) / RabbitMQ',
                    '                       <strong style="color:#58a6ff">BBDD:</strong> PostgreSQL, MySQL, MongoDB',
                    '                       <strong style="color:#58a6ff">IoT:</strong> VerneMQ, Mosquitto, WebSockets'
                ]
            },
            en: {
                unknown: `Command not recognized: '${rawCmd}'. Type <span class="highlight">help</span> to list available commands.`,
                help: [
                    'Available commands:',
                    '  <span class="highlight">help</span>        - Display this commands list.',
                    '  <span class="highlight">cv</span>          - Prints short professional profile.',
                    '  <span class="highlight">skills</span>      - Tech stack and skills tree diagram.',
                    '  <span class="highlight">experience</span>  - Chronological employment history.',
                    '  <span class="highlight">contact</span>     - Contact information.',
                    '  <span class="highlight">api</span>         - Simulates a REST endpoint serving the CV in JSON.',
                    '  <span class="highlight">neofetch</span>    - Displays system info and CV summary.',
                    '  <span class="highlight">theme</span>       - Toggles the visual theme (light / dark).',
                    '  <span class="highlight">lang</span>        - Changes the CV language (Spanish / English).',
                    '  <span class="highlight">clear</span>       - Clears terminal console output.',
                    '  <span class="highlight">exit</span>        - Closes interactive console.'
                ],
                cv: [
                    `<strong>${window.cvData.personalInfo.name}</strong>`,
                    `Role: ${translations.en.role_title}`,
                    '',
                    translations.en.about_desc
                ],
                skills: [
                    '🌳 <strong>Technology Skills Tree</strong>',
                    '├─ <strong>Backend & Languages</strong>',
                    '│  ├─ Node.js & Express',
                    '│  └─ TypeScript & JavaScript',
                    '├─ <strong>Databases & Cache</strong>',
                    '│  ├─ PostgreSQL & MySQL',
                    '│  └─ Redis (Cache) & MongoDB',
                    '├─ <strong>Messaging & IoT (Core)</strong>',
                    '│  ├─ RabbitMQ (AMQP) & WebSockets',
                    '│  └─ Eclipse Mosquitto & VerneMQ (MQTT)',
                    '└─ <strong>Infrastructure & Tools</strong>',
                    '   ├─ HAProxy, Docker & Git',
                    '   └─ Linux, Scrum & Claude Code / Gemini CLI'
                ],
                contact: [
                    '📞 <strong>Contact Information</strong>',
                    `  Email:    <a href="mailto:${window.cvData.personalInfo.email}" class="highlight">${window.cvData.personalInfo.email}</a>`,
                    `  Phone:    ${window.cvData.personalInfo.phone}`,
                    `  LinkedIn: <a href="${window.cvData.personalInfo.linkedin}" target="_blank">${window.cvData.personalInfo.linkedin}</a>`,
                    `  GitHub:   <a href="${window.cvData.personalInfo.github}" target="_blank">${window.cvData.personalInfo.github}</a>`
                ],
                neofetch: [
                    '  <span class="json-string">__  __   _    ___  </span>  <span class="highlight">maortizolid@gmail.com</span>',
                    '  <span class="json-string">|  \\/  | / \\  / _ \\ </span>  ---------------------',
                    '  <span class="json-string">| |\\/| |/ _ \\| | | |</span>  <strong style="color:#58a6ff">OS:</strong> MiguelOS v2.6 (Senior Backend)',
                    '  <span class="json-string">| |  | / ___ \\ |_| |</span>  <strong style="color:#58a6ff">Kernel:</strong> Node.js & TypeScript',
                    '  <span class="json-string">|_|  |_/_/   \\_\\___/</span>  <strong style="color:#58a6ff">Experience:</strong> 6+ Years (Senior/IoT)',
                    '                       <strong style="color:#58a6ff">Shell:</strong> bash + Claude Code & Gemini CLI',
                    '                       <strong style="color:#58a6ff">Availability:</strong> 100% HA (High Availability)',
                    '                       <strong style="color:#58a6ff">CPU:</strong> Clean Architecture & SOLID',
                    '                       <strong style="color:#58a6ff">Memory:</strong> Redis (Cache) / RabbitMQ',
                    '                       <strong style="color:#58a6ff">DB:</strong> PostgreSQL, MySQL, MongoDB',
                    '                       <strong style="color:#58a6ff">IoT:</strong> VerneMQ, Mosquitto, WebSockets'
                ]
            }
        };

        const activeTexts = cliTexts[currentLang];

        switch (cmd) {
            case 'help':
                writeToTerminal(activeTexts.help);
                break;
            case 'cv':
                writeToTerminal(activeTexts.cv);
                break;
            case 'skills':
                writeToTerminal(activeTexts.skills);
                break;
            case 'experience':
                const expLines = currentLang === 'es' 
                    ? ['💼 <strong>Historial Profesional</strong>'] 
                    : ['💼 <strong>Employment History</strong>'];
                
                const activeCVData = currentLang === 'es' ? window.cvData : cvDataEN;
                activeCVData.experience.forEach(job => {
                    expLines.push(`  <span class="highlight">[${job.period}]</span> <strong>${job.role}</strong> @ <em>${job.company}</em>`);
                    expLines.push(`           ↳ ${job.details}`);
                    expLines.push('');
                });
                writeToTerminal(expLines);
                break;
            case 'contact':
                writeToTerminal(activeTexts.contact);
                break;
            case 'api':
                writeToTerminal(`$ curl -X GET https://api.maortiz.dev/v1/cv`, 'system-line');
                writeToTerminal('HTTP/1.1 200 OK', 'success-line');
                writeToTerminal('Content-Type: application/json', 'system-line');
                writeToTerminal('');
                // Servir el JSON en base al idioma seleccionado
                const apiPayload = currentLang === 'es' ? window.cvData : cvDataEN;
                writeToTerminal(highlightJSON(apiPayload));
                break;
            case 'neofetch':
                writeToTerminal(activeTexts.neofetch);
                break;
            case 'theme':
                if (themeToggleBtn) {
                    themeToggleBtn.click();
                    const newTheme = htmlElement.getAttribute('data-theme');
                    const themeMsg = currentLang === 'es'
                        ? `Tema visual cambiado a: <strong class="highlight">${newTheme === 'dark' ? 'Oscuro' : 'Claro'}</strong>`
                        : `Visual theme toggled to: <strong class="highlight">${newTheme === 'dark' ? 'Dark' : 'Light'}</strong>`;
                    writeToTerminal(themeMsg, 'success-line');
                } else {
                    writeToTerminal(currentLang === 'es' ? 'Error: Control de tema no disponible.' : 'Error: Theme control not available.', 'error-line');
                }
                break;
            case 'lang':
                if (langToggleBtn) {
                    langToggleBtn.click();
                    const langMsg = currentLang === 'es'
                        ? `Idioma cambiado a: <strong class="highlight">Español (ES)</strong>`
                        : `Language changed to: <strong class="highlight">English (EN)</strong>`;
                    writeToTerminal(langMsg, 'success-line');
                } else {
                    writeToTerminal(currentLang === 'es' ? 'Error: Control de idioma no disponible.' : 'Error: Language control not available.', 'error-line');
                }
                break;
            case 'clear':
                terminalOutput.innerHTML = '';
                break;
            case 'exit':
            case 'close':
                closeTerminal();
                break;
            default:
                writeToTerminal(activeTexts.unknown, 'error-line');
        }

        // Auto-scroll al final del terminal
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function writeToTerminal(lines, className = '') {
        const linesArray = Array.isArray(lines) ? lines : [lines];
        linesArray.forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'terminal-line';
            if (className) {
                lineDiv.classList.add(className);
            }
            lineDiv.innerHTML = line;
            terminalOutput.appendChild(lineDiv);
        });
    }

    // Helper para formatear y colorear sintaxis JSON en la consola simulada
    function highlightJSON(jsonObj) {
        const jsonStr = JSON.stringify(jsonObj, null, 2);
        return jsonStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
            let cls = 'json-number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'json-key';
                    return `<span class="${cls}">${match.replace(/:/g, '')}</span>:`;
                } else {
                    cls = 'json-string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'json-boolean';
            } else if (/null/.test(match)) {
                cls = 'json-null';
            }
            return `<span class="${cls}">${match}</span>`;
        });
    }
});
