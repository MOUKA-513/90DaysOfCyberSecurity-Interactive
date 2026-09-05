// ─── All links are sourced from README.md ──────────────────────────────

// Phase 1 ─ Network+ & Security+ (Days 1–14)
const NET_PLAYLIST = 'https://youtube.com/playlist?list=PLG49S3nxzAnl_tQe3kvnmeMid0mjF8Le8&si=3rUsqmrdsNK3izh6';
const SEC_PLAYLIST = 'https://www.youtube.com/watch?v=KiEptGbnEBc&list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv';
const SEC_ALT = 'https://www.youtube.com/watch?v=1E7pI7PB4KI&list=PL7XJSuT7Dq_UDJgYoQGIW9viwM5hc4C7n';

// Phase 2 ─ Linux (Days 15–28)
const LINUX_JOURNEY = 'https://linuxjourney.com/';
const LINUX_UNHATCHED = 'https://www.netacad.com/courses/linux-unhatched';
const LABEX_LINUX = 'https://labex.io/free-labs/linux';

// Phase 2 ─ Python (Days 29–42)
const PY_FREECODECAMP = 'https://www.youtube.com/watch?v=rfscVS0vtbw';
const PY_CODECADEMY = 'https://codecademy.com/learn/learn-python';
const PY_ORG = 'https://www.python.org/';
const PY_REAL = 'https://realpython.com/';
const PY_TALK = 'https://talkpython.fm/';
const PY_HARDWAY = 'https://learnpythonthehardway.org';
const PY_HACKERRANK = 'https://www.hackerrank.com/domains/python';
const PY_LABEX = 'https://labex.io/free-labs/python';
const PY_CYBERMENTOR = 'https://www.youtube.com/watch?v=egg-GoT5iVk&ab_channel=TheCyberMentor';

// Phase 3 ─ Traffic Analysis (Days 43–56)
const WIRESHARK_UNI = 'https://www.wireshark.org/#educationalContent';
const WIRESHARK_GURU = 'https://guru99.com/wireshark-tutorial.html';
const TCPDUMP = 'https://danielmiessler.com/study/tcpdump/';
const SURICATA_QS = 'https://docs.suricata.io/en/latest/quickstart.html';
const WIRESHARK_YT = 'https://www.youtube.com/watch?v=NjvR4LmwcMU&list=PLBf0hzazHTGPgyxeEj_9LBHiqjtNEjsgt&pp=iAQB';
const SURICATA_YT = 'https://www.youtube.com/watch?v=S0-vsjhPDN0&pp=ygUhIFN1cmljYXRhIElEUy9JUFMgU3lzdGVtIFR1dG9yaWFs';

// Phase 3 ─ Git (Days 57–63)
const GIT_CODECADEMY = 'https://codecademy.com/learn/learn-git';
const GIT_IMMERSION = 'http://gitimmersion.com';
const GIT_TRY = 'https://try.github.io';
const GIT_BRANCHING = 'https://learngitbranching.js.org/';

// Phase 3 ─ ELK (Days 64–70)
const ELK_LOGZ = 'https://logz.io/learn/complete-guide-elk-stack/';
const ELK_ELASTIC = 'https://www.elastic.co/docs/get-started';

// Phase 4 ─ Cloud (Days 71–77)
const GCP_START = 'https://cloud.google.com/getting-started/';
const GCP_DOCS = 'https://cloud.google.com/docs/';
const GCP_BLOG = 'https://cloud.google.com/blog/';
const GCP_COMMUNITY = 'https://cloud.google.com/community/';
const GCP_SKILLS = 'https://www.cloudskillsboost.google';
const AWS_START = 'https://aws.amazon.com/getting-started/';
const AWS_TUTORIALS = 'https://aws.amazon.com/tutorials/';
const AWS_CLOUDQUEST = 'https://aws.amazon.com/training/digital/aws-cloud-quest/';
const AZURE_FUND = 'https://learn.microsoft.com/en-us/training/azure/';
const AZURE_LEARN = 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/';

// Phase 4 ─ Review (Days 78–84)
const TRYHACKME = 'https://tryhackme.com';

// Phase 4 ─ Hacking (Days 85–90)
const HTB = 'https://hackthebox.com';
const VULNHUB = 'https://vulnhub.com';
const EH_PART1 = 'https://www.youtube.com/watch?v=3FNYvj2U0HM&ab_channel=TheCyberMentor';
const EH_PART2 = 'https://www.youtube.com/watch?v=sH4JCwjybGs&ab_channel=TheCyberMentor';

