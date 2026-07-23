<a href="https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills">
  <img src="public/images/muse-video-prompt-skills-cover.png" alt="Muse Video Prompt Skills" width="100%" />
</a>

> Muse Video를 위한 출처 검증형 샷 브리프, 모션 패턴, 시청각 워크플로 라이브러리입니다.
# Awesome Muse Video 프롬프트 및 스킬

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-muse-video-prompts-and-skills?style=social)](https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills/actions/workflows/update-readme.yml/badge.svg)](https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> 브리프를 연구하고 결과를 확인하며 제작자를 추적하세요. 표면적인 스타일을 복사하는 대신 연출 논리를 재사용하세요.

> **출처 표시 및 수정:** 게시된 각 사례는 제작자와 정식 출처로 연결됩니다. 권리는 각 소유자에게 있습니다. 출처 표시 변경이나 삭제는 issue를 열어 요청하세요.

---

[![English](https://img.shields.io/badge/English-Click%20to%20View-lightgrey)](README.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Click%20to%20View-lightgrey)](README.es.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Click%20to%20View-lightgrey)](README.pt.md) [![Italiano](https://img.shields.io/badge/Italiano-Click%20to%20View-lightgrey)](README.it.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Click%20to%20View-lightgrey)](README.de.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Click%20to%20View-lightgrey)](README.fr.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Click%20to%20View-lightgrey)](README.ar.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Click%20to%20View-lightgrey)](README.ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Current-brightgreen)](README.ko.md) [![中文](https://img.shields.io/badge/%E4%B8%AD%E6%96%87-Click%20to%20View-lightgrey)](README.zh.md)
[![Nederlands](https://img.shields.io/badge/Nederlands-Click%20to%20View-lightgrey)](README.nl.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Click%20to%20View-lightgrey)](README.ru.md) [![Türkçe](https://img.shields.io/badge/T%C3%BCrk%C3%A7e-Click%20to%20View-lightgrey)](README.tr.md) [![Polski](https://img.shields.io/badge/Polski-Click%20to%20View-lightgrey)](README.pl.md)

---

## Muse Video로 만들기

**[ImagineVid에서 Muse Video 워크플로 열기](https://imaginevid.io/ko/reference-video)**

이 저장소에서 제작자의 지시와 그 결과로 나온 움직임을 비교하세요. 샷 문법을 새 클립에 적용할 준비가 되면 ImagineVid를 여세요.

인기는 근거가 아닙니다. 완전한 프롬프트와 유용한 비디오가 있는 낮은 참여도의 게시물이 재현 가능한 연출이 없는 바이럴 쇼케이스보다 우선될 수 있습니다.

| 제작 요구 | 근거 라이브러리 | ImagineVid 워크플로 |
|---------|--------------|---------------------|
| 사례 검토 | 프롬프트, 결과, 출처 | 생성 및 비교 |
| 탐색 | 저장소 텍스트 검색 | 워크플로 중심 탐색 |
| 생성 | - | Muse Video 열기 |
| 읽기 | GitHub 네이티브 Markdown | 브라우저 제작 작업 공간 |
| 비디오 워크플로 | - | 제작 필터 |


### 제작 워크플로별 탐색

- [**물리적 움직임 및 시간 일관성**](#workflow-physical-motion-temporal-consistency) - 무게, 접촉, 가속, 균형과 시간적 연속성을 시험하는 모션 브리프입니다.
- [**동물, 개수 및 피사체 연속성**](#workflow-animals-counting-subject-continuity) - 움직임 동안 동물의 정체성, 개체 수, 해부학과 공간 관계를 유지하는 사례입니다.
- [**네이티브 오디오, 대사 및 폴리**](#workflow-native-audio-dialogue-foley) - 대사, 연기, 분위기음, 음악 또는 동기화된 폴리가 샷 설계에 포함되는 프롬프트입니다.
- [**카메라 언어 및 몰입형 POV**](#workflow-camera-language-immersive-pov) - 카메라 경로, 프레이밍, 시점, 공개 연출과 1인칭 몰입을 중심으로 한 샷 브리프입니다.
- [**광고 비트 및 제품 모션**](#workflow-commercial-story-beats-product-motion) - 제품, 대상, 비트 순서, 모션 계획과 마지막 프레임이 명확한 광고 브리프입니다.
- [**스타일 애니메이션 및 교육 모션**](#workflow-stylized-animation-educational-motion) - 정해진 매체, 변형 규칙 또는 시각적 교육 순서로 구성된 애니메이션과 설명형 모션입니다.

---

## 목차

- [Muse Video로 만들기](#muse-video로-만들기)
- [Muse Video란?](#muse-video란)
- [공식 미리보기 사례](#official-capability-cases)
- [컬렉션 상태](#컬렉션-상태)
- [추천 비디오 프롬프트](#community-featured-prompts)
- [비디오 프롬프트 워크플로](#community-prompt-cases)
- [검증된 사례 기여하기](#검증된-사례-기여하기)
- [라이선스](#라이선스)
- [제작자 크레딧](#제작자-크레딧)
- [저장소 성장](#저장소-성장)

---

## Muse Video란?

**Muse Video**는 Meta가 2026년 7월 미리 공개한 차세대 비디오 생성 모델입니다. Muse Image와 같은 사전 학습 기반을 공유하며, 네이티브 오디오가 포함된 비디오 생성, 상세 프롬프트 이행, 시각적·시간적 일관성을 목표로 합니다. Meta는 크리에이터와 Meta AI에 곧 제공될 예정이라고 설명했으며, 일반 공개 API로 발표하지 않았습니다. 또한 오디오·비디오 동기화와 빠른 움직임의 물리적 정확성에는 여전히 한계가 있다고 밝혔습니다.

아래 사례는 보이는 동작, 카메라, 타이밍, 사운드, 연속성 제약, 증거 영상을 하나의 제작 브리프로 묶습니다.

- **텍스트나 프레임에서 시작** - 글로 쓴 장면에서 생성하거나 이미 구도를 담고 있는 이미지에 움직임을 부여하세요
- **관찰 가능한 움직임을 연출** - 각 동작의 블로킹, 운동량, 객체 간 상호작용, 물리적 결과를 설명하세요
- **시놉시스가 아니라 비트를 작성** - 타이밍과 공개 순서가 중요할 때 타임스탬프나 짧은 동작 시퀀스를 사용하세요
- **장면과 함께 사운드를 생성** - 오디오가 스토리텔링의 일부라면 대사, 분위기음, 음악 또는 효과음을 포함하세요
- **정확한 수와 정체성을 고정** - 유지해야 할 인물, 얼굴, 물체와 공간 관계를 명시하세요
- **연속성을 명시적으로 보호** - 변형되어서는 안 되는 얼굴, 제품의 형태, 레이아웃, 의상 또는 배경을 밝혀 두세요

**현재 참고 자료:** [Meta AI engineering overview](https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/) · [Meta product announcement](https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/) · [Create videos on ImagineVid](https://imaginevid.io/ko/reference-video)

### 프롬프트를 샷 템플릿으로 바꾸기

재사용 가능한 비디오 프롬프트는 장면 변수와 연출 논리를 분리합니다. 검증된 카메라 경로, 비트 구조, 사운드 계획, 연속성 규칙은 유지하면서 주제, 배경, 대사 또는 제품을 바꾸세요.

**템플릿 패턴:**
```
[DURATION + ASPECT RATIO]. [SUBJECT]가 [SETTING]에서 [VISIBLE ACTION]을 수행한다. Camera: [FRAMING + MOVE]. Beats: [TIMED ACTIONS]. Audio: [DIALOGUE + FOLEY + AMBIENCE]. Preserve: [IDENTITY / PRODUCT / LAYOUT]. Avoid: [FAILURE MODES].
```

동작 하나와 카메라 아이디어 하나로 시작하세요. 눈에 보이는 제작 요구를 해결할 때만 타이밍, 오디오, 보존 제약을 추가하고, 생성 간에는 한 번에 변수 하나만 바꾸세요.

---

<a id="official-capability-cases"></a>

## 공식 미리보기 사례

> 공식 미리보기의 재생 가능한 영상입니다. 제목은 번역하고 공식 프롬프트는 검증을 위해 영어 원문을 유지합니다.

<a id="official-official-preview-clips"></a>

### Official Muse Video Preview Clips

Playable clips published by Meta and Alexandr Wang during the July 7, 2026 preview. Muse Video was still described as coming soon, not generally available.

<a id="official-case-1"></a>

#### 사례 1: Elephant at a dinner party

<img src="https://pbs.twimg.com/amplify_video_thumb/2074556635603673089/img/JlQfo2X6eAfl_d_g.jpg" height="360" alt="Elephant at a dinner party">

**공식 원문 프롬프트(영어):**

```
Editorial reconstruction from the official preview: keep a full-size elephant, six guests, table setting, room geometry, reactions, and warm practical light coherent in one comic dinner-party shot.
```

---

<a id="official-case-2"></a>

#### 사례 2: Baby panda tumbling down a grassy slope

<img src="https://pbs.twimg.com/amplify_video_thumb/2074556657825202177/img/imtmutX_DBSPjify.jpg" height="360" alt="Baby panda tumbling down a grassy slope">

**공식 원문 프롬프트(영어):**

```
A baby panda tumbling head over heels down a small grassy slope.
```

---

<a id="official-case-3"></a>

#### 사례 3: Four-orange juggling failure and bow

<img src="https://pbs.twimg.com/amplify_video_thumb/2074598559400247296/img/9mkUTmS0L1VPbKLA.jpg" height="360" alt="Four-orange juggling failure and bow">

**공식 원문 프롬프트(영어):**

```
A man juggles three oranges, adds a fourth, drops them all, and takes a bow anyway. Warm natural morning light, gentle slow motion, one continuous approximately ten-second moment, quiet room tone, and crisp foley.
```

---

<a id="official-case-4"></a>

#### 사례 4: Exactly five ducklings climb a step

<img src="https://pbs.twimg.com/amplify_video_thumb/2074598584318611457/img/WJT3hrQ12GcGf2Ij.jpg" height="360" alt="Exactly five ducklings climb a step">

**공식 원문 프롬프트(영어):**

```
A mother duck leads exactly five ducklings toward a curb; the fifth struggles, then hops up to rejoin the same group. Never add, remove, or duplicate a duckling.
```

---

<a id="official-case-5"></a>

#### 사례 5: Immersive half-frozen pond walk

<img src="https://pbs.twimg.com/amplify_video_thumb/2074599574837108737/img/xUm1Xaq31lQ8ggjj.jpg" height="360" alt="Immersive half-frozen pond walk">

**공식 원문 프롬프트(영어):**

```
First-person night walk beside a half-frozen pond in falling snow, with warm lamplight on dark water, natural handheld gait, footsteps, breeze, reeds, and quiet winter ambience.
```

---

## 컬렉션 상태

<div align="center">

| 컬렉션 필드 | 현재 값 |
|--------|-------|
| 검증된 사례 | **7** |
| 에디터 추천 | **5** |
| 생성 시각 | **2026년 7월 23일 목요일 오후 5시 23분 40초 UTC** |

</div>

---

<a id="community-featured-prompts"></a>

## 추천 비디오 프롬프트

> 재현성, 움직임의 명확성, 제작 유용성을 기준으로 선정

<a id="prompt-1"></a>

### #1: 어색한 만찬의 코끼리

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 이 워크플로가 중요한 이유

공식 미리보기 장면을 재구성해 크기, 가림, 반응, 실내 연속성을 시험합니다.

#### 현지화 프롬프트

```
격식 있는 저녁 식사가 열리는 작고 따뜻한 조명의 식당 안에 실사 같은 코끼리가 뜻밖에도 서 있다. 성인 여섯 명이 구운 요리, 촛불, 꽃, 와인 잔이 놓인 테이블에 둘러앉아 있다. 코끼리는 벽이나 가구를 부수지 않은 채 방 뒤편을 가득 채우고 코를 앞으로 뻗는다. 손님들은 코끼리를 알아차리고 절제된 놀라움에서 웃음으로 반응한다. 눈높이의 단일 연속 샷, 미세한 핸드헬드 드리프트, 자연스러운 시선, 믿을 만한 접촉 그림자, 일정한 코끼리 크기, 따뜻한 실내등, 방의 환경음, 조용한 식기와 의자 소리, 부드러운 코끼리 숨소리. 컷, 중복 손님, 테이블 배치 변화는 없다.
```

<details>
<summary>원문 출처 프롬프트</summary>

```
A photorealistic elephant stands improbably inside a small, warmly lit dining room during a formal dinner party. Six adults sit around a table with roast dinner, candles, flowers, and wine glasses. The elephant fills the back of the room without breaking the walls or furniture; its trunk reaches forward as the guests notice it and react with restrained surprise, then laughter. One continuous eye-level shot with subtle handheld drift, natural eyelines, believable contact shadows, consistent elephant scale, warm practical lamps, room tone, quiet cutlery, chair movement, and a soft elephant breath. No cuts, no duplicated guests, no changing table layout.
```

</details>

#### 동영상

<div align="center">
<a href="https://video.twimg.com/amplify_video/2074556635603673089/vid/avc1/1280x720/OJwJS5B7W51JCrdH.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2074556635603673089/img/JlQfo2X6eAfl_d_g.jpg" height="420" alt="어색한 만찬의 코끼리 - Motion preview"></a>

*미리보기를 클릭하여 동영상을 여세요* · **[▶ 동영상 보기 →](https://video.twimg.com/amplify_video/2074556635603673089/vid/avc1/1280x720/OJwJS5B7W51JCrdH.mp4?tag=28)**
</div>

#### 근거

- **제작자:** [Alexandr Wang](https://x.com/alexandr_wang)
- **정식 출처:** [정식 출처](https://x.com/alexandr_wang/status/2074556839782416555)
- **게시일:** 2026년 7월 7일
- **프롬프트 언어:** en

**[이 연출로 만들기 · ImagineVid](https://imaginevid.io/ko/reference-video)**

---

<a id="prompt-2"></a>

### #2: 풀밭 비탈을 구르는 아기 판다

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 이 워크플로가 중요한 이유

몸의 연속성, 접촉 물리, 털, 자연스러운 카메라 반응을 살피는 짧은 공식 프롬프트입니다.

#### 현지화 프롬프트

```
아기 판다가 작은 풀밭 비탈을 머리부터 재주넘듯 굴러 내려간다.
```

<details>
<summary>원문 출처 프롬프트</summary>

```
A baby panda tumbling head over heels down a small grassy slope.
```

</details>

#### 동영상

<div align="center">
<a href="https://video.twimg.com/amplify_video/2074556657825202177/vid/avc1/1280x720/CCByPOiRRLwPhYGM.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2074556657825202177/img/imtmutX_DBSPjify.jpg" height="420" alt="풀밭 비탈을 구르는 아기 판다 - Motion preview"></a>

*미리보기를 클릭하여 동영상을 여세요* · **[▶ 동영상 보기 →](https://video.twimg.com/amplify_video/2074556657825202177/vid/avc1/1280x720/CCByPOiRRLwPhYGM.mp4?tag=28)**
</div>

#### 근거

- **제작자:** [Meta Superintelligence Labs](https://x.com/AIatMeta)
- **정식 출처:** [정식 출처](https://x.com/alexandr_wang/status/2074556839782416555)
- **게시일:** 2026년 7월 7일
- **프롬프트 언어:** en

**[이 연출로 만들기 · ImagineVid](https://imaginevid.io/ko/reference-video)**

---

<a id="prompt-3"></a>

### #3: 오렌지 네 개 저글링과 코믹한 결말

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 이 워크플로가 중요한 이유

개수, 손과 물체, 실패, 연기, 물리, 동기화된 폴리를 10초 안에 완성합니다.

#### 현지화 프롬프트

```
남자가 오렌지 세 개를 저글링하다 네 번째를 더하고, 전부 떨어뜨린 뒤에도 인사한다. 따뜻한 자연광의 아침, 부드러운 슬로모션. 시작, 전환, 결말이 분명한 약 10초의 단일 연속 순간. 오디오: 조용한 실내 환경음과 선명한 폴리. 자연스러운 조명과 물리의 사실적인 실제 영상. 만화나 스타일화 금지.
```

<details>
<summary>원문 출처 프롬프트</summary>

```
A man juggles three oranges, adds a fourth, drops them all, and takes a bow anyway. Warm natural morning light, gentle slow motion. A single continuous approximately 10-second moment with a clear beginning, turn, and payoff. AUDIO: quiet room tone with crisp foley. Photorealistic, natural lighting and physics, believable real-world footage. Not a cartoon, not stylized.
```

</details>

#### 동영상

<div align="center">
<a href="https://video.twimg.com/amplify_video/2074598559400247296/vid/avc1/1280x720/MT-tOwM5MF3PII-y.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2074598559400247296/img/9mkUTmS0L1VPbKLA.jpg" height="420" alt="오렌지 네 개 저글링과 코믹한 결말 - Motion preview"></a>

*미리보기를 클릭하여 동영상을 여세요* · **[▶ 동영상 보기 →](https://video.twimg.com/amplify_video/2074598559400247296/vid/avc1/1280x720/MT-tOwM5MF3PII-y.mp4?tag=28)**
</div>

#### 근거

- **제작자:** [Meta AI](https://x.com/AIatMeta)
- **정식 출처:** [정식 출처](https://x.com/AIatMeta/status/2074600027733860758)
- **게시일:** 2026년 7월 7일
- **프롬프트 언어:** en

**[이 연출로 만들기 · ImagineVid](https://imaginevid.io/ko/reference-video)**

---

<a id="prompt-6"></a>

### #4: 블러시 피즈 탄산 레모네이드 제품 영상

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 이 워크플로가 중요한 이유

라벨 안정성, 액체 움직임, 기포, 장식 연속성, 매크로 초점과 브랜드 마무리를 시험하는 10초 음료 광고입니다.

#### 현지화 프롬프트

```
가상의 분홍 탄산 레모네이드 ‘BLUSH FIZZ’를 위한 밝은 10초 테이블 광고를 만든다. 차가운 유리병을 으깬 얼음 위에 대각선으로 놓고 레몬 반쪽, 라즈베리, 민트, 연분홍 꽃잎, 물방울을 배치해 시작한다. 크림색 라벨의 ‘BLUSH FIZZ’와 ‘SPARKLING LEMONADE’는 정확히 읽히고 변하지 않는다. 옆면 매크로 샷으로 전환해 병이 얼음, 레몬 조각, 라즈베리, 민트가 든 긴 유리잔에 투명한 분홍 레모네이드를 끊김 없이 붓는다. 올라오는 기포, 사실적인 굴절, 젖은 유리와 작은 튐을 보여 주되 병과 장식 수는 바꾸지 않는다. 가득 찬 잔, 레몬 휠, 라즈베리, 민트와 오른쪽 아래 같은 가상 로고의 클로즈업으로 끝낸다. 분홍과 민트색 스튜디오, 밝은 확산광, 얕은 심도, 부드러운 제품 카메라, 선명한 따르는 소리와 탄산음. 손과 사람, 뒤틀린 라벨, 추가 글자, 복제 과일은 없다.
```

<details>
<summary>원문 출처 프롬프트</summary>

```
Create a bright ten-second tabletop commercial for a fictional sparkling pink lemonade named "BLUSH FIZZ". Open on a cold glass bottle lying diagonally in crushed ice with lemon halves, raspberries, mint leaves, pale rose petals, and condensation beads. Keep the cream label and the exact words "BLUSH FIZZ" and "SPARKLING LEMONADE" readable and unchanged. Cut to a side macro shot as the bottle tilts and pours translucent blush-pink lemonade into a clear highball glass filled with ice, lemon slices, raspberries, and mint. Show a continuous liquid stream, rising bubbles, realistic refraction, wet glass, and small splashes without changing the bottle or garnish count. Finish on a close hero shot of the full sparkling glass with a lemon wheel, raspberry, mint sprig, and the same fictional logo in the lower right. Soft pink and mint studio set, high-key diffused light, shallow depth of field, smooth product-camera motion, crisp pour and fizz sounds, no hands or people, no warped label, no extra text, no duplicate fruit.
```

</details>

#### 동영상

<div align="center">
<a href="https://video.twimg.com/amplify_video/2074600543469916160/vid/avc1/1280x720/JN6ZLW31OGfxXY1c.mp4?tag=14"><img src="https://pbs.twimg.com/amplify_video_thumb/2074600543469916160/img/pGerTyIfmrw1Cn_N.jpg" height="420" alt="블러시 피즈 탄산 레모네이드 제품 영상 - Motion preview"></a>

*미리보기를 클릭하여 동영상을 여세요* · **[▶ 동영상 보기 →](https://video.twimg.com/amplify_video/2074600543469916160/vid/avc1/1280x720/JN6ZLW31OGfxXY1c.mp4?tag=14)**
</div>

#### 근거

- **제작자:** [Ishan Misra](https://x.com/imisra_)
- **정식 출처:** [정식 출처](https://x.com/imisra_/status/2074600764451041536)
- **게시일:** 2026년 7월 7일
- **프롬프트 언어:** en

**[이 연출로 만들기 · ImagineVid](https://imaginevid.io/ko/reference-video)**

---

<a id="prompt-7"></a>

### #5: 스톱모션 공기 흐름으로 설명하는 베르누이 원리

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### 이 워크플로가 중요한 이유

압력, 속도와 양력을 읽기 쉬운 실제 소품으로 보여 주며 하나의 스톱모션 세트를 유지하는 교육 영상.

#### 현지화 프롬프트

```
수제 교실 테이블에서 베르누이 원리를 설명하는 12초 스톱모션 교육 영상. 종이 화살표, 압력 카드, 좁은 종이 통로, 가벼운 공, 매단 종이 띠 두 개를 사용한다. 위에서 느린 공기와 넓은 간격의 “LOW SPEED / HIGH PRESSURE” 화살표로 시작한다. 통로를 좁혀 화살표를 빠르게 움직이고 “HIGH SPEED / LOW PRESSURE”로 바꾼다. 옆면에서 두 종이 띠 사이로 공기가 지나가며 서로 가까워지는 모습, 이어 상승 기류에 공이 뜨는 모습을 보여 준다. 모든 소품은 동일한 재질과 작은 촉각적 단계로 움직인다. 따뜻한 스탠드 조명, 종이 질감, 선명한 영어, 고정된 탑뷰와 측면 클로즈업, 부드러운 효과음. 손, 추가 수식, 깨진 글자 없음.
```

<details>
<summary>원문 출처 프롬프트</summary>

```
Create a 12-second stop-motion educational video explaining the Bernoulli principle on a handcrafted classroom table. Use paper arrows, labeled pressure cards, a narrow paper channel, a lightweight ball, and two suspended paper strips. Begin with a top-down view of slow airflow and wide-spaced arrows marked “LOW SPEED / HIGH PRESSURE.” Compress the channel so the arrows move faster and replace the cards with “HIGH SPEED / LOW PRESSURE.” Cut to the two paper strips lifting toward each other as air passes between them, then show the lightweight ball hovering in a rising stream. Keep every prop materially consistent and move it in small tactile increments. Warm desk lamp, paper texture, clean English labels, locked overhead and close side angles, gentle tick-and-whoosh Foley, no hands, no extra equations, no warped text.
```

</details>

#### 동영상

<div align="center">
<a href="https://video.twimg.com/amplify_video/2074600722080145408/vid/avc1/1280x720/uikPFoiwSEwIL0o1.mp4?tag=14"><img src="https://pbs.twimg.com/amplify_video_thumb/2074600722080145408/img/4YgeAwwyHuRDAR0v.jpg" height="420" alt="스톱모션 공기 흐름으로 설명하는 베르누이 원리 - Motion preview"></a>

*미리보기를 클릭하여 동영상을 여세요* · **[▶ 동영상 보기 →](https://video.twimg.com/amplify_video/2074600722080145408/vid/avc1/1280x720/uikPFoiwSEwIL0o1.mp4?tag=14)**
</div>

#### 근거

- **제작자:** [Ishan Misra](https://x.com/imisra_)
- **정식 출처:** [정식 출처](https://x.com/imisra_/status/2074600764451041536)
- **게시일:** 2026년 7월 7일
- **프롬프트 언어:** en

**[이 연출로 만들기 · ImagineVid](https://imaginevid.io/ko/reference-video)**

---

<a id="community-prompt-cases"></a>

## 비디오 프롬프트 워크플로

> 출처 날짜와 편집 가치순.

<a id="workflow-physical-motion-temporal-consistency"></a>

### 물리적 움직임 및 시간 일관성 (3)

무게, 접촉, 가속, 균형과 시간적 연속성을 시험하는 모션 브리프입니다.

**추천 비디오 프롬프트**

- [어색한 만찬의 코끼리](#prompt-1)
- [오렌지 네 개 저글링과 코믹한 결말](#prompt-3)
- [스톱모션 공기 흐름으로 설명하는 베르누이 원리](#prompt-7)

<a id="workflow-animals-counting-subject-continuity"></a>

### 동물, 개수 및 피사체 연속성 (2)

움직임 동안 동물의 정체성, 개체 수, 해부학과 공간 관계를 유지하는 사례입니다.

**추천 비디오 프롬프트**

- [풀밭 비탈을 구르는 아기 판다](#prompt-2)

<a id="prompt-4"></a>

#### #1: 정확히 다섯 마리 오리가 턱을 오르기

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 이 워크플로가 중요한 이유

다섯 마리를 유지하면서 마지막 한 마리의 지연 행동으로 장애와 해결을 만드는 엄격한 프롬프트입니다.

##### 현지화 프롬프트

```
어미 오리가 정확히 다섯 마리의 새끼 오리를 한 줄로 이끌고 턱으로 향한다. 다섯 번째이자 가장 작은 새끼가 턱에서 애를 먹다가 뛰어올라 다시 합류한다. 전체 영상에서 새끼 오리는 정확히 다섯 마리이며 처음부터 끝까지 같은 개체다. 추가, 삭제, 복제하거나 수를 바꾸지 말고 다섯 마리를 모두 보이게 일관되게 유지한다. 아늑한 실내 램프, 실제 홈비디오 느낌, 약간 불완전한 핸드헬드 구도. 시작, 장애물, 해결이 분명한 약 10초의 연속 순간. 오디오: 부드러운 물갈퀴 발소리, 작은 울음, 방의 환경음, 턱에 긁히는 소리, 마지막 새끼가 성공할 때 밝은 울음.
```

<details>
<summary>원문 출처 프롬프트</summary>

```
A mother duck leads a line of exactly FIVE ducklings toward a curb; the fifth and smallest duckling struggles at the step, then hops up to rejoin the others. There are exactly five ducklings in total — the same five throughout the entire video. Never add, remove, duplicate, or change the number of ducklings; keep all five visible and consistent from start to finish. Cozy indoor lamplight, authentic home-video look, slightly imperfect handheld framing with natural shake. One continuous approximately 10-second moment with a clear beginning, obstacle, and payoff. Audio: soft webbed footsteps, tiny chirps, room tone, a small scrape at the curb, then a bright chirp when the last duckling succeeds.
```

</details>

##### 동영상

<div align="center">
<a href="https://video.twimg.com/amplify_video/2074598584318611457/vid/avc1/1280x720/CIfMgD_fBAcwbknm.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2074598584318611457/img/WJT3hrQ12GcGf2Ij.jpg" height="420" alt="정확히 다섯 마리 오리가 턱을 오르기 - Motion preview"></a>

*미리보기를 클릭하여 동영상을 여세요* · **[▶ 동영상 보기 →](https://video.twimg.com/amplify_video/2074598584318611457/vid/avc1/1280x720/CIfMgD_fBAcwbknm.mp4?tag=28)**
</div>

##### 근거

- **제작자:** [Meta AI](https://x.com/AIatMeta)
- **정식 출처:** [정식 출처](https://x.com/AIatMeta/status/2074600027733860758)
- **게시일:** 2026년 7월 7일
- **프롬프트 언어:** en

**[이 연출로 만들기 · ImagineVid](https://imaginevid.io/ko/reference-video)**

---

<a id="workflow-camera-language-immersive-pov"></a>

### 카메라 언어 및 몰입형 POV (1)

카메라 경로, 프레이밍, 시점, 공개 연출과 1인칭 몰입을 중심으로 한 샷 브리프입니다.

<a id="prompt-5"></a>

#### #2: 반쯤 언 연못 옆 야간 산책

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### 이 워크플로가 중요한 이유

걷는 흔들림, 눈, 반사, 환경음, 끊김 없는 시점을 중심으로 한 몰입형 1인칭 장면입니다.

##### 현지화 프롬프트

```
눈 내린 교외 공원의 작은 반쯤 언 연못 가장자리를 밤에 걷는 1인칭 시점. 눈 덮인 갈대와 부들이 둑을 따라 서 있고 새 눈이 부드럽게 내린다. 따뜻한 주황색 가로등이 어두운 열린 물에 은은히 반사된다. 얼지 않은 물의 미세한 흐름, 갈대 사이의 바람, 눈에 눌린 먼 고요, 부드러운 눈길 발소리. 자연스러운 보행 핸드헬드 카메라, 영화적이고 명상적이다.
```

<details>
<summary>원문 출처 프롬프트</summary>

```
First-person point of view strolling along the edge of a small half-frozen pond in a snowy suburban park at night. Snow-dusted reeds and cattails line the bank; fresh snow falls gently. Warm orange lamplight reflects softly on the dark open water. Serene and peaceful, with quiet nature sounds: the faint trickle of unfrozen water, a soft breeze through the reeds, distant snow-muffled stillness, and gentle footsteps in the snow. Natural handheld walking camera, cinematic, meditative.
```

</details>

##### 동영상

<div align="center">
<a href="https://video.twimg.com/amplify_video/2074599574837108737/vid/avc1/1280x720/FwxTRJjRv8yKuMqv.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2074599574837108737/img/xUm1Xaq31lQ8ggjj.jpg" height="420" alt="반쯤 언 연못 옆 야간 산책 - Motion preview"></a>

*미리보기를 클릭하여 동영상을 여세요* · **[▶ 동영상 보기 →](https://video.twimg.com/amplify_video/2074599574837108737/vid/avc1/1280x720/FwxTRJjRv8yKuMqv.mp4?tag=28)**
</div>

##### 근거

- **제작자:** [Meta AI](https://x.com/AIatMeta)
- **정식 출처:** [정식 출처](https://x.com/AIatMeta/status/2074600027733860758)
- **게시일:** 2026년 7월 7일
- **프롬프트 언어:** en

**[이 연출로 만들기 · ImagineVid](https://imaginevid.io/ko/reference-video)**

---

<a id="workflow-commercial-story-beats-product-motion"></a>

### 광고 비트 및 제품 모션 (1)

제품, 대상, 비트 순서, 모션 계획과 마지막 프레임이 명확한 광고 브리프입니다.

**추천 비디오 프롬프트**

- [블러시 피즈 탄산 레모네이드 제품 영상](#prompt-6)

## 검증된 사례 기여하기

실제 연출 패턴을 가르치는 Muse Video 사례를 찾았나요? GitHub Issues를 통해 프롬프트, 재생 가능한 결과, 제작자, 출처, 모델 근거, 입력 모드를 제출하세요.

### GitHub issue

1. [**비디오 프롬프트 제출**](https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills/issues/new?template=submit-prompt.yml)
2. 전체 브리프, 출처, 제작자, 모델 근거, 재생 가능한 미디어를 제공하세요
3. 메인테이너가 출처, 비디오 가치, 범위, 중복을 확인합니다
4. 승인된 사례는 로컬 데이터 소스로 정규화됩니다
5. 모든 품질 검사를 통과하면 생성기가 사례를 게시합니다

**편집 원칙:** 인기는 근거가 아닙니다. 완전한 프롬프트와 유용한 비디오가 있는 낮은 참여도의 게시물이 재현 가능한 연출이 없는 바이럴 쇼케이스보다 우선될 수 있습니다.

제출하기 전에 [CONTRIBUTING.md](docs/CONTRIBUTING.md)를 읽어 주세요.

---

## 라이선스

ImagineVid가 작성한 편집 문구와 코드는 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)에 따라 라이선스됩니다. 제3자 프롬프트, 제작자 신원, 상표, 이미지, 비디오는 각 소유자에게 있으며 해당 라이선스에서 제외됩니다.

---

## 제작자 크레딧

<details>
<summary>Community creators we thank (3)</summary>

[Alexandr Wang](https://x.com/alexandr_wang) · [Ishan Misra](https://x.com/imisra_) · [Meta AI](https://x.com/AIatMeta)

</details>

---

## 저장소 성장

[![GitHub stars](https://img.shields.io/github/stars/imagineVid/Awesome-muse-video-prompts-and-skills?style=for-the-badge&logo=github&label=GitHub%20Stars)](https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills/stargazers)

**[저장소 성장](https://star-history.com/#imagineVid/Awesome-muse-video-prompts-and-skills&Date)**

---

<div align="center">

**[Muse Video로 만들기](https://imaginevid.io/ko/reference-video)** •
**[검증된 사례 제출](https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills/issues/new?template=submit-prompt.yml)** •
**[컬렉션에 별표하기](https://github.com/imagineVid/Awesome-muse-video-prompts-and-skills)**

<sub>버전 관리된 로컬 데이터에서 생성된 시각 2026-07-23T17:23:40.961Z</sub>

</div>
