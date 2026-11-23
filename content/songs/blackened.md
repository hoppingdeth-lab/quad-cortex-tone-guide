---
title: "Blackened"
artist: "Metallica"
album: "...And Justice for All (1988)"
description: "James Hetfield-inspired studio rhythm tone: tight, aggressive and deliberately scooped, with optional reverse-delay texture for the opening."
tuning: "Standard (E-A-D-G-B-E)"
guitar: "ESP Explorer-style guitar with active humbuckers; bridge pickup recommended"
playing_style: "Hard, even downpicking; precise palm muting; sharply controlled stops and fast alternate-picked passages"
tone_type: "High Gain"
draft: false

chain:
  - name: "Simple Gate"
    type: "utility"
    description: "Optional input noise control; set lightly enough to preserve note decay"
    optional: true

  - name: "CA MkCC+"
    type: "amp"
    description: "Mesa/Boogie Mark IIC+ model, used as a Mark II-family approximation"

  - name: "Parametric-3"
    type: "eq"
    description: "Practical post-amp EQ approximation of the B&B unit Rasmussen placed in the amp loop"

  - name: "412 CA Custom A Shadow 87"
    type: "cab"
    description: "Single Mesa Custom/Black Shadow cabinet model; simplifies the original multi-cab microphone setup"

  - name: "Reverse Delay"
    type: "delay"
    description: "Optional backwards-like playing texture for the intro; not a recreation of the recorded overdubs"
    optional: true

sound: >-
  A forceful, tightly controlled rhythm tone with a hard pick attack,
  dense distortion and a pronounced low-and-high emphasis around a
  recessed midrange. Palm-muted notes should stay firm and articulate,
  while the open-string riffs sound broad without turning to loose
  sub-bass. The original record's studio width and layered guitar
  capture are not reproduced by this single-path recipe.

beginner_route: >-
  Start with the CA MkCC+ amp and the 412 CA Custom A Shadow 87 cabinet.
  Use the bridge pickup, tune to standard E and make the riff sound tight
  before adding anything else. Use Parametric-3 for a restrained mid
  scoop. Add Simple Gate only if the gaps between notes need more silence.
  Leave Reverse Delay off for the main rhythm sound; it is an optional
  texture for experimenting with the opening.

veteran_notes: >-
  Hetfield described his Justice-era guitar tone as having pronounced
  lows and highs with very little midrange. In a later Guitar World
  interview, he said he used the same Mesa/Boogie Simul-Class Mark II on
  the three albums before the Black Album and described his primary guitar
  for that later recording as an ESP Explorer with EMG pickups. This
  supports the broad amp and guitar family.

  Rasmussen said that most guitars were recorded with two cabinets. He
  described close Shure SM7 and Neumann U 87 microphones, AKG The Tube
  microphones several feet from the cabinets, and B&K 4006 room
  microphones. He also said that on ...And Justice for All he used a
  B&B Audio EQ in the amplifier's effects loop. This recipe uses one
  cabinet block and one Parametric-3 block; it does not recreate those
  microphone blends, or exact analogue EQ.

  CA MkCC+ is Neural DSP's Mark IIC+ model. It is a suitable stock
  Quad Cortex starting point for the Mark II family, not a verified
  recreation of a modified IIC++ or a particular session head.
  412 CA Custom A Shadow 87 is a Quad Cortex Mesa Custom cabinet model
  with Black Shadow speakers.

  The studio intro uses multi-tracked guitars played backwards.
  Reverse Delay can add a backwards-like effect to a live performance,
  but it does not reproduce the original editing or overdubs. Keep it
  optional and bypassed for the main riff.

before_you_build: >-
  This is an original, ear-led Quad Cortex recipe inspired by the 1988
  studio recording, not an exact reconstruction of the session chain or
  a supplied preset file.

  Tune to standard E-A-D-G-B-E. Use a bridge humbucker if available.
  Active pickups are a useful match for the broad equipment reference;
  with lower-output passive pickups, you may need to raise amp gain or
  adjust the gate. Keep the guitar volume fully open while setting the
  initial sound.

  Blackened's main riff was written by Jason Newsted, while this recipe
  targets the Hetfield-inspired rhythm-guitar tone. The backwards
  opening overdubs are a distinct recorded texture.

