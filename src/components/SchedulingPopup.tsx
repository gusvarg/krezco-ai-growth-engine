import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface SchedulingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulingPopup = ({ isOpen, onClose }: SchedulingPopupProps) => {
  useEffect(() => {
    if (isOpen) {
      (async function () {
        const cal = await getCalApi({ namespace: "consultoria-gratuita" });
        cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#12131D" },
            dark: { "cal-brand": "#fafafa" }
          },
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      })();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0 glass-strong">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Agenda tu Consultoría Gratuita
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>
        <div className="flex-1 p-6 pt-4">
          <button
            data-cal-namespace="consultoria-gratuita"
            data-cal-link="krezco.digital/consultoria-gratuita"
            data-cal-config='{"layout":"month_view"}'
            className="w-full h-full min-h-[500px] rounded-lg overflow-hidden"
            style={{ border: 'none', background: 'transparent' }}
          >
            {/* Cal.com embed will replace this button */}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SchedulingPopup;