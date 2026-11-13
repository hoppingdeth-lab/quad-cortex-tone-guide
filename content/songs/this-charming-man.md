---
title: "This Charming Man"
artist: "The Smiths"
album: "Single (1983); The Smiths (1984)"
description: "Johnny Marr’s bright, tightly compressed and tremolo-touched guitar sound, inspired by the Telecaster and Rickenbacker layers on the original studio single."
tuning: "F# standard: F#–B–E–A–C#–F#"
guitar: "A Telecaster-style guitar is the closest starting point for the main recorded layer. Marr described the intro as mostly a borrowed 1953/54 Telecaster tracked with a Rickenbacker. A Rickenbacker-style guitar can supply a complementary jangle when double-tracking."
playing_style: "Pick the arpeggios evenly and let open strings ring into one another. Keep the attack bright and controlled; use tight rhythmic accents and let the tremolo add movement without obscuring the picked notes."
tone_type: "Clean"
draft: false

chain:
  - name: "Neural Compressor"
    type: "compressor"
    description: "Light compression."

  - name: "US TWN Vibrato"
    type: "amp"
    description: "Fender Twin Reverb-based amplifier model."

  - name: "212 US TWN CK2"
    type: "cab"
    description: "Matching Twin Reverb-style cabinet model."

  - name: "Tremolo"
    type: "modulation"
    description: "Adds the tremolo heard on the Twin-based guitar layer."

  - name: "Reverse Delay"
    type: "delay"
    optional: true
    description: "Optional approximation of one backwards guitar texture."

  - name: "Hall"
    type: "reverb"
    optional: true
    description: "Optional space for the backwards-texture approximation."

sound: >-
  Aim for a bright, crisp and tightly controlled guitar sound. The core
  character comes from the Telecaster and Rickenbacker blend, the firm
  picking attack, light compression and tremolo. Keep the main arpeggios
  clear and rhythmically precise. The original recording is much denser
  than a single guitar chain; the optional reverse and reverb blocks
  provide one playable texture, not a reconstruction of the full
  overdubbed arrangement.

beginner_route: >-
  Start with Neural Compressor, US TWN Vibrato, 212 US TWN CK2 and
  Tremolo. Use a Telecaster-style bridge pickup as a practical starting
  point, tune to F# standard if your strings and instrument can handle
  it, and play the arpeggios evenly. Keep the amp clean and the
  compressor light. Add the optional Reverse Delay and Hall only if you
  want an extra studio-like texture.

veteran_notes: >-
  Marr described the intro as mostly a borrowed 1953/54 Telecaster
  tracked with a Rickenbacker. In a separate interview, he said the
  Telecaster sound on “This Charming Man” was compressed and ran through
  a very loud Fender Twin Reverb with tremolo on. He also described the
  song as having around 15 guitar tracks, including acoustic parts, a
  backwards guitar and the knife-string clangs at the ends of choruses.

  This recipe models a single serial signal path for a practical
  Quad Cortex preset. It does not represent the original multitrack
  recording as a series of effects, and it does not recreate the
  different guitar layers. The optional Reverse Delay and Hall are
  effects-based approximations of one backwards, reverberant layer;
  they are not a literal recreation of the recording technique. The
  original compressor model, Twin revision, speaker cabinet, mic
  arrangement and exact effect settings remain unconfirmed.

  Marr identified F# standard tuning for the song. If you prefer not to
  raise all six strings, standard tuning with a capo at fret two is a
  practical pitch alternative, but changes the open-string feel and
  response. Use the Telecaster as the main tonal reference; a
  Rickenbacker-style guitar or a separately recorded second pass can
  add the documented complementary jangle.

before_you_build: >-
  Tune to F#–B–E–A–C#–F# if your strings and instrument are suitable
  for tuning a whole step above standard. Lighter-gauge strings can
  make this more practical; otherwise, use standard tuning with a capo
  at the second fret as an approximation. The source evidence identifies
  a borrowed early-1950s Telecaster and a Rickenbacker in the recorded
  blend, but does not establish the exact pickup selection for every
  overdub. Start with a bright Telecaster-style pickup setting and adjust
  by ear.

