<script setup lang="ts">
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const appConfig = useAppConfig()

const { navigation } = appConfig
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <Icon name="tabler:avocado" class="h-6 w-6" />
            <span class="">Acme Inc</span>
          </a>
          <NuxtLink to="/docs" class="inline-block" title="Documentation">
            <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
              <Icon name="tabler:book-2" class="size-5" />
              <span class="sr-only">Docs</span>
            </Button>
          </NuxtLink>
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              class="desktopmenu flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-gray-900"
              :title="item.title"
            >
              <Icon v-if="item.icon" :name="item.icon" class="size-4" />
              {{ item.name }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <Icon name="tabler:menu-2" class="size-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col">
            <nav class="grid gap-2 text-lg font-medium">
              <NuxtLink to="/" class="flex items-center gap-2 text-lg font-semibold mb-4">
                <Icon name="tabler:avocado" class="size-6" />
                <span class="sr-only">Acme Inc</span>
              </NuxtLink>

              <NuxtLink
                v-for="item in navigation"
                :key="item.to"
                :to="item.to"
                class="mobilemenu mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-gray-500 hover:text-gray-900"
                :title="item.title"
              >
                <Icon v-if="item.icon" :name="item.icon" class="size-5" />
                {{ item.name }}
              </NuxtLink>
            </nav>
          </SheetContent>
        </Sheet>
        <div class="w-full flex-1"></div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <Icon name="tabler:user" class="size-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="css" scoped>
.desktopmenu.router-link-active {
  @apply text-gray-800 bg-gray-200;
}

.mobilemenu.router-link-active {
  @apply text-gray-800 bg-gray-200;
}
</style>
