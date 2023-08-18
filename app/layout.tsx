import Styles from "./layout.module.scss";
import "styles/app.scss";
export const metadata = {
  title: "اسنپ فود",
  description: "لیست فروشگاه ها",
};

import Providers from "@/utils/provider";
import React from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={Styles["public-layout"]}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
