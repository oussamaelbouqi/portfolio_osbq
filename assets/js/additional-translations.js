// Additional translations for missing project cards
document.addEventListener('DOMContentLoaded', () => {
  // Wait for language manager to be initialized
  setTimeout(() => {
    if (window.languageManager && window.languageManager.translations) {
      // Add missing translations to existing language manager
      
      // English translations
      Object.assign(window.languageManager.translations.en, {
        'projects.citoyens.desc': 'Short video production and reels creation for the Citizens Movement, focusing on social and political awareness content.',
        'projects.tyln.title': 'TYLN (Tiflet Young Leaders)',
        'projects.tyln.desc': 'Photography and event coverage - Leadership Academy, Education, Orientation Forum, Entrepreneurs Academy, Open Doors Days (2023 - present).',
        'projects.tyln2.title': 'TYLN (Tiflet Young Leaders)',
        'projects.tyln2.desc': 'Reels creation and visual content design for Leadership Academy, Education, Orientation Forum, Entrepreneurs Academy, Open Doors Days (2023 - present).',
        'projects.nibras.title': 'Fondation Nibras',
        'projects.nibras.desc': 'Production of promotional videos for training programs + Instagram page management (photography, editing, design).',
        'projects.anass.title': 'Center Anass',
        'projects.anass.desc': 'During two months, I was responsible for creating stories, designs and promotional videos for the Instagram page, as well as complete management of the page.',
        'projects.lik.title': 'LIK Initiative',
        'projects.lik.desc': 'Coverage and visual content creation for solidarity events: Basma caravan (humanitarian caravan), Blood donation campaign, Circumcision campaign (2023 - 2024).'
      });
      
      // Arabic translations
      Object.assign(window.languageManager.translations.ar, {
        'projects.citoyens.desc': 'إنتاج فيديوهات قصيرة وإنشاء ريلز لحركة المواطنون، مع التركيز على محتوى التوعية الاجتماعية والسياسية.',
        'projects.tyln.title': 'شبكة الرواد الشباب تيفلت',
        'projects.tyln.desc': 'تغطية تصويرية وتغطية الأحداث - أكاديمية القيادة، التعليم، منتدى التوجيه، أكاديمية رواد الأعمال، أيام الأبواب المفتوحة (2023 - حتى الآن).',
        'projects.tyln2.title': 'شبكة الرواد الشباب تيفلت',
        'projects.tyln2.desc': 'إنشاء ريلز وتصميم محتوى بصري لأكاديمية القيادة، التعليم، منتدى التوجيه، أكاديمية رواد الأعمال، أيام الأبواب المفتوحة (2023 - حتى الآن).',
        'projects.nibras.title': 'مؤسسة نبراس',
        'projects.nibras.desc': 'إنتاج فيديوهات ترويجية لبرامج التدريب + إدارة صفحة إنستغرام (تصوير، تحرير، تصميم).',
        'projects.anass.title': 'مركز أنس',
        'projects.anass.desc': 'خلال شهرين، كنت مسؤولاً عن إنشاء القصص والتصاميم والفيديوهات الترويجية لصفحة إنستغرام، بالإضافة إلى الإدارة الكاملة للصفحة.',
        'projects.lik.title': 'مبادرة ليك',
        'projects.lik.desc': 'تغطية وإنشاء محتوى بصري لفعاليات التضامن: قافلة بسمة (قافلة إنسانية)، حملة التبرع بالدم، حملة الختان (2023 - 2024).'
      });
      
      // French translations
      Object.assign(window.languageManager.translations.fr, {
        'projects.citoyens.desc': 'Production de vidéos courtes et création de reels pour le Mouvement des Citoyens, axé sur le contenu de sensibilisation sociale et politique.',
        'projects.tyln.title': 'TYLN (Tiflet Young Leaders)',
        'projects.tyln.desc': 'Photographie et couverture d\'événements - Académie de Leadership, Éducation, Forum d\'Orientation, Académie des Entrepreneurs, Journées Portes Ouvertes (2023 - présent).',
        'projects.tyln2.title': 'TYLN (Tiflet Young Leaders)',
        'projects.tyln2.desc': 'Création de reels et conception de contenu visuel pour l\'Académie de Leadership, Éducation, Forum d\'Orientation, Académie des Entrepreneurs, Journées Portes Ouvertes (2023 - présent).',
        'projects.nibras.title': 'Fondation Nibras',
        'projects.nibras.desc': 'Production de vidéos promotionnelles pour les programmes de formation + gestion de page Instagram (photographie, montage, design).',
        'projects.anass.title': 'Centre Anass',
        'projects.anass.desc': 'Pendant deux mois, j\'étais responsable de la création d\'histoires, de designs et de vidéos promotionnelles pour la page Instagram, ainsi que de la gestion complète de la page.',
        'projects.lik.title': 'Initiative LIK',
        'projects.lik.desc': 'Couverture et création de contenu visuel pour les événements de solidarité : caravane Basma (caravane humanitaire), campagne de don de sang, campagne de circoncision (2023 - 2024).'
      });
      
      // German translations
      Object.assign(window.languageManager.translations.de, {
        'projects.citoyens.desc': 'Kurze Videoproduktion und Reels-Erstellung für die Bürgerbewegung, mit Fokus auf soziale und politische Aufklärungsinhalte.',
        'projects.tyln.title': 'TYLN (Tiflet Young Leaders)',
        'projects.tyln.desc': 'Fotografie und Veranstaltungsberichterstattung - Leadership Academy, Bildung, Orientierungsforum, Entrepreneurs Academy, Tage der offenen Tür (2023 - heute).',
        'projects.tyln2.title': 'TYLN (Tiflet Young Leaders)',
        'projects.tyln2.desc': 'Reels-Erstellung und visuelles Content-Design für Leadership Academy, Bildung, Orientierungsforum, Entrepreneurs Academy, Tage der offenen Tür (2023 - heute).',
        'projects.nibras.title': 'Fondation Nibras',
        'projects.nibras.desc': 'Produktion von Werbevideos für Trainingsprogramme + Instagram-Seitenverwaltung (Fotografie, Bearbeitung, Design).',
        'projects.anass.title': 'Center Anass',
        'projects.anass.desc': 'Zwei Monate lang war ich verantwortlich für die Erstellung von Stories, Designs und Werbevideos für die Instagram-Seite sowie die komplette Verwaltung der Seite.',
        'projects.lik.title': 'LIK Initiative',
        'projects.lik.desc': 'Berichterstattung und visuelle Inhaltserstellung für Solidaritätsveranstaltungen: Basma-Karawane (humanitäre Karawane), Blutspendekampagne, Beschneidungskampagne (2023 - 2024).'
      });
      
      // Re-apply current language to update the translations
      if (window.languageManager.currentLang) {
        window.languageManager.applyLanguage(window.languageManager.currentLang);
      }
      
      console.log('Additional translations loaded successfully!');
    }
  }, 1000);
});
