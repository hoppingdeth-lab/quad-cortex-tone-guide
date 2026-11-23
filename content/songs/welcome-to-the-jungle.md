---
title: "Welcome to the Jungle"
artist: "Guns N' Roses"
album: "Appetite for Destruction (1987)"
description: "Slash's aggressive, mid-forward Les Paul and modified Marshall sound, with a delayed opening figure and a guitar-volume-cleaned middle section."
tuning: "E-flat standard: E♭–A♭–D♭–G♭–B♭–E♭"
guitar: "Les Paul-style guitar with a moderate-output bridge humbucker. Slash's recording guitar was a late-1950s Les Paul Standard replica built by Kris Derrig, associated with Seymour Duncan Alnico II Pro pickups."
playing_style: "Use a firm pick attack, strong bends and controlled vibrato. Keep the main riff direct and mid-forward. For the clean middle section, roll down the guitar volume; restore it for the heavier sections."
tone_type: "High Gain"
draft: false

chain:
  - name: "Crying Wah"
    type: "wah"
    optional: true
    description: "Cry Baby-style wah for lead phrasing if desired. Slash used a Cry Baby on some leads, but its use on this specific recording is not firmly established."

  - name: "Neural Compressor"
    type: "compressor"
    optional: true
    description: "Optional light compression for control. No specific compressor model is confirmed for this recording."

  - name: "Brit Plexi 100 Bright"
    type: "amp"
    description: "Marshall Super Lead 100-based model. This approximates the reported Super Lead amp family, not the exact disputed S.I.R. rental modification."

  - name: "412 Brit 60B V30 ’95"
    type: "cab"
    description: "Marshall 1960B-style 4x12 cabinet with Vintage 30 drivers, approximating the published cabinet description."

  - name: "Digital Delay"
    type: "delay"
    optional: true
    description: "Digital delay for the opening figure and selected accents. The original Roland SRV-2000 was used in a delay mode; this Quad Cortex block is a functional substitute."

  - name: "Plate"
    type: "reverb"
    optional: true
    description: "Optional plate ambience for selected stabs and slide textures. It is a practical substitute for the reported SRV-2000 plate setting, not the original unit."

sound: >-
  The main sound should be raw, punchy and mid-forward, with the Les Paul
  pushing a loud Marshall-style amp into saturated crunch. Keep the core
  riff comparatively dry and articulate. Use Digital Delay for the
  opening figure and selected accents, then roll down the guitar volume
  for the cleaner middle section. The recorded tone comes from the amp
  rather than a separate distortion pedal.

beginner_route: >-
  Start with Brit Plexi 100 Bright and 412 Brit 60B V30 ’95. Use the
  bridge humbucker and set the amp for a saturated but clear rock tone.
  Keep Digital Delay bypassed while setting the main riff. Add it for
  the opening figure, then use your guitar volume to clean up the
  middle section. Try Crying Wah only if you want a wah-led lead sound.

veteran_notes: >-
  Slash said the Kris Derrig Les Paul arrived during the Appetite
  overdubs and became his recording guitar. Gear notes identify a bridge Seymour Duncan Alnico II Pro humbucker,
  a rented 100-watt Marshall Super Lead, a Marshall 1960 4x12 with
  Vintage 30 speakers and E-flat standard tuning. Mike Clink recalled
  a Frank Levi-modified Super Lead; other retrospective accounts differ
  over the amp's S.I.R. stock number and modification, and a 2002
  magazine sidebar recalls a Marshall Jubilee instead. Brit Plexi 100
  Bright is the closest official Quad Cortex match to the Super Lead
  family, but it does not reproduce the amp modification. Brit UBL
  Lead is an available Silver Jubilee-based alternative if you want
  to compare that conflicting account.

  Guitar World reports these amp settings for the original setup:
  Presence 8, Bass 5, Middle 8.5, Treble 7 and Volume 1 at 10, with
  the guitar connected to Channel 1's top input. Treat these as
  published historical settings, not guaranteed one-to-one values for
  the Quad Cortex model. The Quad Cortex starting positions below are
  practical adaptations.

  The Roland SRV-2000 was reportedly used in a special delay mode for
  the intro, with 318 ms delay time, Feedback 30 and Output 50. For
  selected stabs and slide effects, the published account describes
  425 ms and an additional plate reverb setting. The amp-and-cab tone
  remains mostly dry. No overdrive pedal is needed for the main sound;
  Mike Clink also recalled getting the gain from the amp.

  This recipe is a single playable signal path, not a reconstruction
  of the original overdubs. Published accounts describe a complex
  recorded guitar arrangement, so one Quad Cortex chain cannot
  represent every layer. A Shure SM57 is associated with Clink's
  Appetite amp recording approach; try a dynamic mic slightly off
  centre as a practical cabinet starting point.

before_you_build: >-
  Tune to E-flat standard: E♭–A♭–D♭–G♭–B♭–E♭. Start with the bridge
  humbucker and guitar volume fully up. The Derrig Les Paul and
  Alnico II Pro pickup are documented in accounts of the recording,
  but your own Les Paul-style guitar will work with suitable level
  and EQ adjustments. Use the guitar volume control to create the
  cleaner middle section. All Quad Cortex settings below are
  starting points, not verified preset values.

