<template>
  <div>
    <h1 class="text-lg font-semibold md:text-2xl">ToDos</h1>
  </div>
  <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
    <div class="flex flex-col items-center gap-1 text-center">
      <h3 class="text-2xl font-bold tracking-tight">You have no ToDos</h3>
      <p class="text-sm text-muted-foreground">You can start working on sth. as soon as you add a todo.</p>
      <Button class="mt-4">Add ToDo</Button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
