export type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PolicySource = { label: string; href: string };

export type Policy = {
  slug: string;
  number: number;
  title: string;
  shortTitle: string;
  category: "Governance" | "People and safeguarding" | "Data and communications" | "Funding and partnerships" | "Operations";
  summary: string;
  owner: string;
  sections: PolicySection[];
  sources?: PolicySource[];
};

export const policyVersion = "1.0";
export const policyPublished = "13 August 2026";
export const policyReview = "13 August 2028";

export const policies: Policy[] = [
  {
    slug: "governance-accountability",
    number: 1,
    title: "Governance and Accountability Policy",
    shortTitle: "Governance and accountability",
    category: "Governance",
    summary: "Sets oversight, decision-making and record-keeping standards for Punjabi Samvad.",
    owner: "Governing Body",
    sections: [
      { title: "Purpose", paragraphs: ["Punjabi Samvad uses its authority, funds and assets for its registered charitable objectives. This policy assigns oversight duties and records how the organisation makes significant decisions."] },
      { title: "Governing Body duties", bullets: ["Approve strategy, annual plans and budgets.", "Review programme performance, finance, safeguarding and major risks.", "Monitor statutory filings, registrations and donor obligations.", "Oversee senior leadership and conflicts of interest.", "Record decisions, owners and follow-up dates in meeting minutes."] },
      { title: "Delegated authority", paragraphs: ["The Governing Body sets written financial and operational approval limits. A person may exercise only the authority assigned to their role. No one may approve a transaction or contract in which they have an undisclosed interest."] },
      { title: "Accountability", paragraphs: ["Punjabi Samvad keeps records that allow the Governing Body, auditors, donors and regulators to review its decisions and use of funds. The organisation corrects identified control failures and records the action taken."] },
    ],
  },
  {
    slug: "code-of-conduct",
    number: 2,
    title: "Code of Conduct and Ethics",
    shortTitle: "Code of conduct and ethics",
    category: "People and safeguarding",
    summary: "Defines the conduct expected from anyone who represents Punjabi Samvad.",
    owner: "President and Governing Body",
    sections: [
      { title: "Who must follow this code", paragraphs: ["Governing Body members, employees, consultants, volunteers, interns, facilitators and contractors must follow this code while representing Punjabi Samvad."] },
      { title: "Expected conduct", bullets: ["Treat participants and colleagues with dignity.", "Protect confidential information and organisational assets.", "Maintain professional boundaries.", "Declare conflicts of interest.", "Follow safeguarding, finance and safety procedures.", "Report suspected misconduct or risk."] },
      { title: "Prohibited conduct", bullets: ["Harassment, discrimination, bullying or retaliation.", "Child abuse, sexual exploitation or abuse of power.", "Fraud, bribery, theft or falsification of records.", "Misuse of participant information, funds or programme access.", "Intoxication during duties when it affects safety or conduct."] },
      { title: "Response", paragraphs: ["Punjabi Samvad may remove a person from duties while it assesses a safety or misconduct concern. Proven misconduct may lead to corrective action, termination of engagement, recovery of funds or a report to the authorities."] },
    ],
  },
  {
    slug: "conflict-of-interest",
    number: 3,
    title: "Conflict of Interest Policy",
    shortTitle: "Conflict of interest",
    category: "Governance",
    summary: "Requires disclosure and independent handling of personal interests in organisational decisions.",
    owner: "Governing Body",
    sections: [
      { title: "Conflicts", paragraphs: ["A conflict exists when a financial interest, family connection, personal relationship, business role or other obligation could influence a Punjabi Samvad decision or create a reasonable appearance of influence."] },
      { title: "Disclosure", paragraphs: ["Governing Body members and staff must disclose a conflict as soon as they identify it. Governing Body members and senior personnel must also complete periodic declarations."] },
      { title: "Managing a conflict", bullets: ["Record the disclosure.", "Exclude the conflicted person from evaluation, negotiation and voting.", "Ask the person to leave the discussion when needed.", "Record who made the final decision and why."] },
      { title: "Failure to disclose", paragraphs: ["Punjabi Samvad may review or cancel an affected decision and take action against a person who withheld a material conflict."] },
    ],
  },
  {
    slug: "anti-fraud-bribery-corruption",
    number: 4,
    title: "Anti-Fraud, Anti-Bribery and Anti-Corruption Policy",
    shortTitle: "Anti-fraud and anti-corruption",
    category: "Governance",
    summary: "Prohibits fraud, bribery, kickbacks and deliberate misuse of resources.",
    owner: "Governing Body and Finance Lead",
    sections: [
      { title: "Prohibited acts", bullets: ["Offer, request or accept a bribe or kickback.", "Create false bills, vendors, participants or attendance records.", "Divert funds, supplies or opportunities for personal use.", "Manipulate procurement or conceal an irregularity.", "Retaliate against a person who reports a concern in good faith."] },
      { title: "Reporting", paragraphs: ["Report suspected fraud to the President or a Governing Body member who has no connection to the allegation. If the allegation concerns the President, address a confidential written report to a Governing Body member other than the President at the registered office."] },
      { title: "Review and action", paragraphs: ["Punjabi Samvad records each credible allegation, preserves relevant records and assigns an independent reviewer. The organisation may suspend access or payments during the review. It reports suspected criminal conduct to the appropriate authority when required."] },
    ],
  },
  {
    slug: "financial-management",
    number: 5,
    title: "Financial Management and Internal Controls Policy",
    shortTitle: "Financial management",
    category: "Governance",
    summary: "Protects organisational and donor funds through budgets, approvals and traceable records.",
    owner: "Governing Body and Finance Lead",
    sections: [
      { title: "Core records", bullets: ["Books of account and bank records.", "Bills, vouchers and payment approvals.", "Annual and project budgets.", "Project income and expenditure records.", "Grant, tax, statutory and fixed-asset records."] },
      { title: "Budgets and review", paragraphs: ["The appropriate authority approves the annual budget and significant project budgets. The finance lead compares actual spending with approved budgets and raises material variances for review."] },
      { title: "Payments and banking", paragraphs: ["Every payment must support a legitimate purpose, carry the required documents and meet the applicable approval limit. Punjabi Samvad holds organisational funds in authorised accounts in its name and does not use personal accounts to hold those funds."] },
      { title: "Cash and restricted funds", paragraphs: ["Teams minimise cash use. They document advances and settle them within the assigned period. Punjabi Samvad uses restricted funds only for the accepted purpose and maintains the records required by the agreement."] },
    ],
  },
  {
    slug: "procurement-vendors",
    number: 6,
    title: "Procurement and Vendor Management Policy",
    shortTitle: "Procurement and vendors",
    category: "Operations",
    summary: "Sets fair purchasing, vendor checks and documentation standards.",
    owner: "Finance Lead and Programme Lead",
    sections: [
      { title: "Purchasing standard", paragraphs: ["Punjabi Samvad chooses goods and services based on price, quality, suitability, delivery, reliability and programme need."] },
      { title: "Competition and approval", paragraphs: ["Higher-value purchases require quotation comparisons or a documented market assessment under the organisation's current approval schedule. Staff must not split a purchase to avoid an approval or comparison threshold."] },
      { title: "Vendor integrity", bullets: ["Confirm the vendor's identity and payment details.", "Declare staff or Governing Body connections to a vendor.", "Use written scope, price and delivery terms for significant work.", "Retain selection, delivery and payment records."] },
      { title: "Exceptions", paragraphs: ["A responsible officer must document the reason for an emergency purchase, sole-source decision or other exception and obtain the required approval."] },
    ],
  },
  {
    slug: "posh",
    number: 7,
    title: "Prevention of Sexual Harassment at Workplace Policy",
    shortTitle: "POSH",
    category: "People and safeguarding",
    summary: "Prevents workplace sexual harassment and explains the statutory complaint route.",
    owner: "Employer and statutory committee, where applicable",
    sections: [
      { title: "Scope", paragraphs: ["This policy covers employees and work-related interactions at the office, programme sites, schools, meetings, training, events, travel and digital workspaces. Punjabi Samvad applies respectful-conduct standards to every person, while the statutory process under the POSH Act protects an aggrieved woman as defined by that Act."] },
      { title: "Sexual harassment", bullets: ["Unwelcome physical contact or advances.", "A demand or request for a sexual favour.", "Sexually coloured remarks or messages.", "Display of sexual content.", "Other unwelcome verbal, non-verbal or physical conduct of a sexual nature."] },
      { title: "Complaint route", paragraphs: ["A workplace with 10 or more workers must constitute an Internal Committee under section 4 of the POSH Act. The district Local Committee receives complaints when the establishment has fewer than 10 workers or when the complaint concerns the employer. Punjabi Samvad will provide the current committee or district route on request and display the Internal Committee order when the threshold applies."] },
      { title: "Process and protection", paragraphs: ["The committee handling the complaint follows the statutory procedure, time limits and confidentiality rules. Punjabi Samvad gives the committee access to records and witnesses, protects the complainant and participants from retaliation, and acts on lawful recommendations."] },
      { title: "Immediate help", paragraphs: ["A person who faces immediate danger should contact emergency services or the police. A request for workplace support does not prevent a person from using any legal remedy."] },
    ],
    sources: [
      { label: "Sexual Harassment of Women at Workplace Act, 2013", href: "https://www.indiacode.nic.in/handle/123456789/19302" },
      { label: "Section 9: complaint procedure", href: "https://www.indiacode.nic.in/show-data?abv=CEN&actid=AC_CEN_13_14_00009_201314_1517807327213&orderno=9&orgactid=AC_CEN_13_14_00009_201314_1517807327213&statehandle=123456789%2F1362" },
    ],
  },
  {
    slug: "child-safeguarding",
    number: 8,
    title: "Child Safeguarding and Child Protection Policy",
    shortTitle: "Child safeguarding",
    category: "People and safeguarding",
    summary: "Sets conduct, consent and mandatory reporting rules for work involving children.",
    owner: "Safeguarding Focal Person and Governing Body",
    sections: [
      { title: "Core duty", paragraphs: ["Punjabi Samvad puts a child's safety, dignity and best interests first. Every representative must prevent abuse, exploitation, neglect, grooming, corporal punishment and humiliating treatment."] },
      { title: "Safe conduct", bullets: ["Use respectful, age-appropriate language.", "Avoid isolated one-to-one contact unless the programme has approved safeguards.", "Do not exchange sexual messages or images with a child.", "Do not use programme access to form a personal or exploitative relationship.", "Do not give secret gifts, money or favours.", "Use approved consent, attendance, transport and photography procedures."] },
      { title: "Report without delay", paragraphs: ["Section 19 of POCSO requires a person who knows or apprehends that a POCSO offence will occur or has occurred to report it to the Special Juvenile Police Unit or local police. Informing Punjabi Samvad does not replace that legal report. Staff must also alert the Safeguarding Focal Person so the organisation can protect the child and preserve records. Staff must not investigate the alleged offence or confront the alleged offender."] },
      { title: "Child-centred response", paragraphs: ["Listen without pressing for details. Record the child's words, explain the next safety step in language the child understands, and share information only with people responsible for protection or legal reporting. Do not promise secrecy."] },
      { title: "Images and identity", paragraphs: ["Obtain the required parent or guardian consent and the child's assent where the child can give it. Do not publish content that identifies a child connected to an offence, exposes sensitive information or creates a safety risk."] },
      { title: "Residential care", paragraphs: ["Punjabi Samvad does not present itself as a child care institution. If it starts an institution that houses children in need of care and protection or children in conflict with law, it must complete the registration required by section 41 of the Juvenile Justice Act before operating that service."] },
      { title: "Emergency support", paragraphs: ["Call local police or the Special Juvenile Police Unit for a POCSO report. Child Helpline 1098 and emergency number 112 also connect children in crisis to public support."] },
    ],
    sources: [
      { label: "POCSO Act, section 19 reporting duty", href: "https://www.indiacode.nic.in/show-data?abv=CEN&actid=AC_CEN_13_14_00005_201232_1517807323686&orderno=19&orgactid=AC_CEN_13_14_00005_201232_1517807323686&statehandle=123456789%2F1362" },
      { label: "Juvenile Justice Act, section 41", href: "https://www.indiacode.nic.in/show-data?actid=AC_CEN_13_14_000010_201602_1517807328168&orderno=41" },
      { label: "Government Child Helpline 1098", href: "https://www.spniwcd.wcd.gov.in/child-helpline" },
    ],
  },
  {
    slug: "adult-safeguarding",
    number: 9,
    title: "Safeguarding of Adults and Vulnerable Persons Policy",
    shortTitle: "Adult safeguarding",
    category: "People and safeguarding",
    summary: "Protects adult participants from exploitation, abuse and misuse of power.",
    owner: "Safeguarding Focal Person and Programme Leads",
    sections: [
      { title: "Standard", paragraphs: ["Punjabi Samvad protects adult participants from exploitation, abuse, harassment and misuse of power. Staff must consider the added risk created by disability, illness, poverty, social exclusion or dependence on services."] },
      { title: "Prohibited conduct", bullets: ["Seek sexual contact or favours through a programme relationship.", "Exchange assistance, selection or access for personal benefit.", "Threaten, degrade or coerce a participant.", "Exploit financial or social vulnerability.", "Misuse health, identity or safeguarding information."] },
      { title: "Responding to a concern", paragraphs: ["Address immediate safety needs, listen to the adult's wishes and explain any legal or safety limits on confidentiality. Report the concern to the Safeguarding Focal Person. Contact the relevant authority when law requires a report or when an immediate and serious risk demands action."] },
    ],
  },
  {
    slug: "human-resources-equal-opportunity",
    number: 10,
    title: "Human Resources and Equal Opportunity Policy",
    shortTitle: "Human resources and equal opportunity",
    category: "People and safeguarding",
    summary: "Sets fair recruitment, employment and workplace standards.",
    owner: "President and HR Responsible Person",
    sections: [
      { title: "Employment standard", paragraphs: ["Punjabi Samvad bases recruitment and work decisions on role requirements, competence, conduct and performance. The organisation does not permit unlawful discrimination or retaliation."] },
      { title: "Required practices", bullets: ["Issue clear appointment or engagement terms.", "Define duties, supervision and reporting lines.", "Maintain attendance, leave and compensation records.", "Provide a grievance and disciplinary process.", "Apply wage, social-security, safety and working-condition requirements that cover the role.", "Record separation decisions and return organisational property."] },
      { title: "Labour law", paragraphs: ["India brought the four labour codes into force on 21 November 2025. Punjabi Samvad reviews the codes, applicable rules and state requirements against its workforce, role types and work locations. The organisation seeks professional advice when a threshold or worker classification is unclear."] },
    ],
    sources: [
      { label: "Ministry of Labour: implementation of four labour codes", href: "https://labour.gov.in/sites/default/files/pib2209767.pdf" },
    ],
  },
  {
    slug: "grievance-whistleblower",
    number: 11,
    title: "Grievance and Whistleblower Policy",
    shortTitle: "Grievance and whistleblower",
    category: "Governance",
    summary: "Provides a route to report misconduct, safety concerns and workplace grievances.",
    owner: "Governing Body",
    sections: [
      { title: "Concerns covered", bullets: ["Fraud or financial misuse.", "Harassment, discrimination or retaliation.", "Safeguarding failures.", "Serious policy or legal breaches.", "Falsified records or concealed risks.", "Workplace decisions that require formal review."] },
      { title: "How to report", paragraphs: ["Email punjabisamvadasr@gmail.com, call +91 87280 33911, or send a written report to the registered office. Mark sensitive reports 'Confidential: Governing Body'. A report about the President should name a Governing Body member other than the President as the intended recipient."] },
      { title: "Handling", paragraphs: ["Punjabi Samvad acknowledges a report within three working days where contact details are available. It assigns a person who has no conflict with the allegation, protects records, considers immediate safety steps and tells the reporter how the matter will proceed. Statutory complaints, including POSH and POCSO matters, follow their legal routes and timelines."] },
      { title: "Protection and fairness", paragraphs: ["Punjabi Samvad does not retaliate against a person who raises a concern in good faith or helps with a review. A finding that evidence did not substantiate a concern does not make the report malicious. The organisation may act when evidence shows that a person fabricated a complaint or document with intent to deceive."] },
    ],
  },
  {
    slug: "data-protection-privacy",
    number: 12,
    title: "Data Protection and Privacy Policy",
    shortTitle: "Data protection and privacy",
    category: "Data and communications",
    summary: "Controls how Punjabi Samvad collects, uses, protects and deletes personal data.",
    owner: "Privacy Responsible Person",
    sections: [
      { title: "Data covered", paragraphs: ["Punjabi Samvad handles personal data about programme participants, children and parents, staff, volunteers, donors, partners and people who contact the organisation."] },
      { title: "Rules for handling data", bullets: ["State the purpose before or when collecting data.", "Collect only the data needed for that purpose.", "Use data for the stated purpose or another lawful purpose.", "Limit access to authorised roles.", "Correct relevant errors when a person raises them.", "Retain data for a legal, contractual or programme need, then delete or anonymise it.", "Use safeguards suited to the sensitivity and risk."] },
      { title: "High-risk information", paragraphs: ["Teams apply tighter access and sharing controls to children's data, health and mental-health information, HIV-related information, identity documents, complaints and safeguarding records. Staff must not place sensitive case details in public reports or personal messaging groups."] },
      { title: "Children", paragraphs: ["Punjabi Samvad obtains parent or guardian authorisation and the child's assent where appropriate. It does not use children's data for targeted advertising or behavioural monitoring and does not process it in a way likely to harm the child."] },
      { title: "Security incident", paragraphs: ["A person who discovers loss, unauthorised access, mistaken disclosure or another data compromise must alert the Privacy Responsible Person at once. Punjabi Samvad contains the incident, preserves facts, assesses affected people and makes any notice required by law."] },
      { title: "Current legal position", paragraphs: ["The Digital Personal Data Protection Rules, 2025 use staggered commencement dates. Punjabi Samvad applies the safeguards in this policy as its current standard and will update procedures as the remaining provisions take effect."] },
    ],
    sources: [
      { label: "Digital Personal Data Protection Act, 2023", href: "https://www.indiacode.nic.in/handle/123456789/22037" },
      { label: "Digital Personal Data Protection Rules, 2025", href: "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa" },
    ],
  },
  {
    slug: "photography-media-consent",
    number: 13,
    title: "Photography, Media and Informed Consent Policy",
    shortTitle: "Photography, media and consent",
    category: "Data and communications",
    summary: "Protects participants when Punjabi Samvad records or publishes images and stories.",
    owner: "Communications Lead and Programme Lead",
    sections: [
      { title: "Consent", paragraphs: ["Before recording an identifiable participant, the team explains the purpose, intended audience, publication channels and the person's choice to refuse. The team records consent in a form suited to the activity. For children, it obtains parent or guardian authorisation and seeks the child's assent when the child can give it."] },
      { title: "Dignity and safety", bullets: ["Do not stage or misrepresent a participant's experience.", "Do not use degrading images or portray a person as helpless to raise funds.", "Do not reveal health, HIV, mental-health, violence or safeguarding information without a lawful basis and informed consent.", "Do not publish a protected person's identity or location when disclosure creates risk.", "Use minimum identifying detail in captions and filenames."] },
      { title: "Choice and withdrawal", paragraphs: ["A refusal does not affect programme access. A participant may ask Punjabi Samvad to stop future use. The organisation removes content it controls when feasible, but it may not be able to retrieve copies already printed, shared or published by another person."] },
      { title: "Storage", paragraphs: ["The programme lead stores consent records with the media files, limits access and reviews whether continued use remains appropriate before reusing older material."] },
    ],
  },
  {
    slug: "volunteer-intern",
    number: 14,
    title: "Volunteer and Intern Policy",
    shortTitle: "Volunteer and intern",
    category: "People and safeguarding",
    summary: "Sets role, supervision and safeguarding requirements for volunteers and interns.",
    owner: "Programme Lead and Supervisor",
    sections: [
      { title: "Before work starts", bullets: ["Provide a written role and named supervisor.", "Explain hours, location, expenses and permitted tasks.", "Complete code of conduct, confidentiality and safeguarding orientation.", "Use references or screening suited to contact with children or vulnerable participants.", "Explain reporting and emergency routes."] },
      { title: "Boundaries", paragraphs: ["Volunteers and interns may perform only approved duties. They cannot speak for Punjabi Samvad, collect funds, publish participant information or make programme commitments without written authority."] },
      { title: "Supervision and concerns", paragraphs: ["The supervisor checks work, gives feedback and addresses safety or conduct concerns. Punjabi Samvad may pause or end an engagement when the role is no longer available or when conduct, performance or risk requires it."] },
      { title: "Employment status", paragraphs: ["An internship or volunteer role does not remove any employment right that law gives to the person based on the facts of the arrangement. Punjabi Samvad reviews paid, long-term or staff-like roles before classifying them."] },
    ],
  },
  {
    slug: "donation-fundraising-gifts",
    number: 15,
    title: "Donation, Fundraising and Gift Acceptance Policy",
    shortTitle: "Donations, fundraising and gifts",
    category: "Funding and partnerships",
    summary: "Controls donation acceptance, restrictions, receipts and donor influence.",
    owner: "Governing Body and Finance Lead",
    sections: [
      { title: "Acceptance", paragraphs: ["Punjabi Samvad accepts funds and in-kind support that fit its charitable objectives, legal status and programme capacity. The finance team records the donor, amount, date, method and accepted restriction."] },
      { title: "Punjabi Samvad may decline", bullets: ["Funds from an unlawful or suspect source.", "Conditions that conflict with the organisation's objects or participant rights.", "A demand for improper control over selection, procurement or reporting.", "A gift that creates excessive cost, liability or reputational risk.", "A donation that the organisation cannot accept under tax, foreign-contribution or other law."] },
      { title: "Restricted gifts and receipts", paragraphs: ["Punjabi Samvad uses an accepted restricted gift for its stated purpose and records any agreed change. It issues tax receipts only under its current approvals and applicable law. Donors should obtain their own tax advice."] },
      { title: "Foreign contribution", paragraphs: ["Punjabi Samvad will not accept a foreign contribution unless it holds a valid FCRA registration or prior permission for that contribution and uses the required bank route. Website payment details do not constitute confirmation that a foreign donation can be accepted."] },
      { title: "Donor privacy", paragraphs: ["Punjabi Samvad limits donor information to finance, compliance, communication and reporting needs. It does not sell donor data or give a donor access to confidential participant records."] },
    ],
    sources: [
      { label: "FCRA Online Services, Ministry of Home Affairs", href: "https://fcraonline.nic.in/" },
      { label: "FCRA guidance on receiving foreign contribution", href: "https://fcraonline.nic.in/Home/PDF_Doc/Dont_25112021.pdf" },
    ],
  },
  {
    slug: "csr-project-management",
    number: 16,
    title: "CSR Partnership and Project Management Policy",
    shortTitle: "CSR partnership and project management",
    category: "Funding and partnerships",
    summary: "Sets agreement, budget, delivery and evidence standards for funded projects.",
    owner: "Governing Body and Programme Lead",
    sections: [
      { title: "Project set-up", bullets: ["Define the need, participants, geography and objectives.", "Agree activities, responsibilities, schedule and budget.", "Set indicators, evidence and reporting dates.", "Record safeguarding, data, branding and escalation requirements.", "Name the people authorised to approve changes."] },
      { title: "Delivery and finance", paragraphs: ["The programme lead tracks work against the agreed plan. The finance team traces project expenditure to supporting records. Staff raise a material scope, timeline or budget change before implementing it when the agreement requires approval."] },
      { title: "Impact claims", paragraphs: ["Reports distinguish activities, attendance, outputs and measured outcomes. Punjabi Samvad states the method and period behind a figure and does not report an outcome that the available evidence cannot support."] },
      { title: "Close-out", paragraphs: ["The team completes the final narrative and financial reports, resolves unspent or disallowed funds under the agreement, stores core records and records lessons for future work."] },
    ],
  },
  {
    slug: "partner-due-diligence",
    number: 17,
    title: "Partner and Third-Party Due Diligence Policy",
    shortTitle: "Partner and third-party due diligence",
    category: "Funding and partnerships",
    summary: "Requires checks before Punjabi Samvad relies on a partner, consultant or vendor.",
    owner: "Governing Body and Contract Owner",
    sections: [
      { title: "Risk-based checks", bullets: ["Confirm legal identity, address and authorised representatives.", "Review registration, experience and reputation relevant to the work.", "Check conflicts of interest and payment details.", "Assess safeguarding, privacy and financial capacity when the role requires it.", "Review sanctions, litigation or regulatory concerns when relevant."] },
      { title: "Decision", paragraphs: ["The contract owner records the checks, identified risks, controls and approving person. A higher-risk relationship requires stronger contract terms, monitoring or Governing Body approval."] },
      { title: "Contract and monitoring", paragraphs: ["Significant agreements define scope, deliverables, price, confidentiality, data use, safeguarding, intellectual property, termination and reporting. The contract owner monitors delivery and updates due diligence when ownership, risk or scope changes."] },
    ],
  },
  {
    slug: "health-safety-fieldwork",
    number: 18,
    title: "Health, Safety and Fieldwork Policy",
    shortTitle: "Health, safety and fieldwork",
    category: "Operations",
    summary: "Controls travel, venue, emergency and participant safety risks.",
    owner: "Programme Lead and Event Lead",
    sections: [
      { title: "Plan the activity", bullets: ["Assess travel, venue, weather, crowd and local risks.", "Confirm accessibility, toilets, drinking water and emergency exits.", "Set supervision and safeguarding arrangements.", "Keep emergency contacts and participant information needed for safety.", "Brief staff on incident roles and escalation."] },
      { title: "During fieldwork", paragraphs: ["The event lead may pause, change or cancel an activity when conditions create an unacceptable risk. Staff follow approved transport and working-hour arrangements and do not ask a participant or colleague to accept an unsafe task."] },
      { title: "Incident response", paragraphs: ["Address urgent medical and safety needs first. Contact emergency services when needed, inform the programme lead, preserve relevant facts and record the incident. The responsible lead reviews the cause and assigns corrective action."] },
    ],
  },
  {
    slug: "records-retention",
    number: 19,
    title: "Records Management and Retention Policy",
    shortTitle: "Records management and retention",
    category: "Operations",
    summary: "Keeps organisational records accurate, secure and available for their required period.",
    owner: "Records Responsible Person and Finance Lead",
    sections: [
      { title: "Records covered", bullets: ["Governing Body minutes and approvals.", "Registration, tax and statutory records.", "Accounts, audit files and donor agreements.", "Project, procurement and contract records.", "Employment, volunteer and intern records.", "Consent, participant and safeguarding records."] },
      { title: "Retention schedule", paragraphs: ["The responsible team records the legal, tax, donor, employment and programme requirement for each record class in a retention schedule. If two periods apply, the team uses the longer period unless law requires another result. A legal hold or active complaint suspends routine deletion for relevant records."] },
      { title: "Storage and access", paragraphs: ["Punjabi Samvad stores records in an ordered system, limits access by role and protects originals from loss or unauthorised change. It keeps safeguarding, complaint, health and identity records separate from general programme files."] },
      { title: "Disposal", paragraphs: ["At the end of the retention period, the record owner confirms that no hold applies and uses secure deletion, shredding or another method suited to the record. The organisation keeps a disposal log for sensitive or material records."] },
    ],
  },
  {
    slug: "risk-management",
    number: 20,
    title: "Risk Management Policy",
    shortTitle: "Risk management",
    category: "Governance",
    summary: "Requires teams to identify, control and escalate material risks.",
    owner: "Governing Body and Programme Leads",
    sections: [
      { title: "Risk areas", paragraphs: ["Punjabi Samvad assesses risks to participants, staff, funds, programmes, legal compliance, information, partnerships and reputation."] },
      { title: "Risk register", bullets: ["Describe the risk and affected people or assets.", "Rate likelihood and consequence using the approved scale.", "Record existing controls and gaps.", "Assign an owner and due date.", "Record the remaining risk after action."] },
      { title: "Escalation", paragraphs: ["Staff raise an immediate safety, safeguarding, fraud, legal or data risk without waiting for a scheduled review. Programme leads bring material or persistent risks to senior leadership or the Governing Body."] },
      { title: "Review", paragraphs: ["The Governing Body reviews major risks at planned intervals and after a serious incident or significant change in programme, funding, law or operating area."] },
    ],
  },
  {
    slug: "communications-social-media",
    number: 21,
    title: "Communications and Social Media Policy",
    shortTitle: "Communications and social media",
    category: "Data and communications",
    summary: "Controls official statements, programme claims and confidential information.",
    owner: "President and Communications Lead",
    sections: [
      { title: "Authority", paragraphs: ["Only an authorised person may issue an official statement, approve a campaign, respond to media on behalf of Punjabi Samvad or create an organisational social-media account."] },
      { title: "Publication standard", bullets: ["Use approved programme records for statistics.", "State the period and basis of material reach or outcome claims.", "Follow participant consent and child-safeguarding rules.", "Check names, partner marks and factual claims before publication.", "Correct a material error in content Punjabi Samvad controls."] },
      { title: "Confidential information", paragraphs: ["Staff and volunteers must not publish participant records, safeguarding cases, internal disputes, donor-confidential material or personal data without authority. Personal social-media use must not imply that Punjabi Samvad endorses the user's view."] },
      { title: "Incident response", paragraphs: ["Send a media controversy, account compromise or harmful publication to the Communications Lead. Preserve the original content, limit further disclosure and coordinate any correction with the responsible programme and safeguarding or privacy contact."] },
    ],
  },
  {
    slug: "environmental-responsibility",
    number: 22,
    title: "Environmental Responsibility Policy",
    shortTitle: "Environmental responsibility",
    category: "Operations",
    summary: "Reduces avoidable waste and resource use in programmes and events.",
    owner: "Operations Lead and Programme Leads",
    sections: [
      { title: "Operating choices", bullets: ["Reduce single-use materials at events.", "Use water, electricity and fuel with care.", "Reuse or recycle materials when a suitable route exists.", "Consider durability and waste when purchasing.", "Plan travel and printing around programme need."] },
      { title: "Programme delivery", paragraphs: ["A programme or event plan records material environmental risks when they could affect the community, venue or delivery. Teams follow local waste, water and venue rules."] },
      { title: "Learning", paragraphs: ["Punjabi Samvad records practical improvements from its water-conservation and environmental-awareness work and applies them to later activities where they fit."] },
    ],
  },
  {
    slug: "website-privacy",
    number: 23,
    title: "Website Privacy Notice",
    shortTitle: "Website privacy",
    category: "Data and communications",
    summary: "Explains what data the website and its third-party content may receive.",
    owner: "Privacy Responsible Person",
    sections: [
      { title: "Information you send", paragraphs: ["The website has no Punjabi Samvad contact form as of 13 August 2026. If you use an email, telephone, donation service or external social-media link, Punjabi Samvad or that provider may receive the information you choose to send, such as your name, contact details, organisation, payment details or message."] },
      { title: "How Punjabi Samvad uses contact data", bullets: ["Respond to your enquiry.", "Process a donation or requested activity.", "Manage a partnership, volunteer or programme conversation.", "Keep finance, consent, complaint or compliance records.", "Protect the website and organisational systems."] },
      { title: "Facebook content", paragraphs: ["The News and Updates page loads a live Facebook page plugin from Meta. When you visit that page, your browser connects to Facebook and may send Meta your IP address, device or browser information and page request. Meta may use cookies or similar technology under its own terms and privacy notice. Punjabi Samvad does not cache the Facebook feed on this website."] },
      { title: "Sharing and retention", paragraphs: ["Punjabi Samvad shares personal data with authorised staff, service providers, banks, payment providers, professional advisers or authorities when the purpose or law requires it. It does not sell personal data. The organisation keeps data for the applicable enquiry, programme, finance, legal or safeguarding period."] },
      { title: "Your request", paragraphs: ["Email punjabisamvadasr@gmail.com to ask about personal data Punjabi Samvad controls, request a correction or raise a privacy concern. Include enough detail to identify the interaction. Punjabi Samvad may verify identity before releasing or changing personal data."] },
    ],
    sources: [
      { label: "Digital Personal Data Protection Act, 2023", href: "https://www.indiacode.nic.in/handle/123456789/22037" },
      { label: "Digital Personal Data Protection Rules, 2025", href: "https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa" },
    ],
  },
  {
    slug: "website-terms",
    number: 24,
    title: "Website Terms of Use",
    shortTitle: "Website terms of use",
    category: "Data and communications",
    summary: "Sets permitted use, content limits and external-link terms.",
    owner: "Governing Body",
    sections: [
      { title: "Using the website", paragraphs: ["Punjabi Samvad publishes information about its organisation, programmes, partners and ways to participate. You may read and share links to public pages for lawful purposes."] },
      { title: "You must not", bullets: ["Attempt unauthorised access or disrupt the website.", "Copy substantial content for commercial use without permission.", "Misrepresent Punjabi Samvad, its results or a partnership.", "Use the name, logo or content to solicit funds without authority.", "Upload or transmit unlawful or harmful material through a linked service."] },
      { title: "Accuracy and professional advice", paragraphs: ["Punjabi Samvad checks material organisational information before publication and may correct or update it. Website content gives general information. It does not provide legal, medical, tax or mental-health advice."] },
      { title: "External services", paragraphs: ["External links, Facebook content, maps and payment services operate under their providers' terms. A link identifies a useful source or service and does not grant Punjabi Samvad control over that provider's content or availability."] },
      { title: "Rights", paragraphs: ["Punjabi Samvad retains rights in its original text, photographs, logo and other material. Third-party names and marks belong to their owners. Contact punjabisamvadasr@gmail.com for permission or to report a rights concern."] },
    ],
  },
  {
    slug: "cookie-notice",
    number: 25,
    title: "Cookie and Third-Party Content Notice",
    shortTitle: "Cookies and third-party content",
    category: "Data and communications",
    summary: "Identifies website technologies and the live Facebook embed.",
    owner: "Privacy Responsible Person",
    sections: [
      { title: "Current website use", paragraphs: ["As of 13 August 2026, Punjabi Samvad runs no first-party advertising or analytics cookies on this website. The site uses hosting and browser technologies needed to deliver pages, fonts, images and security functions."] },
      { title: "Facebook embed", paragraphs: ["The News and Updates page includes live Facebook content. Loading that page connects your browser to Meta. Meta may read or set cookies and receive device, browser, IP and request information under its own policies, whether or not you have a Facebook account."] },
      { title: "Your controls", paragraphs: ["You can block or delete cookies through your browser. Blocking third-party content may prevent the Facebook feed from loading. You can use the direct Facebook link instead, subject to Meta's terms."] },
      { title: "Future changes", paragraphs: ["Punjabi Samvad will update this notice and add any consent control required by law before introducing non-essential first-party analytics, advertising or similar tracking."] },
    ],
  },
];

export const policyCategories = [
  "Governance",
  "People and safeguarding",
  "Data and communications",
  "Funding and partnerships",
  "Operations",
] as const;

export function getPolicy(slug: string) {
  return policies.find((policy) => policy.slug === slug);
}
