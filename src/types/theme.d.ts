import "styled-components"
import { Theme } from "../core/theme"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
