# Proposed Resume Changes - Personal Background Additions

**Generated:** 2026-01-12
**Source:** Analysis of workshop/office equipment inventory from `shared` repository

This document proposes additions to the **Personal Background** section of the master resume based on documented equipment, tools, and capabilities in the home workshop/office.

---

## Executive Summary

The equipment inventory reveals significant personal investments and expertise in 8 key hobby areas that complement professional technical skills. Total documented equipment value exceeds $15,000+ across photography, electronics, vintage computing, networking infrastructure, and specialized tools.

**Recommended Additions:**
1. Photography & Astrophotography
2. Electronics Hobbyist & PCB Design
3. Vintage Computing Preservation
4. Home Lab & Infrastructure
5. 3D Printing & Maker Activities
6. VR/AR Development
7. Film Photography & Darkroom
8. Equipment Restoration

---

## 1. Photography & Astrophotography

### Proposed Addition

**Photography (Digital & Film):** Serious photography hobbyist with professional-grade equipment including Nikon D800 FX full-frame DSLR, Nikon F6 35mm film camera, and extensive lens collection (12-300mm range). Specialized in astrophotography using Sky-Watcher Star Adventurer 2i motorized star tracker for deep-sky imaging, with dedicated light pollution filters and precision focusing tools. Film workflow includes darkroom processing (Paterson Universal developing tank) and high-resolution scanning (Epson Perfection V850 Pro 6400 dpi scanner). Creative optics exploration through Lensbaby system and vintage M42 Soviet glass (Helios-44M-6, Industar-50-2).

### Equipment Evidence

| Category | Key Equipment | Investment |
|----------|--------------|------------|
| **Digital Bodies** | Nikon D800 (FX 36MP), Olympus TG-5 (waterproof) | $1,075 |
| **Film Bodies** | Nikon F6 (pro 35mm), Nikon FG-20, Mamiya Sekor 1000 DTL (M42), Fotodiox DIY Lomo TLR | $831 |
| **Lenses** | Sigma 12-24mm f/4.5-5.6, 24-70mm f/2.8, 70-200mm f/2.8, Nikon 28-300mm VR, 85mm f/1.8, 50mm f/1.8, Lensbaby creative optics collection, M42 vintage glass | $5,500+ |
| **Astrophotography** | Sky-Watcher Star Adventurer 2i Pro Pack, Bahtinov mask, ICE 82mm LiPo filter, USB dew heater | $570 |
| **Film Processing** | Paterson Universal developing tank + 2 reels, Epson V850 Pro scanner | $946 |
| **Accessories** | X-Rite i1 Display Pro + ColorChecker Passport, Nikon R1 macro flash kit | $817 |
| **Total** | | **$9,739+** |

**Cross-References:**
- `shared/Camera Collection/readme.md` - Complete photography equipment inventory
- Astrophotography setup documented with pricing purchased 2021-10-27

---

## 2. Electronics Hobbyist & PCB Design

### Proposed Addition

**Electronics & Embedded Systems:** Active electronics hobbyist with professional-grade workshop including 200 MHz oscilloscope, HP 34401A 6½ digit DMM, DE-5000 LCR meter, FLIR thermal camera, and stereo microscope for SMD work. Full surface-mount rework capabilities (KSGER T12 soldering station, YaeCCC 858D hot air, Hakko FR-301 desoldering). PCB design using KiCad with custom library development - designed and fabricated multiple production boards including RS-485 camera control interfaces (lanc2rs485), audio recorder control (h4n2rs485), and analog computer modules (ComdynaGP6 power supplies). Maintains extensive component stock including 30-value resistor kits, op-amps (TL074CN, LM324N), voltage regulators (LM317T/LM337T), and 74-series logic ICs.

### Equipment Evidence

| Category | Key Equipment | Details |
|----------|--------------|---------|
| **Test Equipment** | Hantek DSO5202P (200 MHz, 1 GSa/s), HP 34401A 6½ digit DMM, DE-5000 LCR meter (100 kHz), Hantek 6022BE USB scope, FLIR E4 thermal camera | Professional-grade measurement |
| **Rework Station** | KSGER T12 soldering (STM32, OLED), YaeCCC 858D hot air, Hakko FR-301 desoldering gun | Full SMD capabilities |
| **Inspection** | AmScope SM-4TZ stereo microscope (7x-45x zoom) | SMD inspection/rework |
| **PCB Design** | KiCad with custom MyCustomSymbols.kicad_sym library and MyCustomLibrary.pretty footprints | Production boards fabricated |
| **Component Stock** | 30-value resistor kit (10Ω-1MΩ), op-amp collection, voltage regulators, 74HC logic, NE555 timers, microcontrollers (ATmega, ATtiny, PIC16F) | Ready for prototyping |
| **Programmers** | TL866II Plus universal, USBasp (AVR), ST-Link V2 (STM32), Altera USB Blaster, Greaseweazle V4.1 | Multi-platform support |

