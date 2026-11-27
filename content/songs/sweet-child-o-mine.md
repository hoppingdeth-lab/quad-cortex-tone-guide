---
title: "Sweet Child O' Mine"
artist: "Guns N' Roses"
album: "Appetite for Destruction (1987)"
description: "A scene-switched recipe for Slash's opening arpeggio, clean verses, Marshall riff and expressive lead tone."
tuning: "E-flat standard (Eb-Ab-Db-Gb-Bb-Eb)"
guitar: "Humbucker-equipped Les Paul-style guitar; Slash recorded the album with a handmade 1959 Les Paul replica built by Kris Derrig"
playing_style: "Picked string-skipping arpeggios, firm riff attack, sustained bends and expressive vibrato"
tone_type: "High Gain"
draft: false

chain:
  - name: "Crying Wah"
    type: "wah"
    description: "Optional Cry Baby-style wah for the lead Scene"
    optional: true

  - name: "Brit Plexi 100 Bright"
    type: "amp"
    description: "Super Lead-style Marshall approximation for the distorted parts"

  - name: "412 Brit 60B V30 ’95"
    type: "cab"
    description: "Marshall-style 4x12 with Vintage 30 speakers; a practical cabinet choice"

  - name: "Digital Delay"
    type: "delay"
    description: "Low-level opening arpeggio ambience; settings are ear-led"

  - name: "Plate"
    type: "reverb"
    description: "Subtle studio-style space on the Marshall path"

  - name: "Rols Jazz CH120"
    type: "amp"
    description: "Roland Jazz Chorus 120 model for the clean verse path"

  - name: "212 Rols Jazz ’87"
    type: "cab"
    description: "Matching Roland-style 2x12 cabinet for the clean path"

  - name: "Room"
    type: "reverb"
    description: "Light room ambience for the clean verse path"

routing:
  type: "parallel"
  mode: "scene_switch"

  switching:
    method: "scene_assigned_output_mute"
    description: >-
      Assign the Mute parameter of each path's output lane to Scenes.
      Scenes A, C and D unmute the Marshall path and mute the clean path.
      Scene B unmutes the clean path and mutes the Marshall path.
      Check that only one path is audible in every Scene.

  description: >-
    The clean verse and Marshall sounds use separate amplifier paths. Scenes switch between them; the paths are not blended. The opening arpeggio, main riff and wah lead share the Marshall path with different effect states.

  paths:
    - id: "A"
      name: "Marshall"
      scene: "A, C, D"
      blocks:
        - "Crying Wah"
        - "Brit Plexi 100 Bright"
        - "412 Brit 60B V30 ’95"
        - "Digital Delay"
        - "Plate"

    - id: "B"
      name: "Clean Verse"
      scene: "B"
      blocks:
        - "Rols Jazz CH120"
        - "212 Rols Jazz ’87"
        - "Room"

  output:
    description: >-
      Route both path outputs to the intended Quad Cortex output. Use the
      Scene-assigned output mute states above so the clean and Marshall
      paths are never heard together. Match their perceived loudness
      before saving.

sound: >-
  The opening arpeggio is warm and articulate, with enough Marshall saturation to sustain but enough note separation to keep the pattern clear. A restrained delay and plate ambience add depth without turning the repeats into a prominent rhythmic effect. The verses switch to a clean, bright JC-120-style sound. The main riff returns to a mid-forward Marshall tone, while the lead Scene adds a controlled wah sweep and a small level lift. Keep the picking dynamics, bends and vibrato audible.

beginner_route: |-
  Tune to E-flat standard. Build the Marshall path for the opening arpeggio, riff and lead, then make a separate clean path for the
  verses. 
  
  Use the Scenes to select one path at a time. Keep the opening delay quiet, leave the wah off except for the lead Scene, and use your picking attack and guitar controls to shape the changes in intensity.

veteran_notes: |-
  Slash identified his handmade Kris Derrig 1959 Les Paul replica as the guitar he recorded Appetite for Destruction with. He described a Marshall for the distorted parts and a Roland JC-120 for the clean verse chords in Sweet Child O' Mine. The rental Marshall's precise model remains disputed: Slash has called it a JCM800, Marshall's investigation pointed to a pre-JCM800 2203, and producer Mike Clink later recalled a non-tremolo 1959 Super Lead modified by Frank Levi. Brit Plexi 100 Bright is selected as a practical Super Lead-family starting point; it does not recreate the modified rental amplifier.

  Clink recalled a Roland SRV-2000 digital reverb among the session effects and said he used it on guitars and vocals. The Digital Delay and Plate settings here are practical approximations for the opening ambience, not confirmed settings from the Sweet Child session. Slash also confirmed occasional Cry Baby use for Appetite-era leads; the exact pedal position or automation on this song is not established.

  The bridge humbucker is a useful starting point for a defined riff; try the neck pickup and roll the guitar tone back slightly if you want a warmer, more vocal opening or lead sound. These are tonal suggestions, not verified pickup changes between overdubs. No chorus is prescribed: although Clink recalled an MXR Analog Chorus being available during the sessions, that alone does not establish its use on this song. Keep the JC-120's chorus off initially and add it only if an A/B by ear supports it.

before_you_build: |-
  This is an original, ear-led Quad Cortex recipe, not an exact studio signal-chain claim or a supplied preset file. Tune all six strings down one semitone to E-flat standard: Eb-Ab-Db-Gb-Bb-Eb, low to high.
  Use a humbucker-equipped Les Paul-style guitar if available. Start with the bridge pickup for riff definition; try the neck pickup and reduce the guitar tone slightly for a warmer arpeggio or lead. These pickup suggestions are practical tonal choices, not confirmed song-specific settings.
  This preset uses two separate paths because the clean verse tone and distorted Marshall tone require different amplifiers. Assign the output Mute controls to Scenes as described below. Do not leave both paths audible at once. Start at a low monitoring level while setting path levels and Scene changes.

