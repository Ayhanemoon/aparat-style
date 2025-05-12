// composables/useRooms.ts
import { useRuntimeConfig } from '#app'
import { useApi } from '~/composables/api'

export const useRoomsApi = () => {
  const config = useRuntimeConfig()

  const getRooms = async () => {
    const url = `${config.public.apiBase}/api/rooms`
    try {
      const rooms = await useApi(url, {
        key: 'rooms',
        initialCache: false,
        server: false
      })
      // If no rooms are returned, trigger fallback:
      if (!rooms) {
        throw new Error('No rooms returned')
      }
      return rooms
    } catch (err) {
      console.error('Error fetching rooms:', err)
      // Return fallback fake data for rooms:
      return [
        {
          id: 1,
          name: 'Living Room',
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
              name: 'Living Room Fan',
              type: 'fan',
              status: 'on'
            }
          ]
        },
        {
          id: 2,
          name: 'Kitchen',
          devices: [
            {
              id: 201,
              name: 'Kitchen AC',
              type: 'ac',
              status: 'on',
              temperature: 24
            },
            {
              id: 202,
              name: 'Kitchen Light',
              type: 'light',
              status: 'on',
              brightness: 80
            }
          ]
        },
        {
          id: 3,
          name: 'Bedroom',
          devices: [
            {
              id: 301,
              name: 'Bedroom Outlet',
              type: 'switch',
              status: 'off'
            },
            {
              id: 302,
              name: 'Bedroom Lamp',
              type: 'light',
              status: 'off',
              brightness: 50
            }
          ]
        },
        {
          id: 4,
          name: 'Office',
          devices: [
            {
              id: 401,
              name: 'Office Fan',
              type: 'fan',
              status: 'on'
            },
            {
              id: 402,
              name: 'Office AC',
              type: 'ac',
              status: 'off',
              temperature: 22
            }
          ]
        }
      ]
    }
  }

  return { getRooms }
}
