/**
 * [INPUT]: 依赖 Muse Video 六类预览工作流 taxonomy 与 14 语人工译文
 * [OUTPUT]: 对外提供按分类 slug 与 locale 查询说明的 workflowDescription 函数
 * [POS]: scripts/utils 的分类文案边界，确保视频案例按真实导演意图组织
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const DESCRIPTIONS: Record<string, Record<string, string>> = {
  "physical-motion-temporal-consistency": {
    en: "Motion briefs that test weight, contact, acceleration, balance, and continuity across time.",
    es: "Briefs de movimiento que ponen a prueba peso, contacto, aceleración, equilibrio y continuidad temporal.",
    pt: "Briefings de movimento que testam peso, contacto, aceleração, equilíbrio e continuidade temporal.",
    it: "Brief di movimento che verificano peso, contatto, accelerazione, equilibrio e continuità nel tempo.",
    de: "Bewegungsbriefings zu Gewicht, Kontakt, Beschleunigung, Gleichgewicht und zeitlicher Kontinuität.",
    fr: "Briefs de mouvement qui testent poids, contact, accélération, équilibre et continuité temporelle.",
    ar: "موجزات حركة تختبر الوزن والتلامس والتسارع والتوازن والاستمرارية عبر الزمن.",
    ja: "重さ、接触、加速、バランス、時間的連続性を検証する動きのブリーフ。",
    ko: "무게, 접촉, 가속, 균형과 시간적 연속성을 시험하는 모션 브리프입니다.",
    zh: "检验重量、接触、加速度、平衡与时间连续性的运动简报。",
    nl: "Bewegingsbriefings die gewicht, contact, versnelling, balans en temporele continuïteit testen.",
    ru: "Брифы движения для проверки веса, контакта, ускорения, баланса и непрерывности во времени.",
    tr: "Ağırlık, temas, ivme, denge ve zamansal sürekliliği sınayan hareket brifleri.",
    pl: "Briefy ruchu sprawdzające ciężar, kontakt, przyspieszenie, równowagę i ciągłość w czasie."
  },
  "animals-counting-subject-continuity": {
    en: "Cases that keep animal identity, subject count, anatomy, and spatial relationships stable through motion.",
    es: "Casos que mantienen estables la identidad animal, el número de sujetos, la anatomía y las relaciones espaciales.",
    pt: "Casos que mantêm estáveis a identidade animal, a contagem, a anatomia e as relações espaciais.",
    it: "Casi che mantengono stabili identità animale, numero di soggetti, anatomia e relazioni spaziali.",
    de: "Fälle, die Tieridentität, Anzahl, Anatomie und räumliche Beziehungen während der Bewegung stabil halten.",
    fr: "Cas qui préservent l'identité animale, le nombre de sujets, l'anatomie et les relations spatiales.",
    ar: "حالات تحافظ على هوية الحيوان وعدد العناصر والتشريح والعلاقات المكانية أثناء الحركة.",
    ja: "動きの中で動物の同一性、個体数、解剖、空間関係を維持する事例。",
    ko: "움직임 동안 동물의 정체성, 개체 수, 해부학과 공간 관계를 유지하는 사례입니다.",
    zh: "在运动中保持动物身份、主体数量、解剖结构与空间关系稳定的案例。",
    nl: "Cases die dieridentiteit, aantallen, anatomie en ruimtelijke relaties tijdens beweging stabiel houden.",
    ru: "Примеры с сохранением идентичности животных, числа объектов, анатомии и пространственных связей.",
    tr: "Hareket boyunca hayvan kimliğini, özne sayısını, anatomiyi ve mekânsal ilişkileri sabit tutan örnekler.",
    pl: "Przypadki zachowujące tożsamość zwierząt, liczbę obiektów, anatomię i relacje przestrzenne."
  },
  "native-audio-dialogue-foley": {
    en: "Prompts where dialogue, performance, ambience, music, or synchronized foley is part of the shot design.",
    es: "Prompts donde diálogo, interpretación, ambiente, música o foley sincronizado forman parte del plano.",
    pt: "Prompts em que diálogo, interpretação, ambiente, música ou foley sincronizado fazem parte do plano.",
    it: "Prompt in cui dialogo, interpretazione, atmosfera, musica o foley sincronizzato fanno parte della regia.",
    de: "Prompts, in denen Dialog, Spiel, Atmosphäre, Musik oder synchroner Foley-Ton zur Einstellung gehören.",
    fr: "Prompts où dialogue, jeu, ambiance, musique ou bruitage synchronisé font partie du plan.",
    ar: "مطالبات يكون فيها الحوار أو الأداء أو الأجواء أو الموسيقى أو المؤثرات المتزامنة جزءًا من تصميم اللقطة.",
    ja: "台詞、演技、環境音、音楽、同期フォーリーをショット設計に含めるプロンプト。",
    ko: "대사, 연기, 분위기음, 음악 또는 동기화된 폴리가 샷 설계에 포함되는 프롬프트입니다.",
    zh: "把对白、表演、环境声、音乐或同步拟音纳入镜头设计的提示词。",
    nl: "Prompts waarin dialoog, spel, ambiance, muziek of gesynchroniseerde foley deel uitmaakt van het shotontwerp.",
    ru: "Промпты, где диалог, игра, атмосфера, музыка или синхронный фоли входят в режиссуру кадра.",
    tr: "Diyalog, performans, ambiyans, müzik veya senkron foley'in çekim tasarımına dahil olduğu promptlar.",
    pl: "Prompty, w których dialog, gra, atmosfera, muzyka lub zsynchronizowany foley są częścią projektu ujęcia."
  },
  "camera-language-immersive-pov": {
    en: "Shot briefs built around camera path, framing, perspective, reveals, and first-person immersion.",
    es: "Briefs construidos alrededor del recorrido de cámara, encuadre, perspectiva, revelaciones e inmersión subjetiva.",
    pt: "Briefings centrados no percurso da câmara, enquadramento, perspetiva, revelações e imersão na primeira pessoa.",
    it: "Brief costruiti su percorso camera, inquadratura, prospettiva, rivelazioni e immersione in prima persona.",
    de: "Shot-Briefings zu Kamerapfad, Bildausschnitt, Perspektive, Enthüllungen und Ich-Perspektive.",
    fr: "Briefs fondés sur le trajet caméra, le cadrage, la perspective, les révélations et l'immersion subjective.",
    ar: "موجزات لقطات تتمحور حول مسار الكاميرا والتأطير والمنظور والكشف والانغماس من منظور الشخص الأول.",
    ja: "カメラパス、構図、視点、見せ場、一人称の没入感を軸にしたショットブリーフ。",
    ko: "카메라 경로, 프레이밍, 시점, 공개 연출과 1인칭 몰입을 중심으로 한 샷 브리프입니다.",
    zh: "围绕镜头路径、构图、视角、揭示与第一人称沉浸设计的镜头简报。",
    nl: "Shotbriefings rond camerapad, kadrering, perspectief, onthullingen en first-person immersie.",
    ru: "Брифы кадров на основе маршрута камеры, композиции, перспективы, раскрытий и эффекта первого лица.",
    tr: "Kamera yolu, kadraj, perspektif, açığa çıkarma ve birinci şahıs sürükleyiciliği etrafında kurulan çekim brifleri.",
    pl: "Briefy ujęć oparte na trasie kamery, kadrowaniu, perspektywie, ujawnieniach i immersji pierwszoosobowej."
  },
  "commercial-story-beats-product-motion": {
    en: "Commercial briefs with a clear product, audience, sequence of beats, motion plan, and finishing frame.",
    es: "Briefs comerciales con producto, público, secuencia de beats, plan de movimiento y plano final claros.",
    pt: "Briefings comerciais com produto, público, sequência de momentos, plano de movimento e quadro final definidos.",
    it: "Brief commerciali con prodotto, pubblico, sequenza di beat, piano di movimento e fotogramma finale chiari.",
    de: "Werbebriefings mit klarem Produkt, Publikum, Ablauf, Bewegungsplan und Schlussbild.",
    fr: "Briefs publicitaires avec produit, public, séquence de temps forts, mouvement et plan final clairement définis.",
    ar: "موجزات تجارية تحدد المنتج والجمهور وتسلسل اللحظات وخطة الحركة والإطار الختامي.",
    ja: "製品、対象者、展開、動き、最終フレームを明確にした広告ブリーフ。",
    ko: "제품, 대상, 비트 순서, 모션 계획과 마지막 프레임이 명확한 광고 브리프입니다.",
    zh: "明确产品、受众、叙事节拍、运动方案与收尾画面的商业简报。",
    nl: "Commerciële briefings met een duidelijk product, publiek, beatvolgorde, bewegingsplan en eindbeeld.",
    ru: "Рекламные брифы с чётким продуктом, аудиторией, последовательностью битов, движением и финальным кадром.",
    tr: "Ürünü, kitleyi, vurgu sırasını, hareket planını ve bitiş karesini açıkça tanımlayan ticari brifler.",
    pl: "Briefy komercyjne z jasno określonym produktem, odbiorcą, sekwencją beatów, ruchem i kadrem końcowym."
  },
  "stylized-animation-educational-motion": {
    en: "Animation and explanatory motion driven by a defined medium, transformation rule, or visual teaching sequence.",
    es: "Animación y movimiento explicativo guiados por un medio, una regla de transformación o una secuencia didáctica.",
    pt: "Animação e movimento explicativo guiados por um meio, uma regra de transformação ou uma sequência didática.",
    it: "Animazione e motion esplicativo guidati da un medium, una regola di trasformazione o una sequenza didattica.",
    de: "Animation und erklärende Bewegung mit definiertem Medium, Transformationsregel oder visueller Lehrsequenz.",
    fr: "Animation et mouvement explicatif guidés par un médium, une règle de transformation ou une séquence pédagogique.",
    ar: "رسوم متحركة وحركة تفسيرية تقودها خامة محددة أو قاعدة تحول أو تسلسل بصري تعليمي.",
    ja: "媒体表現、変形規則、視覚的な説明順序を明確にしたアニメーション。",
    ko: "정해진 매체, 변형 규칙 또는 시각적 교육 순서로 구성된 애니메이션과 설명형 모션입니다.",
    zh: "由明确媒介、变形规则或视觉教学序列驱动的动画与说明性运动。",
    nl: "Animatie en verklarende beweging op basis van een bepaald medium, transformatieregel of visuele leervolgorde.",
    ru: "Анимация и объясняющее движение с заданной средой, правилом трансформации или учебной последовательностью.",
    tr: "Belirli bir medya, dönüşüm kuralı veya görsel öğretim dizisiyle yönlendirilen animasyon ve açıklayıcı hareket.",
    pl: "Animacja i ruch objaśniający oparte na określonym medium, regule transformacji lub sekwencji dydaktycznej."
  }
};

export function workflowDescription(slug: string, locale: string): string {
  return DESCRIPTIONS[slug]?.[locale] || DESCRIPTIONS[slug]?.en || "";
}
