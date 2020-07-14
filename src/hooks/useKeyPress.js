import { useEffect } from 'react'

export function useKeyPress(callback) {
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    callback(key)
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]) // Empty array ensures that effect is only run on mount and unmount

  return null
}
