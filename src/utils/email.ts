/**
 * Triggers the email compose client.
 * - On Mobile: Uses native 'mailto:' protocol which works perfectly.
 * - On Desktop/Laptop: Opens the official web-based Gmail composer in a new tab
 *   to bypass broken protocol handlers or default app misconfigurations.
 */
export const triggerEmailInquiry = (subject: string, body: string) => {
  const recipient = "hiltonplasticvalve1993@gmail.com";
  
  // Detect if the user is browsing on a mobile device
  const isMobile = typeof window !== "undefined" && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (isMobile) {
    window.location.href = mailtoUrl;
  } else {
    // Laptop/Desktop: Open Gmail web composer directly in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }
};
