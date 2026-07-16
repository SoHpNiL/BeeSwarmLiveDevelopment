import {averageHoney} from "./averageHoney";
export async function getHomepageStats() {


  try {
    // TODO: fetch from MongoDB the size of array + 1 and return to label: Discord Servers
    const res = await fetch(
      'https://games.roblox.com/v1/games?universeIds=601130232',
      { next: { revalidate: 30 } }
    )

    if (!res.ok) throw new Error(`Roblox API error: ${res.status}`)
    
    // fetch data
    const honeyData = await averageHoney();
    const data = await res.json()
    const playing = data.data[0]?.playing ?? 0  

    return [
      { label: 'Active Players', value: playing.toLocaleString(), icon: '📍' },
      { label: 'Average Honey Per Click', value: honeyData.value, icon: '🍯' },
      { label: 'Discord Servers', value: '30+', icon: '✨' }
    ]
  } catch (error) {
    console.error('Failed to fetch stats:', error)
    return [
      { label: 'Active Players', value: 'N/A', icon: '📍' },
      { label: 'Your Average Honey Per Click', value: 'N/A', icon: '🍯' },
      { label: 'Discord Servers', value: 'N/A', icon: '✨' }
    ]
  }
}