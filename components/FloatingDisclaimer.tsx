export function FloatingDisclaimer() {
  return (
    <aside
      className="fixed bottom-4 right-4 z-40 max-w-[92vw] sm:max-w-sm rounded-lg border-2 border-black bg-cyan-600/90 text-black shadow-[6px_6px_0_0_#000] backdrop-blur-sm"
      role="note"
      aria-label="Store disclaimer"
    >
      <div className="p-3 sm:p-4">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wide">
          Quick note
        </p>
        <p className="mt-1 text-sm sm:text-base leading-snug">
          🤖AI helps with our flyers!
          <br/><br/>
          🫀🫀🫀The art in shop is made by humans. </p>
      </div>
    </aside>
  );
}

