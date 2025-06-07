# Reflection on Practical 1, 4, and 5

## 📄 Documentation

### Main Concepts Applied:

- **Next.js & App Router**: Used for creating a scalable and modular frontend with routing.
- **Tailwind CSS**: Rapid UI prototyping and responsive layout designs.
- **React Context API**: Managed global authentication state across the app.
- **JWT Authentication**: Secure login, signup, and user session management.
- **Prisma ORM**: Efficient database interactions and pagination.
- **TanStack Query**: Simplified data fetching and cache management.
- **Intersection Observer API**: Improved performance by detecting when to load more content without scroll listeners.

---

## 🪞 Reflection

### What I Learned:

- Setting up a clean and scalable project structure is crucial for long-term development.
- Implementing **authentication flows** taught me about token security, API protection, and managing frontend state.
- Working with **TanStack Query’s `useInfiniteQuery`** showed me how powerful modern frontend tools can be for data management.
- I now understand the difference and advantages of **cursor-based pagination** over offset-based.

### Challenges Faced:

1. **API Token Handling in Axios**
   - Initially, requests were failing because the JWT wasn't being attached correctly.
   - Fixed by using Axios interceptors to automatically include the token in headers.


2. **Infinite Scroll Not Triggering**
   - The scroll didn't work at first because the IntersectionObserver wasn't targeting the correct DOM element.
   - After debugging, I updated the observer target to the `loadMoreRef` element and used `useCallback` correctly.


3. **User Following Logic**
   - The UI didn't update immediately after following/unfollowing users.
   - Resolved this by invalidating the query cache in TanStack Query after the mutation.


---

## 💭 Final Thoughts

These practicals really enhanced my understanding of how modern full-stack apps work. Seeing everything come together — from UI, to backend APIs, to real-time interaction and pagination — gave me both technical knowledge and confidence in working with production-grade tools. I'm excited to keep improving this project!
