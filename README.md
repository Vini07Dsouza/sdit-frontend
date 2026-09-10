# SDIT AI Connect

Build a production-quality, modern, responsive college website for Shree Devi Institute of Technology (SDIT), Mangaluru, Karnataka, with a prominent AI chatbot product called “SDIT AI Assistant.”

1. PROJECT SCOPE

This is a FRONTEND-ONLY React application.

Use:

- React

- TypeScript

- Tailwind CSS

- React Router

- Component-based architecture

- Responsive design

- Accessible UI

The frontend will later connect to a separate Python Flask backend that will handle:

- RAG

- FAISS/vector search

- Embeddings

- LLM

- Document retrieval

- AI response generation

- Voice processing

DO NOT implement any backend, RAG, FAISS, embeddings, LLM, database, model, or AI API-key logic in this project.

The frontend must communicate with the future Flask backend only through REST API calls.

---

2. DESIGN DIRECTION

Create a premium institutional website that feels like a real engineering/technology college website.

Visual identity:

- Professional

- Modern

- Technology/AI inspired

- Clean

- Trustworthy

- Academic

- Premium

Color direction:

- Dark navy/black for selected sections

- White/light backgrounds for content sections

- Subtle purple accents

- Electric-lime accents inspired by the SDIT TECH-BOT identity

- Avoid excessive neon

- Avoid making the entire website dark

Use:

- Professional typography

- Strong visual hierarchy

- Rounded cards where appropriate

- Subtle gradients

- Soft shadows

- Clean spacing

- Minimal glass effects

- Subtle animations

- Smooth hover states

- Smooth page transitions

The website must look excellent on:

- Mobile

- Tablet

- Laptop

- Desktop

Do not make the design look like a generic AI dashboard. It must clearly feel like an engineering college institutional website with an AI assistant integrated into it.

---

3. ROUTING

Create these routes:

/

Home page

/chat

Dedicated SDIT AI Assistant page

Use React Router.

The navigation should work correctly between sections/pages.

---

4. NAVBAR

Create a responsive professional navbar.

Desktop navigation:

- SDIT Logo placeholder

- Home

- About

- Academics

- Departments

- Admissions

- Placements

- Campus

- Contact

- AI Assistant

The logo should initially be a clean placeholder:

SDIT

Do NOT invent an official logo.

Mobile:

- Hamburger menu

- Slide/dropdown navigation

- AI Assistant should remain highly accessible

Navbar should:

- Become sticky on scroll

- Have a clean background

- Include active navigation state

- Have accessible keyboard interaction

---

5. HOME PAGE

Create the following sections.

Hero Section

Create a premium hero section introducing SDIT.

Use verified-information placeholders where actual institutional information has not been supplied.

Do NOT invent:

- Rankings

- Accreditation

- Placement percentages

- Fees

- Student counts

- Establishment year

- Awards

- Faculty numbers

- Course statistics

- Company names

Use labels such as:

“Engineering & Technology Education”

“[Verified college description will be added here]”

Primary CTA:

Explore Academics

Secondary CTA:

Ask SDIT AI Assistant

Include modern technology-inspired visual elements without overwhelming the page.

---

College Introduction

Heading:

About SDIT

Use placeholder institutional content:

“[Official SDIT institutional description will be added here.]”

Include a CTA:

Learn More

---

Departments

Create a responsive department card grid.

Use placeholder department names until verified institutional data is supplied.

Example display:

- Department information

- Short description placeholder

- View Department button

Clearly structure the data so real SDIT information can later replace placeholders.

Do NOT fabricate departments.

---

Courses / Programs

Create a professional academic programs section.

Display placeholder cards for:

- Undergraduate Programs

- Postgraduate Programs

- Other Programs

Use:

“Official program information will be updated here.”

Do not invent actual programs.

---

Admissions

Create an admissions section containing:

- Admission overview

- Eligibility placeholder

- Application process placeholder

- Important dates placeholder

- Contact/admission enquiry CTA

Clearly mark unverified information as placeholder content.

CTA:

Ask SDIT AI Assistant

---

Campus Facilities

Create cards for facility categories.

Use generic labels only unless verified:

- Library

- Laboratories

- Computer Facilities

- Classrooms

- Sports

- Student Facilities

