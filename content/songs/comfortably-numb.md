---
title: "Comfortably Numb"
artist: "Pink Floyd"
album: "The Wall"
description: "A song-wide electric guitar recipe for Comfortably Numb, from a clean, spacious slide approximation to Gilmour's sustained Strat lead tones."
tuning: "Standard (E-A-D-G-B-E)"
guitar: "Strat-style guitar with single-coil pickups. A hotter bridge pickup is useful; use bridge and neck together for the first solo, then bridge alone for the final solo."
playing_style: "Play with a firm pick attack, controlled bends, wide vocal vibrato and deliberate note spacing. Use slide and volume swells for the clean intro approximation."
tone_type: "Classic Rock"
draft: false

chain:
  - name: "Opto Comp"
    type: "compressor"
    description: "Stock compressor used as an ear-led substitute for the MXR Dyna Comp. Apply moderate compression before the fuzz to help sustain lead notes."

  - name: "Fuzz Pi"
    type: "fuzz"
    description: "Stock Big Muff Pi model. Keep its output moderate and let the amp add body; bypass it for the clean intro approximation."

  - name: "Watt D103 Normal"
    type: "amp"
    description: "Stock Hiwatt DR103 model. Set it clean to just breaking up so the fuzz supplies most of the lead sustain."

  - name: "412 Watt S4123"
    type: "cab"
    description: "Stock Hiwatt SE4123 4x12 cabinet model. This is a practical substitute for the original WEM cabinet and Fane speakers."

  - name: "Rotary"
    type: "modulation"
    description: "Subtle, slow rotary movement to suggest the Yamaha RA-200 colour. This sits in series after the cabinet as an approximation of the original parallel amp and rotating-speaker setup."

  - name: "Doubler"
    type: "utility"
    optional: true
    description: "Optional, restrained stereo width to suggest the reported automatic double tracking. Keep bypassed if the output is mono or the doubled sound becomes phasey."

  - name: "Digital Delay"
    type: "delay"
    description: "Clean digital delay for the long intro-style repeats and the more restrained lead ambience. Change mix and feedback by Scene."

  - name: "Hall"
    type: "reverb"
    description: "Practical hall reverb approximation for the spacious steel-like intro and the sustained lead tail. Keep the solo settings below the delay in prominence."

sound: >-
  The lead sound should be clear and expressive before it is heavily distorted: a firm Strat attack, rounded mids, singing sustain and wide vibrato. The Big Muff and clean Hiwatt model combine for a smooth, assertive lead rather than a sharply gated fuzz tone. The first solo should feel fuller; the final solo should cut more clearly. A clean, slide-friendly scene with long repeats approximates the intro's sustained atmosphere. The original acoustic and pedal-steel performances remain separate parts.

beginner_route: |-
  Build the clean Hiwatt-style amp and cabinet first. Add the Fuzz Pi for the lead scenes and use the Opto Comp gently before it. Set up the intro Scene with the fuzz bypassed and more delay and reverb. 
  
  The Rotary should be felt as gentle movement, not heard as an obvious wobble.

veteran_notes: |-
  The documented rig for the solos includes Gilmour's black 1969 Strat, a modified Hiwatt DR103, an Electro-Harmonix Big Muff Pi, an MXR Dyna Comp and a Yamaha RA-200 revolving speaker system. The Hiwatt and Yamaha systems were run in parallel. This recipe uses a serial Rotary block after the cabinet as a simpler tonal approximation; it does not reproduce that original split. 
  
  The stock 412 Watt S4123 is based on a Hiwatt SE4123, while the reported recording cabinet was a WEM Super Starfinder 200 with Fane Crescendo speakers. Opto Comp is a general stock substitute, not a Dyna Comp model. 
  
  The steel intro and modified-Nashville acoustic rhythm are separate performances; use an acoustic guitar for the rhythm part and a
  slide with volume swells for the closest one-guitar intro approximation. 
  
  Doubler is optional and requires CorOS 3.0 or later.

before_you_build: |-
  Tune the electric guitar to Standard E. A Strat-style guitar is the closest practical starting point; a hotter bridge pickup helps the final solo, while bridge plus neck together gives the first solo more body. 
  
  The source rig's bridge pickup and pickup switching are specific, so use the nearest available combinations on your guitar. The original acoustic rhythm part uses a modified Nashville tuning, not Standard E; it is not built into this electric preset.

