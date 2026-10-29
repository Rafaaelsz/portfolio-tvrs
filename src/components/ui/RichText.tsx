import { Fragment } from "react";

/** Renderiza `**trecho**` como <strong>. Só isso: o texto vem dos dicionários, não do usuário. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text
        .split("**")
        .map((part, index) =>
          index % 2 === 1 ? (
            <strong key={index}>{part}</strong>
          ) : (
            <Fragment key={index}>{part}</Fragment>
          ),
        )}
    </>
  );
}
