---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
artist: "ARTIST"
album: "ALBUM"
description: "BRIEF DESCRIPTION OF THE TONE"
tuning: "TUNING"
guitar: "GUITAR AND PICKUP RECOMMENDATIONS"
playing_style: "PLAYING TECHNIQUE"
tone_type: "Clean"
draft: true

# SIGNAL CHAIN
# Add, remove or rearrange blocks to match the recipe.

chain:
  - name: "BLOCK 1 NAME"
    type: "amp"
    description: "WHAT THIS BLOCK DOES"

  - name: "BLOCK 2 NAME"
    type: "cab"
    description: "WHAT THIS BLOCK DOES"

  - name: "BLOCK 3 NAME"
    type: "reverb"
    description: "WHAT THIS BLOCK DOES"

# THE SOUND
# Describe what the finished tone should sound like.

sound: >-
  DESCRIBE THE OVERALL SOUND.
  Mention the character, dynamics, gain,
  ambience and anything distinctive.

# BEGINNER ROUTE
# A simple explanation for someone new to the Quad Cortex.

beginner_route: >-
  EXPLAIN THE SIMPLEST WAY TO BUILD THIS TONE.
  Identify the most important blocks and what
  the player should listen for.

# VETERAN NOTES
# Gear context, alternatives and useful advanced advice.

veteran_notes: >-
  DISCUSS THE ORIGINAL ARTIST'S EQUIPMENT WHERE KNOWN.
  Explain why the selected Quad Cortex models are
  appropriate approximations. Suggest alternatives
  or advanced adjustments.

# BEFORE YOU BUILD
# Tuning, pickups and important preparation.

before_you_build: >-
  This recipe is an original, ear-led starting point
  for the Quad Cortex. It is not a claim to reproduce
  the exact studio signal chain or a supplied preset file.

  ADD SONG-SPECIFIC PREPARATION NOTES.
  Include tuning, pickup selection and
  any other important information.

# BUILD INTRODUCTION

build_intro: >-
  These settings are starting points. Your guitar,
  pickups, monitoring and playing level will
  influence the final result.

# STEP-BY-STEP BUILD
# Copy a step to add more, or delete unnecessary steps.

build_steps:
  - title: "Step 1 - Prepare the guitar"
    description: >-
      ENTER TUNING, PICKUP AND GUITAR PREPARATION.

  - title: "Step 2 - Set up the amplifier"
    description: >-
      ENTER AMP MODEL AND STARTING SETTINGS.
      Include Gain, Bass, Mid, Treble, Presence
      and output level where applicable.

  - title: "Step 3 - Configure the cabinet"
    description: >-
      ENTER CABINET, MICROPHONE AND EQ SETTINGS.

  - title: "Step 4 - Add effects"
    description: >-
      ENTER EFFECT MODELS, SETTINGS AND PLACEMENT.
      Split this into additional steps if needed.

# SCENES
# Add or remove scenes as required.

scenes:
  - id: "A"
    name: "Main Tone"
    description: >-
      DESCRIBE WHICH BLOCKS ARE ACTIVE
      AND THE MAIN SCENE SETTINGS.

  - id: "B"
    name: "Alternative Tone"
    description: >-
      DESCRIBE WHAT CHANGES IN THIS SCENE.
      Include gain, effects and level adjustments.

# TROUBLESHOOTING
# Add the most useful adjustments for this specific sound.

troubleshooting:
  - problem: "Too bright?"
    solution: "ENTER THE RECOMMENDED ADJUSTMENT."

  - problem: "Too muddy?"
    solution: "ENTER THE RECOMMENDED ADJUSTMENT."

---
