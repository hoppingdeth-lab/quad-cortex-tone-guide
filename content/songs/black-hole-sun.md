---
title: "Black Hole Sun"
artist: "Soundgarden"
album: "Superunknown (1994)"
description: "A song-inspired Quad Cortex approximation of Kim Thayil's aggressive chorus and solo guitar parts on the original studio recording."
tuning: "Drop D (D-A-D-G-B-E)"
guitar: "Guild S-100-style guitar with humbuckers is a suitable starting point. Try the bridge pickup for bite; the exact guitar and pickup used on Thayil's parts are not confirmed."
playing_style: "Aggressive, expressive lead phrasing with bends, vibrato and a deliberately unpredictable edge; keep the chorus parts broad and sustained."
tone_type: "High Gain"
draft: false

chain:
  - name: "CA Duo Ch3 Vintage"
    type: "amp"
    description: "Dual Rectifier-based amp model providing the thick, overdriven foundation."

  - name: "412 CA Stand OS A V30 ’01"
    type: "cab"
    description: "Mesa-style 4x12 cabinet with Vintage 30 speakers; a practical match for the amp model."

  - name: "Rotary"
    type: "modulation"
    description: "Optional Leslie-inspired movement for the chorus"
    optional: true

sound: >-
  A thick, forceful lead sound with enough midrange to remain audible
  over the rhythm guitars. The amp supplies the main overdrive, with
  a firm low end and a clear pick attack. Use the Rotary block sparingly
  for a little motion in the chorus colour parts. The solo should feel
  more aggressive and less delicate than the verse arpeggios; do not
  add so much gain or modulation that the notes lose their shape.

beginner_route: >-
  Start with CA Duo Ch3 Vintage and 412 CA Stand OS A V30 ’01.
  Use Drop D tuning and a humbucker-equipped guitar. Set the amp for
  a moderately high-gain sound, then adjust the mids until the lead
  notes cut through without becoming harsh. Add the Rotary block only
  after the basic amp and cabinet sound works. Use a small amount for
  chorus movement and bypass it if it blurs the solo.

veteran_notes: >-
  Kim Thayil confirmed he played the chorus, solo and colour parts on the studio recording, while Chris Cornell handled the verse guitar. Thayil described his solo as aggressive and unpredictable, with a different Leslie cabinet speed used for the chorus. His exact guitar, pickups, amp and settings remain undocumented. He used Guild S-100 guitars on Superunknown, making an S-100 with humbuckers a reasonable starting point, though not track-verified.

  Producer Michael Beinhorn described blending a Marshall JMP 50 and Mesa/Boogie Dual Rectifier for the album's heavy guitar sound, but this isn't confirmed for Thayil's solo. Quad Cortex's CA Duo Ch3 Vintage accurately models the Dual Rectifier, while Brit Plexi 50 Bright models a related Marshall Lead 50. Neither recreates the full studio chain, and this recipe uses a single amp rather than a two-amp blend.

  The Quad Cortex Rotary block approximates the Leslie effect, but not the original Model 16, routing, mic blend or layered recordings. Although rotary effects featured on the track, their precise use on Thayil's overdubs is unclear. Thayil often preferred a warmer neck pickup for solos, depending on the rhythm guitar tone, so choose bridge or neck based on your guitar and mix rather than treating either as a confirmed setting.

before_you_build: >-
  Some pitch analysis suggests the released recording
  runs noticeably above concert-pitch Drop D.
  Use standard Drop D for practice, then check
  tuning against the recording before playing along.

  Use a humbucker-equipped guitar if available. Begin with the bridge
  pickup for a firm attack; try the neck pickup if the bridge sounds
  too sharp or thin. These are practical recommendations rather than
  confirmed settings for Thayil's recorded parts. Check tuning and
  intonation after lowering the low E string.

build_intro: >-
  All numerical values below are suggested starting points, not
  recovered studio settings. Control ranges can differ between devices.
  Build and level-match the amp and cabinet first. Add the Rotary block
  only if the part needs more movement.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to Drop D (D-A-D-G-B-E) and check the low string's intonation.
      Start with a humbucker-equipped guitar and the bridge pickup.
      If the sound is too bright, try the neck pickup or reduce the
      amp's treble and presence. Match the recording's pitch by ear
      when playing along.

  - title: "Set the amplifier"
    description: >-
      Select CA Duo Ch3 Vintage. As approximate starting positions,
      try Gain around 5/10, Bass 4.5/10, Mid 5.5/10, Treble 5/10 and
      Presence 4/10 where those controls are available. Set the amp
      output for a consistent level rather than using output volume
      to create extra distortion. These are practical starting values,
      not Kim Thayil's documented settings.

  - title: "Choose the cabinet"
    description: >-
      Select 412 CA Stand OS A V30 ’01. Start with a dynamic microphone
      slightly off the speaker centre if the cabinet block offers mic
      choices. If low and high cuts are available, try approximately
      80 Hz and 8 kHz as initial targets. Adjust the microphone position
      and cuts by ear; keep enough low mids for body while preserving
      the pick attack.

  - title: "Add restrained rotary movement"
    description: >-
      Add Rotary after the cabinet for this simple serial approximation.
      Begin with a slow speed and a low mix, around 10 percent if a mix
      control is available. Increase it slightly for the chorus colour
      parts, then bypass it if it softens the solo attack. This is a
      Quad Cortex starting point, not a verified setting or reconstruction
      of the Leslie Model 16 routing.

  - title: "Balance the solo level"
    description: >-
      Compare the lead level against the backing track at performance
      volume. If the solo needs to come forward, try a small scene level
      increase of about 1 to 2 dB before adding more gain. Keep bends
      and vibrato clear; the original solo's character comes from its
      phrasing as much as from distortion.

scenes:
  - id: "A"
    name: "Chorus Colour"
    description: >-
      Use CA Duo Ch3 Vintage and 412 CA Stand OS A V30 ’01 with the
      amp around the stated starting settings. Engage Rotary slowly
      and subtly for added movement. The Rotary amount is an
      approximation of the chorus texture, not a claim about the exact
      studio effect settings.

  - id: "B"
    name: "Thayil Solo"
    description: >-
      Keep the same amp and cabinet. Raise the scene level by roughly
      1 to 2 dB if needed to bring the lead forward, and increase amp
      Gain slightly only if the notes need more sustain. Keep Rotary
      low or bypass it if it blurs the bends. This scene is a practical
      performance setup, not a recovered recording preset.

troubleshooting:
  - problem: "The solo sounds too thin?"
    solution: >-
      Increase the amp Mid slightly and check that
      the cabinet is not removing too much low-midrange.
      Try the neck pickup for a fuller lead sound.
      If the tone becomes muddy, return to the bridge
      pickup and adjust the EQ instead.

  - problem: "The sound is harsh or fizzy?"
    solution: >-
      Reduce Treble or Presence slightly, move the cabinet microphone
      farther from the speaker centre if available, or lower the high
      cut. Avoid adding more gain until the basic amp tone is balanced.

  - problem: "The lead disappears in the mix?"
    solution: >-
      Raise the scene level by a small amount and adjust the Mid control
      before increasing Gain. If the backing guitar is already warm,
      try the bridge pickup for a clearer attack.

  - problem: "The Rotary effect blurs the part?"
    solution: >-
      Lower its mix or bypass it for the solo. Use the effect as a light
      colour rather than an obvious swirl; the studio's rotating-speaker
      sound and routing are not reproduced exactly by this serial chain.
---