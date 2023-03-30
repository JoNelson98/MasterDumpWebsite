import React from "react"
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  rem,
  Stack,
  Box,
  ThemeIcon,
} from "@mantine/core"
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react"
import { MOCKDATA } from "../assets/BusinessInfo"

function ContactIcon({ icon: Icon, title, description, variant = "gradient", className, ...others }) {
  const { classes, cx } = useStyles({ variant })
  return (
    <div className={cx(classes.wraptwo, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

const ContactIconsList = ({ data = MOCKDATA, variant }) => {
  const items = data.map((item, index) => <ContactIcon key={index} {...item} variant={variant} />)
  return <Stack>{items}</Stack>
}

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.xl,
  },
  wraptwo: {
    color: theme.white,
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    minHeight: 400,
    width: "70%",
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}))

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram]

export default function Contact() {
  const { classes } = useStyles()

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ))

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            <ContactIconsList variant="white" />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button className={classes.control}>Send message</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </div>
  )
}
