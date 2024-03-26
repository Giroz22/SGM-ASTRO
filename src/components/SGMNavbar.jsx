import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export const AcmeLogo = () => (
  <img
    src="/imgs/logos/simple-light-logo.png"
    alt=""
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
  />
);

export default function SGMNavbar() {
  const menuItems = [
    {
      href: "/",
      item: "Inicio",
    },
    {
      href: "/Nosotros",
      item: "Nosotros",
    },
    {
      href: "/Servicios",
      item: "Servicios",
    },
    {
      href: "/FAQ",
      item: "FAQ",
    },
  ];

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">SGM</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">SGM</p>
        </NavbarBrand>

        {menuItems.map(({ item, href }, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href={href}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>

      <NavbarMenu>
        {menuItems.map(({ item, href }, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href={href} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
