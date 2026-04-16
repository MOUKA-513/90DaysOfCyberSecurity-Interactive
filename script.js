const daysData = [];

function addDay(day, title, desc, url, label, phase) {
  daysData.push({ day, title, desc, resourceUrl: url, resourceLabel: label, phase });
}

const netRes = "https://www.professormesser.com/network-plus/n10-009/";
const secRes = "https://www.professormesser.com/security-plus/sy0-701/";
addDay(1, "OSI Model & Encapsulation", "Learn layers, PDU, and how data flows.", netRes, "Prof Messer: OSI deep dive", "phase1");
addDay(2, "TCP/IP Suite & Protocols", "TCP vs UDP, ports, and common protocols.", netRes, "TCP/IP explained", "phase1");
addDay(3, "IPv4 Addressing & Subnetting", "Subnet masks, CIDR, and basic subnet calculation.", "https://www.youtube.com/watch?v=ec5uyT-dzD0", "Subnetting mastery", "phase1");
addDay(4, "Network Devices & Cabling", "Routers, switches, firewalls, APs.", netRes, "Network hardware", "phase1");
addDay(5, "Ethernet & Switching", "MAC addresses, ARP, VLAN basics.", netRes, "Switching concepts", "phase1");
addDay(6, "Routing Fundamentals", "Static vs dynamic routing, routing tables.", "https://www.youtube.com/watch?v=8Z9qTF6tqWg", "Routing intro", "phase1");
addDay(7, "Wireless & Cellular Networks", "WiFi standards, WPA, 4G/5G security.", netRes, "Wireless security", "phase1");
addDay(8, "Security Threats & Attack Vectors", "Malware, phishing, DoS, social engineering.", secRes, "Threat landscape", "phase1");
addDay(9, "Cryptography Basics", "Symmetric/asymmetric, hashing, PKI.", secRes, "Crypto 101", "phase1");
addDay(10, "Access Control & AAA", "Authentication, RADIUS, TACACS+, MFA.", secRes, "AAA framework", "phase1");
addDay(11, "Network Security Appliances", "Firewalls, IDS/IPS, content filters.", secRes, "Firewall & IPS", "phase1");
addDay(12, "Endpoint Security", "Antivirus, EDR, host-based firewall.", secRes, "Endpoint protection", "phase1");
addDay(13, "Vulnerability Management", "Scanning, CVSS, patch management.", secRes, "Vuln management", "phase1");
addDay(14, "Incident Response & Forensics", "IR lifecycle, evidence collection.", secRes, "IR process", "phase1");

for (let i = 15; i <= 21; i++) {
  let topics = ["Linux Filesystem Hierarchy", "Basic Commands (ls, cd, cp, mv)", "File permissions (chmod, chown)", "Process management (ps, top, kill)", "Package managers (apt, yum)", "Linux networking (ip, ss, netstat)", "Text editors (vim, nano)"];
  let urls = ["https://linuxjourney.com/lesson/the-filesystem", "https://linuxjourney.com/lesson/ls-command", "https://linuxjourney.com/lesson/file-permissions", "https://linuxjourney.com/lesson/process-management", "https://linuxjourney.com/lesson/package-management", "https://linuxjourney.com/lesson/network-configuration", "https://www.youtube.com/watch?v=ggdF2W2Celk"];
  addDay(i, topics[i-15], "Hands-on Linux command line practice.", urls[i-15], "Linux Journey", "phase2");
}
addDay(22, "Shell scripting basics", "Variables, conditionals, loops, cron jobs.", "https://www.youtube.com/watch?v=fgIRHOBbT9Q", "Bash scripting", "phase2");
addDay(23, "User & group management", "sudo, /etc/passwd, useradd.", "https://linuxjourney.com/lesson/users-groups", "Users & groups", "phase2");
addDay(24, "Linux services & systemd", "Starting, enabling services, journalctl.", "https://www.digitalocean.com/community/tutorials/understanding-systemd-units", "Systemd guide", "phase2");
addDay(25, "Firewall (iptables/ufw)", "Rules, allow/deny, NAT basics.", "https://ubuntu.com/server/docs/security-firewall", "UFW tutorial", "phase2");
addDay(26, "SSH & secure remote access", "Key generation, config hardening.", "https://www.ssh.com/academy/ssh", "SSH essentials", "phase2");
addDay(27, "Log analysis (journalctl, rsyslog)", "Monitoring logs for security events.", "https://www.loggly.com/ultimate-guide/linux-logging-basics/", "Linux logging", "phase2");
addDay(28, "Linux hardening", "CIS benchmarks, remove unnecessary services.", "https://www.cyberciti.biz/tips/linux-security.html", "Hardening tips", "phase2");

