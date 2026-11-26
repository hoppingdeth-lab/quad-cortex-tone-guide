---
title: "Sultans of Swing"
artist: "Dire Straits"
album: "Dire Straits (1978)"
description: "A clean, touch-sensitive Strat tone for the fingerpicked rhythm, fills and expressive lead sections."
tuning: "Standard (E-A-D-G-B-E)"
guitar: "Strat-style guitar with single-coil pickups; bridge and middle pickup position"
playing_style: "Bare-finger picking with thumb, index and middle fingers; light, controlled attack and expressive vibrato"
tone_type: "Clean"
draft: false

chain:
  - name: "Opto Comp"
    type: "compressor"
    description: "Subtle compression to even peaks while preserving the finger attack"

  - name: "US TWN Normal"
    type: "amp"
    description: "Clean Twin-style platform; a practical approximation, not a confirmed studio amp"

  - name: "212 US TWN CK2"
    type: "cab"
    description: "Twin-style 2x12 cabinet with Jensen C12K-2 speakers"

  - name: "Room"
    type: "reverb"
    description: "Low-mix room ambience for a restrained sense of space"

sound: >-
  Bright, clean and articulate, with a rounded, vocal quality to picked
  notes and enough body for the rhythm chords. The amp stays clean as the
  player moves from light, precise fills to the stronger first solo and
  the freer closing solo. Compression and a small amount of room ambience
  support the sound without flattening the dynamics or washing out the notes.

beginner_route: >-
  Tune to standard, select the bridge and middle pickups on a Strat-style
  guitar, and play with your fingers. Build the clean Twin-style amp and
  cabinet first. Add only subtle compression and low-mix room reverb.
  Use Scene A for rhythm and fills; switch to Scene B for the solos’ small
  level lift. Let your picking hand create the change in intensity.

veteran_notes: >-
  Knopfler described the song’s original composition on National Steel in
  open tuning, but said he never performed it that way; it changed when
  he played it on his 1961 Strat. He also described a Fender Twin and the
  selector position between the middle and rear pickups when discussing
  the solo. These are useful tonal references, not a verified studio
  equipment list: producer Muff Winwood recalled trying various hired
  amps and effects and said the guitar received compression and reverb.
  US TWN Normal and 212 US TWN CK2 are therefore practical Quad Cortex
  approximations. Opto Comp and Room are convenient stock choices; their
  specific models are not claimed to match the recording equipment.

before_you_build: >-
  This is an original, ear-led Quad Cortex starting point, not an exact
  studio signal-chain claim or a supplied preset file. Use standard
  tuning (E-A-D-G-B-E). The song began as an open-tuning composition on
  National Steel, but Knopfler said he never performed it that way.
  Select bridge plus middle pickup on a Strat-style guitar, or use the
  closest bright, clear single-coil setting available. The bridge/middle
  combination is commonly called position two on a five-way Strat switch.

build_intro: >-
  Build the serial chain from left to right. The numerical values below
  are starting points for this clean approximation; match levels by ear
  and adjust for your guitar, pickups, monitoring and playing strength.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to standard E-A-D-G-B-E. Select bridge plus middle pickups.
      Use bare fingers, with the thumb handling the lower strings and
      index and middle fingers articulating the upper strings. Keep the
      attack light for the rhythm and fills, then increase picking
      intensity for the solos.

  - title: "Set up the amplifier"
    description: >-
      Add US TWN Normal. Start with Volume at 3.5/10, Bass 4/10,
      Middle 5.5/10, Treble 5/10 and Presence 4/10. Keep the sound clean
      on your hardest picked notes. Adjust the amp output to match the
      bypassed signal rather than using amp gain for the Scene lift.

  - title: "Configure the cabinet"
    description: >-
      Add 212 US TWN CK2 after the amp. Start with a dynamic-style mic
      slightly off the speaker centre and close to the grille, if those
      controls are available in your cab view. If the result is sharp,
      move the mic farther off-centre or reduce the high cut towards
      7 kHz; if it is boomy, raise the low cut towards 90 Hz.

  - title: "Set subtle compression"
    description: >-
      Place Opto Comp before the amp. Aim for only 1–3 dB of gain
      reduction on the strongest notes, with a gentle ratio around 2:1
      if that control is available. Match the output level with the block
      bypassed. Back it off if the notes lose their natural attack.

  - title: "Add restrained room ambience"
    description: >-
      Place Room after the cabinet. Start with decay around 1.2 seconds
      and mix around 8%. Keep the direct note clear and in front; lower
      the mix if the reverb becomes obvious between phrases. No delay or
      modulation is needed for this recipe.

  - title: "Set the Scenes"
    description: >-
      In Scene A, keep the amp clean, compressor subtle and Room reverb
      low. In Scene B, keep the same tone and effects, then assign the
      Quad Cortex lane output volume to a level about 1.5 dB above Scene A.
      Match Scene A and B at performance volume before saving.

scenes:
  - id: "A"
    name: "Rhythm and Fills"
    description: >-
      Clean amp and cabinet, subtle compression and low-mix Room reverb.
      Set the lane output to the base level. Use for the opening, verses
      and the rhythm passages beneath the solos.

  - id: "B"
    name: "Lead and Outro"
    description: >-
      Keep the same clean amp, compressor and reverb settings. Assign the
      lane output volume about 1.5 dB higher than Scene A for the first
      solo, later lead fills and the extended closing solo. The lift is a
      practical proposal; adjust it to sit clearly without making the tone
      louder than the band mix requires.

troubleshooting:
  - problem: "Too bright?"
    solution: >-
      Reduce Treble or Presence slightly, or move the cabinet mic position
      farther off-centre. Keep enough upper-mid detail for picked notes
      to remain clear.

  - problem: "Too muddy?"
    solution: >-
      Reduce Bass slightly and raise the cabinet low cut towards 90 Hz.
      Check that the reverb mix remains low.

  - problem: "Notes feel too compressed?"
    solution: >-
      Reduce the Opto Comp threshold or compression amount until only
      the strongest notes are gently controlled. Keep the output level
      matched when comparing the block bypassed and active.

  - problem: "Lead Scene is not clear enough?"
    solution: >-
      Check that Scene B has the lane output volume assigned and saved.
      Increase the lift only as needed; keep the amp clean and preserve
      the same effects settings.
---