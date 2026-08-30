"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const facebookPage = "https://www.facebook.com/PunjabiSamvad999/";

export default function FacebookUpdates() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [embedWidth, setEmbedWidth] = useState(500);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const updateWidth = () => setEmbedWidth(Math.max(180, Math.min(500, Math.floor(container.clientWidth))));
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const timelineEmbed = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPage)}&tabs=timeline&width=${embedWidth}&height=842&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`;

  return <section className="facebook-updates" aria-labelledby="facebook-updates-title">
    <div className="facebook-updates-copy">
      <span className="facebook-live-label"><i />Recent updates</span>
      <h2 id="facebook-updates-title">Latest news &amp; updates.</h2>
      <p>Recent activities and announcements from Punjabi Samvad.</p>
      <p className="facebook-note">This timeline is loaded live from Facebook. If Facebook blocks the preview because of your browser or privacy settings, open the page directly.</p>
      <a className="button" href={facebookPage} target="_blank" rel="noreferrer">Open Punjabi Samvad on Facebook <ExternalLink size={16} /></a>
    </div>
    <div className="facebook-frame-wrap">
      <a className="facebook-page-bar" href={facebookPage} target="_blank" rel="noreferrer" aria-label="Visit Punjabi Samvad on Facebook">
        <img src="/favicon.png" alt="" />
        <span><strong>Punjabi Samvad</strong><small>Official Facebook updates</small></span>
        <ExternalLink size={17} />
      </a>
      <div className="facebook-timeline-crop" ref={timelineRef}><iframe key={embedWidth} title="Latest posts from Punjabi Samvad on Facebook" src={timelineEmbed} width={embedWidth} height="842" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
    </div>
  </section>;
}
