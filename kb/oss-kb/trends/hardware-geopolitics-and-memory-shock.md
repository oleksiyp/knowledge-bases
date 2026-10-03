---
type: Trend
title: Geopolitics and the AI memory shock reshaped open hardware
description: "In open hardware, outcomes were decided by geopolitics (US FCC bans on foreign drones and routers, Chinese RISC-V support, export controls) and by the AI-driven DRAM shortage more than by openness. Scale and inventory won (Raspberry Pi, Espressif). Small open-hardware makers halted production (Pine64), and chip vendors bought open communities."
tags: [hardware, risc-v, geopolitics, supply-chain, dram, defense, cross-domain]
strength: moderate
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
domains: [hardware-embedded, ai-models, end-user-apps]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hwb-pine64
    resource: https://hwbusters.com/news/pine64-linux-devices-are-off-the-menu-until-at-least-mid-2027/
    title: "Hardware Busters: Pine64 Linux devices off the menu until mid-2027"
  - id: tnw-h1
    resource: https://thenextweb.com/news/raspberry-pi-record-first-half-memory-stockpile
    title: "The Next Web: Raspberry Pi record first half on memory stockpile"
  - id: fcc-routers
    resource: https://www.bakermckenzie.com/en/insight/publications/2026/04/united-states-fcc-adds-foreign-made-routers-to-covered-list
    title: "Baker McKenzie: FCC adds foreign-made routers to Covered List"
  - id: fcc-drones
    resource: https://dronelife.com/2025/12/22/fcc-adds-foreign-made-drones-and-components-to-covered-list-citing-national-security-risks/
    title: "DroneLife: FCC adds foreign-made drones to Covered List (2025-12-22)"
  - id: sifive-g
    resource: https://www.sifive.com/press/sifive-raises-400-million-to-accelerate-high-performance-risc-v-data-center-solutions
    title: "SiFive raises $400M (2026-04)"
  - id: reg-ventana
    resource: https://www.theregister.com/2025/12/10/qualcomm_riscv_arm_ventana/
    title: "The Register: Qualcomm buys Ventana (2025-12-10)"
  - id: picknik
    resource: https://www.therobotreport.com/qualcomm-acquires-picknik-robotics-keep-moveit-open-source/
    title: "The Robot Report: Qualcomm acquires PickNik, keeps MoveIt open source"
---

# Summary

| Force | Effect | Evidence |
|---|---|---|
| **AI-driven DRAM shortage** (2026) | Companies with inventory won and small makers stopped production | Raspberry Pi H1 2026 revenue +90% thanks to a memory stockpile[^tnw-h1]; Pine64 halted Linux devices until mid-2027[^hwb-pine64]; Framework warned of "real financial risk". See [event](/events/2026-08-dram-shortage-pine64-halts-production.md) |
| **US FCC Covered List** | New foreign-made drones (Dec 2025) and consumer routers (Mar 2026) banned, reshaping the markets for PX4/ArduPilot hardware and OpenWrt routers | [Drones](/events/2025-12-fcc-foreign-drones-covered-list.md)[^fcc-drones], [routers](/events/2026-03-fcc-foreign-routers-covered-list.md)[^fcc-routers] |
| **EU** | Dropped the "radio lockdown" rule, which kept custom router firmware possible | [event](/events/2026-01-eu-drops-radio-lockdown-delegated-act.md) |
| **Defense demand** | Open autopilots became war infrastructure; Auterion (PX4) raised money and turned profitable | [ArduPilot and Operation Spiderweb](/events/2025-06-ardupilot-operation-spiderweb.md), [PX4](/projects/hardware-embedded/px4.md) |
| **Chip vendors buying open communities** | Qualcomm bought Arduino, Ventana (RISC-V), Modular and PickNik (MoveIt); Siemens bought OpenROAD's main developer; NVIDIA is buying HF, which owns LeRobot | [Ventana](/events/2025-12-qualcomm-acquires-ventana.md)[^reg-ventana], [PickNik](/events/2026-09-qualcomm-to-acquire-picknik.md)[^picknik], [Siemens](/events/2026-07-siemens-acquires-precision-innovations.md) |
| **RISC-V as a neutral ISA** | RVA23 ratified; SiFive raised $400M at $3.65B; strong Chinese adoption | [RVA23](/events/2024-10-rva23-profile-ratified.md), [SiFive](/events/2026-04-sifive-400m-series-g.md)[^sifive-g] |

# Failures linked to this trend

- [Efabless shut down](/events/2025-03-efabless-shuts-down.md), stranding the open-silicon shuttle.
- [K-Scale Labs shut down](/events/2025-11-k-scale-labs-shuts-down.md) (an open humanoid robot startup).
- Prusa moved away from open hardware ([event](/events/2025-12-prusa-open-community-license.md)), citing Chinese cloning and patents.

# Implications

- Open specifications (RISC-V, OpenTitan, ROS 2, Zephyr) thrive. The money accrues to whoever controls silicon, supply and certification.
- Expect more chip-vendor acquisitions of open software communities, and more national-security restrictions that affect open hardware ecosystems.

# Related

- [Domain review: hardware and embedded](/domains/hardware-embedded.md)
- [AI labs and compute owners bought the stack](/trends/ai-labs-and-compute-owners-buy-the-stack.md)

[^hwb-pine64]: Hardware Busters.
[^tnw-h1]: The Next Web.
[^fcc-routers]: Baker McKenzie.
[^fcc-drones]: DroneLife.
[^sifive-g]: SiFive press release.
[^reg-ventana]: The Register.
[^picknik]: The Robot Report.
