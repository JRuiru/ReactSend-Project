# seemyhealth.ai DNS Backup & Migration Plan — May 2026

---

## Migration Plan: Wix → GoDaddy → Cloudflare

### Phase 1: Transfer domain from Wix to GoDaddy
1. In Wix: Go to **Domain Settings > Transfer away from Wix**
2. Unlock the domain
3. Copy the **authorization/EPP code**
4. In GoDaddy: Go to **Domains > Transfer** and enter `seemyhealth.ai`
5. Paste the EPP code when prompted
6. Approve the transfer (may take 5-7 days)
7. During transfer: DNS stays on Wix nameservers — nothing breaks

### Phase 2: Point GoDaddy nameservers to Cloudflare
1. Sign up at **cloudflare.com** (free plan)
2. Click **Add a Site** and enter `seemyhealth.ai`
3. Cloudflare will auto-scan and import existing DNS records
4. **Verify all records imported** against the backup below — especially MX, SendGrid CNAMEs, Firebase, and TXT records
5. Cloudflare gives you 2 nameservers (e.g. `anna.ns.cloudflare.com`, `bob.ns.cloudflare.com`)
6. In GoDaddy: Go to **Domain Settings > Nameservers > Change** and enter the Cloudflare nameservers
7. Propagation takes up to 24-48 hours (usually faster)
8. **Test:** Send a test email via SendGrid, check Google Workspace email still works

### Phase 3: Connect Webflow website
1. In Webflow: Go to **Project Settings > Hosting > Custom Domain** and add `seemyhealth.ai`
2. Webflow will give you an A record or CNAME
3. In Cloudflare: **Delete the old Wix A records** (185.230.63.x) and **add Webflow's records**
4. Delete the `www → cdn1.wixdns.net` CNAME and add `www → Webflow` if needed
5. Site is now live on Webflow

### Phase 4 (Optional): Transfer registrar to Cloudflare
1. Wait 60 days after the GoDaddy transfer (ICANN requirement)
2. In Cloudflare: Go to **Registrar > Transfer** and enter `seemyhealth.ai`
3. Get a new EPP code from GoDaddy and paste it
4. Cloudflare becomes both registrar and DNS manager — one place for everything
5. Cheaper renewals (at-cost pricing, no markup)

### What stays working throughout
- **Google Workspace email** — MX records don't change
- **SendGrid emails** — CNAME records carry over
- **Firebase** — DKIM and verification records carry over
- **Website** — brief downtime only when swapping A records to Webflow

### What to watch out for
- Don't delete DNS records before Cloudflare has imported them
- The `www` CNAME pointing to `cdn1.wixdns.net` must be updated when moving to Webflow
- The 3 Wix A records (185.230.63.x) must be replaced with Webflow — don't leave them

---

## Current DNS Records (Exported from Wix DNS)

## A Records (Wix hosting — replace with Webflow later)
| Host | Value | TTL |
|---|---|---|
| seemyhealth.ai | 185.230.63.107 | 1 Hour |
| seemyhealth.ai | 185.230.63.186 | 1 Hour |
| seemyhealth.ai | 185.230.63.171 | 1 Hour |

## CNAME Records
| Host | Value | TTL | Purpose |
|---|---|---|---|
| 45rq5c5ueabe | gv-c2nmqk52nkgf6c.dv.googlehosted.com | 1 Hour | Google verification |
| 60124329 | sendgrid.net | 1 Hour | SendGrid verification |
| firebase1._domainkey | mail-seemyhealth-ai.dkim1._domainkey.firebasemail.com | 1 Hour | Firebase DKIM |
| firebase2._domainkey | mail-seemyhealth-ai.dkim2._domainkey.firebasemail.com | 1 Hour | Firebase DKIM |
| url2449 | sendgrid.net | 1 Hour | SendGrid link branding |
| www | cdn1.wixdns.net | 1 Hour | Wix www redirect |
| 60124329.www | sendgrid.net | 1 Hour | SendGrid www verification |
| s1._domainkey.www | s1.domainkey.u60124329.wl080.sendgrid.net | 1 Hour | SendGrid www DKIM |
| s2._domainkey.www | s2.domainkey.u60124329.wl080.sendgrid.net | 1 Hour | SendGrid www DKIM |
| em8459.www | u60124329.wl080.sendgrid.net | 1 Hour | SendGrid www return path |
| url5723.www | sendgrid.net | 1 Hour | SendGrid www link branding |
| url2354 | sendgrid.net | 1 Hour | SendGrid link branding |
| em3602 | u60124329.wl080.sendgrid.net | 1 Hour | SendGrid return path |
| s1._domainkey | s1.domainkey.u60124329.wl080.sendgrid.net | 1 Hour | SendGrid DKIM |
| s2._domainkey | s2.domainkey.u60124329.wl080.sendgrid.net | 1 Hour | SendGrid DKIM |

## TXT Records
| Host | Value | TTL | Purpose |
|---|---|---|---|
| @ | firebase=seemyhealth-91413 | 1 Hour | Firebase verification |
| @ | v=spf1 include:_spf.google.com ~all | 1 Hour | SPF for Google Workspace |
| _dmarc.www | v=DMARC1; p=none; | 1 Hour | DMARC www |
| _dmarc | v=DMARC1; p=none; | 1 Hour | DMARC root |

## MX Records (Google Workspace)
| Host | Value | Priority | TTL |
|---|---|---|---|
| seemyhealth.ai | aspmx.l.google.com | 10 | 1 Hour |
| seemyhealth.ai | alt1.aspmx.l.google.com | 20 | 1 Hour |
| seemyhealth.ai | alt2.aspmx.l.google.com | 30 | 1 Hour |
| seemyhealth.ai | alt3.aspmx.l.google.com | 40 | 1 Hour |
| seemyhealth.ai | alt4.aspmx.l.google.com | 50 | 1 Hour |

## NS Records
| Host | Value |
|---|---|
| seemyhealth.ai | ns8.wixdns.net |
| seemyhealth.ai | ns9.wixdns.net |
