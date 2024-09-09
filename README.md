# Bun Crawler Map Editor

The **Bun Crawler Map Editor** is a tool designed to create and edit tiled maps for the **Bun Crawler** game. This editor uses the **16x16 DungeonTileset II** sprites by **0x72** to help you design maps that can be directly integrated into the game.

## Features

- **Sprite Loading:** Automatically loads the 0x72 sprite sheet for easy map creation.
- **Map Creation:** Design your custom map using the provided tile set.
- **JSON Export:** Generates a `.json` file representing your map, which can then be added directly to the Bun Crawler game.

## Requirements

To run the project, you will need:

- [Bun](https://bun.sh) - A fast JavaScript runtime for all-in-one JavaScript projects.
- [Vite](https://vitejs.dev) - A next-generation frontend tooling for fast builds and an optimal development experience.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/marceloferreira357/bun-crawler-map-editor.git
    cd bun-crawler-map-editor
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Create a `.env` file from the example:
    ```bash
    cp .env.example .env
    ```

4. Start the development server:
    ```bash
    bun run dev
    ```

5. Open your browser and navigate to `http://localhost:3001` to start creating your maps.

## .env.example

To configure the application, you need to set up environment variables. Create a `.env` file in the root of the project with the following content:

```env
VITE_PUBLIC_ADDRESS=http://127.0.0.1:3001
VITE_RELEASE_VERSION=0.0.1
```