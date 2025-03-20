// Main JavaScript for Guitar Learning Roadmap Tracker

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Setup event listeners
    setupEventListeners();
});

// Initialize the application
function initApp() {
    // Load songs into their respective phase sections
    loadSongs();
    
    // Load user progress from localStorage
    loadProgress();
    
    // Update overall progress
    updateProgress();
}

// Load songs into the UI
function loadSongs() {
    // Load songs for each phase
    loadPhasesSongs('phase1-songs', songsData.phase1);
    loadPhasesSongs('phase2-songs', songsData.phase2);
    loadPhasesSongs('phase3-songs', songsData.phase3);
    loadPhasesSongs('phase4-songs', songsData.phase4);
}

// Load songs for a specific phase
function loadPhasesSongs(containerId, songs) {
    const container = document.getElementById(containerId);
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create row for grid layout
    const row = document.createElement('div');
    row.className = 'row';
    
    // Add each song to the container
    songs.forEach(song => {
        // Create song card
        const songCard = createSongCard(song);
        
        // Add to row
        row.appendChild(songCard);
    });
    
    // Add row to container
    container.appendChild(row);
}

// Create a song card element
function createSongCard(song) {
    // Create column for grid layout
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-6';
    
    // Get song status
    const songProgress = getSongProgress(song.id);
    let statusClass = 'status-not-started';
    let statusIcon = 'circle';
    let cardClass = '';
    
    if (songProgress && songProgress.mastered) {
        statusClass = 'status-completed';
        statusIcon = 'check-circle';
        cardClass = 'song-completed';
    } else if (songProgress && (songProgress.started || songProgress.mainRiff || songProgress.playSlow)) {
        statusClass = 'status-in-progress';
        statusIcon = 'clock';
        cardClass = 'song-in-progress';
    }
    
    // Create song card HTML
    const cardHtml = `
        <div class="card song-card ${cardClass}" data-song-id="${song.id}">
            <div class="card-header bg-light">
                <div>
                    <h5 class="mb-0">${song.title}</h5>
                    <p class="mb-0 text-muted">${song.artist}</p>
                </div>
                <div class="song-difficulty">
                    ${'<i class="fas fa-star"></i>'.repeat(song.difficulty)}${'<i class="far fa-star"></i>'.repeat(4 - song.difficulty)}
                </div>
            </div>
            <div class="card-body">
                <p>${song.description}</p>
                <div class="concepts-list">
                    ${song.concepts.map(concept => `<span class="concept-tag">${concept}</span>`).join('')}
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <button class="btn btn-sm btn-primary view-details" data-song-id="${song.id}">
                        <i class="fas fa-info-circle me-1"></i> Details
                    </button>
                    <a href="${song.tabLink}" target="_blank" class="btn btn-sm btn-outline-secondary">
                        <i class="fas fa-music me-1"></i> Ultimate Guitar
                    </a>
                </div>
            </div>
            <div class="song-status ${statusClass}">
                <i class="fas fa-${statusIcon}"></i>
            </div>
        </div>
    `;
    
    // Set column HTML
    col.innerHTML = cardHtml;
    
    return col;
}

// Setup event listeners
function setupEventListeners() {
    // Song detail view buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const songId = this.getAttribute('data-song-id');
            showSongDetails(songId);
        });
    });
    
    // Save song progress button
    document.getElementById('save-song-progress').addEventListener('click', function() {
        saveSongProgress();
    });
    
    // Reset progress button
    document.getElementById('reset-progress').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            resetProgress();
        }
    });
    
    // Save all progress button
    document.getElementById('save-progress').addEventListener('click', function() {
        saveAllProgress();
        showToast('Progress saved successfully!');
    });
}