const pyBase = "https://realpython.com/python-basics/";
addDay(29, "Python setup & syntax", "Variables, data types, basic I/O.", pyBase, "Python intro", "phase2");
addDay(30, "Control flow (if/else, loops)", "Conditionals, for/while loops.", pyBase, "Loops & conditions", "phase2");
addDay(31, "Data structures", "Lists, tuples, dictionaries, sets.", "https://www.w3schools.com/python/python_lists.asp", "Python collections", "phase2");
addDay(32, "Functions & scope", "Defining functions, return values, lambda.", "https://realpython.com/defining-your-own-python-function/", "Functions", "phase2");
addDay(33, "File handling", "Reading/writing files, CSV parsing.", "https://realpython.com/read-write-files-python/", "File I/O", "phase2");
addDay(34, "Error handling", "Try/except, custom exceptions.", "https://realpython.com/python-exceptions/", "Exceptions", "phase2");
addDay(35, "Modules & packages", "Import, pip, virtual environments.", "https://realpython.com/python-modules-packages/", "Modules", "phase2");
addDay(36, "Regex for security", "Pattern matching, log filtering.", "https://realpython.com/regex-python/", "Regex tutorial", "phase2");
addDay(37, "Socket programming basics", "TCP/UDP clients/servers.", "https://realpython.com/python-sockets/", "Sockets", "phase2");
addDay(38, "Python & APIs", "Requests library, parsing JSON.", "https://realpython.com/python-requests/", "REST APIs", "phase2");
addDay(39, "Automate port scanner", "Build a simple scanner with sockets.", "https://www.youtube.com/watch?v=wUli_o71ziE", "Port scanner lab", "phase2");
addDay(40, "Log parsing script", "Analyze auth logs, detect failed attempts.", "https://www.youtube.com/watch?v=4TPYBqO0zB0", "Log analysis script", "phase2");
addDay(41, "Hash cracking with python", "MD5, SHA, dictionary attack.", "https://www.geeksforgeeks.org/md5-hash-python/", "Hash demo", "phase2");
addDay(42, "Build a simple keylogger (ethical)", "Capture keystrokes for learning.", "https://www.youtube.com/watch?v=1WgN3eLvRQA", "Keylogger concept", "phase2");

const wireshark = "https://www.wireshark.org/docs/wsug_html_chunked/";
for (let i=43; i<=49; i++) {
  let topicsW = ["Wireshark installation & UI", "Capture filters", "Display filters", "Follow TCP streams", "Analyze HTTP traffic", "ARP & ICMP analysis", "Detect malicious traffic"];
  addDay(i, topicsW[i-43], "Packet analysis with Wireshark.", wireshark, "Wireshark docs", "phase3");
}
addDay(50, "tcpdump essentials", "Capture, read pcap files, filters.", "https://www.tcpdump.org/tcpdump_man.html", "tcpdump manual", "phase3");
addDay(51, "Suricata IDS/IPS", "Rules, alert logging, eve.json.", "https://suricata.readthedocs.io/", "Suricata guide", "phase3");
addDay(52, "Snort basics", "Rule writing, inline mode.", "https://www.snort.org/documents", "Snort docs", "phase3");
addDay(53, "Zeek (Bro) intro", "Network monitoring framework.", "https://docs.zeek.org/", "Zeek handbook", "phase3");
addDay(54, "NetFlow analysis", "Flow data, nfdump, SiLK.", "https://www.ntop.org/", "ntop tools", "phase3");
addDay(55, "Combine IDS alerts", "Correlate alerts with pcap.", "https://www.youtube.com/watch?v=ZgWgI0n1P0w", "IDS lab", "phase3");
addDay(56, "Incident handling with packet data", "Extract files from pcap.", wireshark, "PCAP forensics", "phase3");

