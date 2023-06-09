import { useContext } from 'react'
import { AbexContext } from '../context'

const useAbex = (): any => useContext(AbexContext)

export default useAbex
