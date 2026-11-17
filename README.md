# Smart Fridge Tracker

An iPhone prototype built with SwiftUI, WKWebView and Three.js. All web resources are bundled locally, so the app runs without a server.

## Run in Xcode

Open `SmartFridge.xcodeproj`, select the **SmartFridge** scheme and an iPhone simulator, then Run. Running on a physical iPhone requires configuring your development team and code signing in Xcode.

## Features

- Interactive white double-door fridge with animated opening and camera transitions.
- Refrigerated shelves in the upper half and a pull-out freezer drawer below. Opening the drawer moves the camera into an overhead view.
- Food details, quantities and expiry reminders, with alerts on the 3D models.
- Drinks cabinet accessed through the arrow on the fridge's right side.
- Searchable inventory List covering fridge, freezer and drinks.
- Three-column recipe library with add, edit and delete actions, ingredient requirements and cooking steps. Available ingredients are matched against inventory.
- Menu with local profile, account QR code, clock preferences and expiry marker settings.
- Game mode with draggable, stackable food, settling physics and movement for expired items.
- Floating translucent navigation and reduced-motion support.

Inventory, recipes, profile settings and game arrangements are stored on the device. Initial food records are sample data. Appliance connectivity, remote accounts and cloud synchronization are not implemented.

## Development

Requires Node.js and npm for JavaScript changes.

```sh
npm ci
npm test
npm run build
```

Build in Xcode after changing JavaScript. The generated bundle at `SmartFridge/Web/app.js` is committed so a fresh checkout can run directly in Xcode.

The XcodeGen specification is in `project.yml`. To regenerate the Xcode project, run `xcodegen generate` with XcodeGen installed.

## Project files

- `SmartFridge/SmartFridgeApp.swift` — native app and WKWebView host.
- `SmartFridge/Web/` — bundled JavaScript, HTML, CSS and dependency licenses.
- `web-src/` — Three.js models, interactions, inventory, recipes and settings.
- `tests/` — geometry, clipping, freezer, game arrangement and recipe regression tests.
- `previews/` — development screenshots and a game-mode video. Some show earlier designs.
- `references/` — refrigerator reference images and provenance.

The fridge and food models use original procedural geometry. Three.js and QR code generator license notices are included in the app resources.
