---
title: "Comfortably Numb"
artist: "Pink Floyd"
album: "The Wall (1979)"
description: "David Gilmour's soaring 1979 studio outro tone, with Big Muff sustain, a clean Hiwatt-style amplifier and subtle rotary movement."
tuning: "Standard (E-A-D-G-B-E)"
guitar: "Stratocaster-style guitar with a bridge single-coil pickup"
playing_style: "Expressive lead playing, wide controlled bends, slow vibrato and sustained melodic phrasing"
tone_type: "High Gain"
draft: false

# SIGNAL CHAIN
# A practical single-path approximation of the studio rig.
# The original rotating speaker was a separate amplification path.

chain:
  - name: "COMPRESSOR"
    type: "compressor"
    description: "Optional light levelling"
    optional: true

  - name: "FUZZ PI"
    type: "fuzz"
    description: "Big Muff-style sustain"

  - name: "WATT CUSTOM CLEAN"
    type: "amp"
    description: "Clean, powerful amp foundation"

  - name: "412 WATT S4123"
    type: "cab"
    description: "Hiwatt-style 4x12 speaker tone"

  - name: "ROTARY"
    type: "modulation"
    description: "Subtle rotating-speaker movement"

  - name: "DIGITAL DELAY"
    type: "delay"
    description: "Optional spacious repeats"
    optional: true

  - name: "PLATE"
    type: "reverb"
    description: "Optional studio-style ambience"
    optional: true

# THE SOUND

sound: >-
  A singing, sustained lead tone with a firm pick attack,
  rich midrange and a smooth, almost vocal quality.
  The Big Muff supplies the saturation and compression,
  while a powerful, relatively clean amplifier keeps the
  notes defined. A gentle rotating-speaker character adds
  movement without sounding like an obvious chorus.
  The result should feel large and expressive, with long
  notes that bloom and bends that remain articulate.
  This recipe targets the second, outro solo on the
  original 1979 studio recording, rather than the
  heavier and more expansive later live versions.

# BEGINNER ROUTE

beginner_route: >-
  Start with just three essential blocks: Fuzz Pi,
  Watt Custom Clean and 412 Watt S4123.
  Use a Stratocaster-style bridge pickup and set the
  amplifier almost clean. Let the fuzz create the
  sustain rather than turning up the amplifier gain.

  First make single notes sound full and smooth.
  Adjust the fuzz tone until the high notes sing
  without becoming sharp. Then add a little Rotary
  movement. Add delay or reverb only if the dry
  sound feels too small.

  Do not chase maximum distortion. The goal is
  sustain, note separation and expressive dynamics.
  Clear bends and controlled vibrato will make a
  bigger difference than adding more effects.

# VETERAN NOTES

veteran_notes: >-
  The Wall-era recording rig is strongly associated
  with Gilmour's Black Strat, a Big Muff, Hiwatt
  amplification, WEM speaker cabinets and a Yamaha
  RA-200 rotating speaker system. Published gear
  analyses identify the Strat's bridge pickup for
  the second Comfortably Numb solo.

  The original amplifier and speaker arrangement
  was more complex than the single signal path
  shown here. In particular, the Yamaha rotating
  speaker contributed a separate, moving sound
  alongside the main guitar amplification.
  The Quad Cortex Rotary block is an ear-led
  substitute, not a model of that complete rig.

  Watt Custom Clean is based on a modified
  Hiwatt-family amplifier, not the exact
  original DR103. The 412 Watt S4123 is likewise
  a practical Hiwatt-style cabinet substitute,
  rather than the original WEM and Fane combination.

  Guitar World's published equipment analysis
  includes an MXR Dyna Comp in the studio-era
  signal chain. A compressor is therefore offered
  as an optional block, although the Big Muff already
  supplies substantial compression.

  Delay and Plate reverb are optional modern
  conveniences for recreating the sense of space.
  Their precise settings are not presented as
  verified 1979 recording-session settings.

  If you want a closer approximation of the
  Yamaha system, experiment with parallel routing
  and a dedicated rotary-flavoured path, matching
  the levels carefully. For a simple preset,
  the serial chain here is more approachable.

# BEFORE YOU BUILD

before_you_build: >-
  This is an original, ear-led Quad Cortex recipe
  inspired by the 1979 studio recording. It is not
  an exact recreation of the original recording
  chain or a downloadable Neural Capture.

  Tune to standard E-A-D-G-B-E. Select the bridge
  pickup on a Stratocaster-style guitar.
  A moderately powerful bridge single-coil is
  ideal, but a conventional Strat pickup can
  work with some EQ adjustment.

  If using humbuckers, reduce the fuzz level or
  sustain as needed and consider trimming bass.
  Keep the guitar volume fully open while making
  the initial settings.

  This is a lead tone. Use monitoring at a
  comfortable level and match the output volume
  when comparing different settings.

# BUILD INTRODUCTION

build_intro: >-
  These are suggested starting points rather than
  documented studio control settings. Values
  expressed from 0 to 10 are approximate targets;
  the available controls and ranges may differ
  between Quad Cortex devices.

  Build the dry fuzz, amplifier and cabinet sound
  first. Add movement and ambience afterwards.
  The most important test is whether sustained
  notes remain musical during bends and vibrato.