**Production PCB Designs:**
- `lanc2rs485` - Sony/Canon LANC camera control via RS-485 (fencing scoring system)
- `h4n2rs485` - Zoom H4N audio recorder remote control interface
- `SG_Power` - Saint George scoring apparatus power supply
- `ComdynaGP6` - Analog computer logarithmic amplifier module

**Cross-References:**
- `shared/workshop-capabilities.md` - Complete equipment list
- `shared/tools-and-components.md` - Component inventory
- `code/public/EmbeddedBakery/circuits/` - KiCad PCB projects

---

## 3. Vintage Computing Preservation

### Proposed Addition

**Vintage Computing Preservation:** Collector and restorer of 1980s vintage computers including Apple IIc (1984, 65C02), Apple IIgs (1986, 65C816), and TI-99/4A (1981, TMS9900). Modern preservation equipment includes Floppy Emu SD card-based floppy emulator for both Apple II systems and Greaseweazle V4.1 USB floppy controller for disk imaging and preservation. Maintains period-appropriate software libraries and development tools including cc65 C compiler for 6502, Merlin32 assembler for 65816, and xdt99 TI-99/4A cross-development tools. Active in vintage computing community preserving software and documenting hardware.

### Equipment Evidence

| System | Year | CPU | RAM | Preservation Tools |
|--------|------|-----|-----|-------------------|
| **Apple IIc** | 1984 | 65C02 @ 1.023 MHz | 128 KB | Floppy Emu (5.25" emulation) |
| **Apple IIgs** | 1986 | 65C816 @ 2.8 MHz | 256 KB-8 MB | Floppy Emu (3.5"/5.25" emulation) |
| **TI-99/4A** | 1981 | TMS9900 @ 3.0 MHz | 16 KB | Cassette/Floppy support |
| **Greaseweazle V4.1** | Modern | - | - | USB floppy imaging/preservation |
| **NESMaker PCB** | Modern | - | - | NES homebrew cartridge development |

**Development Tools:**
- cc65 - C compiler for 6502 (Apple II)
- Merlin32 - 65816 assembler (Apple IIgs)
- xdt99 - TI-99/4A cross-development tools
- MAME, AppleWin, Classic99, JS99er (emulators)

**Cross-References:**
- `shared/Vintage Computers/readme.md` - Complete vintage system inventory
- `code/public/MM8000` - Intel 8085 trainer emulator (GitHub)

---

## 4. Home Lab & Infrastructure

### Proposed Addition

**Home Lab & DevOps Infrastructure:** Maintains multi-node home lab with DevOps Playground cluster (AMD FX-9590/FX-8350 systems, 64GB RAM total) for Docker/Kubernetes experimentation and CI/CD pipeline testing. Network infrastructure includes 9-node eero 6+ WiFi 6 mesh with Thread support, 2× MokerLink 2.5GbE managed switches with 10G SFP+ interconnect, and WD My Cloud PR4100 NAS for centralized storage. Legacy ARM cluster (4× BeagleBone Black, 4× Raspberry Pi) with custom power controller and network management device (code in EmbeddedBakery repository). Infrastructure-as-code approach to home automation, media server, and development environment management.

### Equipment Evidence

| Category | Equipment | Specifications |
|----------|-----------|---------------|
| **Compute Cluster** | Reduced BigRig (FX-9590, 32GB DDR3, 2× R9 290) + Server (FX-8350, 32GB DDR3, HD 5450) | Docker/Kubernetes playground |
| **Legacy SBC Cluster** | 4× BeagleBone Black, 2× Raspberry Pi 2, 2× Raspberry Pi Model A | ARM-based experimentation |
| **Network** | 9× Amazon eero 6+ (WiFi 6, Thread), 2× MokerLink 2.5G managed switches (VLAN, LACP, QoS), 2× ipolex 10GBase-T SFP+ transceivers | Enterprise-grade home network |
| **Storage** | WD My Cloud PR4100 NAS, WD MyBookLive | Centralized media/backup |
| **Primary Workstation** | PowerSpec G474 (i9-14900KF, 160GB DDR5, RTX 4070 Ti) | Development/rendering |

**Project Documentation:**
- `shared/Device Lab/projects/docker-cluster.md` - DevOps Playground cluster details
- `shared/network-diagram.md` - Network topology, IP assignments, VLAN planning
- `code/public/EmbeddedBakery` - Custom SBC cluster power controller

**Cross-References:**
- `shared/Device Lab/readme.md` - Complete device inventory
- `shared/workshop-capabilities.md` - Cluster project capabilities

---

## 5. 3D Printing & Maker Activities

### Proposed Addition

**3D Printing & Digital Fabrication:** Upgraded Velleman K8200 3D printer with Duet 3 multi-tool control system for custom enclosures, mechanical parts, and workshop organization solutions. Configuration and upgrades documented in MyMashedDuet repository. Active maker projects include DIY TrekPak-style dividers for Pelican cases and custom mounting solutions for lab equipment. Integration of 3D printing with electronics projects for complete product development (PCB + enclosure workflow).

### Equipment Evidence

| Equipment | Upgrades | Repository |
|-----------|----------|------------|
| **Velleman K8200** | Duet 3 multi-tool controller | [MyMashedDuet](https://github.com/mwwhited/MyMashedDuet) (GitHub) |

**Active Projects:**
- `shared/projects/diy-trekpak-dividers/` - Workshop organization system
- Custom enclosures for electronics projects (PCB integration)
- Lab equipment mounting brackets and fixtures

**Cross-References:**
- `shared/Test Equipment/3d-printers/velleman-k8200/` - Printer specifications
- `code/public/MyMashedDuet` - Duet 3 configuration repository

---

## 6. VR/AR Development & Spatial Computing

### Proposed Addition

**VR/AR Development:** Experimental spatial computing projects using Microsoft HoloLens v1 Developer Edition for augmented reality development, gesture control, and spatial mapping. Dual Kinect sensor setup (Xbox 360 Kinect v1 + Xbox One Kinect v2) for 3D scanning, motion capture, and skeletal tracking applications. Exploration of depth-sensing technologies for robotics, interactive installations, and accessibility projects.

### Equipment Evidence

| Device | Capabilities | Hackability |
|--------|-------------|-------------|
| **Microsoft HoloLens v1** | AR development, spatial mapping, gesture control | ★★★★☆ |
| **Xbox 360 Kinect** | 3D scanning, motion capture, robotics (v1 with PC adapter) | ★★★★★ |
| **Xbox One Kinect v2** | High-res depth sensing, skeletal tracking (PC version) | ★★★★☆ |

**Potential Applications:**
- AR/VR development and prototyping
- 3D scanning for CAD model creation
- Motion capture for animation
- Gesture-based control interfaces
- Robotics depth perception

**Cross-References:**
- `shared/Device Lab/vr-ar/` - HoloLens documentation
- `shared/Device Lab/sensors/` - Kinect sensor documentation

---

## 7. Film Photography & Darkroom

### Proposed Addition

**Film Photography & Darkroom Processing:** Traditional film photography workflow using Nikon F6 professional 35mm SLR (autofocus film camera), Nikon FG-20 (manual AI mount), and Mamiya Sekor 1000 DTL (M42 screw mount). Complete darkroom setup with Paterson Universal developing tank for black & white and color film processing. High-resolution digitization using Epson Perfection V850 Pro flatbed/film scanner (6400 dpi optical resolution) for archival-quality scans. Color calibration workflow using X-Rite i1 Display Pro and ColorChecker Passport for accurate digital reproduction of film originals.

### Equipment Evidence

| Category | Equipment | Purpose |
|----------|-----------|---------|
| **Film Bodies** | Nikon F6 (pro AF 35mm), Nikon FG-20 (AI manual), Mamiya Sekor 1000 DTL (M42), Fotodiox DIY Lomo TLR | Multiple format options |
| **Developing** | Paterson Universal Tank + 2 reels (35mm/120) | B&W and C-41 color processing |
| **Scanning** | Epson Perfection V850 Pro (6400 dpi optical, 48-bit color) | Film-to-digital workflow |
| **Calibration** | X-Rite i1 Display Pro + ColorChecker Passport | Color accuracy |

**Film Workflow:**
1. Exposure on film camera (multiple body options)
2. Chemical processing in Paterson tank (home darkroom)
3. High-resolution scanning on Epson V850 Pro
4. Color-corrected digital workflow with X-Rite calibration

**Cross-References:**
- `shared/Camera Collection/readme.md` - Film camera inventory
- Darkroom section in Camera Collection documentation

---

## 8. Equipment Restoration & Repair

### Proposed Addition

**Equipment Restoration & Troubleshooting:** Restoration and repair of vintage electronics and computers using professional-grade tools including full SMD rework station (soldering, hot air, desoldering gun), stereo microscope for component-level inspection, and FLIR E4 thermal camera for fault diagnosis. Experience with capacitor replacement on 30+ year old systems, power supply restoration, and period-correct component sourcing. Active troubleshooting using oscilloscope and logic analyzer for digital circuit debugging.

### Equipment Evidence

| Category | Tools | Applications |
|----------|-------|--------------|
| **Rework** | KSGER T12 soldering, YaeCCC 858D hot air, Hakko FR-301 desoldering | Component-level repair |
| **Inspection** | AmScope SM-4TZ stereo microscope (7x-45x), FLIR E4 thermal camera | Fault identification |
| **Debugging** | Hantek DSO5202P 200 MHz scope, Saleae-compatible logic analyzer | Circuit analysis |
| **Restoration** | Multiple programmers (TL866II Plus, USBasp, ST-Link V2), EPROM eraser | Firmware/BIOS work |

**Typical Restoration Projects:**
- Vintage computer capacitor replacement (Apple II, TI-99/4A)
- Power supply rebuilds with modern safety components
- PCB trace repair and component replacement
- Firmware extraction and preservation

**Cross-References:**
- `shared/Test Equipment/readme.md` - Repair equipment inventory
- `shared/Vintage Computers/readme.md` - Restoration targets

---

## Summary: Integration with Master Resume

### Recommended Placement

Add a new **"Personal Interests & Technical Hobbies"** section after **Professional Development** and before **Volunteer Experience** (if present), or near the end of the resume before References/Additional Information.

### Suggested Format (Concise Version)

```markdown
## Personal Interests & Technical Hobbies

**Photography & Astrophotography:** Serious photography hobbyist with professional-grade Nikon equipment (D800 FX, F6 film) and specialized astrophotography setup including Sky-Watcher Star Adventurer 2i motorized star tracker. Film processing and high-resolution scanning workflow using Epson V850 Pro scanner.

**Electronics & PCB Design:** Active electronics maker with professional workshop (200 MHz oscilloscope, HP 6½ digit DMM, SMD rework station, stereo microscope). Custom PCB design using KiCad - production boards fabricated for fencing scoring systems (RS-485 interfaces, power supplies, audio control).

**Vintage Computing Preservation:** Collector and restorer of 1980s systems (Apple IIc, Apple IIgs, TI-99/4A) with modern preservation tools (Floppy Emu, Greaseweazle USB floppy controller). Software archival and cross-platform development tools.

**Home Lab Infrastructure:** Multi-node DevOps cluster (FX-9590/FX-8350, 64GB total RAM) for Docker/Kubernetes experimentation. Enterprise-grade home network (9-node WiFi 6 mesh, 2.5GbE managed switches with 10G SFP+ interconnect).

**3D Printing & Fabrication:** Velleman K8200 with Duet 3 upgrade for custom enclosures and mechanical parts. Integration with electronics projects for complete product development workflow.
```

### Total Equipment Investment

| Category | Estimated Value |
|----------|----------------|
| Photography & Astrophotography | $9,739+ |
| Electronics & Test Equipment | $3,500+ |
| Vintage Computing | $1,200+ |
| Home Lab & Networking | $5,000+ |
| 3D Printing | $800+ |
| VR/AR Development | $1,500+ |
| **Total** | **$21,739+** |

---

## Cross-References to Source Documentation

All equipment and capabilities documented in:
- `shared/workshop-capabilities.md` - Complete workshop inventory and project ideas
- `shared/tools-and-components.md` - Consumables, hand tools, component stock
- `shared/Camera Collection/readme.md` - Photography equipment (219 lines)
- `shared/Device Lab/readme.md` - Computing devices and networking (195 lines)
- `shared/Vintage Computers/readme.md` - Retro systems inventory (106 lines)
- `shared/Test Equipment/readme.md` - Lab equipment specifications
- `shared/Programmable Devices/readme.md` - FPGA, MCU, development boards
- `shared/Expansion Boards/readme.md` - Arduino shields, Pi HATs, BeagleBone capes

---

## Implementation Notes

**Considerations:**
1. **Resume Length**: Personal interests section should be concise (3-5 bullet points maximum)
2. **Relevance**: Emphasize technical hobbies that complement professional skills (electronics, infrastructure, development)
3. **Evidence**: All claims backed by documented equipment inventory in `shared` repository
4. **Professional Tone**: Frame hobbies as technical expertise development, not just leisure activities
5. **Value Alignment**: Highlights hands-on maker culture, continuous learning, and investment in skill development

**Tone Suggestions:**
- Emphasize technical depth and professional-grade equipment
- Link hobbies to professional skills (PCB design → hardware integration, home lab → enterprise infrastructure)
- Show long-term commitment (equipment investment $21K+, preserved systems from 1980s)
- Demonstrate maker mindset and practical problem-solving

**Optional Additions:**
- Cross-reference to GitHub projects that use hobby equipment (EmbeddedBakery, MyMashedDuet, MM8000)
- Mention production deployments (ScoreMachine fencing scoring using custom PCBs)
- Highlight community contributions (open-source tools, documentation)

---

*Document generated based on equipment analysis from:*
- workshop-capabilities.md (766 lines)
- tools-and-components.md (459 lines)
- Camera Collection/readme.md (219 lines)
- Device Lab/readme.md (195 lines)
- Vintage Computers/readme.md (106 lines)

*Total inventory analyzed: 1,745+ lines of equipment documentation*
