// dictionary of tabla sounds
var tablaSounds = { 'Dha': 'sounds/Dha.mp3', 'Dhin': 'sounds/Dhin.mp3', 'Ge': 'sounds/Ge.mp3', 'Ke': 'sounds/Ke.mp3', 'Na': 'sounds/Na.mp3', 'Ti': 'sounds/Re.mp3', 'Re': 'sounds/Re.mp3', 'Ta': 'sounds/Ta.mp3', 'Te': 'sounds/Te.mp3', 'Tin': 'sounds/Tin.mp3', 'Tun': 'sounds/Tun.mp3', 'Dhe': 'sounds/Dhe.mp3', '-': 'sounds/Silence.mp3' }

var pianosounds = {
    '\'S': 'sounds/piano_mp3/C3.mp3', '\'r': 'sounds/piano_mp3/Db3.mp3', '\'R': 'sounds/piano_mp3/D3.mp3', '\'g': 'sounds/piano_mp3/Eb3.mp3', '\'G': 'sounds/piano_mp3/E3.mp3', '\'m': 'sounds/piano_mp3/F3.mp3', '\'M': 'sounds/piano_mp3/Gb3.mp3', '\'P': 'sounds/piano_mp3/G3.mp3', '\'d': 'sounds/piano_mp3/Ab3.mp3', '\'D': 'sounds/piano_mp3/A3.mp3', '\'n': 'sounds/piano_mp3/Bb3.mp3', '\'N': 'sounds/piano_mp3/B3.mp3', 'S': 'sounds/piano_mp3/C4.mp3', 'r': 'sounds/piano_mp3/Db4.mp3', 'R': 'sounds/piano_mp3/D4.mp3', 'g': 'sounds/piano_mp3/Eb4.mp3', 'G': 'sounds/piano_mp3/E4.mp3', 'm': 'sounds/piano_mp3/F4.mp3', 'M': 'sounds/piano_mp3/Gb4.mp3', 'P': 'sounds/piano_mp3/G4.mp3', 'd': 'sounds/piano_mp3/Ab4.mp3', 'D': 'sounds/piano_mp3/A4.mp3', 'n': 'sounds/piano_mp3/Bb4.mp3', 'N': 'sounds/piano_mp3/B4.mp3', 'S\'': 'sounds/piano_mp3/C5.mp3', 'r\'': 'sounds/piano_mp3/Db5.mp3', 'R\'': 'sounds/piano_mp3/D5.mp3', 'g\'': 'sounds/piano_mp3/Eb5.mp3', 'G\'': 'sounds/piano_mp3/E5.mp3', 'm\'': 'sounds/piano_mp3/F5.mp3', 'M\'': 'sounds/piano_mp3/Gb5.mp3', 'P\'': 'sounds/piano_mp3/G5.mp3', 'd\'': 'sounds/piano_mp3/Ab5.mp3', 'D\'': 'sounds/piano_mp3/A5.mp3', 'n\'': 'sounds/piano_mp3/Bb5.mp3', 'N\'': 'sounds/piano_mp3/B5.mp3', 'S\'\'': 'sounds/piano_mp3/C6.mp3', '-': 'sounds/piano_mp3/Silence.mp3'
}

