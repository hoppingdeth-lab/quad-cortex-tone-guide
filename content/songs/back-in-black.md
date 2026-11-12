---
title: "Back in Black"
artist: "AC/DC"
album: "Back in Black (1980)"
description: "Angus Young's unmistakable SG-and-Marshall crunch: punchy open chords, sharp pick attack and a dry, powerful classic-rock sound."
tuning: "Standard (E-A-D-G-B-E)"
guitar: "Gibson SG-style guitar with medium-output humbuckers; bridge pickup"
playing_style: "Precise riffing, punchy open chords, controlled palm muting, blues-rock bends and confident pick attack"
tone_type: "Crunch"
draft: false

# SIGNAL CHAIN
# A deliberately simple, mostly dry guitar sound.
# Optional blocks can be bypassed.

chain:
  - name: "GAIN"
    type: "utility"
    description: "Optional modest input boost"
    optional: true

  - name: "BRIT PLEXI 100 PATCH"
    type: "amp"
    description: "Classic British valve crunch"

  - name: "412 BRIT 60B GB '71"
    type: "cab"
    description: "Marshall-style 4x12 cabinet"

# THE SOUND

sound: >-
  A raw, powerful classic-rock tone with tight bass,
  forward midrange and a bright, biting pick attack.
  The opening riff should sound big and aggressive
  without being heavily distorted. Each chord
  must retain its shape, and the spaces between
  the notes should remain clear and intentional.

  The amplifier supplies a lively, open crunch
  that responds to playing dynamics. Hard-picked
  chords break up more strongly, while lighter
  playing cleans up naturally.

  The sound should be relatively dry and immediate.
  There is no need for prominent delay, chorus,
  fuzz or modern high-gain distortion.

  This recipe focuses on Angus Young's guitar
  character on the original 1980 studio recording.
  Malcolm Young's separate rhythm guitar and
  the original studio recording contribute
  substantially to the full recorded sound.

# BEGINNER ROUTE

beginner_route: >-
  Start with just Brit Plexi 100 Patch and
  412 Brit 60B GB '71. Use the bridge humbucker
  on an SG-style guitar and set the amp for
  moderate crunch rather than heavy distortion.

  Play the opening riff slowly. Check that
  the muted notes sound short and punchy,
  while the open chords ring clearly.
  If the chords become blurred, reduce
  amplifier drive before adjusting the EQ.

  Keep the mids present. Do not scoop them
  out to create an artificially heavy sound.
  The important qualities are attack,
  definition and natural valve-like breakup.

  Leave the optional Gain block bypassed
  until the basic sound is working.
  If your pickups are weak or the amp
  needs a little extra push, add a small
  boost and compare at matched loudness.

  Above all, concentrate on the pauses,
  chord timing and right-hand dynamics.
  They are essential to making this
  simple rig sound convincing.

# VETERAN NOTES

veteran_notes: >-
  Angus Young is closely associated with Gibson
  SG guitars, vintage Marshall amplification
  and Marshall 4x12 cabinets. Published
  recording-era accounts identify 100-watt
  Super Lead amplifiers, alongside other
  vintage Marshall heads including JTM50
  models, in his Back in Black-era equipment.
  
  Tony Platt, who engineered the album,
  explained that the band recorded with
  a strong live-performance approach.
  He describes using Neumann U67 and
  U87 microphones on the guitar cabinets,
  generally with multiple microphones
  capturing different speakers.
  
  Platt also confirmed that Angus played
  through a wireless system which imparted
  a distinctive midrange emphasis.
  The Schaffer-Vega Diversity System
  included preamplification and signal
  processing that could colour the tone.

  Brit Plexi 100 Patch is based on
  a Marshall Super Lead 100 and makes
  a strong starting point for this sound.

  The selected 412 Brit 60B GB '71 uses
  an early Greenback-style speaker sound.
  Period accounts describe Marshall
  cabinets fitted with G12-65 speakers,
  so this cabinet should be a practical tonal alternative.

  The optional Gain device is intended
  only to provide a small signal-level
  increase. It does not recreate the
  compression, preamplifier behaviour
  or frequency response of the original
  Schaffer-Vega wireless system.

  For a more advanced recreation,
  audition alternative Marshall cabinet
  captures or impulse responses, especially
  ones based on Celestion G12-65 speakers.  

  The original album's guitar tracks
  were shaped by microphone placement,
  room acoustics, blending and mixing.
  This simplified mono signal chain
  is designed for practical playing,
  not an exact reconstruction of
  the multitrack recording.

# BEFORE YOU BUILD

before_you_build: >-
  This is an original, ear-led Quad Cortex
  recipe inspired by Angus Young's
  guitar sound on the 1980 studio recording.
  It is not a claim to reproduce the
  exact session settings or a supplied
  Neural Capture.

  Tune to standard E-A-D-G-B-E.
  Start with the bridge humbucker
  of an SG-style guitar.

  A medium-output humbucker is a good
  match. Very hot pickups may produce
  too much distortion, so reduce the
  amplifier drive or input level
  if necessary.

  Set your guitar volume fully open
  while dialling in the main riff.
  Experiment with
  rolling it back slightly to
  clean up the amplifier.

  The core signal path consists of
  one amp and one cabinet. No
  parallel routing is required.

  Use a comfortable monitoring level
  and match output loudness when
  comparing changes.

# BUILD INTRODUCTION

build_intro: >-
  These settings are suggested Quad Cortex
  starting points, not documented values
  from the original recording sessions.

  Some controls may have different names
  or ranges on the selected device.
  Values expressed from 0 to 10 are
  approximate targets rather than
  guaranteed one-to-one parameter values.

  The aim is an open, dynamic crunch.
  Adjust the amplifier gain first,
  then the cabinet and EQ, and only
  then consider a small input boost.

