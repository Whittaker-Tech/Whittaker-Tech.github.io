/** * OIT TECHNICIAN TOOLKIT - PORTFOLIO DEMO ENGINE
 * High-fidelity simulation of 25Live, SCCM, AD, and Sassafras.
 */

// ==========================================
// 0. WELCOME MESSAGE SIMULATION
// ==========================================
(function loadWelcomeMessage() {
    const badge = document.getElementById('welcome-badge');
    if (!badge) return;
    setTimeout(() => {
        badge.innerHTML = `
            <div style="display: inline-block; background: rgba(0,0,0,0.2); padding: 4px 12px; border-radius: 12px; border: 1px solid #333;">
                <span style="font-size: 0.9rem; font-weight: bold; color: #Ab162B;">Welcome</span>
                <span style="color: #Ab162B; font-weight: bold; font-size: 0.9rem;">Technician [DEMO MODE]</span>
            </div>
        `;
    }, 500);
})();

// ==========================================
// 1. DASHBOARD NAVIGATION
// ==========================================
function openDashboardTab(tabName, btnElement) {
    const welcome = document.getElementById('welcome-screen');
    if (welcome) welcome.style.display = 'none';

    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    const target = document.getElementById(tabName);
    if (target) target.classList.remove('hidden');
    btnElement.classList.add('active');
}

// ==========================================
// 2. LAB UTILITIES (WOL & ROOM CHECKER)
// ==========================================
const labData = {
    "Laurel Hall": ["LH132", "LH134", "LH305"],
    "TEC Building": ["TEC100", "TEC200"],
    "HSC / Science Building": ["HSC417", "SB219"]
};

function showRooms(bldg) {
    const roomSelect = document.getElementById('room-dropdown');
    document.getElementById('bldg-label').innerText = bldg.toUpperCase();
    roomSelect.innerHTML = '<option value="" disabled selected>Select Room...</option>'; 
    labData[bldg].forEach(room => {
        const opt = document.createElement('option');
        opt.value = room; opt.textContent = room;
        roomSelect.appendChild(opt);
    });
    document.getElementById('view-buildings').classList.add('hidden');
    document.getElementById('view-rooms').classList.remove('hidden');
}

function showBuildings() {
    document.getElementById('view-rooms').classList.add('hidden');
    document.getElementById('view-buildings').classList.remove('hidden');
}

function triggerWake() {
    if (!document.getElementById('room-dropdown').value) return alert("Please select a room first.");
    const btn = document.getElementById('wake-btn');
    const loader = document.getElementById('loader-wake');
    btn.classList.add('hidden');
    loader.classList.remove('hidden');
    setTimeout(() => {
        alert("SUCCESS: Wake-on-LAN packets broadcasted to subnet nodes.");
        loader.classList.add('hidden');
        btn.classList.remove('hidden');
    }, 1500);
}

function showCheckerRooms(bldg) {
    const roomSelect = document.getElementById('checker-room');
    document.getElementById('checker-bldg-label').innerText = bldg.split('(')[0].trim().toUpperCase();
    roomSelect.innerHTML = '<option value="478">LH 132 (Computer Lab) 🖳</option><option value="2415">LH 134 (Computer Lab) 🖳</option>';
    document.getElementById('checker-view-bldg').classList.add('hidden');
    document.getElementById('checker-view-rooms').classList.remove('hidden');
}

function showCheckerBuildings() {
    document.getElementById('checker-view-rooms').classList.add('hidden');
    document.getElementById('checker-view-bldg').classList.remove('hidden');
}

function checkSchedule() {
    const loader = document.getElementById('loader-check');
    const resultBox = document.getElementById('status-result');
    loader.classList.remove('hidden');
    resultBox.classList.add('hidden');
    setTimeout(() => {
        const mockData = [
            { Day: "Mon", Gaps: ["9:00am - 12:30pm"] },
            { Day: "Tue", Gaps: ["Clear All Day"] }
        ];
        resultBox.innerHTML = mockData.map(d => `
            <div style="background: rgba(46, 204, 113, 0.1); border-left: 4px solid #2ecc71; padding: 10px; margin-bottom: 5px; text-align: left;">
                <strong style="color: #fff;">${d.Day}:</strong> <span style="color: #ccc;">${d.Gaps.join(', ')}</span>
            </div>
        `).join('');
        loader.classList.add('hidden');
        resultBox.classList.remove('hidden');
    }, 1000);
}

