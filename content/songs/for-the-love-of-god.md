---
title: "For the Love of God"
artist: "Steve Vai"
album: "Passion and Warfare (1990)"
description: "A singing, expressive seven-string lead tone with smooth sustain, subtle stereo width and spacious delay and reverb."
tuning: "Seven-string standard: B–E–A–D–G–B–E"
guitar: "Seven-string guitar, ideally an Ibanez Universe-style instrument. Start with the bridge humbucker for the lead; pickup choice is a practical recommendation, not a verified track-specific setting."
playing_style: "Use controlled legato, wide vibrato, expressive bends and long held notes. Shape the phrases with picking dynamics and guitar volume; let the delay and reverb support the sustain rather than obscure the note."
tone_type: "High Gain"
draft: true

chain:
  - name: "Chief DS1"
    type: "overdrive"
    optional: true
    description: "Optional front-end sustain and attack. Its presence in album-era equipment lists does not confirm that this pedal was used on this track."

  - name: "Brit 900 Lead"
    type: "amp"
    description: "A Marshall JCM900-based lead amp model used here as an era-informed approximation; the original track's exact amplifier is unconfirmed."

  - name: "412 Brit 60B GB 90s"
    type: "cab"
    description: "A practical British 4x12 cabinet approximation. The cabinet and microphone used for the original track are not confirmed."

  - name: "Micro Processor (ST)"
    type: "modulation"
    description: "Optional, subtle stereo widening inspired by the spacious studio character. This is a Micropitch-style approximation, not a recreation of a documented H3000 setting."

  - name: "Digital Delay"
    type: "delay"
    description: "Adds a restrained trailing repeat to held notes. The suggested time and mix are starting points, not original recording settings."

  - name: "Hall"
    type: "reverb"
    description: "Adds a smooth, spacious tail after the amp and cabinet. This is a practical reverb choice, not a claim about the original studio unit or routing."

sound: >-
  Aim for a smooth, singing lead tone with enough gain to sustain long notes,
  but with clear pick attack and expressive dynamics. The core sound should
  stay articulate through legato runs and wide vibrato. A small amount of
  stereo width, delay and hall reverb can suggest the expansive studio
  presentation without washing out the phrasing. These are proposed Quad
  Cortex settings, not verified settings from the recording.

beginner_route: >-
  Build the sound around the Brit 900 Lead and 412 Brit 60B GB 90s first.
  Use the bridge humbucker, set the amp for smooth sustain and make sure
  individual notes remain clear. Add Digital Delay and Hall gently. Add
  Micro Processor (ST) only if you want more stereo width, and try the
  optional Chief DS1 only if the amp alone does not sustain enough.

veteran_notes: >-
  Vai's official guitar inventory identifies the Ibanez Universe UV7PWH
  as the guitar used to record this song, and Vai has described recording
  the solo on a Universe seven-string. The original studio amplifier,
  cabinet, microphone, exact effect chain and settings are not established
  by the sources used here. Modified Marshalls and a Series 900 head are
  period clues, not confirmed track-specific equipment. Brit 900 Lead is
  therefore a reasoned amp approximation; Cravin X100 is an alternative
  worth trying if you want to explore the album-era Carvin X100B listing.
  Eventide H3000 and Lexicon 480L are associated with the album-era
  equipment, but Micro Processor (ST), Digital Delay and Hall are practical
  Quad Cortex substitutes rather than exact recreations of their hardware
  or the song's studio routing.

before_you_build: >-
  Use seven-string standard tuning B–E–A–D–G–B–E as the starting point.
  This is consistent with published seven-string transcriptions, but I found
  no track-specific source establishing an alternate tuning. Choose the
  bridge humbucker first for a focused lead sound; adjust pickup choice to
  your own instrument and the clarity of the high notes. Set guitar volume
  fully up while balancing the preset, then use your playing dynamics and
  guitar volume for expressive control. The suggested pickup and all
  numerical values below are practical starting points.

