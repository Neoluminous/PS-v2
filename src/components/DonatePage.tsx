import { ArrowUpRight, BadgeCheck, Building2, CreditCard, HeartHandshake, Mail, QrCode, ShieldCheck } from "lucide-react";

const accounts = [
  { bank: "State Bank of India", branch: "Karmon Deori, Amritsar", number: "32316633075", ifsc: "SBIN0001286" },
  { bank: "Yes Bank", branch: "Ranjit Avenue", number: "084494600000021", ifsc: "YESB0000844" },
];

export default function DonatePage() {
  return <>
    <section className="donate-options section"><div className="container">
      <div className="donate-heading"><span className="eyebrow">Choose how to give</span><h2>A direct way to support the work.</h2><p>Use UPI, the secure Razorpay checkout, or a direct bank transfer within India.</p></div>
      <div className="donate-grid">
        <article className="upi-panel">
          <div className="donate-panel-copy"><span><QrCode/>Scan &amp; pay</span><h3>Pay with any UPI app</h3><p>Open your preferred UPI app and scan the official Punjabi Samvad payment code.</p></div>
          <img className="donation-qr" src="/images/donation-qr.png" alt="Punjabi Samvad official UPI payment QR code"/>
          <a className="download-link" href="/images/donation-qr.png" download>Download QR code</a>
        </article>
        <article className="razorpay-panel">
          <div><span className="payment-kicker"><CreditCard/>Online payment</span><h3>Donate securely with Razorpay</h3><p>Continue to Punjabi Samvad&apos;s official hosted checkout to pay by supported online payment methods.</p></div>
          <div className="payment-marks"><img src="/images/razorpay.webp" alt="Razorpay"/><img src="/images/creditcards.webp" alt="Supported payment methods"/></div>
          <a className="button" href="https://rzp.io/rzp/mVLOzGTt" target="_blank" rel="noreferrer">Continue to secure payment <ArrowUpRight size={17}/></a>
          <small><ShieldCheck/>Payment is completed on Razorpay. Punjabi Samvad does not collect your card details on this website.</small>
        </article>
      </div>
    </div></section>
    <section className="bank-section section"><div className="container">
      <div className="bank-heading"><span className="eyebrow">India only</span><h2>Direct bank transfer</h2><p>Both accounts are held in the name of Punjabi Samvad and are current accounts.</p></div>
      <div className="bank-grid">{accounts.map(account => <article className="bank-card" key={account.bank}>
        <Building2/><div><span>Bank account</span><h3>{account.bank}</h3></div>
        <dl><div><dt>Account name</dt><dd>Punjabi Samvad</dd></div><div><dt>Account number</dt><dd>{account.number}</dd></div><div><dt>IFSC</dt><dd>{account.ifsc}</dd></div><div><dt>Branch</dt><dd>{account.branch}</dd></div><div><dt>Account type</dt><dd>Current</dd></div></dl>
      </article>)}</div>
      <div className="donation-trust"><span><ShieldCheck/><strong>Secure options</strong><small>UPI, Razorpay and bank transfer</small></span><span><BadgeCheck/><strong>80G approved</strong><small>Tax benefit subject to applicable provisions</small></span><span><HeartHandshake/><strong>Receipt support</strong><small>Share your payment details with our team</small></span><a href="mailto:punjabisamvadasr@gmail.com?subject=Donation%20Receipt"><Mail/>Request a receipt</a></div>
    </div></section>
  </>;
}
