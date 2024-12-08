export type NavigationItem = {
  name: string
  title: string
  to: string
  icon?: string | undefined
}

export default defineAppConfig({
  navigation: [
    { name: "Dashboard", title: "Dashboard", to: "/", icon: "tabler:home" },
    { name: "ToDos", title: "All Todos", to: "/todo", icon: "tabler:list-check" },
  ] as NavigationItem[],
})
