import { getThemeFromStorage } from "@/lib/utils";
import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(getThemeFromStorage);

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <Button isIconOnly variant="tertiary" onPress={handleClick}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
