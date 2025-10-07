// ========================================
// Theme Switcher (Dark/Light Mode)
// ========================================
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.setupToggle();
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.updateIcon();
  }

  toggle() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  updateIcon() {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (this.theme === 'dark') {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
    } else {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    }
  }

  setupToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn?.addEventListener('click', () => this.toggle());
  }
}

// ========================================
// Language Switcher
// ========================================
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'en';
    this.translations = {
      en: {
        // Navigation
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.greeting': "Hi, I'm Oussama Elbouqi",
        'hero.title': 'Développeur Informatique',
        'hero.location': 'Tiflet, Morocco',
        'hero.cta1': 'Get In Touch',
        'hero.cta2': 'View Projects',
        
        // About
        'about.title': 'About Me',
        'about.p1': "As a computer developer, I leverage my skills in various technical projects, creating software solutions tailored to my clients' needs. Active in social initiatives with non-governmental organizations, I strive to contribute to projects that have a tangible impact.",
        'about.p2': 'Also passionate about photography, video editing and design, I love combining technology and creativity in my projects.',
        'about.languages': 'Languages',
        'about.interests': 'Interests',
        'about.lang.arabic': 'Arabic (Native)',
        'about.lang.german': 'German (Intermediate)',
        'about.lang.english': 'English (Basic)',
        'about.lang.french': 'French (Beginner)',
        'about.int1': 'Web Development',
        'about.int2': 'Photography & Video',
        'about.int3': 'UI/UX Design',
        'about.int4': 'Problem Solving',
        
        // Services
        'services.title': 'Services I Offer',
        'services.subtitle': 'Transforming ideas into digital reality with cutting-edge technology and creative solutions',
        'services.web.title': 'Web Development',
        'services.web.desc': 'Building responsive and modern web applications using ASP.NET, C#, and JavaScript.',
        'services.database.title': 'Database Design',
        'services.database.desc': 'Designing and implementing efficient database solutions using SQL Server and MERISE methodology.',
        'services.desktop.title': 'Desktop Applications',
        'services.desktop.desc': 'Creating powerful desktop applications with C# and .NET Framework for Windows.',
        'services.design.title': 'Design, Photography & Social Media',
        'services.design.desc': 'I offer visual identity creation, professional photography for events and products, as well as social media content management. From photos and videos to creative publications, I help brands and initiatives strengthen their digital presence and capture their audience\'s attention.',
        'services.reports.title': 'Reports & Documentation',
        'services.reports.desc': 'Creating professional reports using Crystal Reports and comprehensive project documentation.',
        
        // Experience
        'exp.title': 'Experience',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'Final Project',
        'exp.techboy.location': 'Tiflet, Morocco',
        'exp.techboy.desc1': 'End-of-studies project covering full development lifecycle',
        'exp.techboy.desc2': 'Built e-commerce web application using ASP.NET, C#, JavaScript, SQL Server',
        'exp.techboy.desc3': 'Delivered complete solution with documentation and live demo',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'Internship',
        'exp.especig.period': 'May 2024 – Jul 2024',
        'exp.especig.desc1': 'Developed desktop application for private school management',
        'exp.especig.desc2': 'Designed database using MERISE methodology',
        'exp.especig.desc3': 'Technologies: C#, SQL Server, Crystal Reports',
        
        'exp.nibras.title': 'Fondation Nibras',
        'exp.nibras.role': 'Internship',
        'exp.nibras.period': 'May 2023 – Jun 2023',
        'exp.nibras.desc1': 'Managed archiving and information organization',
        'exp.nibras.desc2': 'Improved data accessibility and documentation',
        'exp.nibras.desc3': 'Developed organizational and communication skills',
        
        // Projects
        'projects.title': 'Projects',
        'projects.subtitle': 'Explore my diverse portfolio of web applications, desktop software, and creative projects',
        'projects.dashboard.title': 'Dashboard Interface',
        'projects.dashboard.desc': 'Interactive dashboard with data visualization and responsive charts.',
        'projects.product.title': 'Product Showcase',
        'projects.product.desc': 'Clean landing page with features, pricing, and call-to-action.',
        'projects.movie.title': 'Movie Landing Page',
        'projects.movie.desc': 'Cinematic landing page with smooth transitions and animations.',
        'projects.ecommerce.title': 'E-Commerce Platform',
        'projects.ecommerce.desc': 'Full-stack e-commerce solution with admin dashboard, payment integration, and inventory management.',
        'projects.portfolio.title': 'Responsive Portfolio',
        'projects.portfolio.desc': 'Modern portfolio website with smooth animations, dark mode, and multilingual support.',
        'projects.blog.title': 'Blog Management System',
        'projects.blog.desc': 'Content management system with user authentication, rich text editor, and SEO optimization.',
        'projects.inventory.title': 'Inventory Management System',
        'projects.inventory.desc': 'Desktop application for managing inventory, sales, and generating detailed reports with barcode scanning.',
        'projects.pos.title': 'Point of Sale System',
        'projects.pos.desc': 'Complete POS solution with customer management, receipt printing, and real-time sales analytics.',
        'projects.branding.title': 'Brand Identity Design',
        'projects.branding.desc': 'Complete brand identity package including logo design, color palette, and marketing materials.',
        'projects.video.title': 'Video Production & Editing',
        'projects.video.desc': 'Professional video editing, motion graphics, and social media content creation for various clients.',
        'projects.live': 'Live Demo',
        'projects.code': 'Code',
        'projects.download': 'Download',
        'projects.portfolio.view': 'View Portfolio',
        'projects.behance': 'Behance',
        'projects.reel': 'Watch Reel',
        'projects.youtube': 'YouTube',
        'projects.filter.all': 'All Projects',
        'projects.filter.web': 'Web Development',
        'projects.filter.desktop': 'Desktop Apps',
        'projects.filter.design': 'Design & Media',
        
        // Skills
        'skills.title': 'Skills',
        'skills.tech': 'Technologies',
        'skills.soft': 'Soft Skills',
        'skills.creativity': 'Creativity',
        'skills.communication': 'Communication',
        'skills.teamwork': 'Teamwork',
        'skills.organization': 'Organization',
        'skills.problem': 'Problem Solving',
        
        // Contact
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Ready to bring your ideas to life? Let\'s collaborate and create something amazing together!',
        'contact.name': 'Name',
        'contact.name.placeholder': 'Your name',
        'contact.email': 'Email',
        'contact.email.placeholder': 'your.email@example.com',
        'contact.message': 'Message',
        'contact.message.placeholder': 'Your message...',
        'contact.send': 'Send Message',
        'contact.or': 'Or reach out directly:',
        
        // Footer
        'footer.rights': 'All rights reserved.',
      },
      
      ar: {
        // Navigation
        'nav.about': 'عني',
        'nav.services': 'الخدمات',
        'nav.experience': 'الخبرة',
        'nav.projects': 'المشاريع',
        'nav.skills': 'المهارات',
        'nav.contact': 'اتصل',
        
        // Hero
        'hero.greeting': 'مرحباً، أنا أسامة البوقي',
        'hero.title': 'مطور معلوماتي',
        'hero.location': 'تيفلت، المغرب',
        'hero.cta1': 'تواصل معي',
        'hero.cta2': 'عرض المشاريع',
        
        // About
        'about.title': 'عني',
        'about.p1': 'كمطور معلوماتي، أستفيد من مهاراتي في مشاريع تقنية متنوعة، حيث أقوم بإنشاء حلول برمجية مصممة خصيصاً لتلبية احتياجات عملائي. نشط في المبادرات الاجتماعية مع المنظمات غير الحكومية، أسعى للمساهمة في مشاريع لها تأثير ملموس.',
        'about.p2': 'شغوف أيضاً بالتصوير الفوتوغرافي وتحرير الفيديو والتصميم، أحب الجمع بين التكنولوجيا والإبداع في مشاريعي.',
        'about.languages': 'اللغات',
        'about.interests': 'الاهتمامات',
        'about.lang.arabic': 'العربية (لغة أم)',
        'about.lang.german': 'الألمانية (متوسط)',
        'about.lang.english': 'الإنجليزية (أساسي)',
        'about.lang.french': 'الفرنسية (مبتدئ)',
        'about.int1': 'تطوير الويب',
        'about.int2': 'التصوير والفيديو',
        'about.int3': 'تصميم واجهة المستخدم',
        'about.int4': 'حل المشكلات',
        
        // Services
        'services.title': 'الخدمات التي أقدمها',
        'services.subtitle': 'تحويل الأفكار إلى واقع رقمي باستخدام التكنولوجيا المتطورة والحلول الإبداعية',
        'services.web.title': 'تطوير الويب',
        'services.web.desc': 'بناء تطبيقات ويب متجاوبة وحديثة باستخدام ASP.NET و C# و JavaScript.',
        'services.database.title': 'تصميم قواعد البيانات',
        'services.database.desc': 'تصميم وتنفيذ حلول قواعد بيانات فعالة باستخدام SQL Server ومنهجية MERISE.',
        'services.desktop.title': 'تطبيقات سطح المكتب',
        'services.desktop.desc': 'إنشاء تطبيقات سطح مكتب قوية باستخدام C# و .NET Framework لنظام Windows.',
        'services.design.title': 'التصميم، التصوير والشبكات الاجتماعية',
        'services.design.desc': 'أقدم خدمات إنشاء الهوية البصرية، والتصوير الفوتوغرافي الاحترافي للفعاليات والمنتجات، بالإضافة إلى إدارة المحتوى على الشبكات الاجتماعية. من الصور ومقاطع الفيديو إلى المنشورات الإبداعية، أساعد العلامات التجارية والمبادرات على تعزيز حضورها الرقمي وجذب انتباه جمهورها.',
        'services.reports.title': 'التقارير والتوثيق',
        'services.reports.desc': 'إنشاء تقارير احترافية باستخدام Crystal Reports وتوثيق شامل للمشاريع.',
        
        // Experience
        'exp.title': 'الخبرة',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'مشروع التخرج',
        'exp.techboy.location': 'تيفلت، المغرب',
        'exp.techboy.desc1': 'مشروع نهاية الدراسة يغطي دورة التطوير الكاملة',
        'exp.techboy.desc2': 'بناء تطبيق ويب للتجارة الإلكترونية باستخدام ASP.NET و C# و JavaScript و SQL Server',
        'exp.techboy.desc3': 'تسليم حل كامل مع التوثيق والعرض التوضيحي المباشر',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'تدريب',
        'exp.especig.period': 'مايو 2024 – يوليو 2024',
        'exp.especig.desc1': 'تطوير تطبيق سطح المكتب لإدارة المدارس الخاصة',
        'exp.especig.desc2': 'تصميم قاعدة البيانات باستخدام منهجية MERISE',
        'exp.especig.desc3': 'التقنيات: C# و SQL Server و Crystal Reports',
        
        'exp.nibras.title': 'مؤسسة نبراس',
        'exp.nibras.role': 'تدريب',
        'exp.nibras.period': 'مايو 2023 – يونيو 2023',
        'exp.nibras.desc1': 'إدارة الأرشفة وتنظيم المعلومات',
        'exp.nibras.desc2': 'تحسين إمكانية الوصول إلى البيانات والتوثيق',
        'exp.nibras.desc3': 'تطوير المهارات التنظيمية والتواصلية',
        
        // Projects
        'projects.title': 'المشاريع',
        'projects.subtitle': 'استكشف مجموعتي المتنوعة من تطبيقات الويب وبرامج سطح المكتب والمشاريع الإبداعية',
        'projects.dashboard.title': 'واجهة لوحة التحكم',
        'projects.dashboard.desc': 'لوحة تحكم تفاعلية مع تصور البيانات والرسوم البيانية المتجاوبة.',
        'projects.product.title': 'عرض المنتج',
        'projects.product.desc': 'صفحة هبوط نظيفة مع الميزات والتسعير والدعوة إلى اتخاذ إجراء.',
        'projects.movie.title': 'صفحة هبوط الأفلام',
        'projects.movie.desc': 'صفحة هبوط سينمائية مع انتقالات ورسوم متحركة سلسة.',
        'projects.ecommerce.title': 'منصة التجارة الإلكترونية',
        'projects.ecommerce.desc': 'حل شامل للتجارة الإلكترونية مع لوحة تحكم الإدارة وتكامل الدفع وإدارة المخزون.',
        'projects.portfolio.title': 'موقع البورتفوليو المتجاوب',
        'projects.portfolio.desc': 'موقع بورتفوليو حديث مع رسوم متحركة سلسة ووضع مظلم ودعم متعدد اللغات.',
        'projects.blog.title': 'نظام إدارة المدونة',
        'projects.blog.desc': 'نظام إدارة المحتوى مع مصادقة المستخدم ومحرر نص غني وتحسين محركات البحث.',
        'projects.inventory.title': 'نظام إدارة المخزون',
        'projects.inventory.desc': 'تطبيق سطح مكتب لإدارة المخزون والمبيعات وإنشاء تقارير مفصلة مع مسح الباركود.',
        'projects.pos.title': 'نظام نقاط البيع',
        'projects.pos.desc': 'حل شامل لنقاط البيع مع إدارة العملاء وطباعة الإيصالات وتحليلات المبيعات في الوقت الفعلي.',
        'projects.branding.title': 'تصميم الهوية التجارية',
        'projects.branding.desc': 'حزمة هوية تجارية كاملة تشمل تصميم الشعار ولوحة الألوان والمواد التسويقية.',
        'projects.video.title': 'إنتاج وتحرير الفيديو',
        'projects.video.desc': 'تحرير فيديو احترافي ورسوم متحركة وإنشاء محتوى وسائل التواصل الاجتماعي لعملاء متنوعين.',
        'projects.live': 'عرض مباشر',
        'projects.code': 'الكود',
        'projects.download': 'تحميل',
        'projects.portfolio.view': 'عرض البورتفوليو',
        'projects.behance': 'بيهانس',
        'projects.reel': 'مشاهدة الريل',
        'projects.youtube': 'يوتيوب',
        'projects.filter.all': 'جميع المشاريع',
        'projects.filter.web': 'تطوير الويب',
        'projects.filter.desktop': 'تطبيقات سطح المكتب',
        'projects.filter.design': 'التصميم والإعلام',
        
        // Skills
        'skills.title': 'المهارات',
        'skills.tech': 'التقنيات',
        'skills.soft': 'المهارات الشخصية',
        'skills.creativity': 'الإبداع',
        'skills.communication': 'التواصل',
        'skills.teamwork': 'العمل الجماعي',
        'skills.organization': 'التنظيم',
        'skills.problem': 'حل المشكلات',
        
        // Contact
        'contact.title': 'تواصل معي',
        'contact.subtitle': 'مستعد لتحويل أفكارك إلى واقع؟ دعنا نتعاون ونصنع شيئاً مذهلاً معاً!',
        'contact.name': 'الاسم',
        'contact.name.placeholder': 'اسمك',
        'contact.email': 'البريد الإلكتروني',
        'contact.email.placeholder': 'your.email@example.com',
        'contact.message': 'الرسالة',
        'contact.message.placeholder': 'رسالتك...',
        'contact.send': 'إرسال الرسالة',
        'contact.or': 'أو تواصل مباشرة:',
        
        // Footer
        'footer.rights': 'جميع الحقوق محفوظة.',
      },
      
      fr: {
        // Navigation
        'nav.about': 'À propos',
        'nav.services': 'Services',
        'nav.experience': 'Expérience',
        'nav.projects': 'Projets',
        'nav.skills': 'Compétences',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.greeting': 'Bonjour, je suis Oussama Elbouqi',
        'hero.title': 'Développeur Informatique',
        'hero.location': 'Tiflet, Maroc',
        'hero.cta1': 'Me Contacter',
        'hero.cta2': 'Voir les Projets',
        
        // About
        'about.title': 'À Propos de Moi',
        'about.p1': "Développeur informatique, je mets à profit mes compétences dans des projets techniques variés, en créant des solutions logicielles adaptées aux besoins de mes clients. Actif dans des initiatives sociales avec des organisations non-gouvernementales, je m'efforce de contribuer à des projets qui ont un impact tangible.",
        'about.p2': "Passionné également par la photographie, le montage vidéo et le design, j'aime combiner la technologie et la créativité dans mes projets.",
        'about.languages': 'Langues',
        'about.interests': 'Intérêts',
        'about.lang.arabic': 'Arabe (Natif)',
        'about.lang.german': 'Allemand (Intermédiaire)',
        'about.lang.english': 'Anglais (Basique)',
        'about.lang.french': 'Français (Débutant)',
        'about.int1': 'Développement Web',
        'about.int2': 'Photographie & Vidéo',
        'about.int3': 'Design UI/UX',
        'about.int4': 'Résolution de Problèmes',
        
        // Services
        'services.title': 'Services que j\'offre',
        'services.subtitle': 'Transformer les idées en réalité numérique avec une technologie de pointe et des solutions créatives',
        'services.web.title': 'Développement Web',
        'services.web.desc': 'Création d\'applications web réactives et modernes en utilisant ASP.NET, C# et JavaScript.',
        'services.database.title': 'Conception de Base de Données',
        'services.database.desc': 'Conception et mise en œuvre de solutions de bases de données efficaces avec SQL Server et la méthodologie MERISE.',
        'services.desktop.title': 'Applications de Bureau',
        'services.desktop.desc': 'Création d\'applications de bureau puissantes avec C# et .NET Framework pour Windows.',
        'services.design.title': 'Design, Photographie & Réseaux sociaux',
        'services.design.desc': 'Je propose des services de création d\'identité visuelle, de photographie professionnelle pour événements et produits, ainsi que la gestion de contenus sur les réseaux sociaux. Des photos et vidéos aux publications créatives, j\'aide les marques et initiatives à renforcer leur présence digitale et à capter l\'attention de leur audience.',
        'services.reports.title': 'Rapports et Documentation',
        'services.reports.desc': 'Création de rapports professionnels avec Crystal Reports et documentation complète des projets.',
        
        // Experience
        'exp.title': 'Expérience',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'Projet Final',
        'exp.techboy.location': 'Tiflet, Maroc',
        'exp.techboy.desc1': "Projet de fin d'études couvrant le cycle complet de développement",
        'exp.techboy.desc2': "Application web e-commerce construite avec ASP.NET, C#, JavaScript, SQL Server",
        'exp.techboy.desc3': 'Solution complète livrée avec documentation et démo en direct',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'Stage',
        'exp.especig.period': 'Mai 2024 – Juil 2024',
        'exp.especig.desc1': "Application de bureau développée pour la gestion d'école privée",
        'exp.especig.desc2': 'Base de données conçue avec la méthodologie MERISE',
        'exp.especig.desc3': 'Technologies: C#, SQL Server, Crystal Reports',
        
        'exp.nibras.title': 'Fondation Nibras',
        'exp.nibras.role': 'Stage',
        'exp.nibras.period': 'Mai 2023 – Juin 2023',
        'exp.nibras.desc1': "Gestion de l'archivage et organisation de l'information",
        'exp.nibras.desc2': "Amélioration de l'accessibilité des données et de la documentation",
        'exp.nibras.desc3': 'Développement des compétences organisationnelles et de communication',
        
        // Projects
        'projects.title': 'Projets',
        'projects.subtitle': 'Explorez mon portfolio diversifié d\'applications web, de logiciels de bureau et de projets créatifs',
        'projects.dashboard.title': 'Interface Tableau de Bord',
        'projects.dashboard.desc': 'Tableau de bord interactif avec visualisation de données et graphiques réactifs.',
        'projects.product.title': 'Vitrine Produit',
        'projects.product.desc': 'Page de destination propre avec fonctionnalités, tarification et appel à l\'action.',
        'projects.movie.title': 'Page de Destination Cinéma',
        'projects.movie.desc': 'Page de destination cinématographique avec transitions et animations fluides.',
        'projects.ecommerce.title': 'Plateforme E-Commerce',
        'projects.ecommerce.desc': 'Solution e-commerce complète avec tableau de bord admin, intégration de paiement et gestion d\'inventaire.',
        'projects.portfolio.title': 'Portfolio Réactif',
        'projects.portfolio.desc': 'Site web portfolio moderne avec animations fluides, mode sombre et support multilingue.',
        'projects.blog.title': 'Système de Gestion de Blog',
        'projects.blog.desc': 'Système de gestion de contenu avec authentification utilisateur, éditeur de texte riche et optimisation SEO.',
        'projects.inventory.title': 'Système de Gestion d\'Inventaire',
        'projects.inventory.desc': 'Application de bureau pour gérer l\'inventaire, les ventes et générer des rapports détaillés avec scan de codes-barres.',
        'projects.pos.title': 'Système de Point de Vente',
        'projects.pos.desc': 'Solution POS complète avec gestion client, impression de reçus et analyses de ventes en temps réel.',
        'projects.branding.title': 'Design d\'Identité de Marque',
        'projects.branding.desc': 'Package d\'identité de marque complet incluant design de logo, palette de couleurs et matériaux marketing.',
        'projects.video.title': 'Production et Montage Vidéo',
        'projects.video.desc': 'Montage vidéo professionnel, motion graphics et création de contenu pour réseaux sociaux pour divers clients.',
        'projects.live': 'Démo en Direct',
        'projects.code': 'Code',
        'projects.download': 'Télécharger',
        'projects.portfolio.view': 'Voir Portfolio',
        'projects.behance': 'Behance',
        'projects.reel': 'Voir la Bobine',
        'projects.youtube': 'YouTube',
        'projects.filter.all': 'Tous les Projets',
        'projects.filter.web': 'Développement Web',
        'projects.filter.desktop': 'Applications de Bureau',
        'projects.filter.design': 'Design et Médias',
        
        // Skills
        'skills.title': 'Compétences',
        'skills.tech': 'Technologies',
        'skills.soft': 'Compétences Personnelles',
        'skills.creativity': 'Créativité',
        'skills.communication': 'Communication',
        'skills.teamwork': 'Travail d\'Équipe',
        'skills.organization': 'Organisation',
        'skills.problem': 'Résolution de Problèmes',
        
        // Contact
        'contact.title': 'Contactez-Moi',
        'contact.subtitle': 'Prêt à donner vie à vos idées ? Collaborons et créons quelque chose d\'extraordinaire ensemble !',
        'contact.name': 'Nom',
        'contact.name.placeholder': 'Votre nom',
        'contact.email': 'Email',
        'contact.email.placeholder': 'votre.email@exemple.com',
        'contact.message': 'Message',
        'contact.message.placeholder': 'Votre message...',
        'contact.send': 'Envoyer le Message',
        'contact.or': 'Ou contactez directement:',
        
        // Footer
        'footer.rights': 'Tous droits réservés.',
      },
      
      de: {
        // Navigation
        'nav.about': 'Über',
        'nav.experience': 'Erfahrung',
        'nav.projects': 'Projekte',
        'nav.skills': 'Fähigkeiten',
        'nav.contact': 'Kontakt',
        
        // Hero
        'hero.greeting': 'Hallo, ich bin Oussama Elbouqi',
        'hero.title': 'Informatik-Entwickler',
        'hero.location': 'Tiflet, Marokko',
        'hero.cta1': 'Kontakt Aufnehmen',
        'hero.cta2': 'Projekte Ansehen',
        
        // About
        'about.title': 'Über Mich',
        'about.p1': 'Als Informatik-Entwickler nutze ich meine Fähigkeiten in verschiedenen technischen Projekten und erstelle Software-Lösungen, die auf die Bedürfnisse meiner Kunden zugeschnitten sind. Aktiv in sozialen Initiativen mit Nichtregierungsorganisationen, bemühe ich mich, zu Projekten beizutragen, die eine greifbare Wirkung haben.',
        'about.p2': 'Auch leidenschaftlich für Fotografie, Videobearbeitung und Design, liebe ich es, Technologie und Kreativität in meinen Projekten zu kombinieren.',
        'about.languages': 'Sprachen',
        'about.interests': 'Interessen',
        'about.lang.arabic': 'Arabisch (Muttersprache)',
        'about.lang.german': 'Deutsch (Mittelstufe)',
        'about.lang.english': 'Englisch (Grundkenntnisse)',
        'about.lang.french': 'Französisch (Anfänger)',
        'about.int1': 'Web-Entwicklung',
        'about.int2': 'Fotografie & Video',
        'about.int3': 'UI/UX Design',
        'about.int4': 'Problemlösung',
        
        // Experience
        'exp.title': 'Erfahrung',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'Abschlussprojekt',
        'exp.techboy.location': 'Tiflet, Marokko',
        'exp.techboy.desc1': 'Abschlussprojekt mit vollständigem Entwicklungszyklus',
        'exp.techboy.desc2': 'E-Commerce-Webanwendung mit ASP.NET, C#, JavaScript, SQL Server erstellt',
        'exp.techboy.desc3': 'Vollständige Lösung mit Dokumentation und Live-Demo geliefert',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'Praktikum',
        'exp.especig.period': 'Mai 2024 – Jul 2024',
        'exp.especig.desc1': 'Desktop-Anwendung für Privatschulverwaltung entwickelt',
        'exp.especig.desc2': 'Datenbank mit MERISE-Methodik entworfen',
        'exp.especig.desc3': 'Technologien: C#, SQL Server, Crystal Reports',
        
        'exp.nibras.title': 'Fondation Nibras',
        'exp.nibras.role': 'Praktikum',
        'exp.nibras.period': 'Mai 2023 – Jun 2023',
        'exp.nibras.desc1': 'Archivierung und Informationsorganisation verwaltet',
        'exp.nibras.desc2': 'Datenzugänglichkeit und Dokumentation verbessert',
        'exp.nibras.desc3': 'Organisations- und Kommunikationsfähigkeiten entwickelt',
        
        // Projects
        'projects.title': 'Projekte',
        'projects.subtitle': 'Entdecken Sie mein vielfältiges Portfolio von Webanwendungen, Desktop-Software und kreativen Projekten',
        'projects.dashboard.title': 'Dashboard-Oberfläche',
        'projects.dashboard.desc': 'Interaktives Dashboard mit Datenvisualisierung und responsiven Diagrammen.',
        'projects.product.title': 'Produkt-Showcase',
        'projects.product.desc': 'Saubere Landing Page mit Funktionen, Preisen und Call-to-Action.',
        'projects.movie.title': 'Film-Landing-Page',
        'projects.movie.desc': 'Kinoreife Landing Page mit sanften Übergängen und Animationen.',
        'projects.ecommerce.title': 'E-Commerce-Plattform',
        'projects.ecommerce.desc': 'Vollständige E-Commerce-Lösung mit Admin-Dashboard, Zahlungsintegration und Bestandsverwaltung.',
        'projects.portfolio.title': 'Responsives Portfolio',
        'projects.portfolio.desc': 'Moderne Portfolio-Website mit sanften Animationen, Dark Mode und mehrsprachiger Unterstützung.',
        'projects.blog.title': 'Blog-Management-System',
        'projects.blog.desc': 'Content-Management-System mit Benutzerauthentifizierung, Rich-Text-Editor und SEO-Optimierung.',
        'projects.inventory.title': 'Bestandsverwaltungssystem',
        'projects.inventory.desc': 'Desktop-Anwendung zur Verwaltung von Beständen, Verkäufen und Erstellung detaillierter Berichte mit Barcode-Scanning.',
        'projects.pos.title': 'Kassensystem',
        'projects.pos.desc': 'Komplette POS-Lösung mit Kundenverwaltung, Belegdruck und Echtzeit-Verkaufsanalysen.',
        'projects.branding.title': 'Markenidentitäts-Design',
        'projects.branding.desc': 'Komplettes Markenidentitätspaket mit Logo-Design, Farbpalette und Marketingmaterialien.',
        'projects.video.title': 'Videoproduktion & -bearbeitung',
        'projects.video.desc': 'Professionelle Videobearbeitung, Motion Graphics und Social Media Content-Erstellung für verschiedene Kunden.',
        'projects.live': 'Live-Demo',
        'projects.code': 'Code',
        'projects.download': 'Herunterladen',
        'projects.portfolio.view': 'Portfolio Ansehen',
        'projects.behance': 'Behance',
        'projects.reel': 'Reel Ansehen',
        'projects.youtube': 'YouTube',
        'projects.filter.all': 'Alle Projekte',
        'projects.filter.web': 'Web-Entwicklung',
        'projects.filter.desktop': 'Desktop-Anwendungen',
        'projects.filter.design': 'Design & Medien',
        
        // Skills
        'skills.title': 'Fähigkeiten',
        'skills.tech': 'Technologien',
        'skills.soft': 'Soft Skills',
        'skills.creativity': 'Kreativität',
        'skills.communication': 'Kommunikation',
        'skills.teamwork': 'Teamarbeit',
        'skills.organization': 'Organisation',
        'skills.problem': 'Problemlösung',
        
        // Contact
        'contact.title': 'Kontakt Aufnehmen',
        'contact.subtitle': 'Bereit, Ihre Ideen zum Leben zu erwecken? Lassen Sie uns zusammenarbeiten und etwas Erstaunliches schaffen!',
        'contact.name': 'Name',
        'contact.name.placeholder': 'Ihr Name',
        'contact.email': 'E-Mail',
        'contact.email.placeholder': 'ihre.email@beispiel.de',
        'contact.message': 'Nachricht',
        'contact.message.placeholder': 'Ihre Nachricht...',
        'contact.send': 'Nachricht Senden',
        'contact.or': 'Oder direkt kontaktieren:',
        
        // Footer
        'footer.rights': 'Alle Rechte vorbehalten.',
      }
    };
    
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.setupSwitcher();
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Apply RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      document.body.setAttribute('dir', 'rtl');
      
      // Force fix button spacing for Arabic
      setTimeout(() => {
        this.fixArabicButtonSpacing();
      }, 100);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
      document.body.setAttribute('dir', 'ltr');
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translations[lang][key];
      
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
    
    // Update language selector
    this.updateSelector();
  }

  updateSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
      selector.value = this.currentLang;
    }
  }

  fixArabicButtonSpacing() {
    // Fix all buttons with icons
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
      const svg = button.querySelector('svg');
      const span = button.querySelector('span');
      
      if (svg && span) {
        // Add proper spacing
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.gap = '1rem';
        button.style.flexDirection = 'row-reverse';
        
        // Ensure SVG has proper margin
        svg.style.marginLeft = '0.75rem';
        svg.style.marginRight = '0';
      }
    });
    
    // Fix flex containers
    const flexContainers = document.querySelectorAll('.flex.items-center');
    flexContainers.forEach(container => {
      if (container.classList.contains('gap-2')) {
        container.style.gap = '1rem';
      }
    });
  }

  setupSwitcher() {
    const selector = document.getElementById('language-selector');
    selector?.addEventListener('change', (e) => {
      this.applyLanguage(e.target.value);
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
  window.languageManager = new LanguageManager();
});
