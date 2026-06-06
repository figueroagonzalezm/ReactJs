import { ThemeProvider } from "./ThemeProvider"
import { ThemeToggle } from "./ThemeToggle"

export const Main = () => {
    return (
        <ThemeProvider>
            <ThemeToggle />
        </ThemeProvider>
    )
}