// Phase 5 ─ Career (Days 91–95)
const RESUME_BOWTIED = 'https://bowtiedcyber.substack.com/p/killer-cyber-resume-part-ii';
const RESUME_INDEED = 'https://www.indeed.com/career-advice/resumes-cover-letters/cybersecurity-resume';
const RESUME_NOW = 'https://www.resume-now.com/cv/templates/data-systems-administration/cyber-security-specialist';
const JOB_INDEED = 'https://indeed.com';
const JOB_LINKEDIN = 'https://linkedin.com';
const CYBERSEEK = 'https://www.cyberseek.org/pathway.html';
const CAREER_OPS = 'https://github.com/career-ops-hq/career-ops';

// ─── Build the day list ────────────────────────────────────────────────

const daysData = [];

function addDay(day, title, desc, url, label, phase) {
    daysData.push({ day, title, desc, resourceUrl: url, resourceLabel: label, phase });
}

// ── Phase 1: Network+ (1–7) ──
const netTopics = [
    'OSI Model & Encapsulation',
    'TCP/IP Suite & Protocols',
    'IPv4 Addressing & Subnetting',
    'Network Devices & Cabling',
    'Ethernet & Switching',
    'Routing Fundamentals',
    'Wireless & Cellular Networks'
];
const netDescs = [
    'Learn layers, PDU, and how data flows.',
    'TCP vs UDP, ports, and common protocols.',
    'Subnet masks, CIDR, and basic subnet calculation.',
    'Routers, switches, firewalls, APs.',
    'MAC addresses, ARP, VLAN basics.',
    'Static vs dynamic routing, routing tables.',
    'WiFi standards, WPA, 4G/5G security.'
];
for (let i = 0; i < 7; i++) {
    addDay(i + 1, netTopics[i], netDescs[i], NET_PLAYLIST, 'Prof Messer N10-009', 'phase1');
}

// ── Phase 1: Security+ (8–14) ──
const secTopics = [
    'Security Threats & Attack Vectors',
    'Cryptography Basics',
    'Access Control & AAA',
    'Network Security Appliances',
    'Endpoint Security',
    'Vulnerability Management',
    'Incident Response & Forensics'
];
const secDescs = [
    'Malware, phishing, DoS, social engineering.',
    'Symmetric/asymmetric, hashing, PKI.',
    'Authentication, RADIUS, TACACS+, MFA.',
    'Firewalls, IDS/IPS, content filters.',
    'Antivirus, EDR, host-based firewall.',
    'Scanning, CVSS, patch management.',
    'IR lifecycle, evidence collection.'
];
for (let i = 0; i < 7; i++) {
    addDay(i + 8, secTopics[i], secDescs[i], SEC_PLAYLIST, 'Prof Messer SY0-701', 'phase1');
}

// ── Phase 2: Linux (15–28) ──
const linuxTopics = [
    'Linux Filesystem Hierarchy',
    'Basic Commands (ls, cd, cp, mv)',
    'File permissions (chmod, chown)',
    'Process management (ps, top, kill)',
    'Package managers (apt, yum)',
    'Linux networking (ip, ss, netstat)',
    'Text editors (vim, nano)',
    'Shell scripting basics',
    'User & group management',
    'Linux services & systemd',
    'Firewall (iptables/ufw)',
    'SSH & secure remote access',
    'Log analysis (journalctl, rsyslog)',
    'Linux hardening'
];
const linuxDescs = [
    'Understand the FHS and navigate the tree.',
    'Master essential CLI commands.',
    'Set permissions and ownership.',
    'Monitor and control running processes.',
    'Install and update software.',
    'Configure network interfaces and routing.',
    'Edit files efficiently.',
    'Variables, conditionals, loops, cron jobs.',
    'sudo, /etc/passwd, useradd.',
    'Start, enable services, journalctl.',
    'Rules, allow/deny, NAT basics.',
    'Key generation, config hardening.',
    'Monitor logs for security events.',
    'CIS benchmarks, remove unnecessary services.'
];
// First 7 days: linuxjourney.com
for (let i = 0; i < 7; i++) {
    addDay(15 + i, linuxTopics[i], linuxDescs[i], LINUX_JOURNEY, 'Linux Journey', 'phase2');
}
// Day 22: Linux Unhatched
addDay(22, linuxTopics[7], linuxDescs[7], LINUX_UNHATCHED, 'Linux Unhatched', 'phase2');
// Days 23–28: LabEx
for (let i = 8; i < 14; i++) {
    addDay(15 + i, linuxTopics[i], linuxDescs[i], LABEX_LINUX, 'LabEx Linux Labs', 'phase2');
}

