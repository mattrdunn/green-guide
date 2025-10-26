# Green Guide

## Overview
Green Guide is a web app designed to answer every question a doting plant parent might ask. Whether you’re a complete novice or a seasoned horticulturist, Green Guide offers highly detailed information on a wide range of plant species. The app provides a simple, intuitive user interface to a vast encyclopedia of plant knowledge.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the project dependencies:
```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Under construction: http://localhost:3000/monstera/deliciosa


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
npm
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Functional Requirements
The functional requirements for the project define the **features** and **capabilities** provided to users of the site.
- Search plants by name
- Browse a glossary of plants by name, image, category
- Create an account
  - Manage notification preferences, username, email, password, profile picture
  - Saved/Favorites section for plants that a user continually wants to look up.
  - Create Lists (public or private) e.g. "Easiest Houseplants for Beginners"
  - History of products that the user has ordered / wants to reorder.
    - Shopping cart
- Generative AI
  - AI bot named Anys ("bot-anys" as in "botanist" lol)
  - Trained on our (eventaul) enormous database of plant knowledge
  - Able to recognize images uloaded of plants, identify visual symptoms of ailments (if any)
  - Provide links to references within the site
  - Able to recommend products to the user, based on what they want to do.
    - e.g. in response to, "How do I get rid of thrips?", Anys may recommend systemic pesticides along with detailed instructions on how to apply them.
- Interface for mocking up landscaping arrangements
  - Add dimensions of land, outline of home, retaining walls, and plantable areas
  - Location (for zone, daylight hours, etc)
  - Amount of sunlight in each section of the landscape, throughout the day
  - Recommend plants that are suitable for the location and sunlight
  - Recommend products to make caring for the plants simple
    - Soil or ground cover
    - Products for automating irrigation
- Indoor plant layout planner
  - Mock up indoor spaces with windows, cardinal orientation (N/S/E/W), and location.
  - Note any obstructions to sunlight outside the windows
  - Get houseplant placement recommendations based on light needs.


## Non-functional Requirements
The non-functional requirements define the **details** and **constraints** under which the various aspects of the site are provided.
- Accessibility
  - Users may access the site without any account or authentication. We want users to be able easily come through the site without headaches.
  - Quick page loads, fast response time on queries.
  - No obnoxious ads being forced in your face at every turn. If we offer sponsored products, we should present them in a way that feels like an intelligent/personal recommendation, so it's more likely to be appreciated versus cursed (e.g. in information text blocks, adding hyperlinks within explanations of fertilizer that link to certain products).
- Security
  - TLS protocol for client/server connection.
  - Password Salting for storing user account credentials.
  - Compliance with GDPR standards
  - Cookie policy & settings dialogue for analytics, performance, marketing

## Monetization
The site will require a certain amount of funding to be made accessible to a remotely sizeable user base. We should define ways in which funding can be acquired here:
  - Sponsors products contextually recommended to users.
  - Subscription model that offers perks like members-only product deals, free shipping, etc.
