# 🐝 BeeSwarmLive

> A full-stack community platform for Bee Swarm Simulator. Currently in active development.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-latest-5A0EF8?logo=daisyui)](https://daisyui.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-Java-6DB33F?logo=springboot)](https://spring.io/projects/spring-boot)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Discord](https://img.shields.io/badge/Community-270k%2B%20Members-5865F2?logo=discord)](https://discord.gg/)

---

> ⚠️ **Note:** This is a private project. Source code is not publicly available — this repository exists as a public-facing overview for reference purposes only.

---

## About

**BeeSwarmLive** is a full-stack web platform serving the Bee Swarm Simulator community, one of the largest Roblox communities with over **270,000 Discord members**. The platform provides players with live tools, game resources, and community features in one centralised hub.

Deployment is ongoing.

---

## Tech Stack

### Frontend
| | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | DaisyUI |
| Fonts | Google Fonts via `next/font/google` |

### Backend
| | Technology |
|---|---|
| Framework | Spring Boot (Java) |
| Database | MongoDB |
| API | Custom RESTful APIs |

---

## Features

- 🔴 Real-time in-game data and tracking
- 🗺️ Community resources: guides, references, and tools
- 📱 Mobile-first responsive design
- 🌙 Multi-theme UI via DaisyUI
- ⚡ Server-side rendering with Next.js App Router
- 🔗 Discord community integration

### Hive Search

Real-time item and gear lookup powered by a custom Spring Boot REST API.

<details>
<summary>View component</summary>

```tsx
'use client';
import { useState, FormEvent } from 'react';

export default function HiveSearchBar() {
  const [itemScanner, setItemScanner] = useState('');
  const [honeyCost, setHoneyCost] = useState<number | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const retrieveGearData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSearching(true);
    setErrorMsg('');
    setHoneyCost(null);
    try {
      const response = await fetch(
        `http://localhost:8080/api/gears/search?name=${itemScanner}`
      );
      if (!response.ok) throw new Error('Item not found in the hive database.');
      const data = await response.json();
      setHoneyCost(data.cost);
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsSearching(false);
      setItemScanner('');
    }
  };

  return (
    <div>
      <form onSubmit={retrieveGearData}>
        <input
          type="text"
          value={itemScanner}
          onChange={(e) => setItemScanner(e.target.value)}
          placeholder="Search for an item..."
          required
        />
        <button type="submit" disabled={isSearching}>
          {isSearching ? 'Scanning...' : 'Find Gears'}
        </button>
      </form>
      {honeyCost !== null && <p>Cost: {honeyCost.toLocaleString()} Honey</p>}
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
    </div>
  );
}
```

</details>

---

## Links

- 💬 **Discord:** [Join the community](https://discord.gg/Q6CQkUm3aH)
- 🎮 **Game:** [Bee Swarm Simulator on Roblox](https://www.roblox.com/games/1537690962)
- 🌍 **Website:** Coming soon

---

<p align="center">Built and maintained by Shopnil Rahman</p>