build_intro: >-
  These settings are starting points for the Quad Cortex, not recovered
  studio settings. Guitar output, monitoring level, pickups and playing
  touch will affect the result. Keep the amp and effects serial as listed;
  no parallel routing is required for this recipe.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune a seven-string to B–E–A–D–G–B–E. Start on the bridge humbucker
      with the guitar volume fully up. Check that bends and vibrato stay
      in tune, then use picking dynamics and the guitar volume to shape
      the sustain.

  - title: "Set the lead amplifier"
    description: >-
      Select Brit 900 Lead. As an initial range on a 0–10 scale, try Gain
      5.0, Bass 4.5, Mid 5.5, Treble 5.0 and Presence 4.5. Aim for a
      rounded, sustaining lead sound with enough midrange to keep notes
      present. Raise gain only until held notes sustain comfortably; do
      not treat these values as historical settings.

  - title: "Choose the cabinet"
    description: >-
      Select 412 Brit 60B GB 90s. Start with a dynamic microphone slightly
      off the speaker centre. If the cabinet block exposes filters, try a
      low cut near 75 Hz and a high cut near 7.5 kHz. These are practical
      mix-oriented starting points; the original cabinet and microphone
      are unknown.

  - title: "Add optional front-end sustain"
    description: >-
      Leave Chief DS1 bypassed at first. If the amp needs more sustain or
      pick definition, engage it with low Distortion around 2.5/10, Tone
      around 5/10 and Level near unity. Adjust by ear and avoid adding so
      much drive that the expressive note attack becomes harsh.

  - title: "Shape the stereo width"
    description: >-
      Engage Micro Processor (ST) subtly. Start with a low mix, around
      5–10%, and keep the effect restrained enough that the dry lead
      remains centred and clear. Bypass it if you are playing in mono or
      if the pitch movement distracts from the notes.

  - title: "Set delay and reverb"
    description: >-
      Set Digital Delay to roughly 450 ms, with feedback around 15–20%
      and mix around 12–18%. Set Hall decay around 3–5 seconds and mix
      around 10–15%. These are suggested starting points. Reduce both
      mixes if fast phrases become cloudy; raise them slightly for a
      more spacious sustained passage.

scenes:
  - id: "A"
    name: "Expressive Lead"
    description: >-
      Main lead scene. Brit 900 Lead and the cabinet are active; leave
      Chief DS1 bypassed unless the guitar and amp need extra sustain.
      Use restrained Micro Processor (ST), Digital Delay and Hall settings
      so the lead stays clear.

  - id: "B"
    name: "Wide Sustains"
    description: >-
      Keep the same amp and cabinet settings. Engage Micro Processor (ST)
      and use the suggested delay and Hall levels for long held notes.
      This scene changes ambience and width, not the historical signal
      chain; it is a proposed performance option.

  - id: "C"
    name: "Climax"
    description: >-
      Keep the same core tone and engage Chief DS1 for a modest sustain
      boost if needed. Preserve the delay and reverb balance from the
      lead scene; adjust output with a small scene level increase only
      if the change remains even through your monitoring system.

troubleshooting:
  - problem: "The lead sounds harsh or fizzy."
    solution: "Lower Presence or Treble slightly, move the virtual microphone farther off centre, or lower the cabinet high cut. Reduce Chief DS1 drive if it is engaged."

  - problem: "Held notes do not sustain."
    solution: "Check that the guitar volume is fully up, raise amp Gain a little, and try engaging Chief DS1 with its level near unity. Keep the added gain controlled so the attack remains clear."

  - problem: "The delay blurs fast phrases."
    solution: "Lower Digital Delay mix and feedback, or shorten the delay time. Keep the dry signal dominant and reserve more ambience for sustained notes."

  - problem: "The tone is too wet or distant."
    solution: "Lower Hall mix and decay first, then reduce Micro Processor (ST) mix. The lead should remain direct and intelligible before the ambience is added."

  - problem: "The sound is muddy in a band mix."
    solution: "Reduce Bass, lower the reverb and delay mixes, and check the cabinet low cut. Add a little Mid only if the notes still need to sit forward."

---