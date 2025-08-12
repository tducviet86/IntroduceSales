import { Group, Text } from "@mantine/core"

export default function PageNotFound() {
  return (
    <Group h="100vh" w="100%" justify="center" align="center">
      <Text fz={100} c="gray" fw={700}>
        404
      </Text>
      <Text c="dimmed">Page not found</Text>
    </Group>
  )
}