build_intro: >-
  Build the amp-and-cab tone first, then add the opening delay and
  optional accents. The reported historical amp settings are included
  in Veteran Notes; the values below adapt them for practical use
  with a Quad Cortex model and comfortable output level.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to E-flat standard. Select the bridge humbucker and begin
      with guitar volume fully up. A moderate-output humbucker is a
      useful starting point. If your pickups are hotter than the
      reported Alnico II Pro, reduce the amp input or guitar volume
      slightly to preserve note definition.

  - title: "Set the Marshall-style amp"
    description: >-
      Choose Brit Plexi 100 Bright. As practical starting points on a
      0–10 scale, try Presence 8, Bass 5, Middle 8, Treble 7 and
      Volume 1 around 7–8. The published original settings report
      Volume 1 at 10; lower it if the Quad Cortex output becomes
      unmanageable. Adjust the model's output separately to set
      listening level. Keep the sound mid-forward rather than
      scooping the mids.

  - title: "Choose the cabinet and microphone"
    description: >-
      Select 412 Brit 60B V30 ’95. Start with a dynamic microphone
      slightly off the speaker centre. If cabinet filtering is
      available, try a low cut near 80 Hz and a high cut around
      8 kHz. Treat these as mix-oriented starting points; exact
      microphone placement is not confirmed.

  - title: "Add optional compression"
    description: >-
      Neural Compressor is optional because the historical compressor
      model and settings are unknown. If needed, use light compression
      for control, with only a few decibels of gain reduction on
      stronger notes. Match the bypassed and active levels so the
      compressor does not act as an unreported boost.

  - title: "Set the opening delay"
    description: >-
      Engage Digital Delay for the opening figure. The published
      account gives the Roland SRV-2000 delay time as 318 ms and
      Feedback as 30. Use 318 ms and approximately 30% feedback as
      starting values in the Quad Cortex. The source reports Output
      50, but that control may not map directly to the Quad Cortex
      mix parameter; begin with a restrained mix around 15–25% and
      adjust by ear. Bypass the delay for the main riff.

  - title: "Add optional plate ambience"
    description: >-
      For selected stabs or slide textures, engage Plate after
      Digital Delay. Start with a short-to-medium decay and a low
      mix, around 8–12%. This is a practical approximation of the
      reported plate setting, not a verified reproduction of the
      original effect unit.

  - title: "Set the optional wah"
    description: >-
      If using Crying Wah, place it before the amp and control it
      with an expression pedal. Keep it bypassed for the core riff.
      Slash used a Cry Baby for some leads, but the source evidence
      does not firmly identify its use on this track's specific
      lead passages.

scenes:
  - id: "A"
    name: "Opening Delay"
    description: >-
      Use the core amp and cabinet tone with Digital Delay active
      at approximately 318 ms and moderate feedback. Keep Plate
      bypassed unless you want additional space. The delay is a
      Quad Cortex substitute for the reported SRV-2000 delay mode.

  - id: "B"
    name: "Main Riff"
    description: >-
      Keep Brit Plexi 100 Bright and the cabinet active. Bypass
      Digital Delay and Plate for the relatively dry, mid-forward
      riff sound. Use the bridge humbucker and full guitar volume.

  - id: "C"
    name: "Clean Middle"
    description: >-
      Keep the amp and cabinet settings unchanged and roll the
      guitar volume down until the tone cleans up. The recording's
      cleaner middle section is described as coming from Slash
      reducing guitar volume, rather than changing to a separate
      clean amplifier.

  - id: "D"
    name: "Lead and Accents"
    description: >-
      Keep the core amp-and-cab tone. Engage Crying Wah only if
      desired for lead phrasing. For selected stabs or slide
      accents, use the optional delay and Plate settings; do not
      leave those effects on for the whole song unless you prefer
      a wetter interpretation.

troubleshooting:
  - problem: "The tone is too fizzy or harsh."
    solution: >-
      Lower Presence or Treble slightly and move the virtual
      microphone farther off centre. Check that optional compression
      is not exaggerating the attack.

  - problem: "The main riff sounds too scooped."
    solution: >-
      Raise Middle or reduce Bass slightly. The reported Slash tone
      is mid-forward, so keep the midrange present in the mix.

  - problem: "The amp is too distorted or compressed."
    solution: >-
      Lower Volume 1 or reduce the guitar's output slightly. Do not
      add an overdrive pedal to compensate; the intended core gain
      comes from the Marshall-style amp model.

  - problem: "The middle section will not clean up."
    solution: >-
      Roll the guitar volume down further and check that Neural
      Compressor is bypassed or set lightly. If the pickups are
      especially hot, lower the input level into the amp.

  - problem: "The opening delay washes out the riff."
    solution: >-
      Bypass Digital Delay outside the opening figure or lower its
      mix and feedback. Keep Plate reserved for selected accents
      rather than leaving it active across the whole song.

---