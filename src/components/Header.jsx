import React from "react"
import { createStyles, Header, Menu, Group, Center, Burger, Container, rem } from "@mantine/core"
import { useDisclosure, useViewportSize } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import logo from "../../public/local/thelogo2.png"
import Toggler from "./Toggler"

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

  const { classes } = useStyles()

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => <Menu.Item key={item.link}>{item.label}</Menu.Item>)

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    )
  })

  return (
    <Header height={56} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <img style={{ height: "170px" }} src={logo} alt="master dump logo" />
          <Group spacing={5} className={classes.links}>
            <Toggler />

            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" color="#fff" />
        </div>
      </Container>
    </Header>
  )
}
