# Deployment & Setup Guide

**Live Preview:** [bee-swarm-live-development.vercel.app](https://bee-swarm-live-development.vercel.app/) 

*Domain may change*

---


## Start Steps:
Option 1: Production Mode
- run 'npm run build'
- run 'npm run start'

Option 2: Development Mode
- run 'npm run dev'

## Environment Variables
Create a `.env.local` file in the root directory and define the following variables:

```env
AUTH_SECRET=your_auth_secret
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
