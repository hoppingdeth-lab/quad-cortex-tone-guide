---
title: "Hot for Teacher"
artist: "Van Halen"
album: "1984 (1984)"
description: "Edward Van Halen's explosive brown sound: a roaring Plexi, articulate tapped notes, swinging shuffle riffs and dynamic clean passages."
tuning: "Standard (E-A-D-G-B-E)"
guitar: "Gibson Flying V-style or other humbucker guitar; bridge pickup for riffs, neck pickup for quieter passages"
playing_style: "Fast two-handed tapping, aggressive shuffle riffing, palm muting, legato, harmonics and wide controlled vibrato"
tone_type: "Crunch"
draft: false

# SIGNAL CHAIN
# The Plexi and cabinet are the essential components.
# Modulation, delay and reverb are optional.

chain:
  - name: "MX PHASE 95"
    type: "modulation"
    description: "Optional subtle phase movement"
    optional: true

  - name: "BRIT PLEXI 100 PATCH"
    type: "amp"
    description: "Saturated British valve crunch"

  - name: "412 BRIT 60B GB '71"
    type: "cab"
    description: "Warm, responsive Marshall-style speaker tone"

  - name: "TAPE DELAY"
    type: "delay"
    description: "Optional depth for leads"
    optional: true

  - name: "ROOM"
    type: "reverb"
    description: "Optional light studio ambience"
    optional: true

# THE SOUND

sound: >-
  An explosive, harmonically rich hard-rock guitar
  sound with a strong midrange, lively upper
  harmonics and a loose but controlled low end.

  The tone has more saturation than a traditional
  blues-rock crunch, yet it remains open and
  highly responsive to playing dynamics. Fast
  picked notes should be distinct, tapped notes
  should speak clearly and the main shuffle
  riff should feel punchy and rhythmically alive.

  The amplifier produces a warm, roaring
  distortion rather than the dense compression
  of a modern high-gain amplifier.

  The quieter passages provide a striking
  contrast, using a lower guitar volume and
  a softer pickup response to clean up the
  same basic amplifier sound.

  This recipe targets the original studio
  recording on Van Halen's 1984 album,
  rather than a later live performance.

# BEGINNER ROUTE

beginner_route: >-
  Start with only Brit Plexi 100 Patch and
  412 Brit 60B GB '71. Leave the phaser,
  delay and reverb bypassed.

  Select a bridge humbucker and set the
  amplifier for a strong, crunchy distortion.
  The aim is a warm, harmonically rich
  sound that responds to how hard you pick.

  Play a simple A power chord and listen
  for a clear initial attack followed by
  a lively, sustained decay. Next, try
  the main shuffle rhythm. If the
  individual notes become blurred,
  reduce the amplifier drive slightly.

  Do not add an overdrive pedal initially.
  The original Marshall-style amplifier
  character is the foundation of the sound.

  Once the main riff feels convincing,
  experiment with a tiny amount of room
  ambience. Add subtle phasing or delay
  only if they improve the result.

  For quieter passages, switch to the
  neck pickup and lower the guitar volume.
  This should clean up the amplifier
  without needing a separate clean amp.

# VETERAN NOTES

veteran_notes: >-
  Eddie Van Halen confirmed in a retrospective
  Guitar World interview that he used his
  1958 Gibson Flying V on Hot for Teacher.
  He also described recording the 1984 album
  through his longstanding Marshall amplifier
  and a single 4x12 cabinet at 5150 Studios.

  Although Eddie's Frankenstein and Kramer
  guitars are strongly associated with his
  image, the Flying V is a particularly
  important historical detail for this song.

  The original amplifier belonged to Eddie's
  well-known modified Marshall setup. Exact
  settings, operating voltage and internal
  modifications should not be assumed from
  generic internet diagrams. Brit Plexi 100
  Patch is based on a Marshall Super Lead
  100 and is a practical stock Quad Cortex
  approximation, not a recreation of every
  modification to Eddie's personal amplifier.

  The selected 412 Brit 60B GB '71 is based
  on a Marshall 1960B with Pulsonic
  Greenback speakers. It offers an
  appropriate vintage British cabinet
  character, but the exact cabinet,
  loudspeakers and microphone positions
  used on Hot for Teacher are not fully
  documented in the cited material.

  Eddie was known for using MXR phase
  effects and echo during his career.
  However, their precise application to
  the released Hot for Teacher guitar
  tracks is not established here.
  MX Phase 95 and Tape Delay are therefore
  optional tonal additions rather than
  mandatory parts of an authenticated rig.

  Contemporary accounts indicate that
  the quieter passages were recorded
  with the Flying V's neck pickup and
  its volume turned down. This supports
  using guitar volume and pickup selection
  to change the sound rather than relying
  on a second amplifier.

  The celebrated brown sound is not
  simply maximum preamp gain. Much of
  its character comes from power-amp
  response, speaker colour, controlled
  saturation and Eddie's extraordinary
  touch and timing.

  The original recording also includes
  studio engineering by Donn Landee.
  Microphone placement, tracking and
  mixing contribute to the finished
  sound and cannot be reproduced
  exactly by one signal chain.

  For advanced experimentation,
  compare the patched Plexi model
  with Brit Plexi 100 Bright and
  alternative vintage Marshall
  cabinet captures or impulse responses.
  Match loudness carefully before
  judging which combination is closer.

