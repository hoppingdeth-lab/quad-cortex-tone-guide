---
title: "My Way"
artist: "Limp Bizkit"
album: "Chocolate Starfish and the Hot Dog Flavored Water (2000)"
description: "Wes Borland's distinctive warped clean guitar and crushing nu-metal rhythm tone, inspired by his documented effects and amplifier choices."
tuning: "C# Standard (C#-F#-B-E-G#-C#)"
guitar: "Six-string or seven-string guitar with a bridge humbucker, tuned to C# standard across six strings"
playing_style: "Precise clean picking, experimental modulation, heavy palm-muted rhythms and aggressive chord accents"
tone_type: "High Gain"
draft: false

# SIGNAL CHAIN
# Two alternative paths within one Quad Cortex preset.
# The list below shows the devices, not a single serial route.
#
# CLEAN: Flangerish > Tape Delay > Rols Jazz CH120 > 212 Rols Jazz
# HEAVY: Simple Gate > CA Duo Ch3 Modern > 412 CA Stand OS
#
# Split the guitar input into two paths and switch
# which path is audible using Scenes.

chain:
  - name: "FLANGERISH"
    type: "flanger"
    description: "Clean path: warped modulation"

  - name: "TAPE DELAY"
    type: "delay"
    description: "Clean path: Echoplex-style echoes"

  - name: "ROLS JAZZ CH120"
    type: "amp"
    description: "Clean path: bright amp substitute"

  - name: "212 ROLS JAZZ '87"
    type: "cab"
    description: "Clean path: clean speaker tone"

  - name: "SIMPLE GATE"
    type: "gate"
    description: "Heavy path: control unwanted noise"

  - name: "CA DUO CH3 MODERN"
    type: "amp"
    description: "Heavy path: Rectifier-style distortion"

  - name: "412 CA STAND OS S V30 90s"
    type: "cab"
    description: "Heavy path: powerful 4x12 tone"

# THE SOUND

sound: >-
  My Way combines two dramatically different guitar
  textures. The quieter sections feature a bright,
  strangely animated clean sound with unusual
  modulation and repeating echoes. The guitar
  can feel almost synthetic, with a metallic
  movement that contrasts sharply with the rhythm
  section.

  The heavy sections introduce a dense, aggressive
  distorted guitar with a strong low-midrange body,
  cutting pick attack and controlled low strings.
  Despite the saturation, the rhythm should retain
  enough definition for individual chord attacks
  and muted notes to remain distinct.

  The contrast between these two sounds is central
  to Wes Borland's distinctive playing on the track.
  This recipe aims to capture both personalities
  while remaining practical to build on the
  Neural DSP Quad Cortex.

# BEGINNER ROUTE

beginner_route: >-
  Build the clean sound first. Start with Rols Jazz
  CH120 and its matching 2x12 cabinet. Keep the amp
  clean and bright. Add Flangerish before the amp
  and experiment with a slow-to-moderate rate and
  a pronounced effect depth. Then add Tape Delay
  to provide repeating notes and extra movement.

  Next, create a separate heavy signal path using
  CA Duo Ch3 Modern and a Mesa-style 4x12 cabinet.
  Add Simple Gate before the amplifier if needed.
  Concentrate on tight low notes and clear chords
  rather than maximum gain.

  Use Scene A to hear the clean path and Scene B
  to hear the heavy path. The clean sound should
  feel strange and spacious. The heavy sound
  should be immediate, punchy and powerful.

  Do not worry about reproducing the original
  Ibanez Wack'd effect perfectly. Start with
  recognisable flanging and gradually increase
  the unusual metallic character.

# VETERAN NOTES