// ── Phase 2: Python (29–42) ──
const pyTopics = [
    'Python setup & syntax',
    'Control flow (if/else, loops)',
    'Data structures',
    'Functions & scope',
    'File handling',
    'Error handling',
    'Modules & packages',
    'Regex for security',
    'Socket programming basics',
    'Python & APIs',
    'Automate port scanner',
    'Log parsing script',
    'Hash cracking with python',
    'Build a simple keylogger (ethical)'
];
const pyDescs = [
    'Variables, data types, basic I/O.',
    'Conditionals, for/while loops.',
    'Lists, tuples, dictionaries, sets.',
    'Define functions, return values, lambda.',
    'Read/write files, CSV parsing.',
    'Try/except, custom exceptions.',
    'Import, pip, virtual environments.',
    'Pattern matching, log filtering.',
    'TCP/UDP clients/servers.',
    'Requests library, parsing JSON.',
    'Build a simple scanner with sockets.',
    'Analyze auth logs, detect failed attempts.',
    'MD5, SHA, dictionary attack.',
    'Capture keystrokes for learning (ethical).'
];
// Distribute Python resources across the 14 days
const pyResources = [
    PY_FREECODECAMP, PY_CODECADEMY, PY_ORG, PY_REAL, PY_TALK,
    PY_HARDWAY, PY_HACKERRANK, PY_LABEX, PY_CYBERMENTOR,
    PY_REAL, PY_FREECODECAMP, PY_HACKERRANK, PY_LABEX, PY_CYBERMENTOR
];
const pyLabels = [
    'freeCodeCamp', 'Codecademy', 'Python.org', 'Real Python', 'Talk Python',
    'Hard Way', 'HackerRank', 'LabEx', 'Cyber Mentor',
    'Real Python', 'freeCodeCamp', 'HackerRank', 'LabEx', 'Cyber Mentor'
];
for (let i = 0; i < 14; i++) {
    addDay(29 + i, pyTopics[i], pyDescs[i], pyResources[i], pyLabels[i], 'phase2');
}

// ── Phase 3: Traffic Analysis (43–56) ──
const taTopics = [
    'Wireshark installation & UI',
    'Capture filters',
    'Display filters',
    'Follow TCP streams',
    'Analyze HTTP traffic',
    'ARP & ICMP analysis',
    'Detect malicious traffic',
    'tcpdump essentials',
    'Suricata IDS/IPS',
    'Snort basics',
    'Zeek (Bro) intro',
    'NetFlow analysis',
    'Combine IDS alerts',
    'Incident handling with packet data'
];
const taDescs = [
    'Get started with Wireshark.',
    'Filter packets during capture.',
    'Filter packets after capture.',
    'Reconstruct TCP sessions.',
    'Inspect HTTP requests and responses.',
    'Analyze ARP and ICMP traffic.',
    'Identify suspicious patterns.',
    'Capture, read pcap files, filters.',
    'Rules, alert logging, eve.json.',
    'Rule writing, inline mode.',
    'Network monitoring framework.',
    'Flow data, nfdump, SiLK.',
    'Correlate alerts with pcap.',
    'Extract files from pcap.'
];
const taResources = [
    WIRESHARK_UNI, WIRESHARK_GURU, WIRESHARK_YT, WIRESHARK_UNI,
    WIRESHARK_GURU, WIRESHARK_YT, WIRESHARK_UNI,
    TCPDUMP, SURICATA_QS, 'https://www.snort.org/documents',
    'https://docs.zeek.org/', 'https://www.ntop.org/',
    SURICATA_YT, WIRESHARK_UNI
];
const taLabels = [
    'Wireshark Uni', 'Guru99', 'Wireshark YT', 'Wireshark Uni',
    'Guru99', 'Wireshark YT', 'Wireshark Uni',
    'tcpdump man', 'Suricata', 'Snort docs', 'Zeek docs',
    'ntop', 'Suricata YT', 'Wireshark Uni'
];
for (let i = 0; i < 14; i++) {
    addDay(43 + i, taTopics[i], taDescs[i], taResources[i], taLabels[i], 'phase3');
}

