

const URL = ' http://localhost:3001'

export async function getItinearies() {
  const uri = 'itineraries'

  return await fetch(`${URL}/${uri}`)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON
    })
    .catch((error) => {
      return { error: error }
    })
}

export async function getLeg(leg) {
  const uri = `legs/${leg}`

  return await fetch(`${URL}/${uri}`)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON
    })
    .catch((error) => {
      return { error: error }
    })
}
