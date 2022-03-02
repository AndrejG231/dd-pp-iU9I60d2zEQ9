import { FC, ReactNode } from "react"
import styled, { keyframes } from "styled-components"
import { Refresh } from "@styled-icons/heroicons-solid"

/**
 * Fallback component provides loading/error screen for components
 */

const FallbackWrapper = styled.div`
  color: white;
  width: 100%;
  margin-top: 30px;
  font-size: 4rem;
  line-height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  @media screen and (min-width: 560px) {
    flex-direction: row;
  }
`

const loadAnimation = keyframes`
 from { transform: rotate(0deg);}
 to { transform: rotate(-360deg);}
`

const LoadIcon = styled(Refresh)`
  animation: ${loadAnimation} 1s linear infinite;
  margin: 20px 0;
  width: 48px;
  @media screen and (min-width: 560px) {
    margin: 0;
    margin-right: 20px;
  }
`

interface Props {
  loading: boolean
  error: boolean
  children: ReactNode
}

const Fallback: FC<Props> = ({ loading, error, children }) => {
  if (loading)
    return (
      <FallbackWrapper>
        <LoadIcon />
        Loading...
      </FallbackWrapper>
    )

  if (error) return <FallbackWrapper>Error</FallbackWrapper>

  return <>{children}</>
}

export default Fallback
