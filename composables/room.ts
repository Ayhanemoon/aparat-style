// composables/useRoom.ts
import { useRuntimeConfig } from '#app'
import { useApi } from '~/composables/api'

export const useRoomApi = (roomId: string | number) => {
  const config = useRuntimeConfig()

  const getRoom = async (fallback = true) => {
    const url = `${config.public.apiBase}/api/rooms/${roomId}`
    try {
      const room = await useApi(url, {
        key: `room-${roomId}`,
        initialCache: false,
        server: false
      })
      return room
    } catch (err) {
      console.error('Error fetching room details:', err)
      if (!fallback) {
        return null
      }
      // Updated fallback fake data with diverse devices
      return {
        id: roomId,
        name: 'Fake Room',
        devices: [
          {
            id: 101,
            name: 'Living Room Lamp',
            type: 'light',
            status: 'off',
            brightness: 70
          },
          {
            id: 102,
            name: 'Kitchen AC',
            type: 'ac',
            status: 'on',
            temperature: 24
          },
          {
            id: 103,
            name: 'Bedroom Outlet',
            type: 'switch',
            status: 'off'
          }
        ]
      }
    }
  }

  const updateDevice = async (deviceId: number, newData: any) => {
    const url = `${config.public.apiBase}/api/rooms/${roomId}/devices/${deviceId}`
    const updatedData = await useApi(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: { 'Content-Type': 'application/json' },
      key: `room-${roomId}-device-${deviceId}`,
      initialCache: false,
      server: false
    })
    return updatedData
  }

  return { getRoom, updateDevice }
}