// ── Phase 3: Git (57–63) ──
const gitTopics = [
    'Git basics: init, add, commit',
    'Branching & merging',
    'Remote repos (GitHub)',
    'Collaboration workflows',
    'Git hooks for security',
    'Undoing changes & history',
    'Git for blue team'
];
const gitDescs = [
    'Local repository workflow.',
    'Feature branches, merge conflicts.',
    'Clone, push, pull, fetch.',
    'Pull requests, code review.',
    'Pre-commit, pre-push scanning.',
    'Reset, revert, rebase.',
    'Track config changes, version logs.'
];
const gitResources = [
    GIT_CODECADEMY, GIT_IMMERSION, GIT_TRY, GIT_BRANCHING,
    'https://githooks.com/', GIT_IMMERSION, GIT_CODECADEMY
];
const gitLabels = [
    'Codecademy', 'Git Immersion', 'Try Git', 'Learn Branching',
    'Git Hooks', 'Git Immersion', 'Codecademy'
];
for (let i = 0; i < 7; i++) {
    addDay(57 + i, gitTopics[i], gitDescs[i], gitResources[i], gitLabels[i], 'phase3');
}

// ── Phase 3: ELK (64–70) ──
const elkTopics = [
    'ELK introduction',
    'Install Elasticsearch',
    'Logstash pipelines',
    'Kibana dashboards',
    'Ingest security logs',
    'Create SIEM-like dashboards',
    'ELK + Suricata integration'
];
const elkDescs = [
    'Elasticsearch, Logstash, Kibana.',
    'Setup, indices, REST API.',
    'Input, filter, output plugins.',
    'Visualize logs, create alerts.',
    'Parse syslog, Windows events.',
    'Threat hunting with ELK.',
    'Visualize IDS alerts.'
];
const elkResources = [
    ELK_LOGZ, ELK_ELASTIC, ELK_LOGZ, ELK_ELASTIC,
    'https://www.elastic.co/security', 'https://www.elastic.co/guide/en/siem/guide/current/index.html',
    'https://www.stamus-networks.com/hubfs/Resources/Guides/Suricata-ELK.pdf'
];
const elkLabels = [
    'Logz.io', 'Elastic docs', 'Logz.io', 'Elastic docs',
    'Elastic Security', 'Elastic SIEM', 'Integration guide'
];
for (let i = 0; i < 7; i++) {
    addDay(64 + i, elkTopics[i], elkDescs[i], elkResources[i], elkLabels[i], 'phase3');
}

// ── Phase 4: Cloud (71–77) ──
const cloudTopics = [
    'AWS Security Fundamentals',
    'AWS CloudTrail & GuardDuty',
    'Azure Security Center',
    'GCP Security Command Center',
    'Cloud hardening best practices',
    'Serverless security (Lambda)',
    'Container security (Docker)'
];
const cloudDescs = [
    'IAM, S3 bucket policies, VPC.',
    'Monitoring & threat detection.',
    'Defender for Cloud, policies.',
    'Asset inventory, threat detection.',
    'CIS benchmarks for cloud.',
    'IAM roles, env variables.',
    'Image scanning, runtime security.'
];
const cloudResources = [
    AWS_START, 'https://aws.amazon.com/guardduty/',
    'https://learn.microsoft.com/en-us/azure/defender-for-cloud/',
    'https://cloud.google.com/security-command-center',
    'https://www.cisecurity.org/benchmark/cloud',
    'https://www.youtube.com/watch?v=oQdSY5uN6zU',
    'https://snyk.io/learn/docker-security/'
];
const cloudLabels = [
    'AWS Getting Started', 'GuardDuty', 'Azure Defender',
    'GCP SCC', 'CIS Cloud', 'Lambda Security', 'Docker Security'
];
for (let i = 0; i < 7; i++) {
    addDay(71 + i, cloudTopics[i], cloudDescs[i], cloudResources[i], cloudLabels[i], 'phase4');
}