// Show song details in modal
function showSongDetails(songId) {
    // Find the song in the data
    let song = null;
    let phase = '';
    
    for (const [phaseKey, songs] of Object.entries(songsData)) {
        const foundSong = songs.find(s => s.id === songId);
        if (foundSong) {
            song = foundSong;
            phase = phaseKey;
            break;
        }
    }
    
    if (!song) return;
    
    // Update modal title
    document.getElementById('songDetailModalLabel').textContent = `${song.title} - ${song.artist}`;
    
    // Get song progress
    const songProgress = getSongProgress(songId);
    
    // Build HTML for song details
    const detailsHtml = `
        <div class="row">
            <div class="col-md-6">
                <h5>About this Song</h5>
                <p>${song.description}</p>
                
                <h6>Key Techniques:</h6>
                <div class="technique-list">
                    ${song.techniques.map(technique => `<span class="technique-item">${technique}</span>`).join('')}
                </div>
                
                <h6 class="mt-3">Ultimate Guitar Tab Tips:</h6>
                <p>${song.tabTips}</p>
            </div>
            
            <div class="col-md-6">
                <h5>Learning Focus</h5>
                <p><strong>Challenging Parts:</strong> ${song.challengingParts}</p>
                <p><strong>Practice Tips:</strong> ${song.practiceTips}</p>
                
                <div class="mt-3">
                    <a href="${song.tabLink}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-music me-1"></i> View Tab on Ultimate Guitar
                    </a>
                    <a href="${song.videoTutorial}" target="_blank" class="btn btn-outline-secondary mt-2">
                        <i class="fab fa-youtube me-1"></i> Watch Video Tutorial
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Update modal content
    document.getElementById('song-detail-content').innerHTML = detailsHtml;
    
    // Update progress checkboxes
    document.getElementById('started-learning').checked = songProgress?.started || false;
    document.getElementById('learned-main-riff').checked = songProgress?.mainRiff || false;
    document.getElementById('can-play-slow').checked = songProgress?.playSlow || false;
    document.getElementById('mastered-song').checked = songProgress?.mastered || false;
    
    // Update practice notes
    document.getElementById('practiceNotes').value = songProgress?.notes || '';
    
    // Store current song ID in the modal
    document.getElementById('save-song-progress').setAttribute('data-song-id', songId);
    
    // Show the modal
    const songDetailModal = new bootstrap.Modal(document.getElementById('songDetailModal'));
    songDetailModal.show();
}

// Save song progress
function saveSongProgress() {
    const songId = document.getElementById('save-song-progress').getAttribute('data-song-id');
    
    // Get checkbox values
    const started = document.getElementById('started-learning').checked;
    const mainRiff = document.getElementById('learned-main-riff').checked;
    const playSlow = document.getElementById('can-play-slow').checked;
    const mastered = document.getElementById('mastered-song').checked;
    
    // Get practice notes
    const notes = document.getElementById('practiceNotes').value;
    
    // Create progress object
    const progress = {
        started,
        mainRiff,
        playSlow,
        mastered,
        notes,
        lastUpdated: new Date().toISOString()
    };
    
    // Save to localStorage
    saveProgress(songId, progress);
    
    // Update UI
    updateSongCardStatus(songId, progress);
    updateProgress();
    
    // Close the modal
    const songDetailModal = bootstrap.Modal.getInstance(document.getElementById('songDetailModal'));
    songDetailModal.hide();
    
    // Show success message
    showToast('Progress saved for this song!');
}

// Save progress to localStorage
function saveProgress(songId, progress) {
    // Get existing progress
    let allProgress = JSON.parse(localStorage.getItem('guitarRoadmapProgress')) || {};
    
    // Update progress for this song
    allProgress[songId] = progress;
    
    // Save back to localStorage
    localStorage.setItem('guitarRoadmapProgress', JSON.stringify(allProgress));
}

// Get song progress from localStorage
function getSongProgress(songId) {
    const allProgress = JSON.parse(localStorage.getItem('guitarRoadmapProgress')) || {};
    return allProgress[songId];
}

// Load progress from localStorage
function loadProgress() {
    const allProgress = JSON.parse(localStorage.getItem('guitarRoadmapProgress')) || {};
    
    // Update song cards based on loaded progress
    for (const songId in allProgress) {
        updateSongCardStatus(songId, allProgress[songId]);
    }
}

// Update song card status based on progress
function updateSongCardStatus(songId, progress) {
    const songCard = document.querySelector(`.song-card[data-song-id="${songId}"]`);
    if (!songCard) return;
    
    // Update status icon and class
    const statusEl = songCard.querySelector('.song-status');
    
    // Remove existing classes
    statusEl.classList.remove('status-not-started', 'status-in-progress', 'status-completed');
    songCard.classList.remove('song-completed', 'song-in-progress');
    
    // Update icon
    const iconEl = statusEl.querySelector('i');
    iconEl.className = 'fas'; // Reset icon class
    
    if (progress.mastered) {
        statusEl.classList.add('status-completed');
        songCard.classList.add('song-completed');
        iconEl.classList.add('fa-check-circle');
    } else if (progress.started || progress.mainRiff || progress.playSlow) {
        statusEl.classList.add('status-in-progress');
        songCard.classList.add('song-in-progress');
        iconEl.classList.add('fa-clock');
    } else {
        statusEl.classList.add('status-not-started');
        iconEl.classList.add('fa-circle');
    }
}

// Reset all progress
function resetProgress() {
    // Clear localStorage
    localStorage.removeItem('guitarRoadmapProgress');
    
    // Reload the page
    window.location.reload();
}

// Save all progress
function saveAllProgress() {
    // Just trigger localStorage save (nothing to do as we save incrementally)
    
    // Show success message
    showToast('All progress has been saved!');
}

// Update overall progress display
function updateProgress() {
    const allProgress = JSON.parse(localStorage.getItem('guitarRoadmapProgress')) || {};
    
    // Count completed songs by phase
    let completedSongs = 0;
    let completedByPhase = {
        phase1: 0,
        phase2: 0,
        phase3: 0,
        phase4: 0
    };
    
    // Go through each song in the data
    for (const phase in songsData) {
        songsData[phase].forEach(song => {
            if (allProgress[song.id]?.mastered) {
                completedSongs++;
                completedByPhase[phase]++;
            }
        });
    }
    
    // Calculate overall progress percentage
    const totalSongs = 16; // 4 songs per phase, 4 phases
    const progressPercentage = Math.round((completedSongs / totalSongs) * 100);
    
    // Update progress bar
    const progressBar = document.getElementById('overall-progress');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.textContent = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', progressPercentage);
    
    // Update progress stats
    document.getElementById('songs-completed').textContent = completedSongs;
    document.getElementById('phase1-progress').textContent = completedByPhase.phase1;
    document.getElementById('phase2-progress').textContent = completedByPhase.phase2;
    document.getElementById('phase3-progress').textContent = completedByPhase.phase3;
    document.getElementById('phase4-progress').textContent = completedByPhase.phase4;
}

// Show a toast notification
function showToast(message) {
    // Create toast element
    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-3';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    
    // Create toast content
    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas fa-check-circle me-2"></i> ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(toastEl);
    
    // Initialize and show toast
    const toast = new bootstrap.Toast(toastEl, {
        delay: 3000,
        autohide: true
    });
    toast.show();
    
    // Remove from DOM after hiding
    toastEl.addEventListener('hidden.bs.toast', function() {
        document.body.removeChild(toastEl);
    });
}

// Re-attach event listeners after dynamic content updates
function reattachEventListeners() {
    // Song detail view buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const songId = this.getAttribute('data-song-id');
            showSongDetails(songId);
        });
    });
}

// Call setup when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Call setup
    initApp();
    setupEventListeners();
});