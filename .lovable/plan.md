

## Plan: Update Experimentation Board

### Changes to `src/components/ExperimentsBoard.tsx`

1. **Remove** the "MoMo API Integration Platform" experiment (lines 37-43)
2. **Merge** "Offline Gen-AI via USSD" and "AI-Powered IVR Platform" into a single experiment:
   - **Title**: "Offline Gen-AI: USSD to Voice Platform"
   - **Hypothesis**: Combined — AI delivered via USSD and voice (IVR) can provide personalized support at scale for users without internet access
   - **Test**: Two phases — Phase 1: USSD pilot in Zambia; Phase 2: Voice-based "Ask Viamo Anything" platform generating ~90,000 queries
   - **Result**: Combined results — near-zero drop-off on USSD, 2M+ users served via IVR, 75%+ retention, 50,000+ users with improved health access
   - **Learning**: Combined learnings from both channels
   - **Status**: validated

This reduces the board from 5 experiments to 3.

