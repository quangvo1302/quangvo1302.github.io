export const siteConfig = {
  name: "Võ Nhật Quang",
  alternateName: ["Vo Nhat Quang", "Quang Vo", "quangvo1302"],
  baseUrl: "https://vonhatquang.site",
  description:
    "Võ Nhật Quang — Technical Manager tại ESEC. Tích hợp OT-IT, tự động hoá đa nền tảng Siemens, Schneider, Ignition, ETAP, OSIsoft PI.",
  email: "nhatquang1302@gmail.com",
  linkedin: "https://www.linkedin.com/in/nhatquang1302",
  github: "https://github.com/quangvo1302",
  jobTitle: "Technical Manager",
  worksFor: {
    name: "EAST SEA Energy Environment (ESEC)",
    url: "https://esec.vn"
  },
  address: {
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN"
  },
  alumniOf: "Ho Chi Minh City University of Technology",
  knowsAbout: [
    "Industrial automation",
    "SCADA",
    "PLC programming",
    "OT-IT integration",
    "Overall Equipment Effectiveness"
  ],
  personId: "https://vonhatquang.site/about/#person"
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, `${siteConfig.baseUrl}/`).toString();
}