Descriptions should use placeholder text where necessary.

Do not claim specific facilities exist unless verified.

---

Training & Placements

Create a professional section for:

- Training

- Career development

- Placement support

- Industry interaction

Do NOT invent:

- Placement percentage

- Salary packages

- Recruiting companies

- Placement statistics

Use:

“Verified placement information will be connected here.”

---

Events

Create an events section.

Use placeholder event cards.

Each card should support:

- Event title

- Date

- Description

- View details

Do not invent real events.

---

Contact

Create a professional contact section.

Use clearly marked placeholders for:

- Address

- Phone

- Email

- Office hours

- Map/location

Do not fabricate contact information.

---

6. AI ASSISTANT — VERY IMPORTANT

The AI Assistant is a primary feature of this website.

Create a highly visible floating launcher fixed at the bottom-right of relevant pages.

Display:

🤖 SDIT AI Assistant

The launcher must be:

- Large enough to notice immediately

- Accessible

- Responsive

- Visually consistent with the SDIT identity

- Clearly labelled

Do NOT use only a tiny chatbot icon.

Clicking the launcher must navigate to:

/chat

---

7. CHAT PAGE

Create a dedicated full-page AI assistant interface.

Header:

SDIT AI Assistant

Subtitle:

Your intelligent guide to Shree Devi Institute of Technology

Include:

- Back/home navigation

- New conversation / Clear conversation button

---

8. WELCOME MESSAGE

Display this exact initial assistant message:

“Hello! I'm SDIT AI Assistant. I can help you find information about admissions, courses, departments, fees, placements, campus facilities, events, scholarships and other college-related information.”

This is the ONLY predefined assistant message.

Do not create fake AI responses.

---

9. SUGGESTED QUESTIONS

Create attractive suggestion buttons:

- Admissions

- Courses

- Departments

- Fees

- Placements

- Scholarships

- Campus facilities

- Contact information

Clicking a suggestion should populate/send the corresponding user query through the API.

---

10. CHAT UI

User messages:

- Right aligned

- Distinct visual style

Assistant messages:

- Left aligned

- Distinct visual style

Each message should support:

- Text

- Timestamp

- Long formatted responses

- Lists

- Paragraphs

- Optional sources

Use a clean conversation layout.

Implement:

- Auto-scroll to newest message

- Loading state

- Typing indicator

- Empty state

- Error state

- Retry button

---

11. MESSAGE COMPOSER

Create a bottom message composer containing:

- Text input

- Send button

- Microphone button

- Clear/new conversation option

Requirements:

- Enter = send

- Shift + Enter = new line

- Disable Send when input is empty

- Disable controls appropriately while loading

- Show loading state during API request

- Mobile-friendly controls

- Accessible labels

---

12. CHAT API SERVICE

Create a dedicated API service layer.

Example structure:

src/

components/

pages/

services/

api.ts

chatService.ts

types/

chat.ts

data/

mockChat.ts

hooks/

utils/

Do NOT call fetch/axios directly inside UI components.

Create a service such as:

chatService.sendMessage(message, sessionId)

It should call:

POST /api/chat

Request:

{

"message": "student question",

"session_id": "optional-session-id"

}

Expected response:

{

"answer": "AI generated answer",

"sources": [],

"session_id": "optional-session-id"

}

Use strong TypeScript interfaces.

Example types:

ChatRequest

ChatResponse

ChatMessage

Source

Keep these types easy to modify if the Flask backend contract changes.

---

13. ENVIRONMENT VARIABLES

The Flask backend URL MUST come from an environment variable.

For Vite use:

VITE_API_BASE_URL

Example:

VITE_API_BASE_URL=http://localhost:5000

API requests should construct:

${VITE_API_BASE_URL}/api/chat

Never hardcode the backend deployment URL inside components.

Never expose:

- LLM API keys

- Database credentials

- Private tokens

- Embedding API keys

- Backend secrets

in frontend code.

---

14. VOICE API

Create a separate service method for:

POST /api/chat/voice

This is only an API integration placeholder.

Do NOT implement:

- Fake voice AI

- Fake speech recognition

- Fake transcription

- Fake backend processing

The microphone button can show an appropriate “Voice input coming soon” state until the Flask API is connected.

Keep the service method ready for future backend integration.

---

