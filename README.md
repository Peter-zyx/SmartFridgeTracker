# Smart Fridge Tracker — Classic UI

This branch reconstructs the earlier shelf-based UI for an iteration comparison with `main`. The repository's first commit already contained the newer app, so this is a reconstruction from the shared models and recorded design, rather than a historical checkout.

## Comparison

| Interaction | Classic — this branch | Latest — main |
| --- | --- | --- |
| Fridge interior | Four full-height glass shelves | Upper refrigerated shelves and a lower freezer drawer |
| Frozen food | On the bottom shelf | Pull-out drawer with overhead camera |
| Drinks cabinet | Drinks tab | Right-side arrow |
| Bottom navigation | Fridge, Drinks, Recipe, Menu | Fridge, List, Recipe, Menu |
| Food movement | Swipe each shelf horizontally | Shelf browsing or Game Mode dragging and stacking |
| Expiry reminders | Plain food details | Model warning badges and expiry status |
| Recipes | Ingredients and cooking steps | Inventory matching and availability indicators |

The white double-door fridge, door display, opening transition, food models, drinks cabinet, recipe editing and local profile are included. The cabinet clipping fixes are retained for stable browsing.

Preview the [classic shelves](previews/classic-shelves.png) and [drinks cabinet](previews/classic-drinks.png).

## Run alongside the latest app

Open `SmartFridge.xcodeproj`, select the SmartFridge scheme and an iPhone simulator, then Run.

This branch installs as **Fridge Classic**, with bundle identifier `com.peter.smartfridge.legacy`. It has separate local data, so both versions can be installed together for comparison. The latest app uses `com.peter.smartfridge`.

## Development

```sh
npm ci
npm test
npm run build
```

Build in Xcode after JavaScript changes. The generated `SmartFridge/Web/app.js` bundle is tracked and works offline. XcodeGen users can regenerate the project with `xcodegen generate`. Physical device installation requires configuring code signing.

The app uses sample inventory stored locally. Models are original procedural Three.js geometry. Dependency license notices are in `SmartFridge/Web/`; reference image provenance is in `references/README.md`. Development screenshots in `previews/` include earlier iterations.