# BEFORE YOU BUILD

before_you_build: >-
  This is an original, ear-led Quad Cortex
  recipe inspired by the studio recording.
  It is not an exact reconstruction of
  Eddie Van Halen's personal amplifier,
  a verified recording-session preset
  or a supplied Neural Capture.

  Begin in standard E-A-D-G-B-E tuning.

  Some analysis of the released recording
  suggests a pitch slightly above
  conventional concert tuning.
  Standard tuning at A=440 Hz is
  recommended for normal practice.
  Fine-tune by ear if playing directly
  against the original recording.

  A guitar with a medium-output
  humbucker is a good starting point.
  A Flying V-style instrument is
  historically appropriate, but
  another humbucker guitar will work.

  Use the bridge pickup for the main
  riff and tapping passages. Start
  with the guitar volume fully open.
  The neck pickup with a lower volume
  setting provides an alternative
  for the quieter sections.

  Do not try to reproduce vintage
  amplifier voltage modifications
  using external mains equipment.
  The Quad Cortex amp model allows
  safe experimentation with the
  musical character of the sound.

# BUILD INTRODUCTION

build_intro: >-
  The settings below are suggested
  starting points, not documented
  knob positions from the 1984 sessions.

  Values expressed on a 0-10 scale
  are approximate tonal targets.
  Actual Quad Cortex controls may
  use different parameter names
  or ranges.

  Begin with the amplifier and
  cabinet only. Establish the
  fundamental crunch before adding
  any optional effects.

  Aim for the point where strong
  picking creates lively distortion
  but lighter picking remains
  articulate and dynamic.

# STEP-BY-STEP BUILD

build_steps:
  - title: "Tune and prepare the guitar"
    description: >-
      Start in standard E-A-D-G-B-E.
      Select the bridge humbucker.
      Set the guitar volume and tone
      controls fully open. Use a
      medium-output pickup if possible.
      Check the Quad Cortex input
      level for unwanted clipping.
      Practise the opening tapped
      phrase and a few shuffle-riff
      chords while setting the sound.

  - title: "Choose Brit Plexi 100 Patch"
    description: >-
      Add Brit Plexi 100 Patch.
      This is the core of the tone.
      Begin with the bright-channel
      contribution around 6/10
      and the normal-channel
      contribution around 4/10
      if separate channel-volume
      controls are available.
      Adjust these by ear to
      balance bright attack with
      the thicker low-midrange.
      Avoid adding an external
      overdrive at this stage.

  - title: "Set the amplifier EQ"
    description: >-
      As approximate starting
      targets, try Bass 4/10,
      Middle 6.5/10, Treble
      6/10 and Presence 5/10,
      where equivalent controls
      are available. The tone
      should have a forward
      midrange and singing upper
      harmonics without excessive
      harshness. If the low strings
      sound indistinct, reduce
      the normal-channel drive
      or bass slightly.

  - title: "Set the Marshall-style cabinet"
    description: >-
      Add 412 Brit 60B GB '71.
      Start with a dynamic
      microphone positioned
      slightly away from the
      speaker centre. A useful
      starting point is a low
      cut near 80 Hz and a high
      cut around 7-8 kHz if
      those controls are available.
      Move the mic away from the
      centre to reduce fizz.
      Keep the middle frequencies
      strong and natural.

  - title: "Balance crunch and articulation"
    description: >-
      Play the main shuffle riff,
      alternating hard-picked
      notes with lighter attacks.
      The low notes should be
      punchy and slightly loose,
      not heavily compressed.
      Every note should remain
      recognisable. If the guitar
      sounds like a modern
      high-gain metal amplifier,
      reduce drive. If the
      tapped introduction feels
      weak, increase the
      amplifier contribution
      gradually before adding
      any extra effects.

  - title: "Experiment with optional phase"
    description: >-
      Place MX Phase 95 before
      the amplifier. Start in
      a gentle four-stage
      phasing mode if available,
      with a slow rate around
      0.3-0.5 Hz or the
      equivalent low speed.
      Bypass it initially.
      Activate it only when
      a little movement adds
      character without making
      the notes sound hollow.
      Its use on the studio
      recording is not confirmed.

  - title: "Add optional echo"
    description: >-
      Place Tape Delay after
      the cabinet in this
      simplified digital chain.
      Start around 280 ms,
      Feedback approximately
      12-18 percent and Mix
      approximately 8-12
      percent. These are
      modern suggested values,
      not recorded delay
      settings. The echoes
      should be felt more
      than heard. Bypass the
      block for the driest
      riffing sound.

  - title: "Add a small amount of room"
    description: >-
      Place Room reverb at
      the end of the chain.
      Try a short decay around
      0.8-1.2 seconds and Mix
      around 5-8 percent.
      Compare the sound with
      the block bypassed.
      The original guitar
      should feel immediate
      and strong rather than
      washed out.

  - title: "Create the main riff Scene"
    description: >-
      Programme Scene A with
      Brit Plexi 100 Patch
      and 412 Brit 60B GB '71
      active. Keep MX Phase 95
      and Tape Delay bypassed.
      A small amount of Room
      may remain active if
      needed for the monitoring
      environment. Set the
      amplifier for open,
      punchy crunch and
      responsive rhythm playing.

  - title: "Create the tapping and lead Scene"
    description: >-
      Copy the core amp and
      cabinet settings to
      Scene B. Add a small
      output-level lift if
      required. Optionally
      enable a restrained
      Tape Delay for extra
      depth. Do not radically
      increase distortion.
      Fast tapped notes and
      harmonics should remain
      clear and well defined.

  - title: "Create the quieter interlude Scene"
    description: >-
      Programme Scene C using
      the same amplifier and
      cabinet as the other
      Scenes. Reduce amplifier
      drive slightly if needed.
      Switch to the guitar's
      neck pickup and roll
      the guitar volume down
      to approximately 3-5/10.
      Adjust the level by ear.
      Keep additional effects
      minimal. This approach
      reflects historical
      accounts of how Eddie
      achieved the contrast
      on the recording.

