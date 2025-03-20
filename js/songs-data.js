// Guitar learning roadmap song data
const songsData = {
    phase1: [
        {
            id: "smoke-on-the-water",
            title: "Smoke on the Water",
            artist: "Deep Purple",
            difficulty: 1,
            concepts: ["Power chords", "Simple riffs", "Basic rhythm"],
            description: "An iconic rock riff that's perfect for beginners. The main riff uses simple power chords played on the 4th and 5th strings.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=smoke+on+the+water",
            videoTutorial: "https://www.youtube.com/results?search_query=smoke+on+the+water+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Power chords", "Simple rhythm", "String muting"],
            tabTips: "The tab is simple to follow with just a few notes. Pay attention to the timing between each power chord.",
            challengingParts: "Getting the exact Deep Purple tone can be tricky. Focus on playing the notes cleanly first.",
            practiceTips: "Focus on clean string muting and consistent timing. Start slowly and gradually build up speed."
        },
        {
            id: "seven-nation-army",
            title: "Seven Nation Army",
            artist: "The White Stripes",
            difficulty: 1,
            concepts: ["Single-note riffs", "Octaves", "Basic dynamics"],
            description: "A modern classic with a simple yet effective riff that's perfect for beginners to develop single-note playing.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=seven+nation+army",
            videoTutorial: "https://www.youtube.com/results?search_query=seven+nation+army+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Single note playing", "Octave changes", "Simple rhythm"],
            tabTips: "This tab is straightforward with minimal position changes. It's played entirely on the low E string.",
            challengingParts: "The tempo can be challenging to maintain consistently throughout.",
            practiceTips: "Work on maintaining a steady rhythm and clean transitions. Use a metronome to keep your timing consistent."
        },
        {
            id: "for-whom-the-bell-tolls",
            title: "For Whom the Bell Tolls (Intro)",
            artist: "Metallica",
            difficulty: 2,
            concepts: ["Palm muting", "Downpicking", "Power chords"],
            description: "The intro to this Metallica classic is perfect for learning palm muting and developing right-hand technique.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=for+whom+the+bell+tolls",
            videoTutorial: "https://www.youtube.com/results?search_query=for+whom+the+bell+tolls+intro+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Palm muting", "Downpicking", "Power chords"],
            tabTips: "The tab indicates palm muted sections with 'PM' markings. Pay close attention to these.",
            challengingParts: "Maintaining consistent downpicking technique throughout can be tiring for beginners.",
            practiceTips: "Focus on consistent downpicking and muting technique. Start slowly to build endurance."
        },
        {
            id: "love-me-do",
            title: "Love Me Do",
            artist: "The Beatles",
            difficulty: 1,
            concepts: ["Open chords", "Chord transitions", "Strumming patterns"],
            description: "A simple Beatles song perfect for learning basic open chords and strumming patterns.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=love+me+do",
            videoTutorial: "https://www.youtube.com/results?search_query=love+me+do+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Open chords", "Basic strumming", "Simple chord progressions"],
            tabTips: "The tab shows chord diagrams and strumming indications. Focus on the rhythm notation.",
            challengingParts: "Switching between G and C chords smoothly can be tricky for absolute beginners.",
            practiceTips: "Work on clean chord changes and consistent strumming. Practice changing between chords without playing to build muscle memory."
        }
    ],
    
    phase2: [
        {
            id: "breaking-the-law",
            title: "Breaking the Law",
            artist: "Judas Priest",
            difficulty: 2,
            concepts: ["Power chord progressions", "Palm muting variations", "Simple lead lines"],
            description: "A straightforward metal classic that's great for developing palm muting technique and power chord progressions.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=breaking+the+law",
            videoTutorial: "https://www.youtube.com/results?search_query=breaking+the+law+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Power chord progressions", "Palm muting", "Simple lead lines"],
            tabTips: "The rhythm notation alongside the tab helps understand the timing. Watch for the alternating palm muting sections.",
            challengingParts: "The quick transitions between open and muted sections require precise right-hand control.",
            practiceTips: "Focus on the dynamics between the muted and open sections. Practice with a metronome to keep tight timing."
        },
        {
            id: "iron-man",
            title: "Iron Man",
            artist: "Black Sabbath",
            difficulty: 2,
            concepts: ["Note bending", "Vibrato", "Heavy riffs"],
            description: "This Black Sabbath classic introduces note bending and vibrato technique alongside heavy power chord riffs.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=iron+man",
            videoTutorial: "https://www.youtube.com/results?search_query=iron+man+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Note bending", "Vibrato", "Power chord riffs"],
            tabTips: "The tab notation for bends (indicated with a curved arrow) shows exactly how far to bend each note.",
            challengingParts: "Getting consistent pitch with the bends requires practice and ear training.",
            practiceTips: "Develop consistent bend pitch and controlled vibrato. Start with small bends before attempting full-step bends."
        },
        {
            id: "bad-moon-rising",
            title: "Bad Moon Rising",
            artist: "Creedence Clearwater Revival",
            difficulty: 2,
            concepts: ["Full chord shapes", "Faster chord changes", "Rhythm variations"],
            description: "A CCR classic that helps develop faster chord changes and consistent strumming patterns.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=bad+moon+rising",
            videoTutorial: "https://www.youtube.com/results?search_query=bad+moon+rising+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Full chord shapes", "Strumming patterns", "Chord transitions"],
            tabTips: "The tab includes detailed strumming patterns and chord transitions. Pay attention to the down and up strokes.",
            challengingParts: "Maintaining the steady eighth-note strumming pattern while changing chords quickly.",
            practiceTips: "Work on maintaining rhythm while changing chords. Practice transitions between the most difficult chord pairs separately."
        },
        {
            id: "come-as-you-are",
            title: "Come As You Are",
            artist: "Nirvana",
            difficulty: 2,
            concepts: ["Hammer-ons", "Pull-offs", "Simple lead playing"],
            description: "This Nirvana hit introduces hammer-ons and pull-offs in the context of a recognizable lead riff.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=come+as+you+are",
            videoTutorial: "https://www.youtube.com/results?search_query=come+as+you+are+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Hammer-ons", "Pull-offs", "Clean guitar tone"],
            tabTips: "The tab clearly notates the hammer-ons (h) and pull-offs (p). Make sure you understand these symbols.",
            challengingParts: "Making the hammer-ons and pull-offs sound smooth and even in volume with the picked notes.",
            practiceTips: "Focus on making the hammer-ons and pull-offs sound clean. Practice each phrase slowly before combining them."
        }
    ],
    
    phase3: [
        {
            id: "californication",
            title: "Californication (Main Riff)",
            artist: "Red Hot Chili Peppers",
            difficulty: 3,
            concepts: ["Arpeggiated patterns", "Position shifts", "Chord-based melody"],
            description: "The main riff from this RHCP hit helps develop arpeggiated picking and position shifts on the fretboard.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=californication",
            videoTutorial: "https://www.youtube.com/results?search_query=californication+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Arpeggiated patterns", "Position shifts", "Melodic playing"],
            tabTips: "The tab shows finger positioning for efficient playing. Pay attention to these suggestions.",
            challengingParts: "The position shifts need to be smooth and in time without interrupting the flow of the melody.",
            practiceTips: "Work on smooth position changes and consistent timing. Focus on minimizing movement between positions."
        },
        {
            id: "back-in-black",
            title: "Back in Black",
            artist: "AC/DC",
            difficulty: 3,
            concepts: ["Tight rhythm playing", "Muted strumming", "Blues-based riffs"],
            description: "This AC/DC classic helps develop tight rhythm playing with a focus on muted strumming techniques.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=back+in+black",
            videoTutorial: "https://www.youtube.com/results?search_query=back+in+black+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Tight rhythm playing", "Muted strumming", "Blues-based riffs"],
            tabTips: "The tab includes detailed rhythm notation with strumming directions. Pay attention to the accented notes.",
            challengingParts: "Getting the precise feel and groove of the rhythm requires good timing and right-hand control.",
            practiceTips: "Focus on the feel and groove of the rhythm. Listen carefully to the original to get the exact timing."
        },
        {
            id: "basket-case",
            title: "Basket Case",
            artist: "Green Day",
            difficulty: 3,
            concepts: ["Faster chord progressions", "Palm-muted power chords", "Punk rhythm"],
            description: "This Green Day hit helps develop faster chord changes and the distinctive palm-muted punk rhythm style.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=basket+case",
            videoTutorial: "https://www.youtube.com/results?search_query=basket+case+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Fast chord changes", "Palm-muted rhythm", "Power chord progressions"],
            tabTips: "The tab shows strumming pattern variations and transitions. Pay special attention to the rhythm notation.",
            challengingParts: "Maintaining the fast-paced strumming pattern while changing chords requires good coordination.",
            practiceTips: "Build speed gradually while maintaining clarity. Break down difficult section into smaller chunks."
        },
        {
            id: "sweet-child-o-mine",
            title: "Sweet Child O' Mine (Intro Riff)",
            artist: "Guns N' Roses",
            difficulty: 3,
            concepts: ["String skipping", "Melody playing", "Alternate picking"],
            description: "The iconic intro riff helps develop string skipping technique and melody playing across multiple strings.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=sweet+child+o+mine",
            videoTutorial: "https://www.youtube.com/results?search_query=sweet+child+o+mine+intro+guitar+tutorial",
            practiceNotes: "",
            techniques: ["String skipping", "Alternate picking", "Melodic playing"],
            tabTips: "The tab includes detailed picking directions and finger positioning. These are crucial for playing efficiently.",
            challengingParts: "The string skipping requires precise right-hand control and the speed can be challenging.",
            practiceTips: "Start slowly and gradually build speed, focus on clean string transitions. Practice string skipping separately."
        }
    ],
    
    phase4: [
        {
            id: "wanted-dead-or-alive",
            title: "Wanted Dead or Alive (Intro)",
            artist: "Bon Jovi",
            difficulty: 4,
            concepts: ["Fingerpicking", "Chord arpeggios", "Dynamic control"],
            description: "The intro to this Bon Jovi classic introduces fingerpicking technique and chord arpeggios.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=wanted+dead+or+alive",
            videoTutorial: "https://www.youtube.com/results?search_query=wanted+dead+or+alive+intro+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Fingerpicking", "Chord arpeggios", "Dynamic control"],
            tabTips: "The fingerpicking patterns are clearly notated. Pay attention to which fingers pluck which strings.",
            challengingParts: "Coordinating the right-hand fingerpicking pattern while changing chords with the left hand.",
            practiceTips: "Practice each pattern slowly before combining them. Focus on consistent volume between fingers."
        },
        {
            id: "enter-sandman",
            title: "Enter Sandman",
            artist: "Metallica",
            difficulty: 4,
            concepts: ["Tremolo picking", "Palm muting variations", "Power chord progressions"],
            description: "This Metallica hit helps develop tremolo picking technique and complex palm muting patterns.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=enter+sandman",
            videoTutorial: "https://www.youtube.com/results?search_query=enter+sandman+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Tremolo picking", "Palm muting variations", "Power chord progressions"],
            tabTips: "The tab has clear indication of tempo changes and picking techniques. Note the tremolo picking sections.",
            challengingParts: "Maintaining consistent tremolo picking speed and the endurance required for the song.",
            practiceTips: "Focus on right-hand stamina and consistent muting. Practice short bursts of tremolo picking at first."
        },
        {
            id: "smells-like-teen-spirit",
            title: "Smells Like Teen Spirit",
            artist: "Nirvana",
            difficulty: 3,
            concepts: ["Dynamics", "Distortion control", "Power chord variations"],
            description: "This grunge anthem helps develop dynamic control and the ability to switch between clean and distorted tones.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=smells+like+teen+spirit",
            videoTutorial: "https://www.youtube.com/results?search_query=smells+like+teen+spirit+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Dynamic control", "Distortion management", "Power chord progressions"],
            tabTips: "The tab shows section changes and dynamic notations. Pay attention to the verse/chorus transitions.",
            challengingParts: "Getting the right feel for the dynamics between the quiet verse and loud chorus sections.",
            practiceTips: "Practice the transitions between verse and chorus for smooth changes. Focus on right hand dynamics."
        },
        {
            id: "sunshine-of-your-love",
            title: "Sunshine of Your Love",
            artist: "Cream",
            difficulty: 3,
            concepts: ["Blues scale", "Riff-based playing", "Basic lead techniques"],
            description: "This Cream classic introduces blues scale playing and serves as a foundation for blues-rock lead guitar.",
            tabLink: "https://www.ultimate-guitar.com/search.php?search_type=title&value=sunshine+of+your+love",
            videoTutorial: "https://www.youtube.com/results?search_query=sunshine+of+your+love+guitar+tutorial",
            practiceNotes: "",
            techniques: ["Blues scale", "Riff-based playing", "Basic lead playing"],
            tabTips: "The tab includes scale diagrams and note-by-note breakdown. Look for the blues scale pattern.",
            challengingParts: "Getting the bluesy feel and timing right, especially with the signature bend.",
            practiceTips: "Focus on the feel and timing of the blues phrasing. Listen to the original to capture the bluesy feel."
        }
    ]
};