# STEP-BY-STEP BUILD

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to standard E-A-D-G-B-E. Select the
      bridge single-coil pickup and begin with
      the guitar volume fully open. Use a firm
      but controlled pick attack. Start with
      moderate playing dynamics so you can hear
      whether the fuzz compresses the notes
      naturally.

  - title: "Add optional compression"
    description: >-
      A compressor is not essential because the
      fuzz already provides considerable sustain.
      If desired, choose a gentle compressor and
      place it before Fuzz Pi. Start with light
      compression and unity output level.
      Bypass it if the attack becomes too flat
      or the noise floor increases noticeably.

  - title: "Set the Fuzz Pi"
    description: >-
      Choose Fuzz Pi, the Quad Cortex Big Muff
      model. Begin with Sustain around 6/10,
      Tone around 5.5/10 and Volume adjusted
      to achieve a healthy, controlled level.
      These are approximate starting positions.
      Listen for a thick singing note rather
      than a harsh, spluttering fuzz.
      If sustain is already plentiful, reduce
      Sustain before adding more compression.

  - title: "Set Watt Custom Clean"
    description: >-
      Choose Watt Custom Clean. Keep the amp
      relatively clean and high-headroom.
      As an approximate starting point, try
      Gain or input drive around 3.5/10,
      Bass 5/10, Mid 5.5/10, Treble 5/10
      and Presence 4.5/10 where those controls
      are available. Use the appropriate
      output or master control to match volume.
      The fuzz should supply most of the
      distortion. Adjust by ear rather than
      treating these values as exact settings
      for every amp parameter.

  - title: "Choose the speaker cabinet"
    description: >-
      Select 412 Watt S4123. Start with a
      dynamic microphone, positioned a little
      away from the speaker centre. If the
      cabinet block offers low and high cuts,
      try approximately 80 Hz and 7 kHz.
      Treat these as initial EQ targets,
      not fixed rules. Move the microphone
      or lower the high cut if the top end
      sounds brittle. Keep enough midrange
      for bends to project clearly.

  - title: "Add rotating-speaker movement"
    description: >-
      Add the Rotary modulation block after
      the cabinet in this simplified chain.
      Start with a slow speed and a restrained
      mix of approximately 10-15 percent,
      where a mix control is available.
      The effect should provide a gentle
      moving texture rather than a pronounced
      swirling sound. Increase it slightly
      for a more spacious interpretation.
      This is an approximation of the
      Yamaha RA-200 contribution, not a
      reproduction of its original routing.

  - title: "Add optional digital delay"
    description: >-
      Add Digital Delay after Rotary if the
      tone needs more space. Try a delay time
      around 370-430 ms, Feedback 15-20
      percent and Mix 10-15 percent.
      Start with 400 ms and two or three
      quiet audible repeats. These values
      are modern suggested settings, not
      verified studio delay measurements.
      Bypass the delay if it obscures the
      phrasing or makes fast passages unclear.

  - title: "Add optional plate reverb"
    description: >-
      Add Plate at the end of the chain.
      Start with a decay around 2 seconds
      and a low Mix of approximately
      8-12 percent. The reverb should
      support the sustained notes without
      washing out the bends. Compare the
      sound with the block bypassed and
      use the smallest amount that
      provides the required space.

# SCENES

scenes:
  - id: "A"
    name: "Studio Outro"
    description: >-
      Main 1979 studio-inspired lead sound.
      Fuzz Pi, Watt Custom Clean and
      412 Watt S4123 active. Rotary set
      very subtly, around 10 percent
      mix if available. Compressor,
      Digital Delay and Plate initially
      bypassed. Aim for focused sustain,
      clear note separation and
      controlled upper mids.

  - id: "B"
    name: "Spacious Outro"
    description: >-
      Keep the same fuzz, amplifier and
      cabinet settings as Scene A.
      Increase Rotary movement slightly,
      towards approximately 15 percent
      mix. Activate Digital Delay at
      roughly 400 ms with a low mix
      and add a small amount of Plate
      reverb. This scene is a more
      spacious playing alternative,
      not a claim about a separate
      documented 1979 studio setup.

# TROUBLESHOOTING

troubleshooting:
  - problem: "Too fizzy?"
    solution: >-
      Lower the Fuzz Pi Tone or the amp
      Presence slightly. Try moving the
      cabinet microphone away from the
      speaker centre before removing
      too much treble.

  - problem: "Not enough sustain?"
    solution: >-
      Raise Fuzz Pi Sustain gradually.
      Check that the amp remains clean
      enough for the notes to stay clear.
      Add gentle compression only if
      the fuzz alone is insufficient.

  - problem: "Too muddy?"
    solution: >-
      Reduce Bass on the amplifier
      or use a slightly higher cabinet
      low cut. If using humbuckers,
      try lowering the guitar output
      into the fuzz.

  - problem: "Too much movement or wash?"
    solution: >-
      Reduce Rotary mix first.
      Then lower Delay Mix or Reverb
      Mix. The central lead sound
      should remain strong with
      all ambience effects bypassed.

---
