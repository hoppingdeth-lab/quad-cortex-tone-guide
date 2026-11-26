---
title: "This Charming Man"
artist: "The Smiths"
album: "Single (1983); later included on Hatful of Hollow (1984)"
description: "Johnny Marr-inspired clean, chiming guitar with a Twin-style core and optional stereo width and reverse texture for the song’s layered arrangement."
tuning: "F# standard (F#-B-E-A-C#-F#)"
guitar: "Rickenbacker 330-style guitar for the bright main part, with a Telecaster-style guitar as a useful additional layer or substitute"
playing_style: "Play tightly picked arpeggios, clipped rhythmic figures and bright chord voicings; keep the attack precise and let selected strings ring into one another."
tone_type: "Clean"
draft: false

chain:
  - name: "US TWN Vibrato"
    type: "amp"
    description: "Clean Fender Twin Reverb-style amp model; a practical match for Marr’s reported Twin setup"

  - name: "Tremolo"
    type: "modulation"
    description: "Optional subtle amplitude pulse to approximate the reported Twin vibrato setting if the amp model does not provide usable modulation controls"
    optional: true

  - name: "212 US TWN CK2"
    type: "cab"
    description: "Twin Reverb-style 2x12 cabinet with Jensen speakers; a stock clean-tone pairing"

  - name: "Doubler"
    type: "modulation"
    description: "Optional, restrained stereo width to suggest the layered guitar arrangement; not a replacement for separately played overdubs"
    optional: true

  - name: "Reverse Delay"
    type: "delay"
    description: "Optional low-mix reverse texture to suggest the backwards guitar layer; it does not reproduce a reversed recording"
    optional: true

  - name: "Hall"
    type: "reverb"
    description: "Optional longer reverb after Reverse Delay for the atmospheric reverse layer"
    optional: true

sound: >-
  Keep the core sound clean, bright and sharply articulated, with a
  quick attack and enough body for the overlapping chord shapes to
  remain distinct. The recognisable movement comes from the interlocking
  guitar parts, precise picking and selected ringing notes rather than
  heavy gain. For the fuller sections, add only modest stereo width.
  Reserve the reverse delay and long reverb for a faint atmospheric
  layer; they should not blur the main riff.

beginner_route: >-
  Start with US TWN Vibrato and 212 US TWN CK2. Keep the amp clean and
  focus on the tight, bright picking and ringing chord voicings. Add
  Tremolo only if you want a subtle pulse, then try Doubler at a low
  mix for a wider chorus sound. Leave Reverse Delay and Hall off until
  the core part is clear.

veteran_notes: >-
  Marr described the main recorded sound as a combination of
  Rickenbacker and Telecaster, and recalled using a loud Telecaster
  through a Fender Twin Reverb with its vibrato on. He also described
  many guitar overdubs, acoustic layers, a backwards guitar with long
  reverb and a metal-handled knife dropped onto the strings for a
  bright clang at the end of the chorus. These details describe a
  layered studio production, not one guitar running through a single
  effects chain.

  US TWN Vibrato and 212 US TWN CK2 are stock Quad Cortex models based
  on a Fender Twin Reverb and its 2x12 cabinet. Tremolo, Doubler,
  Reverse Delay and Hall are optional approximations for specific
  production colours. The reverse effect here is generated live and
  will not sound identical to recording a part backwards. The knife
  clang is a physical string effect; use a controlled harmonic or
  string scrape if you want a playable approximation.

  Marr’s reports include both an F#-tuned part and an open-chord
  Telecaster layer. They may describe different overdubs. F# standard
  is the practical starting point here; do not assume every layer
  used the same tuning. The tone and effect settings below are
  suggestions, not recovered session values.

before_you_build: >-
  This is an original, ear-led Quad Cortex recipe inspired by the
  studio recording. It is not an exact reconstruction of the many
  guitar overdubs or a supplied preset file.

  For the main part, use F# standard (F#-B-E-A-C#-F#), as Marr
  described tuning up to F#. To avoid the increased string tension,
  a capo at the second fret of a standard-tuned guitar gives the
  same sounding pitch for the same shapes. Check your chosen
  transcription: Marr also described an open-chord Telecaster layer,
  which may use a different tuning. Use a bright bridge-pickup sound
  as a practical starting point.

  This recipe uses one serial chain. Doubler, Reverse Delay and Hall
  are optional production approximations, not separate signal paths
  or substitutes for the original overdubs. Check stereo effects in
  mono before using them in a live or mono-output setup.