//  bandish data
var bandish = {
    'Khamboji': {
        sthayi: "m -,P G m S R m P D P,D <br>  R m P D S' R' S' n D P <br>  D S' n D P D m G m S <br>", 
        antara: "m P n S' P D S' R' G' S'   <br>  R' m' G' m',S' R' n D,n D S' S'  <br> S' n D P P R m P D,n D  <br> n D P D m P G G m S",
        composer: "Ramrang",
        lyrics:"Sthaayi: Baajat aaj kahan, daf mridanga changa jhaanj jhankaare <br> Antara: Galiyana galiyanaagar sugandha bhare, Raamrang kaake dwara aaj badhaavare",
        taal:'Jhaptaal (10)'
    },
    'Yaman': {
        sthayi: "N D P - R - S S <br> G R G G - - G P <br> G P G P M D P P <br> N D P M R R S S <br> N - P - R - S -",
        antara: "P P S' S' S' - S' S' <br> S' - S' D N R' S' S' <br> N R' G' R' S' N P P <br> N - P - R R S S",
        composer: "Traditional",
        lyrics:"Ari Aeri aali piya bina, sakhi kala na parat mohe ghadi pala china dina <br> Jaba te piya parades gavan kina, ratiya katat mohe taare gina gina",
        taal:'Teentaal (16)'
    },
    'Purvi': {
        sthayi: "G G M M G r G M <br>P d P M G m G - <br> M - G r - S S S <br> 'N r G G r S S S <br> 'N 'N S r G G M d <br> N r' N d P M G,m G",
        antara: "M M G G M - d d <br> S' S' - S' - S' r' S' <br> N r' G M G' r' S' N <br> r' N d N d M M G <br> G m G - M d N S'<br> N r' N d P M G,m r,G",
        composer: "Traditional",
        lyrics: "Sthayi: Aeri Ai mein ko saba sukha deeno, itha-puta aur ana-dhana Laxmi, kirapa kar Govinda ranga deeno.<br> Antaraa: Agama apaarana juga nistaarana, kripa karana, dukha haran, sukh sadana saba vaatana mein laayaka keeno.",
        taal: 'Teentaal (16)'
    },
    'Malkauns_1': {
        sthayi: " - - - - - - - - - - m g m d <br> d - m g S g m g - S 'd 'n S m <br> m m - g m d m g - S m g m d <br> - - - - - - - - - - m g m d <br> d - m g S g m g - S 'd 'n S m <br> m m - g m d m g - S m g m d <br> - - - - - - - - - - - - - -<br>",
        antara: "g m - d - n n S' - - g' - S' - <br> S' g' m' g' S' S' - d d n d - m - <br> S' S' - n d m g m g S m g m d",
        composer: "Traditional",
        lyrics: "Sthayi:Ghara mere aayo ree aaja kaanha sughar khelan faaga.<br> Antaraa: Sanga sakhaa leenhe hori ke rang bheene dhan hai ri bhaaga.",
        taal: 'Dhamaar (14)'
    },
    'Malkauns_2': {
        sthayi: " - - - - - - - - - - m g m d <br> d - m g S g m g - S 'd 'n S m <br> m m - g m d m g - S m g m d <br> - - - - - - - - - - m g m d <br> d - m g S g m g - S 'd 'n S m <br> m m - g m d m g - S m g m d <br> - - - - - - - - - - - - - -<br>",
        antara: "g m - d - n n S' - - g' - S' - <br> S' g' m' g' S' S' - d d n d - m - <br> S' S' - n d m g m g S m g m d",
        composer: "Traditional",
        lyrics: "Sthayi:Ghara mere aayo ree aaja kaanha sughar khelan faaga.<br> Antaraa: Sanga sakhaa leenhe hori ke rang bheene dhan hai ri bhaaga.",
        taal: 'Deepchandi (14)'
    }        
}

// Preload audio files
var preloadedSounds = {};
for (var key in tablaSounds) {
    var audio = new Audio(tablaSounds[key]);
    preloadedSounds[key] = audio;
}

var preloadedPiano = {};
for (var key in pianosounds) {
    var audio = new Audio(pianosounds[key]);
    preloadedPiano[key] = audio;
}
// dictionary of taals
var Taals = {
    'Dadra (6)': ['Dha', 'Dhin', 'Na', 'Dha', 'Tin', 'Na'],
    'Rupak (7)': ['Tin', 'Tin', 'Na', 'Dhin', 'Na', 'Dhin', 'Na'],
    'Keherwa (8)': ['Dha', 'Ge', 'Na', 'Ti', 'Na', 'Ke', 'Dhin', 'Na'],
    'Bhajani (8)': ['Dhin', 'Na,Dhin', '-,Dhin', 'Na', 'Tin', 'Na,Dhin', '-,Dhin', 'Na'],
    'Jhaptaal (10)': ['Dhin', 'Na', 'Dhin', 'Dhin', 'Na', 'Tin', 'Na', 'Dhin', 'Dhin', 'Na'],
    'Ektaal (12)': ['Dhin', 'Dhin', 'Dha,Ge', 'Te,Re,Ke,Te', 'Tun', 'Na', 'Ke', 'Ta', 'Dha,Ge', 'Te,Re,Ke,Te', 'Dhin', 'Na'],
    'Teentaal (16)': ['Dha', 'Dhin', 'Dhin', 'Na', 'Dha', 'Dhin', 'Dhin', 'Na', 'Dha', 'Tin', 'Tin', 'Na', 'Na', 'Dhin', 'Dhin', 'Na'], 
    'Choutaal (12)': ['Dha', 'Dha', 'Dhin', 'Na', 'Ke,Te', 'Dha', 'Dhin', 'Na', 'Te,Te', 'Ke,Ta', 'Ge,Tin', 'Ge,Te'],
    'Dhamaar (14)': ['Ke', 'Dhe', 'Te', 'Dhe', 'Te', 'Dha', '-', 'Ge', 'Te', 'Re', 'Te', 'Re', 'Ta', '-'],
    'Deepchandi (14)': ['Dha', 'Dhin', '-', 'Dha', 'Dha', 'Tin', '-', 'Ta', 'Tin', '-', 'Dha', 'Dha', 'Dhin', '-'],
    'Jhoomra (14)': ['Dhin', '-,Dha', 'Te,Re,Ke,Te', 'Dhin', 'Dhin', 'Dha,Ge', 'Te,Re,Ke,Te', 'Tin', '-,Ta', 'Te,Re,Ke,Te', 'Dhin', 'Dhin', 'Dha,Ge', 'Te,Re,Ke,Te'],
    'Tilwada (16)': ['Dha', 'Te,Re,Ke,Te', 'Dhin', 'Dhin', 'Dha', 'Dha', 'Tin', 'Tin', 'Ta', 'Te,Re,Ke,Te', 'Dhin', 'Dhin', 'Dha', 'Dha', 'Dhin', 'Dhin']
}

