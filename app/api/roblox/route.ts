export async function GET() {
  // Step 1: resolve Place ID → Universe ID
  const universeRes = await fetch(
    'https://apis.roblox.com/universes/v1/places/1537690962/universe'
  )

  if (!universeRes.ok) {
    return Response.json({ error: "Failed to resolve Universe ID" }, { status: 502 })
  }

  const { universeId } = await universeRes.json()

  // Step 2: fetch player count
  const gameRes = await fetch(
    `https://games.roblox.com/v1/games?universeIds=${universeId}`,
    { next: { revalidate: 30    } }
  )

  if (!gameRes.ok) {
    return Response.json({ error: "Failed to fetch from Roblox" }, { status: 502 })
  }

  const data = await gameRes.json()
  const playerCount = data.data[0]?.playing ?? 0

  return Response.json({ playing: playerCount })
}