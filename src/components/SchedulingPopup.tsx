import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface SchedulingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulingPopup = ({ isOpen, onClose }: SchedulingPopupProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consultoria-gratuita" });
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

  useEffect(() => {
    if (isOpen) {
      (async function () {
        const cal = await getCalApi({ namespace: "consultoria-gratuita" });
        cal("modal", {
          calLink: "krezco.digital/consultoria-gratuita",
          config: { layout: "month_view" }
        });
      })();
    }
  }, [isOpen]);

  // Solo retornamos null porque Cal.com maneja el modal
  return null;
};

export default SchedulingPopup;