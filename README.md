# Pizza Order SPA — React

Single Page pizza ordering application built with React.  
Implements a complete order flow with controlled forms, state-driven navigation, API submission, and Cypress end-to-end tests.

Live Demo: https://pizza-react-project-1srx.vercel.app
Test Status: Cypress E2E tests passing

---

## 🍕 Project Overview

This project simulates a configurable pizza ordering flow:

Product selection → Order form → Validation → API submission → Order confirmation screen

Primary focus areas:

- form state modeling
- component communication
- predictable event flow
- testable UI behavior

My Mechanical Engineering and ERP process experience influenced how the form workflow and validation logic were modeled — emphasizing guarded transitions and reliable state updates.

---

## ⚙️ Technical Highlights

- Component-based UI architecture
- Controlled form with centralized state
- Prop lifting for cross-page data transfer
- State-driven page switching (no router)
- Multi-select toppings managed with immutable arrays
- Derived price calculations from state
- Real-time form validation and submit guard
- Axios POST request to mock API endpoint
- Error handling fallback flow
- Styled-components modular styling
- Data-driven rendering with map()

---

## 🔒 Form Rules & Validation Logic

The order form includes guard rules to prevent invalid submissions.

• Submit button remains disabled until required fields are completed  
• Customer name, pizza size and dough thickness must be selected  
• Toppings selection has enforced limits — minimum 4 and maximum 10  
• Topping limits are controlled through array length checks in state  
• Submit availability is derived from form state and bound to the button disabled prop  

This ensures users cannot send incomplete or invalid orders and keeps the order flow predictable.


---

## 🧪 Cypress Test Coverage

End-to-end tests implemented for the critical order flow:

- text input interaction and validation
- multi-select toppings behavior
- form submit flow and success navigation

Run tests:

```bash
npx cypress open