veteran_notes: >-
  Wes Borland has directly identified a Maestro
  solid-state Echoplex, an Ibanez flanger using
  its Wack'd setting, and a vintage Selmer
  Zodiac Twin 30 as part of the My Way sound.
  He discussed this combination in a MusicRadar
  interview concerning his later work on
  Limp Bizkit's Gold Cobra album.

  Borland also confirmed in a Guitar World
  interview that the Selmer was used for the
  clean sounds on Chocolate Starfish, specifically
  describing the exceptionally bright breakdown
  tone in My Way.

  The Ibanez CF7's Wack'd setting is particularly
  important. It produces an unconventional,
  metallic modulation character that Borland
  has compared to ring modulation.

  Flangerish is a usable starting point on the
  Quad Cortex, but it does not reproduce that
  exact Ibanez circuit or its Wack'd setting.
  On suitable firmware, experimenting with
  the separate Ring Modulator device may offer
  another route to the more synthetic textures.

  The original Selmer Zodiac Twin 30 is not
  represented by a dedicated stock Quad Cortex
  amplifier model. Rols Jazz CH120 is therefore
  selected for its clean headroom and bright
  response, not because it models the Selmer.
  It should be treated as a functional substitute.

  Mesa/Boogie Rectifier amplification is well
  documented in Borland's late-1990s equipment
  history. The CA Duo Ch3 Modern model provides
  a plausible high-gain starting point, but
  the precise amplifier and settings used on
  the recorded heavy parts of My Way have not
  been independently established here.

  Borland has described tuning his six-string
  guitar down one and a half steps to C#
  standard. Some online transcriptions differ,
  so the tuning should ultimately be checked
  against the passage being performed.

  The original recording may contain multiple
  guitar takes, layered effects and studio
  processing. This two-path preset is a
  practical live-playing approximation, not
  an exact reconstruction of the recording.

# BEFORE YOU BUILD

before_you_build: >-
  This is an original, ear-led Quad Cortex recipe.
  It does not claim to reproduce the exact
  My Way recording chain, and it is not a
  supplied or downloadable Neural Capture.

  Tune the guitar to C# standard:
  C#-F#-B-E-G#-C#, from low to high.
  Use a suitably set-up guitar with
  strings heavy enough to maintain
  stable tension at the lower pitch.

  Start with a bridge humbucker for the
  heavy sections. For the clean sound,
  experiment with pickup selection and
  guitar volume to find the clearest
  attack without harshness.

  This recipe uses two separate signal
  paths. The clean and distorted amplifier
  blocks must not be connected in series.
  Split the input into clean and heavy
  paths, then route both towards the output.
  Use Scenes to mute or silence the
  inactive path.

  The signal-chain graphic on the website
  lists the devices for both paths.
  It is not a literal wiring diagram.

  Match the perceived output levels of
  both scenes before increasing volume.
  Begin with low monitoring levels
  while setting up the preset.

# BUILD INTRODUCTION

build_intro: >-
  The following values are practical
  starting points, not verified
  recording-session settings.

  Where a control is described on a
  0-10 scale, treat the value as
  approximate. Actual Quad Cortex
  controls and parameter ranges can
  vary between devices and firmware.

  The main priority is contrast:
  unusual bright cleans versus
  tight, saturated rhythm guitar.

# STEP-BY-STEP BUILD

