"use client";

import { RichText } from "@/components/ui/RichText";
import { useRole } from "@/components/role/RoleProvider";
import { roles } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

/** Seletor discreto "Contratando para: Tudo / Dev / QA / Cloud" (vem da direção F). */
export function RoleSelector() {
  const { role, setRole } = useRole();
  const { dictionary } = useLanguage();
  const text = dictionary.roles;
  const active = roles.indexOf(role);

  return (
    <div className="role">
      <div className="role-row">
        <span className="role-label" id="role-label">
          {text.label}
        </span>
        <div
          className="seg"
          role="group"
          aria-labelledby="role-label"
          aria-describedby="role-pitch"
        >
          <span
            className="seg-thumb"
            aria-hidden="true"
            style={{ "--k": active } as React.CSSProperties}
          />
          {roles.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={role === value}
              onClick={() => setRole(value)}
            >
              {text.names[value]}
            </button>
          ))}
        </div>
      </div>
      <p className="role-pitch" id="role-pitch" aria-live="polite">
        <RichText text={text.pitch[role]} />
      </p>
    </div>
  );
}
