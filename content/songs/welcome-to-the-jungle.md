---
title: "Welcome to the Jungle"
artist: "Guns N' Roses"
album: "Appetite for Destruction (1987)"
description: "Slash-inspired, mid-forward Marshall crunch with the song’s delayed intro, dry riff, volume-rolled-back middle and reverberant accents."
tuning: "E-flat standard (Eb-Ab-Db-Gb-Bb-Eb)"
guitar: "Les Paul-style guitar with humbuckers; a bridge pickup is a practical starting point. Slash recorded the album with a Kris Derrig-built Les Paul replica and a Seymour Duncan Alnico II Pro bridge pickup."
playing_style: "Use a firm pick attack, controlled palm muting, blues-based bends and slides; roll the guitar volume back for the clean middle section."
tone_type: "High Gain"
draft: false

chain:
  - name: "Gain"
    type: "utility"
    description: "Optional modest input push if the stock amp model needs more drive; this does not recreate the original amplifier modification"
    optional: true

  - name: "Brit Plexi 100 Bright"
    type: "amp"
    description: "Marshall Super Lead 100 model used as a practical stand-in for the modified Appetite-era Marshall"

  - name: "412 Brit 60B V30 ’95"
    type: "cab"
    description: "Marshall 1960-style 4x12 with Vintage 30 speakers, matching the reported cabinet family"

  - name: "Digital Delay"
    type: "delay"
    description: "Optional digital echo for the intro and selected slide or stab accents; an approximation of the Roland SRV-2000 delay mode"
    optional: true

  - name: "Plate"
    type: "reverb"
    description: "Optional plate reverb for the delayed stab and slide accents; keep bypassed for the dry main riff"
    optional: true

sound: >-
  The main tone should be saturated and forceful, with a strong
  midrange, controlled low end and sharp pick attack. Keep the riff
  dry and clearly articulated once the full band enters. The intro
  uses an audible, rhythmic digital echo; selected stabs and slides
  have a more spacious tail. In the quieter middle section, roll the
  guitar volume down to clean up the same amp rather than switching
  to a separate clean amp. Keep the tone responsive, not modern or
  excessively compressed.

beginner_route: >-
  Start with Brit Plexi 100 Bright and 412 Brit 60B V30 ’95. Set a
  mid-forward Marshall crunch, then play the main riff with the delay
  bypassed. Add Digital Delay for the intro and Plate only for the
  special accents. For the clean middle, roll down the guitar volume
  while keeping the amp and cabinet unchanged.

veteran_notes: >-
  Guitar World reports a Kris Derrig-built 1959 Les Paul Standard
  replica with a bridge Seymour Duncan Alnico II Pro humbucker,
  tuned to E-flat standard, through a 1977 100-watt Marshall Model
  1959 Super Lead modified by Frank Levi and Glenn Buckley. Other
  accounts have debated whether the rented amp was a 1959 Super
  Lead, a 1959T Tremolo or a pre-JCM800 2203. Its extra gain stage
  and the original amp are not reproduced by the stock Quad Cortex
  model. Brit Plexi 100 Bright is selected because it models the
  Super Lead family; use it as a starting point, not an exact capture.

  The same song-specific account identifies a Marshall 1960 4x12
  cabinet with Vintage 30 speakers. 412 Brit 60B V30 ’95 is a stock
  Marshall 1960B/Vintage 30 model and a reasonable cabinet match,
  but the original microphone placement and full studio chain are
  not established here.

  The Roland SRV-2000 was used in its secret delay mode on the intro.
  The reported delay time is 318 ms with feedback at 30 and output
  at 50; the unit was also used for selected stabs and slides at
  about 425 ms with an additional plate reverb. Digital Delay and
  Plate approximate those roles; their control scales and algorithms
  are not the same as the original rack unit.

  Slash described rolling his guitar volume down for the clean
  middle. A six-string bass is also audible in the slower chord
  section, so do not add excessive guitar bass in an attempt to
  reproduce that low ringing sound. The settings below are practical
  Quad Cortex proposals, not a recovered preset.

before_you_build: >-
  This is an original, ear-led Quad Cortex recipe inspired by the
  Appetite for Destruction studio recording. It is not an exact
  reconstruction of the modified S.I.R. amp or the full recording
  chain.

  Tune to E-flat standard: Eb-Ab-Db-Gb-Bb-Eb, from low to high.
  Start with a Les Paul-style guitar and bridge humbucker. The
  recording used a Kris Derrig-built Les Paul replica with a bridge
  Alnico II Pro pickup. Use the guitar volume control to clean up
  the amp for the middle section; keep your guitar volume high while
  setting the main distorted sound.

  The recipe uses one serial signal chain. Digital Delay and Plate
  are bypassed for the main riff and enabled only for the sections
  described below. No parallel routing is required.

build_intro: >-
  The amp, cabinet and effect values are practical starting points,
  not guaranteed reproductions of the recording. The original amp
  was modified and its settings do not translate directly to the
  Quad Cortex. Match output levels when comparing Scenes.

