This repository is a playground for isolating issues and putting together best practices for writing Svelte applications in TypeScript, using vscode.

The initial commit is the official Svelte template (for JavaScript).

## Configuration

- vscode (1.45.1) with Svelte Beta (99.0.28), no other Svelte extension

## Issues

- Can't import types from `types.ts` in Svelte component? (no example yet)
  `Error: 'ExampleType' is not exported by src/app/types.ts, imported by src/components/Component.svelte`
- Event actions show multiple type errors (no example yet)
  `Property 'detail' does not exist on type 'Event'.`
- Cannot find module 'svelte/store' (example WIP)

- https://github.com/sveltejs/svelte-preprocess/issues/160 (tmp fix: add '.svelte' extension)
- https://github.com/sveltejs/svelte-preprocess/issues/159 (tmp fix: add '.ts' extension despite TS error)
- https://github.com/sveltejs/svelte-preprocess/issues/158 (no example yet)

## Other problems

- no autocomplete on file paths (".svelte" components)

## Wishlist
