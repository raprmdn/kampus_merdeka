$("document").ready(function () {
    const audioKambing = new Audio('./assets/audios/kambing-sound.mp3')
    const audioMonyet = new Audio('./assets/audios/monyet-sound.mp3')
    const audioSapi = new Audio('./assets/audios/sapi-sound.mp3')
    const audioSerigala = new Audio('./assets/audios/serigala-sound.mp3')
    const audioAnjing = new Audio('./assets/audios/anjing-sound.mp3')
    const audioKucing = new Audio('./assets/audios/kucing-sound.mp3')

    $('#kambing').click(function () {
        $(this).removeClass('blur')
        playAudio(audioKambing)
    }).mouseleave(function () {
        $(this).addClass('blur')
        stopAudio(audioKambing)
    })

    $('#monyet').click(function () {
        $(this).removeClass('blur')
        playAudio(audioMonyet)
    }).mouseleave(function () {
        $(this).addClass('blur')
        stopAudio(audioMonyet)
    })

    $('#sapi').click(function () {
        $(this).removeClass('blur')
        playAudio(audioSapi)
    }).mouseleave(function () {
        $(this).addClass('blur')
        stopAudio(audioSapi)
    })

    $('#serigala').click(function () {
        $(this).removeClass('blur')
        playAudio(audioSerigala)
    }).mouseleave(function () {
        $(this).addClass('blur')
        stopAudio(audioSerigala)
    })

    $('#anjing').click(function () {
        $(this).removeClass('blur')
        playAudio(audioAnjing)
    }).mouseleave(function () {
        $(this).addClass('blur')
        stopAudio(audioAnjing)
    })

    $('#kucing').click(function () {
        $(this).removeClass('blur')
        playAudio(audioKucing)
    }).mouseleave(function () {
        $(this).addClass('blur')
        stopAudio(audioKucing)
    })

    function playAudio(audio) {
        audio.play()
        audio.currentTime = 0
    }

    function stopAudio(audio) {
        audio.pause()
    }

});