

## Plan: Merge case studies and add language strategy details

### Change

**`src/components/CaseStudies.tsx`** — Replace the two separate entries (lines 21-55) with one merged entry:

**Title**: "National Digital Engagement Platform & GenAI Assistant"
**Tagline**: "Voice-first AI serving 2M+ users across health, agriculture & civic education"
**Tags**: `["GenAI", "IVR", "USSD", "Speech-to-Text", "Scale", "Partnerships"]`

**Content updates incorporating all user direction:**

- **Problem**: Combined — low-connectivity communities lacking access to reliable information; no way to get real-time personalized guidance on basic phones
- **User Insights**: Voice-first needs, local languages, feature phone text-based interactions, high USSD drop-off due to poor UX
- **Hypothesis**: A voice-first AI platform using IVR logic trees could deliver personalized, lifesaving information at scale; a GenAI assistant layered on top could demonstrate demand for AI access in offline settings
- **Strategy**: Co-designed IVR programs with USAID, UNICEF, CIMMYT, government partners. Built GenAI assistant as voice-first on IVR using speech-to-text and text-to-speech pipeline. **For MVP and second iteration, simplified AI responses to plain English and built prompting guidance for users, since no local language LLMs existed at the time. Long-term roadmap included partnering with MNOs and local LLM labs to expand language support — the AVA feature in Pakistan, for example, already operates in Urdu.**
- **Experimentation**: Piloted world's first offline GenAI assistant generating ~90,000 queries. **Latency reduced from 1-minute responses to 3-second response times** through iterative optimization. **Human-in-the-loop data validation** — real people reviewing AI-generated responses to ensure accuracy before scaling
- **Execution**: Led cross-functional teams nationally in Zambia, from inception to commercial launch. Integrated with USSD infrastructure, trained AI on local content. Restructured engagement and revenue systems

**Combined results:**
- 2M+ users served on the national platform
- ~90,000 AI queries during initial pilot phase
- Response latency reduced from 1 minute to 3 seconds
- 75%+ user retention rates on health programming
- 50,000+ users with improved access to essential health services
- Human-in-the-loop validation ensuring data accuracy at scale
- Revenue model revised for sustainable growth
- Published as GSMA case study
- Presented at GDDF Panel as world first
- Successfully transitioned from pilot to commercial launch

### Files changed
- `src/components/CaseStudies.tsx` — merge two entries into one, remove second entry

### No UI/UX changes
Same accordion layout, same component structure. Data consolidation only.