build_steps:
  - title: "Tune and prepare the guitar"
    description: >-
      Set the guitar to C# standard
      (C#-F#-B-E-G#-C#), low to high.
      Check string tension, intonation
      and pickup height. Start with the
      bridge humbucker for heavy parts.
      Use a clear pickup position for
      clean passages and keep the
      initial guitar volume high enough
      for a consistent input signal.

  - title: "Create two separate signal paths"
    description: >-
      Split the guitar input into two
      independent paths on the Quad Cortex.
      One will handle the warped clean
      sections and the other the heavy
      rhythm tone. Both paths should reach
      the output without one amplifier
      feeding the other. Arrange the
      paths so Scenes can silence the
      inactive one. Check for accidental
      volume doubling when both paths
      are active.

  - title: "Build the clean amplifier sound"
    description: >-
      On the clean path, add Rols Jazz
      CH120 followed by 212 Rols Jazz
      '87. Keep the amplifier clean.
      As a tonal target, begin with
      moderate Bass, moderately strong
      Mids and fairly bright Treble.
      Try approximate relative settings
      of Bass 4/10, Mid 5/10 and
      Treble 6.5/10 where equivalent
      controls are available. Adjust
      the amp level without introducing
      unwanted distortion. This is
      a substitute for the recorded
      Selmer, not an identical model.

  - title: "Add the warped modulation"
    description: >-
      Place Flangerish before the clean
      amplifier. Begin with a slow-to-
      moderate modulation rate, moderate
      feedback and a fairly noticeable
      effect level. If the device offers
      percentage-based controls, an
      effect blend around 30-40 percent
      is a reasonable first experiment.
      Increase feedback gradually to
      introduce a more metallic edge.
      The desired character is strange,
      bright and animated rather than
      a conventional lush chorus.
      Stop if the sound becomes piercing
      or loses note definition.

  - title: "Add Echoplex-inspired delay"
    description: >-
      Place Tape Delay after Flangerish
      and before the clean amplifier.
      Start at approximately 350 ms,
      Feedback around 25 percent and
      Mix around 20 percent, where
      these controls are available.
      Aim for several clearly audible
      repeats that complement the
      picked phrase without overpowering
      it. The real Maestro unit was
      a solid-state Echoplex, so this
      stock Tape Delay is a tonal
      approximation rather than an
      exact circuit model. Adjust
      the delay time to suit your
      playing and the recording.

  - title: "Set up the heavy Rectifier amp"
    description: >-
      On the separate heavy path, choose
      CA Duo Ch3 Modern. Start with
      Gain about 5.5/10, Bass 4.5/10,
      Mid 4.5/10, Treble 5.5/10 and
      Presence 4.5/10, where these
      controls are available. Keep
      the low strings tight. Avoid
      completely scooping the mids,
      as this can make the guitar
      disappear behind the bass
      and drums. Adjust the master
      and output controls to balance
      the clean scene.

  - title: "Add the heavy cabinet"
    description: >-
      Follow the Rectifier-style amp
      with 412 CA Stand OS S V30 90s.
      Begin with a dynamic microphone
      slightly away from the centre
      of the speaker cone. Try a
      high-pass target near 80 Hz
      and a low-pass target near
      8 kHz if the cabinet block
      provides suitable filters.
      Move the microphone off-axis
      or reduce Presence if the
      distortion becomes fizzy.
      Preserve enough upper-midrange
      to hear the pick attack.

  - title: "Control noise on the heavy path"
    description: >-
      Add Simple Gate before the
      heavy amplifier. Set the
      threshold just high enough
      to quiet pauses between
      aggressive rhythm figures.
      Do not use an excessively
      strong threshold that
      cuts off the decay of notes.
      The clean path should
      remain unaffected by
      this gate.

  - title: "Programme and balance the Scenes"
    description: >-
      Configure Scene A so only
      the clean path is audible.
      Configure Scene B so only
      the heavy path is audible.
      Use the available per-scene
      level, mute or routing
      controls to silence the
      unwanted branch. Do not
      rely on bypassing an amp
      block alone if a dry signal
      can still pass through it.
      Match loudness between
      the scenes using output
      levels rather than adding
      unnecessary distortion.

# SCENES

scenes:
  - id: "A"
    name: "Warped Clean"
    description: >-
      Use the Flangerish, Tape Delay,
      Rols Jazz CH120 and 212 Rols
      Jazz '87 path. Silence the
      heavy amplifier branch.
      Keep the sound bright
      and clean, with pronounced
      metallic movement and
      moderate echoes. This
      scene targets the unusual
      verse and breakdown
      textures associated with
      Borland's documented
      equipment.

  - id: "B"
    name: "Heavy Chorus"
    description: >-
      Use Simple Gate, CA Duo Ch3
      Modern and the 412 CA
      Stand OS S V30 90s cabinet.
      Silence the clean path.
      Keep the distortion thick
      but defined, with strong
      palm-muted low strings
      and aggressive chord
      attacks. Maintain a
      controlled bass response
      and enough mids to cut
      through the mix.

# TROUBLESHOOTING

troubleshooting:
  - problem: "Clean tone too ordinary?"
    solution: >-
      Increase Flangerish feedback
      or effect intensity gradually.
      Experiment with more metallic
      modulation. On supported
      firmware, a carefully blended
      Ring Modulator may get
      closer to the character
      of the Ibanez Wack'd mode.

  - problem: "Clean tone too piercing?"
    solution: >-
      Reduce the clean amp Treble
      or the flanger feedback.
      Try a different pickup
      position before removing
      all the high frequencies.

  - problem: "Heavy tone too muddy?"
    solution: >-
      Lower Bass on CA Duo Ch3
      Modern and check the
      cabinet low cut. Reduce
      gain slightly if the
      low notes lose definition.

  - problem: "Heavy tone too fizzy?"
    solution: >-
      Reduce Presence or Treble
      slightly. Move the cabinet
      microphone away from the
      centre or lower the
      high-frequency cut.

  - problem: "Too much noise between riffs?"
    solution: >-
      Raise the Simple Gate
      threshold gradually.
      Stop when pauses are
      quiet but sustained
      notes still decay
      naturally.

  - problem: "Scenes change volume too much?"
    solution: >-
      Compare both Scenes at
      the same monitoring level.
      Adjust path output levels
      rather than relying on
      amplifier gain. Check
      that the inactive path
      is fully silenced.

---
