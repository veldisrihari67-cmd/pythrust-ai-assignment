# pythrust-ai-assignment
# Guided Component Architect - Pythrust Assignment

## Objective
A "Self-Healing" code generation pipeline that transforms natural language into Angular components while strictly following a predefined Design System.

## The Agentic Loop Architecture
This system implements a governed workflow to move beyond simple chat-based generation:
1. **Design Tokens:** Loads styling rules from `design_system.json`.
2. **Generator Agent:** Takes a user prompt and uses the Gemini API to architect an Angular component.
3. **Linter-Validator:** A logic-based check that inspects the generated code for the presence of mandatory design tokens (e.g., primary-color hex codes).
4. **Self-Correction:** If the validator detects a missing token, it automatically triggers a re-prompting cycle, feeding the error back to the LLM to "fix" the component before the final output.

## Tech Stack
- **Orchestration:** Python (Requests-based API handling)
- **Model:** Gemini-1.5-Flash (via Auto-Discovery)
- **Frontend Framework:** Angular (Tailwind CSS/SCSS)