build_steps:
  - title: "Tune and prepare the guitar"
    description: >-
      Tune to E-flat standard (Eb-Ab-Db-Gb-Bb-Eb). Begin with a
      Les Paul-style guitar and bridge humbucker. A medium-output
      pickup is a useful starting point. Keep the guitar volume
      fully open while setting the distorted tone.

  - title: "Set the Marshall-style amp"
    description: >-
      Select Brit Plexi 100 Bright. Begin around Gain 7/10, Bass
      4.5/10, Mid 7.5/10, Treble 6.5/10 and Presence 6/10 where
      equivalent controls are available. Set output or master for
      your monitoring level. These are practical values; the
      reported settings on Slash’s modified amp were different and
      are not direct Quad Cortex equivalents.

  - title: "Choose the cabinet"
    description: >-
      Add 412 Brit 60B V30 ’95 after the amp. If microphone controls
      are available, start with a dynamic microphone slightly off
      the speaker centre. Try a low cut near 80 Hz and a high cut
      around 8 kHz as initial targets. Adjust by ear; the exact
      microphone and placement for this track are not confirmed.

  - title: "Add an optional input push"
    description: >-
      If Brit Plexi 100 Bright does not provide enough sustain, place
      the Gain block before the amp and start with a modest increase
      of about 2 dB. This is a practical input-level adjustment, not
      a pedal documented on the recording and not a substitute for
      the original amp’s added gain stage. Bypass it if the tone
      becomes harsh or compressed.

  - title: "Set the intro delay"
    description: >-
      Place Digital Delay after the cabinet. For the intro, begin at
      318 ms, Feedback around 30% and Mix around 35-45% if those
      controls are available. Raise the Mix only until the repeats
      are clearly audible behind the picked notes. The reported
      SRV-2000 Output value does not necessarily map directly to the
      Quad Cortex Mix control.

  - title: "Add the accent reverb"
    description: >-
      Place Plate after Digital Delay. Keep it bypassed for the main
      riff. For the special stabs and slides, try a decay around
      1.5-2.5 seconds and a Mix around 10-15% if available. These
      are restrained starting points; the original unit’s Plate A
      setting is not documented here.

  - title: "Set up the clean middle"
    description: >-
      Keep the amp and cabinet unchanged and bypass Digital Delay
      and Plate. Roll the guitar volume down gradually, starting
      around 3-5/10, until the amp cleans up while the notes remain
      present. The recording uses this playing control for the
      quieter middle section; do not switch to a different amp model.

  - title: "Balance the Scenes"
    description: >-
      Use Scene A for the delayed intro, Scene B for the dry riff,
      Scene C for the volume-rolled-back middle and Scene D for the
      delay and plate accents. Keep the optional Gain block bypassed
      initially. If you enable it, compare levels and preserve the
      clean-up range when rolling down the guitar volume.

scenes:
  - id: "A"
    name: "Intro Echo"
    description: >-
      Use Brit Plexi 100 Bright and 412 Brit 60B V30 ’95. Engage
      Digital Delay at approximately 318 ms with moderate feedback
      and a clearly audible but controlled Mix. Keep Plate bypassed.
      This is a practical approximation of the SRV-2000 delay mode.

  - id: "B"
    name: "Main Riff"
    description: >-
      Keep the same amp and cabinet, with Digital Delay and Plate
      bypassed. Use the main mid-forward crunch setting and a firm,
      controlled pick attack. Keep the optional Gain block bypassed
      unless the amp needs a small input push.

  - id: "C"
    name: "Clean Middle"
    description: >-
      Keep the same amp and cabinet and bypass both effects. Roll the
      guitar volume down until the amp cleans up, beginning around
      3-5/10. This uses the reported guitar-volume technique rather
      than a separate clean amp or a change in routing.

  - id: "D"
    name: "Delay Accents"
    description: >-
      For the selected stabs and slides, set Digital Delay near
      425 ms with a restrained Mix and engage Plate at a low level.
      Keep the main amp tone intact. These effect settings are
      practical proposals, not recovered SRV-2000 control values.

troubleshooting:
  - problem: "The main riff sounds too muddy?"
    solution: >-
      Reduce Bass slightly, check the cabinet low cut and keep the
      optional Gain block bypassed. The guitar should have weight
      without masking the bass or losing pick definition.

  - problem: "The amp is too fizzy or harsh?"
    solution: >-
      Reduce Presence first, then Treble if needed. Move the cabinet
      microphone farther off the speaker centre if that control is
      available. Avoid removing so much upper midrange that the
      guitar loses its bite.

  - problem: "The intro delay overwhelms the notes?"
    solution: >-
      Lower Digital Delay Mix before changing the time. Keep the
      repeats audible behind the picked notes rather than louder
      than the original attack.

  - problem: "The clean middle does not clean up?"
    solution: >-
      Check that the guitar volume is actually reducing the input
      level. Bypass the optional Gain block, lower amp Gain slightly
      if needed and confirm the amp remains responsive to the guitar
      volume control.

  - problem: "The delay accents sound too wet?"
    solution: >-
      Reduce Digital Delay Mix and Plate Mix. Use the longer delay
      and reverb only for the accent parts, not the dry main riff.

  - problem: "The scenes change volume too much?"
    solution: >-
      Match perceived output levels between Scenes A, B and D.
      Preserve the guitar-volume clean-up in Scene C and avoid using
      amp Gain as a substitute for output-level balancing.
---