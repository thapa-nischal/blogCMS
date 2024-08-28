import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import {
  ChevronDown,
  Explore,
  Hackathon,
  CodexLogo,
  WriteIcon,
} from "./Icons.jsx";

const _Navbar = () => {
  const navigate = useNavigate(undefined, { state: true });
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // svg Icons
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    explore: <Explore className="text-warning" fill="currentColor" size={30} />,
    hackathon: (
      <Hackathon className="text-warning" fill="currentColor" size={30} />
    ),
    write: <WriteIcon fill="currentColor" size={30} />,
  };

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      isBordered
    >
      <NavbarBrand>
        <CodexLogo size={42} />
        <p className="font-bold text-inherit">CodeX</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        <NavbarItem>
          <Link color="foreground" onPress={() => navigate("/home")}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          isActive
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
        >
          <Link onPress={() => navigate("/home")} aria-current="page">
            Feed
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                More
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="More Options"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="explore"
              description="Explore blogs from  developers around the world."
              startContent={icons.explore}
            >
              Explore
            </DropdownItem>
            <DropdownItem
              key="hackathon"
              description="Find  and join hackathons happening near you."
              startContent={icons.hackathon}
            >
              Hackathons
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        {user && (
          <NavbarItem className="gap-3">
            <Button
              color="secondary"
              variant="ghost"
              radius="full"
              startContent={icons.write}
              onClick={() => navigate("/createblog")}
            >
              Write
            </Button>
            <NavbarItem as="div" justify="end">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    size="sm"
                    icon={<AvatarIcon />}
                    classNames={{
                      base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                      icon: "text-black/80",
                    }}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="user" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user.username}</p>
                  </DropdownItem>
                  <DropdownItem
                    key="profile"
                    onClick={() => navigate(`/user/${user.username}`)}
                  >
                    My Profile
                  </DropdownItem>
                  <DropdownItem
                    onClick={handleLogout}
                    key="logout"
                    color="danger"
                  >
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            {/* <Button
              color="primary"
              radius="lg"
              variant="solid"
              onClick={handleLogout}
            >
              Sign Out
            </Button> */}
          </NavbarItem>
        )}
        {!user && (
          <div className="lg:flex gap-3">
            <NavbarItem className="hidden lg:flex">
              <Button
                onClick={() => navigate("/login")}
                color="primary"
                href="#"
                variant="ghost"
                radius=""
              >
                Log in
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                onClick={() => navigate("/signup")}
                color="primary"
                href="#"
                variant="solid"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </div>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default _Navbar;