// ==========================================
// 3. LAB HEALTH (GHOST & 25LIVE REPORT)
// ==========================================
function showGhostRooms(bldg) {
    const roomSelect = document.getElementById('ghost-room');
    document.getElementById('ghost-bldg-label').innerText = bldg.toUpperCase();
    roomSelect.innerHTML = '<option value="CL132">Laurel 132</option><option value="CL134">Laurel 134</option>';
    document.getElementById('ghost-view-bldg').classList.add('hidden');
    document.getElementById('ghost-view-rooms').classList.remove('hidden');
}

function showGhostBuildings() {
    document.getElementById('ghost-view-rooms').classList.add('hidden');
    document.getElementById('ghost-view-bldg').classList.remove('hidden');
}

function runLabReport() {
    const loader = document.getElementById('loader-report');
    const results = document.getElementById('report-results');
    loader.classList.remove('hidden');
    results.classList.add('hidden');

    setTimeout(() => {
        // High-fidelity simulation of combined Ghost Hunter and 25Live data
        results.innerHTML = `
            <div style="background: rgba(0,0,0,0.3); border: 1px solid #444; border-radius: 8px; padding: 15px; margin-bottom: 15px;">
                <div style="color: #AB162B; font-weight: bold; border-bottom: 1px solid #444; padding-bottom: 5px; margin-bottom: 10px;">TEC 200 - STATUS REPORT</div>
                <div style="margin-bottom: 10px;">
                    <div style="font-size: 0.8rem; color: #ff6b6b; font-weight: bold;">GHOST HUNTER ANALYSIS:</div>
                    <ul style="font-size: 0.85rem; color: #ccc; margin: 5px 0;">
                        <li>• TEC200-PC12 (Offline 24d)</li>
                        <li>• TEC200-PC31 (Offline 21d)</li>
                    </ul>
                </div>
                <div>
                    <div style="font-size: 0.8rem; color: #2ecc71; font-weight: bold;">25LIVE AVAILABILITY (TODAY):</div>
                    <div style="font-size: 0.85rem; color: #ddd;">• Maintenance Window: 12:30pm - 3:15pm</div>
                </div>
            </div>
            <div style="text-align: center; font-size: 0.75rem; color: #555;">Automated Note: HappyFox Ticket #99234 Updated</div>
        `;
        loader.classList.add('hidden');
        results.classList.remove('hidden');
    }, 2200);
}

function scanGhosts() {
    const loader = document.getElementById('loader-ghost');
    const resultDiv = document.getElementById('ghost-result');
    const list = document.getElementById('ghost-list');
    loader.classList.remove('hidden');
    resultDiv.classList.add('hidden');

    setTimeout(() => {
        list.innerHTML = `
            <li style="padding: 10px; border-bottom: 1px solid #333; display: flex; justify-content: space-between; background: rgba(171, 22, 43, 0.1);">
                <div><strong>LH132-PC04</strong><br><small style="color: #888;">Boot: Dec 28</small></div>
                <div style="background: #Ab162B; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem;">21d Offline</div>
            </li>`;
        loader.classList.add('hidden');
        resultDiv.classList.remove('hidden');
    }, 1200);
}

// ==========================================
// 4. ADMIN UTILITIES (PURGE & SASSAFRAS)
// ==========================================
function triggerPurge() {
    const name = document.getElementById('pc-name-input').value;
    if (!name) return alert("Enter Computer Name.");
    const loader = document.getElementById('loader-purge');
    loader.classList.remove('hidden');
    setTimeout(() => {
        alert(`SUCCESS: ${name} purged from AD and SCCM.`);
        loader.classList.add('hidden');
    }, 1800);
}

