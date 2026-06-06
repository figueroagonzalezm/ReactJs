import { useTheme } from "./hooks";



export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>

            <div>
                <h2>The current theme is: {theme}</h2>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>

        </div>
    )

}
