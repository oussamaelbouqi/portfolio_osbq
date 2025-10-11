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
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.greeting': "Hi, I'm Oussama Elbouqi",
        'hero.title': 'Computer Developer',
        'hero.location': 'Tiflet, Morocco',
        'hero.cta1': 'Get In Touch',
        'hero.cta2': 'View Projects',
        'hero.cta3': 'Download CV',
        // About
        'about.title': 'About Me',
        'about.p1': "As an experienced computer developer, I put my technical skills at the service of innovative and tailor-made projects, creating software solutions adapted to the specific needs of my clients. Specialized in web application and desktop application development, I use technologies such as ASP.NET, C# and SQL Server to deliver high-performance and scalable solutions.",
        'about.p2': 'Engaged in social initiatives, I actively collaborate with non-governmental organizations to design projects that have a concrete impact on local communities and their development.',
        'about.p3': 'Passionate about photography, video editing and graphic design, I combine technology and creativity to create captivating visual content adapted to the needs of each project.',
        'about.languages': 'Languages',
        'about.interests': 'Interests',
        'about.lang.arabic': 'Arabic (Native)',
        'about.lang.german': 'German (Intermediate)',
        'about.lang.english': 'English (Basic)',
        'about.lang.french': 'French (Beginner)',
        'about.int1': 'Web & Software Development',
        'about.int2': 'Video Editing & Photography',
        'about.int3': 'Visual Identity & Design',
        'about.int4': 'Social Projects & NGO Engagement',
        
        // Services
        'services.title': 'Services Offered',
        'services.subtitle': 'Transforming ideas into digital solutions through software development, design and creativity',
        'services.web.title': 'Web & Software Development',
        'services.web.desc': 'Creating modern, responsive and mobile-friendly web applications using ASP.NET, C#, HTML, CSS, JavaScript and SQL Server.',
        'services.database.title': 'Database Design & Modeling',
        'services.database.desc': 'Design and implementation of high-performance databases and information systems using SQL Server, Merise and UML.',
        'services.desktop.title': 'Desktop Applications',
        'services.desktop.desc': 'Development of high-performance desktop software using C# and .NET Framework, with integrated reporting via Crystal Reports.',
        'services.visual.title': 'Visual Design & Photography',
        'services.visual.desc': 'Creation of visual identities, professional photography and video editing for events, brands or organizations.',
        'services.social.title': 'Social Media Management',
        'services.social.desc': 'Social media content management focused on boosting digital engagement and growing social presence of initiatives.',
        'services.reports.title': 'Reports & Documentation',
        'services.reports.desc': 'Creation of professional reports and technical documentation with Word, Excel and PowerPoint.',
        
        // Experience
        'exp.title': 'Experience',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'Final Project',
        'exp.techboy.location': 'Tiflet, Morocco',
        'exp.techboy.desc': 'As part of my final project for obtaining the Specialized Technician Diploma (DTS) in Computer Development, I worked in a group with a colleague to develop an e-commerce website called Tech Boy. We designed and developed this A to Z site using the following technologies: ASP.NET, CSS, HTML, JavaScript, SQL Server, and UML.',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'Internship',
        'exp.especig.period': 'May 2024 – Jul 2024',
        'exp.especig.location': 'Tiflet',
        'exp.especig.desc': 'In 2024, I completed a 2-month internship at Especig school, where, with a group of colleagues, we created a desktop application for complete management of a private school, using MERISE, C#, SQL Server.',
        
        'exp.webdev.title': 'Web Design and Front-End Development',
        'exp.webdev.role': 'Personal Projects',
        'exp.webdev.desc': 'A collection of modern web applications showcasing diverse design approaches and interactive user experiences. Each project demonstrates different aspects of front-end development, from responsive design to dynamic animations and user interface innovation.',
        
        'exp.nibras.title': 'Fondation Nibras pour le développement',
        'exp.nibras.role': 'Archive Intern',
        'exp.nibras.period': 'May 2023 – Jun 2023',
        'exp.nibras.location': 'Tiflet',
        'exp.nibras.desc': 'In 2023, I completed a one-month internship at Fondation Nibras for development, where I applied my knowledge in archiving and information organization, and developed my skills in office tools.',
        
        
        // Projects
        'projects.title': 'Projects',
        'projects.subtitle': 'Discover my comprehensive portfolio featuring cutting-edge web applications, robust desktop solutions, creative multimedia projects, and impactful social initiatives. Each project reflects my passion for innovation, technical excellence, and meaningful digital experiences.',
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
        'projects.personal.title': 'Personal Portfolio',
        'projects.personal.desc': 'Professional portfolio showcasing development skills and creative projects',
        'projects.dashboard.title': 'Dashboard Interface',
        'projects.dashboard.desc': 'Modern admin dashboard with real-time analytics and data visualization',
        'projects.iphone.title': 'iPhone 13 Dynamic',
        'projects.iphone.desc': 'Product showcase page with interactive color customization and smooth animations',
        'projects.adidas.title': 'Adidas Showcase',
        'projects.adidas.desc': 'Sports brand showcase with glassmorphism design and dynamic product displays',
        'projects.avatar.title': 'Avatar Immersive',
        'projects.avatar.desc': 'Immersive movie-themed landing page with parallax scrolling and cinematic animations',
        'projects.pizza.title': 'Pizza Mama',
        'projects.pizza.desc': 'Italian restaurant website with online ordering system and interactive menu',
        'projects.techboy.title': 'Tech Boy E-Commerce',
        'projects.techboy.desc': 'Full-stack e-commerce platform',
        'projects.especig.title': 'ESPECIG',
        'projects.especig.desc': 'School management system with comprehensive features',
        'projects.crud.title': 'Full Product Management System (CRUD)',
        'projects.crud.desc': 'Complete product management system with CRUD operations (Create, Read, Update, Delete) developed entirely in JavaScript for easy product management.',
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
        'projects.filter.photography': 'Photography',
        'projects.profile': 'View Profile',
        'projects.actf.title': 'ACTF Football Club',
        'projects.actf.desc': 'Regular photography coverage of players, staff and training sessions for Shatai Tiflet Football Club (2024 - present).',
        'projects.citoyens.title': 'The Citizens Movement',
        'projects.category.web': 'Web',
        'projects.category.desktop': 'Desktop',
        'projects.category.design': 'Design',
        'projects.category.photography': 'Photography',
        'projects.gallery': 'View Projects',
        'projects.media': 'View Projects',
        'projects.videos': 'View Projects',
        'projects.designs': 'View Projects',
        'projects.reels': 'View Projects',
        'projects.content': 'View Projects',
        
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
        'hero.cta3': 'تحميل سيرتي الذاتية',
        
        // About
        'about.title': 'عني',
        'about.p1': 'بصفتي مطور برمجيات ذو خبرة، أضع مهاراتي التقنية في خدمة مشاريع مبتكرة ومصممة خصيصاً، من خلال إنشاء حلول برمجية متكيفة مع الاحتياجات المحددة لعملائي. متخصص في تطوير تطبيقات الويب وتطبيقات سطح المكتب، أستخدم تقنيات مثل ASP.NET و C# و SQL Server لتقديم حلول عالية الأداء وقابلة للتوسع.',
        'about.p2': 'منخرط في مبادرات اجتماعية، أتعاون بنشاط مع منظمات غير حكومية لتصميم مشاريع لها تأثير ملموس على المجتمعات المحلية وتنميتها.',
        'about.p3': 'متحمس للتصوير الفوتوغرافي وتحرير الفيديو والتصميم الجرافيكي، أجمع بين التكنولوجيا والإبداع لإنشاء محتوى بصري جذاب ومتكيف مع احتياجات كل مشروع.',
        'about.languages': 'اللغات',
        'about.interests': 'الاهتمامات',
        'about.lang.arabic': 'العربية (لغة أم)',
        'about.lang.german': 'الألمانية (متوسط)',
        'about.lang.english': 'الإنجليزية (أساسي)',
        'about.lang.french': 'الفرنسية (مبتدئ)',
        'about.int1': 'تطوير الويب والبرمجيات',
        'about.int2': 'تحرير الفيديو والتصوير الفوتوغرافي',
        'about.int3': 'الهوية البصرية والتصميم',
        'about.int4': 'المشاريع الاجتماعية والمشاركة في المنظمات غير الحكومية',
        
        // Services
        'services.title': 'الخدمات المقدمة',
        'services.subtitle': 'تحويل الأفكار إلى حلول رقمية من خلال تطوير البرمجيات والتصميم والإبداع',
        'services.web.title': 'تطوير الويب والبرمجيات',
        'services.web.desc': 'إنشاء تطبيقات ويب حديثة ومتجاوبة ومتوافقة مع الأجهزة المحمولة باستخدام ASP.NET و C# و HTML و CSS و JavaScript و SQL Server.',
        'services.database.title': 'تصميم ونمذجة قواعد البيانات',
        'services.database.desc': 'تصميم وتنفيذ قواعد بيانات عالية الأداء وأنظمة معلومات باستخدام SQL Server و Merise و UML.',
        'services.desktop.title': 'تطبيقات سطح المكتب',
        'services.desktop.desc': 'تطوير برمجيات سطح مكتب عالية الأداء باستخدام C# و .NET Framework، مع تقارير متكاملة عبر Crystal Reports.',
        'services.visual.title': 'التصميم المرئي والتصوير الفوتوغرافي',
        'services.visual.desc': 'إنشاء هويات بصرية، تصوير فوتوغرافي احترافي وتحرير فيديو للفعاليات والعلامات التجارية أو المنظمات.',
        'services.social.title': 'إدارة وسائل التواصل الاجتماعي',
        'services.social.desc': 'إدارة المحتوى لوسائل التواصل الاجتماعي مع التركيز على تعزيز التفاعل الرقمي ونمو الحضور الاجتماعي للمبادرات.',
        'services.reports.title': 'التقارير والتوثيق',
        'services.reports.desc': 'إنشاء تقارير احترافية ووثائق تقنية باستخدام Word و Excel و PowerPoint.',
        
        // Experience
        'exp.title': 'الخبرات',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'مشروع نهاية الدراسة',
        'exp.techboy.location': 'تيفلت، المغرب',
        'exp.techboy.desc': 'في إطار مشروع نهاية الدراسة للحصول على دبلوم التقني المتخصص (DTS) في التطوير المعلوماتي، عملت في مجموعة مع زميل لتطوير موقع ويب للتجارة الإلكترونية يسمى Tech Boy. قمنا بتصميم وتطوير هذا الموقع من الألف إلى الياء باستخدام التقنيات التالية: ASP.NET، CSS، HTML، JavaScript، SQL Server، وUML.',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'تدريب',
        'exp.especig.period': 'مايو 2024 – يوليو 2024',
        'exp.especig.location': 'تيفلت',
        'exp.especig.desc': 'في 2024، أنجزت تدريباً لمدة شهرين في مدرسة Especig، حيث قمنا مع مجموعة من الزملاء بإنشاء تطبيق سطح مكتب للإدارة الشاملة لمدرسة خاصة، باستخدام MERISE وC# وSQL Server.',
        
        'exp.webdev.title': 'تصميم الويب وتطوير الواجهة الأمامية',
        'exp.webdev.role': 'مشاريع شخصية',
        'exp.webdev.desc': 'مجموعة من تطبيقات الويب الحديثة التي تعرض مناهج تصميم متنوعة وتجارب مستخدم تفاعلية. كل مشروع يُظهر جوانب مختلفة من تطوير الواجهة الأمامية، من التصميم المتجاوب إلى الرسوم المتحركة الديناميكية وابتكار واجهة المستخدم.',
        
        'exp.nibras.title': 'مؤسسة نبراس للتنمية',
        'exp.nibras.role': 'متدرب في الأرشيف',
        'exp.nibras.period': 'مايو 2023 – يونيو 2023',
        'exp.nibras.location': 'تيفلت',
        'exp.nibras.desc': 'في 2023، أنجزت تدريباً لمدة شهر في مؤسسة نبراس للتنمية، حيث طبقت معرفتي في الأرشفة وتنظيم المعلومات، وطورت مهاراتي في أدوات المكتب.',
        
        
        // Projects
        'projects.title': 'المشاريع',
        'projects.subtitle': 'اكتشف محفظة أعمالي الشاملة التي تضم تطبيقات ويب متطورة، حلول سطح مكتب قوية، مشاريع وسائط متعددة إبداعية، ومبادرات اجتماعية مؤثرة. كل مشروع يعكس شغفي بالابتكار والتميز التقني والتجارب الرقمية المعنوية.',
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
        'projects.personal.title': 'البورتفوليو الشخصي',
        'projects.personal.desc': 'بورتفوليو احترافي يعرض مهارات التطوير والمشاريع الإبداعية',
        'projects.dashboard.title': 'واجهة لوحة التحكم',
        'projects.dashboard.desc': 'لوحة تحكم إدارية حديثة مع تحليلات في الوقت الفعلي وتصور البيانات',
        'projects.iphone.title': 'آيفون 13 الديناميكي',
        'projects.iphone.desc': 'صفحة عرض منتج مع تخصيص الألوان التفاعلي والرسوم المتحركة السلسة',
        'projects.adidas.title': 'عرض أديداس',
        'projects.adidas.desc': 'عرض علامة تجارية رياضية بتصميم زجاجي وعروض منتجات ديناميكية',
        'projects.avatar.title': 'أفاتار الغامر',
        'projects.avatar.desc': 'صفحة هبوط غامرة بموضوع الأفلام مع التمرير المتوازي والرسوم المتحركة السينمائية',
        'projects.pizza.title': 'بيتزا ماما',
        'projects.pizza.desc': 'موقع مطعم إيطالي مع نظام طلب عبر الإنترنت وقائمة تفاعلية',
        'projects.techboy.title': 'تيك بوي للتجارة الإلكترونية',
        'projects.techboy.desc': 'منصة تجارة إلكترونية متكاملة',
        'projects.especig.title': 'إسبيسيج',
        'projects.especig.desc': 'نظام إدارة مدرسة بميزات شاملة',
        'projects.docs': 'الوثائق',
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
        'projects.filter.photography': 'التصوير الفوتوغرافي',
        'projects.profile': 'عرض الملف الشخصي',
        'projects.actf.title': 'نادي كرة القدم ACTF',
        'projects.actf.desc': 'تغطية تصويرية منتظمة للاعبين والطاقم وجلسات التدريب لنادي شطاي تيفلت لكرة القدم (2024 - حتى الآن).',
        'projects.citoyens.title': 'حركة المواطنون',
        'projects.category.web': 'ويب',
        'projects.category.desktop': 'سطح المكتب',
        'projects.category.design': 'تصميم',
        'projects.category.photography': 'تصوير',
        'projects.gallery': 'عرض المشاريع',
        'projects.media': 'عرض المشاريع',
        'projects.videos': 'عرض المشاريع',
        'projects.designs': 'عرض المشاريع',
        'projects.reels': 'عرض المشاريع',
        'projects.content': 'عرض المشاريع',
        
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
        'hero.cta3': 'Télécharger CV',
        
        // About
        'about.title': 'À Propos de Moi',
        'about.p1': "Développeur informatique expérimenté, je mets mes compétences techniques au service de projets innovants et sur mesure, en créant des solutions logicielles adaptées aux besoins spécifiques de mes clients. Spécialisé dans le développement d'applications web et d'applications de Bureau, j'utilise des technologies telles que ASP.NET, C# et SQL Server pour offrir des solutions performantes et évolutives.",
        'about.p2': "Engagé dans des initiatives sociales, je collabore activement avec des organisations non gouvernementales pour concevoir des projets ayant un impact concret sur les communautés locales et leur développement.",
        'about.p3': "Passionné par la photographie, le montage vidéo et le design graphique, je combine la technologie et la créativité pour créer des contenus visuels captivants et adaptés aux besoins de chaque projet.",
        'about.languages': 'Langues',
        'about.interests': 'Intérêts',
        'about.lang.arabic': 'Arabe (Natif)',
        'about.lang.german': 'Allemand (Intermédiaire)',
        'about.lang.english': 'Anglais (Basique)',
        'about.lang.french': 'Français (Débutant)',
        'about.int1': 'Développement Web & Logiciel',
        'about.int2': 'Montage Vidéo & Photographie',
        'about.int3': 'Identité Visuelle & Design',
        'about.int4': 'Projets Sociaux & Engagement au sein d\'ONG',

        // Services
        'services.title': 'Services Proposés',
        'services.subtitle': 'Transformer les idées en solutions numériques grâce au développement logiciel, au design et à la créativité',
        'services.web.title': 'Développement Web & Logiciel',
        'services.web.desc': 'Création d\'applications web modernes, réactives et adaptées aux appareils mobiles en utilisant ASP.NET, C#, HTML, CSS, JavaScript et SQL Server.',
        'services.database.title': 'Conception et Modélisation de Bases de Données',
        'services.database.desc': 'Conception et mise en œuvre de bases de données performantes et de systèmes d\'information à l\'aide de SQL Server, Merise et UML.',
        'services.desktop.title': 'Applications de Bureau',
        'services.desktop.desc': 'Développement de logiciels de bureau performants avec C# et .NET Framework, avec des rapports intégrés via Crystal Reports.',
        'services.visual.title': 'Design Visuel & Photographie',
        'services.visual.desc': 'Création d\'identités visuelles, photographie professionnelle et montage vidéo pour des événements, des marques ou des organisations.',
        'services.social.title': 'Gestion des Médias Sociaux',
        'services.social.desc': 'Gestion de contenu pour les réseaux sociaux axée sur l\'amélioration de l\'engagement numérique et la croissance de la présence sociale des initiatives.',
        'services.reports.title': 'Rapports & Documentation',
        'services.reports.desc': 'Création de rapports professionnels et de documentations techniques avec Word, Excel et PowerPoint.',
        
        // Experience
        'exp.title': 'Expériences',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'Projet de fin d\'\u00e9tudes',
        'exp.techboy.location': 'Tiflet, Maroc',
        'exp.techboy.desc': 'Dans le cadre de mon projet de fin d\'\u00e9tudes pour l\'obtention du Diplôme de Technicien Spécialisé (DTS) en Développement Informatique, j\'ai travaillé en groupe avec un collègue pour développer un site web de vente d\'\u00e9lectroniques, nommé Tech Boy. Nous avons conçu et développé ce site de A à Z en utilisant les technologies suivantes : ASP.NET, CSS, HTML, JavaScript, SQL Server, et UML.',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'Stage',
        'exp.especig.period': 'Mai 2024 – Juil 2024',
        'exp.especig.location': 'Tiflet',
        'exp.especig.desc': 'En 2024, j\'ai réalisé un stage de 2 mois à l\'\u00e9cole Especig, où, avec un groupe de collègues, nous avons créé une application de bureau pour la gestion complète d\'une école privée, en utilisant MERISE, C#, SQL Server.',
        
        'exp.webdev.title': 'Conception Web et Développement Front-End',
        'exp.webdev.role': 'Projets personnels',
        'exp.webdev.desc': 'Une collection d\'applications web modernes présentant diverses approches de design et des expériences utilisateur interactives. Chaque projet démontre différents aspects du développement front-end, du design responsive aux animations dynamiques et à l\'innovation d\'interface utilisateur.',
        
        'exp.nibras.title': 'Fondation Nibras pour le développement',
        'exp.nibras.role': 'Stagiaire en Archivage',
        'exp.nibras.period': 'Mai 2023 – Juin 2023',
        'exp.nibras.location': 'Tiflet',
        'exp.nibras.desc': 'En 2023, j\'ai effectué un stage d\'un mois à Fondation Nibras pour le développement, où j\'ai appliqué mes connaissances en archivage et organisation des informations, et j\'ai développé mes compétences en outils bureautiques.',
        
        
        // Projects
        'projects.title': 'Projets',
        'projects.subtitle': 'Découvrez mon portfolio complet présentant des applications web de pointe, des solutions de bureau robustes, des projets multimédias créatifs et des initiatives sociales impactantes. Chaque projet reflète ma passion pour l\'innovation, l\'excellence technique et les expériences numériques significatives.',
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
        'projects.personal.title': 'Portfolio Personnel',
        'projects.personal.desc': 'Portfolio professionnel présentant les compétences de développement et les projets créatifs',
        'projects.dashboard.title': 'Interface Tableau de Bord',
        'projects.dashboard.desc': 'Tableau de bord administratif moderne avec analyses en temps réel et visualisation de données',
        'projects.iphone.title': 'iPhone 13 Dynamique',
        'projects.iphone.desc': 'Page de présentation de produit avec personnalisation interactive des couleurs et animations fluides',
        'projects.adidas.title': 'Vitrine Adidas',
        'projects.adidas.desc': 'Vitrine de marque sportive avec design glassmorphisme et affichages de produits dynamiques',
        'projects.avatar.title': 'Avatar Immersif',
        'projects.avatar.desc': 'Page de destination immersive sur le thème du cinéma avec défilement parallaxe et animations cinématographiques',
        'projects.pizza.title': 'Pizza Mama',
        'projects.pizza.desc': 'Site web de restaurant italien avec système de commande en ligne et menu interactif',
        'projects.techboy.title': 'Tech Boy E-Commerce',
        'projects.techboy.desc': 'Plateforme e-commerce complète',
        'projects.especig.title': 'ESPECIG',
        'projects.especig.desc': 'Système de gestion scolaire avec fonctionnalités complètes',
        'projects.docs': 'Documentation',
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
        'projects.filter.photography': 'Photographie',
        'projects.profile': 'Voir le Profil',
        'projects.actf.title': 'Club de Football ACTF',
        'projects.actf.desc': 'Couverture photographique régulière des joueurs, du personnel et des séances d\'entraînement pour le Club de Football Shatai Tiflet (2024 - présent).',
        'projects.citoyens.title': 'Les Citoyens - Mouvement des Citoyens',
        'projects.category.web': 'Web',
        'projects.category.desktop': 'Bureau',
        'projects.category.design': 'Design',
        'projects.category.photography': 'Photographie',
        'projects.gallery': 'Voir Projets',
        'projects.media': 'Voir Projets',
        'projects.videos': 'Voir Projets',
        'projects.designs': 'Voir Projets',
        'projects.reels': 'Voir Projets',
        'projects.content': 'Voir Projets',
        
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
        'nav.services': 'Dienstleistungen',
        'nav.experience': 'Erfahrung',
        'nav.projects': 'Projekte',
        'nav.skills': 'Fähigkeiten',
        'nav.contact': 'Kontakt',
        
        // Services
        'services.title': 'Angebotene Dienstleistungen',
        'services.subtitle': 'Ideen mit modernster Technologie und kreativen Lösungen in digitale Realität verwandeln',
        'services.web.title': 'Web- & Software-Entwicklung',
        'services.web.desc': 'Erstellung moderner, responsiver und mobilfreundlicher Webanwendungen mit ASP.NET, C#, HTML, CSS, JavaScript und SQL Server.',
        'services.database.title': 'Datenbankdesign',
        'services.database.desc': 'Entwurf und Implementierung leistungsstarker Datenbanken und Informationssysteme mit SQL Server, Merise und UML.',
        'services.desktop.title': 'Desktop-Anwendungen',
        'services.desktop.desc': 'Entwicklung leistungsstarker Desktop-Software mit C# und .NET Framework, mit integrierten Berichten über Crystal Reports.',
        'services.visual.title': 'Visuelles Design & Fotografie',
        'services.visual.desc': 'Erstellung visueller Identitäten, professionelle Fotografie und Videobearbeitung für Veranstaltungen, Marken oder Organisationen.',
        'services.social.title': 'Social Media Management',
        'services.social.desc': 'Content-Management für soziale Medien mit Fokus auf die Steigerung des digitalen Engagements und das Wachstum der sozialen Präsenz von Initiativen.',
        'services.reports.title': 'Berichte & Dokumentation',
        'services.reports.desc': 'Erstellung professioneller Berichte und technischer Dokumentation mit Word, Excel und PowerPoint.',
        
        // Hero
        'hero.greeting': 'Hallo, ich bin Oussama Elbouqi',
        'hero.title': 'Informatik-Entwickler',
        'hero.location': 'Tiflet, Marokko',
        'hero.cta1': 'Kontakt Aufnehmen',
        'hero.cta2': 'Projekte Ansehen',
        'hero.cta3': 'Lebenslauf Herunterladen',
        
        // About
        'about.title': 'Über Mich',
        'about.p1': 'Als erfahrener Informatik-Entwickler setze ich meine technischen Fähigkeiten für innovative und maßgeschneiderte Projekte ein und erstelle Software-Lösungen, die auf die spezifischen Bedürfnisse meiner Kunden zugeschnitten sind. Spezialisiert auf die Entwicklung von Webanwendungen und Desktop-Anwendungen, verwende ich Technologien wie ASP.NET, C# und SQL Server, um leistungsstarke und skalierbare Lösungen zu liefern.',
        'about.p2': 'Engagiert in sozialen Initiativen arbeite ich aktiv mit Nichtregierungsorganisationen zusammen, um Projekte zu entwerfen, die eine konkrete Wirkung auf lokale Gemeinschaften und ihre Entwicklung haben.',
        'about.p3': 'Leidenschaftlich für Fotografie, Videobearbeitung und Grafikdesign kombiniere ich Technologie und Kreativität, um fesselnde visuelle Inhalte zu schaffen, die auf die Bedürfnisse jedes Projekts zugeschnitten sind.',
        'about.languages': 'Sprachen',
        'about.interests': 'Interessen',
        'about.lang.arabic': 'Arabisch (Muttersprache)',
        'about.lang.german': 'Deutsch (Mittelstufe)',
        'about.lang.english': 'Englisch (Grundkenntnisse)',
        'about.lang.french': 'Französisch (Anfänger)',
        'about.int1': 'Web- & Software-Entwicklung',
        'about.int2': 'Videobearbeitung & Fotografie',
        'about.int3': 'Visuelle Identität & Design',
        'about.int4': 'Soziale Projekte & NGO-Engagement',
        
        // Experience
        'exp.title': 'Erfahrungen',
        'exp.techboy.title': 'TECHBOY',
        'exp.techboy.role': 'Abschlussprojekt',
        'exp.techboy.location': 'Tiflet, Marokko',
        'exp.techboy.desc': 'Im Rahmen meines Abschlussprojekts für das Diplom als Spezialisierter Techniker (DTS) in Informatikentwicklung arbeitete ich in einer Gruppe mit einem Kollegen an der Entwicklung einer E-Commerce-Website namens Tech Boy. Wir haben diese Website von A bis Z entworfen und entwickelt unter Verwendung folgender Technologien: ASP.NET, CSS, HTML, JavaScript, SQL Server und UML.',
        
        'exp.especig.title': 'ESPECIG',
        'exp.especig.role': 'Praktikum',
        'exp.especig.period': 'Mai 2024 – Jul 2024',
        'exp.especig.location': 'Tiflet',
        'exp.especig.desc': 'Im Jahr 2024 absolvierte ich ein 2-monatiges Praktikum an der Especig-Schule, wo wir mit einer Gruppe von Kollegen eine Desktop-Anwendung für die vollständige Verwaltung einer Privatschule erstellten, unter Verwendung von MERISE, C#, SQL Server.',
        
        'exp.webdev.title': 'Webdesign und Front-End-Entwicklung',
        'exp.webdev.role': 'Persönliche Projekte',
        'exp.webdev.desc': 'Eine Sammlung moderner Webanwendungen, die vielfältige Designansätze und interaktive Benutzererfahrungen präsentiert. Jedes Projekt demonstriert verschiedene Aspekte der Front-End-Entwicklung, von responsivem Design bis hin zu dynamischen Animationen und Benutzeroberflächen-Innovation.',
        
        'exp.nibras.title': 'Fondation Nibras pour le développement',
        'exp.nibras.role': 'Archiv-Praktikant',
        'exp.nibras.period': 'Mai 2023 – Jun 2023',
        'exp.nibras.location': 'Tiflet',
        'exp.nibras.desc': 'Im Jahr 2023 absolvierte ich ein einmonatiges Praktikum bei der Fondation Nibras für Entwicklung, wo ich meine Kenntnisse in Archivierung und Informationsorganisation anwandte und meine Fähigkeiten in Bürotools entwickelte.',
        
        
        // Projects
        'projects.title': 'Projekte',
        'projects.subtitle': 'Entdecken Sie mein umfassendes Portfolio mit modernsten Webanwendungen, robusten Desktop-Lösungen, kreativen Multimedia-Projekten und wirkungsvollen sozialen Initiativen. Jedes Projekt spiegelt meine Leidenschaft für Innovation, technische Exzellenz und bedeutungsvolle digitale Erfahrungen wider.',
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
        'projects.personal.title': 'Persönliches Portfolio',
        'projects.personal.desc': 'Professionelles Portfolio zur Präsentation von Entwicklungsfähigkeiten und kreativen Projekten',
        'projects.dashboard.title': 'Dashboard-Oberfläche',
        'projects.dashboard.desc': 'Modernes Admin-Dashboard mit Echtzeit-Analysen und Datenvisualisierung',
        'projects.iphone.title': 'iPhone 13 Dynamisch',
        'projects.iphone.desc': 'Produkt-Showcase-Seite mit interaktiver Farbanpassung und sanften Animationen',
        'projects.adidas.title': 'Adidas Showcase',
        'projects.adidas.desc': 'Sportmarken-Showcase mit Glassmorphismus-Design und dynamischen Produktanzeigen',
        'projects.avatar.title': 'Avatar Immersiv',
        'projects.avatar.desc': 'Immersive filmthematische Landing Page mit Parallax-Scrolling und kinoreifen Animationen',
        'projects.pizza.title': 'Pizza Mama',
        'projects.pizza.desc': 'Italienische Restaurant-Website mit Online-Bestellsystem und interaktivem Menü',
        'projects.techboy.title': 'Tech Boy E-Commerce',
        'projects.techboy.desc': 'Vollständige E-Commerce-Plattform',
        'projects.especig.title': 'ESPECIG',
        'projects.especig.desc': 'Schulverwaltungssystem mit umfassenden Funktionen',
        'projects.docs': 'Dokumentation',
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
        'projects.filter.photography': 'Fotografie',
        'projects.profile': 'Profil Ansehen',
        'projects.actf.title': 'ACTF Fußballverein',
        'projects.actf.desc': 'Regelmäßige fotografische Berichterstattung über Spieler, Personal und Trainingseinheiten für den Shatai Tiflet Fußballverein (2024 - heute).',
        'projects.citoyens.title': 'Die Bürgerbewegung',
        'projects.category.web': 'Web',
        'projects.category.desktop': 'Desktop',
        'projects.category.design': 'Design',
        'projects.category.photography': 'Fotografie',
        'projects.gallery': 'Projekte Ansehen',
        'projects.media': 'Projekte Ansehen',
        'projects.videos': 'Projekte Ansehen',
        'projects.designs': 'Projekte Ansehen',
        'projects.reels': 'Projekte Ansehen',
        'projects.content': 'Projekte Ansehen',
        
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
