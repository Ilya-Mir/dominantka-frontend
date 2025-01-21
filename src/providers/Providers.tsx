import { appWithTranslation } from "next-i18next";
import React from "react";

const ProvidersComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export const Providers = appWithTranslation(ProvidersComponent);