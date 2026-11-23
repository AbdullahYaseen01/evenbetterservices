# Handover

EvenBetterServices is a Next.js site with a homepage, services overview, 11 service pages, solutions, about, and contact.

## Not invented

No public email, phone, WhatsApp number, social profile, calendar link, office address, founder name, team size, years of experience, client list, certification, award, or performance statistic was supplied. Those details are absent from the site on purpose.

There is no Work item in the navigation. The “Example solutions” section is labeled Concept or Demo. It is not a client portfolio.

## Enquiry form

`/api/enquiry` validates the form and returns success only after a delivery integration accepts the message.

Until one of the following is set, submission returns an error and the page does not show a success state:

- `ENQUIRY_WEBHOOK_URL` — the enquiry JSON is posted to that URL.
- `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL`, and `ENQUIRY_TO_EMAIL` — the enquiry is emailed with Resend.

Keep those values in the host environment. Do not put them in client-side code.

A privacy notice was not added because no legal copy was supplied. Add one before collecting enquiries from people in the UK, Europe, or other regions that require it.

## After deploy

Set `NEXT_PUBLIC_SITE_URL` to the public site address so canonical links, the sitemap, and structured data use that domain.