build_intro: >-
  All settings are practical starting points, not verified studio values. The stock Quad Cortex models approximate the documented
  equipment and recording textures; they are not exact models of the modified rental Marshall or Roland SRV-2000. Check each Scene's path mute, effect bypass and output level on the Quad Cortex.

build_steps:
  - title: "Tune and prepare the guitar"
    description: >-
      Tune to E-flat standard (Eb-Ab-Db-Gb-Bb-Eb). Use a stable humbucker-equipped guitar and check tuning and intonation. Begin with the bridge pickup for riff clarity. Try the neck pickup and roll the tone control back modestly for a warmer arpeggio or lead.

  - title: "Build the Marshall path"
    description: >-
      Add Brit Plexi 100 Bright followed by 412 Brit 60B V30 ’95. Start with Volume 1 around 5.5/10, Bass 4.5/10, Mid 6.5/10, Treble 5.5/10 and Presence 4.5/10, where equivalent controls are available. Keep the low end controlled and the mids present.
      Adjust the path output for level; these are not historical amp settings.

  - title: "Set the Marshall cabinet"
    description: >-
      Start with a dynamic-style microphone slightly off the speaker centre, if the cab controls offer that choice. Try a low cut near 80 Hz and a high cut near 8 kHz where available. If the tone is dull, raise the high-cut frequency; if it is harsh, lower that frequency or move the mic farther off-centre.

  - title: "Add opening ambience"
    description: >-
      Place Digital Delay after the Marshall cabinet. For Scene A only, start near 300 ms with feedback around 15% and mix around 10–12%. Place Plate after the delay with decay near 1.2 seconds and mix around 8–10%. These are ear-led approximations for the opening arpeggio, not recovered SRV-2000 settings. Keep the repeats behind the picked notes.

  - title: "Add the lead wah"
    description: >-
      Place Crying Wah before the Marshall amp and assign its position to an expression pedal if available. Leave it bypassed in Scenes A and C. Engage it in Scene D and use a controlled sweep where it helps the solo phrase. Slash confirmed occasional Cry Baby use for leads in the Appetite period; this Scene and pedal movement are practical proposals for this song.

  - title: "Build the clean verse path"
    description: >-
      Add Rols Jazz CH120 followed by 212 Rols Jazz ’87 on the clean path. Keep the amp clean on your hardest chord attack. Start with Bass 4.5/10, Mid 5/10 and Treble 5.5/10 where those controls are available. Keep its chorus off initially. Add Room after the cab with decay near 1 second and mix around 8% for restrained space.

  - title: "Configure the Scene-switched paths"
    description: >-
      Split the guitar input into the two approved paths. Assign the output Mute parameter of each path to Scenes. In Scenes A, C and D, unmute the Marshall path and mute the clean path. In Scene B, unmute the clean path and mute the Marshall path. Verify that only one path reaches the output in each Scene.

  - title: "Balance and save the Scenes"
    description: >-
      Set Scene A for the opening arpeggio with the Marshall path, delay and Plate active. Scene B selects the clean verse path with
      Room active. Scene C selects the Marshall riff with delay bypassed. Scene D selects the Marshall lead with Crying Wah active and a modest output lift, initially about 1.5 dB above Scene C. Match levels at performance volume and save each Scene.

scenes:
  - id: "A"
    name: "Opening Arpeggio"
    description: >-
      Marshall path only. Use the warmer pickup and guitar tone setting that best suits your instrument. Keep Crying Wah bypassed. Set Digital Delay near 300 ms with low feedback and mix, and Plate reverb around 8–10% mix. The delay is an ear-led ambience choice, not a verified song-specific setting.

  - id: "B"
    name: "Clean Verse"
    description: >-
      Clean path only: Rols Jazz CH120 into 212 Rols Jazz ’87. Keep the amp clean, Room mix low and JC-120 chorus off initially. Mute the Marshall path. Slash identified the JC-120 for the clean verse chords.

  - id: "C"
    name: "Main Riff"
    description: >-
      Marshall path only, with Crying Wah bypassed and Digital Delay bypassed. Keep Plate reverb low. Use the bridge humbucker as a
      practical starting point and maintain clear arpeggios and firm chord attacks.

  - id: "D"
    name: "Wah Lead"
    description: >-
      Marshall path only. Engage Crying Wah and assign its position to the expression pedal for a controlled sweep. Keep delay bypassed initially, retain low Plate reverb and set the path output about 1.5 dB above Scene C if needed. The wah use and level lift are practical proposals, not verified Scene settings from the recording.

troubleshooting:
  - problem: "The opening arpeggio sounds too dry?"
    solution: >-
      Raise Scene A's Digital Delay mix slightly or add a small amount of Plate reverb. Keep repeats low enough that each picked note remains distinct; do not copy delay settings from another song.

  - problem: "The clean verse is breaking up?"
    solution: >-
      Reduce the Rols Jazz CH120 input or volume setting and recheck that the Marshall path is muted in Scene B. Keep the clean amp
      clear on the strongest chord attacks.

  - problem: "The lead feels buried?"
    solution: >-
      Confirm Scene D's wah and Marshall path are active, then use the Scene-assigned path output for a small level lift. Add amp gain only if more sustain is needed after checking the level.

  - problem: "Both tones are audible at once?"
    solution: >-
      Check the Scene-assigned Mute parameter on both path outputs. Each Scene should leave one path unmuted and the other path muted.
---