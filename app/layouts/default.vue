<template>
    <div class="min-h-screen flex flex-col w-full">
        <AppHeader />
        <main class="flex-1 w-full">
            <slot></slot>
        </main>
        <AppFooter />
    </div>
</template>