build_intro: >-
  These are practical starting points, not verified Quad Cortex settings from
  the recording. Match levels between Scenes, then adjust by ear for your
  guitar, monitoring system and playing volume.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to Standard E. Use a Strat-style guitar if available. Set the guitar volume fully up and begin with the bridge pickup. For the first solo, select bridge plus neck if your guitar permits it; for the final solo, return to bridge alone.

  - title: "Set up the Hiwatt-style amplifier"
    description: >-
      Add Watt D103 Normal and keep it clean, with only a little edge when you strike hard. As a starting point, try Volume 4.5, Bass 5, Mid 4, Treble 5, Presence 5 and Master 5 on a 0–10-style scale; use the output control to match the bypassed level. These are practical starting positions.

  - title: "Choose the cabinet"
    description: >-
      Place 412 Watt S4123 after the amp. Start with a dynamic microphone near the speaker cap edge and slightly off axis if those controls are available. A low cut around 80 Hz and high cut around 7.5 kHz can help keep the lead focused; adjust these by ear. The original cabinet was reported as a WEM 4x12 with Fane speakers, so this is a related-family substitute. 

  - title: "Add compression and fuzz"
    description: >-
      Put Opto Comp before Fuzz Pi. Use moderate compression and set its output so engaging it does not cause a large volume jump; aim for sustain without flattening the pick attack. For Fuzz Pi, begin near Volume 4, Tone 6 and Sustain 6 if the controls use a 0–10 scale, then balance its output to the clean amp. Those positions reflect reported Big Muff settings.

  - title: "Add rotary movement"
    description: >-
      Place Rotary after the cabinet. Use a slow speed and low mix, around 10–15% as an initial ear-led range. It should add a slight moving, midrange thickness to sustained notes. Reduce the mix if the pitch movement becomes obvious or distracts from bends.

  - title: "Set delay and reverb"
    description: >-
      Put Digital Delay before Hall. For the intro approximation, start around 500 ms delay time, 30% feedback and 20% mix; try a 4-second hall with 15–20% mix. For the solo Scenes, reduce the delay to roughly 400–430 ms, feedback to about 15–20% and mix to 10–14%; try a 2–3-second hall at 8–12% mix. These are ear-led settings: the precise delay and reverb configuration in the original mix is not established.

  - title: "Add optional stereo width"
    description: >-
      Add Doubler only if you have CorOS 3.0 or later and a stereo output path. Keep its effect subtle, around 8–12% if a mix control is available. It is an optional production-style approximation of reported automatic double tracking, not a claim that this device was used on the record. Bypass it if the result sounds phasey or becomes weaker in mono.

  - title: "Set up the Scenes"
    description: >-
      Use Scene A for the clean, spacious intro approximation, Scene B for the fuller first solo and Scene C for the brighter final solo. The Scene descriptions below give suggested block states and settings; set them directly on the Quad Cortex and check the levels by ear.

scenes:
  - id: "A"
    name: "Steel Intro"
    description: >-
      Bypass Fuzz Pi and Doubler. Keep the amp clean; use little or no compression and bypass Rotary. Use the longer Digital Delay and Hall settings from the build steps. Play with slide and volume swells where possible. This approximates the sustained, spacious character of the original pedal steel part; it does not reproduce the ZB 10-string steel guitar itself.

  - id: "B"
    name: "First Solo"
    description: >-
      Turn on Opto Comp and Fuzz Pi. Select bridge plus neck pickups if available. Use the moderate solo delay and hall settings, with Rotary slow and subtle. The slightly fuller pickup combination and sustained fuzz should support the rounded, singing tone. Doubler is optional; use it sparingly and only in stereo.

  - id: "C"
    name: "Final Solo"
    description: >-
      Keep Opto Comp and Fuzz Pi on. Select the bridge pickup for a more direct attack. Keep the amp clean underneath the fuzz, and use the same restrained Rotary and solo ambience as Scene B. Adjust the Scene level only enough to keep the final solo clearly present in the mix; do not rely on extra gain to supply the note's intensity.

troubleshooting:
  - problem: "The fuzz sounds harsh or fizzy."
    solution: "Lower the Fuzz Pi Tone slightly, reduce the amp Presence, or move the cabinet microphone farther towards the speaker edge."

  - problem: "The lead will not sustain."
    solution: "Raise Fuzz Pi Sustain a little or increase compression modestly, then check that the amp remains loud and clean enough to support the fuzz."

  - problem: "The Rotary movement is too obvious."
    solution: "Lower its mix and rate. The intended effect is subtle thickness and motion, not a pronounced wobble."

  - problem: "The intro repeats crowd the notes."
    solution: "Lower Digital Delay mix or feedback first; reduce Hall mix if the sustained tail still masks the next phrase."

  - problem: "The solo feels too thin."
    solution: "For the first solo, try bridge plus neck pickups if available. Otherwise add a small amount of midrange or reduce the Fuzz Pi Tone control."
---