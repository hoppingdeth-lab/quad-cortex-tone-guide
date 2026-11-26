---
title: "That's What You Get"
artist: "Paramore"
album: "RIOT! (2007)"
description: "A bright, punchy pop-rock crunch inspired by Josh Farro’s rhythmic guitar parts, with Scene settings for lighter sections and full choruses."
tuning: "Drop D (D-A-D-G-B-E)"
guitar: "Telecaster Deluxe-style guitar with a bridge humbucker; another clear, humbucker-equipped guitar is a practical alternative."
playing_style: "Use even, precise strumming, a firm pick attack and controlled chord changes; let open chords ring and keep the recurring hook articulate."
tone_type: "Crunch"
draft: false

chain:
  - name: "Simple Gate"
    type: "utility"
    description: "Optional light noise control before the overdrive and amp; preserve the decay of ringing chords"
    optional: true

  - name: "Green 808"
    type: "overdrive"
    description: "Optional low-drive boost before the amp for a little extra push in the choruses; an ear-led choice, not a confirmed track effect"
    optional: true

  - name: "Brit 2203"
    type: "amp"
    description: "Stock Marshall JCM800-style amp used as a practical substitute for the Marshall-family Riot!-era gear reference"

  - name: "412 Brit 60A G75 80s"
    type: "cab"
    description: "Stock Marshall 1960A-style cabinet with G12T-75 speakers; a practical choice, not a verified session cabinet"

sound: >-
  Aim for a bright, forward crunch with enough midrange to keep the
  recurring guitar hook clear in a full band mix. The pick attack and
  even strumming should remain audible, and open chords should ring
  without turning fizzy or heavily compressed. Use a little more
  sustain and weight for choruses. The sound should come mainly from
  the amp and playing dynamics, not from a conspicuous effect.

beginner_route: >-
  Build a single serial chain: optional Simple Gate, optional Green 808,
  Brit 2203 and 412 Brit 60A G75 80s. First set the amp for a clear,
  steady crunch with the boost off. Use Scene A for the lighter parts
  and the recurring hook; use Scene B for the larger choruses. Add the
  boost only if it helps the chorus sit forward without flattening the
  pick attack.

veteran_notes: >-
  Farro’s reported Riot!-era gear includes a Telecaster Deluxe,
  Marshall JCM2000 DSL and Mesa/Boogie Dual Rectifier, alongside
  delay, pitch-shifting and volume-pedal equipment. These are era
  references rather than confirmed details of this song’s studio
  chain. Brit 2203 is based on a JCM800, not the reported JCM2000 DSL.
  The selected cabinet is also an approximation.

  The Green 808 is included as an optional tonal tool, not as a claim
  about Farro’s recording setup. The song’s rhythmic character is
  better served by clear attack, controlled gain and section dynamics
  than by adding delay, modulation or reverb without track-specific
  justification. Any settings below are practical starting points,
  not recovered session values.

before_you_build: >-
  This is an original, ear-led Quad Cortex recipe inspired by the
  RIOT! studio recording. It is not an exact reconstruction of the
  recording chain or a supplied preset file.

  Start in Drop D (D-A-D-G-B-E), a practical arrangement-based
  starting point. Use the bridge pickup
  for a clear, articulate starting tone and keep the guitar volume
  consistent while setting the amp.

build_intro: >-
  All numerical values are practical starting points, not documented
  recording settings. Your guitar, pickups, monitoring and playing
  level will affect the result. Match loudness when comparing Scenes
  or changing the boost.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to Drop D (D-A-D-G-B-E) as a starting point. Use the bridge pickup
      first. Play the opening and recurring hook with an even attack,
      then check that open chords remain clear when strummed.

  - title: "Set the Brit 2203"
    description: >-
      Choose Brit 2203. Begin around Gain 4.5/10, Bass 4.5/10,
      Mid 6/10, Treble 5.5/10 and Presence 4.5/10, where equivalent
      controls are available. These are ear-led starting values.
      Adjust output or master for your monitoring level. Aim for
      articulate crunch rather than maximum saturation.

  - title: "Choose the cabinet"
    description: >-
      Select 412 Brit 60A G75 80s after the amp. If microphone and
      filter controls are available, begin with a dynamic microphone
      slightly off the speaker centre, a low cut near 80 Hz and a
      high cut near 8 kHz. Adjust by ear; these choices are not
      documented details of the original session.

  - title: "Set the optional gate"
    description: >-
      Use Simple Gate before Green 808 and Brit 2203 only if noise
      between phrases is distracting. Set the threshold just high
      enough to quiet pauses. Lower it if it shortens ringing chords
      or sustained notes.

  - title: "Add the optional Green 808"
    description: >-
      Place Green 808 before Brit 2203. As a starting point, try
      Drive 1.5/10, Tone 5/10 and Level 6.5/10. This is a practical
      boost proposal, not a documented Farro setting. Bypass it if
      it makes the sound too compressed, sharp or loud.

  - title: "Balance the Scenes"
    description: >-
      Use Scene A with the Green 808 bypassed and Brit 2203 Gain
      around 4.5/10. Use Scene B with Gain around 5/10 and the Green
      808 engaged at low Drive. These are suggested Scene settings.
      Match the output levels so the chorus lifts in weight and
      sustain without a distracting jump in volume.

scenes:
  - id: "A"
    name: "Verse and Hook"
    description: >-
      Use Brit 2203 at approximately 4.5/10 Gain with the cabinet
      active and Green 808 bypassed. This lower-gain proposal is for
      the lighter verse parts and recurring guitar hook. Keep the
      attack crisp and the chords open; use Simple Gate only if needed.

  - id: "B"
    name: "Chorus Lift"
    description: >-
      Raise Brit 2203 Gain to approximately 5/10 and engage Green 808
      with low Drive for a little more sustain and forward push. Keep
      the cabinet active and match the Scene output to Scene A. These
      are practical settings, not verified recording configurations.

troubleshooting:
  - problem: "Too harsh or fizzy?"
    solution: >-
      Lower Presence or Treble slightly. If cabinet microphone controls
      are available, move the microphone farther off centre or lower
      the high cut a little less aggressively so the pick attack remains.

  - problem: "Too muddy?"
    solution: >-
      Reduce Bass or raise the cabinet low cut slightly. Check that
      the Green 808 is not adding too much low end.

  - problem: "Not enough drive in the chorus?"
    solution: >-
      Raise Brit 2203 Gain gradually or engage Green 808 with low
      Drive and more Level. Keep the output matched to Scene A.

  - problem: "The chorus sounds compressed?"
    solution: >-
      Bypass Green 808 or reduce its Level. Lower amp Gain slightly
      and let the strumming attack provide more of the energy.

  - problem: "The gate cuts off chord decay?"
    solution: >-
      Lower the Simple Gate threshold or bypass it. It should quiet
      pauses without shortening ringing chords.

  - problem: "Drop D does not match my transcription?"
    solution: >-
      Follow the tuning in your chosen reliable arrangement and
      recheck the guitar’s intonation after changing tuning. Published
      transcriptions differ, so treat Drop D as a starting point.
---