import { FC, ReactChild, ReactElement, ReactNode } from "react"
import styled from "styled-components"

/**
 * Fallback component provides loading/error screen for components
 */

const FallbackWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 12rem;
  line-height: 100%;
  text-align: center;
`

interface Props {
  loading: boolean
  error: boolean
  children: ReactNode
}

const Fallback: FC<Props> = ({ loading, error, children }) => {
  if (loading) return <FallbackWrapper>Loading...</FallbackWrapper>

  if (error) return <FallbackWrapper>Error</FallbackWrapper>

  return <>{children}</>
}

export default Fallback
