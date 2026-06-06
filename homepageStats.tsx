// components/homepageStats.ts

export async function getHomepageStats() {
  try {
    // TODO: fetch from MongoDB the size of array + 1 and return to label: Discord Servers
    const res = await fetch(
      'https://games.roblox.com/v1/games?universeIds=601130232',
      { next: { revalidate: 30 } }
    )

    if (!res.ok) throw new Error(`Roblox API error: ${res.status}`)

    const data = await res.json()
    const playing = data.data[0]?.playing ?? 0  

    return [
      { label: 'Active Players', value: playing.toLocaleString(), icon: '📍' },
      { label: 'Honey Produced', value: '42.8 GB', icon: '🍯' },
      { label: 'Discord Servers', value: '30+', icon: '✨' }
    ]
  } catch (err) {
    console.error('Failed to fetch stats:', err)
    return [
      { label: 'Active Players', value: 'N/A', icon: '📍' },
      { label: 'Honey Produced', value: '42.8 GB', icon: '🍯' },
      { label: 'Discord Servers', value: '30+', icon: '✨' }
    ]
  }
}