build_intro: >-
  All numerical values are practical starting points, not documented
  recording settings. Your guitar, pickups, monitoring and playing
  level will affect the result. Build the clean amp and cabinet first,
  then introduce effects one at a time and level-match them.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Use F# standard (F#-B-E-A-C#-F#) for the main part, or place a
      capo at the second fret of a standard-tuned guitar for the same
      sounding pitch. Marr also described an open-chord Telecaster
      layer, so check your transcription for any separate part that
      calls for another tuning. Start with a bright bridge-pickup
      sound and crisp, even picking.

  - title: "Set the Twin-style amp"
    description: >-
      Choose US TWN Vibrato. Keep the sound clean. As starting points,
      try Volume around 3.5/10, Bass 4/10, Mid 5/10 and Treble 6/10,
      where these controls are available. Set the output for your
      monitoring level. If the amp model offers usable vibrato or
      tremolo controls, begin with a slow rate and low intensity.

  - title: "Choose the cabinet"
    description: >-
      Place 212 US TWN CK2 after the amp. If microphone controls are
      available, start with a dynamic microphone slightly off the
      speaker centre. Try a low cut near 80 Hz and a high cut near
      9 kHz as initial targets. These are tonal suggestions, not
      documented microphone or cabinet settings from the session.

  - title: "Add subtle tremolo if needed"
    description: >-
      If the amp model does not provide usable vibrato or tremolo,
      enable the Tremolo block between the amp and cabinet. Start
      around 2 Hz with depth near 8-10%, if those controls are
      available. Keep the pulse subtle and do not use this block
      when the amp’s own modulation is already active.

  - title: "Add width for the fuller sections"
    description: >-
      Enable Doubler after the cabinet only if you are using a stereo
      output and want a modest widening effect. If a Mix control is
      available, begin around 10-15%. Keep the original attack clear
      and check the result in mono. This is a practical stand-in for
      layered takes, not a claim about the original signal processing.

  - title: "Shape the reverse texture"
    description: >-
      For an optional atmospheric layer, place Reverse Delay after
      Doubler and before Hall. Start with a low mix around 10-15%,
      minimal feedback and a time around 350-500 ms if the controls
      are available. Set Hall after it with a longer decay of roughly
      3-4 seconds and a low mix around 10-15%. Keep this texture
      faint enough that the dry picked part remains clear.

  - title: "Balance the Scenes"
    description: >-
      Use Scene A for the clear main part, Scene B for a slightly wider
      chorus texture and Scene C only when you want to suggest the
      backwards, reverberant layer. Match perceived volume between
      Scenes. These are performance proposals rather than recovered
      session configurations.

scenes:
  - id: "A"
    name: "Main Jangle"
    description: >-
      Use US TWN Vibrato and 212 US TWN CK2 with a clean amp setting.
      Keep Doubler, Reverse Delay and Hall bypassed. Use either the
      amp’s subtle vibrato/tremolo or the Tremolo block at low depth,
      not both. This Scene is for the main picked figure and clear
      interlocking chords.

  - id: "B"
    name: "Full Chorus"
    description: >-
      Keep the clean amp and cabinet settings. Engage Doubler at a
      modest stereo mix for a little extra width. Keep reverse delay
      and Hall bypassed so the chorus attack remains clear. Check the
      stereo effect in mono and match its output level to Scene A.

  - id: "C"
    name: "Reverse Colour"
    description: >-
      Keep the main amp and cabinet active. Engage Reverse Delay
      followed by Hall at the low mixes suggested above, with Doubler
      optional. Use this only as a restrained approximation of the
      backwards reverberant guitar layer; it is not the sound of the
      knife striking the strings.

troubleshooting:
  - problem: "The clean tone is too sharp?"
    solution: >-
      Reduce Treble slightly or move the cabinet microphone farther
      off the speaker centre if that control is available. Keep enough
      top end for the picked notes to retain their chime.

  - problem: "The sound is too thin?"
    solution: >-
      Raise the amp Mid slightly or bring the microphone closer to the
      speaker centre. Check that the low cut is not set too high.

  - problem: "The tremolo pulse is too obvious?"
    solution: >-
      Reduce Tremolo depth or bypass the block if the amp’s own
      modulation is active. Use only one tremolo source at a time.

  - problem: "Doubler sounds phasey or disappears in mono?"
    solution: >-
      Reduce its mix or bypass it. The original width came from
      separately performed overdubs, so a single stereo effect will
      not translate identically to mono.

  - problem: "Reverse Delay and Hall obscure the riff?"
    solution: >-
      Lower the Reverse Delay mix first, then shorten the Hall decay
      or reduce its mix. Keep these effects for a quiet background
      colour rather than the main guitar sound.

  - problem: "The F# tuning feels too tense?"
    solution: >-
      Use a capo at the second fret of a standard-tuned guitar to
      achieve the same sounding pitch without tuning every string
      higher. Check intonation and follow the tuning required by
      your chosen transcription.
---
```