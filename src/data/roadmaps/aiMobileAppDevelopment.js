// Complete production-grade steps data for "AI Mobile App Development" Roadmap (14 Nodes)

export const aiMobileAppDevelopmentData = {
  id: "ai-mobile-app-development",
  title: "AI Mobile App Development",
  description: "Build and ship cross-platform iOS and Android apps using React Native, Expo, Cursor, and Supabase.",
  category: "Role & Workflow Roadmaps",
  stepCount: 14,
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Mobile UX Patterns, Expo Architecture & Native UI",
      description: "Master thumb-zone ergonomics, scaffold universal file-based routing with Expo Router, compile utility styles with NativeWind, and run 60fps gesture animations on the UI thread."
    },
    {
      id: "phase-2",
      title: "Phase 2: Mobile Auth, Offline-First Storage & Device Hardware",
      description: "Implement App Store-compliant Sign in with Apple and FaceID biometrics, build sub-millisecond offline storage with MMKV, and interface native camera and audio capture pipelines."
    },
    {
      id: "phase-3",
      title: "Phase 3: Multimodal AI Pipelines, On-Device Models & Push Ops",
      description: "Wire streaming camera vision and voice AI through secure edge proxies, deploy zero-latency 4-bit on-device models with CoreML/ExecuTorch, and configure rich APNs/FCM push notifications."
    },
    {
      id: "phase-4",
      title: "Phase 4: In-App Purchases, Cloud Builds & App Store Launch",
      description: "Integrate native subscriptions with RevenueCat, automate cloud binary compilation and over-the-air hotfixes with EAS, profile 60fps lists with FlashList, and pass Apple App Review on the first try."
    }
  ],
  steps: [
    // Node 1
    {
      id: "step-1",
      stepNumber: 1,
      phaseId: "phase-1",
      title: "Mobile-First UX Flows, Thumb Zones & Onboarding Patterns",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Study top-grossing iOS/Android onboarding flows, bottom-sheet navigation, and safe-area layout constraints before writing code.",
      description: "Great mobile applications feel fundamentally different from websites wrapped in a web view. Smartphones are held in one hand, navigated with the thumb, and subjected to unpredictable interruptions. Before writing a single line of React Native code, mobile engineers map user interaction patterns to natural thumb zones (the lower 40% of the screen), establish ergonomic bottom-sheet drawer patterns, and design progressive onboarding flows that deliver immediate value before requesting invasive operating system permissions.",
      playbook: {
        setup: "Deconstruct 3 top-grossing AI applications (e.g., ChatGPT, Photoroom, Cal AI) using Mobbin. Catalog safe-area insets, 48x48dp minimum touch targets, and natural one-handed thumb interaction zones.",
        execute: "Wireframe a 3-step progressive onboarding funnel in Figma: 1) Interactive problem-discovery quiz, 2) Zero-friction 'Aha!' moment (e.g. camera photo analysis or voice test without requiring an account), and 3) Custom in-app permission priming screen before requesting iOS camera and push alerts.",
        verify: "Review the interactive Figma prototype on a physical device: confirm all primary call-to-action buttons can be tapped comfortably with one thumb on a 6.9-inch display without shifting hand grip."
      },
      tools: [
        {
          name: "Mobbin",
          type: "Freemium",
          url: "https://mobbin.com",
          description: "Curated design library showcasing real-world iOS and Android screen recordings, user flows, and paywall architectures.",
          bestFor: "Deconstructing top-grossing onboarding funnels & UI patterns"
        },
        {
          name: "Figma",
          type: "Freemium",
          url: "https://www.figma.com",
          description: "Industry-standard collaborative interface design software featuring mobile device frames, auto-layout, and interactive prototypes.",
          bestFor: "Mobile screen wireframing & thumb-zone layout testing"
        },
        {
          name: "Claude 3.7 Sonnet",
          type: "Freemium",
          url: "https://claude.ai",
          description: "Frontier reasoning model for generating comprehensive mobile UX specifications, user personas, and onboarding copy variants.",
          bestFor: "Onboarding copy generation & UX specification documentation"
        }
      ],
      callouts: {
        mistake: "Triggering iOS system permission prompts immediately upon app launch before explaining why the app needs them, causing 60%+ denial rates.",
        proTip: "Use custom in-app educational bottom sheets to prime users before triggering the irreversible iOS system permission dialog.",
        mistakes: [
          "Triggering native iOS camera or notification dialogs on the first launch before establishing value, leading to permanent permission denials.",
          "Forcing user registration or social login before demonstrating any core AI functionality, driving high first-day drop-off rates.",
          "Placing primary buttons and navigation tabs in the top third of the screen where one-handed thumb reach is ergonomically difficult."
        ],
        proTips: [
          "Always implement 'Soft Permission Priming' screens; if the user taps 'Not Now' on your custom modal, you preserve the single native iOS prompt for later.",
          "Position primary action buttons and floating drawers within the lower 40% of the viewport to maximize one-handed ergonomic comfort.",
          "Incorporate an interactive personalization quiz during onboarding; tailoring the interface to user goals increases downstream paywall conversion by over 2x."
        ]
      },
      promptLab: {
        title: "Mobile Onboarding & Ergonomic UX Specification Generator",
        description: "Generate a production-grade mobile UX flow specification detailing thumb-zone ergonomics, progressive onboarding steps, and soft permission priming copy.",
        variables: [
          {
            name: "App Category",
            label: "App Category",
            options: ["AI Camera Scanner & Vision Assistant", "Conversational AI Voice Coach", "Smart Productivity & Document Assistant"],
            default: "AI Camera Scanner & Vision Assistant"
          },
          {
            name: "Target Platform",
            label: "Target Platform",
            options: ["iOS First (Human Interface Guidelines)", "iOS & Android Universal", "Android First (Material You)"],
            default: "iOS First (Human Interface Guidelines)"
          },
          {
            name: "Monetization Model",
            label: "Monetization Model",
            options: ["Freemium with 3-Day Free Trial", "Hard Onboarding Paywall", "Credit-Based In-App Purchases"],
            default: "Freemium with 3-Day Free Trial"
          }
        ],
        template: `You are an expert mobile product designer and React Native architect specializing in high-converting iOS and Android applications.

Please create a comprehensive UX architecture specification for a new mobile product:
- App Category: [App Category]
- Target Platform: [Target Platform]
- Monetization Model: [Monetization Model]

Please provide:
1. Thumb-Zone Screen Layout Strategy: Define header, content, and interactive action zones with safe area padding.
2. 4-Step Progressive Onboarding Flow: Step-by-step breakdown detailing screens, interactive inputs, and micro-copy.
3. Soft Permission Priming Protocol: Exact UI copy for custom bottom-sheet priming modals for Camera and Push Notifications.
4. Core Ergonomic Rules: 4 concrete constraints for minimum touch target sizes (in dp/pt), haptic cues, and gesture zones.`,
        expectedOutput: `### Mobile UX Architecture Specification

#### 1. Thumb-Zone Layout Matrix
- **Top Bar (0–15% Viewport):** Non-interactive status bar insets (\`SafeAreaView edges={['top']}\`), subtle category breadcrumb, and secondary profile/settings icon.
- **Content Canvas (15–60% Viewport):** Visual viewfinder, live AI streaming response text, card carousels, and chart visualizations.
- **Active Thumb Zone (60–100% Viewport):** Primary floating action button (FAB), bottom tab navigation bar, dynamic bottom-sheet drag handles, and thumb-accessible camera triggers. Minimum touch target: 48×48pt with 8pt visual padding.

#### 2. 4-Step Progressive Onboarding Flow
1. **Screen 1 (Hook & Agitation):** Animated preview showcasing before-and-after results with a prominent 'Get Started' button anchored to the bottom.
2. **Screen 2 (Personalization Quiz):** 3 quick single-tap choices ('What is your primary goal?') storing answers in local MMKV storage to personalize the AI model prompt.
3. **Screen 3 (Interactive Aha! Micro-Trial):** Immediate camera scan demo analyzing sample input in under 2 seconds without requiring an account.
4. **Screen 4 (Soft Value Paywall):** Visual recap of user quiz results paired with a 3-Day Free Trial toggle and clear restore purchase link.

#### 3. Soft Permission Priming Modal (Camera & Notifications)
- **Title:** "Enable Camera for Instant AI Object Recognition"
- **Body Copy:** "Our on-device vision model analyzes labels directly through your lens. Your photos are processed securely and never shared publicly."
- **Primary CTA:** "Allow Camera Access" (Triggers native \`Camera.requestCameraPermissionsAsync()\`)
- **Secondary Link:** "Not Now" (Dismisses modal cleanly, preserving native prompt for future feature trigger)`
      },
      conceptGuide: {
        title: "Ergonomic Mobile UX Architecture & Frictionless Onboarding",
        overview: "Mobile engineering demands a deep understanding of physical constraints, touch ergonomics, and operating system human interface guidelines. Unlike web browsers with expansive viewports and hover states, mobile screens are restricted to single-touch coordinates and varying screen notch insets. Successful apps prioritize one-handed thumb zones, use bottom sheets for contextual depth, and practice progressive disclosure—allowing users to experience core AI features before demanding account sign-ups or permission grants.",
        keyPoints: [
          "**Thumb-Zone Ergonomics:** Over 75% of one-handed smartphone use relies on the bottom third of the display; key buttons and navigation bars belong in this zone.",
          "**Soft Permission Priming:** iOS system permission dialogs can only be presented once per installation; custom in-app educational sheets protect this irrevocable trigger.",
          "**Progressive Value Disclosure:** Allowing users to test a core AI feature before prompting for account creation increases Day-1 user retention by over 40%."
        ]
      },
      learning: {
        resources: [
          {
            title: "Apple Human Interface Guidelines (Navigation & Ergonomics)",
            url: "https://developer.apple.com/design/human-interface-guidelines/",
            type: "Official Docs"
          },
          {
            title: "Mobbin Mobile Flow Directory",
            url: "https://mobbin.com",
            type: "Guide"
          },
          {
            title: "Material Design 3 Mobile Navigation Principles",
            url: "https://m3.material.io/components/navigation-bar/overview",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 2
    {
      id: "step-2",
      stepNumber: 2,
      phaseId: "phase-1",
      title: "Universal App Scaffolding with Expo & Expo Router",
      timeEstimate: "1.5 hrs",
      difficulty: "Beginner",
      summary: "Set up file-based routing (tabs, modals, dynamic stacks), deep linking schemas, and instant device previewing via Expo Go and Development Builds.",
      description: "Expo has evolved into the modern standard for React Native development. With Expo Router, routing is completely file-based—mirroring modern web frameworks like Next.js while compiling into native iOS UINavigationController and Android FragmentManager hierarchies. Developers configure deep linking schemas, typed routing parameters, and universal layout roots that provide silky-smooth 60fps native transitions across both platforms.",
      playbook: {
        setup: "Initialize a new Expo SDK 52+ application with TypeScript using `npx create-expo-app@latest my-ai-app --template tabs`. Open the project in Cursor and inspect `app.json` and the root layout.",
        execute: "Scaffold the file-based route hierarchy inside the `app/` directory: root layout `(app)/_layout.tsx`, bottom tab navigation `(tabs)/_layout.tsx`, dynamic screen `(tabs)/chat/[id].tsx`, and modal presentation `<Stack.Screen options={{ presentation: 'modal' }} />`. Register custom URL schemes (`my-ai-app://`) in `app.json`.",
        verify: "Run `npx expo start` and connect an iOS device running Expo Go. Test deep linking via terminal: `npx uri-scheme open \"my-ai-app://chat/test-123\" --ios` and verify that the app routes to the exact chat screen."
      },
      tools: [
        {
          name: "Expo",
          type: "Free",
          url: "https://expo.dev",
          description: "Universal open-source framework for building native iOS, Android, and web apps with React Native, file-based routing, and native SDKs.",
          bestFor: "Universal app architecture, native modules & cross-platform builds"
        },
        {
          name: "Cursor",
          type: "Freemium",
          url: "https://www.cursor.com",
          description: "AI-native code editor with codebase indexing and multi-file Composer edits for scaffolding React Native components.",
          bestFor: "Scaffolding typed React Native screens & navigation configs"
        },
        {
          name: "TypeScript",
          type: "Free",
          url: "https://www.typescriptlang.org",
          description: "Statically typed superset of JavaScript providing compile-time type safety for Expo Router typed routes and navigation params.",
          bestFor: "Type-safe navigation parameters & screen props"
        }
      ],
      callouts: {
        mistake: "Using legacy imperative React Navigation dispatchers instead of Expo Router file-based nested layout systems, causing broken back-button transitions.",
        proTip: "Enable `typedRoutes` in `app.json` to get automatic compile-time validation for all `router.push('/chat/[id]')` parameters.",
        mistakes: [
          "Relying on deprecated imperative navigation state containers rather than leveraging Expo Router's declarative URL-driven file structure.",
          "Neglecting to configure custom URL schemes and universal linking early, breaking OAuth authentication redirects and push notification deep links.",
          "Checking build artifacts and local development certificates into Git repositories instead of using an updated `.gitignore` template."
        ],
        proTips: [
          "Switch from Expo Go to Expo Development Builds (`npx expo run:ios`) early in development to test custom C++ or native third-party modules safely.",
          "Wrap modal presentations in `<SafeAreaView edges={['bottom']}>` to prevent UI controls from colliding with the native iOS home indicator bar.",
          "Use the `useLocalSearchParams<{ id: string }>()` hook for type-safe parameter extraction across dynamic screen routes."
        ]
      },
      promptLab: {
        title: "Expo Router File-Based Architecture Generator",
        description: "Scaffold a complete Expo Router file tree with root layout, nested tabs, dynamic detail screens, and typed deep-linking configuration.",
        variables: [
          {
            name: "Navigation Pattern",
            label: "Navigation Pattern",
            options: ["Bottom Tabs with Modal Sheets", "Stack Navigation with Drawer Menu", "Hybrid Tabs with Nested Modal Stacks"],
            default: "Bottom Tabs with Modal Sheets"
          },
          {
            name: "Platform Scope",
            label: "Platform Scope",
            options: ["iOS & Android Native Only", "Universal Web + Native App", "iOS Optimized First"],
            default: "iOS & Android Native Only"
          },
          {
            name: "Deep Linking Scheme",
            label: "Deep Linking Scheme",
            options: ["Custom URL Scheme (my-ai-app://)", "Universal Links (https://app.domain.com)", "Both Scheme & Universal Links"],
            default: "Both Scheme & Universal Links"
          }
        ],
        template: `You are a staff mobile engineer specializing in Expo and React Native architecture.

Generate a complete production project architecture for an Expo SDK 52+ application:
- Navigation Pattern: [Navigation Pattern]
- Platform Scope: [Platform Scope]
- Deep Linking Scheme: [Deep Linking Scheme]

Please output:
1. Complete Directory Tree: The exact \`app/\` folder structure reflecting the chosen navigation layout.
2. Root Layout Code: Complete code for \`app/_layout.tsx\` configuring fonts, safe areas, and root \`<Stack>\`.
3. Tab Layout Code: Complete code for \`app/(tabs)/_layout.tsx\` with customized icon tabs and active tint colors.
4. \`app.json\` Deep Linking Config: Snippet configuring scheme, bundle identifiers, and typed routes.`,
        expectedOutput: `### Expo Router Universal Architecture

#### 1. File Structure
\`\`\`text
my-ai-app/
├── app/
│   ├── _layout.tsx               # Root Stack with ThemeProvider & AuthProvider
│   ├── (auth)/
│   │   ├── sign-in.tsx           # Social & Apple Sign-In screen
│   │   └── onboarding.tsx        # Initial onboarding flow
│   ├── (tabs)/
│   │   ├── _layout.tsx           # Native Bottom Tab navigator
│   │   ├── index.tsx             # Home AI feed screen
│   │   ├── scan.tsx              # Camera vision trigger
│   │   └── history.tsx           # Offline saved records
│   ├── chat/
│   │   └── [id].tsx              # Dynamic streaming conversation screen
│   └── modal/
│       └── paywall.tsx           # Premium subscription bottom sheet
├── app.json
└── tailwind.config.js
\`\`\`

#### 2. Root Layout (\`app/_layout.tsx\`)
\`\`\`tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen 
          name="modal/paywall" 
          options={{ 
            presentation: 'modal',
            headerShown: false,
            gestureEnabled: true
          }} 
        />
        <Stack.Screen 
          name="chat/[id]" 
          options={{ 
            headerShown: true,
            headerBackTitle: 'Back'
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}
\`\`\`

#### 3. Deep Linking Configuration in \`app.json\`
\`\`\`json
{
  "expo": {
    "name": "AI Mobile Studio",
    "slug": "ai-mobile-studio",
    "scheme": "my-ai-app",
    "experiments": {
      "typedRoutes": true
    },
    "ios": {
      "bundleIdentifier": "com.company.aimobilestudio",
      "associatedDomains": ["applinks:app.yourdomain.com"]
    },
    "android": {
      "package": "com.company.aimobilestudio"
    }
  }
}
\`\`\``
      },
      conceptGuide: {
        title: "File-Based Routing & Universal Layout Architecture",
        overview: "Expo Router bridges the mental model of modern web frameworks to native mobile operating systems. By compiling file hierarchies directly into native iOS UINavigationController and Android Activity stacks, Expo Router eliminates cumbersome imperative navigation state machines. Every screen maps to a deterministic URL string, meaning deep links from push notifications, marketing links, or NFC tags execute through the exact same code path as internal button clicks.",
        keyPoints: [
          "**Native Platform Primitives:** Expo Router maps directory structures directly to native view controllers, guaranteeing 60fps push/pop slide animations.",
          "**Typed Routes & Deep Links:** URL-based paths provide uniform navigation across push notifications, web URLs, and in-app buttons without boilerplate.",
          "**Development Builds vs. Expo Go:** Custom native development clients allow arbitrary C++ and Swift native modules while retaining instant hot reloading."
        ]
      },
      learning: {
        resources: [
          {
            title: "Expo Router Official Documentation",
            url: "https://docs.expo.dev/router/introduction/",
            type: "Official Docs"
          },
          {
            title: "React Native Getting Started Guide",
            url: "https://reactnative.dev/docs/getting-started",
            type: "Guide"
          },
          {
            title: "Expo Development Client Architecture",
            url: "https://docs.expo.dev/develop/development-builds/introduction/",
            type: "Mobile SDK"
          }
        ]
      }
    },

    // Node 3
    {
      id: "step-3",
      stepNumber: 3,
      phaseId: "phase-1",
      title: "Cross-Platform Styling & Native Component Primitives",
      timeEstimate: "1 hr",
      difficulty: "Beginner",
      summary: "Write Tailwind-style utility classes that compile to native iOS and Android views with crisp dark mode support.",
      description: "Writing maintainable styles in React Native historically required cumbersome StyleSheet objects and manual responsive calculations. With NativeWind v4, developers write standard Tailwind CSS utility classes that compile ahead-of-time directly into native Facebook Yoga layout flexbox styles. Paired with unstyled, accessible component primitives like React Native Reusables, mobile teams build consistent design systems with instant dark-mode adaptation.",
      playbook: {
        setup: "Install NativeWind v4 and Tailwind CSS: `npm install nativewind tailwindcss react-native-reanimated`. Update `tailwind.config.js` with project content paths and configure Babel plugins.",
        execute: "Build a core design system of reusable primitives: `Button`, `Card`, `Input`, and `Typography`. Use utility classes (`className=\"bg-zinc-900 text-white rounded-2xl p-4 active:scale-95 transition-all\"`) that automatically map to native view properties. Implement dark mode switching using system preferences.",
        verify: "Toggle iOS Simulator dark mode (`Cmd + Shift + A`) and verify that all `dark:` utility classes update instantly without layout reflows or color flash glitches."
      },
      tools: [
        {
          name: "NativeWind",
          type: "Free",
          url: "https://www.nativewind.dev",
          description: "Tailwind CSS compiler for React Native that transforms utility classes into high-performance native StyleSheet properties.",
          bestFor: "Tailwind CSS styling on native iOS & Android views"
        },
        {
          name: "Tamagui",
          type: "Free",
          url: "https://tamagui.dev",
          description: "Universal styling system and component suite for React Native and Web featuring zero-runtime CSS compilation and typed tokens.",
          bestFor: "High-performance universal UI tokens & animations"
        },
        {
          name: "React Native Reusables",
          type: "Free",
          url: "https://react-native-reusables.vercel.app",
          description: "Universal port of shadcn/ui primitives tailored specifically for React Native and NativeWind with built-in accessibility.",
          bestFor: "Copy-paste accessible native component primitives"
        }
      ],
      callouts: {
        mistake: "Using inline CSS-like style objects inside render loops (`style={{ padding: 16 }}`), triggering expensive GC sweeps and JS thread frame drops.",
        proTip: "Always use `useSafeAreaInsets` from `react-native-safe-area-context` to dynamically pad views around notches and the home indicator.",
        mistakes: [
          "Allocating new inline style objects inside render loops, triggering unnecessary garbage collection cycles and frame drops during scrolling.",
          "Failing to account for dynamic safe area insets on iPhone Dynamic Island and Android edge-to-edge displays, causing content clipping.",
          "Assuming web CSS properties like `display: grid` or float properties exist in the React Native Yoga flexbox engine."
        ],
        proTips: [
          "Add `active:opacity-80 active:scale-[0.98]` classes on touchable buttons to give users instantaneous native tactile feedback.",
          "Use React Native Reusables to get pre-built accessible primitives with ARIA accessibility roles mapped to native VoiceOver and TalkBack.",
          "Structure layout containers with `flex-1` and explicit `gap-y-4` utilities to maintain clean, scalable vertical spacing."
        ]
      },
      promptLab: {
        title: "NativeWind Component System & Token Generator",
        description: "Generate a production-ready React Native component library using NativeWind v4, accessible primitives, and system dark-mode switching.",
        variables: [
          {
            name: "Component Type",
            label: "Component Type",
            options: ["Interactive Action Button", "Glassmorphic AI Response Card", "Floating Bottom Input Bar with Mic"],
            default: "Interactive Action Button"
          },
          {
            name: "Design Token Palette",
            label: "Design Token Palette",
            options: ["Zinc Neutral (Dark Canvas / Crisp Slate)", "Midnight Navy (Deep Sapphire)", "Minimal Monochrome"],
            default: "Zinc Neutral (Dark Canvas / Crisp Slate)"
          },
          {
            name: "Haptic Integration",
            label: "Haptic Integration",
            options: ["Light Impact on Press", "Selection Tick on Release", "None"],
            default: "Light Impact on Press"
          }
        ],
        template: `You are a design systems engineer specializing in React Native and NativeWind v4.

Generate a production-grade component:
- Component Type: [Component Type]
- Design Token Palette: [Design Token Palette]
- Haptic Integration: [Haptic Integration]

Requirements:
1. Complete TypeScript Component Code: Written using \`nativewind\` utility classes with support for light and dark modes.
2. Touch Feedback & Accessibility: Smooth press states (\`active:scale-[0.98]\`), accessibility labels, and haptic feedback triggers.
3. Props Interface: Extends standard \`TouchableOpacityProps\` or \`ViewProps\` with variant tokens (primary, secondary, outline).`,
        expectedOutput: `### NativeWind Production Component

\`\`\`tsx
import React from 'react';
import { Text, Pressable, PressableProps, ActivityIndicator } from 'react-native';
import * as Haptics from 'expo-haptics';

interface PrimaryButtonProps extends PressableProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  variant = 'primary',
  isLoading = false,
  onPress,
  disabled,
  ...props
}) => {
  const handlePress = (e: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onPress) onPress(e);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-zinc-800 dark:bg-zinc-800 border-zinc-700 text-zinc-100';
      case 'outline':
        return 'bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100';
      default:
        return 'bg-blue-600 dark:bg-blue-500 border-transparent text-white';
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || isLoading}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: !!disabled, busy: isLoading }}
      className={\`flex-row items-center justify-center px-6 py-3.5 rounded-2xl active:scale-[0.97] transition-all \${getVariantStyles()} \${
        disabled ? 'opacity-50' : 'opacity-100'
      }\`}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="#ffffff" size="small" />
      ) : (
        <Text className="font-semibold text-base tracking-tight text-white dark:text-zinc-100">
          {label}
        </Text>
      )}
    </Pressable>
  );
};
\`\`\``
      },
      conceptGuide: {
        title: "Native Yoga Layout Engine & Modern Cross-Platform Styling",
        overview: "React Native does not use a browser DOM or CSS engine. Instead, layout calculations are evaluated by Meta's C++ Yoga flexbox engine, which translates directional flex attributes into native UIKit constraints on iOS and ViewGroup measurements on Android. NativeWind pre-compiles Tailwind utility strings into native StyleSheet references, completely removing runtime CSS-in-JS calculation overhead.",
        keyPoints: [
          "**Compile-Time Styling:** NativeWind pre-computes atomic styles into native StyleSheets, avoiding runtime CSS-in-JS parsing overhead.",
          "**Yoga Flexbox Constraints:** Native layout defaults to `flexDirection: column` with zero support for CSS grid; mastering flex direction and safe areas is essential.",
          "**Adaptive Safe Area Insets:** Dynamic Island and home indicator bars require reactive padding insets to prevent awkward content clipping."
        ]
      },
      learning: {
        resources: [
          {
            title: "NativeWind Official Documentation",
            url: "https://www.nativewind.dev/docs/getting-started",
            type: "Official Docs"
          },
          {
            title: "React Native Layout with Flexbox",
            url: "https://reactnative.dev/docs/flexbox",
            type: "Guide"
          },
          {
            title: "React Native Reusables Component Library",
            url: "https://react-native-reusables.vercel.app",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 4
    {
      id: "step-4",
      stepNumber: 4,
      phaseId: "phase-1",
      title: "60FPS Gestures, Spring Animations & Tactile Haptics",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Run gesture-driven swipe animations on the UI thread and pair key actions with subtle native haptic feedback.",
      description: "Subtle micro-animations and physical haptic feedback are the hallmarks of a tier-1 native application. By using React Native Reanimated v3 and React Native Gesture Handler, animations execute entirely on the C++ UI thread via JavaScript worklets—completely decoupled from JavaScript thread congestion. Pairing gesture snap thresholds with calibrated native haptics creates a tactile, responsive user experience that rivals Apple's first-party iOS apps.",
      playbook: {
        setup: "Install animation and haptics libraries: `npx expo install react-native-reanimated react-native-gesture-handler expo-haptics lottie-react-native`. Wrap the application root in `<GestureHandlerRootView>`.",
        execute: "Implement a dismissible bottom sheet or swipeable card component using `Gesture.Pan()`, `useSharedValue`, and `useAnimatedStyle`. Drive physics using `withSpring` with realistic damping and stiffness parameters. Fire `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)` whenever the card snaps into position.",
        verify: "Enable the React Native Performance Monitor (`Cmd + D` -> Show Perf Monitor). Perform rapid swipe gestures and confirm the UI thread maintains a rock-solid 60 FPS (or 120 FPS on ProMotion devices) with zero JS thread stalls."
      },
      tools: [
        {
          name: "React Native Reanimated",
          type: "Free",
          url: "https://docs.swmansion.com/react-native-reanimated/",
          description: "High-performance animation library running gesture and spring calculations directly on the native UI thread via worklets.",
          bestFor: "60fps gestures, shared values & spring animations"
        },
        {
          name: "Expo Haptics",
          type: "Free",
          url: "https://docs.expo.dev/versions/latest/sdk/haptics/",
          description: "Native tactile feedback SDK interfacing directly with Apple Taptic Engine and Android haptic vibrator motors.",
          bestFor: "Native haptic feedback for buttons, toggles & snap points"
        },
        {
          name: "LottieFiles",
          type: "Freemium",
          url: "https://lottiefiles.com",
          description: "Lightweight JSON-based animation renderer for playing complex vector loading spinners, confetti celebrations, and AI wave animations.",
          bestFor: "Vector animations & AI thinking indicators"
        }
      ],
      callouts: {
        mistake: "Executing heavy `setState` operations inside high-frequency gesture `onUpdate` callbacks, causing animations to stutter as the JS thread locks up.",
        proTip: "Use `withSpring` with `{ damping: 15, stiffness: 120 }` for that signature Apple bouncy fluidity on modal presentations and card expansions.",
        mistakes: [
          "Calling React state updates directly inside gesture movement callbacks, blocking the JavaScript bridge and causing visible animation stutter.",
          "Overusing heavy notification haptic bursts on everyday interactions, draining device battery and fatiguing the user.",
          "Using linear or ease-in-out timing curves for gesture releases instead of physics-based spring simulations that preserve user touch velocity."
        ],
        proTips: [
          "Always run gesture calculations inside Reanimated worklets (`'worklet'`) to ensure calculations execute directly on the C++ UI thread.",
          "Trigger `Haptics.selectionAsync()` during carousel snapping and picker scrolling to recreate the physical iOS tactile click feel.",
          "Pass user gesture velocity (\`event.velocityY\`) into \`withSpring({ velocity: event.velocityY })\` for seamless momentum preservation."
        ]
      },
      promptLab: {
        title: "Reanimated Swipe Gesture & Spring Physics Generator",
        description: "Generate a production-ready gesture-driven swipeable card or bottom-sheet component running on the UI thread with spring physics and haptics.",
        variables: [
          {
            name: "Interactive Component",
            label: "Interactive Component",
            options: ["Dismissible Bottom Sheet Drawer", "Swipeable Card Deck (Tinder-Style)", "Pull-Down-to-Refresh AI Summary"],
            default: "Dismissible Bottom Sheet Drawer"
          },
          {
            name: "Spring Physics Feel",
            label: "Spring Physics Feel",
            options: ["Bouncy Apple Spring (Damping: 14, Stiffness: 110)", "Snappy Minimalist (Damping: 20, Stiffness: 160)", "Gentle Float (Damping: 12, Stiffness: 80)"],
            default: "Bouncy Apple Spring (Damping: 14, Stiffness: 110)"
          },
          {
            name: "Haptic Profile",
            label: "Haptic Profile",
            options: ["Light Impact on Snap Points", "Medium Impact on Threshold Cross", "Selection Click on Drag"],
            default: "Light Impact on Snap Points"
          }
        ],
        template: `You are an expert React Native animation engineer specializing in React Native Reanimated v3 and Gesture Handler.

Generate a complete production component:
- Interactive Component: [Interactive Component]
- Spring Physics Feel: [Spring Physics Feel]
- Haptic Profile: [Haptic Profile]

Please provide:
1. Full TypeScript Component Implementation: Using \`Gesture.Pan()\`, \`useSharedValue\`, \`useAnimatedStyle\`, and \`withSpring\`.
2. Worklet Architecture: Proper \`'worklet'\` execution ensuring zero JS thread bridge crossings.
3. Haptic Integration: Clean \`expo-haptics\` triggers at critical snap thresholds.`,
        expectedOutput: `### Reanimated 60FPS Native Bottom Sheet

\`\`\`tsx
import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS
} from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT * 0.7;

export const NativeBottomSheet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const triggerHaptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = Math.max(context.value.y + event.translationY, MAX_TRANSLATE_Y);
    })
    .onEnd((event) => {
      if (translateY.value > -SCREEN_HEIGHT * 0.35) {
        translateY.value = withSpring(0, { damping: 14, stiffness: 110 });
        runOnJS(triggerHaptic)();
      } else {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { 
          damping: 14, 
          stiffness: 110,
          velocity: event.velocityY 
        });
        runOnJS(triggerHaptic)();
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[animatedStyle]}
        className="absolute bottom-[-70%] left-0 right-0 h-[70%] bg-zinc-900 border-t border-zinc-800 rounded-t-3xl p-6 shadow-2xl"
      >
        <View className="w-12 h-1.5 bg-zinc-700 rounded-full self-center mb-6" />
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
\`\`\``
      },
      conceptGuide: {
        title: "Native UI Thread Worklets & Ergonomic Tactile Feedback",
        overview: "Traditional React Native animations bridged serializable state values between the JavaScript thread and the native UI thread, resulting in dropped frames whenever JavaScript was busy parsing data or rendering screens. React Native Reanimated compiles JavaScript functions into native C++ worklets that run synchronously on the UI thread at the device's native refresh rate (60Hz or 120Hz ProMotion).",
        keyPoints: [
          "**Reanimated Worklets:** Small JavaScript functions compiled to execute synchronously on the native UI thread, bypassing JavaScript bridge bottlenecks.",
          "**Physics-Based Spring Curves:** Real-world velocity and momentum preservation creates realistic interactive responsiveness compared to timed cubic-bezier curves.",
          "**Tactile Haptic Signaling:** Physical micro-vibrations reinforce successful actions (snaps, switches, AI completions), creating perceived speed and premium quality."
        ]
      },
      learning: {
        resources: [
          {
            title: "Software Mansion Reanimated Documentation",
            url: "https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/",
            type: "Official Docs"
          },
          {
            title: "Expo Haptics API Reference",
            url: "https://docs.expo.dev/versions/latest/sdk/haptics/",
            type: "Mobile SDK"
          },
          {
            title: "Apple Taptic Engine Design Guidelines",
            url: "https://developer.apple.com/design/human-interface-guidelines/playing-haptics",
            type: "Guide"
          }
        ]
      }
    },

    // Node 5
    {
      id: "step-5",
      stepNumber: 5,
      phaseId: "phase-2",
      title: "Native Authentication (Sign in with Apple, Google & FaceID)",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Implement mandatory Apple Sign-In for iOS compliance, OAuth redirects, and biometric FaceID/TouchID session locks.",
      description: "Authentication in mobile applications carries unique compliance and security mandates. Apple App Store Review Guideline 4.8 strictly requires that any app offering third-party social logins (like Google) must also provide Sign in with Apple with equal prominence. Furthermore, storing authentication tokens requires hardware-backed encryption via the iOS Keychain, while biometric gating (FaceID / TouchID) protects sensitive user conversations upon app resume.",
      playbook: {
        setup: "Install authentication and keychain packages: `npx expo install expo-apple-authentication @react-native-google-signin/google-signin expo-secure-store expo-local-authentication`. Configure Apple Developer capability for Sign in with Apple.",
        execute: "Implement the official Apple Sign-In button component (`<AppleAuthentication.AppleAuthenticationButton />`). Exchange the identity token with your backend (Supabase Auth or Clerk). Store session JWTs in encrypted storage using `expo-secure-store`. Add a biometric FaceID challenge modal when the app transitions back to the active foreground state.",
        verify: "Test the Apple Sign-In flow on a physical iOS device. Lock the phone, reopen the app, and verify that the FaceID modal prompts automatically before sensitive user data appears on screen."
      },
      tools: [
        {
          name: "Supabase Auth",
          type: "Freemium",
          url: "https://supabase.com",
          description: "Open-source backend offering native Sign in with Apple token verification, Google OAuth, and secure session management.",
          bestFor: "Backend authentication & Row-Level Security identity sync"
        },
        {
          name: "Clerk Expo",
          type: "Freemium",
          url: "https://clerk.com/docs/quickstarts/expo",
          description: "Turnkey mobile authentication suite providing drop-in Sign in with Apple, Google, session tokens, and secure token caching.",
          bestFor: "Turnkey multi-provider mobile authentication"
        },
        {
          name: "Expo LocalAuthentication",
          type: "Free",
          url: "https://docs.expo.dev/versions/latest/sdk/local-authentication/",
          description: "Cross-platform hardware biometric SDK checking FaceID, TouchID, and Android BiometricPrompt security.",
          bestFor: "FaceID and biometric app session security locks"
        }
      ],
      callouts: {
        mistake: "Submitting an iOS app with Google Sign-In without offering Sign in with Apple—Apple App Store review will reject it immediately under Guideline 4.8.",
        proTip: "Store user auth tokens in `expo-secure-store` using `WHEN_UNLOCKED_THIS_DEVICE_ONLY` so credentials remain encrypted inside the device Secure Enclave.",
        mistakes: [
          "Failing to provide Sign in with Apple when Google or third-party auth is offered, resulting in immediate App Store rejection under Guideline 4.8.",
          "Storing user auth tokens in unencrypted `AsyncStorage` rather than hardware-backed `expo-secure-store` (iOS Keychain).",
          "Neglecting to handle user credential revocation when a user revokes Apple ID authorization inside their iOS system settings."
        ],
        proTips: [
          "Check biometric hardware availability with `LocalAuthentication.hasHardwareAsync()` on app startup to prevent UI latency.",
          "Use Apple's native button style (`AppleAuthenticationButtonType.SIGN_IN`) to adhere to strict Apple Human Interface typography rules.",
          "Cache the biometric authentication state in memory during active foreground use so users are not prompted on every internal tab switch."
        ]
      },
      promptLab: {
        title: "Sign in with Apple & FaceID Lock Screen Generator",
        description: "Generate a complete native authentication implementation with Sign in with Apple, SecureStore token caching, and FaceID session gating.",
        variables: [
          {
            name: "Auth Provider",
            label: "Auth Provider",
            options: ["Supabase Auth Backend", "Clerk Expo SDK", "Custom JWT Node.js Backend"],
            default: "Supabase Auth Backend"
          },
          {
            name: "Biometric Security Policy",
            label: "Biometric Security Policy",
            options: ["FaceID Required on Every Cold Start & Resume", "Optional Biometric Toggle in Settings", "Biometric Challenge for Premium Actions Only"],
            default: "FaceID Required on Every Cold Start & Resume"
          },
          {
            name: "Storage Engine",
            label: "Storage Engine",
            options: ["Expo SecureStore (iOS Keychain)", "MMKV with AES-256 Encryption"],
            default: "Expo SecureStore (iOS Keychain)"
          }
        ],
        template: `You are a mobile security engineer specializing in React Native and iOS App Store compliance.

Generate an end-to-end authentication module:
- Auth Provider: [Auth Provider]
- Biometric Security Policy: [Biometric Security Policy]
- Storage Engine: [Storage Engine]

Please output:
1. Native Apple Authentication Handler: Complete code using \`expo-apple-authentication\` and exchanging credentials with the auth backend.
2. Secure Token Storage Helper: Methods to store, retrieve, and delete session tokens in hardware keychain.
3. AppState Biometric Lock Hook: A custom React hook (\`useBiometricLock\`) that triggers FaceID when the app returns from background.`,
        expectedOutput: `### Native Apple Auth & Biometric Gating

#### 1. Apple Sign-In & Supabase Token Exchange
\`\`\`tsx
import React from 'react';
import { View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as SecureStore from 'expo-secure-store';
import { supabase } from '../lib/supabase';

export const AppleSignInButton: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential.identityToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'apple',
          token: credential.identityToken,
        });

        if (error) throw error;
        
        // Persist in iOS Keychain
        if (data.session) {
          await SecureStore.setItemAsync(
            'supabase_session',
            JSON.stringify(data.session),
            { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY }
          );
          onSuccess();
        }
      }
    } catch (e: any) {
      if (e.code !== 'ERR_REQUEST_CANCELED') {
        console.error('Apple Sign-In failed:', e);
      }
    }
  };

  return (
    <View className="w-full my-2">
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={16}
        style={{ width: '100%', height: 50 }}
        onPress={handleAppleSignIn}
      />
    </View>
  );
};
\`\`\`

#### 2. Biometric Session Lock Hook (\`useBiometricLock.ts\`)
\`\`\`tsx
import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export const useBiometricLock = () => {
  const appState = useRef(AppState.currentState);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextState: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && nextState === 'active') {
        // App resumed from background -> challenge FaceID
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (hasHardware && isEnrolled) {
          setIsLocked(true);
          const result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Unlock with FaceID to access your AI chats',
            fallbackLabel: 'Use Device Passcode',
          });

          if (result.success) {
            setIsLocked(false);
          }
        }
      }
      appState.current = nextState;
    });

    return () => subscription.remove();
  }, []);

  return { isLocked };
};
\`\`\``
      },
      conceptGuide: {
        title: "Native Mobile Biometrics & App Store Compliant Identity",
        overview: "Mobile security relies on defense-in-depth architecture. Unlike web browsers relying on HTTP-only cookies, native apps must store cryptographic refresh tokens directly in platform keystores (iOS Keychain and Android Keystore) backed by hardware Secure Enclaves. Meeting Apple's Guideline 4.8 guarantees that apps respect user privacy, while local biometric gating prevents unauthorized physical device access.",
        keyPoints: [
          "**App Store Guideline 4.8:** Apple requires its own authentication button whenever any social or federated identity provider is implemented.",
          "**Hardware-Backed Keystore:** `expo-secure-store` encrypts sensitive credentials using the device Secure Enclave, resisting memory dump attacks.",
          "**Local Biometric Gating:** FaceID and fingerprint scans provide friction-free re-authentication without roundtripping to external auth servers."
        ]
      },
      learning: {
        resources: [
          {
            title: "Apple Authentication SDK Documentation",
            url: "https://docs.expo.dev/versions/latest/sdk/apple-authentication/",
            type: "Official Docs"
          },
          {
            title: "Expo LocalAuthentication Reference",
            url: "https://docs.expo.dev/versions/latest/sdk/local-authentication/",
            type: "Mobile SDK"
          },
          {
            title: "Supabase React Native Auth Deep Dive",
            url: "https://supabase.com/docs/guides/auth/quickstarts/react-native",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 6
    {
      id: "step-6",
      stepNumber: 6,
      phaseId: "phase-2",
      title: "Offline-First Local Storage & Optimistic Cloud Sync",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Persist app state locally at C++ speeds so the app opens instantaneously on airplane mode and syncs when connectivity returns.",
      description: "Mobile network connections are fundamentally volatile—smartphones move through subway tunnels, elevators, and weak cellular dead zones. Top-tier mobile apps adopt an offline-first architecture. Using MMKV (a C++ memory-mapped key-value engine that operates 30x faster than legacy AsyncStorage) combined with TanStack Query optimistic updates, the application paints data instantly in 0ms on cold launch and silently queues outbound actions until internet returns.",
      playbook: {
        setup: "Install high-performance local storage: `npm install react-native-mmkv @tanstack/react-query @tanstack/react-query-persist-client`. Configure MMKV as the synchronous query persistence engine.",
        execute: "Set up TanStack Query with optimistic mutation handlers: when a user sends an AI prompt or saves a note, append the item to the local MMKV store immediately via `onMutate`. Queue background network synchronization with automatic exponential retry backoff.",
        verify: "Turn on Airplane Mode on your mobile device. Launch the app and verify all historical chat records render immediately in 0ms. Send a new message, disable Airplane Mode, and verify that the sync queue flushes seamlessly to the server."
      },
      tools: [
        {
          name: "MMKV",
          type: "Free",
          url: "https://github.com/mrousavy/react-native-mmkv",
          description: "Ultra-fast C++ key-value storage engine utilizing memory-mapped files (mmap) for instantaneous synchronous data reads and writes.",
          bestFor: "Zero-latency synchronous key-value caching & settings"
        },
        {
          name: "TanStack Query",
          type: "Free",
          url: "https://tanstack.com/query/latest",
          description: "Asynchronous state management engine with built-in cache persistence, optimistic UI updates, and offline sync queues.",
          bestFor: "Offline query caching & optimistic UI mutations"
        },
        {
          name: "PowerSync",
          type: "Freemium",
          url: "https://www.powersync.com",
          description: "Offline-first sync engine replicating Postgres databases to local SQLite databases on iOS and Android devices.",
          bestFor: "Real-time relational database offline replication"
        }
      ],
      callouts: {
        mistake: "Using legacy `AsyncStorage` for heavy state; its asynchronous JSON serialization across the JS bridge creates noticeable initial render lag.",
        proTip: "Configure TanStack Query's `networkMode: 'offlineFirst'` so queries return cached snapshots immediately when offline without throwing unhandled network errors.",
        mistakes: [
          "Relying on deprecated asynchronous `AsyncStorage` for UI state, introducing 200–500ms white screen delays on initial cold launches.",
          "Rendering full-screen loading spinners on app launch instead of displaying stale local cache snapshots while validating in the background.",
          "Lacking an offline mutation queue, causing user actions initiated during subway rides or bad signal to fail silently."
        ],
        proTips: [
          "MMKV reads values synchronously in microseconds by mapping files directly into memory (`mmap`), eliminating asynchronous bridge overhead.",
          "Implement optimistic UI updates for chat messages: append the user message to the active conversation immediately before dispatching the network request.",
          "Persist the entire TanStack Query client cache into MMKV using `@tanstack/react-query-persist-client` for seamless cold boot state restoration."
        ]
      },
      promptLab: {
        title: "MMKV Synchronous Cache & Optimistic Mutation Pipeline",
        description: "Scaffold an offline-first storage architecture utilizing MMKV and TanStack Query with optimistic updates and automatic network recovery.",
        variables: [
          {
            name: "Storage Pattern",
            label: "Storage Pattern",
            options: ["MMKV Key-Value with TanStack Query Persist", "Local SQLite with PowerSync Postgres Replication", "WatermelonDB Reactive Offline Store"],
            default: "MMKV Key-Value with TanStack Query Persist"
          },
          {
            name: "Data Type Cached",
            label: "Data Type Cached",
            options: ["AI Chat Messages & Thread History", "Camera Scans & Document OCR Records", "User Profile & App Configuration"],
            default: "AI Chat Messages & Thread History"
          },
          {
            name: "Sync Conflict Strategy",
            label: "Sync Conflict Strategy",
            options: ["Last-Write-Wins with Client Timestamp", "Server Authoritative Reconciliation", "Manual Conflict Flagging"],
            default: "Last-Write-Wins with Client Timestamp"
          }
        ],
        template: `You are a mobile infrastructure engineer specializing in offline-first architecture for React Native.

Generate a complete offline-first storage and sync layer:
- Storage Pattern: [Storage Pattern]
- Data Type Cached: [Data Type Cached]
- Sync Conflict Strategy: [Sync Conflict Strategy]

Please provide:
1. MMKV Storage Wrapper: Typed utility for storing, retrieving, and serializing cached collections synchronously.
2. Query Client Persister: Integration with \`createSyncStoragePersister\` and \`PersistQueryClientProvider\`.
3. Optimistic Mutation Hook: Complete code for \`useSendAIMessage\` with \`onMutate\`, \`onError\` rollback, and cache invalidation.`,
        expectedOutput: `### Offline-First MMKV & TanStack Query Pipeline

#### 1. MMKV Synchronous Storage Client (\`lib/storage.ts\`)
\`\`\`ts
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'ai-app-storage',
  encryptionKey: 'secure-client-encryption-key'
});

export const mmkvStorage = {
  setItem: (key: string, value: string) => storage.set(key, value),
  getItem: (key: string) => storage.getString(key) ?? null,
  removeItem: (key: string) => storage.delete(key),
};
\`\`\`

#### 2. Optimistic Mutation Hook (\`hooks/useSendMessage.ts\`)
\`\`\`tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../lib/api';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

export const useSendMessage = (threadId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newContent: string) => api.postMessage(threadId, newContent),
    onMutate: async (newContent: string) => {
      // Cancel outgoing refetches so they don't overwrite optimistic update
      await queryClient.cancelQueries({ queryKey: ['messages', threadId] });

      // Snapshot the previous messages
      const previousMessages = queryClient.getQueryData<Message[]>(['messages', threadId]) || [];

      // Optimistically insert user message into cache immediately
      const optimisticMessage: Message = {
        id: 'temp-' + Date.now(),
        role: 'user',
        content: newContent,
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData<Message[]>(['messages', threadId], [
        ...previousMessages,
        optimisticMessage,
      ]);

      return { previousMessages };
    },
    onError: (err, newContent, context) => {
      // Rollback to previous state on network failure
      if (context?.previousMessages) {
        queryClient.setQueryData(['messages', threadId], context.previousMessages);
      }
    },
    onSettled: () => {
      // Sync with server when connection resolves
      queryClient.invalidateQueries({ queryKey: ['messages', threadId] });
    },
  });
};
\`\`\``
      },
      conceptGuide: {
        title: "High-Performance Memory-Mapped I/O & Optimistic Replication",
        overview: "Mobile devices cannot guarantee reliable connectivity. Traditional applications fail abruptly when network requests time out. Modern offline-first architecture leverages memory-mapped files (`mmap`) via Tencent's MMKV library. By bypassing the asynchronous React Native bridge, reads occur synchronously in nanoseconds, allowing apps to restore complete user workspaces before the first visual frame renders.",
        keyPoints: [
          "**Synchronous MMKV Reads:** By utilizing C++ memory-mapped files, MMKV reads values synchronously in microseconds without crossing the async bridge.",
          "**Perceived Zero-Latency:** Optimistic updates paint user actions onto the screen immediately, rolling back cleanly only if network requests fail.",
          "**Stale-While-Revalidate Caching:** Mobile screens should never show a blank white screen; always show cached snapshots while fetching fresh data in the background."
        ]
      },
      learning: {
        resources: [
          {
            title: "React Native MMKV GitHub Repository",
            url: "https://github.com/mrousavy/react-native-mmkv",
            type: "Official Docs"
          },
          {
            title: "TanStack Query Persistence Guide",
            url: "https://tanstack.com/query/latest/docs/framework/react/plugins/persistQueryClient",
            type: "Guide"
          },
          {
            title: "PowerSync Offline Architecture Overview",
            url: "https://docs.powersync.com",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 7
    {
      id: "step-7",
      stepNumber: 7,
      phaseId: "phase-2",
      title: "Native Camera, Microphone & Media Pipeline Integration",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Capture photos, scan barcodes, record voice memos, and compress media on-device before uploading to cloud APIs.",
      description: "AI mobile apps frequently intake unstructured real-world data—receipts, food photos, documents, and voice questions. Directly uploading uncompressed 48MP raw smartphone photos generates 15MB+ payloads that crash mobile connections and inflate cloud latency. High-performance mobile apps intercept media on-device: downsampling images to 1024px JPEG thumbnails using native hardware pipelines and recording compact mono 16kHz audio streams ideal for Whisper.",
      playbook: {
        setup: "Install Expo media hardware SDKs: `npx expo install expo-camera expo-audio expo-image-manipulator`. Configure required camera and audio permission descriptions (`NSCameraUsageDescription`, `NSMicrophoneUsageDescription`) in `app.json`.",
        execute: "Build a custom camera viewfinder with pinch-to-zoom and tap-to-focus. In the capture pipeline, run `ImageManipulator.manipulateAsync` to resize the image to a maximum dimension of 1024px with 0.8 JPEG compression on the native thread. For audio, configure 16kHz mono M4A recording presets.",
        verify: "Capture a photo using the front and rear cameras on a physical device. Confirm file size drops from 12MB raw down to under 300KB in under 150ms, and verify audio records in 16kHz without background distortion."
      },
      tools: [
        {
          name: "Expo Camera",
          type: "Free",
          url: "https://docs.expo.dev/versions/latest/sdk/camera/",
          description: "Universal camera SDK supporting live viewfinders, barcode scanning, flash control, and photo capture on iOS and Android.",
          bestFor: "Real-time camera viewfinders & high-res image capture"
        },
        {
          name: "Expo Audio",
          type: "Free",
          url: "https://docs.expo.dev/versions/latest/sdk/audio/",
          description: "Low-latency audio recording and playback SDK configured for voice memos, speech transcription, and sound playback.",
          bestFor: "Microphone audio recording for speech-to-text models"
        },
        {
          name: "Expo ImageManipulator",
          type: "Free",
          url: "https://docs.expo.dev/versions/latest/sdk/imagemanipulator/",
          description: "Hardware-accelerated native image processing library for resizing, cropping, rotating, and compressing images on-device.",
          bestFor: "On-device image downsampling & compression"
        }
      ],
      callouts: {
        mistake: "Uploading uncompressed 48MP camera photos directly to cloud AI endpoints, causing 10-second upload delays and massive mobile data consumption.",
        proTip: "Unmount the `<CameraView>` or pause preview when the screen loses navigation focus to prevent severe battery drain and device overheating.",
        mistakes: [
          "Uploading raw multi-megabyte camera photos over cellular networks instead of compressing images on-device before dispatch.",
          "Leaving active camera hardware sessions running in the background when the user switches tabs, draining device battery rapidly.",
          "Missing mandatory `NSCameraUsageDescription` strings in `app.json`, causing the app to crash instantly upon calling camera APIs on iOS."
        ],
        proTips: [
          "Resize images to 1024×1024px maximum dimension; LLM vision models downsample larger images anyway, so compressing saves 90% upload bandwidth.",
          "Bind camera lifecycle to navigation focus using React Navigation's `useIsFocused()` hook to pause the native hardware sensor when off-screen.",
          "Record audio in 16,000Hz mono WAV/M4A format for optimal Whisper speech-to-text accuracy while minimizing memory usage."
        ]
      },
      promptLab: {
        title: "On-Device Camera Capture & Image Compression Pipeline",
        description: "Scaffold an end-to-end camera capture component with pinch-to-zoom, tap-to-focus, and native hardware image compression for AI vision inputs.",
        variables: [
          {
            name: "Hardware Capture Mode",
            label: "Hardware Capture Mode",
            options: ["Document & Receipt Scanner", "Portrait Object Recognition", "Fast Barcode & QR Code Reader"],
            default: "Document & Receipt Scanner"
          },
          {
            name: "Compression Target",
            label: "Compression Target",
            options: ["1024px Max Dimension (JPEG 0.8 Quality)", "1600px High-Res OCR (JPEG 0.85 Quality)", "Lossless PNG Downsampled"],
            default: "1024px Max Dimension (JPEG 0.8 Quality)"
          },
          {
            name: "Audio Mode",
            label: "Audio Mode",
            options: ["16kHz Mono M4A (Whisper Optimized)", "44.1kHz Stereo High Fidelity", "None"],
            default: "16kHz Mono M4A (Whisper Optimized)"
          }
        ],
        template: `You are a mobile multimedia engineer specializing in React Native camera and hardware APIs.

Generate an end-to-end media capture and compression module:
- Hardware Capture Mode: [Hardware Capture Mode]
- Compression Target: [Compression Target]
- Audio Mode: [Audio Mode]

Please provide:
1. Native Camera Component: Using \`expo-camera\` (\`CameraView\`) with flash, focus, and capture buttons.
2. Image Compression Pipeline: Using \`expo-image-manipulator\` to resize, compress, and output base64/URI.
3. Lifecycle Optimization: Proper hook integration to pause/unmount camera when screen loses focus.`,
        expectedOutput: `### Optimized Camera Capture & Compression Pipeline

\`\`\`tsx
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import { useIsFocused } from '@react-navigation/native';

export const AIPhotoScanner: React.FC<{ onPhotoReady: (uri: string, base64: string) => void }> = ({
  onPhotoReady,
}) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [isProcessing, setIsProcessing] = useState(false);
  const cameraRef = useRef<CameraView>(null);
  const isFocused = useIsFocused();

  if (!permission) return <View className="flex-1 bg-black" />;

  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center p-6 bg-zinc-950">
        <Text className="text-white text-center text-lg mb-4">
          Camera access is required to scan documents with AI
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-blue-600 px-6 py-3 rounded-2xl active:scale-95"
        >
          <Text className="text-white font-semibold">Grant Camera Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePictureAndCompress = async () => {
    if (!cameraRef.current || isProcessing) return;
    setIsProcessing(true);

    try {
      // 1. Capture raw frame
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.9,
        skipProcessing: true,
      });

      if (photo?.uri) {
        // 2. Hardware downsample to 1024px max dimension
        const manipulated = await ImageManipulator.manipulateAsync(
          photo.uri,
          [{ resize: { width: 1024 } }],
          {
            compress: 0.8,
            format: ImageManipulator.SaveFormat.JPEG,
            base64: true,
          }
        );

        if (manipulated.base64) {
          onPhotoReady(manipulated.uri, manipulated.base64);
        }
      }
    } catch (e) {
      console.error('Camera capture error:', e);
    } finally {
      setIsProcessing(false);
    }
  };

  // Do not render camera sensor if tab is not focused
  if (!isFocused) return <View className="flex-1 bg-black" />;

  return (
    <View className="flex-1 bg-black">
      <CameraView ref={cameraRef} style={{ flex: 1 }} facing="back">
        <View className="flex-1 justify-end items-center pb-12">
          <TouchableOpacity
            onPress={takePictureAndCompress}
            disabled={isProcessing}
            className="w-20 h-20 rounded-full border-4 border-white items-center justify-center bg-white/20 active:scale-90 transition-all"
          >
            {isProcessing ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <View className="w-16 h-16 rounded-full bg-white" />
            )}
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};
\`\`\``
      },
      conceptGuide: {
        title: "On-Device Hardware Control & Client-Side Media Compression",
        overview: "Modern smartphone cameras produce raw images exceeding 12 megapixels with file sizes exceeding 10MB. Uploading these large payloads directly over mobile cellular connections leads to request timeouts and severe battery drain. Client-side media pipelines intercept raw hardware buffers on the device, downsampling resolution and applying lossy compression natively before emitting payloads to AI APIs.",
        keyPoints: [
          "**Hardware Lifecycle Management:** Camera and microphone sensors consume substantial battery power; binding hardware sessions to navigation focus is mandatory.",
          "**Edge Media Downsampling:** Pre-processing images to 1024x1024px on-device reduces upload payload by up to 95% and prevents HTTP timeout crashes.",
          "**Hardware Permission Contracts:** Descriptive, user-friendly permission strings in `Info.plist` are strictly scrutinized during Apple App Review."
        ]
      },
      learning: {
        resources: [
          {
            title: "Expo Camera SDK Reference",
            url: "https://docs.expo.dev/versions/latest/sdk/camera/",
            type: "Official Docs"
          },
          {
            title: "Expo Audio Recording Documentation",
            url: "https://docs.expo.dev/versions/latest/sdk/audio/",
            type: "Mobile SDK"
          },
          {
            title: "Apple Camera Privacy & Capture Best Practices",
            url: "https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture",
            type: "Guide"
          }
        ]
      }
    },

    // Node 8
    {
      id: "step-8",
      stepNumber: 8,
      phaseId: "phase-3",
      title: "Streaming Multimodal AI (Vision, Voice & Chat Interfaces)",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Build snap-to-analyze camera AI features and low-latency voice assistants via secure edge proxy endpoints.",
      description: "Mobile users expect instantaneous conversational feedback. Waiting 8 seconds for a complete AI paragraph to generate on a phone screen feels broken. Production mobile AI apps utilize streaming Server-Sent Events (SSE) or WebSockets to stream tokens chunk-by-chunk onto the screen within 400ms of query submission. Crucially, client mobile applications never connect directly to model providers with embedded API keys; all traffic is routed through authenticated backend edge proxies.",
      playbook: {
        setup: "Deploy a serverless streaming API route (Next.js Edge Route or Cloudflare Worker) wrapping the Vercel AI SDK. Protect the route with user authentication headers.",
        execute: "Integrate `@ai-sdk/react` or a native EventSource/SSE stream consumer in React Native. Implement an auto-scrolling chat viewport that buffers incoming text tokens every 50ms to prevent UI thread lockup. Wire image attachment uploads directly into the multimodal vision stream.",
        verify: "Submit a camera photo with a prompt over a cellular connection. Confirm the first streamed token paints onto the screen in under 600ms and verify that scrolling remains smooth without jumping."
      },
      tools: [
        {
          name: "Vercel AI SDK",
          type: "Free",
          url: "https://sdk.vercel.ai",
          description: "TypeScript toolkit for streaming AI model responses, structured tool calling, and multimodal vision inputs into mobile applications.",
          bestFor: "Streaming LLM tokens & chat interface state hooks"
        },
        {
          name: "OpenAI Realtime API",
          type: "Paid",
          url: "https://platform.openai.com/docs/guides/realtime",
          description: "Low-latency multimodal WebRTC and WebSocket API for conversational real-time voice and vision interactions.",
          bestFor: "Sub-500ms real-time conversational voice agents"
        },
        {
          name: "ElevenLabs",
          type: "Freemium",
          url: "https://elevenlabs.io",
          description: "Leading AI voice synthesis platform generating lifelike emotional speech streams from text in real-time.",
          bestFor: "Studio-grade neural speech playback for mobile assistants"
        }
      ],
      callouts: {
        mistake: "Bundling raw OpenAI or Anthropic API keys directly inside the client React Native bundle—attackers can extract them from the binary in minutes.",
        proTip: "Throttle chat list re-renders during high-speed token streaming (buffer state every 50ms) to prevent UI frame drops on high-refresh displays.",
        mistakes: [
          "Embedding secret API keys directly inside client app code where any decompiler can extract them instantly.",
          "Triggering React re-renders on every single arriving SSE character, causing the UI thread to drop frames during fast token generation.",
          "Failing to handle cellular network dropouts during an active stream, leaving the user with an orphaned spinner."
        ],
        proTips: [
          "Always proxy AI inference through your authenticated backend server to enforce user rate limits and guard your secret keys.",
          "Use a throttled buffer (batching token updates every 50ms) to keep scrolling locked at 60fps while maintaining the illusion of instantaneous typing.",
          "Pre-warm the network connection when the user opens the camera or enters the text input to shave 200ms of SSL handshake latency off the first token."
        ]
      },
      promptLab: {
        title: "Streaming Multimodal Mobile Chat & Proxy Architecture",
        description: "Scaffold an authenticated streaming multimodal chat screen in React Native with buffered token rendering and camera photo attachments.",
        variables: [
          {
            name: "AI Modality",
            label: "AI Modality",
            options: ["Multimodal Vision + Streaming Text", "Voice-to-Voice Realtime Agent", "Structured JSON Tool-Calling Assistant"],
            default: "Multimodal Vision + Streaming Text"
          },
          {
            name: "Backend Gateway",
            label: "Backend Gateway",
            options: ["Next.js App Router Edge API", "Supabase Edge Functions (Deno)", "Cloudflare Workers AI Gateway"],
            default: "Next.js App Router Edge API"
          },
          {
            name: "Streaming Protocol",
            label: "Streaming Protocol",
            options: ["Server-Sent Events (SSE) via Fetch Reader", "WebSockets Persistent Channel", "WebRTC Low-Latency Voice"],
            default: "Server-Sent Events (SSE) via Fetch Reader"
          }
        ],
        template: `You are a staff mobile AI engineer specializing in streaming architectures for React Native.

Generate a complete streaming multimodal implementation:
- AI Modality: [AI Modality]
- Backend Gateway: [Backend Gateway]
- Streaming Protocol: [Streaming Protocol]

Please provide:
1. Backend Proxy Route: Serverless edge route code securing the model API key, verifying user auth token, and streaming SSE tokens.
2. Mobile Streaming Hook: React Native custom hook reading chunked text/event streams with 50ms throttling.
3. Chat Viewport Component: Auto-scrolling message list supporting image preview thumbnails and markdown formatting.`,
        expectedOutput: `### Multimodal Mobile Streaming Implementation

#### 1. Backend Edge Proxy Route (\`app/api/chat/route.ts\`)
\`\`\`ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  // 1. Verify User Authorization
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return new Response('Unauthorized', { status: 401 });

  const { messages, imageBase64 } = await req.json();

  let formattedMessages = [...messages];
  if (imageBase64) {
    formattedMessages[formattedMessages.length - 1].content = [
      { type: 'text', text: formattedMessages[formattedMessages.length - 1].content },
      { type: 'image', image: imageBase64 }
    ];
  }

  // 2. Stream response from model
  const result = streamText({
    model: openai('gpt-4o'),
    messages: formattedMessages,
  });

  return result.toDataStreamResponse();
}
\`\`\`

#### 2. Mobile Streaming Consumer Component (\`components/StreamingChat.tsx\`)
\`\`\`tsx
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import EventSource from 'react-native-sse';

export const StreamingChat: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ id: string; role: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = async () => {
    if (!input.trim() || isStreaming) return;

    const userMsg = { id: Date.now().toString(), role: 'user', content: input };
    const assistantMsg = { id: (Date.now() + 1).toString(), role: 'assistant', content: '' };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
    setIsStreaming(true);

    const es = new EventSource('https://api.yourdomain.com/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer user_jwt_token',
      },
      body: JSON.stringify({ messages: [...messages, userMsg] }),
    });

    es.addEventListener('message', (event) => {
      if (event.data) {
        setMessages((prev) => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          updated[lastIdx] = {
            ...updated[lastIdx],
            content: updated[lastIdx].content + event.data,
          };
          return updated;
        });
      }
    });

    es.addEventListener('error', () => {
      es.close();
      setIsStreaming(false);
    });

    es.addEventListener('close', () => {
      es.close();
      setIsStreaming(false);
    });
  };

  return (
    <View className="flex-1 bg-zinc-950 p-4">
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={\`my-2 p-4 rounded-2xl max-w-[85%] \${
            item.role === 'user' ? 'self-end bg-blue-600' : 'self-start bg-zinc-800'
          }\`}>
            <Text className="text-white text-base">{item.content}</Text>
          </View>
        )}
      />
      <View className="flex-row items-center gap-2 p-2 bg-zinc-900 rounded-full">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ask AI anything..."
          placeholderTextColor="#71717a"
          className="flex-1 px-4 text-white text-base"
        />
        <TouchableOpacity
          onPress={sendMessage}
          disabled={isStreaming}
          className="bg-blue-600 px-5 py-2.5 rounded-full"
        >
          <Text className="text-white font-semibold">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
\`\`\``
      },
      conceptGuide: {
        title: "Mobile Multimodal Streaming & Secure Proxy Architecture",
        overview: "Smartphones operate in an adversarial runtime environment where binaries can be unpacked and analyzed. Direct client-to-LLM connections expose API tokens to scraping and abuse. Production systems route all mobile requests through lightweight serverless edge proxies. These proxies authenticate mobile requests, inject upstream API credentials, and relay chunked SSE streams back to the mobile client.",
        keyPoints: [
          "**Reverse Proxy Security:** Mobile application binaries are public; reverse proxies shield private AI credentials and enforce per-user rate limits.",
          "**Chunk Render Throttling:** Rapid token streaming (50+ tokens/sec) can overwhelm the React Native reconciler; buffering chunks protects 60fps scrolling.",
          "**Multimodal Payload Optimization:** Base64-encoded images expand payload sizes by 33%; sending pre-signed storage URLs is cleaner for large media."
        ]
      },
      learning: {
        resources: [
          {
            title: "Vercel AI SDK React Native Integration Guide",
            url: "https://sdk.vercel.ai/docs/guides/frameworks/react-native",
            type: "Official Docs"
          },
          {
            title: "OpenAI Realtime WebRTC Architecture",
            url: "https://platform.openai.com/docs/guides/realtime-webrtc",
            type: "Architecture"
          },
          {
            title: "ElevenLabs Mobile Streaming Audio API",
            url: "https://elevenlabs.io/docs/api-reference",
            type: "Mobile SDK"
          }
        ]
      }
    },

    // Node 9
    {
      id: "step-9",
      stepNumber: 9,
      phaseId: "phase-3",
      title: "On-Device Local AI & Zero-Latency Edge Inference",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Run lightweight vision, OCR, and compact LLM models directly on the user's phone NPU with zero server costs.",
      description: "Modern smartphones contain dedicated Neural Processing Units (Apple Neural Engine and Android NPU) capable of executing trillions of operations per second with minimal power consumption. By deploying quantized INT4 models on-device using CoreML or PyTorch ExecuTorch, apps perform instant offline OCR, document segmentation, text embeddings, and small-model reasoning with 0ms server latency and zero marginal cloud inference costs.",
      playbook: {
        setup: "Configure on-device inference libraries: install `react-native-executorch` or setup native CoreML bridges. Download a quantized 4-bit edge model (e.g. MobileNet, Qwen 2.5 0.5B CoreML, or Whisper Tiny).",
        execute: "Package or dynamically download model weights onto device storage. Load weights into the Apple Neural Engine (ANE) memory space on a background worker thread. Execute inference on a captured camera image or text string without making any network calls.",
        verify: "Turn off all cellular and Wi-Fi data. Run an on-device classification or text summary task. Confirm execution completes in under 100ms on modern hardware (iPhone 14+) with zero network packets transmitted."
      },
      tools: [
        {
          name: "React Native ExecuTorch",
          type: "Free",
          url: "https://pytorch.org/executorch/",
          description: "PyTorch's official on-device AI runtime for executing quantized machine learning and LLM models on iOS and Android devices.",
          bestFor: "Cross-platform on-device PyTorch model inference"
        },
        {
          name: "Apple CoreML",
          type: "Free",
          url: "https://developer.apple.com/machine-learning/core-ml/",
          description: "Apple's hardware-accelerated machine learning framework utilizing the Apple Neural Engine (ANE) for ultra-fast on-device inference.",
          bestFor: "Hardware-accelerated iOS Apple Neural Engine inference"
        },
        {
          name: "MediaPipe",
          type: "Free",
          url: "https://developers.google.com/mediapipe",
          description: "Google's suite of ready-to-use on-device ML solutions for face detection, hand tracking, pose estimation, and text classification.",
          bestFor: "Turnkey on-device computer vision & pose detection"
        }
      ],
      callouts: {
        mistake: "Bundling multi-gigabyte LLM model weights directly inside the App Store binary, causing the initial download size to exceed Apple's 200MB cellular limit.",
        proTip: "Combine fast on-device classification (e.g. 'Is this a receipt?') with cloud LLMs for deep reasoning to reduce cloud API bills by 70%.",
        mistakes: [
          "Shipping heavy multi-gigabyte model weights inside the binary, triggering Apple's cellular download warning and ballooning storage requirements.",
          "Running unquantized FP32 models on the CPU instead of using 4-bit INT4 quantization targeted to the Apple Neural Engine (ANE).",
          "Executing model inference on the main UI thread, triggering iOS watchdog termination crashes (`0x8badf00d`)."
        ],
        proTips: [
          "Download larger model weights dynamically on first app launch over Wi-Fi, storing them in the device cache directory.",
          "Quantize models to INT4 precision; the reduction in model size (75% smaller) allows weights to fit comfortably inside mobile RAM caches.",
          "Always wrap native inference calls inside background native threads or Web Workers to ensure 60fps UI responsiveness."
        ]
      },
      promptLab: {
        title: "On-Device CoreML & ExecuTorch Model Runner",
        description: "Scaffold an on-device inference runner for Apple CoreML and PyTorch ExecuTorch executing quantized vision/text models on the Neural Engine.",
        variables: [
          {
            name: "Model Architecture",
            label: "Model Architecture",
            options: ["Apple CoreML INT4 Quantized Model", "PyTorch ExecuTorch Mobile Runtime", "MediaPipe Vision Classifier"],
            default: "Apple CoreML INT4 Quantized Model"
          },
          {
            name: "Target Task",
            label: "Target Task",
            options: ["Offline Document OCR & Classification", "Local Text Embeddings for Semantic Search", "Lightweight Edge Chat Summary"],
            default: "Offline Document OCR & Classification"
          },
          {
            name: "Hardware Target",
            label: "Hardware Target",
            options: ["Apple Neural Engine (ANE) Preferred", "Android NNAPI / Qualcomm NPU", "CPU Fallback with Multi-Threading"],
            default: "Apple Neural Engine (ANE) Preferred"
          }
        ],
        template: `You are an on-device machine learning specialist for mobile platforms.

Generate an on-device inference pipeline:
- Model Architecture: [Model Architecture]
- Target Task: [Target Task]
- Hardware Target: [Hardware Target]

Please provide:
1. Native Bridge / Module Code: Swift or TypeScript wrapper loading model weights into hardware NPU memory.
2. Background Worker Execution: Ensuring inference executes on background threads without locking the UI.
3. Performance Metrics Logger: Reporting inference duration (in ms) and memory footprint.`,
        expectedOutput: `### On-Device Neural Engine Inference Pipeline

\`\`\`swift
// Swift Native Bridge: CoreMLVisionRunner.swift
import Foundation
import CoreML
import Vision

@objc(CoreMLVisionRunner)
class CoreMLVisionRunner: NSObject {
  
  private var model: VNCoreMLModel?

  @objc
  func loadModel(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.global(qos: .userInitiated).async {
      do {
        let configuration = MLModelConfiguration()
        configuration.computeUnits = .all // Utilizes Apple Neural Engine (ANE) + GPU
        
        let compiledModel = try DocumentClassifier(configuration: configuration)
        self.model = try VNCoreMLModel(for: compiledModel.model)
        resolve(["status": "loaded", "device": "Apple Neural Engine"])
      } catch {
        reject("MODEL_ERROR", "Failed to load CoreML weights", error)
      }
    }
  }

  @objc
  func classifyImage(_ imagePath: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    guard let model = self.model else {
      reject("NOT_INITIALIZED", "Model not loaded yet", nil)
      return
    }

    DispatchQueue.global(qos: .userInitiated).async {
      let startTime = CFAbsoluteTimeGetCurrent()
      guard let url = URL(string: imagePath),
            let image = CIImage(contentsOf: url) else {
        reject("IMAGE_ERROR", "Invalid image path", nil)
        return
      }

      let request = VNCoreMLRequest(model: model) { request, error in
        let durationMs = (CFAbsoluteTimeGetCurrent() - startTime) * 1000
        guard let results = request.results as? [VNClassificationObservation],
              let topResult = results.first else {
          reject("INFERENCE_ERROR", "Classification failed", error)
          return
        }

        resolve([
          "identifier": topResult.identifier,
          "confidence": topResult.confidence,
          "latencyMs": durationMs
        ])
      }

      let handler = VNImageRequestHandler(ciImage: image)
      do {
        try handler.perform([request])
      } catch {
        reject("EXECUTION_ERROR", "Failed to run Vision request", error)
      }
    }
  }
}
\`\`\``
      },
      conceptGuide: {
        title: "Neural Engine Hardware Acceleration & Edge Models",
        overview: "Smartphones feature dedicated silicon coprocessors specifically designed for tensor multiplication. The Apple Neural Engine (ANE) processes INT4 and INT8 operations at microscopic power draws compared to traditional cloud server clusters. By running fast classification, OCR, and embedding generation directly on the phone, applications achieve zero latency and total user data privacy.",
        keyPoints: [
          "**Zero Marginal Cost:** On-device inference incurs zero cloud API tokens or server hosting costs, regardless of user query volume.",
          "**Complete Data Privacy:** Sensitive health records, receipts, and personal photos remain entirely on the user's physical device.",
          "**Watchdog Timeout Prevention:** Heavy model loading must execute in background native threads to prevent iOS watchdog crashes (`0x8badf00d` 'ate bad food')."
        ]
      },
      learning: {
        resources: [
          {
            title: "PyTorch ExecuTorch Documentation",
            url: "https://pytorch.org/executorch/main/getting-started-overview.html",
            type: "Official Docs"
          },
          {
            title: "Apple Core ML Framework Reference",
            url: "https://developer.apple.com/machine-learning/core-ml/",
            type: "Mobile SDK"
          },
          {
            title: "Google MediaPipe Mobile Solutions",
            url: "https://developers.google.com/mediapipe/solutions",
            type: "Guide"
          }
        ]
      }
    },

    // Node 10
    {
      id: "step-10",
      stepNumber: 10,
      phaseId: "phase-3",
      title: "Push Notifications, Deep Links & Background Tasks",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Configure APNs (Apple) and FCM (Android) certificates to send personalized AI reminders that deep-link straight to specific screens.",
      description: "Push notifications are the single most powerful driver of user retention for mobile applications. When an AI background task finishes (e.g. generating a personalized morning summary or completing video transcription), sending an actionable push notification re-engages the user instantly. By configuring Apple Push Notification Service (APNs) keys and handling notification response routing in Expo Router, taps transport users directly to target screens.",
      playbook: {
        setup: "Install push notification modules: `npx expo install expo-notifications expo-device`. Generate an APNs Authentication Key (`.p8`) in your Apple Developer account and upload it to the Expo Application Services (EAS) dashboard.",
        execute: "Request push notification permissions on device. Retrieve the unique `expo_push_token` and store it in your backend database linked to the user's account. Configure a notification response listener (`addNotificationResponseReceivedListener`) that triggers `router.push(notification.data.url)`.",
        verify: "Dispatch a test push payload from the Expo Push Notification Tool. Tap the notification on a locked device screen and verify that the app launches and deep-links directly to the specific target chat or report screen."
      },
      tools: [
        {
          name: "Expo Notifications",
          type: "Free",
          url: "https://docs.expo.dev/versions/latest/sdk/notifications/",
          description: "Comprehensive push notification SDK handling permission requests, token generation, and native response listeners on iOS and Android.",
          bestFor: "Cross-platform push notification lifecycle & routing"
        },
        {
          name: "OneSignal",
          type: "Freemium",
          url: "https://onesignal.com",
          description: "Enterprise push notification and customer messaging platform featuring automated message funnels and user segmentation.",
          bestFor: "Targeted push campaigns & automated re-engagement funnels"
        },
        {
          name: "Branch.io",
          type: "Freemium",
          url: "https://branch.io",
          description: "Deep linking and attribution platform ensuring users route directly to in-app content through install funnels and push campaigns.",
          bestFor: "Deferred deep linking & multi-platform attribution"
        }
      ],
      callouts: {
        mistake: "Sending generic, repetitive notifications that trigger users to disable app notifications entirely in their iOS system settings.",
        proTip: "Include structured deep link metadata (`data: { url: '/chat/123' }`) in notification payloads so user taps route directly to relevant content.",
        mistakes: [
          "Sending broadcast notifications without personalization, causing high notification disable rates in iOS settings.",
          "Forgetting to implement the `addNotificationResponseReceivedListener`, leaving users stranded on the home screen when tapping a notification.",
          "Missing APNs `.p8` key configuration in EAS, causing silent push failures on standalone production iOS binaries."
        ],
        proTips: [
          "Implement rich media notifications containing image previews or inline quick-action buttons (e.g. 'View Report', 'Dismiss').",
          "Use local scheduled notifications for daily recurring AI habits; they trigger on device clocks without requiring server infrastructure.",
          "Capture notification click-through timestamps to train algorithms on each user's optimal engagement hour."
        ]
      },
      promptLab: {
        title: "APNs Push Notification Handler & Deep-Link Router",
        description: "Scaffold an end-to-end push notification service with permission priming, token registration, and Expo Router deep-link navigation.",
        variables: [
          {
            name: "Push Gateway",
            label: "Push Gateway",
            options: ["Expo Push Service & Node.js SDK", "OneSignal Mobile Suite", "Firebase Cloud Messaging (FCM) Direct"],
            default: "Expo Push Service & Node.js SDK"
          },
          {
            name: "Notification Trigger",
            label: "Notification Trigger",
            options: ["Background AI Generation Complete Alert", "Daily Personalized Morning Summary", "Re-Engagement Inactive User Reminder"],
            default: "Background AI Generation Complete Alert"
          },
          {
            name: "Deep Link Action",
            label: "Deep Link Action",
            options: ["Route to Dynamic Chat Screen (/chat/[id])", "Open Modal Paywall (/modal/paywall)", "Navigate to Analytics Tab (/tabs/history)"],
            default: "Route to Dynamic Chat Screen (/chat/[id])"
          }
        ],
        template: `You are a mobile engagement engineer specializing in push notifications and deep linking.

Generate a complete push notification lifecycle module:
- Push Gateway: [Push Gateway]
- Notification Trigger: [Notification Trigger]
- Deep Link Action: [Deep Link Action]

Please provide:
1. Registration & Token Hook: Complete React Native code requesting permissions and returning \`expo_push_token\`.
2. Notification Listener Setup: Centralized response listener routing taps directly via \`expo-router\`.
3. Backend Dispatch Script: Node.js/TypeScript code demonstrating how to construct and send the APNs payload with embedded deep-link metadata.`,
        expectedOutput: `### Push Notification Lifecycle & Deep-Link Router

#### 1. Push Registration Hook (\`hooks/usePushNotifications.ts\`)
\`\`\`ts
import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useRouter } from 'expo-router';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const usePushNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    // Handle deep link when user taps the notification
    const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
      const data = response.notification.request.content.data;
      if (data?.url) {
        router.push(data.url);
      }
    });

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return { expoPushToken };
};

async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) return null;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') return null;

  const token = (await Notifications.getExpoPushTokenAsync()).data;

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
\`\`\`

#### 2. Backend Dispatch Snippet (Node.js)
\`\`\`ts
import { Expo } from 'expo-server-sdk';

const expo = new Expo();

export async function sendAINotification(pushToken: string, chatId: string, summary: string) {
  if (!Expo.isExpoPushToken(pushToken)) return;

  const messages = [{
    to: pushToken,
    sound: 'default' as const,
    title: '✨ Your AI Analysis is Ready',
    body: summary.slice(0, 100) + '...',
    data: { url: \`/chat/\${chatId}\` }, // Deep-link payload
    badge: 1,
  }];

  await expo.sendPushNotificationsAsync(messages);
}
\`\`\``
      },
      conceptGuide: {
        title: "APNs/FCM Infrastructure, Deep Link Routing & Background Push",
        overview: "Push notifications represent an asynchronous communication tunnel maintained directly between mobile operating systems and Apple/Google servers. Device operating systems sleep sockets to preserve battery, waking only when cryptographically signed APNs/FCM packets arrive. Embedding structured route targets inside the payload ensures seamless deep-link navigation.",
        keyPoints: [
          "**APNs & FCM Pipeline:** Mobile operating systems maintain a single persistent socket to Apple/Google servers; push services route alerts through this pipe.",
          "**Deep Link Navigation Contracts:** Notification response payloads must contain structured route data (`url: '/report/123'`) to bypass manual navigation steps.",
          "**Local vs Remote Notifications:** Local notifications run on device clocks and require zero server infrastructure for recurring habit loops."
        ]
      },
      learning: {
        resources: [
          {
            title: "Expo Notifications SDK Documentation",
            url: "https://docs.expo.dev/versions/latest/sdk/notifications/",
            type: "Official Docs"
          },
          {
            title: "OneSignal React Native SDK Guide",
            url: "https://documentation.onesignal.com/docs/react-native-sdk-setup",
            type: "Mobile SDK"
          },
          {
            title: "Apple Push Notification Service Architecture",
            url: "https://developer.apple.com/documentation/usernotifications",
            type: "Guide"
          }
        ]
      }
    },

    // Node 11
    {
      id: "step-11",
      stepNumber: 11,
      phaseId: "phase-4",
      title: "Native Paywalls, Subscriptions & In-App Purchases (IAP)",
      timeEstimate: "2 hrs",
      difficulty: "Advanced",
      summary: "Implement high-converting onboarding paywalls, free trial toggles, receipt validation, and remote paywall A/B testing without app updates.",
      description: "Monetizing mobile applications requires strict compliance with Apple StoreKit 2 and Google Play Billing systems. Under Apple App Store Guideline 3.1.1, digital AI capabilities cannot link to external payment processors like Stripe—they must use native in-app purchases. Utilizing RevenueCat, mobile developers configure cross-platform subscriptions, validate cryptographic purchase receipts server-side, and dynamically update paywall copy without submitting new binary updates.",
      playbook: {
        setup: "Install RevenueCat SDK: `npx expo install react-native-purchases`. Create an account on RevenueCat, link your Apple App Store Connect and Google Play credentials, and configure products (Weekly with 3-Day Trial, Annual Discount).",
        execute: "Initialize RevenueCat on app start with user ID. Build an accessible paywall featuring trial toggles, clear feature checkmarks, terms of service, and a mandatory 'Restore Purchases' button. Guard premium AI screens by checking `customerInfo.entitlements.active['pro']`.",
        verify: "Run the app inside the Xcode StoreKit Test environment or TestFlight Sandbox. Purchase a test subscription and confirm that the premium entitlement unlocks instantly, and test restoring purchases on a secondary simulator."
      },
      tools: [
        {
          name: "RevenueCat",
          type: "Freemium",
          url: "https://www.revenuecat.com",
          description: "Leading in-app purchase and subscription management backend for iOS and Android handling receipt validation, entitlements, and churn analytics.",
          bestFor: "Cross-platform subscription backend & receipt validation"
        },
        {
          name: "Superwall",
          type: "Freemium",
          url: "https://superwall.com",
          description: "Mobile paywall optimization platform that builds, tests, and serves native dynamic paywalls remotely without App Store updates.",
          bestFor: "Remote paywall A/B testing & real-time pricing experiments"
        },
        {
          name: "App Store Connect",
          type: "Free",
          url: "https://appstoreconnect.apple.com",
          description: "Apple's official portal for creating auto-renewable subscription groups, setting regional pricing tiers, and configuring StoreKit products.",
          bestFor: "StoreKit 2 product configuration & subscription groups"
        }
      ],
      callouts: {
        mistake: "Missing a visible 'Restore Purchases' button or readable Terms of Use (EULA) links on the paywall—an instant rejection by Apple App Review under Guideline 3.1.2.",
        proTip: "Default the annual plan as pre-selected with a prominent 'Save 50%' badge; this drives over 70% of subscription revenue for consumer AI apps.",
        mistakes: [
          "Omitting a functional 'Restore Purchases' button, triggering an immediate Apple Review rejection under Guideline 3.1.2.",
          "Attempting to accept credit card payments via Stripe links inside the iOS app for digital AI features, violating Apple Guideline 3.1.1.",
          "Hardcoding paywall screens in client code, requiring a 48-hour App Store review cycle every time you want to test new pricing."
        ],
        proTips: [
          "Pre-select the annual plan with a clear cost-per-week breakdown to reduce perceived pricing friction.",
          "Implement an exit paywall: if the user dismisses the initial trial offer, present a discounted alternative or lifetime unlock offer.",
          "Handle `Purchases.restorePurchases()` with clean user feedback so users switching devices feel acknowledged immediately."
        ]
      },
      promptLab: {
        title: "RevenueCat Native Subscription Paywall & Entitlement Guard",
        description: "Scaffold a complete App Store-compliant subscription paywall using RevenueCat with trial toggles, legal EULA links, and entitlement route guarding.",
        variables: [
          {
            name: "Subscription Tier",
            label: "Subscription Tier",
            options: ["Weekly ($4.99/wk with 3-Day Trial) + Annual ($49.99/yr)", "Monthly ($9.99/mo) + Annual ($79.99/yr)", "Credit Pack Top-Ups (Consumable IAP)"],
            default: "Weekly ($4.99/wk with 3-Day Trial) + Annual ($49.99/yr)"
          },
          {
            name: "Paywall Trigger Moment",
            label: "Paywall Trigger Moment",
            options: ["Onboarding Exit Paywall", "Feature-Gated Trigger on Camera Scan", "Usage Limit Reached Modal"],
            default: "Onboarding Exit Paywall"
          },
          {
            name: "IAP SDK Provider",
            label: "IAP SDK Provider",
            options: ["RevenueCat (react-native-purchases)", "Superwall Dynamic SDK", "Raw React Native IAP"],
            default: "RevenueCat (react-native-purchases)"
          }
        ],
        template: `You are a mobile monetization engineer specializing in in-app purchases and Apple StoreKit compliance.

Generate a complete production subscription module:
- Subscription Tier: [Subscription Tier]
- Paywall Trigger Moment: [Paywall Trigger Moment]
- IAP SDK Provider: [IAP SDK Provider]

Please provide:
1. RevenueCat Initialization & Hook: Centralized service configuring SDK with user identity.
2. StoreKit-Compliant Paywall Screen: Complete React Native code with feature checklist, trial disclosure, restore button, and Apple EULA links.
3. Entitlement Route Guard: Navigation wrapper preventing access to AI features if the user lacks active 'pro' status.`,
        expectedOutput: `### Production RevenueCat Subscription Paywall

#### 1. Paywall Screen (\`app/modal/paywall.tsx\`)
\`\`\`tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking, ActivityIndicator } from 'react-native';
import Purchases, { PurchasesPackage } from 'react-native-purchases';
import { useRouter } from 'expo-router';

export default function PaywallModal() {
  const [packages, setPackages] = useState<PurchasesPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<PurchasesPackage | null>(null);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadOfferings() {
      try {
        const offerings = await Purchases.getOfferings();
        if (offerings.current && offerings.current.availablePackages.length !== 0) {
          setPackages(offerings.current.availablePackages);
          setSelectedPackage(offerings.current.availablePackages[0]);
        }
      } catch (e) {
        console.error('Error fetching offerings:', e);
      }
    }
    loadOfferings();
  }, []);

  const handlePurchase = async () => {
    if (!selectedPackage || isPurchasing) return;
    setIsPurchasing(true);

    try {
      const { customerInfo } = await Purchases.purchasePackage(selectedPackage);
      if (customerInfo.entitlements.active['pro']) {
        router.back();
      }
    } catch (e: any) {
      if (!e.userCancelled) {
        alert(e.message);
      }
    } finally {
      setIsPurchasing(false);
    }
  };

  const handleRestore = async () => {
    try {
      const customerInfo = await Purchases.restorePurchases();
      if (customerInfo.entitlements.active['pro']) {
        alert('Purchases restored successfully!');
        router.back();
      } else {
        alert('No active subscriptions found.');
      }
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <ScrollView className="flex-1 bg-zinc-950 p-6">
      <TouchableOpacity onPress={() => router.back()} className="self-end p-2">
        <Text className="text-zinc-400 text-lg">✕</Text>
      </TouchableOpacity>

      <Text className="text-3xl font-bold text-white text-center mt-4">
        Unlock Unlimited AI Vision & Voice
      </Text>
      <Text className="text-zinc-400 text-center text-base mt-2 mb-8">
        Try 3 days free. Cancel anytime in App Store settings.
      </Text>

      {/* Package Selector */}
      {packages.map((pkg) => {
        const isSelected = selectedPackage?.identifier === pkg.identifier;
        return (
          <TouchableOpacity
            key={pkg.identifier}
            onPress={() => setSelectedPackage(pkg)}
            className={\`p-4 rounded-2xl border my-2 flex-row justify-between items-center \${
              isSelected ? 'border-blue-500 bg-blue-500/10' : 'border-zinc-800 bg-zinc-900'
            }\`}
          >
            <View>
              <Text className="text-white font-bold text-lg">{pkg.product.title}</Text>
              <Text className="text-zinc-400 text-sm">{pkg.product.description}</Text>
            </View>
            <Text className="text-white font-bold text-lg">{pkg.product.priceString}</Text>
          </TouchableOpacity>
        );
      })}

      {/* CTA Button */}
      <TouchableOpacity
        onPress={handlePurchase}
        disabled={isPurchasing}
        className="w-full bg-blue-600 py-4 rounded-2xl items-center mt-6 active:scale-95"
      >
        {isPurchasing ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text className="text-white font-bold text-lg">Start 3-Day Free Trial</Text>
        )}
      </TouchableOpacity>

      {/* Mandatory App Store Legal Disclosures */}
      <View className="flex-row justify-center gap-4 mt-6 mb-12">
        <TouchableOpacity onPress={handleRestore}>
          <Text className="text-zinc-500 text-xs">Restore Purchases</Text>
        </TouchableOpacity>
        <Text className="text-zinc-700">•</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://yourdomain.com/terms')}>
          <Text className="text-zinc-500 text-xs">Terms of Use (EULA)</Text>
        </TouchableOpacity>
        <Text className="text-zinc-700">•</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://yourdomain.com/privacy')}>
          <Text className="text-zinc-500 text-xs">Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
\`\`\``
      },
      conceptGuide: {
        title: "Native Mobile Subscriptions & Server-Side Receipt Validation",
        overview: "In-app purchases on iOS and Android require strict cryptographic validation. StoreKit 2 uses JSON Web Signature (JWS) tokens to sign transactions. RevenueCat acts as an authoritative subscription ledger, verifying raw receipts with Apple and Google servers and exposing an intuitive client entitlement object.",
        keyPoints: [
          "**StoreKit 2 Receipt Verification:** Modern StoreKit uses cryptographic JWS tokens verified server-side to prevent jailbreak purchase tampering.",
          "**App Review Guideline 3.1.2:** Mandatory legal requirements dictate visible restore buttons, recurring billing disclosures, and links to Apple Standard EULA.",
          "**Remote Paywall Experimentation:** Decoupling paywall presentation from client code allows real-time pricing and visual A/B tests without binary releases."
        ]
      },
      learning: {
        resources: [
          {
            title: "RevenueCat React Native SDK Guide",
            url: "https://www.revenuecat.com/docs/getting-started/installation/reactnative",
            type: "Official Docs"
          },
          {
            title: "Superwall Mobile Paywall Documentation",
            url: "https://docs.superwall.com",
            type: "Mobile SDK"
          },
          {
            title: "Apple In-App Purchase Human Interface Guidelines",
            url: "https://developer.apple.com/app-store/review/guidelines/#in-app-purchase",
            type: "Guide"
          }
        ]
      }
    },

    // Node 12
    {
      id: "step-12",
      stepNumber: 12,
      phaseId: "phase-4",
      title: "Cloud Builds (EAS) & Instant Over-the-Air (OTA) Updates",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Compile signed iOS .ipa and Android .aab binaries in the cloud and ship instant JS bug fixes via EAS Update.",
      description: "Building production iOS binaries historically required physical macOS hardware and complex certificate signing profiles. With Expo Application Services (EAS Build), compilation occurs in cloud-managed macOS containers. Furthermore, using EAS Update (`expo-updates`), developers push critical JavaScript bug fixes and prompt adjustments directly to end-user devices over-the-air in seconds without waiting for Apple App Store review cycles.",
      playbook: {
        setup: "Install EAS CLI globally: `npm install -g eas-cli`. Log in with your Expo account (`eas login`) and run `eas build:configure` to generate `eas.json` with development, preview, and production profiles.",
        execute: "Trigger cloud compilation of a signed iOS release binary using `eas build --platform ios --profile production`. Configure `expo-updates` in `app.json` with a strict `runtimeVersion` policy. Publish an instant over-the-air bug fix using `eas update --branch production --message 'Fix streaming bug'`.",
        verify: "Inspect the EAS Dashboard to confirm the cloud build succeeded. Install the binary on a physical test device via TestFlight, push an OTA update, restart the app, and verify that the updated JavaScript bundle loads instantly."
      },
      tools: [
        {
          name: "Expo Application Services (EAS)",
          type: "Freemium",
          url: "https://expo.dev/eas",
          description: "Cloud compilation and distribution infrastructure for compiling signed iOS and Android binaries and deploying Over-the-Air (OTA) updates.",
          bestFor: "Cloud binary compilation & instant OTA updates"
        },
        {
          name: "TestFlight",
          type: "Free",
          url: "https://developer.apple.com/testflight/",
          description: "Apple's official beta testing platform allowing developers to distribute pre-release iOS builds to internal and external testers.",
          bestFor: "Beta testing signed iOS builds on real hardware"
        },
        {
          name: "GitHub Actions",
          type: "Freemium",
          url: "https://github.com/features/actions",
          description: "Automated CI/CD workflow runner triggering EAS cloud builds and running test suites on every pull request or main branch merge.",
          bestFor: "Automated CI/CD build pipelines & deployment triggers"
        }
      ],
      callouts: {
        mistake: "Attempting to push native Swift/Kotlin module changes via Over-the-Air updates; OTA can only update JS/CSS assets, causing fatal crashes if native APIs are missing.",
        proTip: "Set up runtime version policies (`\"runtimeVersion\": { \"policy\": \"appVersion\" }`) in `app.json` so OTA updates are delivered only to compatible binary versions.",
        mistakes: [
          "Shipping native Swift or C++ dependency changes via OTA updates, leading to instant crashes because native binaries lack the updated compiled code.",
          "Failing to configure App Store Connect API keys in EAS, forcing manual certificate signing and provisioning profile wrestling.",
          "Distributing untested binaries directly to production without testing on real physical devices via TestFlight."
        ],
        proTips: [
          "Use EAS Update for hotfixes (typos, UI tweaks, prompt updates) to push patches live to 100,000+ users in 60 seconds without App Store review delays.",
          "Configure GitHub Actions to trigger automated TestFlight internal builds every time a pull request merges into `main`.",
          "Define separate build profiles in `eas.json` (`development`, `preview`, `production`) with isolated bundle identifiers and environment variables."
        ]
      },
      promptLab: {
        title: "EAS Build Configuration & Automated CI/CD Pipeline",
        description: "Generate a production `eas.json` configuration paired with a GitHub Actions workflow for automated TestFlight builds and OTA update dispatch.",
        variables: [
          {
            name: "Build Pipeline",
            label: "Build Pipeline",
            options: ["Production App Store + Play Store", "Internal TestFlight Preview Build", "Over-the-Air (OTA) Hotfix Dispatch"],
            default: "Production App Store + Play Store"
          },
          {
            name: "CI/CD Environment",
            label: "CI/CD Environment",
            options: ["GitHub Actions Workflow", "Manual EAS CLI Terminal", "GitLab CI"],
            default: "GitHub Actions Workflow"
          },
          {
            name: "Runtime Version Policy",
            label: "Runtime Version Policy",
            options: ["appVersion (e.g. 1.0.0)", "nativeVersion Fingerprint", "explicit Version String"],
            default: "appVersion (e.g. 1.0.0)"
          }
        ],
        template: `You are a mobile DevOps engineer specializing in React Native and Expo Application Services (EAS).

Generate a complete build and release pipeline:
- Build Pipeline: [Build Pipeline]
- CI/CD Environment: [CI/CD Environment]
- Runtime Version Policy: [Runtime Version Policy]

Please provide:
1. Complete \`eas.json\` Configuration: With development, preview (internal), and production channels.
2. \`app.json\` OTA Updates Block: Configuring \`runtimeVersion\` and EAS update URL.
3. GitHub Actions Workflow (\`.github/workflows/deploy.yml\`): Automating tests, EAS build, and submission to TestFlight.`,
        expectedOutput: `### EAS Build & GitHub Actions CI/CD Pipeline

#### 1. \`eas.json\` Configuration
\`\`\`json
{
  "cli": {
    "version": ">= 12.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": { "simulator": true }
    },
    "preview": {
      "distribution": "internal",
      "channel": "preview"
    },
    "production": {
      "channel": "production",
      "autoIncrement": true,
      "ios": {
        "simulator": false
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "developer@company.com",
        "ascAppId": "1234567890",
        "appleTeamId": "ABCDE12345"
      }
    }
  }
}
\`\`\`

#### 2. GitHub Actions Deployment Workflow (\`.github/workflows/deploy.yml\`)
\`\`\`yaml
name: Deploy to TestFlight

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 🏗 Checkout repository
        uses: actions/checkout@v4

      - name: 🟢 Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: 📦 Install dependencies
        run: npm ci

      - name: 🚀 Setup EAS CLI
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: \${{ secrets.EXPO_TOKEN }}

      - name: 🔨 Build and Submit to TestFlight
        run: |
          eas build --platform ios --profile production --non-interactive --auto-submit
\`\`\``
      },
      conceptGuide: {
        title: "Cloud Native Compilation & Over-the-Air Runtime Updates",
        overview: "Building native iOS binaries requires macOS environments, Xcode toolchains, and complex cryptographic signing certificates. Expo Application Services offloads this entire pipeline to managed cloud builders. With over-the-air updates, JavaScript and asset diffs are delivered over HTTPS directly to user devices, enabling instant hotfixes while strictly honoring native binary compatibility policies.",
        keyPoints: [
          "**Cloud Build Pipelines:** EAS Build manages Apple provisioning profiles, certificates, and Android keystores automatically in secure cloud environments.",
          "**Over-the-Air (OTA) Updates:** The JS bundle and static assets are downloaded on app startup, allowing instant bug remediation without store resubmissions.",
          "**Runtime Version Guards:** Matching update manifests to binary runtime hashes prevents pushing new JS code to outdated native binary shells."
        ]
      },
      learning: {
        resources: [
          {
            title: "EAS Build Official Documentation",
            url: "https://docs.expo.dev/build/introduction/",
            type: "Official Docs"
          },
          {
            title: "Expo OTA Updates Architecture Overview",
            url: "https://docs.expo.dev/eas-update/how-it-works/",
            type: "Architecture"
          },
          {
            title: "Apple TestFlight Distribution Guide",
            url: "https://developer.apple.com/testflight/",
            type: "Guide"
          }
        ]
      }
    },

    // Node 13
    {
      id: "step-13",
      stepNumber: 13,
      phaseId: "phase-4",
      title: "Mobile Crash Monitoring, List Virtualization & Profiling",
      timeEstimate: "1.5 hrs",
      difficulty: "Intermediate",
      summary: "Replace slow ScrollViews with 60fps virtualized lists, track native crashes, and analyze user retention funnels.",
      description: "Mobile applications operate under tight hardware constraints—older devices have limited RAM, causing unoptimized apps to suffer Out-Of-Memory (OOM) operating system kills. By replacing unvirtualized ScrollViews with Shopify's FlashList (which recycles native view components rather than constantly re-creating them), scrolling remains locked at 60fps. Integrating Sentry React Native guarantees full stack trace symbolication for both JavaScript exceptions and native Swift/C++ crashes.",
      playbook: {
        setup: "Install performance and observability SDKs: `npx expo install @sentry/react-native @shopify/flash-list posthog-react-native`. Configure the Sentry project DSN in `app.json`.",
        execute: "Replace standard FlatList implementations with Shopify FlashList, defining `estimatedItemSize={80}` for feed recycling. Wrap the app root in `Sentry.wrap()`. Instrument user funnel events in PostHog (`App Open -> Onboarding Complete -> Camera Scan -> Paywall Viewed -> Subscribed`).",
        verify: "Scroll rapidly through a list of 1,000 AI chat messages in the iOS Simulator. Confirm memory usage remains flat and CPU utilization stays under 15%. Trigger a test exception (`Sentry.captureException()`) and verify that clean symbolicated TypeScript line numbers appear in the Sentry dashboard."
      },
      tools: [
        {
          name: "Sentry React Native",
          type: "Freemium",
          url: "https://sentry.io/for/react-native/",
          description: "Full-stack mobile crash reporting, performance monitoring, and native symbolication (dSYM) for React Native apps.",
          bestFor: "Crash reporting, native stack traces & ANR detection"
        },
        {
          name: "FlashList",
          type: "Free",
          url: "https://shopify.github.io/flash-list/",
          description: "Shopify's ultra-fast virtualized list replacement for React Native that recycles platform views to deliver 60fps performance on complex feeds.",
          bestFor: "60fps list virtualization & cell recycling"
        },
        {
          name: "PostHog",
          type: "Freemium",
          url: "https://posthog.com",
          description: "Product analytics and user session replay platform tailored for tracking mobile onboarding funnels and feature retention.",
          bestFor: "Mobile user funnels & conversion drop-off analysis"
        }
      ],
      callouts: {
        mistake: "Using unvirtualized `ScrollView` for message lists or gallery feeds, creating massive memory leaks that cause low-memory crashes (OOM) on older iPhones.",
        proTip: "Shopify FlashList recycles existing native views instead of creating new ones, yielding a 5x improvement in scroll frame rates over stock FlatList.",
        mistakes: [
          "Using plain `ScrollView` for unbounded dynamic lists, causing RAM usage to climb continuously until the OS terminates the app.",
          "Forgetting to upload native debug symbols (dSYMs for iOS) during EAS builds, leaving crash logs completely unreadable in production.",
          "Storing large base64 image strings inside component state while rendering lists, bloating the JavaScript heap."
        ],
        proTips: [
          "Always provide an accurate `estimatedItemSize` on FlashList to maximize the efficiency of cell recycling.",
          "Configure Sentry's automated dSYM upload in `eas.json` so crash traces instantly map back to exact TypeScript source line numbers.",
          "Monitor Cold Start versus Warm Start duration metrics in Sentry to ensure your app initializes in under 1.2 seconds."
        ]
      },
      promptLab: {
        title: "FlashList Virtualization & Sentry Crash Telemetry",
        description: "Scaffold an ultra-fast virtualized chat feed using Shopify FlashList with automatic cell recycling and full Sentry crash instrumentation.",
        variables: [
          {
            name: "Virtualization Target",
            label: "Virtualization Target",
            options: ["Heavy AI Conversation History (1,000+ Items)", "Infinite Media Photo Grid", "Dynamic Real-Time Event Feed"],
            default: "Heavy AI Conversation History (1,000+ Items)"
          },
          {
            name: "Crash Monitoring Suite",
            label: "Crash Monitoring Suite",
            options: ["Sentry React Native with dSYM Symbols", "Bugsnag Mobile SDK", "Firebase Crashlytics"],
            default: "Sentry React Native with dSYM Symbols"
          },
          {
            name: "Analytics Funnel",
            label: "Analytics Funnel",
            options: ["PostHog Mobile SDK", "Mixpanel Mobile", "Amplitude Analytics"],
            default: "PostHog Mobile SDK"
          }
        ],
        template: `You are a mobile performance and reliability engineer specializing in React Native optimization.

Generate a complete performance and observability module:
- Virtualization Target: [Virtualization Target]
- Crash Monitoring Suite: [Crash Monitoring Suite]
- Analytics Funnel: [Analytics Funnel]

Please provide:
1. High-Performance List Component: Using \`@shopify/flash-list\` with \`estimatedItemSize\`, memoized render items, and zero frame-drop scrolling.
2. Sentry Crash Instrumentation: Setup script configuring native breadcrumbs and error boundaries.
3. PostHog Funnel Tracking: Helper functions logging step conversions from launch to payment.`,
        expectedOutput: `### FlashList Performance & Sentry Instrumentation

#### 1. High-Performance Virtualized Feed (\`components/OptimizedFeed.tsx\`)
\`\`\`tsx
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';

interface FeedItem {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const ChatBubble = memo(({ item }: { item: FeedItem }) => (
  <View className={\`my-2 p-4 rounded-2xl max-w-[85%] \${
    item.role === 'user' ? 'self-end bg-blue-600' : 'self-start bg-zinc-800'
  }\`}>
    <Text className="text-white text-base">{item.content}</Text>
    <Text className="text-zinc-400 text-xs mt-1 self-end">{item.timestamp}</Text>
  </View>
));

export const OptimizedChatList: React.FC<{ items: FeedItem[] }> = ({ items }) => {
  return (
    <View className="flex-1 bg-zinc-950 p-4">
      <FlashList
        data={items}
        renderItem={({ item }) => <ChatBubble item={item} />}
        estimatedItemSize={88}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
\`\`\`

#### 2. Sentry & PostHog Initialization (\`lib/telemetry.ts\`)
\`\`\`ts
import * as Sentry from '@sentry/react-native';
import PostHog from 'posthog-react-native';

export function initTelemetry() {
  // Sentry Crash Reporting
  Sentry.init({
    dsn: 'https://public_key@sentry.io/project_id',
    debug: false,
    tracesSampleRate: 0.2, // 20% performance tracing
    enableNativeFramesTracking: true,
  });

  // PostHog Funnel Tracking
  PostHog.initAsync('phc_api_key', {
    host: 'https://us.i.posthog.com',
  });
}

export const trackFunnelStep = (stepName: string, properties?: Record<string, any>) => {
  PostHog.capture(stepName, properties);
};
\`\`\``
      },
      conceptGuide: {
        title: "Native View Recycling & Symbolicated Crash Telemetry",
        overview: "Smartphones have finite RAM buffers. Rendering thousands of DOM-like views simultaneously triggers memory pressure and causes operating systems to kill apps unceremoniously. Shopify's FlashList solves this by recycling existing platform view pointers as items scroll off screen. Pairing this with Sentry ensures every crash generates actionable stack traces mapped directly to your TypeScript source code.",
        keyPoints: [
          "**Cell Recycling Architecture:** View destruction and creation during scrolling is CPU-intensive; FlashList reuses existing view nodes to achieve smooth 120Hz ProMotion scrolling.",
          "**Symbolicated Crash Diagnostics:** Native symbol maps (dSYMs for iOS, ProGuard for Android) map machine code memory addresses back to exact TypeScript source line numbers.",
          "**Cold Start Optimization:** Keeping JavaScript initialization and initial module imports lightweight directly reduces Time-to-Interactive (TTI) upon app launch."
        ]
      },
      learning: {
        resources: [
          {
            title: "Shopify FlashList Documentation",
            url: "https://shopify.github.io/flash-list/docs/",
            type: "Official Docs"
          },
          {
            title: "Sentry for React Native Guide",
            url: "https://docs.sentry.io/platforms/react-native/",
            type: "Mobile SDK"
          },
          {
            title: "React Native Performance Profiling Guide",
            url: "https://reactnative.dev/docs/profiling",
            type: "Architecture"
          }
        ]
      }
    },

    // Node 14
    {
      id: "step-14",
      stepNumber: 14,
      phaseId: "phase-4",
      title: "App Store & Google Play ASO, Screenshots & Review Compliance",
      timeEstimate: "2 hrs",
      difficulty: "Intermediate",
      summary: "Optimize keyword metadata, design panoramic store screenshots, and pass Apple Guideline 4.2 (Minimum Functionality) and AI data-privacy checks.",
      description: "Passing the Apple App Store review process on the first submission is a major milestone. Apple reviewers rigorously enforce Guideline 4.2 (Minimum Functionality, rejecting simple web wrappers) and Guideline 5.1.1 (Data Privacy, requiring comprehensive disclosures of AI data usage). By creating panoramic screenshots that highlight real interface outputs and providing dedicated reviewer credentials with test instructions, developers ship without costly rejection cycles.",
      playbook: {
        setup: "Draft your App Store metadata: Title (30 characters), Subtitle (30 characters), and 100-character keyword field. Set up screenshot canvases in AppScreens or Figma for 6.9\" (iPhone 16 Pro Max) and 6.5\" devices.",
        execute: "Design a 5-screenshot visual sequence where the first 2 screenshots immediately showcase the primary AI output (e.g. instant recipe from fridge photo). Configure Privacy Nutrition Labels in App Store Connect declaring user data usage. Create a dedicated Apple review demo account and write clear review instructions.",
        verify: "Run the App Store submission validation pre-flight check in App Store Connect. Confirm that all screenshot resolutions match Apple specifications exactly, demo credentials log in cleanly, and review notes explain AI functionality clearly."
      },
      tools: [
        {
          name: "AppScreens",
          type: "Freemium",
          url: "https://appscreens.com",
          description: "App Store and Google Play screenshot generator creating panoramic, 3D device mockups localized in multiple languages.",
          bestFor: "Exporting App Store & Google Play panoramic screenshots"
        },
        {
          name: "Astro ASO",
          type: "Freemium",
          url: "https://astroaso.com",
          description: "App Store Optimization suite for tracking keyword rankings, search volume, competitor keyword gaps, and conversion rates.",
          bestFor: "App Store keyword optimization & competitor rankings"
        },
        {
          name: "Fastlane",
          type: "Free",
          url: "https://fastlane.tools",
          description: "Open-source developer automation tool for automating screenshot captures, provisioning profiles, and App Store metadata uploads.",
          bestFor: "Automated screenshot generation & App Store deployment"
        }
      ],
      callouts: {
        mistake: "Failing Guideline 4.2 (Minimum Functionality) by submitting a simple responsive web wrapper that lacks rich native device interactions, haptics, or offline utility.",
        proTip: "The first 3 App Store screenshots account for 85% of install conversions; ensure screenshot #1 showcases the high-impact 'Before vs. After' output of your AI feature.",
        mistakes: [
          "Failing Guideline 4.2 by wrapping a web view without utilizing native hardware capabilities (camera, haptics, biometrics, offline storage).",
          "Forgetting to provide dedicated demo login credentials in the App Review Notes, causing reviewers to reject the app as 'Unable to test'.",
          "Using generic marketing buzzwords on the primary screenshot instead of clearly showing the actual user interface and output."
        ],
        proTips: [
          "Make screenshot #1 showcase the high-impact 'Before vs. After' output of your AI feature—this drives over 85% of install decisions.",
          "Include a clear App Review Note explaining: 'This app uses the OpenAI API for text analysis; here are test login credentials: demo@app.com / Pass123!'.",
          "Include an in-app 'Report AI Content' button if your app generates open-ended text or images to satisfy Guideline 1.2 (User Generated Content)."
        ]
      },
      promptLab: {
        title: "App Store Optimization (ASO) & Review Compliance Kit",
        description: "Generate high-converting App Store metadata (Title, Subtitle, Keywords), screenshot copywriting, and a bulletproof App Review submission note.",
        variables: [
          {
            name: "App Category",
            label: "App Category",
            options: ["AI Photo & Video Scanner", "Health, Fitness & Calorie AI", "Productivity & Note Assistant"],
            default: "AI Photo & Video Scanner"
          },
          {
            name: "Review Compliance Target",
            label: "Review Compliance Target",
            options: ["Guideline 4.2 Minimum Functionality (Native Features)", "Guideline 5.1.1 AI Data Privacy & Nutrition Labels", "Guideline 1.2 User Generated Content Moderation"],
            default: "Guideline 4.2 Minimum Functionality (Native Features)"
          },
          {
            name: "Target Geographic Market",
            label: "Target Geographic Market",
            options: ["US / English Global", "European Union (Multilingual)", "Japan & Asia-Pacific"],
            default: "US / English Global"
          }
        ],
        template: `You are an App Store Optimization (ASO) strategist and mobile launch specialist.

Generate a complete App Store submission and metadata package:
- App Category: [App Category]
- Review Compliance Target: [Review Compliance Target]
- Target Geographic Market: [Target Geographic Market]

Please provide:
1. High-Converting ASO Metadata: Title (under 30 chars), Subtitle (under 30 chars), and comma-separated 100-character Keyword field (no spaces after commas).
2. 5-Frame Screenshot Copywriting Sequence: Headline, subtitle, and visual mockup description for each frame.
3. Apple Reviewer Notes: Exact markdown note to paste in App Store Connect detailing demo credentials, AI provider compliance, and test instructions.`,
        expectedOutput: `### App Store Submission & ASO Package

#### 1. ASO Metadata Matrix
- **App Title (28 chars):** \`LensAI: Smart Camera Scanner\`
- **Subtitle (30 chars):** \`AI Document & Receipt Scanner\`
- **Keyword Field (99 chars):** \`scanner,ocr,receipt,document,pdf,ai,camera,notes,summarizer,converter,business,invoice,tax,expense\`

#### 2. 5-Frame Panoramic Screenshot Blueprint
1. **Frame 1 (The Hook):** "Scan Anything in 1 Second" — Visual: High-res phone capturing receipt with live bounding box overlay.
2. **Frame 2 (Core AI Value):** "Instant AI Summary & Totals" — Visual: Clean card breakdown displaying extracted line items and currency conversions.
3. **Frame 3 (Offline Speed):** "Works 100% Offline" — Visual: Airplane mode badge with instantaneous 0ms local results.
4. **Frame 4 (Biometric Security):** "Locked with FaceID" — Visual: FaceID unlock prompt guarding private financial records.
5. **Frame 5 (Universal Export):** "Export to PDF & Excel" — Visual: Clean 1-tap export sheet sharing to Notion, Slack, and Google Drive.

#### 3. App Review Notes (Paste in App Store Connect)
\`\`\`markdown
Dear App Review Team,

Thank you for reviewing LensAI. Here is all necessary information to test our application:

1. Demo Account Credentials:
   - Username: appreview@yourdomain.com
   - Password: ReviewerPassword2026!
   - (Sign in with Apple is also enabled via native simulator buttons)

2. Native Functionality Verification (Guideline 4.2):
   - Camera: Used for local hardware document downsampling (\`expo-camera\`).
   - Haptics: Integrated into card snap gestures (\`expo-haptics\`).
   - FaceID: Biometric challenge implemented on app resume (\`expo-local-authentication\`).
   - Offline Mode: Works without internet connection using on-device MMKV caching.

3. AI Model Compliance (Guideline 5.1.1 & 1.2):
   - Text analysis is processed via our secure backend proxy using OpenAI API.
   - User data is not used for model training.
   - An in-app "Report Output" flag is available on all AI generation cards.

Please let us know if any further clarification is needed!
\`\`\``
      },
      conceptGuide: {
        title: "App Store Optimization & Apple Review Compliance Playbook",
        overview: "Publishing a mobile app is governed by rigorous editorial and security checks. Apple's Review Guidelines are designed to protect users from deceptive web wrappers, unannounced data harvesting, and unstable user experiences. Satisfying Guideline 4.2 requires demonstrating rich native interactions (camera, haptics, biometrics, offline utility), while thoughtful ASO metadata maximizes organic store discoverability.",
        keyPoints: [
          "**Keyword Indexing Rules:** Apple indexes App Name, Subtitle, and the hidden 100-character Keyword field; avoid repeating words across fields.",
          "**Guideline 4.2 Native Requirements:** Apps that are merely repackaged responsive websites are rejected; leveraging native camera, haptics, and biometrics satisfies minimum functionality.",
          "**AI Transparency & Content Moderation:** Apps producing generative content must provide terms of service prohibiting abusive content and an in-app reporting mechanism."
        ]
      },
      learning: {
        resources: [
          {
            title: "Apple App Store Review Guidelines",
            url: "https://developer.apple.com/app-store/review/guidelines/",
            type: "Official Docs"
          },
          {
            title: "Google Play Developer Content Policy",
            url: "https://play.google.com/about/developer-content-policy/",
            type: "Guide"
          },
          {
            title: "Fastlane Mobile Automation Documentation",
            url: "https://docs.fastlane.tools",
            type: "Architecture"
          }
        ]
      }
    }
  ]
};
