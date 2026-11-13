---
title: "Bohemian Rhapsody"
artist: "Queen"
album: "A Night at the Opera (1975)"
description: "Brian May’s distinctive AC30 and treble-booster tone, from the thinner, singing solo to the fuller hard-rock finale."
tuning: "Standard E–A–D–G–B–E."
guitar: "Flexible pickup switching. For the solo, select neck and middle pickups out of phase; for the finale, select neck and middle in phase. These are documented Red Special settings, though another guitar may not reproduce its series-wired Burns Tri-Sonic pickups exactly."
playing_style: "Use a vocal, sustained touch in the solo, with controlled bends and vibrato. For the finale, play firmly with a fuller attack. Use guitar volume and pickup switching to change character across sections."
tone_type: "Classic Rock"
draft: false

chain:
  - name: "Rage Booster"
    type: "overdrive"
    description: "Dallas Rangemaster-style treble boost placed before the amplifier."

  - name: "UK C30 TopBoost"
    type: "amp"
    description: "Vox AC30-based amplifier model."

  - name: "212 UK C30 ’65"
    type: "cab"
    description: "AC30-style cabinet approximation."

  - name: "Digital Delay"
    type: "delay"
    optional: true
    description: "Optional, restrained delay for added space."

sound: >-
  The core tone is bright and vocal, with a focused midrange and smooth
  amplifier saturation. The solo’s neck-and-middle out-of-phase setting
  gives it a cutting, harmonically rich character; the finale’s in-phase
  setting sounds fuller and more forceful. Let the treble booster push the
  AC30 model rather than adding a separate heavy distortion sound. A little
  delay can add space, but the notes should stay clear and direct.

beginner_route: >-
  Start with Rage Booster, UK C30 TopBoost and 212 UK C30 ’65. Set the amp
  for clear notes that begin to saturate when you play harder. Use your
  guitar’s pickup switches to get the different section tones: out of phase
  neck and middle pickups for the solo, then in phase for the finale. Add
  Digital Delay only if the dry sound feels too small.

veteran_notes: >-
  Brian May’s Red Special manual describes the song-specific pickup
  combinations: bridge and middle pickups for the intro; neck and middle
  pickups out of phase for the first solo; and neck and middle pickups in
  phase for the hard-rock finale. May has also identified the Vox AC30 and
  Dallas Rangemaster treble booster as the fundamental tone, while saying
  he used delays as well. The exact AC30 version, cabinet, microphones,
  delay device and session settings are not confirmed here.

  Rage Booster is the official Quad Cortex Rangemaster-based model, and
  UK C30 TopBoost is the official AC30-based model. They are suitable
  approximations, not proof of the exact hardware revision or studio
  settings. The 212 UK C30 ’65 cabinet is a convenient matching option;
  choose another cabinet if it suits your guitar and monitoring better.
  The pickup phase changes must be made on the guitar or by using a guitar
  that supports comparable switching; a Quad Cortex scene cannot change
  the physical pickup wiring.

before_you_build: >-
  Tune to standard E–A–D–G–B–E. A CD-based measurement places the album
  slightly flat of A=440, so if the preset sounds sharp against the
  recording, lower the tuning by ear or use a tuner to match that pitch.
  Start with the Red Special pickup combinations described above. If your
  guitar cannot select two pickups out of phase, use the closest available
  combination and expect the solo tone to differ. These settings and
  suggested values are practical starting points, not recovered studio
  settings.

build_intro: >-
  The original tone is primarily the interaction between the guitar,
  Rangemaster-style treble boost and AC30. Build those elements first.
  Numerical settings below are approximate; adjust by ear for your guitar,
  pickups, monitoring and playing level.

build_steps:
  - title: "Prepare the guitar"
    description: >-
      Tune to standard E–A–D–G–B–E, then check the recording pitch against
      your instrument. Begin with the guitar volume fully up. For the
      solo, select the neck and middle pickups out of phase if your guitar
      allows it. For the finale, select those pickups in phase. On a
      Red Special-style guitar, use bridge and middle pickups for the
      intro figure.

  - title: "Set the treble booster"
    description: >-
      Place Rage Booster before the amplifier. Start around the middle of
      its available boost range, then raise it until the amp develops
      smooth saturation without losing the note attack. The exact original
      booster settings are unknown; use the booster to push the amp rather
      than treating it as a high-gain distortion pedal.

  - title: "Set the AC30 model"
    description: >-
      Choose UK C30 TopBoost. As approximate starting points on a 0–10
      scale, try amp Volume or Gain around 5.5, Bass around 4.5, Treble
      around 5.5 and Cut around 4.5 where those controls are available.
      Adjust the master or output to set listening volume. The amp should
      remain articulate, with saturation increasing as you play harder.

  - title: "Choose the cabinet"
    description: >-
      Select 212 UK C30 ’65 as a matching AC30-style starting point. Try
      a dynamic microphone slightly off centre if the cabinet block offers
      microphone selection. If low and high cuts are available, begin
      around 80 Hz and 7.5 kHz. These are mix-oriented suggestions; the
      original cabinet and microphone setup are not documented here.

  - title: "Add optional delay"
    description: >-
      Add Digital Delay after the cabinet and begin with a time around
      300–400 ms, feedback around 10–15% and mix around 8–12%, where
      available. Keep the repeats quiet enough that the lead remains
      intelligible. These are suggested settings, not verified session
      values. Bypass the block if it clouds the phrasing.

scenes:
  - id: "A"
    name: "Intro Figure"
    description: >-
      Keep the core booster, amp and cabinet chain active. On a Red
      Special-style guitar, use bridge and middle pickups and reduce the
      guitar volume to roughly three-quarters. Keep Digital Delay bypassed
      or very subtle. The guitar controls are changed manually; the scene
      does not switch pickups.

  - id: "B"
    name: "Singing Solo"
    description: >-
      Keep the core chain active and use the neck and middle pickups out
      of phase, with the guitar volume fully up. Engage Digital Delay at
      a restrained mix if desired. The out-of-phase pickup combination
      is a guitar setting, not a Quad Cortex effect.

  - id: "C"
    name: "Rock Finale"
    description: >-
      Keep Rage Booster, UK C30 TopBoost and the cabinet active. Change
      the Red Special-style guitar to neck and middle pickups in phase,
      with the guitar volume fully up. Bypass or reduce Digital Delay for
      a tighter, more forceful sound. Any scene output adjustment is a
      practical level match, not a documented recording setting.

troubleshooting:
  - problem: "The tone is too thin or piercing."
    solution: >-
      Check that you are using the out-of-phase pickup combination only
      for the solo. For a fuller sound, switch to the in-phase neck and
      middle combination, reduce the booster slightly, or lower the amp
      Treble.

  - problem: "The solo does not cut through."
    solution: >-
      Try the neck and middle pickups out of phase if your guitar supports
      it. Raise the booster enough to push the amp, then adjust amp output
      to keep the overall level controlled.

  - problem: "The finale sounds too thin."
    solution: >-
      Switch the neck and middle pickups in phase. If your guitar lacks
      phase switching, try its fullest available pickup combination and
      reduce Treble slightly.

  - problem: "The amp sounds too clean."
    solution: >-
      Raise the Rage Booster output or the amp’s input drive gradually.
      Keep enough headroom for chords to remain defined, and use a firmer
      picking attack for the finale.

  - problem: "The delay obscures the notes."
    solution: >-
      Lower Digital Delay mix and feedback or bypass it. The core guitar,
      booster and AC30 tone should work without the delay.

---