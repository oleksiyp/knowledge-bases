# Outcome: succeeded

* [Source generators and annotation processing](source-generators-and-annotation-processing.md) - Generate ordinary source code at compile time — instead of using runtime reflection or full macros — via plugins that inspect the program (Java annotation processors, C# Roslyn source generators, Kotlin KSP, Swift macros). In 2018–2026 the idea won in .NET, where it became the backbone of trimming and Native AOT, and steadily replaced kapt in Kotlin; Java's processors were tightened (off by default since JDK 23) and Lombok survives by hacking compiler internals; Dart abandoned its macro project in Jan 2025. Verdict: succeeded where the platform owner designed for it.

# Outcome: succeeding

* [Comptime and staged compilation (running ordinary code at compile time)](comptime-and-staged-compilation.md) - Use the same language, not a separate template or macro language, to compute types, generate code and validate invariants at compile time. 2018–2026 verdict: succeeding — Zig made comptime its single metaprogramming mechanism and the idea spread (C++ constexpr/consteval each standard up to C++26's expansion statements and constexpr exceptions, Mojo parameters, C23 constexpr), while Rust's const evaluation advanced slowly (const generics MVP 2021; const traits still unstable in 2026) and Jai's #run stayed in closed beta.
