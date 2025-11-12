# Milestone 3

This document should be completed and submitted during **Unit 7** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

You will need to reference the GitHub Project Management guide in the course portal for more information about how to complete each of these steps.

- [X] In your repo, create a project board. 
  - *Please be sure to share your project board with the grading team's GitHub **codepathreview**. This is separate from your repository's sharing settings.*
- [X] In your repo, create at least 5 issues from the features on your feature list.
- [X] In your repo, update the status of issues in your project board.
- [X] In your repo, create a GitHub Milestone for each final project unit, corresponding to each of the 5 milestones in your `milestones/` directory. 
  - [X] Set the completion percentage of each milestone. The GitHub Milestone for this unit (Milestone 3 - Unit 7) should be 100% completed when you submit for full points.
- [X] In `readme.md`, check off the features you have completed in this unit by adding a ✅ emoji in front of the feature's name.
  - [X] Under each feature you have completed, include a GIF showing feature functionality.
- [X] In this documents, complete all five questions in the **Reflection** section below.

## Reflection

### 1. What went well during this unit?

Our group successfully set up parts of the backend and frontend for the Beatdle game, including fetching tracks from Spotify, creating the daily game page, implementing guesses with visual feedback, and designing a basic WebSocket support. 

### 2. What were some challenges your group faced in this unit?

One major challenge was integrating Spotify’s API with proper authentication, and ensuring previews loaded correctly. TypeScript typing between frontend and backend caused some problems as well.

### Did you finish all of your tasks in your sprint plan for this week? If you did not finish all of the planned tasks, how would you prioritize the remaining tasks on your list?

Most of the core functionality for single-player Daily Beatdle was completed and basic multiplayer lobby is getting started. Remaining tasks include fully implementing real-time scoring and proper game state management for the multiplayer lobby. If unfinished, we would prioritize finishing multiplayer synchronization and player score updates, as those are essential for the competitive feature.

### Which features and user stories would you consider “at risk”? How will you change your plan if those items remain “at risk”?

Features at risk include full multiplayer gameplay with real-time scoring, and robust handling of disconnected players. If these remain at risk, we would focus on ensuring the basic lobby and gameplay works correctly first, then add extra features like advanced score tracking later.

### 5. What additional support will you need in upcoming units as you continue to work on your final project?

We may need guidance on best practices for real-time multiplayer game architecture, managing WebSocket connections reliably, and deploying a server that handles multiple simultaneous players. Additionally, assistance with Spotify API would help accelerate development.
