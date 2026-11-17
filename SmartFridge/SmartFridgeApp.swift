import SwiftUI
import WebKit

@main
struct SmartFridgeApp: App {
    var body: some Scene {
        WindowGroup {
            FridgeWebView()
                .ignoresSafeArea()
                .preferredColorScheme(.light)
                .statusBarHidden(true)
        }
    }
}

struct FridgeWebView: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView {
        let view = WKWebView()
        view.isOpaque = false
        view.backgroundColor = UIColor.white
        view.scrollView.isScrollEnabled = true
        view.scrollView.bounces = false
        view.scrollView.contentInsetAdjustmentBehavior = .never
        view.isInspectable = true
        if let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Web") {
            view.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }
        return view
    }
    func updateUIView(_ uiView: WKWebView, context: Context) {}
}
