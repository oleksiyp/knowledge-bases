---
type: Event
title: C# 8 ships nullable reference types
description: "With .NET Core 3.0 on 2019-09-23, C# 8 made 'string' versus 'string?' a compile-time distinction for reference types: opt-in, warnings-only and erased at runtime. It was the first retrofit of null safety onto a top-5 managed language, and it became the default for new projects in .NET 6."
event_kind: release
date: 2019-09-23
era: E1
impact: positive
languages: [languages/csharp]
runtimes: [runtimes/dotnet-clr]
ideas: [ideas/types/null-safety]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: netcore3
    resource: https://devblogs.microsoft.com/dotnet/announcing-net-core-3-0/
    title: ".NET Blog: Announcing .NET Core 3.0"
    author: org:microsoft
  - id: try-nrt
    resource: https://devblogs.microsoft.com/dotnet/try-out-nullable-reference-types/
    title: ".NET Blog: Try out Nullable Reference Types"
    author: org:microsoft
  - id: cs-nrt-docs
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types
    title: "Microsoft Learn: Nullable reference types (C# reference)"
    author: org:microsoft
  - id: runtime-41720
    resource: https://github.com/dotnet/runtime/issues/41720
    title: "dotnet/runtime #41720: nullable annotations throughout netcoreapp libraries"
    author: org:microsoft
---

# What happened
Microsoft released .NET Core 3.0 at .NET Conf on 2019-09-23. It shipped C# 8, which added nullable reference types (NRTs), async streams, ranges/indices and more patterns.[^netcore3] Inside a `#nullable enable` context (or `<Nullable>enable</Nullable>` in the project file), a plain reference type such as `string` is non-nullable and `string?` is nullable. Flow analysis warns when a possibly-null value is dereferenced or assigned to a non-nullable location.[^try-nrt][^cs-nrt-docs]

The feature was deliberately **opt-in and warnings-only**. Annotations are metadata, not runtime checks, and the `!` "null-forgiving" operator suppresses diagnostics.

# Why it matters
- It was the first time a top-tier enterprise language retrofitted null safety onto a 20-year-old ecosystem without breaking source compatibility. It became the template for Java's later JSpecify annotation approach.
- Microsoft followed the "annotate the platform first" strategy: about 94% of core library assemblies were annotated across .NET Core 3.0 and .NET 5.[^runtime-41720] Starting with .NET 6 (November 2021), every new-project template enables NRTs by default.[^cs-nrt-docs]
- The cost was soundness. Because NRTs are advisory, nulls still cross API boundaries from unannotated libraries, reflection and deserialisation. C# null safety is a strong lint, not a guarantee. Dart's sound model, by contrast, could eliminate the null checks altogether ([null safety](/ideas/types/null-safety.md)).

# Related
- [C#](/languages/csharp.md), [.NET CLR](/runtimes/dotnet-clr.md)
- [Null safety](/ideas/types/null-safety.md)
- [.NET 5 unification](/events/2020-11-dotnet-5-unification.md)

[^netcore3]: .NET Blog: Announcing .NET Core 3.0 — https://devblogs.microsoft.com/dotnet/announcing-net-core-3-0/
[^try-nrt]: .NET Blog: Try out Nullable Reference Types — https://devblogs.microsoft.com/dotnet/try-out-nullable-reference-types/
[^cs-nrt-docs]: Microsoft Learn: Nullable reference types — https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types
[^runtime-41720]: dotnet/runtime #41720 — https://github.com/dotnet/runtime/issues/41720