const gitRes = "https://www.atlassian.com/git/tutorials";
addDay(57, "Git basics: init, add, commit", "Local repository workflow.", gitRes, "Git getting started", "phase3");
addDay(58, "Branching & merging", "Feature branches, merge conflicts.", gitRes, "Branching", "phase3");
addDay(59, "Remote repos (GitHub)", "Clone, push, pull, fetch.", "https://docs.github.com/en/get-started", "GitHub docs", "phase3");
addDay(60, "Collaboration workflows", "Pull requests, code review.", "https://www.atlassian.com/git/tutorials/comparing-workflows", "Workflows", "phase3");
addDay(61, "Git hooks for security", "Pre-commit, pre-push scanning.", "https://githooks.com/", "Git hooks", "phase3");
addDay(62, "Undoing changes & history", "Reset, revert, rebase.", gitRes, "Advanced git", "phase3");
addDay(63, "Git for blue team", "Track config changes, version logs.", gitRes, "Git for ops", "phase3");

const elkRes = "https://logz.io/learn/complete-guide-elk-stack/";
addDay(64, "ELK introduction", "Elasticsearch, Logstash, Kibana.", elkRes, "ELK overview", "phase3");
addDay(65, "Install Elasticsearch", "Setup, indices, REST API.", "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html", "ES guide", "phase3");
addDay(66, "Logstash pipelines", "Input, filter, output plugins.", "https://www.elastic.co/guide/en/logstash/current/index.html", "Logstash docs", "phase3");
addDay(67, "Kibana dashboards", "Visualize logs, create alerts.", "https://www.elastic.co/guide/en/kibana/current/index.html", "Kibana guide", "phase3");
addDay(68, "Ingest security logs", "Parse syslog, Windows events.", "https://www.elastic.co/security", "Elastic security", "phase3");
addDay(69, "Create SIEM-like dashboards", "Threat hunting with ELK.", "https://www.elastic.co/guide/en/siem/guide/current/index.html", "Elastic SIEM", "phase3");
addDay(70, "ELK + Suricata integration", "Visualize IDS alerts.", "https://www.stamus-networks.com/hubfs/Resources/Guides/Suricata-ELK.pdf", "Integration guide", "phase3");

addDay(71, "AWS Security Fundamentals", "IAM, S3 bucket policies, VPC.", "https://aws.amazon.com/training/learn-about/security-fundamentals/", "AWS security basics", "phase4");
addDay(72, "AWS CloudTrail & GuardDuty", "Monitoring & threat detection.", "https://aws.amazon.com/guardduty/", "GuardDuty", "phase4");
addDay(73, "Azure Security Center", "Defender for Cloud, policies.", "https://learn.microsoft.com/en-us/azure/defender-for-cloud/", "Azure Defender", "phase4");
addDay(74, "GCP Security Command Center", "Asset inventory, threat detection.", "https://cloud.google.com/security-command-center", "GCP SCC", "phase4");
addDay(75, "Cloud hardening best practices", "CIS benchmarks for cloud.", "https://www.cisecurity.org/benchmark/cloud", "CIS cloud", "phase4");
addDay(76, "Serverless security (Lambda)", "IAM roles, env variables.", "https://www.youtube.com/watch?v=oQdSY5uN6zU", "Lambda security", "phase4");
addDay(77, "Container security (Docker)", "Image scanning, runtime security.", "https://snyk.io/learn/docker-security/", "Docker security", "phase4");

