---
title: "Snap Your Fingers, Snap Your Neck"
artist: "Prong"
album: "Cleansing (1994)"
description: "Tommy Victor's crushing industrial groove-metal tone: Drop C riffs, an aggressive Marshall-style amp, tight low end and machine-like rhythmic precision."
tuning: "Drop C (C-G-C-F-A-D)"
guitar: "SG or Les Paul-style guitar with a bridge humbucker; a suitably set-up six-string for Drop C"
playing_style: "Aggressive alternate picking, tight palm muting, abrupt stops, syncopated power chords and percussive riffing"
tone_type: "High Gain"
draft: false

# SIGNAL CHAIN
# Marshall-style approximation of the Cleansing-era sound.
# The exact original studio signal path is unconfirmed.

chain:
  - name: "SIMPLE GATE"
    type: "gate"
    description: "Tight, quiet pauses between riffs"

  - name: "GREEN 808"
    type: "overdrive"
    description: "Optional low-end tightening"
    optional: true

  - name: "BRIT 2203"
    type: "amp"
    description: "Aggressive Marshall-style distortion"

  - name: "412 BRIT 60A G75 80s"
    type: "cab"
    description: "Tight, cutting 4x12 speaker tone"

  - name: "GRAPHIC-9"
    type: "eq"
    description: "Shape the low end and midrange"

# THE SOUND

sound: >-
  A brutal, dry and sharply defined industrial
  groove-metal guitar sound. The low strings
  deliver a heavy, percussive impact, while
  the upper mids provide the grinding, almost
  metallic character that allows the riff
  to cut through the rhythm section.

  The distortion should be dense enough for
  sustained power chords but controlled
  enough for short, palm-muted notes to
  remain distinct.

  The defining characteristic is the
  interaction between the guitar and the
  rhythm. Abrupt silences, precise starts
  and stops, and syncopated accents create
  much of the song's aggression.

  Avoid a loose, excessively bass-heavy
  modern metal sound. The guitar should
  feel hard, focused and immediate.

  This recipe targets the original 1994
  recording on Cleansing, rather than
  Tommy Victor's later live equipment.

# BEGINNER ROUTE

beginner_route: >-
  Start with three essential blocks:
  Simple Gate, Brit 2203 and the
  4x12 cabinet.

  Tune your guitar to Drop C and select
  the bridge humbucker.

  Set the amplifier for aggressive
  distortion, but resist the temptation
  to turn the gain all the way up.
  The low notes must remain clear
  when played quickly.

  Begin by playing the main riff
  slowly with deliberate palm muting.
  Listen for short, punchy notes
  and clear gaps between phrases.

  Adjust the amplifier Bass and
  Gain until the low C string
  sounds powerful without becoming
  blurry or boomy.

  Next, add Graphic-9 to reduce
  excessive low frequencies and
  fine-tune the midrange.

  Only add Green 808 if the amp
  still feels too loose. Use it
  mainly as a boost rather than
  as a separate distortion source.

  The most important ingredient
  is precise right-hand timing.
  Even an excellent preset will
  sound wrong if the rhythmic
  stops are not controlled.

# VETERAN NOTES

veteran_notes: >-
  Prong's Cleansing album was produced
  by Terry Date and released in 1994.
  Its sound combines groove metal,
  hardcore aggression and industrial
  rhythmic influences.

  In a retrospective interview,
  Tommy Victor associated the
  Cleansing sessions with Drop C
  tuning and the Marshall Valvestate
  8100 amplifier.

  Victor explained that the
  solid-state power section of
  the Valvestate helped maintain
  definition with very low
  guitar tunings. The amplifier's
  hybrid design combines a valve
  preamp stage with a transistor
  power amplifier.

  This is important because a
  conventional all-valve Marshall
  does not necessarily behave
  like the original Valvestate.

  The Quad Cortex Brit 2203 is
  based on a Marshall JCM800.
  It provides the aggressive
  British midrange required for
  a useful approximation, but
  its circuit and dynamic
  response differ from the
  Valvestate 8100.

  The optional Green 808 helps
  tighten the bass response
  when using this substitute.
  Its inclusion is a practical
  modern solution, not evidence
  that Victor used a Tube
  Screamer on the recording.

  Published interviews also
  associate Victor's recording
  work with SG and Les Paul
  Custom guitars. However, the
  exact guitar and pickup
  combination used for this
  specific track has not been
  independently established.

  ToneMirror proposes a Mesa
  Dual Rectifier, an ESP E-II
  Eclipse and Drop D tuning,
  together with specific
  amplifier knob positions.

  Those details differ from
  Victor's own retrospective
  account of the Cleansing
  period. They should therefore
  be treated as an alternative
  tonal interpretation rather
  than verified studio settings.

  Guitar transcriptions for
  the song commonly use
  Drop C, matching Victor's
  description of the album-era
  tuning. Individual recordings
  and live performances should
  still be checked by ear.

  The chosen 4x12 cabinet with
  G12T-75-style speakers is
  a practical approximation.
  The original recording's
  cabinet, microphones and
  precise EQ settings have
  not been established here.

  Graphic-9 provides post-cabinet
  tone shaping, but it is not
  a reconstruction of Terry
  Date's recording or mixing EQ.

  Advanced users may want
  to compare Brit 2203 with
  a reputable Marshall
  Valvestate 8100 Neural
  Capture if they have access
  to one. Match loudness before
  judging differences in
  attack and low-end response.

