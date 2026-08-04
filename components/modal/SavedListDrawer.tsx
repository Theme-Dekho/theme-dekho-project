"use client";

import { useSite } from "@/lib/site-context";
import { cn } from "@/lib/utils";

export default function SavedListDrawer() {
  const { savedDrawer, savedItems, removeSaved, openQuoteModal } = useSite();

  return (
    <>
      <div className={cn("saved-overlay", savedDrawer.isOpen && "open")} onClick={savedDrawer.close} />
      <div className={cn("saved-drawer", savedDrawer.isOpen && "open")}>
        <div className="saved-drawer-header">
          <div>
            <h3>🔖 My Saved List</h3>
            <p>
              {savedItems.length} item{savedItems.length !== 1 ? "s" : ""} saved
            </p>
          </div>
          <button className="saved-drawer-close" onClick={savedDrawer.close}>
            &times;
          </button>
        </div>

        <div className="saved-drawer-body">
          {savedItems.length === 0 ? (
            <div className="saved-empty">
              <div className="empty-icon">🔖</div>
              <p>No saved items yet!</p>
              <span>Click 🔖 on any website card to save it here.</span>
            </div>
          ) : (
            savedItems.map((item) => (
              <div className="saved-item" key={item.id}>
                <div className="saved-item-img">🌐</div>
                <div className="saved-item-info">
                  <div className="saved-item-name">{item.name}</div>
                  <div className="saved-item-cat">📂 {item.label}</div>
                  <div className="saved-item-actions">
                    <a href="https://themedekho.com/" target="_blank" rel="noreferrer" className="si-link">
                      🔗 View Details
                    </a>
                    <button
                      className="si-quote-btn"
                      onClick={() => {
                        savedDrawer.close();
                        openQuoteModal(item.name);
                      }}
                    >
                      📩 Get Quote
                    </button>
                  </div>
                </div>
                <button className="saved-item-remove" onClick={() => removeSaved(item.productId)} title="Remove">
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {savedItems.length > 0 && (
          <div className="saved-drawer-footer">
            <button className="saved-quote-all">📩 Get Quote for All Saved Items</button>
          </div>
        )}
      </div>
    </>
  );
}
