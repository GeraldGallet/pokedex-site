import { CapturePokemonInput, UpdateUserInput, User } from "@/types"
import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const useGetUser = (id: string) => {
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    axios.get<User>(`http://localhost:3001/users/${id}`)
      .then((data) => {
        setUser(data.data)
      })
      .catch((err) => {
        console.error(err);
        setUser(undefined)
      })
  }, [])

  const updateUser = (input: UpdateUserInput) => {
    axios.patch<UpdateUserInput, AxiosResponse<User>>(`http://localhost:3001/users/${id}`, input)
      .then((data) => {
        setUser(data.data)
      })
      .catch((err) => console.error(err))
  }

  const capturePokemon = (input: CapturePokemonInput) => {
    axios.post<CapturePokemonInput, AxiosResponse<User>>(`http://localhost:3001/users/${id}/pokemons`, input)
      .then((data) => {
        setUser(data.data)
      })
      .catch((err) => console.error(err))
  }

  return { user, updateUser, capturePokemon }
}