// ==========================================
// 4. ADMIN UTILITIES: SASSAFRAS & 25LIVE PROVISIONING
// ==========================================
function openSassafrasDemo() {
    const adminTab = document.getElementById('admin-tools');
    
    // Administrative UI for Term-Start Provisioning
    adminTab.innerHTML = `
        <div class="container" style="max-width: 650px; min-width: 550px;">
            <div class="tool-title">SASSAFRAS / 25LIVE SYNC ENGINE</div>
            <p style="color: #888; font-size: 0.8rem; margin-bottom: 20px;">Term-Start Automated Time Set Provisioning</p>
            
            <div id="provision-form" style="text-align: left; background: #1a1a1a; padding: 25px; border-radius: 8px; border: 1px solid #333;">
                <label style="font-size: 0.75rem; color: #AB162B; font-weight: bold; text-transform: uppercase;">Select Labs to Provision:</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0 20px 0;">
                    <label class="modern-input" style="display:flex; align-items:center; gap:10px; padding: 10px; cursor: pointer;">
                        <input type="checkbox" checked style="accent-color: #AB162B;"> Laurel 132
                    </label>
                    <label class="modern-input" style="display:flex; align-items:center; gap:10px; padding: 10px; cursor: pointer;">
                        <input type="checkbox" checked style="accent-color: #AB162B;"> Laurel 134
                    </label>
                    <label class="modern-input" style="display:flex; align-items:center; gap:10px; padding: 10px; cursor: pointer;">
                        <input type="checkbox" style="accent-color: #AB162B;"> TEC 200
                    </label>
                    <label class="modern-input" style="display:flex; align-items:center; gap:10px; padding: 10px; cursor: pointer;">
                        <input type="checkbox" style="accent-color: #AB162B;"> HSC 417
                    </label>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div>
                        <label style="font-size: 0.75rem; color: #888;">Start Date:</label>
                        <input type="date" class="modern-input" value="2026-01-19">
                    </div>
                    <div>
                        <label style="font-size: 0.75rem; color: #888;">End Date:</label>
                        <input type="date" class="modern-input" value="2026-05-15">
                    </div>
                </div>

                <button class="btn btn-red" onclick="runSassafrasSync()">Run Automated Provisioning</button>
                <button class="btn btn-back" style="width: 100%;" onclick="location.reload()">← Back to Toolkit</button>
            </div>

            <div id="sync-results" class="hidden" style="text-align: left; background: #000; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 0.8rem; border: 1px solid #333; max-height: 300px; overflow-y: auto;">
                <p style="color: #fc7a00;">[DEMO MODE - NOT REAL DATA]</p>
                <p style="color: #2ecc71;">[SYS] Initializing Sassafras KeyServer Session...</p>
                <p style="color: #2ecc71;">[SYS] 25Live API Authenticated...</p>
                <div id="sync-log"></div>
            </div>
        </div>
    `;
}

function runSassafrasSync() {
    const form = document.getElementById('provision-form');
    const results = document.getElementById('sync-results');
    const log = document.getElementById('sync-log');
    
    form.classList.add('hidden');
    results.classList.remove('hidden');

    const steps = [
        "Fetching 25Live Course Schedules for LAUR.132...",
        "Parsing 14 weekly recurring class events...",
        "Creating Sassafras Time Set: 'SP26_LAUR132'...",
        "Fetching Course Schedules for LAUR.134...",
        "Creating Sassafras Time Set: 'SP26_LAUR134'...",
        "Pushing 28 Time Set policies to Sassafras API...",
        "SUCCESS: 2 Labs provisioned for Spring 2026 Term."
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < steps.length) {
            const p = document.createElement('p');
            p.style.color = i === steps.length - 1 ? "#2ecc71" : "#ccc";
            p.textContent = `> ${steps[i]}`;
            log.appendChild(p);
            results.scrollTop = results.scrollHeight;
            i++;
        } else {
            clearInterval(interval);
        }
    }, 600);
}