build_intro: >-
  The numerical suggestions below are practical starting points, not
  verified studio settings. Set the amp and cabinet levels for your
  monitoring system, and match loudness when comparing adjustments.
  Build the rhythm sound first; add the optional effects only if they
  help your performance.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to standard E-A-D-G-B-E and select the bridge humbucker.
      Start with the guitar volume fully open. Use firm, even picking and
      practise the stops and palm-muted notes cleanly; the sound depends
      heavily on consistent attack and muting.

  - title: "Set the CA MkCC+"
    description: >-
      Choose CA MkCC+ as the Mark IIC+ family approximation. As
      approximate starting points, try Gain around 5/10, Bass 4/10,
      Mid 3/10, Treble 6/10 and Presence 5/10, adjusting the output or
      master for the required level. These are suggested positions, not
      documented settings from the recording. If the model exposes its
      five-band graphic EQ, begin with a moderate V shape rather than
      extreme cuts and boosts.

  - title: "Shape the loop EQ approximation"
    description: >-
      Place Parametric-3 after the amp and before the cabinet. This
      placement approximates the role of an EQ in the amplifier loop;
      the original B&B unit's exact behaviour and settings are unknown.
      Start with a broad, modest mid reduction centred roughly around
      700-900 Hz, about 2-4 dB, and keep low and high adjustments small.
      Reduce the scoop if the guitar disappears in a band mix.

  - title: "Choose the cabinet"
    description: >-
      Select 412 CA Custom A Shadow 87. It is a practical Mesa-style
      cabinet choice, not a confirmed match for the recording's
      cabinets. If microphone controls are available, begin with a
      dynamic microphone just off the speaker centre. Try a low cut
      near 70-90 Hz and a high cut around 7-9 kHz as starting points;
      adjust by ear for your guitar and monitoring.

  - title: "Control noise if needed"
    description: >-
      If the rig hisses between phrases, enable Simple Gate before the
      amp. Set its threshold only high enough to quiet the gaps. Check
      that sustained notes and the ends of chords are not being cut off.
      Leave the block bypassed if the guitar and rig are already quiet.

  - title: "Add the optional intro texture"
    description: >-
      For a live interpretation of the opening, enable Reverse Delay
      after the cabinet and experiment with a low mix and restrained
      feedback. This is a backwards-like effect for performance; the
      original intro was made from multi-tracked guitars played
      backwards, so the effect will not reproduce that studio part.

scenes:
  - id: "A"
    name: "Main Rhythm"
    description: >-
      CA MkCC+, Parametric-3 and 412 CA Custom A Shadow 87 active.
      Keep Reverse Delay bypassed. Enable Simple Gate only if required.
      Use this as the core sound for the main riffs and tightly muted
      passages.

  - id: "B"
    name: "Open Chords"
    description: >-
      Keep the same amp and cabinet. Reduce the gate threshold or bypass
      Simple Gate so sustained notes are not cut short. If the mid scoop
      sounds too hollow on open chords, ease the Parametric-3 cut
      slightly.

  - id: "C"
    name: "Intro Texture"
    description: >-
      Keep the core amp, EQ and cabinet settings. Enable Reverse Delay
      at a restrained mix for a backwards-like live texture. This is a
      performance approximation, not the original multi-tracked,
      reversed recording.

troubleshooting:
  - problem: "Too fizzy or sharp?"
    solution: >-
      Reduce Presence or the Parametric-3 high-frequency emphasis
      slightly. If available, move the cabinet microphone farther from
      the speaker centre or lower the high cut.

  - problem: "Too loose or boomy?"
    solution: >-
      Reduce Bass on the amp, tighten the low cut modestly, and check
      that palm muting is consistent. Avoid adding extra low end to
      imitate the mix in isolation.

  - problem: "Too hollow in a band mix?"
    solution: >-
      Reduce the Parametric-3 mid cut first. Hetfield described the
      recorded tone as strongly scooped, but a live mix may need more
      mids to remain audible alongside bass and drums.

  - problem: "Gate cutting off notes?"
    solution: >-
      Lower the Simple Gate threshold or bypass it. Fast riffing needs
      clean gaps, but sustained notes and chord tails should decay
      naturally.

  - problem: "Reverse effect sounds unlike the record?"
    solution: >-
      That effect is only a live texture approximation. Bypass it for the
      main guitar sound; the studio opening was created with reversed
      guitar overdubs and editing.
---