build_intro: >-
  All numerical values are practical starting points, not recovered
  studio settings. Build the clear, compressed amp tone first, then add
  tremolo. Use the reverse and reverb blocks only for an optional
  single-player texture; the original recording uses multiple overdubs.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to F#–B–E–A–C#–F# if appropriate for your guitar and strings.
      If not, use standard tuning with a capo at the second fret as a
      practical alternative. Begin with a Telecaster-style guitar and
      a bright pickup setting. Pick the arpeggios evenly, letting the
      open strings ring clearly.

  - title: "Set light compression"
    description: >-
      Select Neural Compressor before the amp. Aim for light, even
      compression rather than a squashed sound: use a low compression
      amount or adjust the threshold for roughly 2–4 dB of gain
      reduction on stronger attacks, if those controls are available.
      Match the output level to the bypassed sound. This approximates
      Marr’s description of a compressed Telecaster; it is not a
      verified original compressor setting.

  - title: "Set the Twin Reverb model"
    description: >-
      Select US TWN Vibrato. Keep the amp clean and bright. As approximate
      starting points on a 0–10 scale, try Volume around 5, Bass 4,
      Mid 5 and Treble 6 where those controls are available. Set output
      for a strong but comfortable level. The original amp was described
      as very loud, but do not use a high listening level as a substitute
      for the recorded amp volume.

  - title: "Choose the cabinet"
    description: >-
      Select 212 US TWN CK2. If microphone selection is available, begin
      with a dynamic microphone slightly off the speaker centre. If the
      cabinet block provides filters, try a low cut near 80 Hz and a
      high cut near 8 kHz. These are suggested starting points; the
      original speaker and recording microphone are not confirmed.

  - title: "Add tremolo"
    description: >-
      Place Tremolo after the cabinet in this simplified chain. Start
      with a moderate rate and a restrained depth, around 15–25% if the
      device uses a percentage control. Adjust by ear so the movement
      is audible but the arpeggios remain clear. The original Twin’s
      tremolo settings are unknown.

  - title: "Add optional reverse texture"
    description: >-
      For a single-player approximation of one backwards guitar layer,
      engage Reverse Delay and add a low level of Hall after it. Keep
      both effects subtle and bypass them for the core riff tone. This
      effect chain is a modern approximation; the original part was a
      separately recorded backwards guitar with reverb.

scenes:
  - id: "A"
    name: "Chiming Riff"
    description: >-
      Neural Compressor, US TWN Vibrato, 212 US TWN CK2 and Tremolo active.
      Keep Reverse Delay and Hall bypassed. Use a bright Telecaster-style
      sound and prioritise even picking and clear open strings.

  - id: "B"
    name: "Studio Texture"
    description: >-
      Keep the core amp and tremolo settings from Scene A. Engage Reverse
      Delay and Hall at low levels for a wider, more atmospheric single-
      player interpretation. These blocks approximate one overdub and
      do not reproduce the original multitrack arrangement.

troubleshooting:
  - problem: "The tone is too thin or piercing."
    solution: >-
      Reduce Treble slightly or use a fuller pickup setting. Check that
      the guitar is in the intended tuning; a capo alternative may feel
      different under the fingers and produce a different attack.

  - problem: "The arpeggios sound uneven."
    solution: >-
      Reduce compressor amount if the attack is being exaggerated or
      flattened. Focus on even picking and let each note ring clearly
      before increasing compression.

  - problem: "The tremolo obscures the rhythm."
    solution: >-
      Reduce Tremolo depth or lower its rate. The picked pattern should
      remain easy to follow with the effect engaged.

  - problem: "The sound is too clean or lacks body."
    solution: >-
      Raise the amp input or volume slightly, while keeping the output
      level comfortable. Try a little less compression if it is making
      the attack feel small.

  - problem: "Reverse Delay and Hall make the riff unclear."
    solution: >-
      Bypass both optional blocks or lower their mix levels. Use them
      only for the atmospheric texture; the main riff should work with
      the core chain alone.

---