15. SOURCES

Every assistant message must support an optional Sources section.

Only display Sources when the backend actually returns sources.

Example:

Sources

• source document

• official college webpage

Do NOT generate fake sources.

If:

sources: []

then do not display the Sources section.

The source component must be reusable.

---

16. ERROR HANDLING

Create polished UI states for:

1. Backend unavailable

2. Network error

3. Request timeout

4. Empty backend response

5. No relevant information found

6. Server error

7. Retry

Example user-friendly message:

“Unable to connect to SDIT AI Assistant right now. Please try again.”

Provide:

Retry

Do not expose raw technical errors to normal users.

---

17. MOCK DATA

Create a separate file:

src/data/mockChat.ts

Mock responses may be used ONLY for frontend development/testing.

Clearly isolate all mock logic.

Do not mix mock responses into the API service.

Make it easy to remove mock mode when the Flask backend is connected.

The production UI must be designed around the real API response.

---

18. COMPONENT ARCHITECTURE

Create reusable components including:

Navbar

HeroSection

AboutSection

DepartmentsSection

ProgramsSection

AdmissionsSection

CampusSection

PlacementsSection

EventsSection

ContactSection

ChatLauncher

ChatPage

ChatHeader

ChatMessage

SuggestedQuestions

MessageComposer

SourcesList

LoadingIndicator

ErrorState

Avoid duplicated UI code.

Use reusable data-driven cards instead of repeating markup.

---

19. ACCESSIBILITY

Follow good accessibility practices:

- Semantic HTML

- Keyboard navigation

- Visible focus states

- ARIA labels where needed

- Good color contrast

- Accessible buttons

- Accessible form controls

- Do not rely only on color to communicate status

- Responsive touch targets

---

20. PERFORMANCE & CODE QUALITY

Keep the application lightweight and maintainable.

Avoid unnecessary dependencies.

Use:

- TypeScript

- Reusable components

- Clean interfaces

- Proper separation of concerns

- Centralized API logic

- Environment configuration

- Clean state management

Do not put API/business logic inside presentation components.

---

21. BACKEND SEPARATION

The final architecture must clearly separate:

FRONTEND:

React + TypeScript + Tailwind

Responsible for:

- UI

- Navigation

- Chat interface

- API requests

- Loading/error states

- Displaying AI responses

- Displaying returned sources

BACKEND — FUTURE:

Python Flask

Responsible for:

- API endpoints

- RAG

- Document processing

- Embeddings

- FAISS/vector database

- LLM

- Voice processing

- AI response generation

The frontend must NOT contain any of this backend logic.

The architecture should allow the Flask backend to be connected later simply by configuring:

VITE_API_BASE_URL

and implementing the expected API endpoints.

---

22. IMPORTANT DATA ACCURACY RULE

This is an official-college-style website.

Do NOT invent institutional facts.

Never fabricate:

- College statistics

- Fees

- Courses

- Departments

- Faculty

- Rankings

- Accreditation

- Placements

- Recruiters

- Scholarships

- Contact details

- Events

- Facilities

Where verified information is unavailable, explicitly use:

“Official information will be added here.”

Structure the code so verified SDIT data can later replace placeholders without redesigning the UI.

---

23. FINAL UI EXPECTATION

The final result should feel like a real, production-ready institutional website with an integrated AI assistant.

It should NOT look like:

- A basic student project

- A generic chatbot

- A simple landing page

- An AI dashboard

- An overly neon website

The priority is:

1. Professional institutional UI

2. Strong SDIT identity

3. Highly visible SDIT AI Assistant

4. Excellent chat experience

5. Mobile responsiveness

6. Accurate/non-fabricated information

7. Clean React architecture

8. REST API readiness

9. Accessibility

10. Easy future Flask + RAG integration

Before finishing, verify that:

- "/" loads correctly

- "/chat" loads correctly

- Navbar works

- AI Assistant launcher works

- Chat UI is responsive

- API service uses "VITE_API_BASE_URL"

- No API keys exist in frontend

- No backend/RAG/LLM logic is implemented

- Sources are shown only when returned

- Error and loading states work

- Placeholder institutional information is clearly identified

- The application works on mobile, tablet and desktop

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cdb06e40-8828-4f98-a618-fb5571136e99).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