// Function to play a Tabla note
function playTablaNotes(note1) {
    var audio1 = preloadedSounds[note1]; // Use preloaded audio object
    audio1.currentTime = 0; // Rewind audio to the beginning
    audio1.volume = 0.2; // Set volume to 25%
    audio1.play(); // Play first sound

}


// Function to play a Piano note
function playPianoNotes(note1) {
    var audio1 = preloadedPiano[note1]; // Use preloaded audio object
    audio1.currentTime = 0; // Rewind audio to the beginning
    audio1.volume = 1.0; // Set volume to 25%
    audio1.play(); // Play piano sound
}



// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    // add bandish select dropdown to id bandishSelect
    var select = document.getElementById('bandishSelect');
    var defaultBandish = 'Khamboji'; // Set your default bandish here
    for (var key in bandish) { // get all the keys in the bandish dictionary
        var option = document.createElement('option');
        option.textContent = key;
        if (key === defaultBandish) {
            option.selected = true; // Set the default bandish as selected
        }
        select.appendChild(option);
    }

    var selectedbandish = document.getElementById('bandishSelect');
    // Populate the bandish sthayi and antara in the text area
    // Get references to the sthayi and antara text areas
    var sthayiTextArea = document.getElementById('sthayi');
    var antaraTextArea = document.getElementById('antara');
    var taalTextArea = document.getElementById('taal');
    // Set the sthayi and antara text areas
    sthayiTextArea.innerHTML = bandish[selectedbandish.value].sthayi;
    antaraTextArea.innerHTML = bandish[selectedbandish.value].antara;
    taalTextArea.textContent = bandish[selectedbandish.value].taal;

    // Add event listener to update sthayi, antara, and taal when bandish is changed
    selectedbandish.addEventListener('change', function () {
        var selectedValue = selectedbandish.value;
        sthayiTextArea.innerHTML = bandish[selectedValue].sthayi;
        antaraTextArea.innerHTML = bandish[selectedValue].antara;
        taalTextArea.textContent = bandish[selectedValue].taal;
    });


    // create a button to play the selected taal
    var playButton = document.getElementById('playTaalButton');

    // create a button to stop the playback
    var stopButton = document.getElementById('stopTaalButton');

    var stopFlag = false; // Flag to track if stop button is clicked
    var isPlaying = false; // Flag to track if playback is ongoing
    var intervalId;


    // Get references to the bpm buttons and input
    var decreaseBpmButton = document.getElementById('decreaseBpmButton');
    var increaseBpmButton = document.getElementById('increaseBpmButton');
    var bpmInput = document.getElementById('bpm');

    // Add event listener for decreaseBpmButton
    decreaseBpmButton.addEventListener('click', () => {
        let currentBpm = parseInt(bpmInput.value, 10);
        if (!isNaN(currentBpm) && currentBpm > 5) {
            bpmInput.value = currentBpm - 5;
        }
    });

    // Add event listener for increaseBpmButton
    increaseBpmButton.addEventListener('click', () => {
        let currentBpm = parseInt(bpmInput.value, 10);
        if (!isNaN(currentBpm) && currentBpm < 300) {
            bpmInput.value = currentBpm + 5;
        }
    });



    playButton.addEventListener('click', function () {
        if (isPlaying) return; // Do nothing if already playing

        stopFlag = false; // Reset stopFlag when play is clicked
        isPlaying = true; // Set isPlaying to true when playing

        var taal = Taals[taalTextArea.textContent]; // get taal from the taal text area
        // Get score_text by joining the sthayi and antara
        // get updated sthay and antara text

        var score_text = sthayiTextArea.textContent + " " + antaraTextArea.textContent;
        // remove carriage returns from score_text and split by space
        score_text = score_text.replace(/(\r\n|\n|\r)/gm, " ").split(" ");
        // remove empty elements from score_text
        score_text = score_text.filter(function (el) {
            return el != "";
        });
        console.log('score_text \n' + score_text);


        var bpm = document.getElementById('bpm').value;  // get bpm value from input
        var beatduration = (60 / bpm) * 1000; // Calculate duration in milliseconds

        var currentBolIndex = 0;    // Index to keep track of current bol
        var currentSwarasIndex = 0; // Index to keep track of current swara
        var startTime = Date.now(); // Start time of the taal
        var startSTime = Date.now(); // Start time of the taal
        console.log('startTime=' + startTime + ' startSTime=' + startSTime);

        // Flatten the taal array to get all bols with their respective timings
        var allBols = [];
        taal.forEach((matra, mindex) => { // Loop through each matra
            let bols = matra.split(','); // Split the matra to get individual bols if there are multiple
            let bolduration = beatduration / bols.length;
            bols.forEach((bol, bindex) => { // Loop through each bol
                allBols.push({  // Push the bol with its time to the allBols array
                    bol: bol,
                    time: mindex * beatduration + bindex * bolduration,
                    mindex: mindex // Store the mindex with each bol
                });
            });
        });
        //console.log(allBols);
        // Flatten the score_text array to get all swaras with their respective timings
        var allSwaras = [];
        score_text.forEach((swara, sindex) => { // Loop through each swara
            let mols = swara.split(','); // Split the swara to get individual swaras if there are multiple
            let molduration = beatduration / mols.length;
            mols.forEach((mola, mindex) => { // Loop through each mola
                allSwaras.push({  // Push the swara with its time to the allSwaras array
                    mola: mola,
                    time: sindex * beatduration + mindex * molduration,
                    sindex: sindex // Store the sindex with each swara
                });
            });
        }
        );
        console.log(allSwaras);

        var totalBeatsDuration = allSwaras.length * beatduration; // Calculate total duration of the taal to end tablas when swaras end

        // Function to play bols at the correct time
        function playBols() {
            if (stopFlag) {
                isPlaying = false;
                return; // Check stopFlag before playing each note
            }

            var currentBTime = Date.now() - startTime; // Calculate current time
            while (currentBolIndex < allBols.length && allBols[currentBolIndex].time <= currentBTime) {  // Check if the current time is greater than the time of the next bol
                playTablaNotes(allBols[currentBolIndex].bol); // Play the bol
                document.getElementById('mindexDisplay').textContent = (allBols[currentBolIndex].mindex + 1); // Update matra index display

                currentBolIndex++; // Increment the index to move to the next bol
            }

            // Check if the last bol has been played and wait for its duration to complete
            if (currentBolIndex >= allBols.length) { // Check if all bols have been played
                var lastBolTime = allBols[allBols.length - 1].time; // Get the time of the last bol
                var lastBolDuration = beatduration / taal[taal.length - 1].split(',').length; // Calculate duration of the last bol
                if (currentBTime >= lastBolTime + lastBolDuration) {
                    currentBolIndex = 0; // Reset index to start from the beginning
                    startTime = Date.now(); // Reset start time
                }
            }
        
            var currentSTime = Date.now() - startSTime; // Calculate current time

            // Play swaras
            while (currentSwarasIndex < allSwaras.length && allSwaras[currentSwarasIndex].time <= currentSTime) {  // Check if the current time is greater than the time of the next swara
                playPianoNotes(allSwaras[currentSwarasIndex].mola); // Play the swara
                console.log('Swara=' + allSwaras[currentSwarasIndex].mola + ' currentSwarasIndex=' + currentSwarasIndex + ' allSwaras.length=' + allSwaras.length + ' startSTime=' + startSTime + ' currentSTime=' + currentSTime + ' allSwaras[currentSwarasIndex].time=' + allSwaras[currentSwarasIndex].time);
                currentSwarasIndex++; // Increment the index to move to the next swara
            }

            // Check if the last swara has been played and wait for its duration to complete
            if (currentSwarasIndex >= allSwaras.length) { // Check if all swaras have been played
                console.log('End of Swaras');
                var lastSwaraTime = allSwaras[allSwaras.length - 1].time; // Get the time of the last swara
                var lastSwaraDuration = beatduration / score_text[score_text.length - 1].split(',').length; // Calculate duration of the last swara
                if (currentSTime >= lastSwaraTime + lastSwaraDuration) {
                    currentSwarasIndex = 0; // Reset index to start from the beginning
                    startSTime = Date.now(); // Reset start time
                }
            }


        }

        // Start the interval to check and play bols
        intervalId = setInterval(function () {
            if (!stopFlag) { // Check stopFlag before playing bols
                playBols();
            }
        }, 10); // Check every 10ms for precise timing
    });

    // Add event listener for stop button
    stopButton.addEventListener('click', function () {
        stopFlag = true; // Set stopFlag to true to stop playing bols
        clearInterval(intervalId); // Clear the interval
        isPlaying = false; // Set isPlaying to false when stopped
        document.getElementById('mindexDisplay').textContent = "  " // Clear matra index display
    });
});
