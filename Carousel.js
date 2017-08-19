var SlideShows = {
    
    slideShow: function (Slides, slideInterval){
        this.slideIndex = -1;
        this.slides = Slides;
        this.isPlaying = true;
        this.timing = 0;
        this.interval = slideInterval;

        this.pause = function () {
            if(this.isPlaying)
            {
                clearInterval(this.timing);
                this.isPlaying = false;
            }
        };

        this.intervalFunction = function () {
            $(this.slides[this.slideIndex]).fadeOut(500);
            this.slideIndex++;
            if (this.slideIndex >= this.slides.length) { this.slideIndex = 0 }
            setTimeout(function () {
                $(this.slides[this.slideIndex]).fadeIn(this.interval / 3);
            }.bind(this), this.interval / 6);
        }.bind(this);

        this.play = function () {
            if (this.isPlaying)
                return;
            this.intervalFunction();
            this.timing = setInterval(this.intervalFunction, this.interval);
            this.isPlaying = true;
        }.bind(this);
    }
};
