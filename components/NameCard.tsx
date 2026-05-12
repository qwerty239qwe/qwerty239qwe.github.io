"use client";

import { QRCodeSVG } from "qrcode.react";
import { profile } from "@/content/resume";
import { GitHubIcon, MailIcon, PhoneIcon } from "./ContactIcons";

export function NameCard() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div
        className="relative rounded-2xl border border-border bg-background shadow-xl overflow-hidden"
        style={{ aspectRatio: "85.6 / 54" }}
      >
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted">
              {profile.role}
            </div>
            <h1 className="mt-1 text-xl font-semibold leading-tight">
              {profile.name}
            </h1>
            {profile.location && (
              <div className="text-xs text-muted mt-0.5">{profile.location}</div>
            )}
          </div>

          <div className="flex items-end justify-between gap-3">
            <ul className="text-[11px] leading-5 space-y-0.5 break-all min-w-0">
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:underline">
                  <MailIcon className="h-3 w-3" />
                  {profile.email}
                </a>
              </li>
              {profile.phone && (
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <PhoneIcon className="h-3 w-3" />
                    {profile.phone}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:underline"
                >
                  <GitHubIcon className="h-3 w-3" />
                  github.com/qwerty239qwe
                </a>
              </li>
            </ul>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn QR code"
              className="shrink-0 rounded-md bg-white p-1.5"
            >
              <QRCodeSVG
                value={profile.linkedin}
                size={84}
                level="M"
                includeMargin={false}
              />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-muted">
        Scan the QR to open LinkedIn
      </p>
    </div>
  );
}