# BEFORE YOU BUILD

before_you_build: >-
  This is an original, ear-led
  Quad Cortex recipe inspired
  by Prong's 1994 studio recording.
  It is not a verified recreation
  of the exact recording chain
  or a supplied Neural Capture.

  Tune your six-string guitar
  to Drop C: C-G-C-F-A-D,
  from low to high.

  This is a whole step below
  standard tuning, with the
  lowest string dropped a
  further whole step.

  A guitar with a bridge
  humbucker is recommended.
  Medium-to-high output pickups
  will work, although very hot
  pickups may need less
  amplifier gain.

  Use strings heavy enough
  to maintain good tension
  in Drop C. Check intonation
  and neck relief if the
  instrument is normally
  set up for standard tuning.

  Begin with the guitar
  volume fully open.

  The 412 Brit 60A G75 80s
  cabinet was added in
  CorOS 3.3.0. If unavailable,
  use another stock Marshall
  4x12 cabinet and adjust
  the EQ by ear.

  Keep the overall sound
  relatively dry. Do not
  add delay, chorus or
  prominent reverb until
  the main rhythm tone
  is established.

# BUILD INTRODUCTION

build_intro: >-
  The values below are
  practical starting points,
  not documented settings
  from the Cleansing sessions.

  Approximate amplifier
  settings use a 0-10
  reference scale. Actual
  device parameters may
  have different ranges.

  Focus on low-frequency
  control, upper-midrange
  definition and immediate
  rhythmic response.

  Build the dry rhythm
  sound first, then create
  small Scene variations
  for different sections.

# STEP-BY-STEP BUILD

build_steps:
  - title: "Tune to Drop C"
    description: >-
      Tune to C-G-C-F-A-D,
      low to high. Select
      the bridge humbucker
      and begin with the
      guitar volume fully
      open. Check the
      tuning stability of
      the low C string.
      Use firm, controlled
      picking and place
      your palm close enough
      to the bridge to
      produce short,
      punchy muted notes.

  - title: "Add Simple Gate"
    description: >-
      Place Simple Gate at
      the beginning of the
      chain. Set its threshold
      just high enough to
      remove noise during
      deliberate pauses.
      Play the main riff
      and listen carefully
      to the stops.
      Do not raise the
      threshold so far
      that it cuts off
      useful note decay.
      The picking hand
      should control
      most of the silence.

  - title: "Set up Brit 2203"
    description: >-
      Add Brit 2203.
      As approximate
      starting targets,
      try Gain 6/10,
      Bass 4.5/10,
      Middle 5.5/10,
      Treble 6/10
      and Presence 5/10
      where equivalent
      controls exist.
      Adjust the master
      or output level
      separately to
      achieve a suitable
      listening volume.
      Aim for grinding
      distortion with
      clearly defined
      low notes rather
      than maximum gain.

  - title: "Choose the 4x12 cabinet"
    description: >-
      Add 412 Brit 60A
      G75 80s after
      the amplifier.
      Start with a
      dynamic microphone
      slightly away from
      the speaker centre.
      If filtering is
      available, try
      a low cut around
      80-90 Hz and a
      high cut around
      7-8 kHz.
      These are initial
      targets, not fixed
      requirements.
      Adjust microphone
      position to balance
      low-midrange punch
      with aggressive
      upper-midrange bite.

  - title: "Shape the tone with Graphic-9"
    description: >-
      Place Graphic-9
      after the cabinet.
      Begin with every
      band flat.
      If the low end
      is boomy, make a
      small cut in the
      lowest available
      bands around
      60-125 Hz.
      If the tone
      sounds boxy,
      experiment with
      a gentle reduction
      in the 250-500 Hz
      region.
      Preserve enough
      800 Hz to 2 kHz
      energy for the
      guitar to cut
      through the mix.
      Avoid extreme EQ
      scooping.

  - title: "Experiment with optional Green 808"
    description: >-
      If the low notes
      remain too loose,
      place Green 808
      between the gate
      and amplifier.
      Start with Drive
      around 1/10,
      Tone around 5/10
      and Level around
      7/10 as approximate
      starting points.
      The purpose is
      to tighten the
      amplifier input.
      Match output
      loudness when
      comparing the
      block on and off.
      Bypass it if
      the amp already
      sounds tight.

  - title: "Refine the picking response"
    description: >-
      Play the riff at
      its intended speed.
      Listen for a firm
      low-frequency thump,
      grinding midrange
      and clean separation
      between notes.
      If the rhythm
      becomes smeared,
      reduce Gain or
      Bass before
      increasing the
      gate threshold.
      The guitar should
      respond immediately
      to the picking hand.

  - title: "Create the Main Groove Scene"
    description: >-
      Set Scene A as
      the basic rhythm
      sound. Keep
      Brit 2203,
      the cabinet,
      gate and Graphic-9
      active. Leave
      Green 808 bypassed
      unless needed.
      Adjust the sound
      for tight palm
      muting and a
      dry, aggressive
      attack. This is
      the reference
      Scene for the
      rest of the preset.

  - title: "Create an Open Chorus Scene"
    description: >-
      Copy the main
      sound to Scene B.
      Reduce the gate
      threshold slightly
      if longer chord
      decays are needed.
      Raise the Scene
      output level a
      small amount,
      typically around
      1 dB as a
      starting point.
      Keep the amplifier
      and cabinet
      character consistent.
      Avoid adding
      unnecessary gain
      or ambience.

  - title: "Create a Hard Stop Scene"
    description: >-
      Copy the main
      sound to Scene C.
      If necessary,
      increase the gate
      threshold slightly
      to help maintain
      short silences.
      Keep the gain
      and EQ similar
      to Scene A.
      Check that the
      threshold does
      not choke normal
      riff notes.
      This is a useful
      performance option,
      not a documented
      studio Scene.

