import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "../container/Container";
import { HeaderEl } from "./HeaderEl";
import { HeaderWrapper } from "./HeaderWrapper";
import { Title } from "./Title";
import { ModeSwitcher } from "./ModeSwitcher";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <HeaderWrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}{" "}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </HeaderWrapper>
      </Container>
    </HeaderEl>
  );
};
