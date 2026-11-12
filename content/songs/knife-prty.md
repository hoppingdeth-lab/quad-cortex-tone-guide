---
title: "Knife Prty"
artist: "Deftones"
album: "White Pony"
description: "A thick, low-tuned guitar with a heavy, sustained riff and a hazy edge."
tuning: "Drop C (C-G-C-F-A-D)"
guitar: "Bridge humbucker"
playing_style: "Heavy riffs / two scenes"
tone_type: "High Gain"
draft: false

chain:
  - name: "GATE"
    type: "gate"
    description: "Quiet pauses"

  - name: "OVERDRIVE"
    type: "overdrive"
    description: "Tighten lows"

  - name: "BRIT 2203"
    type: "amp"
    description: "Amp gain"

  - name: "4x12 CAB"
    type: "cab"
    description: "Speaker tone"

  - name: "CHORUS"
    type: "chorus"
    description: "Slow movement"

  - name: "REVERB"
    type: "reverb"
    description: "Short space"

sound: >-
  A thick, low-tuned guitar with a heavy, sustained
  riff and a hazy edge. The record also has layered
  parts and studio textures.

beginner_route: >-
  Start with the complete signal chain. Add one block
  at a time and play after each addition. Get the amp
  and cabinet clear before adding chorus and reverb.
  Listen for tight low notes, clear pick attack and
  a little width on sustained chords.

veteran_notes: >-
  Gear summaries associate the White Pony era with
  JMP-1 and ADA MP-1 preamps and Marshall amplification.
  The exact signal path for Knife Prty is uncertain,
  so Brit 2203 is a practical Quad Cortex approximation.
  Try comparing it with another high-gain model.
  Match loudness before judging the EQ.


before_you_build: >-
  This recipe is an original, ear-led starting point
  for the Quad Cortex. It is not a claim to reproduce
  the exact studio signal chain or a supplied preset file.

  For a six-string guitar, use Drop C tuning
  (C-G-C-F-A-D). Start with the bridge humbucker.
  Different pickups may require adjustments to gain and EQ.

build_intro: >-
  The values are starting points. Your guitar, monitoring
  and playing level will change the result.

build_steps:
  - title: "Tune and choose a pickup"
    description: >-
      Set Drop C (C-G-C-F-A-D). Start on the bridge
      humbucker. If your guitar has a very hot pickup,
      expect to use less amp gain.

  - title: "Add a Gate"
    description: >-
      Raise the threshold only until pauses are quiet.
      Long notes and sustained chords should still fade naturally.

  - title: "Add an overdrive boost"
    description: >-
      Choose a Tube Screamer style block. Start Drive 1/10,
      Tone 5/10, Level 7/10. This tightens the amp;
      it should not dominate the distortion.

  - title: "Add the Brit 2203 amp"
    description: >-
      Start Gain 5.5, Bass 4.5, Mid 5.5, Treble 5,
      Presence 4.5 (roughly on a 0-10 scale).
      Match the output level.

  - title: "Add a 4x12 cabinet"
    description: >-
      Choose a full-sounding 4x12. Begin with a dynamic mic;
      blend a ribbon if the top end is too sharp.
      Adjust low and high cuts for your speakers.

  - title: "Add a subtle chorus"
    description: >-
      Place it after the cabinet. Use a slow rate and low
      depth. Increase gradually until chords move
      without wobbling.

  - title: "Add a little reverb"
    description: >-
      Try a short room or plate. Keep the mix low on the
      heavy riff; raise it slightly for the softer scene.

scenes:
  - id: "A"
    name: "Heavy Riff"
    description: >-
      Brit 2203 at starting gain. Chorus and reverb
      barely on. Keep the low end controlled.

  - id: "B"
    name: "Softer Passage"
    description: >-
      Lower amp gain. Bring up chorus and reverb slightly.
      Keep the same cabinet so the two sounds feel related.

troubleshooting:
  - problem: "Muddy?"
    solution: "Lower Bass first."

  - problem: "Fizzy?"
    solution: "Lower Presence or Treble."

  - problem: "Wobbly?"
    solution: "Reduce chorus depth."

---
