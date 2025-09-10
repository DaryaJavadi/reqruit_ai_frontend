const API_BASE = import.meta.env.VITE_API_URL || 'https://reqruit-ai-backend.onrender.com';

// Mövcud funksiyalarınızı saxlayın və bunları əlavə edin:

// POST upload CVs - field name düzəlişi
export async function uploadCV(files) {
    const formData = new FormData();
    if (Array.isArray(files)) {
        files.forEach(file => formData.append('files', file));
    } else {
        formData.append('files', files);
    }
    const res = await fetch(`${API_BASE}/parse-cvs`, {
        method: 'POST',
        body: formData
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
}

// Match candidates düzəlişi
export async function matchCandidates(requirements, cvs) {
    const res = await fetch(`${API_BASE}/match-candidates`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requirements, cvs })
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
}

// Əlavə endpoint-lər
export async function exportCVsToExcel() {
    const res = await fetch(`${API_BASE}/export/excel`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.blob();
}

export async function exportMatchingResults(matchingResults) {
    const res = await fetch(`${API_BASE}/export/matching-results`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matchingResults })
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.blob();
}

export async function extractLinksBulk() {
    const res = await fetch(`${API_BASE}/extract-links-bulk`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
}

export async function checkHealth() {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error(`Error: ${res.status}`);
    return res.json();
}