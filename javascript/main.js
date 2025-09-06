video = document.querySelector("video");
video_range = document.querySelector(".video_range input");
play_button = document.getElementById("play");
video.volume = 0.75;
select_inp = document.querySelector("select")
volume_but = document.querySelector(".volume");
full_screen = document.querySelector(".fullscreen")
container = document.querySelector(".player")

document.querySelectorAll('input[type="range"]').forEach((inp)=>{
    inp.oninput =()=>{
        follower_path = (inp.value/(inp.getAttribute("maxlength")))*100;
        inp.nextElementSibling.style.cssText = `width:${follower_path}%`;

        if(inp.classList.contains("vol")){
            if(volume_but.classList.contains("muted")){
                last_value = inp.value/100;
            }else{
                last_value = inp.value/100;
                video.volume = inp.value/100;
            }
        }else{
            video.currentTime = (inp.value/100)*video.duration;
        }
    }
});

play.onclick = ()=>{

    if (play_button.className == "play"){
        video.play();
        play_button.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        
        play_button.className = "pause";
    }else if ( play_button.className == "pause"){
        video.pause();
        play_button.innerHTML = `<i class="fa-solid fa-play"></i>`;
        play_button.className = "play";
    }
};

document.querySelectorAll(".adder").forEach((adder)=>{
    adder.onclick = ()=>{
        video.currentTime = video.currentTime + +adder.getAttribute("data-value");
    }
})

video.ontimeupdate = ()=>{
    video_range.value = Math.ceil((video.currentTime/video.duration)*100);
    follower_path = (video_range.value/(video_range.getAttribute("maxlength")))*100;
    video_range.nextElementSibling.style.cssText = `width:${follower_path}%`;
}

select_inp.onchange = ()=>{
    video.playbackRate = +select_inp.value
}

volume_but.onclick =()=>{
    if(volume_but.classList.contains("muted") == false){
        video.volume = 0;
        volume_but.classList.add("muted");
        volume_but.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`
    }else{
        video.volume = last_value;
        volume_but.classList.remove("muted")
        volume_but.innerHTML = `<i class="fa-solid fa-volume-high"></i>`
    }
}

full_screen.onclick = ()=>{
    if (document.fullscreenElement) {
        document.exitFullscreen();

}else{
    container.requestFullscreen()
}
}