addDay(78, "Penetration testing methodology", "PTES, reconnaissance.", "https://www.offensive-security.com/metasploit-unleashed/", "Metasploit intro", "phase4");
addDay(79, "Information gathering", "OSINT, DNS recon, whois.", "https://osintframework.com/", "OSINT tools", "phase4");
addDay(80, "Vulnerability scanning (Nmap)", "Port scanning, version detection.", "https://nmap.org/book/toc.html", "Nmap guide", "phase4");
addDay(81, "Enumeration techniques", "SMB, SNMP, LDAP.", "https://www.hackthebox.com/", "HTB labs", "phase4");
addDay(82, "Web app attacks (SQLi, XSS)", "Burp Suite basics.", "https://portswigger.net/web-security", "Web security academy", "phase4");
addDay(83, "Privilege escalation (Linux)", "SUID, sudo, kernel exploits.", "https://gtfobins.github.io/", "GTFOBins", "phase4");
addDay(84, "Windows privilege escalation", "PowerUp, JuicyPotato.", "https://book.hacktricks.xyz/windows/checklist-windows-privilege-escalation", "HackTricks", "phase4");
addDay(85, "Password attacks (Hydra, John)", "Brute force, hash cracking.", "https://www.openwall.com/john/", "John the Ripper", "phase4");
addDay(86, "Wireless attacks", "WPA2 handshake, deauth.", "https://www.aircrack-ng.org/", "Aircrack-ng", "phase4");
addDay(87, "Social engineering toolkit", "Phishing campaigns.", "https://github.com/trustedsec/social-engineer-toolkit", "SEToolkit", "phase4");
addDay(88, "Capture The Flag walkthrough", "Try Vulnhub or HTB machine.", "https://www.vulnhub.com/", "Vulnhub", "phase4");
addDay(89, "Write pentest report", "Document findings, remediation.", "https://www.sans.org/white-papers/33333/", "Report template", "phase4");
addDay(90, "Final review & roadmap beyond", "Recap 90 days, choose specialization.", "https://github.com/farhanashrafdev/90DaysOfCyberSecurity", "Official repo graduation", "phase4");

addDay(91, "Build cybersecurity portfolio", "GitHub projects, writeups.", "https://pages.github.com/", "GitHub Pages", "phase5");
addDay(92, "Craft a one‑page resume", "Focus on skills & projects.", "https://www.cyberseek.org/", "Cyberseek career path", "phase5");
addDay(93, "LinkedIn optimization", "Headline, banner, networking.", "https://www.linkedin.com/", "LinkedIn", "phase5");
addDay(94, "Interview preparation", "Common SOC analyst questions.", "https://www.youtube.com/watch?v=5X0tRc4a7u0", "Interview tips", "phase5");
addDay(95, "Apply to junior roles & community", "Join Discord, attend meetups.", "https://discord.gg/cybersecurity", "Cyber community", "phase5");

const container = document.getElementById('daysContainer');
let currentFilter = 'all';

function renderCards() {
  let filtered = daysData.filter(d => currentFilter === 'all' || d.phase === currentFilter);
  filtered.sort((a, b) => a.day - b.day);
  container.innerHTML = '';
  filtered.forEach(day => {
    const card = document.createElement('div');
    card.className = 'day-card';
    let phaseColor = '';
    if (day.phase === 'phase1') phaseColor = '#306c8c';
    else if (day.phase === 'phase2') phaseColor = '#2f8c6b';
    else if (day.phase === 'phase3') phaseColor = '#a556c2';
    else if (day.phase === 'phase4') phaseColor = '#c97e2c';
    else phaseColor = '#3a7ca5';
    card.style.borderLeftColor = phaseColor;
    card.innerHTML = `
      <div class="phase-badge" style="background:${phaseColor}40; color:#d9f0ff;"><i class="fas fa-tag"></i> ${day.phase === 'phase1' ? 'Network+ / Sec+' : day.phase === 'phase2' ? 'Linux & Python' : day.phase === 'phase3' ? 'Tools + ELK' : day.phase === 'phase4' ? 'Cloud & Pentest' : 'Career'}</div>
      <div class="day-number">Day ${day.day}</div>
      <div class="day-title">${day.title}</div>
      <div class="day-desc">${day.desc}</div>
      <a href="${day.resourceUrl}" target="_blank" class="resource-link" rel="noopener">
        <i class="fas fa-external-link-alt"></i> ${day.resourceLabel}
      </a>
    `;
    container.appendChild(card);
  });
  if (filtered.length === 0) {
    container.innerHTML = '<div style="text-align:center; grid-column:1/-1;">✨ No days match this filter — try another phase ✨</div>';
  }
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-phase');
    renderCards();
  });
});

renderCards();
