import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const SchedulingPopup = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultoria-gratuita" });
      cal("floatingButton", {
        calLink: "krezco.digital/consultoria-gratuita",
        config: { layout: "month_view" }
      });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#21CFFF" },
          dark: { "cal-brand": "#21CFFF" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return null; // El botón flotante se renderiza automáticamente por Cal.com
};

export default SchedulingPopup;