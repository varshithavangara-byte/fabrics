# Pushpa Fabrics — Project Developer Notes

## Design Choices & Architecture
- **Architecture**: Decoupled MERN stack. React client bundled via Vite for instant HMR and optimized production build. Node/Express backend running REST API.
- **Theme System**: Custom CSS variables defined in `src/index.css`. All colors and spacing are driven by tokens.
- **Code Splitting**: Route-level code splitting using `React.lazy()` and `Suspense` with a custom `LoadingSpinner`.
- **Security**: Express app utilizes `helmet` headers, origin-filtered CORS, and rate limiting (100 reqs / 15 mins).

## API Contracts
- `POST /api/enquiry`: Accepts `{ name, phone, email, subject, message }`. Saves to MongoDB and sends email notification via Nodemailer.
- `GET /api/enquiry`: Returns list of all enquiries sorted by newest first.
- `DELETE /api/enquiry/:id`: Deletes an enquiry by ID.

## Verification Checklist
- [x] Vite project compiles clean without errors.
- [x] All 9 pages render seamlessly.
- [x] Mobile navbar operates cleanly across small viewports.
- [x] WhatsApp buttons build valid click-to-chat links.
- [x] Express backend starts cleanly on port 5000.