# STEP-BY-STEP BUILD

build_steps:
  - title: "Tune the guitar and select the pickup"
    description: >-
      Tune to standard E-A-D-G-B-E.
      Select the bridge humbucker.
      Begin with the guitar volume
      and tone controls fully open.
      Check that your pickup height
      and input level are sensible.
      Use confident downstrokes
      and make the muted notes
      rhythmically precise.

  - title: "Add Brit Plexi 100 Patch"
    description: >-
      Select Brit Plexi 100 Patch,
      the Quad Cortex model based on
      a Marshall Super Lead 100 with
      patched input channels.
      Begin with moderate drive.
      If separate bright and normal
      channel volumes are available,
      start with the bright channel
      around 5/10 and the normal
      channel around 3/10.
      Adjust these by ear to achieve
      crunchy chords without excessive
      compression or saturation.

  - title: "Dial in the amplifier EQ"
    description: >-
      As approximate starting targets,
      try Bass 4/10, Middle 6.5/10,
      Treble 6/10 and Presence 3.5/10
      where equivalent controls exist.
      The midrange should be prominent,
      with enough treble to make the
      opening riff cut through.
      Keep the bass controlled.
      If the sound is harsh, reduce
      Presence before heavily
      cutting the upper mids.

  - title: "Choose the Marshall-style cabinet"
    description: >-
      Add 412 Brit 60B GB '71.
      Begin with a dynamic microphone
      positioned slightly away from
      the centre of the speaker cone.
      If the cabinet block offers
      filtering, try a low cut near
      75-85 Hz and a high cut around
      7-8 kHz as starting points.
      Move the mic towards the edge
      if the tone sounds too sharp.
      This Greenback cabinet is a
      substitute for the period
      G12-65-equipped Marshall cabs.

  - title: "Check the amount of distortion"
    description: >-
      Play the opening riff at
      the intended performance level.
      Individual chord notes should
      remain recognisable and muted
      notes should sound punchy.
      If the sound resembles modern
      high gain, reduce the amplifier
      channel volumes or input drive.
      A slightly cleaner sound that
      responds strongly to picking
      will usually work better
      than excessive saturation.

  - title: "Experiment with optional input gain"
    description: >-
      If additional push is needed,
      insert the stock Gain utility
      block before the amplifier.
      Begin at unity gain, then
      experiment with a modest
      increase of roughly 1-2 dB.
      This may bring the amplifier
      into breakup a little sooner.
      It does not model the original
      Schaffer-Vega wireless system.
      Bypass it if the guitar already
      drives the amplifier adequately.

  - title: "Set the rhythm Scene"
    description: >-
      Make Scene A the main rhythm
      tone. Keep the optional Gain
      block bypassed initially.
      Use enough amplifier crunch
      for hard-struck chords to
      sound aggressive while
      retaining the riff's spaces
      and definition.
      Avoid added delay or reverb
      at this stage.

  - title: "Create a slightly hotter lead Scene"
    description: >-
      Copy the basic rhythm sound
      to Scene B. Raise the
      amplifier drive a small amount,
      or activate the optional Gain
      block with a modest boost.
      Increase output level slightly
      if needed for solos.
      Avoid a large increase in
      distortion. The lead should
      sound like the same guitar
      and amplifier being played
      more assertively.

# SCENES

scenes:
  - id: "A"
    name: "Back in Black Rhythm"
    description: >-
      The main opening-riff tone.
      Brit Plexi 100 Patch and
      412 Brit 60B GB '71 active.
      Optional Gain bypassed.
      Moderate crunch, prominent
      mids, controlled bass and
      crisp chord attack.
      Keep the sound dry
      and rhythmically focused.

  - id: "B"
    name: "Angus Lead"
    description: >-
      The same amp and cabinet
      with a little extra push.
      Increase channel drive
      slightly or enable a
      modest input boost.
      Add a small level lift
      if required for a solo.
      Maintain the natural
      midrange and avoid
      heavy additional effects.
      This is a practical
      performance variation,
      not a separately verified
      studio amplifier setting.

# TROUBLESHOOTING

troubleshooting:
  - problem: "Too much distortion?"
    solution: >-
      Reduce the amplifier channel
      volumes or drive first.
      Check that the optional Gain
      block is bypassed.
      The riff should have
      punch and definition,
      not dense saturation.

  - problem: "Too bright or harsh?"
    solution: >-
      Lower Presence slightly.
      Move the cabinet microphone
      further from the speaker
      centre. Reduce Treble only
      if the sharpness remains.

  - problem: "Too muddy?"
    solution: >-
      Reduce amplifier Bass and
      check the cabinet low cut.
      Avoid excessive input drive.
      Keep enough midrange to
      preserve chord clarity.

  - problem: "Sounds too thin?"
    solution: >-
      Increase the normal-channel
      contribution on the patched
      Plexi if available.
      Try a fuller microphone
      position or add a little
      low-midrange. Do not
      immediately raise the gain.

  - problem: "Not enough punch?"
    solution: >-
      Reduce distortion slightly
      and make the pick attack
      more deliberate. Try a
      modest input boost only
      after the basic tone is
      balanced. Check that the
      cabinet is not excessively
      filtered.

  - problem: "Lead Scene is too loud?"
    solution: >-
      Reduce the Scene B output
      level while preserving
      its slightly hotter
      amplifier response.
      Compare both Scenes at
      matched perceived loudness
      before deciding how much
      solo lift is required.

---