// ── Phase 4: Review & Practice (78–84) ──
const reviewTopics = [
    'Penetration testing methodology',
    'Information gathering',
    'Vulnerability scanning (Nmap)',
    'Enumeration techniques',
    'Web app attacks (SQLi, XSS)',
    'Privilege escalation (Linux)',
    'Windows privilege escalation'
];
const reviewDescs = [
    'PTES, reconnaissance.',
    'OSINT, DNS recon, whois.',
    'Port scanning, version detection.',
    'SMB, SNMP, LDAP.',
    'Burp Suite basics.',
    'SUID, sudo, kernel exploits.',
    'PowerUp, JuicyPotato.'
];
const reviewResources = [
    'https://www.offensive-security.com/metasploit-unleashed/',
    'https://osintframework.com/',
    'https://nmap.org/book/toc.html',
    'https://www.hackthebox.com/',
    'https://portswigger.net/web-security',
    'https://gtfobins.github.io/',
    'https://book.hacktricks.xyz/windows/checklist-windows-privilege-escalation'
];
const reviewLabels = [
    'Metasploit', 'OSINT', 'Nmap guide', 'HTB labs',
    'Web Security Academy', 'GTFOBins', 'HackTricks'
];
for (let i = 0; i < 7; i++) {
    addDay(78 + i, reviewTopics[i], reviewDescs[i], reviewResources[i], reviewLabels[i], 'phase4');
}

// ── Phase 4: Hacking (85–90) ──
const hackTopics = [
    'Password attacks (Hydra, John)',
    'Wireless attacks',
    'Social engineering toolkit',
    'Capture The Flag walkthrough',
    'Write pentest report',
    'Final review & roadmap beyond'
];
const hackDescs = [
    'Brute force, hash cracking.',
    'WPA2 handshake, deauth.',
    'Phishing campaigns.',
    'Try Vulnhub or HTB machine.',
    'Document findings, remediation.',
    'Recap 90 days, choose specialization.'
];
const hackResources = [
    'https://www.openwall.com/john/',
    'https://www.aircrack-ng.org/',
    'https://github.com/trustedsec/social-engineer-toolkit',
    'https://www.vulnhub.com/',
    'https://www.sans.org/white-papers/33333/',
    'https://github.com/farhanashrafdev/90DaysOfCyberSecurity'
];
const hackLabels = [
    'John the Ripper', 'Aircrack-ng', 'SEToolkit',
    'Vulnhub', 'SANS template', 'Official repo'
];
for (let i = 0; i < 6; i++) {
    addDay(85 + i, hackTopics[i], hackDescs[i], hackResources[i], hackLabels[i], 'phase4');
}

// ── Phase 5: Career (91–95) ──
addDay(91, 'Build cybersecurity portfolio', 'GitHub projects, writeups.',
    'https://pages.github.com/', 'GitHub Pages', 'phase5');
addDay(92, 'Craft a one‑page resume', 'Focus on skills & projects.',
    RESUME_BOWTIED, 'BowTied Cyber', 'phase5');
addDay(93, 'LinkedIn optimization', 'Headline, banner, networking.',
    JOB_LINKEDIN, 'LinkedIn', 'phase5');
addDay(94, 'Interview preparation', 'Common SOC analyst questions.',
    'https://www.youtube.com/watch?v=5X0tRc4a7u0', 'Interview tips', 'phase5');
addDay(95, 'Apply to junior roles & community', 'Join Discord, attend meetups.',
    'https://discord.gg/cybersecurity', 'Cyber community', 'phase5');

// ─── Render ────────────────────────────────────────────────────────────

const container = document.getElementById('daysContainer');
let currentFilter = 'all';

const phaseColors = {
    phase1: '#306c8c',
    phase2: '#2f8c6b',
    phase3: '#a556c2',
    phase4: '#c97e2c',
    phase5: '#3a7ca5'
};
const phaseLabels = {
    phase1: 'Network+ / Sec+',
    phase2: 'Linux & Python',
    phase3: 'Tools + ELK',
    phase4: 'Cloud & Pentest',
    phase5: 'Career'
};

function renderCards() {
    let filtered = daysData.filter(d => currentFilter === 'all' || d.phase === currentFilter);
    filtered.sort((a, b) => a.day - b.day);
    container.innerHTML = '';
    filtered.forEach(day => {
        const card = document.createElement('div');
        card.className = 'day-card';
        const color = phaseColors[day.phase] || '#2c9cd4';
        card.style.borderLeftColor = color;
        card.innerHTML = `
            <div class="phase-badge" style="background:${color}40; color:#d9f0ff;">
                <i class="fas fa-tag"></i> ${phaseLabels[day.phase] || ''}
            </div>
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
        container.innerHTML = '<div style="text-align:center; grid-column:1/-1; padding:2rem;">✨ No days match this filter — try another phase ✨</div>';
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