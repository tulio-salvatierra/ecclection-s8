"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function PDFModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal in this session
    const seen = sessionStorage.getItem("announcement-modal-seen");
    if (!seen) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setHasSeenModal(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen in session storage so it doesn't show again this session
    sessionStorage.setItem("announcement-modal-seen", "true");
  };

  if (hasSeenModal && !isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="text-center px-6 pt-6 pb-4 flex-shrink-0">
          <DialogTitle className="font-brand text-3xl sm:text-4xl text-foreground mb-2">
            ECCLECTION
          </DialogTitle>
          <p className="font-brand text-xl sm:text-2xl text-primary mt-2">
            A Short Pause for Something Special
          </p>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          <div className="space-y-6 text-foreground">
            <p className="text-base sm:text-lg leading-relaxed">
              We'll be closed for a few weeks while we regroup, refresh, dust the shelves, and welcome in exciting new treasures 
              from a recently closed, much-loved surplus store.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed">
              These new additions will bring extra fun, whimsy, art supplies, and unexpected finds to our already eclectic mix — 
              and we can't wait to share them with you.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed">
              We're hoping to reopen within the month, likely toward the 
              end of the month, with fresh energy and a shop full of surprises.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed">
              Thank you for your patience, your support, and for being part of our 
              community. We're excited for these changes and 
              the opportunity to serve you even better in the New Year.
            </p>
            
            <p className="font-brand text-lg sm:text-xl text-primary text-center mt-8">
              We'll be back in February 7th — the magic is worth the wait
            </p>
            
            <div className="border-t border-border pt-6 mt-8 space-y-3 text-center">
              <p className="font-brand text-lg text-foreground">Ecclection</p>
              <p className="text-sm sm:text-base text-muted-foreground">
                6059 W. Irving Park
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground mt-4">
                <p>Follow us for reopening updates:</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base">
                <span>Facebook & TikTok: <span className="text-primary">@Ecclection</span></span>
                <span>Instagram: <span className="text-primary">@EcclectionChicago</span></span>
              </div>
              <p className="text-sm sm:text-base text-primary mt-2">
                www.ecclection.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 border-t border-border flex justify-center flex-shrink-0">
          <Button onClick={handleClose} className="font-brand px-8">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