# SCENES

scenes:
  - id: "A"
    name: "Main Shuffle Riff"
    description: >-
      The primary Hot for Teacher
      rhythm tone. Brit Plexi
      100 Patch and 412 Brit
      60B GB '71 active.
      Optional phaser and
      delay bypassed. Use
      moderate-to-strong
      Plexi crunch with
      forward mids, tight
      timing and a lively
      attack. Room ambience
      may be added subtly
      if required.

  - id: "B"
    name: "Tapped Intro and Lead"
    description: >-
      Retain the same amplifier
      and cabinet sound with
      slightly more output
      presence if needed.
      Optionally enable
      a quiet Tape Delay.
      Keep saturation under
      control so two-handed
      tapping, legato and
      harmonics remain clear.
      A small boost in
      perceived level is
      preferable to a large
      increase in drive.

  - id: "C"
    name: "Quiet Interlude"
    description: >-
      Use the same Plexi and
      cabinet, with slightly
      reduced amplifier drive
      if required. Select
      the neck pickup and
      reduce guitar volume
      to clean up the sound.
      Keep phaser and delay
      bypassed initially.
      Aim for a softer,
      rounded guitar
      texture that contrasts
      with the aggressive
      shuffle riff.

# TROUBLESHOOTING

troubleshooting:
  - problem: "Too harsh or fizzy?"
    solution: >-
      Lower Presence slightly
      or move the cabinet
      microphone away from
      the speaker centre.
      Try reducing the bright
      channel before
      removing too much
      midrange.

  - problem: "Not enough brown-sound warmth?"
    solution: >-
      Increase the normal
      channel contribution
      slightly. Check the
      cabinet microphone
      position and avoid
      excessive high cuts
      that make the tone dull.
      Preserve the upper
      harmonics while adding
      low-midrange body.

  - problem: "Too much distortion?"
    solution: >-
      Reduce the amplifier
      channel volumes until
      the shuffle notes
      regain definition.
      The tone should be
      saturated but dynamic,
      not densely compressed
      like a modern metal amp.

  - problem: "Tapping sounds weak?"
    solution: >-
      Check technique,
      fretboard setup and
      hammer-on strength.
      Raise amplifier drive
      only a little if needed.
      Too much compression
      can make notes less
      distinct instead
      of more powerful.

  - problem: "Shuffle riff sounds muddy?"
    solution: >-
      Reduce Bass or the
      normal-channel drive.
      Try a slightly higher
      cabinet low cut.
      Use clear palm muting
      and allow space
      between notes.

  - problem: "Quiet Scene is still distorted?"
    solution: >-
      Lower the guitar volume
      further and use the
      neck pickup. If that
      is insufficient,
      reduce the amp
      channel contribution
      in Scene C while
      keeping the output
      level practical.

  - problem: "The sound is too swirly?"
    solution: >-
      Bypass MX Phase 95.
      The phaser is optional
      and should not dominate
      the basic Plexi sound.
      Lower the effect rate
      if you choose to
      keep it active.

  - problem: "Sound is too distant?"
    solution: >-
      Reduce Tape Delay Mix
      and Room reverb Mix.
      The guitar should have
      an immediate attack
      and remain forward
      in the mix.

---