# SCENES

scenes:
  - id: "A"
    name: "Main Groove"
    description: >-
      The principal
      Snap Your Fingers,
      Snap Your Neck
      rhythm sound.
      Brit 2203,
      Marshall-style
      4x12, Simple Gate
      and Graphic-9
      active.
      Green 808
      bypassed initially.
      Aim for a tight,
      percussive Drop C
      guitar sound with
      grinding mids and
      precise rhythmic
      stops.

  - id: "B"
    name: "Open Chorus"
    description: >-
      Use the same
      amplifier and
      cabinet sound.
      Allow slightly
      more note decay
      by relaxing the
      gate if needed.
      A modest Scene
      output lift can
      help broader
      chord passages
      stand forward.
      Keep the tone
      dry and punchy
      rather than
      adding obvious
      effects.

  - id: "C"
    name: "Hard Stop"
    description: >-
      A performance
      variation for
      especially tight
      rhythmic passages.
      Keep the same
      core tone but
      use a slightly
      firmer gate
      threshold if
      necessary.
      Combine this
      with deliberate
      right-hand muting
      and precise
      chord releases.
      Avoid cutting
      sustained notes
      unnaturally.

# TROUBLESHOOTING

troubleshooting:
  - problem: "Low C sounds muddy?"
    solution: >-
      Reduce amp Bass
      or Gain first.
      Check the cabinet
      low cut and make
      small EQ reductions
      around the lowest
      bands. Activate
      Green 808 only
      if necessary.

  - problem: "Too fizzy or abrasive?"
    solution: >-
      Lower Presence
      slightly or move
      the cabinet mic
      away from the
      speaker centre.
      Adjust the high
      cut before making
      extreme EQ changes.

  - problem: "The riff lacks punch?"
    solution: >-
      Reduce distortion
      a little and
      tighten the
      palm muting.
      Check the low
      string tension
      and pickup height.
      Avoid excessive
      bass that obscures
      the initial attack.

  - problem: "Tone sounds too scooped?"
    solution: >-
      Restore midrange
      on the amplifier
      and Graphic-9.
      Focus on the
      upper mids that
      carry the pick
      attack and
      grinding texture.

  - problem: "Gate cuts off notes?"
    solution: >-
      Lower the Simple
      Gate threshold.
      Check that the
      guitar is providing
      a healthy input
      signal. Use
      picking-hand
      muting rather
      than relying
      entirely on
      the gate.

  - problem: "Too much background noise?"
    solution: >-
      Check the input
      level and pickup
      noise first.
      Raise the gate
      threshold only
      enough to quiet
      pauses. Reduce
      unnecessary gain
      or boost levels.

  - problem: "Chords sound flat or weak?"
    solution: >-
      Try a little more
      midrange and
      reduce excessive
      gate action.
      Ensure the amp
      has enough gain
      for sustained
      power chords
      without making
      the rhythm
      indistinct.

  - problem: "Scene changes are too abrupt?"
    solution: >-
      Match the
      perceived output
      levels of all
      three Scenes.
      Keep the core
      amplifier tone
      consistent and
      make only small
      gate or level
      adjustments.

---
