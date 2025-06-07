This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# TikTok Clone Practical Series

This repository contains the implementation of three major practicals in building a TikTok-like application using **Next.js**, **Express.js**, **Prisma**, and **TanStack Query**. Each practical builds upon the previous one.

---

## 🧪 Practical 1 - Initial Project Setup & UI Layout

### Instructions:
- Set up a new Next.js app with Tailwind CSS and App Router.
- Created basic page routes: Home, Profile, Upload, Following, Explore, and Live.
- Set up layout structure with `MainLayout` and sidebar.
- Created reusable UI components like `VideoCard` and `VideoFeed`.

### Outcome:
- App is now structured for TikTok-style video feed display.
- User navigation via the sidebar and top header is functional.

---

## 🔐 Practical 4 - Connecting Frontend to Backend

### Instructions:
- Connected the Next.js frontend to an Express backend.
- Implemented authentication (JWT-based): login, register, and logout.
- Created context provider for managing user state.
- Added services (`videoService`, `userService`) for API communication.
- Built pages for uploading videos, following users, exploring users, and profile views.
- Integrated real-time video and user data.

### Outcome:
- Users can now register, login, upload videos, and interact with real backend data.
- The app supports full social interactions (like/follow).

---

## 🔄 Practical 5 - Infinite Scrolling with TanStack Query

### Instructions:
- Implemented **cursor-based pagination** for better scalability.
- Used `useInfiniteQuery` from TanStack Query for efficient state management.
- Created a `useIntersectionObserver` hook to detect when the user scrolls near the bottom.
- Updated `VideoFeed` component to support dynamic loading as the user scrolls.

### Outcome:
- Infinite scrolling is now implemented in the main video feed.
- Performance is smooth, and data loading is efficient and user-friendly.

---

