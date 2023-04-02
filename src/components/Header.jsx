import React from "react"
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core"
import { useDisclosure, useMediaQuery, useViewportSize } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import logo from "../../public/local/thelogo2.png"
import Toggler from "./Toggler"
import LogoComponent from "./LogoComponent"
import MiniToggler from "./MiniToggler"
import { Link, Outlet, useNavigate } from "react-router-dom"

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[7],
    borderBottom: 0,
    marginBottom: 0,
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor }).background,
        0.1,
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}))

export default function Headerr({ links }) {
  const [opened, { toggle }] = useDisclosure(false)
  const { height, width } = useViewportSize()
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const navigate = useNavigate()

  const { classes } = useStyles()

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => {
      return <Menu.Item key={item.link}>{item.label}</Menu.Item>
    })

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              className={classes.link}
              onClick={(event) => {
                event.preventDefault()
                // console.warn("clicked")
              }}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <Link
        to={link.label === "Book Rental" ? ":Booking" : "/"}
        key={link.label}
        className={classes.link}
        onClick={(event) => {
          event.preventDefault()
          if (link.label === "Book Rental") {
            console.log("clicked booking btn")
            navigate(":Booking")
          }
          console.warn("clicked")
        }}
      >
        {link.label}
      </Link>
    )
  })

  return (
    <div>
      <Header height={56} className={classes.header}>
        <Container>
          <div className={classes.inner}>
            <div
              onClick={() => {
                navigate("/MasterDumpWebsite")
              }}
            >
              <LogoComponent height="170px" />
            </div>

            <Group spacing={5} className={classes.links}>
              <Toggler />

              {items}
            </Group>
            {mobile && <MiniToggler />}
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" color="#fff" />
          </div>
        </Container>
      </Header>
      <Outlet />
    </div>
  )
}
